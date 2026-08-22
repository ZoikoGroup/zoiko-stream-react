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
    image: '/images/platform-resilient-delivery/domain-protected-workflow.png',
    alt: 'Digital process flow diagram',
    title: 'Protected workflow',
    description:
      'Live stream, VOD/replay, enterprise broadcast, or other approved media workflow under evaluation.',
  },
  {
    image: '/images/platform-resilient-delivery/domain-failure-condition.png',
    alt: 'Error data corruption visualization',
    title: 'Failure condition',
    description:
      'Observed, reported, predicted, or unknown condition that may impair a supported workflow.',
  },
  {
    image: '/images/platform-resilient-delivery/path-reroute.png',
    alt: 'Global network of connected delivery nodes',
    title: 'Impact',
    description:
      'Known or estimated effect on capability, geography, audience, media, or operation.',
  },
  {
    image: '/images/platform-resilient-delivery/domain-recovery-action.png',
    alt: 'System recovery interface syncing data',
    title: 'Recovery action',
    description:
      'A bounded action intended to restore or stabilize supported service.',
  },
  {
    image: '/images/platform-resilient-delivery/domain-verification.png',
    alt: 'Verified checkmark with a lock on a circuit board',
    title: 'Verification',
    description:
      'Evidence that a recovery/fallback outcome is current and within expected scope.',
  },
  {
    image: '/images/platform-resilient-delivery/domain-incident-status.png',
    alt: 'Operational log and analytics screens',
    title: 'Incident / status reference',
    description:
      'Public or private operational context tied to the condition where appropriate.',
  },
];

export default function DomainModelSection() {
  return (
    <SectionShell
      id="resilience-model"
      tone="light"
      background="/images/platform-resilient-delivery/domain-model-bg.png"
      title="Resilience domain model"
      subtitle="Common objects so design, engineering, and support refer to the same concepts."
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
              className="h-40 w-full bg-slate-950 object-cover"
            />

            <div className="flex flex-1 flex-col gap-3 p-5">
              <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
              <p className="text-sm leading-5 text-slate-600">{card.description}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
