interface AccessCard {
  title: string;
  description: string;
  image: string;
}

const cards: AccessCard[] = [
  {
    title: 'Accessible Authentication',
    description:
      'Login and corporate credential entries engineered to be fully navigated via keyboards and screen readers without traps.',
    image: '/images/accessibility-inclusion/card-accessible-auth.png',
  },
  {
    title: 'Recovery Paths',
    description:
      'When security checkpoints or authentication tokens fail, backup recovery channels remain accessible and compliant.',
    image: '/images/accessibility-inclusion/card-recovery-paths.png',
  },
  {
    title: 'Gated Viewer Access',
    description:
      'Enterprise ticketed and private invite events backed by fully accessible, compliant front-end security gates.',
    image: '/images/accessibility-inclusion/card-gated-access.png',
  },
];

export default function AccessibleAccessSection() {
  return (
    <section className="w-full bg-white px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10 lg:gap-14">
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-4">
        <h2 className="text-zinc-950 text-3xl sm:text-4xl font-bold leading-tight">
          Accessible access is part of the accessibility journey
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          Authentication, authorization, recovery, and access gates that remain fully operable with
          assistive technology.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <article
            key={card.title}
            className="bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 overflow-hidden flex flex-col"
          >
            <div
              className="h-52 w-full bg-slate-200 bg-cover bg-center"
              style={{ backgroundImage: `url('${card.image}')` }}
              role="presentation"
            />
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-zinc-950 text-lg font-bold">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-5">{card.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
