type SourceState = 'READY' | 'VERIFYING' | 'VERIFIED' | 'CHANGED';

interface SourceRow {
  label: string;
  category: string;
  segment: string;
  owner: string;
  readiness: SourceState;
  rehearsed: SourceState;
  fallback: string;
}

const rows: SourceRow[] = [
  {
    label: 'Camera 1 — Wide Stage',
    category: 'Live Cam',
    segment: '01.01 Intro',
    owner: 'Cam Operator A',
    readiness: 'READY',
    rehearsed: 'VERIFIED',
    fallback: 'Camera 2',
  },
  {
    label: 'Camera 2 — Presenter Portrait',
    category: 'Live Cam',
    segment: '01.02 Presentation',
    owner: 'Cam Operator B',
    readiness: 'READY',
    rehearsed: 'VERIFIED',
    fallback: 'Wide Wide',
  },
  {
    label: 'Remote Guest — London Office',
    category: 'WebRTC Stream',
    segment: '01.03 Panel Q&A',
    owner: 'Operator Host C',
    readiness: 'VERIFYING',
    rehearsed: 'CHANGED',
    fallback: 'Pre-recorded VOD',
  },
  {
    label: 'Presentation Screen Feed',
    category: 'HDMI Input',
    segment: '01.02 Presentation',
    owner: 'Presenter Laptop',
    readiness: 'READY',
    rehearsed: 'VERIFIED',
    fallback: 'Standby Logo',
  },
  {
    label: 'Standby Logo Assets',
    category: 'File Player',
    segment: '02.01 Recovery',
    owner: 'Automated Playback',
    readiness: 'READY',
    rehearsed: 'VERIFIED',
    fallback: 'Black State',
  },
];

const stateStyles: Record<SourceState, string> = {
  READY: 'bg-emerald-500/10 outline-emerald-500 text-emerald-500',
  VERIFIED: 'bg-emerald-500/10 outline-emerald-500 text-emerald-500',
  VERIFYING: 'bg-orange-300/10 outline-orange-300 text-orange-400',
  CHANGED: 'bg-orange-300/10 outline-orange-300 text-orange-400',
};

function StateBadge({ state }: { state: SourceState }) {
  return (
    <span
      className={`inline-block px-2 py-1 rounded-sm outline outline-1 outline-offset-[-1px] text-[10px] font-bold font-mono uppercase ${stateStyles[state]}`}
    >
      {state}
    </span>
  );
}

export default function SourcePlanSection() {
  return (
    <section className="w-full bg-white px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="w-full lg:max-w-[720px] flex flex-col gap-4">
          <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold leading-tight">
            Plan every production source before it becomes a live decision.
          </h2>
          <p className="text-gray-500 text-base leading-6">
            Organize expected cameras and other approved sources by segment, owner, readiness,
            timing, and fallback intent.
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl bg-slate-100 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 overflow-hidden">
        {/* Desktop table */}
        <table className="hidden lg:table w-full table-fixed border-collapse text-left">
          <colgroup>
            <col className="w-[22%]" />
            <col className="w-[13%]" />
            <col className="w-[15%]" />
            <col className="w-[15%]" />
            <col className="w-[11%]" />
            <col className="w-[11%]" />
            <col className="w-[13%]" />
          </colgroup>
          <thead>
            <tr className="bg-white border-b border-gray-200">
              <th className="px-5 py-4 text-gray-400 text-xs font-bold font-mono">SOURCE LABEL</th>
              <th className="px-3 py-4 text-gray-400 text-xs font-bold font-mono">CATEGORY</th>
              <th className="px-3 py-4 text-gray-400 text-xs font-bold font-mono">SEGMENT/CUE</th>
              <th className="px-3 py-4 text-gray-400 text-xs font-bold font-mono">OWNER</th>
              <th className="px-3 py-4 text-gray-400 text-xs font-bold font-mono">READINESS</th>
              <th className="px-3 py-4 text-gray-400 text-xs font-bold font-mono">REHEARSED</th>
              <th className="px-5 py-4 text-gray-400 text-xs font-bold font-mono">
                FALLBACK STATE
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={row.label}
                className={`border-b border-gray-200 last:border-b-0 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-100'}`}
              >
                <td className="px-5 py-4 text-zinc-900 text-sm font-bold align-middle break-words">
                  {row.label}
                </td>
                <td className="px-3 py-4 text-gray-500 text-xs font-mono align-middle break-words">
                  {row.category}
                </td>
                <td className="px-3 py-4 text-gray-500 text-xs align-middle break-words">
                  {row.segment}
                </td>
                <td className="px-3 py-4 text-gray-500 text-xs align-middle break-words">
                  {row.owner}
                </td>
                <td className="px-3 py-4 align-middle">
                  <StateBadge state={row.readiness} />
                </td>
                <td className="px-3 py-4 align-middle">
                  <StateBadge state={row.rehearsed} />
                </td>
                <td className="px-5 py-4 text-gray-500 text-xs align-middle break-words">
                  {row.fallback}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile cards */}
        <div className="lg:hidden flex flex-col">
          {rows.map((row) => (
            <div
              key={row.label}
              className="p-5 bg-white border-b border-gray-200 last:border-b-0 flex flex-col gap-3"
            >
              <h4 className="text-zinc-900 text-sm font-bold">{row.label}</h4>
              <div className="flex flex-wrap items-center gap-2">
                <StateBadge state={row.readiness} />
                <StateBadge state={row.rehearsed} />
              </div>
              <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
                <div className="flex flex-col">
                  <dt className="text-gray-400 text-[10px] font-bold font-mono">CATEGORY</dt>
                  <dd className="text-gray-600 text-xs">{row.category}</dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-gray-400 text-[10px] font-bold font-mono">SEGMENT/CUE</dt>
                  <dd className="text-gray-600 text-xs">{row.segment}</dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-gray-400 text-[10px] font-bold font-mono">OWNER</dt>
                  <dd className="text-gray-600 text-xs">{row.owner}</dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-gray-400 text-[10px] font-bold font-mono">FALLBACK</dt>
                  <dd className="text-gray-600 text-xs">{row.fallback}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
