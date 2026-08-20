'use client';

interface Domain {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const DOMAINS: Domain[] = [
  {
    number: '01',
    title: 'Product & Platform',
    description:
      'Product direction, platform experience, roadmap discipline, product operations, and cross-surface consistency.',
    image: '/images/leadership/product-platform.png',
    alt: 'Product analytics dashboard on a laptop screen',
  },
  {
    number: '02',
    title: 'Engineering & Reliability',
    description:
      'Architecture, infrastructure, service performance, resilience, incident response, and production engineering discipline.',
    image: '/images/leadership/engineering-reliability.png',
    alt: 'Broadcast control desk during a live production',
  },
  {
    number: '03',
    title: 'Live Events',
    description:
      'Live-event product direction, readiness, broadcast workflows, operational controls, and high-stakes production experience.',
    image: '/images/leadership/live-events.png',
    alt: 'Live event crew coordinating on headsets',
  },
  {
    number: '04',
    title: 'Developer Experience',
    description:
      'APIs, implementation experience, documentation, integration quality, SDK/tooling direction, and developer support pathways.',
    image: '/images/leadership/developer-experience.png',
    alt: 'Source code on a developer workstation',
  },
  {
    number: '05',
    title: 'Trust & Governance',
    description:
      'Security, privacy, compliance, service communications, risk governance, and evidence-led trust practices.',
    image: '/images/leadership/trust-governance.png',
    alt: 'Team reviewing governance documentation in a meeting room',
  },
  {
    number: '06',
    title: 'Commercial & Customer',
    description:
      'Enterprise relationships, partnerships, commercial execution, onboarding, success, support pathways, and customer feedback loops.',
    image: '/images/leadership/commercial-customer.png',
    alt: 'Audience watching a live outdoor event',
  },
];

export default function ResponsibilityMapSection() {
  return (
    <section className="w-full bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8 lg:py-24">
        {/* Header */}
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-[3px] bg-blue-400" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-blue-400">
              Responsibility map
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight text-neutral-700 sm:text-4xl">
            Where accountability sits.
          </h2>

          <p className="max-w-2xl text-base leading-6 text-gray-500">
            A public responsibility map, not an internal org chart. Each domain
            links to the leader publicly accountable for it, or to the most relevant
            platform surface.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DOMAINS.map((domain) => (
            <article
              key={domain.number}
              className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white"
            >
              <div className="aspect-[377/235] w-full overflow-hidden bg-slate-100">
                <img
                  src={domain.image}
                  alt={domain.alt}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-bold leading-5 tracking-wide text-teal-400">
                  {domain.number}
                </span>

                <h3 className="mt-3 text-lg font-bold leading-7 text-neutral-700">
                  {domain.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {domain.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
