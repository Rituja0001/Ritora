import uuid
from sqlalchemy import (
    Column,
    String,
    BigInteger,
    Integer,
    Boolean,
    DateTime,
    ForeignKey,
    Index,
    CheckConstraint,
)
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.models.base import Base


class Media(Base):
    __tablename__ = "media"
    __table_args__ = (
        CheckConstraint("kind IN ('image', 'floorplan', 'brochure')", name="ck_media_kind"),
    )

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    project_id = Column(
        UUID(as_uuid=True),
        ForeignKey("projects.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    kind = Column(String(20), nullable=False)  # "image" | "floorplan" | "brochure"
    url = Column(String(500), nullable=False)
    original_filename = Column(String(255), nullable=False)
    mime_type = Column(String(100), nullable=False)
    size = Column(BigInteger, nullable=False)

    label = Column(String(150), nullable=True)  # For floorplans, e.g. "1BR – 750 sqft"
    sort_order = Column(Integer, nullable=False, default=0)
    is_cover = Column(Boolean, nullable=False, default=False)

    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)

    # Relationships
    project = relationship("Project", back_populates="media", foreign_keys=[project_id])

    def __repr__(self):
        return f"<Media {self.kind} ({self.original_filename})>"

