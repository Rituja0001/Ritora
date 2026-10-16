import { api, clearAccessToken, setAccessToken } from "./api";

let sessionRestorePromise = null;

export async function login(email, password) {
  const { data } = await api.post(
    "/auth/login",
    { email, password },
    { skipAuthRefresh: true },
  );
  setAccessToken(data.access_token);

  try {
    const user = data.user || (await me());
    return { access_token: data.access_token, user };
  } catch (error) {
    clearAccessToken();
    throw error;
  }
}

export function refresh() {
  if (!sessionRestorePromise) {
    sessionRestorePromise = (async () => {
      const { data } = await api.post("/auth/refresh", {}, { skipAuthRefresh: true });
      setAccessToken(data.access_token);
      try {
        return { access_token: data.access_token, user: await me() };
      } catch (error) {
        clearAccessToken();
        throw error;
      }
    })().finally(() => {
      sessionRestorePromise = null;
    });
  }
  return sessionRestorePromise;
}

export async function logout() {
  try {
    await api.post("/auth/logout", {}, { skipAuthRefresh: true });
  } finally {
    clearAccessToken();
  }
}

export async function me() {
  const { data } = await api.get("/auth/me");
  return data;
}
