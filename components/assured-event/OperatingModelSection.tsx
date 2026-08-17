interface ModuleCard {
  module: string;
  title: string;
  description: string;
  image: string;
}

const modules: ModuleCard[] = [
  {
    module: 'Module 01',
    title: 'Define the scope',
    description: 'Identify channels, targets, and expected SLA boundaries clearly.',
    image: '/images/assured-event/module-01.png',
  },
  {
    module: 'Module 02',
    title: 'Assign responsibility',
    description: 'Explicitly coordinate owner actions for each operational category.',
    image: '/images/assured-event/module-02.png',
  },
  {
    module: 'Module 03',
    title: 'Verify the current plan',
    description: 'Deep pre-checks on failovers, keys, and network pathways.',
    image: '/images/assured-event/module-03.png',
  },
  {
    module: 'Module 04',
    title: 'Control material change',
    description: 'Hold updates subject to change queue validation rules.',
    image: '/images/assured-event/module-04.png',
  },
  {
    module: 'Module 05',
    title: 'Operate with clear support',
    description: 'Instant response tiers and technical operators dedicated to you.',
    image: '/images/assured-event/module-05.png',
  },
  {
    module: 'Module 06',
    title: 'Preserve evidence',
    description: 'Lock down tamper-proof audit trails of the entire event workflow.',
    image: '/images/assured-event/module-06.png',
  },
];

export default function OperatingModelSection() {
  return (
    <section className="w-full bg-gray-50 px-6 md:px-12 xl:px-[112px] py-16 lg:py-20 flex flex-col gap-12">
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-3">
        <h2 className="text-zinc-950 text-3xl sm:text-4xl font-bold leading-tight">
          The Assured Event Operating Model
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          Six hard pillars designed to eliminate downstream assumptions and ensure operational
          readiness.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((item) => (
          <article
            key={item.module}
            className="bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 overflow-hidden flex flex-col"
          >
            <div
              className="h-44 w-full bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 bg-cover bg-center"
              style={{ backgroundImage: `url('${item.image}')` }}
              role="presentation"
            />
            <div className="p-5 flex flex-col gap-2.5">
              <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">
                {item.module}
              </span>
              <h3 className="text-zinc-950 text-base font-bold">{item.title}</h3>
              <p className="text-gray-500 text-xs leading-5">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
