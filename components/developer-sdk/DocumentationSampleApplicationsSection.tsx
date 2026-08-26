import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const resourceCards = [
  {
    title: 'SDK Documentation',
    desc: 'Language/runtime-specific guides covering quickstarts, initialization parameters, and local environment configs.',
    img: '/images/developer-sdk/card-image.png',
  },
  {
    title: 'API Reference',
    desc: 'Canonical contract deep links detailing response payload formats, query params, and REST status behaviors.',
    img: '/images/developer-sdk/card-image (1).png',
  },
  {
    title: 'Sample Applications',
    desc: 'Verified samples mapping ingest architectures directly to frameworks like Next.js, FastAPI, and Go Gin.',
    img: '/images/developer-sdk/card-image (2).png',
  },
  {
    title: 'Support & Status',
    desc: 'Direct technical help channels and verified operational uptime records mapping global telemetry.',
    img: '/images/developer-sdk/card-image (3).png',
  },
];

export function DocumentationSampleApplicationsSection() {
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

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold leading-tight">
            Documentation, sample applications, support, and maintenance handoffs.
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Integrate with confidence using resources built directly around developer workflows.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {resourceCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl border border-gray-200 overflow-hidden flex flex-col justify-between shadow-xs"
            >
              <div className="w-full h-48 relative bg-slate-200">
                <Image src={card.img} alt={card.title} fill className="object-cover" />
              </div>

              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-slate-900 text-xl font-bold font-mono">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-5">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
