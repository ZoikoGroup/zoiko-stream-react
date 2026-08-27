import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const productionCards = [
  {
    title: 'Product Dashboard',
    desc: 'Build internal analytics views and embed customized playback visual widgets natively.',
    img: '/images/developer-analytics-api/visual (4).png',
  },
  {
    title: 'Scheduled Reports',
    desc: 'Automate export pipelines and deliver CSV reports directly to S3 or secure email paths.',
    img: '/images/developer-analytics-api/visual (5).png',
  },
  {
    title: 'Data Warehouse Ingestion',
    desc: 'Setup production ETL pipelines and sync raw playback logs directly into Snowflake.',
    img: '/images/developer-analytics-api/visual (6).png',
  },
];

export function TakeAnalyticsToProductionWorkflowSection() {
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
          <h2 className="text-slate-950 text-3xl lg:text-4xl font-bold leading-tight">
            Take analytics from one query to a production workflow
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Different structures to manage, support, and govern your analytics implementation.
          </p>
        </div>

        {/* 3 Workflow Cards Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          {productionCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-xl border border-gray-200 overflow-hidden flex flex-col shadow-xs"
            >
              <div className="w-full h-40 relative bg-slate-200">
                <Image src={card.img} alt={card.title} fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-slate-900 text-lg font-bold font-mono">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-5">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Before Going Live Checklist Box */}
        <div className="w-full p-6 bg-emerald-500/10 rounded-xl border border-emerald-500/30 flex items-center gap-5">
            <span className="text-emerald-500 text-xs font-bold ">✓</span>
          
          <div className="flex flex-col gap-1">
            <h3 className="text-slate-900 text-base font-bold font-mono">Before Going Live Checklist</h3>
            <p className="text-slate-600 text-sm leading-5">
              Least-privilege authorization check • Define absolute metric semantics • Verify strict time window bounds • Configure auto-retries and pagination rules.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
