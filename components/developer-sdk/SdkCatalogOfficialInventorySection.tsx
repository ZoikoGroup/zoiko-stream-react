import React from 'react';
import Image from 'next/image';

const sdkItems = [
  {
    title: 'Node.js Server SDK',
    badge: 'Active',
    badgeCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    pkg: '@zoikostream/sdk-node',
    desc: 'Full-featured backend library wrapping ingestion control, webhook signatures, and metadata APIs.',
    meta: 'v3.4.1 • Verified Today',
    img: '/images/developer-sdk/Rectangle.png',
  },
  {
    title: 'Python Server SDK',
    badge: 'Active',
    badgeCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    pkg: 'zoikostream-sdk',
    desc: 'Async-first Python wrapper optimized for high-throughput pipeline configuration and analytics.',
    meta: 'v1.9.0 • Verified Yesterday',
    img: '/images/developer-sdk/Rectangle (1).png',
  },
  {
    title: 'Go Server SDK',
    badge: 'Active',
    badgeCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    pkg: 'github.com/zoikostream/sdk-go',
    desc: 'Native Go structures with zero third-party dependencies, built for low-memory ingest orchestration.',
    meta: 'v2.0.4 • Verified Today',
    img: '/images/developer-sdk/Rectangle (2).png',
  },
  {
    title: 'React Player SDK',
    badge: 'Featured',
    badgeCls: 'bg-teal-400/10 text-teal-400 border-teal-400/30',
    pkg: '@zoikostream/react-player',
    desc: 'Polished React wrapper around standard HLS players with real-time telemetry metrics pre-wired.',
    meta: 'v4.1.2 • Verified Today',
    img: '/images/developer-sdk/Rectangle (3).png',
  },
  {
    title: 'Swift Mobile SDK',
    badge: 'Maintenance',
    badgeCls: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    pkg: 'cocoapods/ZoikoStreamSwift',
    desc: 'iOS native runtime framework supporting offline play state management and camera capture pipelines.',
    meta: 'v1.12.3 • Verified Feb 2026',
    img: '/images/developer-sdk/Rectangle (4).png',
  },
  {
    title: 'Kotlin Mobile SDK',
    badge: 'Active',
    badgeCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    pkg: 'io.zoikostream:sdk-kotlin',
    desc: 'Android optimized library built for native player integration, background sync, and ExoPlayer hookups.',
    meta: 'v2.2.0 • Verified Today',
    img: '/images/developer-sdk/Rectangle (5).png',
  },
];

export function SdkCatalogOfficialInventorySection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-slate-900/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-sdk/bg (2).png"
          alt="SDK Catalog Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            SDK catalog — official inventory.
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Every public SDK with maintenance and provenance truth.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          {sdkItems.map((sdk, idx) => (
            <div
              key={idx}
              className="p-6 bg-zinc-900 rounded-xl border border-gray-800 flex flex-col sm:flex-row items-start gap-6 shadow-xl backdrop-blur-md"
            >
              <div className="w-20 h-20 relative bg-slate-800 rounded-lg overflow-hidden flex-shrink-0">
                <Image src={sdk.img} alt={sdk.title} fill className="object-cover" />
              </div>

              <div className="flex-1 flex flex-col justify-between gap-4 w-full">
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-white text-lg font-bold">{sdk.title}</h3>
                    <div className={`px-2 py-0.5 rounded border text-xs font-semibold ${sdk.badgeCls}`}>
                      {sdk.badge}
                    </div>
                  </div>
                  <span className="text-slate-400 text-xs font-mono">{sdk.pkg}</span>
                </div>

                <p className="text-slate-400 text-xs leading-5">{sdk.desc}</p>

                <div className="flex justify-between items-center border-t border-gray-800 pt-3">
                  <span className="text-slate-400 text-xs font-mono">{sdk.meta}</span>
                  <div className="px-5 py-2 rounded-lg border border-teal-400 text-teal-400 text-sm font-bold cursor-pointer hover:bg-teal-400/10 transition-colors">
                    View SDK
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
