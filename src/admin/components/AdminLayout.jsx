import { useState } from "react";
import { Menu, LogOut } from "lucide-react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <div className="flex min-h-screen bg-[#F7F6F2] font-sans text-slate-800">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 flex h-[72px] items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Open navigation"
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={21} />
            </button>
            <span className="font-serif text-lg text-ritora-teal md:hidden">Ritora Admin</span>
            <span className="hidden text-sm text-slate-500 md:block">Administration</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-5">
            <span className="hidden max-w-[240px] truncate text-sm text-slate-600 sm:block">
              {user?.email}
            </span>
            <button
              type="button"
              onClick={logout}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-ritora-gold hover:text-ritora-teal"
            >
              <LogOut size={16} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </header>
        <main className="flex-1 px-4 py-7 sm:px-8 sm:py-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
