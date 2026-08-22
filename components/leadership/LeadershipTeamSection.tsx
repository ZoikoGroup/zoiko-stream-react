'use client';

interface Leader {
  name: string;
  title: string;
  description: string;
  tags: string[];
}

const LEADERS: Leader[] = [
  {
    name: 'Priya Raman',
    title: 'Chief Product Officer',
    description:
      'Accountable for product direction and platform experience across developer, enterprise, and Live Events surfaces, including roadmap discipline and cross-surface consistency.',
    tags: ['Product', 'Platform experience'],
  },
  {
    name: 'Marcus Ade',
    title: 'Chief Technology Officer',
    description:
      'Accountable for architecture, infrastructure, and service performance, including resilience, incident response, and production engineering discipline across the platform.',
    tags: ['Engineering', 'Reliability'],
  },
  {
    name: 'Sofia Bergström',
    title: 'VP, Live Events',
    description:
      'Accountable for Live Events product direction, broadcast readiness, and operational controls across memorial, worship, civic, and corporate broadcast programs.',
    tags: ['Live Events', 'Broadcast readiness'],
  },
  {
    name: 'Daniel Cho',
    title: 'Head of Developer Relations',
    description:
      'Accountable for the developer experience across APIs, SDKs, documentation, and integration quality, and for the support pathways developers rely on.',
    tags: ['Developer experience', 'SDKs & tooling'],
  },
  {
    name: 'Naomi Whitfield',
    title: 'Chief Trust & Security Officer',
    description:
      'Accountable for security, privacy, and compliance practice, including risk governance and evidence-led trust communications across the platform.',
    tags: ['Trust', 'Governance'],
  },
  {
    name: 'Julian Voss',
    title: 'Chief Commercial Officer',
    description:
      'Accountable for enterprise relationships, partnerships, and commercial execution, including onboarding, customer success, and support pathways.',
    tags: ['Commercial', 'Customer operations'],
  },
];

export default function LeadershipTeamSection() {
  return (
    <section id="leadership-team" className="w-full scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8 lg:py-24">
        {/* Header */}
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-[3px] bg-blue-400" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-blue-400">
              Public roster
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight text-neutral-700 sm:text-4xl">
            Leadership team.
          </h2>

          <p className="max-w-2xl text-base leading-6 text-gray-500">
            A curated set of senior leaders whose public accountability helps
            customers, partners, developers, candidates, and media understand how
            ZoikoStream is run.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LEADERS.map((leader) => (
            <article
              key={leader.name}
              className="flex flex-col rounded-2xl border border-t-[3px] border-teal-400 bg-white p-6 transition-shadow hover:shadow-[0px_12px_30px_-18px_rgba(30,35,50,0.35)]"
            >
              <h3 className="text-xl font-bold leading-8 text-neutral-700">
                {leader.name}
              </h3>

              <p className="mt-1.5 text-sm font-semibold leading-6 text-indigo-500">
                {leader.title}
              </p>

              <p className="mt-3 flex-1 text-sm leading-6 text-gray-500">
                {leader.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {leader.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-[100px] bg-slate-100 px-3 py-1.5 text-xs font-semibold leading-5 text-gray-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
