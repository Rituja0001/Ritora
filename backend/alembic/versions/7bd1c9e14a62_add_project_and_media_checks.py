"""Add project status and media kind check constraints.

Revision ID: 7bd1c9e14a62
Revises: 52623bf6e355
"""
from typing import Sequence, Union

from alembic import op


revision: str = "7bd1c9e14a62"
down_revision: Union[str, Sequence[str], None] = "52623bf6e355"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_check_constraint(
        "ck_projects_status",
        "projects",
        "status IN ('draft', 'published')",
    )
    op.create_check_constraint(
        "ck_media_kind",
        "media",
        "kind IN ('image', 'floorplan', 'brochure')",
    )


def downgrade() -> None:
    op.drop_constraint("ck_media_kind", "media", type_="check")
    op.drop_constraint("ck_projects_status", "projects", type_="check")
