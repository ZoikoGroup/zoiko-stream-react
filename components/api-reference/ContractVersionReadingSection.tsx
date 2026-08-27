import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const versions = [
  { ver: 'Version 2.4.1 (Latest Stable)', badge: 'CURRENT', badgeCls: 'bg-emerald-100 text-emerald-800' },
  { ver: 'Version 2.3.0', badge: 'DEPRECATED', badgeCls: 'bg-amber-100 text-amber-800' },
  { ver: 'Version 1.8.4', badge: 'SUNSET', badgeCls: 'bg-red-100 text-red-800' },
];

const contractDetails = [
  {
    title: 'Version Identity',
    desc: 'Every API contract lists its exact semver tags and deep git source revision.',
    img: '/images/developer-api-reference/card-image-small.png',
  },
  {
    title: 'Lifecycle Tracking',
    desc: 'Track planned deprecation schedules and active upgrade pathways clearly.',
    img: '/images/developer-api-reference/card-image-small (1).png',
  },
  {
    title: 'Environment Context',
    desc: 'Instantly check if an endpoint matches dev sandbox, staging matrices, or prod edges.',
    img: '/images/developer-api-reference/card-image-small (2).png',
  },
];

export function ContractVersionReadingSection() {
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
            Know exactly which contract you are reading
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Version, lifecycle, environment, and source currentness — visible before any code sample.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Card: Contract Version Tracking */}
          <div className="p-8 bg-slate-50/90 rounded-2xl border border-gray-200 flex flex-col gap-5 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <h3 className="text-slate-900 text-base font-bold">CONTRACT VERSION TRACKING</h3>
            </div>

            <div className="flex flex-col gap-3">
              {versions.map((v, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white rounded-lg border border-gray-200 flex justify-between items-center shadow-2xs"
                >
                  <span className="text-slate-900 text-sm font-bold">{v.ver}</span>
                  <div className={`px-2 py-0.5 rounded-full text-xs font-bold ${v.badgeCls}`}>
                    {v.badge}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3 Detail Items */}
          <div className="flex flex-col gap-4">
            {contractDetails.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="p-4 bg-white/90 rounded-xl border border-gray-200 flex items-center gap-4 shadow-sm backdrop-blur-sm"
                >
                  <div className="w-24 h-20 relative rounded-md overflow-hidden bg-slate-900 flex-shrink-0">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-slate-900 text-base font-bold">{item.title}</h4>
                    </div>
                    <p className="text-slate-600 text-xs font-normal leading-4">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
