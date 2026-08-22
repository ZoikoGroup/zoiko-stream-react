import Image from 'next/image';

const row1 = [
  {
    image: '/images/platform-video-on-demand/CardImg (19).png',
    title: 'Current State',
    description: 'Real-time state tracking and active playback telemetry.',
  },
  {
    image: '/images/platform-video-on-demand/CardImg (20).png',
    title: 'Analytics Evidence',
    description: 'CDN egress metrics, viewer concurrency, and QoS reports.',
  },
  {
    image: '/images/platform-video-on-demand/Rectangle (106).png',
    title: 'Status Page',
    description: 'Live system health registry, updated second-by-second.',
  },
];

const row2 = [
  {
    image: '/images/platform-video-on-demand/Rectangle (107).png',
    title: 'Support Continuity',
    description: 'Immediate sandbox replication and live system debug logs.',
  },
  {
    image: '/images/platform-video-on-demand/Rectangle (108).png',
    title: 'Evidence Registry',
    description: 'Immutable records verifying rights and preparation states.',
  },
  {
    image: '/images/platform-video-on-demand/Rectangle (109).png',
    title: 'Change History',
    description: 'A strict ledger of all edits to asset access properties.',
  },
];

export default function OperateRecoverSection() {
  return (
    <section
      className="relative w-full px-4 sm:px-8 lg:px-28 py-16 sm:py-20 lg:py-24 bg-slate-950 border-b border-gray-800 flex flex-col gap-14 overflow-hidden"
      style={{
        backgroundImage: `url('/images/platform-video-on-demand/OpsBackground.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-slate-950/60 z-0" />

      <div className="relative z-10 flex flex-col gap-14">
        <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight">
          Operate, measure, and recover
        </h2>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {row1.map((card) => (
              <div
                key={card.title}
                className="bg-slate-900 rounded-xl border border-gray-800 flex flex-col overflow-hidden"
              >
                <div className="relative w-full h-28">
                  <Image src={card.image} alt={card.title} fill className="object-cover" />
                </div>
                <div className="p-4 flex flex-col gap-2">
                  <p className="text-white text-base font-bold">{card.title}</p>
                  <p className="text-slate-500 text-xs font-normal">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {row2.map((card) => (
              <div
                key={card.title}
                className="bg-slate-900 rounded-xl border border-gray-800 flex flex-col overflow-hidden"
              >
                <div className="relative w-full h-28">
                  <Image src={card.image} alt={card.title} fill className="object-cover" />
                </div>
                <div className="p-4 flex flex-col gap-2">
                  <p className="text-white text-base font-bold">{card.title}</p>
                  <p className="text-slate-500 text-xs font-normal">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
