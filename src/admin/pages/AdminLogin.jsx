import { useEffect, useState } from "react";
import { Eye, EyeOff, KeyRound, LockKeyhole } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

function getLoginError(error) {
  if (error.response?.status === 429) {
    return "Too many attempts. Please wait a minute before trying again.";
  }
  if (error.response?.status === 401) {
    return "The email or password you entered is incorrect.";
  }
  if (error.response?.status === 422) {
    return "Enter a valid email address and password.";
  }
  return "Unable to sign in right now. Please try again.";
}

export default function AdminLogin() {
  const { login, user, isLoading } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isLoading && user) navigate("/admin", { replace: true });
  }, [isLoading, user, navigate]);

  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);
    try {
      await login(email.trim(), password);
    } catch (error) {
      setErrorMessage(getLoginError(error));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-ritora-teal px-4 py-12 font-sans">
      <section className="w-full max-w-[440px] rounded-3xl bg-ritora-cream p-7 shadow-luxury sm:p-10">
        <div className="mb-8 flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ritora-teal text-ritora-gold">
            <KeyRound size={22} />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ritora-teal/60">
              Ritora
            </p>
            <p className="text-sm font-medium text-ritora-teal">Administrator access</p>
          </div>
        </div>
        <h1 className="font-serif text-3xl text-ritora-teal">Welcome back</h1>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Sign in to manage your real estate portfolio.
        </p>

        {isLoading ? (
          <div className="mt-8 rounded-xl bg-white p-4 text-sm text-slate-500" role="status">
            Restoring your session…
          </div>
        ) : (
          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="admin-email" className="mb-2 block text-sm font-semibold text-slate-700">
                Email address
              </label>
              <input
                id="admin-email"
                type="email"
                autoComplete="username"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-ritora-gold focus:ring-2 focus:ring-ritora-gold/20"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="admin-password" className="mb-2 block text-sm font-semibold text-slate-700">
                Password
              </label>
              <div className="relative">
                <LockKeyhole
                  size={17}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  id="admin-password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-12 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-ritora-gold focus:ring-2 focus:ring-ritora-gold/20"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((visible) => !visible)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-slate-400 hover:text-ritora-teal"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {errorMessage && (
              <p
                className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                role="alert"
              >
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-ritora-teal px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-ritora-teal-light focus:outline-none focus:ring-2 focus:ring-ritora-gold focus:ring-offset-2 disabled:cursor-wait disabled:opacity-70"
            >
              {isSubmitting ? "Signing in…" : "Sign in"}
            </button>
          </form>
        )}

        <p className="mt-8 text-center text-xs text-slate-400">
          Secure access for authorized administrators
        </p>
      </section>
    </main>
  );
}
