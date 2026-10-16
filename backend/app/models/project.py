import uuid
from sqlalchemy import (
    Column,
    String,
    Numeric,
    Text,
    DateTime,
    Date,
    Integer,
    ForeignKey,
    Index,
    CheckConstraint,
)
from sqlalchemy.dialects.postgresql import UUID, JSONB
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.models.base import Base


class Project(Base):
    __tablename__ = "projects"
    __table_args__ = (
        CheckConstraint("status IN ('draft', 'published')", name="ck_projects_status"),
    )

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    title = Column(String(255), nullable=False)
    slug = Column(String(255), unique=True, index=True, nullable=False)
    developer = Column(String(150), index=True, nullable=False)
    location = Column(String(200), index=True, nullable=False)
    submarket = Column(String(200), nullable=True)

    starting_price = Column(Numeric(14, 2), nullable=False, default=0.0)
    currency = Column(String(10), nullable=False, default="AED")
    property_types = Column(JSONB, nullable=False, default=list)  # e.g. ["Apartments", "Villas"]

    handover_quarter = Column(String(20), nullable=True)  # e.g. "Q3"
    handover_year = Column(Integer, nullable=True)        # e.g. 2027
    handover_date = Column(Date, nullable=True)

    overview = Column(Text, nullable=True)  # Clean sanitized HTML
    payment_plan = Column(JSONB, nullable=False, default=list)  # [{ milestone, percentage, note }]
    amenities = Column(JSONB, nullable=False, default=list)     # [{ name, icon }]
    location_highlights = Column(JSONB, nullable=False, default=list)  # [{ place, duration }]

    permit_number = Column(String(100), nullable=True)
    permit_details = Column(Text, nullable=True)

    seo_title = Column(String(255), nullable=True)
    seo_description = Column(Text, nullable=True)
    og_image = Column(String(500), nullable=True)

    cover_media_id = Column(
        UUID(as_uuid=True),
        ForeignKey("media.id", ondelete="SET NULL", use_alter=True, name="fk_projects_cover_media_id"),
        nullable=True,
    )
    status = Column(String(20), nullable=False, default="draft", index=True)  # "draft" | "published"
    badge = Column(String(100), nullable=True)

    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)
    published_at = Column(DateTime(timezone=True), nullable=True)

    # Relationships
    media = relationship(
        "Media",
        back_populates="project",
        cascade="all, delete-orphan",
        foreign_keys="Media.project_id",
        order_by="Media.sort_order",
    )
    cover_media = relationship("Media", foreign_keys=[cover_media_id], post_update=True)
    enquiries = relationship("Enquiry", back_populates="project", cascade="all, delete-orphan")

    def __repr__(self):
        return f"<Project {self.title} ({self.slug})>"

