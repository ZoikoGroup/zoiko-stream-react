import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const lifecycleCards = [
  {
    tag: 'SUPPORTED',
    tagCls: 'text-emerald-500',
    title: 'Active',
    desc: 'Current, verified, receiving updates. Full support.',
    img: '/images/sample-application/Card-Image (11).png',
  },
  {
    tag: 'MAINTENANCE',
    tagCls: 'text-orange-400',
    title: 'Limited Maintenance',
    desc: 'Functional but reduced update cadence. Use with awareness.',
    img: '/images/sample-application/Card-Image (12).png',
  },
  {
    tag: 'DEPRECATED',
    tagCls: 'text-red-500',
    title: 'Deprecated',
    desc: 'Scheduled for removal. Migration guidance provided.',
    img: '/images/sample-application/Card-Image (13).png',
  },
  {
    tag: 'ARCHIVED',
    tagCls: 'text-slate-600',
    title: 'Archived',
    desc: 'Read-only reference. Not recommended for new projects.',
    img: '/images/sample-application/Card-Image (14).png',
  },
];

export function MaintenanceSupportLifecycleSection() {
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
            Maintenance, support, contribution, and lifecycle
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Every sample has a named maintainer and a transparent lifecycle state.
          </p>
        </div>

        {/* 4 Lifecycle Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {lifecycleCards.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/90 rounded-xl border border-gray-200 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm min-h-[280px]"
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
                <div className="px-2 py-1 bg-gray-200 rounded-sm w-fit">
                  <span className={`text-xs font-bold font-mono ${item.tagCls}`}>{item.tag}</span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-900 text-xl font-bold">{item.title}</h3>
                  <p className="text-slate-600 text-sm font-normal leading-5">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
