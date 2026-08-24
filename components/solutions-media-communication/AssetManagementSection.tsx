import React from 'react';
import Image from 'next/image';

const rightCards = [
  {
    title: 'Asset Identity',
    desc: 'Cryptographic hash generation pinning each media file to a persistent, immutable identifier.',
    img: '/images/Media-communications-page/Rectangle  (59).png',
  },
  {
    title: 'Metadata Contract',
    desc: 'Structured validation schemas ensuring schema consistency across every API and partner ingest system.',
    img: '/images/Media-communications-page/Rectangle  (60).png',
  },
  {
    title: 'Integration Registry',
    desc: 'Active route monitoring for content partner endpoints, transcoding profiles, and external databases.',
    img: '/images/Media-communications-page/Rectangle  (61).png',
  },
  {
    title: 'API & Webhook Handoffs',
    desc: 'Zero-latency dispatch systems delivering event state changes to internal scheduling platforms.',
    img: '/images/Media-communications-page/Rectangle  (62).png',
  },
];

export function AssetManagementSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-slate-900/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/Media-communications-page/bg (187).png"
          alt="Asset Management Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Connect media operations to durable asset management
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Stable asset identity, metadata provenance, versioned derivatives, integration dependencies, and API handoffs.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Box */}
          <div className="lg:col-span-5 w-full p-6 lg:p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col justify-start items-start gap-6 backdrop-blur-sm">
            <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
              ASSET &amp; METADATA CONTRACT
            </h3>

            <div className="w-full flex flex-col justify-start items-start gap-5 text-sm">
              <div className="flex flex-col gap-1">
                <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase">Asset Identity</span>
                <span className="text-white font-normal font-['Inter']">SHA-256 Content ID stamp</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase">Core Metadata</span>
                <span className="text-white font-normal font-['Inter']">Title, owner, language stream array</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase">Provenance/Version</span>
                <span className="text-white font-normal font-['Inter']">Non-destructive edit manifest log</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase">Automation Events</span>
                <span className="text-white font-normal font-['Inter']">Publication state change hooks</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase">Dependencies</span>
                <span className="text-white font-normal font-['Inter']">Required CDN origins mapping</span>
              </div>
            </div>
          </div>

          {/* Right 4 Cards */}
          <div className="lg:col-span-7 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {rightCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col justify-start items-start overflow-hidden hover:border-gray-700 transition-colors"
              >
                <div className="relative w-full h-28 bg-zinc-950">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full p-5 flex flex-col justify-start items-start gap-2">
                  <h4 className="text-white text-base font-bold font-['Space_Grotesk']">
                    {card.title}
                  </h4>
                  <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-5 line-clamp-3">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
