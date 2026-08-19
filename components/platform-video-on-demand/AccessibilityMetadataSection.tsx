import Image from 'next/image';

const cards = [
  {
    image: '/images/platform-video-on-demand/Rectangle (94).png',
    title: 'Track Identity',
    description: 'Explicit mapping of multi-language WebVTT files.',
  },
  {
    image: '/images/platform-video-on-demand/Rectangle (95).png',
    title: 'Readiness States',
    description: 'Automated transcription accuracy thresholds verified.',
  },
  {
    image: '/images/platform-video-on-demand/Rectangle (96).png',
    title: 'Player Presentation',
    description: 'Styling rules applied uniformly across custom target clients.',
  },
  {
    image: '/images/platform-video-on-demand/Rectangle (97).png',
    title: 'Alternative Access',
    description: 'Descriptive audio tracks matched with main stream timestamps.',
  },
];

const metadataSpec = [
  {
    label: 'Core Metadata',
    description: 'Explicit title, descriptive text, and publication origin.',
  },
  {
    label: 'Taxonomy & Tags',
    description: 'Platform categories and custom search keyword bindings.',
  },
  {
    label: 'Relationships',
    description: 'Parent/child mapping for episodes or event sequences.',
  },
  {
    label: 'Search Indexing',
    description: 'Optimized indexing parameters for internal discovery APIs.',
  },
  {
    label: 'Version Control',
    description: 'Select which master rendition to associate with publication.',
  },
];

export default function AccessibilityMetadataSection() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-28 py-16 sm:py-20 lg:py-24 flex flex-col gap-14">
      <div className="flex flex-col gap-3">
        <h2 className="text-zinc-950 text-3xl sm:text-4xl font-bold leading-tight">
          Accessibility, metadata, and language readiness
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Left grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-slate-50 rounded-xl border border-gray-200 flex flex-col overflow-hidden"
            >
              <div className="relative w-full h-28">
                <Image src={card.image} alt={card.title} fill className="object-cover" />
              </div>
              <div className="p-4 flex flex-col gap-2">
                <p className="text-zinc-950 text-sm font-bold">{card.title}</p>
                <p className="text-slate-600 text-xs font-normal">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right metadata spec */}
        <div className="w-full lg:w-[500px] p-7 bg-slate-50 rounded-2xl border border-gray-200 flex flex-col gap-5 shrink-0">
          <p className="text-blue-500 text-sm font-bold tracking-wide uppercase">
            GOVERNED METADATA SPEC
          </p>
          <div className="flex flex-col gap-3">
            {metadataSpec.map((item, i) => (
              <div key={item.label} className="flex flex-col gap-1">
                <p className="text-zinc-950 text-xs font-bold">{item.label}</p>
                <p className="text-slate-600 text-xs font-normal">{item.description}</p>
                {i < metadataSpec.length - 1 && <div className="border-t border-gray-200 mt-1" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
