interface BarrierCard {
  title: string;
  description: string;
  image: string;
}

const cards: BarrierCard[] = [
  {
    title: 'Slide & Doc Hierarchy',
    description: 'Proper heading structures and sequential reading orders verified pre-air.',
    image: '/images/accessibility-inclusion/card-slide-hierarchy.png',
  },
  {
    title: 'Graphics & Contrast',
    description: 'Strict visual designs that do not rely on color markers alone for meaning.',
    image: '/images/accessibility-inclusion/card-graphics-contrast.png',
  },
  {
    title: 'Source Audio Quality',
    description: 'Crystal clear live sound feeds mapped to support caption engines and listeners.',
    image: '/images/accessibility-inclusion/card-source-audio.png',
  },
  {
    title: 'Alternative Descriptions',
    description: 'Text descriptions added where visual displays carry crucial event context.',
    image: '/images/accessibility-inclusion/card-alternative-descriptions.png',
  },
];

export default function SourceBarriersSection() {
  return (
    <section className="w-full bg-white px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10 lg:gap-14">
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-4">
        <h2 className="text-zinc-950 text-3xl sm:text-4xl font-bold leading-tight">
          Prevent source barriers before they reach viewers
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          Readable stage graphics, raw source audio quality, slide visual hierarchy, contrast checks,
          and alternative descriptions &mdash; verified before go-live.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <article
            key={card.title}
            className="bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 overflow-hidden flex flex-col"
          >
            {/* Exports are 289x160 — render at natural aspect so fine detail is not cropped */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={card.image}
              alt=""
              aria-hidden
              className="w-full h-40 object-contain bg-white"
            />
            <div className="p-5 flex flex-col gap-2">
              <h3 className="text-zinc-950 text-base font-bold">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-5">{card.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
