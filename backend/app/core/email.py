import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from app.core.config import settings

def send_notification_email(subject: str, text_content: str, html_content: str = None) -> bool:
    """
    Sends notification email to settings.NOTIFICATION_EMAIL (info@ritoraluxerealestate.ae).
    Returns True if sent, False if SMTP not configured or delivery error (non-blocking).
    """
    if not settings.SMTP_HOST or not settings.SMTP_USER or not settings.SMTP_PASSWORD:
        # SMTP not configured; safe non-blocking return
        return False

    try:
        msg = MIMEMultipart("alternative")
        msg["Subject"] = subject
        msg["From"] = settings.SMTP_FROM_EMAIL or "info@ritoraluxerealestate.ae"
        msg["To"] = settings.NOTIFICATION_EMAIL or "info@ritoraluxerealestate.ae"

        msg.attach(MIMEText(text_content, "plain"))
        if html_content:
            msg.attach(MIMEText(html_content, "html"))

        with smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT, timeout=10) as server:
            server.starttls()
            server.login(settings.SMTP_USER, settings.SMTP_PASSWORD)
            server.send_message(msg)
        return True
    except Exception as e:
        # Log delivery error without interrupting request
        print(f"[Email Notification Error]: {e}")
        return False

