from datetime import timedelta
from types import SimpleNamespace
from uuid import uuid4
import pytest
from fastapi.testclient import TestClient

from app.core.database import get_db
from app.core.security import create_access_token, hash_password
from app.main import app
from app.models.enquiry import Enquiry

class FakeEnquiryQuery:
    def __init__(self, enquiries):
        self.enquiries = enquiries

    def filter(self, *criteria):
        return self

    def order_by(self, *criteria):
        return self

    def first(self):
        return self.enquiries[0] if self.enquiries else None

    def all(self):
        return self.enquiries

class FakeSessionWithEnquiries:
    def __init__(self, user, enquiries=None):
        self.user = user
        self.enquiries = enquiries or []

    def query(self, model):
        if model.__name__ == "User":
            from tests.test_auth import FakeQuery
            return FakeQuery(self.user)
        return FakeEnquiryQuery(self.enquiries)

    def add(self, obj):
        if isinstance(obj, Enquiry):
            from datetime import datetime, timezone
            obj.id = uuid4()
            obj.created_at = datetime.now(timezone.utc)
            self.enquiries.append(obj)

    def commit(self):
        pass

    def refresh(self, obj):
        pass

@pytest.fixture
def api_client(monkeypatch):
    user = SimpleNamespace(
        id=uuid4(),
        email="admin@example.com",
        password_hash=hash_password("correct-password"),
        role="admin",
        is_active=True,
    )
    fake_db = FakeSessionWithEnquiries(user)
    monkeypatch.setitem(app.dependency_overrides, get_db, lambda: fake_db)
    with TestClient(app) as client:
        yield client, user, fake_db

def test_submit_enquiry_success(api_client):
    client, _user, _db = api_client
    payload = {
        "name": "Jane Doe",
        "email": "jane@example.com",
        "phone": "+971501234567",
        "message": "Interested in off-plan luxury villa",
        "role": "Investor",
        "consent": True
    }
    response = client.post("/api/enquiries", json=payload)
    assert response.status_code == 201
    data = response.json()
    assert data["name"] == "Jane Doe"
    assert data["email"] == "jane@example.com"
    assert "id" in data

def test_submit_enquiry_requires_consent(api_client):
    client, _user, _db = api_client
    payload = {
        "name": "Jane Doe",
        "email": "jane@example.com",
        "phone": "+971501234567",
        "message": "Test message",
        "consent": False
    }
    response = client.post("/api/enquiries", json=payload)
    assert response.status_code == 422
    assert "consent" in response.json()["detail"].lower()

def test_newsletter_subscription(api_client):
    client, _user, _db = api_client
    response = client.post("/api/enquiries/newsletter", json={"email": "subscriber@domain.com", "consent": True})
    assert response.status_code == 200
    assert response.json()["status"] == "success"

def test_newsletter_subscription_requires_consent(api_client):
    client, _user, _db = api_client
    response = client.post("/api/enquiries/newsletter", json={"email": "subscriber@domain.com", "consent": False})
    assert response.status_code == 422
    assert "consent" in response.json()["detail"].lower()

def test_list_enquiries_authenticated_admin(api_client):
    client, user, _db = api_client
    token = create_access_token(user.id)
    response = client.get(
        "/api/enquiries",
        headers={"Authorization": f"Bearer {token}"}
    )
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_list_enquiries_unauthenticated(api_client):
    client, _user, _db = api_client
    response = client.get("/api/enquiries")
    assert response.status_code == 401
