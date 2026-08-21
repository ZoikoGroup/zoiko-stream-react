'use client';

import SectionShell from './SectionShell';

interface RiskCard {
  image: string;
  alt: string;
  title: string;
  description: string;
}

const CARDS: RiskCard[] = [
  {
    image: '/images/platform-resilient-delivery/security-topology-discovery.png',
    alt: 'Circuit topology diagram',
    title: 'Topology discovery',
    description: 'Use abstract failure families and public-safe architecture only.',
  },
  {
    image: '/images/platform-resilient-delivery/security-capacity-thresholds.png',
    alt: 'Capacity and threshold monitoring panel',
    title: 'Capacity / thresholds',
    description: 'Discuss scope and evidence method only if approved.',
  },
  {
    image: '/images/platform-resilient-delivery/evidence-change-history.png',
    alt: 'Branching trigger logic diagram',
    title: 'Failover trigger logic',
    description: 'Publish only public-safe behavior if necessary.',
  },
  {
    image: '/images/platform-resilient-delivery/security-recovery-actions.png',
    alt: 'Shield with a wrench representing maintenance actions',
    title: 'Recovery actions',
    description: 'Document customer-safe actions and support routes.',
  },
  {
    image: '/images/platform-resilient-delivery/security-ddos-abuse.png',
    alt: 'Shield deflecting an attack stream',
    title: 'DDoS / abuse',
    description:
      'Trust Center may describe approved protections and response boundary.',
  },
  {
    image: '/images/platform-resilient-delivery/security-incident.png',
    alt: 'Active security incident dashboard',
    title: 'Security incident',
    description:
      'Use Responsible Disclosure / Trust / Status authority as appropriate.',
  },
];

export default function SecurityPrivacySection() {
  return (
    <SectionShell
      tone="light"
      background="/images/platform-resilient-delivery/security-privacy-bg.png"
      title="Security, privacy, and abuse resistance"
      subtitle="Resilience controls can expose topology, capacity, and response logic. Public content must inform without becoming an attack guide."
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
              className="h-48 w-full bg-slate-950 object-cover"
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
