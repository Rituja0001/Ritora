import { ArrowUpRight, Building2, Inbox, Image } from "lucide-react";

const sections = [
  { label: "Projects", description: "Manage your property listings.", icon: Building2 },
  { label: "Enquiries", description: "Review new client enquiries.", icon: Inbox },
  { label: "Media", description: "Organize project images and documents.", icon: Image },
];

export default function AdminDashboard() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ritora-teal/55">
          Overview
        </p>
        <h1 className="mt-2 font-serif text-3xl text-ritora-teal sm:text-4xl">Dashboard</h1>
        <p className="mt-2 text-sm text-slate-500">Your workspace at a glance.</p>
      </div>
      <div className="rounded-2xl border border-ritora-gold/20 bg-white p-6 shadow-sm sm:p-8">
        <p className="font-serif text-2xl text-ritora-teal">Welcome to Ritora Admin</p>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          Your secure workspace is ready. Use the navigation to manage the property portfolio.
        </p>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {sections.map(({ label, description, icon: Icon }) => (
          <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ritora-gold/15 text-ritora-teal">
                <Icon size={19} />
              </span>
              <ArrowUpRight size={17} className="text-slate-300" />
            </div>
            <h2 className="mt-5 font-serif text-xl text-ritora-teal">{label}</h2>
            <p className="mt-1 text-sm text-slate-500">{description}</p>
            <p className="mt-4 text-xs font-medium text-slate-400">Coming soon</p>
          </div>
        ))}
      </div>
    </div>
  );
}
