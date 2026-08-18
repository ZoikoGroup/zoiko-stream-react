interface GovernanceCard {
  title: string;
  description: string;
  image: string;
}

const cards: GovernanceCard[] = [
  {
    title: 'Claim Control',
    description:
      'We forbid unsupported compliance, certification, or universal-access claims. We verify each statement strictly.',
    image: '/images/accessibility-inclusion/card-claim-control.png',
  },
  {
    title: 'Privacy Protection',
    description:
      'No user profiling based on disability or personal medical status. Requests remain strictly minimized.',
    image: '/images/accessibility-inclusion/card-privacy-protection.png',
  },
  {
    title: 'Registry Architecture',
    description:
      'Capability, evidence, and limitation registries systematically gate and validate all external public declarations.',
    image: '/images/accessibility-inclusion/card-registry-architecture.png',
  },
  {
    title: 'Operational Boundary',
    description:
      'Live-ops support lines remain separate and are never subordinated to commercial sales teams.',
    image: '/images/accessibility-inclusion/card-operational-boundary.png',
  },
];

export default function GovernanceSection() {
  return (
    <section
      className="w-full bg-neutral-900 bg-cover bg-center px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10 lg:gap-14"
      style={{
        backgroundImage: `linear-gradient(rgba(3, 7, 18, 0.2), rgba(3, 7, 18, 0.2)), url('/images/accessibility-inclusion/trust-governance-bg.png')`,
      }}
    >
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-4">
        <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold leading-tight">
          Governed claims. Controlled registries. No marketing shortcuts.
        </h2>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Every public accessibility claim resolves through evidence and legal-claim registries.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6">
        {cards.map((card) => (
          <article
            key={card.title}
            className="p-5 sm:p-6 bg-zinc-950/80 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex items-start gap-5"
          >
            <div
              className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-lg bg-gray-950 bg-cover bg-center"
              style={{ backgroundImage: `url('${card.image}')` }}
              role="presentation"
            />
            <div className="flex-1 flex flex-col gap-2">
              <h3 className="text-slate-100 text-base font-bold">{card.title}</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-5">{card.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
