import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollToTop from "./components/ScrollToTop";

// Multi-Page Routes
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Investors from "./pages/Investors";
import Developers from "./pages/Developers";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import SellRent from "./pages/SellRent";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

const AdminApp = lazy(() => import("./admin/AdminApp"));

/**
 * Main Application Shell - Ritora Dubai Luxury Real Estate
 * Proper multi-page site architecture using React Router:
 * - / : Home
 * - /about : About (incorporating Leadership)
 * - /projects : Featured Projects
 * - /investors : Investment Opportunities
 * - /developers : Developer Partnerships
 * - /locations : Locations
 * - /contact : Contact (Real functional form)
 *
 * Persistent Global Elements:
 * - Navbar (7 essential items + CTA)
 * - Footer (Updated contact info, legal entity placeholder, multi-page links)
 * - FloatingWhatsApp (Persistent fixed bottom-right with gentle pulse)
 * - ScrollToTop (Auto-scroll to top on route navigation)
 */
function AppRoutes() {
  const { pathname } = useLocation();
  const isAdminPath = pathname === "/admin" || pathname.startsWith("/admin/");

  return (
    <>
      <ScrollToTop />
      {isAdminPath ? (
        <Routes>
          <Route
            path="/admin/*"
            element={
              <Suspense
                fallback={
                  <div className="flex min-h-screen items-center justify-center bg-ritora-teal text-ritora-sand">
                    Loading admin…
                  </div>
                }
              >
                <AdminApp />
              </Suspense>
            }
          />
        </Routes>
      ) : (
      <div className="min-h-screen flex flex-col bg-[#0C3332] text-white font-sans selection:bg-[#D9BA6A] selection:text-[#0C3332]">
        {/* Global Navigation Bar */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/services" element={<Services />} />
            <Route path="/sell-rent" element={<SellRent />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            {/* Legacy route redirects */}
            <Route path="/properties" element={<Navigate to="/projects" replace />} />
            <Route path="/properties/*" element={<Navigate to="/projects" replace />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Persistent Floating WhatsApp Action Button */}
        <FloatingWhatsApp />
      </div>
      )}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
