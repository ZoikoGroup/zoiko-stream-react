type RequirementState = 'VERIFIED' | 'PLANNED' | 'CHANGED' | 'LIMITATION' | 'UNAVAILABLE';

interface RequirementRow {
  requirement: string;
  scope: string;
  method: string;
  owner: string;
  state: RequirementState;
  lastVerification: string;
  limitation: string;
  alternative: string;
  action: string;
  actionTone: 'blue' | 'amber' | 'muted';
  limitationFlagged?: boolean;
  alternativeStrong?: boolean;
  methodMuted?: boolean;
}

const rows: RequirementRow[] = [
  {
    requirement: 'Keyboard navigation',
    scope: 'Global',
    method: 'WCAG Focus Flow',
    owner: 'Alex T.',
    state: 'VERIFIED',
    lastVerification: '14:05',
    limitation: 'None',
    alternative: 'None',
    action: 'Log test',
    actionTone: 'blue',
  },
  {
    requirement: 'Sign language overlay',
    scope: 'Optional',
    method: 'PiP feed routing',
    owner: 'Sarah K.',
    state: 'PLANNED',
    lastVerification: 'Pending',
    limitation: 'Encoder delay',
    alternative: 'En transcript',
    action: 'Deploy feed',
    actionTone: 'blue',
  },
  {
    requirement: 'Live Captions Stream',
    scope: 'Global',
    method: 'Endpoint V3 API',
    owner: 'John D.',
    state: 'CHANGED',
    lastVerification: '14:02',
    limitation: 'None',
    alternative: 'VOD alternative',
    action: 'Reverify',
    actionTone: 'amber',
  },
  {
    requirement: 'Complex SVG Alts',
    scope: 'Visuals',
    method: 'Text alternatives',
    owner: 'Alex T.',
    state: 'LIMITATION',
    lastVerification: '13:58',
    limitation: 'Complex charts',
    alternative: 'SLA live desc',
    action: 'Edit alternative',
    actionTone: 'blue',
    limitationFlagged: true,
    alternativeStrong: true,
  },
  {
    requirement: 'Real-Time Braille',
    scope: 'Global',
    method: 'S-Tactile API',
    owner: 'John D.',
    state: 'UNAVAILABLE',
    lastVerification: 'Unsupported',
    limitation: 'Hardware lack',
    alternative: 'Full Transcript',
    action: 'Review API',
    actionTone: 'muted',
    alternativeStrong: true,
    methodMuted: true,
  },
];

const stateStyles: Record<RequirementState, string> = {
  VERIFIED: 'bg-emerald-900/10 outline-emerald-600 text-emerald-600',
  PLANNED: 'bg-blue-900/10 outline-blue-500 text-blue-500',
  CHANGED: 'bg-amber-900/10 outline-amber-600 text-amber-600',
  LIMITATION: 'bg-red-500/10 outline-red-500 text-red-500',
  UNAVAILABLE: 'bg-gray-700/10 outline-gray-600 text-gray-600',
};

const actionStyles: Record<RequirementRow['actionTone'], string> = {
  blue: 'text-blue-500',
  amber: 'text-amber-500',
  muted: 'text-gray-500',
};

