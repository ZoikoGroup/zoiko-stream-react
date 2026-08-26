import Image from 'next/image';

const paths = [
  {
    image: '/images/platform-media-operations-overview/CardImg (21).png',
    title: 'Run recurring broadcasts',
    subtitle: 'Need governance, repeatability, owners',
  },
  {
    image: '/images/platform-media-operations-overview/CardImg (22).png',
    title: 'Organize media assets',
    subtitle: 'Need identity, metadata, rights, versions',
  },
  {
    image: '/images/platform-media-operations-overview/CardImg (23).png',
    title: 'Observe live stream health',
    subtitle: 'Need state, signals, alerts, diagnostics',
  },
  {
    image: '/images/platform-media-operations-overview/CardImg (24).png',
    title: 'Continue after live',
    subtitle: 'Need recording, replay, rights, preservation',
  },
  {
    image: '/images/platform-media-operations-overview/CardImg (25).png',
    title: 'Support captions and languages',
    subtitle: 'Need caption/language workflow ownership',
  },
  {
    image: '/images/platform-media-operations-overview/CardImg (26).png',
    title: 'Measure operations',
    subtitle: 'Need governed metrics, evidence, interpretation',
  },
  {
    image: '/images/platform-media-operations-overview/CardImg (27).png',
    title: 'Run a managed event',
    subtitle: 'Need event planning and operations',
  },
  {
    image: '/images/platform-media-operations-overview/CardImg (28).png',
    title: 'Build or integrate',
    subtitle: 'Need APIs, SDKs, docs, authentication',
  },
  {
    image: '/images/platform-media-operations-overview/CardImg (29).png',
    title: 'Resolve an active issue',
    subtitle: 'Need status, documentation, support',
  },
];

export default function OperatingPathSection() {
  return (
    <section
      className="relative w-full bg-white px-4 sm:px-8 lg:px-28 py-16 sm:py-20 lg:py-24 border-b border-gray-200 flex flex-col gap-14"
      
    >
      <div className="flex flex-col gap-3">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold leading-tight font-['Space_Grotesk']">
          Choose your operating path
        </h2>
        <p className="text-slate-500 text-lg font-normal leading-7 font-['Space_Grotesk']">
          Start with your responsibility and desired outcome.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paths.map((path) => (
          <div
            key={path.title}
            className="bg-white rounded-2xl border border-gray-200 flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative w-full h-28">
              <Image src={path.image} alt={path.title} fill className="object-cover" />
            </div>
            <div className="p-5 flex flex-col gap-3">
              <p className="text-slate-900 text-base font-bold font-['Space_Grotesk'] line-clamp-1">
                {path.title}
              </p>
              <p className="text-slate-500 text-xs font-normal font-['Space_Grotesk'] leading-5">
                {path.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
