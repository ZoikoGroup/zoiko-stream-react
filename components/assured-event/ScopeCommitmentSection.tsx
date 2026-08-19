type InclusionState = 'Included' | 'Conditional' | 'Customer-owned' | 'Excluded';

interface ScopeRow {
  item: string;
  state: InclusionState;
  owner: string;
  condition: string;
  source: string;
}

const scopeRows: ScopeRow[] = [
  {
    item: 'Secondary Ingest Stream',
    state: 'Included',
    owner: 'ZoikoStream',
    condition: 'Active redundant stream path at 1080p',
    source: 'Assured Event SLA',
  },
  {
    item: 'SAML SSO Auth Gate',
    state: 'Conditional',
    owner: 'Shared',
    condition: 'Requires client-side IdP certificate check',
    source: 'Access Addendum',
  },
  {
    item: 'On-Site Network Setup',
    state: 'Customer-owned',
    owner: 'Customer',
    condition: '100Mbps dedicated symmetrically guaranteed',
    source: 'On-Site Handbook',
  },
  {
    item: 'Dynamic Live Translation',
    state: 'Excluded',
    owner: 'Shared',
    condition: 'Out of scope for baseline planning context',
    source: 'General Terms',
  },
  {
    item: 'Audit Log Export',
    state: 'Included',
    owner: 'ZoikoStream',
    condition: 'Tamper-proof JSON export within 24h',
    source: 'Security Policy v2.4',
  },
  {
    item: 'BSL Signer Overlay',
    state: 'Conditional',
    owner: 'Customer',
    condition: 'Client provides signer feed to ingest source',
    source: 'Accessibility Annex',
  },
];

const stateStyles: Record<InclusionState, string> = {
  Included: 'bg-emerald-900 text-teal-400',
  Conditional: 'bg-amber-900 text-amber-500',
  'Customer-owned': 'bg-blue-900 text-blue-400',
  Excluded: 'bg-rose-950 text-rose-500',
};

export default function ScopeCommitmentSection() {
  return (
    <section
      className="w-full bg-slate-950 bg-cover bg-center px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-12"
      style={{
        backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.35), rgba(2, 6, 23, 0.35)), url('/images/assured-event/scope-commitment-bg.png')`,
      }}
    >
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight">
          Scope and commitment architecture.
        </h2>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Assured event frameworks strictly delineate what is included, conditional, or outside our
          team&apos;s operational scope.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl overflow-x-auto rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800">
        <table className="w-full min-w-[900px] border-collapse bg-zinc-950 text-left">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="p-4 w-60 text-slate-100 text-xs font-bold">Item</th>
              <th className="p-4 w-36 text-slate-100 text-xs font-bold">Inclusion State</th>
              <th className="p-4 w-28 text-slate-100 text-xs font-bold">Owner</th>
              <th className="p-4 text-slate-100 text-xs font-bold">Condition / Evidence Source</th>
              <th className="p-4 w-44 text-slate-100 text-xs font-bold">Commitment Source</th>
            </tr>
          </thead>
          <tbody>
            {scopeRows.map((row) => (
              <tr key={row.item} className="border-b border-gray-800 last:border-b-0">
                <td className="p-4 text-slate-100 text-sm font-bold align-middle">{row.item}</td>
                <td className="p-4 align-middle">
                  <span
                    className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold whitespace-nowrap ${stateStyles[row.state]}`}
                  >
                    {row.state}
                  </span>
                </td>
                <td className="p-4 text-slate-400 text-sm align-middle">{row.owner}</td>
                <td className="p-4 text-slate-400 text-xs align-middle">{row.condition}</td>
                <td className="p-4 text-blue-500 text-xs font-bold align-middle">{row.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