export default function ReadinessBoardSection() {
  return (
    <section className="w-full bg-white border-t border-b border-gray-200 px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10 lg:gap-12">
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-4">
        <h2 className="text-zinc-950 text-3xl sm:text-4xl font-bold leading-tight">
          Accessibility Readiness Board
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          Every requirement visible. Every state explicit. No composite scores hiding blockers.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 overflow-hidden">
        <div className="p-5 bg-slate-50 border-b border-slate-200 flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 bg-teal-400 rounded-md flex justify-center items-center shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/accessibility-inclusion/layout.svg"
                alt=""
                aria-hidden
                className="w-3.5 h-3.5 brightness-0 invert"
              />
            </span>
            <h3 className="text-zinc-950 text-sm sm:text-base font-bold">
              Global Keynote 2026 &mdash; Readiness
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-gray-500 text-xs">PLAN VERSION: v3.1</span>
            <span className="text-teal-400 text-xs font-bold">LAST VERIFIED: 3 MIN AGO</span>
          </div>
        </div>

        <div className="px-6 py-3 bg-amber-100 border-b border-amber-500 flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/accessibility-inclusion/alert-triangle.svg"
            alt=""
            aria-hidden
            className="w-4 h-4 shrink-0"
          />
          <p className="flex-1 text-amber-800 text-xs font-medium">
            Changed since verification: Caption provider endpoint updated &mdash; active
            revalidation required before live air.
          </p>
        </div>

        {/* Desktop: full grid, sized to fit without horizontal scroll */}
        <table className="hidden lg:table w-full table-fixed border-collapse text-left">
          <colgroup>
            <col className="w-[15%]" />
            <col className="w-[8%]" />
            <col className="w-[13%]" />
            <col className="w-[8%]" />
            <col className="w-[11%]" />
            <col className="w-[11%]" />
            <col className="w-[11%]" />
            <col className="w-[11%]" />
            <col className="w-[12%]" />
          </colgroup>
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-4 py-3.5 text-gray-700 text-[11px] font-bold">Requirement</th>
              <th className="px-2 py-3.5 text-gray-700 text-[11px] font-bold">Scope</th>
              <th className="px-2 py-3.5 text-gray-700 text-[11px] font-bold">Method</th>
              <th className="px-2 py-3.5 text-gray-700 text-[11px] font-bold">Owner</th>
              <th className="px-2 py-3.5 text-gray-700 text-[11px] font-bold">State</th>
              <th className="px-2 py-3.5 text-gray-700 text-[11px] font-bold">Last Verification</th>
              <th className="px-2 py-3.5 text-gray-700 text-[11px] font-bold">Limitation</th>
              <th className="px-2 py-3.5 text-gray-700 text-[11px] font-bold">Alternative</th>
              <th className="px-4 py-3.5 text-gray-700 text-[11px] font-bold">Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.requirement} className="border-b border-slate-200 last:border-b-0">
                <td className="px-4 py-4 text-zinc-950 text-[11px] font-bold align-middle break-words">
                  {row.requirement}
                </td>
                <td className="px-2 py-4 text-gray-500 text-[11px] align-middle">{row.scope}</td>
                <td
                  className={`px-2 py-4 text-[11px] align-middle break-words ${row.methodMuted ? 'text-gray-500' : 'text-zinc-950'}`}
                >
                  {row.method}
                </td>
                <td className="px-2 py-4 text-gray-600 text-[11px] align-middle">{row.owner}</td>
                <td className="px-2 py-4 align-middle">
                  <span
                    className={`inline-block px-2 py-1 rounded-full outline outline-1 outline-offset-[-1px] text-[10px] font-bold uppercase tracking-wide ${stateStyles[row.state]}`}
                  >
                    {row.state}
                  </span>
                </td>
                <td className="px-2 py-4 text-gray-500 text-[11px] align-middle break-words">
                  {row.lastVerification}
                </td>
                <td
                  className={`px-2 py-4 text-[11px] align-middle break-words ${row.limitationFlagged ? 'text-red-500' : 'text-gray-500'}`}
                >
                  {row.limitation}
                </td>
                <td
                  className={`px-2 py-4 text-[11px] align-middle break-words ${row.alternativeStrong ? 'text-zinc-950' : 'text-gray-500'}`}
                >
                  {row.alternative}
                </td>
                <td
                  className={`px-4 py-4 text-[11px] font-bold align-middle break-words ${actionStyles[row.actionTone]}`}
                >
                  {row.action}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile / tablet: stacked cards, no horizontal scroll */}
        <div className="lg:hidden flex flex-col">
          {rows.map((row) => (
            <div
              key={row.requirement}
              className="p-5 border-b border-slate-200 last:border-b-0 flex flex-col gap-3"
            >
              <div className="flex flex-wrap justify-between items-center gap-2">
                <h4 className="text-zinc-950 text-sm font-bold">{row.requirement}</h4>
                <span
                  className={`px-2.5 py-1 rounded-full outline outline-1 outline-offset-[-1px] text-[10px] font-bold uppercase tracking-wide ${stateStyles[row.state]}`}
                >
                  {row.state}
                </span>
              </div>
              <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
                <div className="flex flex-col">
                  <dt className="text-gray-500 text-[10px] font-bold uppercase">Scope</dt>
                  <dd className="text-gray-600 text-xs">{row.scope}</dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-gray-500 text-[10px] font-bold uppercase">Method</dt>
                  <dd className={`text-xs ${row.methodMuted ? 'text-gray-500' : 'text-zinc-950'}`}>
                    {row.method}
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-gray-500 text-[10px] font-bold uppercase">Owner</dt>
                  <dd className="text-gray-600 text-xs">{row.owner}</dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-gray-500 text-[10px] font-bold uppercase">
                    Last Verification
                  </dt>
                  <dd className="text-gray-600 text-xs">{row.lastVerification}</dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-gray-500 text-[10px] font-bold uppercase">Limitation</dt>
                  <dd
                    className={`text-xs ${row.limitationFlagged ? 'text-red-500' : 'text-gray-600'}`}
                  >
                    {row.limitation}
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-gray-500 text-[10px] font-bold uppercase">Alternative</dt>
                  <dd
                    className={`text-xs ${row.alternativeStrong ? 'text-zinc-950' : 'text-gray-600'}`}
                  >
                    {row.alternative}
                  </dd>
                </div>
              </dl>
              <span className={`text-xs font-bold ${actionStyles[row.actionTone]}`}>
                {row.action}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
