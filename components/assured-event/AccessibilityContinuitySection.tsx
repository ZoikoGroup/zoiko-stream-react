type VerificationState = 'VERIFIED' | 'PENDING TEST' | 'UNVERIFIED';

interface AccessibilityRow {
  area: string;
  method: string;
  owner: string;
  state: VerificationState;
  recovery: string;
}

const accessibilityRows: AccessibilityRow[] = [
  {
    area: 'Captions',
    method: 'Automated Speech-to-Text (EN/ES)',
    owner: 'ZoikoStream',
    state: 'VERIFIED',
    recovery: 'Automated failover to secondary captioning service within 4s',
  },
  {
    area: 'Languages',
    method: 'Dual-channel stereo stream',
    owner: 'Customer Tech',
    state: 'PENDING TEST',
    recovery: 'Manual stream routing switch if auxiliary link fails',
  },
  {
    area: 'Signed Interpretation',
    method: 'Live picture-in-picture signer feed',
    owner: 'Partner Agency',
    state: 'UNVERIFIED',
    recovery: 'Signer feed error drops down to high-visibility caption cards',
  },
  {
    area: 'Viewer Controls',
    method: 'WCAG 2.2 Compliant Player',
    owner: 'ZoikoStream',
    state: 'VERIFIED',
    recovery: 'Keyboard-nav fallback active globally, player state logged',
  },
  {
    area: 'Recovery Impact',
    method: 'Real-time stream buffer extension',
    owner: 'Shared Ops',
    state: 'VERIFIED',
    recovery: 'Buffers streams automatically up to 30s during ingestion issues',
  },
];

const stateStyles: Record<VerificationState, string> = {
  VERIFIED: 'bg-emerald-900 text-teal-400',
  'PENDING TEST': 'bg-amber-900 text-amber-500',
  UNVERIFIED: 'bg-rose-950 text-rose-500',
};

export default function AccessibilityContinuitySection() {
  return (
    <section
      className="w-full bg-slate-950 border-t border-b border-gray-800 bg-cover bg-center px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-12"
      style={{
        backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.35), rgba(2, 6, 23, 0.35)), url('/images/assured-event/accessibility-bg.png')`,
      }}
    >
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight">
          Accessibility and audience continuity.
        </h2>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Live events should leave nobody out. Track caption accuracy, alternative language streams,
          and client-side continuity gates seamlessly.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl overflow-x-auto rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800">
        <table className="w-full min-w-[900px] border-collapse bg-zinc-950 text-left">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="p-4 w-48 text-slate-100 text-xs font-bold">Operational Area</th>
              <th className="p-4 w-56 text-slate-100 text-xs font-bold">Planned Method</th>
              <th className="p-4 w-36 text-slate-100 text-xs font-bold">Owner</th>
              <th className="p-4 w-36 text-slate-100 text-xs font-bold">Verification State</th>
              <th className="p-4 text-slate-100 text-xs font-bold">Recovery Effect</th>
            </tr>
          </thead>
          <tbody>
            {accessibilityRows.map((row) => (
              <tr key={row.area} className="border-b border-gray-800 last:border-b-0">
                <td className="p-4 text-slate-100 text-sm font-bold align-middle">{row.area}</td>
                <td className="p-4 text-slate-400 text-xs align-middle">{row.method}</td>
                <td className="p-4 text-slate-400 text-xs align-middle">{row.owner}</td>
                <td className="p-4 align-middle">
                  <span
                    className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap ${stateStyles[row.state]}`}
                  >
                    {row.state}
                  </span>
                </td>
                <td className="p-4 text-slate-400 text-xs align-middle">{row.recovery}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
