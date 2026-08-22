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
    image: '/images/platform-global-distribution/thumbnail-unauthorized.png',
    alt: 'Shield with a lock representing blocked unauthorized access',
    title: 'Unauthorized access',
    description:
      'Explicit identity and session policy evaluations. Routes directly to Access Control and Secure Playback guidance.',
  },
  {
    image: '/images/platform-global-distribution/thumbnail-hotlinking.png',
    alt: 'Broken chain link representing hotlinking prevention',
    title: 'Hotlinking abuse',
    description:
      'Restricts playback options using verified HTTP referrers, signed player embeds, and CDN token verification.',
  },
  {
    image: '/images/platform-global-distribution/thumbnail-ddos.png',
    alt: 'Shield deflecting high-volume traffic',
    title: 'Traffic abuse / DDoS',
    description:
      'Mitigates high-volume automated service disruption threats. Protected silently inside ZoikoStream Trust Center.',
  },
  {
    image: '/images/platform-global-distribution/thumbnail-privacy.png',
    alt: 'Globe with location markers',
    title: 'Privacy and location data',
    description:
      'No exact coordinates are stored. Enforces minimum location granularity required for approved geo-restriction purposes.',
  },
  {
    image: '/images/platform-global-distribution/thumbnail-accessibility.png',
    alt: 'Accessibility icon with WCAG compliance panel',
    title: 'Accessibility compliance',
    description:
      'Full WCAG 2.2 AA alignment. Clean structured text represents all distribution metadata; visual map is never essential.',
  },
  {
    image: '/images/platform-global-distribution/thumbnail-nojs.png',
    alt: 'Code editor showing a no-JavaScript fallback',
    title: 'No-JavaScript fallback',
    description:
      'Server-rendered availability states. Critical compliance and geographical indexes remain available without client scripts.',
  },
];

export default function SecurityPrivacySection() {
  return (
    <SectionShell
      tone="light"
      background="/images/platform-global-distribution/security-privacy-bg.png"
      title="Security, privacy, and accessibility"
      subtitle="Distribution exposes operational risks. Public content must inform without leaking exploit detail."
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
              <p className="text-sm leading-6 text-slate-600">{card.description}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
