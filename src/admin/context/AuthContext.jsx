import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as authApi from "../../services/authApi";
import { clearAccessToken } from "../../services/api";
import AuthContext from "./AuthContextValue";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let active = true;
    authApi
      .refresh()
      .then(({ user: restoredUser }) => {
        if (active) setUser(restoredUser);
      })
      .catch(() => {
        clearAccessToken();
      })
      .finally(() => {
        if (active) setIsLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const login = useCallback(
    async (email, password) => {
      const result = await authApi.login(email, password);
      setUser(result.user);
      navigate("/admin", { replace: true });
    },
    [navigate],
  );

  const logout = useCallback(async () => {
    try {
      await authApi.logout();
    } catch (error) {
      console.error("Could not notify the server about logout.", error);
    } finally {
      clearAccessToken();
      setUser(null);
      navigate("/admin/login", { replace: true });
    }
  }, [navigate]);

  const value = useMemo(
    () => ({ user, isLoading, login, logout }),
    [user, isLoading, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
