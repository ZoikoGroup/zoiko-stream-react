'use client';

import React from 'react';
import Image from 'next/image';

export default function WorkflowOwnership() {
  const cards = [
    {
      title: 'Organizer-Led',
      desc: 'Your internal AV teams handle local camera setup, mixer staging, and stream compression. We handle secure ingest and audience player delivery.',
      badge: 'Self-Managed',
      img: '/images/workflow-overview/CardImage (12).png'
    },
    {
      title: 'Managed Service',
      desc: 'Zoiko engineering oversees the on-site connection. We coordinate directly with local venue AV, test backups, and monitor signal health active.',
      badge: 'Full Managed',
      img: '/images/workflow-overview/CardImage (13).png'
    },
    {
      title: 'Mixed / Needs Review',
      desc: 'A collaborative model. You handle physical production while our L1 support engineers manage stream failover pathways and remote participant checks.',
      badge: 'Partner-assisted',
      img: '/images/workflow-overview/CardImage (14).png'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white text-zinc-900 border-b border-gray-200 transition-colors duration-250">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="text-zinc-955 text-3xl sm:text-4xl font-bold tracking-tight">
            Decide who owns each part of the event
          </h2>
          <p className="text-slate-655 text-base sm:text-lg font-normal leading-relaxed">
            Determine clearly whether your on-site team runs the local broadcast encoders, or whether you want Zoiko managed engineering to handle deployment.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {cards.map((c, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 rounded-2xl border border-gray-200 flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              {/* Image Box */}
              <div className="relative h-44 w-full bg-slate-100">
                <Image 
                  src={c.img} 
                  alt={c.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Padding */}
              <div className="p-6 flex flex-col justify-start items-start gap-3 flex-1">
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-zinc-955 text-lg font-bold font-spaceGrotesk">
                    {c.title}
                  </h3>
                  <span className="px-2 py-0.5 bg-blue-500/10 text-blue-500 text-[10px] font-bold font-spaceGrotesk uppercase rounded-sm shrink-0">
                    {c.badge}
                  </span>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm font-normal font-spaceGrotesk leading-relaxed text-left">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full pt-2">
          <p className="text-slate-600 text-sm font-normal text-left">
            Not sure which model fits? Our team will review your local AV setup during the initial briefing.
          </p>
          <a 
            href="/managed-live-event-streaming"
            className="px-6 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-600 bg-transparent hover:outline-teal-400 transition-colors text-zinc-955 text-sm font-medium shrink-0"
          >
            Explore Managed live event streaming
          </a>
        </div>

      </div>
    </section>
  );
}
