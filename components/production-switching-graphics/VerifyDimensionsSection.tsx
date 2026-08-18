type DimensionState = 'READY' | 'NEEDS REVIEW';

interface Dimension {
  index: number;
  title: string;
  owner: string;
  state: DimensionState;
  updated: string;
}

const dimensions: Dimension[] = [
  {
    index: 1,
    title: 'Production Responsibility',
    owner: 'Event Producer',
    state: 'READY',
    updated: '10 mins ago',
  },
  { index: 2, title: 'Source Plan', owner: 'Ingest Lead', state: 'READY', updated: '1 hour ago' },
  {
    index: 3,
    title: 'Run-of-Show',
    owner: 'Technical Director',
    state: 'NEEDS REVIEW',
    updated: 'Just now',
  },
  {
    index: 4,
    title: 'Graphics/Assets',
    owner: 'Design Lead',
    state: 'READY',
    updated: '2 hours ago',
  },
  {
    index: 5,
    title: 'Switching/Layout',
    owner: 'Operator Lead',
    state: 'READY',
    updated: '1 day ago',
  },
  {
    index: 6,
    title: 'Remote Contribution',
    owner: 'Paris Host Operator',
    state: 'NEEDS REVIEW',
    updated: '30 mins ago',
  },
  {
    index: 7,
    title: 'Audience/Access',
    owner: 'Governance Admin',
    state: 'READY',
    updated: '12 hours ago',
  },
  {
    index: 8,
    title: 'Captions/Language',
    owner: 'Accessibility Ops',
    state: 'READY',
    updated: '3 hours ago',
  },
  {
    index: 9,
    title: 'Fallback/Recovery',
    owner: 'Network Lead',
    state: 'READY',
    updated: '1 hour ago',
  },
  {
    index: 10,
    title: 'Changes Since Rehearsal',
    owner: 'QA Director',
    state: 'NEEDS REVIEW',
    updated: '5 mins ago',
  },
];

const stateStyles: Record<DimensionState, string> = {
  READY: 'bg-emerald-500/10 outline-emerald-500 text-emerald-600',
  'NEEDS REVIEW': 'bg-orange-300/10 outline-orange-400 text-orange-500',
};

export default function VerifyDimensionsSection() {
  return (
    <section className="w-full bg-white px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold leading-tight">
          Verify every dimension before go-live.
        </h2>
      </div>

      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-4">
        {dimensions.map((dimension) => (
          <article
            key={dimension.index}
            className="p-5 bg-slate-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col gap-2"
          >
            <div className="w-full flex flex-wrap justify-between items-center gap-2">
              <div className="flex items-center gap-3">
                <span className="text-gray-400 text-[10px] font-bold font-mono uppercase">
                  Dimension {dimension.index}
                </span>
                <span
                  className={`px-2 py-1 rounded-sm outline outline-1 outline-offset-[-1px] text-[10px] font-bold font-mono uppercase ${stateStyles[dimension.state]}`}
                >
                  {dimension.state}
                </span>
              </div>
              <span className="text-gray-400 text-xs font-mono">{dimension.updated}</span>
            </div>
            <h3 className="text-zinc-900 text-base font-bold">{dimension.title}</h3>
            <p className="text-gray-500 text-sm">Owner: {dimension.owner}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
