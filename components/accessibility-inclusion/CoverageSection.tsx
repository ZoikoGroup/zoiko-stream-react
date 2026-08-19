interface CoverageCard {
  title: string;
  description: string;
  image: string;
}

const coverage: CoverageCard[] = [
  {
    title: 'Accessible Viewer Controls',
    description:
      'Keyboard, focus, screen labels, zoom/reflow, and reduced-motion options natively configured.',
    image: '/images/accessibility-inclusion/card-viewer-controls.png',
  },
  {
    title: 'Captions & Language',
    description:
      'SLA-backed captions and multi-language audio streams wherever configured and verified.',
    image: '/images/accessibility-inclusion/card-captions-language.png',
  },
  {
    title: 'Accessible Access',
    description:
      'Credential flows, SAML SSO, and recovery options fully operable with assistive technology.',
    image: '/images/accessibility-inclusion/card-accessible-access.png',
  },
  {
    title: 'Content Accessibility',
    description:
      'Readable stage graphics, rigid color contrast checks, and alternative text-descriptions.',
    image: '/images/accessibility-inclusion/card-content-accessibility.png',
  },
  {
    title: 'Alternative Access',
    description:
      'Deterministic fallback pathways available immediately when primary experience hits limits.',
    image: '/images/accessibility-inclusion/card-alternative-access.png',
  },
  {
    title: 'Live Accessibility Support',
    description:
      'Direct hotline issue routing to engineers dedicated to live accessibility operations.',
    image: '/images/accessibility-inclusion/card-live-support.png',
  },
];

export default function CoverageSection() {
  return (
    <section className="w-full bg-white px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10 lg:gap-14">
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-3">
        <h2 className="text-zinc-950 text-3xl sm:text-4xl font-bold leading-tight">
          What accessible event delivery covers
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          Six fundamental operational tracks designed to secure programmatic inclusion for every
          enterprise broadcast.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coverage.map((card) => (
          <article
            key={card.title}
            className="bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 overflow-hidden flex flex-col"
          >
            <div
              className="h-40 w-full bg-slate-200 bg-cover bg-center"
              style={{ backgroundImage: `url('${card.image}')` }}
              role="presentation"
            />
            <div className="p-5 flex flex-col gap-2.5">
              <h3 className="text-zinc-950 text-lg font-bold">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-5">{card.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
