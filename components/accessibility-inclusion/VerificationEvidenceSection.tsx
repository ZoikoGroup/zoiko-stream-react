type EvidenceStatus = 'CURRENT' | 'CHANGED' | 'STALE';

interface RegistryRow {
  method: string;
  configuration: string;
  timestamp: string;
  verifier: string;
  evidenceRef: string;
  scope: string;
  scopeModified?: boolean;
  status: EvidenceStatus;
}

interface EvidenceCard {
  title: string;
  description: string;
  image: string;
}

const registryRows: RegistryRow[] = [
  {
    method: 'Keyboard Focus Ring Flow',
    configuration: 'Chrome 114+ / macOS',
    timestamp: '10 min ago',
    verifier: 'Alex T.',
    evidenceRef: 'EV-KEY-842',
    scope: 'Global Layout',
    status: 'CURRENT',
  },
  {
    method: 'Live Captions Stream',
    configuration: 'EN-US Auto-caption',
    timestamp: '2 hours ago',
    verifier: 'John D.',
    evidenceRef: 'EV-CAP-114',
    scope: 'Audio (Modified)',
    scopeModified: true,
    status: 'CHANGED',
  },
  {
    method: 'Braille Display API',
    configuration: 'Tactile Output v2',
    timestamp: '3 days ago',
    verifier: 'Sarah K.',
    evidenceRef: 'EV-BRL-092',
    scope: 'Alternative Access',
    status: 'STALE',
  },
];

const evidenceCards: EvidenceCard[] = [
  {
    title: 'Scoped Testing',
    description:
      'Verify keyboard accessibility, screen reader compatibility, custom focus flows, and programmatic captions on every primary live stream pathway.',
    image: '/images/accessibility-inclusion/card-scoped-testing.png',
  },
  {
    title: 'Material Change Detection',
    description:
      'Detect modifications to stage layouts, ingestion pipelines, or translation engines and trigger targeted re-testing before going live.',
    image: '/images/accessibility-inclusion/card-material-change.png',
  },
  {
    title: 'Evidence Lifecycle',
    description:
      'Keep every audit record versioned. Stale logs are instantly flagged so teams cannot reuse outdated checks for fresh event contexts.',
    image: '/images/accessibility-inclusion/card-evidence-lifecycle.png',
  },
];

const statusStyles: Record<EvidenceStatus, string> = {
  CURRENT: 'bg-emerald-500/15 text-emerald-400',
  CHANGED: 'bg-amber-500/15 text-amber-400',
  STALE: 'bg-red-500/15 text-red-400',
};

export default function VerificationEvidenceSection() {
  return (
    <section
      className="w-full bg-neutral-900 bg-cover bg-center px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10 lg:gap-14"
      style={{
        backgroundImage: `linear-gradient(rgba(3, 7, 18, 0.25), rgba(3, 7, 18, 0.25)), url('/images/accessibility-inclusion/verification-evidence-bg.png')`,
      }}
    >
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-4">
        <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold leading-tight">
          Verification is scoped, timestamped, and current.
        </h2>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Evidence is tied to the configuration that was tested. Material changes invalidate affected
          scope, not the whole plan.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl p-4 sm:p-5 bg-zinc-950/80 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col gap-4">
        <div className="w-full flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-teal-400 rounded-full" />
            <h3 className="text-teal-400 text-xs font-bold uppercase tracking-wider">
              Active Configuration Registry &amp; Proof
            </h3>
          </div>
          <span className="text-slate-500 text-[10px] uppercase tracking-wider">
            Registry code: AR-V4.9
          </span>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[860px] border-collapse text-left">
            <thead>
              <tr className="bg-gray-900/60">
                <th className="px-4 py-3 text-slate-300 text-xs font-bold">Verification Method</th>
                <th className="px-4 py-3 text-slate-300 text-xs font-bold">Tested Configuration</th>
                <th className="px-4 py-3 text-slate-300 text-xs font-bold">Timestamp</th>
                <th className="px-4 py-3 text-slate-300 text-xs font-bold">Verifier</th>
                <th className="px-4 py-3 text-slate-300 text-xs font-bold">Evidence Ref</th>
                <th className="px-4 py-3 text-slate-300 text-xs font-bold">Affected Scope</th>
                <th className="px-4 py-3 text-slate-300 text-xs font-bold text-right">Status</th>
              </tr>
            </thead>
            <tbody>
              {registryRows.map((row) => (
                <tr key={row.method} className="border-t border-gray-800">
                  <td className="px-4 py-4 text-slate-100 text-xs font-bold align-middle">
                    {row.method}
                  </td>
                  <td className="px-4 py-4 text-slate-400 text-xs align-middle">
                    {row.configuration}
                  </td>
                  <td className="px-4 py-4 text-slate-400 text-xs align-middle">{row.timestamp}</td>
                  <td className="px-4 py-4 text-slate-400 text-xs align-middle">{row.verifier}</td>
                  <td className="px-4 py-4 text-blue-400 text-xs font-bold align-middle">
                    {row.evidenceRef}
                  </td>
                  <td
                    className={`px-4 py-4 text-xs align-middle ${row.scopeModified ? 'text-amber-400' : 'text-slate-400'}`}
                  >
                    {row.scope}
                  </td>
                  <td className="px-4 py-4 align-middle text-right">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold ${statusStyles[row.status]}`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {evidenceCards.map((card) => (
          <article
            key={card.title}
            className="bg-zinc-950/80 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 overflow-hidden flex flex-col"
          >
            <div
              className="h-40 w-full bg-gray-950 bg-cover bg-center"
              style={{ backgroundImage: `url('${card.image}')` }}
              role="presentation"
            />
            <div className="p-5 flex flex-col gap-2.5">
              <h3 className="text-slate-100 text-lg font-bold">{card.title}</h3>
              <p className="text-slate-400 text-xs leading-5">{card.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
