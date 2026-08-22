import React from 'react';
import Image from 'next/image';

import card30 from '@/public/images/Broadcast-globally/card-image (30).png';
import card31 from '@/public/images/Broadcast-globally/card-image (31).png';
import card32 from '@/public/images/Broadcast-globally/card-image (32).png';

const paths = [
  {
    path: 'PATH 01',
    title: 'Build / operate with platform tools',
    desc: 'Best for developer-led teams looking for API integrations, programmatic control, and raw video engine options.',
    image: card30,
  },
  {
    path: 'PATH 02',
    title: 'Enterprise-assisted broadcast',
    desc: 'Built around secure governance parameters, SSO routing, comprehensive audit records, and accessibility compliance.',
    image: card31,
  },
  {
    path: 'PATH 03',
    title: 'Professionally managed Live Event',
    desc: 'Partner with a dedicated Zoiko production team. We monitor inputs, establish failover pathways, and manage delivery.',
    image: card32,
  },
];

export default function OperatingModelsSection() {
  return (
    <section className="relative w-full bg-slate-50 py-20 md:py-28 border-b border-gray-200 text-slate-900 overflow-hidden">
      {/* Background Accent Glows */}
      <div className="size-96 -left-44 -top-28 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-slate-900 leading-tight">
            One outcome. Different operating models.
          </h2>
          <p className="text-slate-600 text-lg font-normal   leading-relaxed max-w-3xl">
            Choose the level of platform support and control that matches your organization&apos;s capability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paths.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow group"
            >
              <div className="relative w-full h-44 bg-slate-100">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-7 flex flex-col gap-4 flex-1">
                <span className="text-blue-500 text-xs font-bold   tracking-wide">
                  {p.path}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-900 text-xl font-bold  ">
                    {p.title}
                  </h3>
                  <p className="text-slate-600 text-sm font-normal   leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
