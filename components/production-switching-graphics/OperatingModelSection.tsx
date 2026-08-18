interface ResponsibilityRow {
  label: string;
  selfManaged: string;
  managed: string;
}

const rows: ResponsibilityRow[] = [
  { label: 'Source Setup', selfManaged: 'Customer / Venue Owned', managed: 'Collaborative / Guided' },
  {
    label: 'Switching & Direction',
    selfManaged: 'Customer Team Owned',
    managed: 'ZoikoStream Specialist Owned',
  },
  {
    label: 'Graphics Playout',
    selfManaged: 'Customer Team Owned',
    managed: 'ZoikoStream Specialist Owned',
  },
  { label: 'Run-of-Show Creation', selfManaged: 'Customer Owned', managed: 'Shared Development' },
  {
    label: 'Technical Rehearsal',
    selfManaged: 'Customer Directed',
    managed: 'ZoikoStream Specialist Managed',
  },
  {
    label: 'Live Recovery Execution',
    selfManaged: 'Customer Directed',
    managed: 'ZoikoStream Specialist Managed',
  },
];

export default function OperatingModelSection() {
  return (
    <section className="w-full bg-white border-b border-gray-200 px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="w-full lg:max-w-[720px] flex flex-col gap-4">
          <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold leading-tight">
            Optional managed operating model.
          </h2>
          <p className="text-gray-500 text-base leading-6">
            Production, switching &amp; graphics relates to Managed Live Event Streaming without
            implying that managed operation is bundled by default. Responsibility states &mdash;
            ZoikoStream-owned, customer-owned, partner-owned, shared, or needs confirmation &mdash;
            are set during planning.
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Self-managed */}
        <article className="p-6 sm:p-8 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col gap-5">
          <div className="flex flex-col gap-2 pb-5 border-b border-gray-200">
            <h3 className="text-zinc-900 text-xl font-bold">Self-Managed</h3>
            <p className="text-gray-500 text-sm leading-5">
              Your team operates the switcher, cues graphics, and directs the live broadcast using
              ZoikoStream tools.
            </p>
          </div>
          <dl className="flex flex-col gap-3">
            {rows.map((row) => (
              <div
                key={row.label}
                className="w-full flex flex-wrap justify-between items-center gap-2"
              >
                <dt className="text-zinc-900 text-sm font-medium">{row.label}</dt>
                <dd className="px-2 py-1 bg-blue-500/5 rounded-sm text-blue-900/70 text-xs font-mono">
                  {row.selfManaged}
                </dd>
              </div>
            ))}
          </dl>
        </article>

        {/* Managed */}
        <article className="p-6 sm:p-8 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-teal-400 flex flex-col gap-5">
          <div className="flex flex-col gap-2 pb-5 border-b border-gray-200">
            <div className="w-full flex flex-wrap justify-between items-center gap-2">
              <h3 className="text-zinc-900 text-xl font-bold">Managed by ZoikoStream</h3>
              <span className="px-2 py-1 rounded-sm outline outline-1 outline-offset-[-1px] outline-teal-400 text-teal-600 text-[10px] font-bold font-mono uppercase">
                Recommended for high-stakes
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-5">
              ZoikoStream specialists prepare graphics, run rehearsals, operate active live
              switching, and guarantee delivery.
            </p>
          </div>
          <dl className="flex flex-col gap-3">
            {rows.map((row) => (
              <div
                key={row.label}
                className="w-full flex flex-wrap justify-between items-center gap-2"
              >
                <dt className="text-zinc-900 text-sm font-medium">{row.label}</dt>
                <dd className="px-2 py-1 bg-teal-400/10 rounded-sm text-teal-700 text-xs font-mono">
                  {row.managed}
                </dd>
              </div>
            ))}
          </dl>
        </article>
      </div>
    </section>
  );
}
