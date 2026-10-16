from typing import List, Optional
from pydantic import model_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    PROJECT_NAME: str = "Ritora Real Estate API"
    VERSION: str = "1.0.0"
    API_PREFIX: str = "/api"
    ENVIRONMENT: str = "development"

    # Database
    DATABASE_URL: str = "postgresql+psycopg://postgres:postgres@localhost:5432/ritora_db"

    # JWT Authentication
    JWT_SECRET: str = "dev_secret_key_change_in_production_ritora_luxury_2026_super_secure"
    JWT_ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    REFRESH_TOKEN_EXPIRE_DAYS: int = 14

    # CORS Configuration
    CORS_ORIGINS: List[str] = [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3000",
    ]

    # File Uploads
    UPLOAD_DIR: str = "uploads"
    MAX_IMAGE_SIZE_BYTES: int = 15 * 1024 * 1024  # 15 MB
    MAX_PDF_SIZE_BYTES: int = 35 * 1024 * 1024    # 35 MB

    # Notification & SMTP (Optional)
    SMTP_HOST: Optional[str] = None
    SMTP_PORT: int = 587
    SMTP_USER: Optional[str] = None
    SMTP_PASSWORD: Optional[str] = None
    SMTP_FROM_EMAIL: Optional[str] = "info@ritoraluxerealestate.ae"
    NOTIFICATION_EMAIL: Optional[str] = "info@ritoraluxerealestate.ae"

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=True,
        extra="ignore"
    )

    @model_validator(mode="after")
    def validate_jwt_secret(self) -> "Settings":
        if self.ENVIRONMENT.lower() != "development" and (
            not self.JWT_SECRET.strip()
            or self.JWT_SECRET
            in {
                "dev_secret_key_change_in_production_ritora_luxury_2026_super_secure",
                "replace_with_a_secure_random_secret_in_production",
            }
        ):
            raise ValueError("JWT_SECRET must be set to a secure value outside development")
        return self


settings = Settings()
