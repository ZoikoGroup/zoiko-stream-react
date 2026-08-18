type CueState = 'VERIFIED' | 'CHANGED';

interface CueRow {
  cue: string;
  segment: string;
  time: string;
  source: string;
  graphic: string;
  owner: string;
  readiness: CueState;
  fallback: string;
}

const rows: CueRow[] = [
  {
    cue: 'CUE 01',
    segment: 'Preshow Loop',
    time: '12:45',
    source: 'VOD Reel A',
    graphic: 'Intro Billboard',
    owner: 'Main operator',
    readiness: 'VERIFIED',
    fallback: 'Hold Screen',
  },
  {
    cue: 'CUE 02',
    segment: 'Keynote Walk-On',
    time: '13:00',
    source: 'CAM 1 (Wide)',
    graphic: 'Lower Third - CEO',
    owner: 'Operator Host C',
    readiness: 'VERIFIED',
    fallback: 'Backup Cam 3',
  },
  {
    cue: 'CUE 03',
    segment: 'Partner Presentation',
    time: '13:15',
    source: 'Remote Guest',
    graphic: 'Lower Third - Guest',
    owner: 'Operator Host C',
    readiness: 'CHANGED',
    fallback: 'Pre-recorded VOD',
  },
  {
    cue: 'CUE 04',
    segment: 'Panel Discussion',
    time: '13:30',
    source: 'CAM 2 (Presenter)',
    graphic: 'Split Layout Overlay',
    owner: 'Main operator',
    readiness: 'VERIFIED',
    fallback: 'Camera 1 Wide',
  },
];

const stateStyles: Record<CueState, string> = {
  VERIFIED: 'bg-emerald-500/10 outline-emerald-500 text-emerald-500',
  CHANGED: 'bg-orange-300/10 outline-orange-300 text-orange-300',
};

export default function RunOfShowSection() {
  return (
    <section
      className="w-full bg-zinc-950 bg-cover bg-top bg-no-repeat px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10"
      style={{
        backgroundImage: `linear-gradient(rgba(9, 9, 11, 0.15), rgba(9, 9, 11, 0.15)), url('/images/production-switching-graphics/run-of-show-bg.png')`,
      }}
    >
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-4">
        <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold leading-tight">
          Operate from a versioned cue plan, not memory.
        </h2>
        <p className="text-slate-400 text-base leading-6">
          The run-of-show is the authoritative operational sequence. It must be versioned and
          human-readable.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl bg-zinc-950/80 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 overflow-hidden">
        {/* Desktop table */}
        <table className="hidden lg:table w-full table-fixed border-collapse text-left">
          <colgroup>
            <col className="w-[9%]" />
            <col className="w-[16%]" />
            <col className="w-[8%]" />
            <col className="w-[15%]" />
            <col className="w-[16%]" />
            <col className="w-[14%]" />
            <col className="w-[11%]" />
            <col className="w-[13%]" />
          </colgroup>
          <thead>
            <tr className="bg-zinc-900/80 border-b border-gray-800">
              <th className="px-4 py-3.5 text-gray-400 text-[10px] font-bold font-mono">CUE #</th>
              <th className="px-3 py-3.5 text-gray-400 text-[10px] font-bold font-mono">SEGMENT</th>
              <th className="px-3 py-3.5 text-gray-400 text-[10px] font-bold font-mono">TIME</th>
              <th className="px-3 py-3.5 text-gray-400 text-[10px] font-bold font-mono">
                SOURCE/SCENE
              </th>
              <th className="px-3 py-3.5 text-gray-400 text-[10px] font-bold font-mono">
                GRAPHIC/ASSET
              </th>
              <th className="px-3 py-3.5 text-gray-400 text-[10px] font-bold font-mono">
                CUE OWNER
              </th>
              <th className="px-3 py-3.5 text-gray-400 text-[10px] font-bold font-mono">
                READINESS
              </th>
              <th className="px-4 py-3.5 text-gray-400 text-[10px] font-bold font-mono">FALLBACK</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.cue}
                className={`border-b border-gray-800 last:border-b-0 ${
                  row.readiness === 'CHANGED' ? 'bg-orange-300/5' : ''
                }`}
              >
                <td className="px-4 py-4 text-slate-400 text-xs font-mono align-middle">
                  {row.cue}
                </td>
                <td className="px-3 py-4 text-slate-100 text-sm font-bold align-middle break-words">
                  {row.segment}
                </td>
                <td className="px-3 py-4 text-slate-400 text-xs align-middle">{row.time}</td>
                <td className="px-3 py-4 text-slate-400 text-xs align-middle break-words">
                  {row.source}
                </td>
                <td className="px-3 py-4 text-slate-400 text-xs align-middle break-words">
                  {row.graphic}
                </td>
                <td className="px-3 py-4 text-slate-400 text-xs align-middle break-words">
                  {row.owner}
                </td>
                <td className="px-3 py-4 align-middle">
                  <span
                    className={`inline-block px-2 py-1 rounded-sm outline outline-1 outline-offset-[-1px] text-[10px] font-bold font-mono ${stateStyles[row.readiness]}`}
                  >
                    {row.readiness}
                  </span>
                </td>
                <td className="px-4 py-4 text-slate-400 text-xs align-middle break-words">
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
              key={row.cue}
              className="p-5 border-b border-gray-800 last:border-b-0 flex flex-col gap-3"
            >
              <div className="flex flex-wrap justify-between items-center gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 text-xs font-mono">{row.cue}</span>
                  <h4 className="text-slate-100 text-sm font-bold">{row.segment}</h4>
                </div>
                <span
                  className={`px-2 py-1 rounded-sm outline outline-1 outline-offset-[-1px] text-[10px] font-bold font-mono ${stateStyles[row.readiness]}`}
                >
                  {row.readiness}
                </span>
              </div>
              <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
                <div className="flex flex-col">
                  <dt className="text-gray-500 text-[10px] font-bold font-mono">TIME</dt>
                  <dd className="text-slate-400 text-xs">{row.time}</dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-gray-500 text-[10px] font-bold font-mono">SOURCE/SCENE</dt>
                  <dd className="text-slate-400 text-xs">{row.source}</dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-gray-500 text-[10px] font-bold font-mono">GRAPHIC/ASSET</dt>
                  <dd className="text-slate-400 text-xs">{row.graphic}</dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-gray-500 text-[10px] font-bold font-mono">CUE OWNER</dt>
                  <dd className="text-slate-400 text-xs">{row.owner}</dd>
                </div>
                <div className="flex flex-col col-span-2">
                  <dt className="text-gray-500 text-[10px] font-bold font-mono">FALLBACK</dt>
                  <dd className="text-slate-400 text-xs">{row.fallback}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
