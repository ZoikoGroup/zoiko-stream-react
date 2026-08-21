'use client';

import SectionShell from './SectionShell';

interface NetworkCard {
  tag: string;
  title: string;
  description: string;
}

const CARDS: NetworkCard[] = [
  {
    tag: 'STATE',
    title: 'Connectivity state',
    description: 'Connected, constrained, unstable, unavailable, or unknown.',
  },
  {
    tag: 'METRIC',
    title: 'Throughput/capacity',
    description: 'Publish only measured methodology and scope if exposed.',
  },
  {
    tag: 'TRAFFIC',
    title: 'Loss / congestion',
    description: 'Can be described conceptually when relevant.',
  },
  {
    tag: 'INFRASTRUCTURE',
    title: 'Route / dependency',
    description: 'May affect delivery where verified.',
  },
  {
    tag: 'WIRELESS',
    title: 'Mobile / constrained network',
    description: 'May require qualification by geography, carrier, device.',
  },
  {
    tag: 'FALLBACK',
    title: 'Unknown',
    description: 'Valid state when data is missing or measurement is unavailable.',
  },
];

export default function NetworkConditionsSection() {
  return (
    <SectionShell
      tone="light"
      background="/images/platform-adaptive-video-delivery/network-conditions-bg.png"
      title="Network conditions model"
      subtitle="Network context is one input, not a claim that the platform can overcome every connection limitation."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((card) => (
          <article
            key={card.title}
            className="flex flex-col gap-4 rounded-xl bg-slate-50 p-6 outline-1 -outline-offset-1 outline-slate-200"
          >
            <span className="font-mono text-xs font-bold text-blue-500">
              {card.tag}
            </span>

            <h3 className="text-base font-bold text-slate-900">{card.title}</h3>

            <p className="text-xs leading-5 text-slate-600">{card.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
