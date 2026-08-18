interface AssuranceCard {
  title: string;
  description: string;
  image: string;
}

const cards: AssuranceCard[] = [
  {
    title: 'Source Plan',
    description: 'Know what is expected, who owns it, and whether it is ready.',
    image: '/images/production-switching-graphics/card-source-plan.png',
  },
  {
    title: 'Switching Control',
    description: 'Keep preview, program, standby, and recovery states distinct.',
    image: '/images/production-switching-graphics/card-switching-control.png',
  },
  {
    title: 'Run-of-Show',
    description: 'Operate from a versioned cue plan rather than memory.',
    image: '/images/production-switching-graphics/card-run-of-show.png',
  },
  {
    title: 'Graphics Governance',
    description: 'Use approved, current, accessible visual assets.',
    image: '/images/production-switching-graphics/card-graphics-governance.png',
  },
  {
    title: 'Change Control',
    description: 'Surface what changed after rehearsal.',
    image: '/images/production-switching-graphics/card-change-control.png',
  },
  {
    title: 'Recovery',
    description: 'Keep fallback decisions visible and role-authorized.',
    image: '/images/production-switching-graphics/card-recovery.png',
  },
];

export default function AssurancesSection() {
  return (
    <section className="w-full bg-white border-b border-gray-200 px-6 md:px-12 xl:px-[112px] py-16 flex flex-col gap-8">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold leading-tight">
          Secured Production Assurances
        </h2>
      </div>

      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <article
            key={card.title}
            className="p-6 bg-slate-100 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col gap-5"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={card.image}
              alt=""
              aria-hidden
              className="w-full h-44 object-cover rounded-lg"
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-zinc-900 text-lg font-bold">{card.title}</h3>
              <p className="text-gray-500 text-sm leading-5">{card.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
