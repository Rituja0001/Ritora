from datetime import timedelta
from types import SimpleNamespace
from uuid import uuid4

import pytest
from fastapi.testclient import TestClient

from app.core.database import get_db
from app.core.config import Settings
from app.core.security import create_token, hash_password
from app.main import app


class FakeQuery:
    def __init__(self, user):
        self.user = user

    def filter(self, *_criteria):
        return self

    def first(self):
        return self.user


class FakeSession:
    def __init__(self, user):
        self.user = user

    def query(self, _model):
        return FakeQuery(self.user)


@pytest.fixture
def admin_client(monkeypatch):
    user = SimpleNamespace(
        id=uuid4(),
        email="admin@example.com",
        password_hash=hash_password("correct-password"),
        role="admin",
        is_active=True,
    )
    monkeypatch.setitem(
        app.dependency_overrides,
        get_db,
        lambda: FakeSession(user),
    )
    with TestClient(app) as client:
        yield client, user


def test_login_success_returns_access_token_and_http_only_refresh_cookie(admin_client):
    client, _user = admin_client
    response = client.post(
        "/api/auth/login",
        json={"email": "admin@example.com", "password": "correct-password"},
    )

    assert response.status_code == 200
    assert response.json()["access_token"]
    assert response.json()["token_type"] == "bearer"
    assert response.cookies["refresh_token"]
    assert "httponly" in response.headers["set-cookie"].lower()


def test_wrong_password_has_generic_error(admin_client):
    client, _user = admin_client
    response = client.post(
        "/api/auth/login",
        json={"email": "admin@example.com", "password": "wrong-password"},
    )

    assert response.status_code == 401
    assert response.json()["detail"] == "Invalid email or password"


def test_login_is_limited_to_five_attempts_per_ip(monkeypatch):
    user = SimpleNamespace(
        id=uuid4(),
        email="admin@example.com",
        password_hash=hash_password("correct-password"),
        role="admin",
        is_active=True,
    )
    monkeypatch.setitem(
        app.dependency_overrides,
        get_db,
        lambda: FakeSession(user),
    )
    with TestClient(app, client=("198.51.100.10", 12345)) as client:
        statuses = [
            client.post(
                "/api/auth/login",
                json={"email": "admin@example.com", "password": "wrong-password"},
            ).status_code
            for _ in range(6)
        ]

    assert statuses == [401, 401, 401, 401, 401, 429]


@pytest.mark.parametrize("token_kind", ["invalid", "expired"])
def test_me_rejects_invalid_or_expired_access_tokens(admin_client, token_kind):
    client, user = admin_client
    token = (
        "not-a-jwt"
        if token_kind == "invalid"
        else create_token(user.id, "access", timedelta(seconds=-1))
    )
    response = client.get(
        "/api/auth/me",
        headers={"Authorization": f"Bearer {token}"},
    )

    assert response.status_code == 401


def test_me_returns_current_admin(admin_client):
    client, user = admin_client
    token = create_token(user.id, "access", timedelta(minutes=5))

    response = client.get(
        "/api/auth/me",
        headers={"Authorization": f"Bearer {token}"},
    )

    assert response.status_code == 200
    assert response.json() == {
        "id": str(user.id),
        "email": "admin@example.com",
        "role": "admin",
    }


def test_refresh_uses_cookie_and_returns_access_token(admin_client):
    client, user = admin_client
    refresh_token = create_token(user.id, "refresh", timedelta(days=1))
    client.cookies.set("refresh_token", refresh_token, path="/api/auth")

    response = client.post("/api/auth/refresh")

    assert response.status_code == 200
    assert response.json()["access_token"]
    assert response.cookies["refresh_token"]


def test_logout_clears_refresh_cookie(admin_client):
    client, user = admin_client
    client.cookies.set(
        "refresh_token",
        create_token(user.id, "refresh", timedelta(days=1)),
        path="/api/auth",
    )

    response = client.post("/api/auth/logout")

    assert response.status_code == 204
    assert "max-age=0" in response.headers["set-cookie"].lower()


@pytest.mark.parametrize(
    "secret",
    [
        "dev_secret_key_change_in_production_ritora_luxury_2026_super_secure",
        "replace_with_a_secure_random_secret_in_production",
        "",
    ],
)
def test_non_development_rejects_missing_or_default_jwt_secret(secret):
    with pytest.raises(ValueError, match="JWT_SECRET must be set"):
        Settings(
            ENVIRONMENT="production",
            JWT_SECRET=secret,
        )
