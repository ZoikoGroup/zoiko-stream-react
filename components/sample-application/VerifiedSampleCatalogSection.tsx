import React from 'react';
import Image from 'next/image';

const catalogItems = [
  {
    tag: 'Live product video',
    lang: 'React',
    title: 'Live Stream Player',
    desc: 'Build a real-time video player with adaptive quality.',
    img: '/images/sample-application/Rectangle (1).png',
  },
  {
    tag: 'Broadcast',
    lang: 'Node.js',
    title: 'Broadcast Ingest',
    desc: 'Configure multi-source broadcast ingest pipelines.',
    img: '/images/sample-application/Rectangle (2).png',
  },
  {
    tag: 'On-demand',
    lang: 'Python',
    title: 'VOD Delivery Pipeline',
    desc: 'Set up on-demand video processing and delivery.',
    img: '/images/sample-application/Rectangle (3).png',
  },
  {
    tag: 'Webhooks/events',
    lang: 'Go',
    title: 'Webhook Event Handler',
    desc: 'Process platform events with verified payloads.',
    img: '/images/sample-application/Rectangle (4).png',
    link: true,
  },
  {
    tag: 'Analytics',
    lang: 'React',
    title: 'Analytics Dashboard',
    desc: 'Visualize stream health and viewer engagement data.',
    img: '/images/sample-application/Rectangle (5).png',
    link: true,
  },
  {
    tag: 'Player integration',
    lang: 'Swift',
    title: 'Player Customization',
    desc: 'Configure custom overlays, adaptive bitrates, and watermarking.',
    img: '/images/sample-application/Rectangle (6).png',
    link: true,
  },
];

export function VerifiedSampleCatalogSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-gray-950/70 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/sample-application/bg (2).png"
          alt="Verified Sample Catalog Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Verified sample catalog
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Every sample is registry-governed with verified source, current compatibility, and bounded scope.
          </p>
        </div>

        {/* 6 Cards Grid (3x2) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {catalogItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/80 rounded-xl border border-gray-800 overflow-hidden flex flex-col justify-between shadow-xl backdrop-blur-md min-h-[384px]"
            >
              <div className="w-full h-40 relative bg-slate-900">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div className="px-2 py-1 bg-gray-800 rounded-sm">
                    <span className="text-teal-400 text-xs font-bold font-mono">{item.tag}</span>
                  </div>
                  <span className="text-blue-500 text-xs font-bold font-mono">{item.lang}</span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  <p className="text-slate-400 text-sm font-normal leading-5">{item.desc}</p>
                </div>

                <div className="pt-4 border-t border-gray-800 flex justify-between items-center">
                  <span className="text-emerald-500 text-xs font-semibold">✓ Verified Output</span>
                  {item.link && (
                    <span className="text-teal-400 text-xs font-bold cursor-pointer hover:underline">
                      View sample →
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
