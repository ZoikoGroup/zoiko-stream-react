interface CompareRow {
  capability: string;
  resilience: string;
  managed: string;
  assured: string;
}

const compareRows: CompareRow[] = [
  {
    capability: 'Primary Focus',
    resilience: 'Self-managed redundant pipes',
    managed: 'Platform & production support',
    assured: 'Deterministic operation SLA',
  },
  {
    capability: 'Scope Model',
    resilience: 'Configurable via APIs',
    managed: 'Standard service package',
    assured: 'Tailored event brief architecture',
  },
  {
    capability: 'Support Model',
    resilience: 'Shared help center & docs',
    managed: 'Active event-monitoring chat',
    assured: 'Dedicated L1/L2 engineer hotline',
  },
  {
    capability: 'Verification',
    resilience: 'Automated client-side testing',
    managed: 'Pre-event network validation',
    assured: 'Continuous verification loop',
  },
  {
    capability: 'Change Control',
    resilience: 'No restriction (live edits)',
    managed: 'Standard deployment rules',
    assured: 'Active validated change queue',
  },
  {
    capability: 'Best For',
    resilience: 'Technical self-serve teams',
    managed: 'Medium-stakes webinars & stages',
    assured: 'High-integrity board keynotes',
  },
];

export default function CompareOptionsSection() {
  return (
    <section
      className="w-full bg-slate-950 bg-cover bg-center px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-12"
      style={{
        backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.35), rgba(2, 6, 23, 0.35)), url('/images/assured-event/compare-bg.png')`,
      }}
    >
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight">
          Compare your options.
        </h2>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Identify the operating level required for your target. From self-managed resilience up to
          white-glove assured execution.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl overflow-x-auto rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800">
        <table className="w-full min-w-[860px] border-collapse bg-zinc-950 text-left">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="p-4 w-52 text-slate-100 text-xs font-bold">Capabilities</th>
              <th className="p-4 text-slate-100 text-xs font-bold">Event Resilience</th>
              <th className="p-4 text-slate-100 text-xs font-bold">Managed Live Event Streaming</th>
              <th className="p-4 text-blue-500 text-xs font-bold">Assured Event</th>
            </tr>
          </thead>
          <tbody>
            {compareRows.map((row) => (
              <tr key={row.capability} className="border-b border-gray-800 last:border-b-0">
                <td className="p-4 text-slate-100 text-sm font-bold align-middle">
                  {row.capability}
                </td>
                <td className="p-4 text-slate-400 text-xs align-middle">{row.resilience}</td>
                <td className="p-4 text-slate-400 text-xs align-middle">{row.managed}</td>
                <td className="p-4 text-slate-100 text-xs font-bold align-middle">{row.assured}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mx-auto w-full max-w-7xl p-5 sm:p-6 bg-zinc-950 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col gap-4">
        <h3 className="text-slate-100 text-base font-bold">Which route is right for you?</h3>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-slate-100 text-sm font-bold">
              &ldquo;We want solid backup networks, but we manage our own crew.&rdquo;
            </p>
            <p className="text-slate-400 text-xs leading-5">
              Recommended: Event Resilience. Highly customizable, developer-oriented API platform.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-blue-500 text-sm font-bold">
              &ldquo;We need zero-downtime assurance and signed compliance audits.&rdquo;
            </p>
            <p className="text-slate-400 text-xs leading-5">
              Recommended: Assured Event. Full pre-air validation, continuous desk support,
              cryptographically signed outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
