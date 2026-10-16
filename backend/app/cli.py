import argparse
from getpass import getpass

from sqlalchemy.exc import IntegrityError

from app.core.database import SessionLocal
from app.core.security import hash_password
from app.models.user import User


def create_admin(email: str) -> None:
    password = getpass("Password: ")
    confirmation = getpass("Confirm password: ")
    if password != confirmation:
        raise SystemExit("Passwords do not match.")
    if not password:
        raise SystemExit("Password must not be empty.")

    db = SessionLocal()
    try:
        if db.query(User).filter(User.email == email).first():
            raise SystemExit(f"An account for {email} already exists.")
        db.add(User(email=email, password_hash=hash_password(password), role="admin"))
        db.commit()
    except IntegrityError as exc:
        db.rollback()
        raise SystemExit("Could not create admin; the email may already exist.") from exc
    finally:
        db.close()
    print(f"Admin account created for {email}.")


def main() -> None:
    parser = argparse.ArgumentParser(description="Ritora backend administration")
    subparsers = parser.add_subparsers(dest="command", required=True)
    admin_parser = subparsers.add_parser("create-admin", help="Create an admin account")
    admin_parser.add_argument("--email", required=True)
    args = parser.parse_args()

    if args.command == "create-admin":
        create_admin(args.email)


if __name__ == "__main__":
    main()
