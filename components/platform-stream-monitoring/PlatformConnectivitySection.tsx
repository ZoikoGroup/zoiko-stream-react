import React from 'react';
import { Link2, Play } from 'lucide-react';

const capabilities = [
  {
    image: 'mosaic-1.png',
    title: 'Captions & Translation',
    description: 'Track alignment & accessibility',
  },
  {
    image: 'mosaic-2.png',
    title: 'Secure & Deliver',
    description: 'Access keys & CDN validation',
  },
  {
    image: 'mosaic-3.png',
    title: 'Recording & Replay',
    description: 'Capture & finalization check',
  },
  {
    image: 'mosaic-4.png',
    title: 'Platform Analytics',
    description: 'Aggregated viewer telemetry',
  },
  {
    image: 'small-1.png',
    title: 'Media Management',
    description: 'Media identity & metadata',
  },
  {
    image: 'small-2.png',
    title: 'Enterprise Broadcasting',
    description: 'Program scheduling & SLAs',
  },
];

export default function PlatformConnectivitySection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#050a10] px-6 py-20 md:px-[112px] md:py-24">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/platform-stream-monitoring/platform-handoffs-bg.png"
          alt=""
          className="absolute inset-0 h-full w-full max-w-none object-cover"
        />
        <div className="absolute inset-0 bg-[#050a10]/30" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-12 lg:flex-row lg:items-center">
        {/* Copy */}
        <div className="flex w-full flex-col gap-6 lg:w-[440px]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-2 rounded-full border border-[#232b3a] bg-[#10151e] px-3 py-1.5">
              <Link2 className="h-3.5 w-3.5 text-[#00d4aa]" aria-hidden="true" />
              <span className="text-[13px] font-medium text-[#eef1f6]">Platform connectivity</span>
            </span>
            <span className="text-[13px] text-[#6b7688]">Across the media lifecycle</span>
          </div>

          <h2 className="text-3xl font-bold leading-[1.2] tracking-[-0.6px] text-white md:text-[40px] md:leading-[52px]">
            Connected across the ZoikoStream platform
          </h2>

          <p className="text-base leading-[1.6] text-[#aab3c4] md:text-[17px] md:leading-7">
            Stream monitoring integrates with every stage of the media lifecycle.
          </p>

          <button
            className="flex w-fit items-center gap-2 rounded-[10px] px-6 py-3.5 transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(90deg, #00d4aa 0%, #4c86ff 100%)' }}
          >
            <Play className="h-4 w-4 text-[#04141a]" aria-hidden="true" />
            <span className="text-[15px] font-bold text-[#04141a]">Watch overview</span>
          </button>
        </div>

        {/* Capability mosaic */}
        <div className="grid w-full flex-1 grid-cols-1 gap-6 sm:grid-cols-2">
          {capabilities.map((card) => (
            <article
              key={card.title}
              className="flex flex-col overflow-hidden rounded-xl border border-[#232b3a] bg-[#10151e]"
            >
              <img
                src={`/images/platform-stream-monitoring/${card.image}`}
                alt=""
                className="h-[140px] w-full object-cover"
              />
              <div className="flex flex-col gap-1.5 p-5">
                <h3 className="text-[15px] font-bold text-white">{card.title}</h3>
                <p className="text-[13px] text-[#6b7688]">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
