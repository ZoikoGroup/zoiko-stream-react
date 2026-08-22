'use client';

import SectionShell from './SectionShell';

interface ContextCard {
  title: string;
  description: string;
  chips: string[];
}

const CARDS: ContextCard[] = [
  {
    title: 'Live Streaming',
    description:
      'Core signaling, RTMP/SRT source ingestion, regional buffering, and automatic failover recording.',
    chips: ['Ingest & Delivery', 'Real-Time Monitor'],
  },
  {
    title: 'Video on Demand',
    description:
      'Asset packaging, dynamic encryption keys, custom edge caching, and worldwide player distribution.',
    chips: ['Static Assets', 'Multi-CDN packaging'],
  },
  {
    title: 'Enterprise Broadcasting',
    description:
      'Fine-grained SSO controls, organizational compliance rules, white-label streaming, and SLAs.',
    chips: ['Directory Integration', 'Tenant Isolation'],
  },
  {
    title: 'Developers',
    description:
      'Sandbox and production access, API scope parameters, comprehensive SDK libraries, and guides.',
    chips: ['API Endpoints', 'Webhooks'],
  },
  {
    title: 'ZoikoStream Live Events',
    description:
      'On-site production integration, audience routing paths, accessibility targets, and dedicated support.',
    chips: ['Event Geography', 'Production Model'],
  },
];

export default function ContextApplicabilitySection() {
  return (
    <SectionShell
      tone="light"
      background="/images/platform-global-distribution/context-applicability-bg.png"
      title="Live, VOD, enterprise, and events context"
      subtitle="A geography can be available for one context and not another."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((card) => (
          <article
            key={card.title}
            className="flex flex-col gap-5 rounded-2xl bg-white p-7 outline-[1.5px] -outline-offset-[1.5px] outline-slate-200"
          >
            <h3 className="text-xl font-bold text-slate-900">{card.title}</h3>

            <p className="flex-1 text-sm leading-6 text-slate-600">
              {card.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {card.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-sm bg-slate-200 px-3 py-1 font-mono text-xs font-bold text-slate-600 outline-1 -outline-offset-1 outline-slate-300"
                >
                  {chip}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
