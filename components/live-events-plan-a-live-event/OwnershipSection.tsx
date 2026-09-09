import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const MODELS = [
  {
    title: 'Organizer-Led',
    badge: 'Self-Managed',
    desc: 'Your internal AV teams handle local camera setup, mixer staging, and stream compression. We handle secure ingest and audience player delivery.',
    image: '/images/live-events-plan-a-live-event/CardImage.png',
  },
  {
    title: 'Managed Service',
    badge: 'Full Managed',
    desc: 'Zoiko engineering oversees the on-site connection. We coordinate directly with local venue AV, test backups, and monitor signal health active.',
    image: '/images/live-events-plan-a-live-event/CardImage (1).png',
  },
  {
    title: 'Mixed / Needs Review',
    badge: 'Partner-assisted',
    desc: 'A collaborative model. You handle physical production while our L1 support engineers manage stream failover pathways and remote participant checks.',
    image: '/images/live-events-plan-a-live-event/CardImage (2).png',
  },
];

export function OwnershipSection() {
  return (
    <section className="relative w-full px-6 sm:px-12 lg:px-28 py-20 lg:py-24 bg-white text-slate-900 overflow-hidden">
      {/* Required White Background Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0" />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-3 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] text-slate-950 leading-tight">
            Decide who owns each part of the event
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
            Determine clearly whether your on-site team runs the local broadcast encoders, or whether Zoiko engineering coordinates the entire contribution pipeline end-to-end.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MODELS.map((model, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 overflow-hidden shadow-sm flex flex-col justify-start items-start"
            >
              <div className="relative w-full h-44 bg-slate-200">
                <Image
                  src={model.image}
                  alt={model.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-slate-950 text-lg font-bold font-['Space_Grotesk']">
                      {model.title}
                    </h3>
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-600 text-xs font-bold font-['Space_Grotesk'] rounded">
                      {model.badge}
                    </span>
                  </div>
                  <p className="text-slate-600 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
                    {model.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note & Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
          <p className="text-slate-600 text-sm font-normal font-['Space_Grotesk'] max-w-xl">
            Not sure which model fits? Our team will review your local AV setup during the initial briefing.
          </p>
          <Link
            href="/managed-live-events"
            className="px-7 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-600 text-slate-950 text-base font-medium font-['Space_Grotesk'] hover:bg-slate-100 transition-colors shrink-0"
          >
            Explore Managed live event streaming
          </Link>
        </div>

      </div>
    </section>
  );
}
