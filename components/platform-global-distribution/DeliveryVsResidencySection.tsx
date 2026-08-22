'use client';

import SectionShell from './SectionShell';

interface ResidencyClaim {
  title: string;
  description: string;
}

const CLAIMS: ResidencyClaim[] = [
  {
    title: 'Delivery geography',
    description:
      'Where audiences can receive approved delivery. This governs viewer playback capabilities.',
  },
  {
    title: 'Infrastructure presence',
    description:
      'Where physical server nodes and CDN edge points of presence are deployed.',
  },
  {
    title: 'Processing location',
    description:
      'Where media transcoding, packaging, and cryptographic key generation happen.',
  },
  {
    title: 'Storage location',
    description:
      'Where long-term customer data, recording archives, and system metadata are stored.',
  },
  {
    title: 'Legal residency',
    description:
      'Jurisdictional location for data-residency compliance, SLA agreements, and audits.',
  },
];

export default function DeliveryVsResidencySection() {
  return (
    <SectionShell
      tone="dark"
      background="/images/platform-global-distribution/delivery-vs-residency-bg.png"
      title="Delivery geography vs. data residency"
      subtitle="Five separate claims that must never be conflated."
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {CLAIMS.map((claim) => (
          <article
            key={claim.title}
            className="flex flex-col gap-5 rounded-xl bg-zinc-900/80 p-7 outline-1 -outline-offset-1 outline-gray-800"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-teal-400/10">
                <img
                  src="/images/platform-global-distribution/shield-teal.svg"
                  alt=""
                  aria-hidden="true"
                  className="size-5 shrink-0"
                />
              </span>

              <h3 className="flex-1 text-base font-bold text-white">{claim.title}</h3>
            </div>

            <p className="text-sm leading-6 text-slate-400">{claim.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
