from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from uuid import UUID

from app.core.database import get_db
from app.api.dependencies import get_current_admin
from app.models.enquiry import Enquiry
from app.models.user import User
from app.schemas.enquiry import EnquiryCreate, EnquiryResponse, NewsletterSubscribe
from app.core.email import send_notification_email

router = APIRouter(prefix="/enquiries", tags=["Enquiries & Newsletter"])


@router.post("", response_model=EnquiryResponse, status_code=status.HTTP_201_CREATED)
def submit_enquiry(payload: EnquiryCreate, db: Session = Depends(get_db)):
    """
    Public consultation / property enquiry / listing submission.
    Saves to database and attempts notification email to info@ritoraluxerealestate.ae.
    """
    if not payload.consent:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail="Privacy policy consent must be explicitly accepted."
        )

    # Format message with optional metadata (role, budget, timeframe)
    full_message = payload.message
    meta_parts = []
    if payload.role:
        meta_parts.append(f"Role: {payload.role}")
    if payload.budget:
        meta_parts.append(f"Budget: {payload.budget}")
    if payload.timeframe:
        meta_parts.append(f"Timeframe: {payload.timeframe}")
    if meta_parts:
        full_message += f"\n\n[Specifications: {', '.join(meta_parts)}]"

    enquiry = Enquiry(
        name=payload.name,
        email=payload.email,
        phone=payload.phone,
        message=full_message,
        is_read=False,
    )
    db.add(enquiry)
    db.commit()
    db.refresh(enquiry)

    # Trigger notification email (non-blocking if SMTP not configured)
    subject = f"New Consultation Enquiry from {payload.name}"
    text = (
        f"New Ritora inquiry received:\n\n"
        f"Name: {payload.name}\n"
        f"Email: {payload.email}\n"
        f"Phone: {payload.phone}\n"
        f"Specifications: {', '.join(meta_parts)}\n\n"
        f"Message:\n{payload.message}\n\n"
        f"Submission ID: {enquiry.id}"
    )
    send_notification_email(subject, text)

    return enquiry


@router.post("/newsletter", status_code=status.HTTP_200_OK)
def subscribe_newsletter(payload: NewsletterSubscribe, db: Session = Depends(get_db)):
    """
    Public newsletter briefing subscription.
    Validates mandatory consent, persists record in database, and notifies admin.
    """
    if not payload.consent:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail="Consent to the privacy policy is required to subscribe."
        )

    # Persist subscription in database
    existing = db.query(Enquiry).filter(
        Enquiry.email == payload.email,
        Enquiry.name == "Newsletter Subscriber"
    ).first()

    if not existing:
        sub_record = Enquiry(
            name="Newsletter Subscriber",
            email=payload.email,
            phone="N/A",
            message="Subscribed to Ritora Private Property Briefing (Privacy Consent: Explicitly Accepted)",
            is_read=False,
        )
        db.add(sub_record)
        db.commit()

    # Trigger notification email
    subject = f"New Property Briefing Subscription: {payload.email}"
    text = (
        f"New newsletter subscriber registered on Ritora Luxe Real Estate website:\n\n"
        f"Email: {payload.email}\n"
        f"Consent: Explicitly Accepted\n"
    )
    send_notification_email(subject, text)

    return {"status": "success", "message": "Subscription confirmed", "email": payload.email}


@router.get("", response_model=List[EnquiryResponse])
def list_enquiries(
    db: Session = Depends(get_db),
    _current_admin: User = Depends(get_current_admin),
):
    """
    Protected Admin route to list all submitted customer inquiries.
    """
    return db.query(Enquiry).order_by(Enquiry.created_at.desc()).all()


@router.patch("/{enquiry_id}/read", response_model=EnquiryResponse)
def mark_enquiry_read(
    enquiry_id: UUID,
    db: Session = Depends(get_db),
    _current_admin: User = Depends(get_current_admin),
):
    """
    Protected Admin route to toggle enquiry read status.
    """
    enquiry = db.query(Enquiry).filter(Enquiry.id == enquiry_id).first()
    if not enquiry:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Enquiry record not found"
        )
    enquiry.is_read = not enquiry.is_read
    db.commit()
    db.refresh(enquiry)
    return enquiry
