import React from 'react';
import Image from 'next/image';

const blockers = [
  {
    title: 'Developer Access',
    status: 'READY',
    statusCls: 'bg-emerald-500/10 border-emerald-500/20 text-teal-400',
    req: 'Sign in / Request',
    img: '/images/quickstart/card-image (66).png',
  },
  {
    title: 'Credentials',
    status: 'PENDING',
    statusCls: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
    req: 'Need permission',
    img: '/images/quickstart/card-image (67).png',
  },
  {
    title: 'Local Environment',
    status: 'NOT CONFIGURED',
    statusCls: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
    req: 'CLI & runtime tools',
    img: '/images/quickstart/card-image (68).png',
  },
  {
    title: 'Contribution Source',
    status: 'NOT CONFIGURED',
    statusCls: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
    req: 'Encoder / browser source',
    img: '/images/quickstart/card-image (69).png',
  },
  {
    title: 'Playback Surface',
    status: 'READY',
    statusCls: 'bg-emerald-500/10 border-emerald-500/20 text-teal-400',
    req: 'Supported player surface',
    img: '/images/quickstart/card-image (70).png',
  },
  {
    title: 'Network & Policy',
    status: 'READY',
    statusCls: 'bg-emerald-500/10 border-emerald-500/20 text-teal-400',
    req: 'Documented requirements',
    img: '/images/quickstart/card-image (71).png',
  },
];

export function DiscoverBlockersSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-slate-900/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/quickstart/bg (18).png"
          alt="Discover Blockers Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Discover Blockers Before You Copy Code
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Verifying your local setup first guarantees you won&apos;t hit silent protocol or permission roadblocks downstream.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blockers.map((item, idx) => {
            return (
              <div
                key={idx}
                className="bg-zinc-900/90 rounded-xl border border-gray-800 overflow-hidden flex flex-col justify-between shadow-lg hover:border-gray-700 transition-all backdrop-blur-sm"
              >
                <div className="w-full h-36 relative bg-slate-950">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <h3 className="text-white text-base font-bold">{item.title}</h3>
                    </div>
                    <div className={`px-2 py-1 rounded-sm border text-[10px] font-bold ${item.statusCls}`}>
                      {item.status}
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t border-gray-800/80">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-slate-400 text-xs font-normal">Requirement</span>
                      <span className="text-white text-sm font-normal">{item.req}</span>
                    </div>

                    <div className="px-3.5 py-1.5 rounded-md border border-teal-400 cursor-pointer hover:bg-teal-400/10 transition-colors">
                      <span className="text-white text-xs font-bold">Resolve</span>
                    </div>
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
