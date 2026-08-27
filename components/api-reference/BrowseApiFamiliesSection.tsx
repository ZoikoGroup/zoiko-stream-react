import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const apiFamilies = [
  {
    title: 'Live Streaming API',
    status: 'STABLE',
    desc: 'Publish and manage high-concurrency low-latency broadcasts globally.',
    ver: 'v1.4',
    ops: '24 Ops',
    img: '/images/developer-api-reference/card-image.png',
   
  },
  {
    title: 'Video-on-Demand API',
    status: 'STABLE',
    desc: 'Upload, encode, storage structure management, and asset optimization.',
    ver: 'v2.0',
    ops: '18 Ops',
    img: '/images/developer-api-reference/card-image (1).png',
    
  },
  {
    title: 'Analytics API',
    status: 'STABLE',
    desc: 'Real-time telemetry pipelines, audience insight logs, and QoS audits.',
    ver: 'v1.1',
    ops: '32 Ops',
    img: '/images/developer-api-reference/card-image (2).png',
   
  },
  {
    title: 'Webhooks & Events',
    status: 'PREVIEW',
    desc: 'State change triggers, broadcast updates, and platform event routing.',
    ver: 'v2-alpha',
    ops: '12 Ops',
    img: '/images/developer-api-reference/card-image (3).png',
  },
  {
    title: 'Secure Playback',
    status: 'STABLE',
    desc: 'Token generation, geofence validations, and digital rights governance.',
    ver: 'v1.0',
    ops: '8 Ops',
    img: '/images/developer-api-reference/card-image (4).png',
  },
  {
    title: 'Player Integration',
    status: 'STABLE',
    desc: 'Embed production-ready optimized rendering frames across client ecosystems.',
    ver: 'v3.1',
    ops: '15 Ops',
    img: '/images/developer-api-reference/card-image (5).png',
  },
];

export function BrowseApiFamiliesSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 " />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="size-96 -left-44 -top-24 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Browse approved API families
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Explore public contract domains — every operation is registry-backed and source-verified.
          </p>
        </div>

        {/* 6 Cards Grid (3x2) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apiFamilies.map((item, idx) => {
            return (
              <div
                key={idx}
                className="bg-slate-50/90 rounded-xl border border-gray-200 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm"
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
                    <div className="flex items-center gap-2">
                      <h3 className="text-slate-900 text-lg font-bold">{item.title}</h3>
                    </div>
                    <div className="px-2 py-0.5 bg-slate-200 rounded-sm">
                      <span className="text-slate-600 text-[10px] font-bold tracking-wider">{item.status}</span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm font-normal leading-5">{item.desc}</p>

                  <div className="pt-3 border-t border-gray-200 flex justify-between items-center">
                    <span className="text-blue-500 text-xs font-bold">{item.ver}</span>
                    <span className="text-slate-600 text-xs font-normal">{item.ops}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
