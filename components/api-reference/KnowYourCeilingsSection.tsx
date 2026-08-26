import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const capacityFeatures = [
  {
    title: 'Rate Limits',
    desc: 'Detailed information about standard requests per window. Adaptive buckets prevent systemic API cascading.',
    img: '/images/developer-api-reference/card-image (33).png',
  },
  {
    title: 'Payload Limits',
    desc: 'Rigorous maximum JSON and metadata payload boundaries prevent buffer overflows and latency delays.',
    img: '/images/developer-api-reference/card-image (35).png',
  },
  {
    title: 'Quota Management',
    desc: 'Establish custom subscription-level and environment boundaries to avoid unexpected overages and bill spikes.',
    img: '/images/developer-api-reference/card-image (36).png',
  },
  {
    title: 'Reset Semantics',
    desc: 'Consistent HTTP headers publish exact remaining capacity and specific millisecond cooldown wait indicators.',
    img: '/images/developer-api-reference/card-image (37).png',
  },
];

export function KnowYourCeilingsSection() {
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
            Know your ceilings before production
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Published rate limits, quotas, payload constraints, and network capacity boundaries — registry-driven, never invented.
          </p>
        </div>

        {/* Usage Box */}
        <div className="w-full p-6 bg-slate-50/90 rounded-2xl border border-gray-200 shadow-sm backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-2">
              <span className="text-slate-600 text-xs font-bold uppercase font-mono">CURRENT HOURLY USAGE</span>
              <span className="text-slate-900 text-3xl font-bold font-mono">42,500 / 100,000</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-slate-600 text-xs font-bold uppercase font-mono">RESET COOLDOWN</span>
              <span className="text-slate-900 text-3xl font-bold font-mono">18 min 42s</span>
            </div>
          </div>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capacityFeatures.map((item, idx) => {
            return (
              <div
                key={idx}
                className="bg-slate-50/90 rounded-xl border border-gray-200 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm min-h-[260px]"
              >
                <div className="w-full h-40 relative bg-slate-900">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-slate-900 text-lg font-bold">{item.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm font-normal leading-5">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
