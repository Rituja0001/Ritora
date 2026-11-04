from pydantic import BaseModel, EmailStr, Field, ConfigDict
from typing import Optional
from datetime import datetime
from uuid import UUID

class EnquiryCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=200)
    email: EmailStr
    phone: str = Field(..., min_length=5, max_length=50)
    message: str = Field(..., min_length=2)
    role: Optional[str] = "Investor"
    budget: Optional[str] = None
    timeframe: Optional[str] = None
    consent: bool = Field(..., description="Privacy policy consent is required and must be accepted")

class EnquiryResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: UUID
    name: str
    email: str
    phone: str
    message: str
    is_read: bool
    created_at: datetime

class NewsletterSubscribe(BaseModel):
    email: EmailStr
    consent: bool = Field(..., description="Consent must be explicitly accepted")
