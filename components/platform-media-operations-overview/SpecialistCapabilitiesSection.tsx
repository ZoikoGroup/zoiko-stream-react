import Image from 'next/image';

const row1 = [
  {
    image: '/images/platform-media-operations-overview/CardImg (30).png',
    title: 'Enterprise Broadcasting',
    desc: 'Recurring organizational broadcast governance, readiness, audience continuity.',
  },
  {
    image: '/images/platform-media-operations-overview/CardImg (31).png',
    title: 'Media Management',
    desc: 'Asset identity, metadata, rights, versions, lifecycle governance.',
  },
  {
    image: '/images/platform-media-operations-overview/CardImg (32).png',
    title: 'Stream Monitoring',
    desc: 'Qualified state, health signals, alerts, diagnostics, incident context.',
  },
];

const row2 = [
  {
    image: '/images/platform-media-operations-overview/CapImg (9).png',
    title: 'Recording and Replay',
    desc: 'Post-live continuity, rights, review, evidence, preservation.',
  },
  {
    image: '/images/platform-media-operations-overview/CapImg (10).png',
    title: 'Captions and Translation',
    desc: 'Operational caption/language workflow responsibility and quality.',
  },
  {
    image: '/images/platform-media-operations-overview/CapImg (11).png',
    title: 'Analytics',
    desc: 'Governed measurement, reporting, evidence quality, interpretation.',
  },
];

export default function SpecialistCapabilitiesSection() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-28 py-16 sm:py-20 lg:py-24 bg-slate-950/50 border-b border-slate-700 flex flex-col gap-14">
      <div className="flex flex-col gap-3">
        <h2 className="text-slate-50 text-3xl sm:text-4xl font-bold leading-tight font-['Space_Grotesk']">
          Specialist capabilities
        </h2>
        <p className="text-slate-400 text-lg font-normal leading-7 font-['Space_Grotesk']">
          Route to the right authority for your operational need
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {row1.map((card) => (
            <div
              key={card.title}
              className="bg-slate-900 rounded-2xl border border-slate-700 flex flex-col overflow-hidden"
            >
              <div className="relative w-full h-36">
                <Image src={card.image} alt={card.title} fill className="object-cover" />
              </div>
              <div className="p-5 flex flex-col gap-3">
                <p className="text-slate-50 text-base font-bold font-['Space_Grotesk'] leading-6">
                  {card.title}
                </p>
                <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-5">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {row2.map((card) => (
            <div
              key={card.title}
              className="bg-slate-900 rounded-2xl border border-slate-700 flex flex-col overflow-hidden"
            >
              <div className="relative w-full h-36">
                <Image src={card.image} alt={card.title} fill className="object-cover" />
              </div>
              <div className="p-5 flex flex-col gap-3">
                <p className="text-slate-50 text-base font-bold font-['Space_Grotesk'] leading-6">
                  {card.title}
                </p>
                <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-5">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
