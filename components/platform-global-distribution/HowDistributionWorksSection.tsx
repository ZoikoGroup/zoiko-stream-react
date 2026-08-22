'use client';

import SectionShell from './SectionShell';

interface DomainCard {
  image: string;
  alt: string;
  title: string;
  description: string;
}

const CARDS: DomainCard[] = [
  {
    image: '/images/platform-global-distribution/card-distribution-capability.png',
    alt: 'Grid of illuminated network nodes',
    title: 'Distribution capability',
    description:
      'The public-safe delivery capability being evaluated, with status, owner, and evidence source.',
  },
  {
    image: '/images/platform-global-distribution/card-geography.png',
    alt: 'World map with connected regions',
    title: 'Geography',
    description:
      'Country, market, region, or zone labels used for public scope with hierarchy and qualifiers.',
  },
  {
    image: '/images/platform-global-distribution/card-availability-record.png',
    alt: 'Document validation report panel',
    title: 'Availability record',
    description:
      'Relationship between capability and geography with state, effective date, review date, and exclusions.',
  },
  {
    image: '/images/platform-global-distribution/card-infrastructure-reference.png',
    alt: 'Connected infrastructure nodes',
    title: 'Infrastructure reference',
    description:
      'Approved public-safe infrastructure role, geography, and capability with publication state.',
  },
  {
    image: '/images/platform-global-distribution/card-routing-policy.png',
    alt: 'Abstract routing paths',
    title: 'Routing policy',
    description:
      'Approved concept describing route selection where publishable, with scope and evidence.',
  },
  {
    image: '/images/platform-global-distribution/card-performance-evidence.png',
    alt: 'Performance overview dashboard',
    title: 'Performance evidence',
    description:
      'Measured result tied to geography and conditions with metric, method, period, and sample.',
  },
];

export default function HowDistributionWorksSection() {
  return (
    <SectionShell
      tone="light"
      background="/images/platform-global-distribution/how-distribution-works-bg.png"
      title="How distribution works"
      subtitle="From capability to geography to evidence — a qualified delivery model."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((card) => (
          <article
            key={card.title}
            className="flex flex-col overflow-hidden rounded-xl bg-white outline-1 -outline-offset-1 outline-gray-200"
          >
            <img
              src={card.image}
              alt={card.alt}
              className="h-48 w-full object-cover"
            />

            <div className="flex flex-1 flex-col gap-3 p-6">
              <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
              <p className="text-sm leading-5 text-slate-600">{card.description}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
