import { Suspense, lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const AdminLayout = lazy(() => import("./components/AdminLayout"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const AdminSectionPage = lazy(() => import("./pages/AdminSectionPage"));

function AdminNoIndex() {
  useEffect(() => {
    const existingRobots = document.querySelector('meta[name="robots"]');
    const originalContent = existingRobots?.content;
    const robots = existingRobots || document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, nofollow";
    if (!existingRobots) document.head.appendChild(robots);

    return () => {
      if (existingRobots && originalContent !== undefined) {
        existingRobots.content = originalContent;
      } else {
        robots.remove();
      }
    };
  }, []);

  return null;
}

function AdminRouteTree() {
  return (
    <>
      <AdminNoIndex />
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center bg-ritora-teal text-ritora-sand">
            Loading admin…
          </div>
        }
      >
        <Routes>
          <Route path="login" element={<AdminLogin />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route
                path="projects"
                element={<AdminSectionPage title="Projects" />}
              />
              <Route
                path="enquiries"
                element={<AdminSectionPage title="Enquiries" />}
              />
              <Route path="media" element={<AdminSectionPage title="Media" />} />
              <Route
                path="settings"
                element={<AdminSectionPage title="Settings" />}
              />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default function AdminApp() {
  return (
    <AuthProvider>
      <AdminRouteTree />
    </AuthProvider>
  );
}
