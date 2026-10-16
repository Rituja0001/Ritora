import { NavLink } from "react-router-dom";
import { Building2, Gauge, Image, Inbox, Settings, X } from "lucide-react";

const links = [
  { label: "Dashboard", to: "/admin", icon: Gauge, end: true },
  { label: "Projects", to: "/admin/projects", icon: Building2 },
  { label: "Enquiries", to: "/admin/enquiries", icon: Inbox },
  { label: "Media", to: "/admin/media", icon: Image },
  { label: "Settings", to: "/admin/settings", icon: Settings },
];

export default function AdminSidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-white/10 bg-ritora-teal-dark px-5 py-6 transition-transform md:static md:z-auto md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-12 flex items-center justify-between">
          <NavLink to="/admin" onClick={onClose} className="text-2xl font-semibold tracking-wide text-ritora-gold">
            RITORA
          </NavLink>
          <button
            type="button"
            className="rounded-lg p-2 text-white/70 hover:bg-white/10 md:hidden"
            aria-label="Close navigation"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>
        <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
          Workspace
        </p>
        <nav className="space-y-1" aria-label="Admin navigation">
          {links.map(({ label, to, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-ritora-gold/15 text-ritora-gold"
                    : "text-white/65 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              <Icon size={18} strokeWidth={1.8} />
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto rounded-2xl border border-ritora-gold/15 bg-white/[0.03] p-4">
          <p className="font-serif text-lg text-ritora-sand">Ritora Admin</p>
          <p className="mt-1 text-xs leading-5 text-white/45">Manage your property portfolio with ease.</p>
        </div>
      </aside>
    </>
  );
}
