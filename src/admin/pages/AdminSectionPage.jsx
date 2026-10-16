export default function AdminSectionPage({ title }) {
  return (
    <div className="mx-auto max-w-6xl">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ritora-teal/55">
        Workspace
      </p>
      <h1 className="mt-2 font-serif text-3xl text-ritora-teal sm:text-4xl">{title}</h1>
      <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-500 shadow-sm">
        {title} management will be available here.
      </div>
    </div>
  );
}
