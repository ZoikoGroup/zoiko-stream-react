import React from 'react';
import Image from 'next/image';
import bgSection9 from '@/public/images/live-event-conferences/section-9bg (2).png';
import { Calendar, RefreshCcw, Users } from 'lucide-react';

export function ResilienceFailoverSection() {
  const cards = [
    {
      num: '01',
      icon:Calendar,
      title: 'Critical Sessions',
      description: 'Identify highest-priority program segments. Configure dual-redundant stream routes for the primary keynotes and executive tracks.',
    },
    {
      num: '02',
      icon:RefreshCcw,
      title: 'Backup & Failover',
      description: 'Map instant fallback pathways. Connect secondary physical cellular bonding units to step in automatically if venue network Jitter spikes.',
    },
    {
      num: '03',
      icon:Users,
      title: 'Event Support Planning',
      description: 'Schedule active L1 managed engineering supervision. Ensure a dedicated broadcast engineer is allocated strictly to your live window.',
    },
  ];

  return (
    <section className="relative w-full px-6 sm:px-12 lg:px-28 py-20 lg:py-24 bg-slate-950 text-white overflow-hidden border-t border-b border-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bgSection9}
          alt="Resilience, Readiness & Support Background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 max-w-3xl text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold font-['Space_Grotesk'] text-slate-100 leading-tight lg:leading-[60.8px]">
            Resilience, Readiness &amp; Support
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
            Banish stream anxiety. Plan critical backup infrastructure, network failover thresholds, and active L1 operations support before your first presenter speaks.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon =card.icon;
            return(
            <div
              key={idx}
              className="p-7 bg-zinc-900/80 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 backdrop-blur-sm flex flex-col justify-start items-start gap-4"
            >
              <div className="w-full inline-flex justify-between items-center">
                <span className="text-teal-500 text-lg font-bold font-['Space_Grotesk']">
                  {card.num}
                </span>
                <div className="w-7 h-7 bg-blue-500/10 rounded-lg flex justify-center items-center">
                  <Icon className="w-3.5 h-3.5 text-blue-500 " />
                </div>
              </div>
              <h3 className="text-slate-100 text-xl font-bold font-['Space_Grotesk']">
                {card.title}
              </h3>
              <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-5">
                {card.description}
              </p>
            </div>
          )})}
        </div>

      </div>
    </section>
  );
}
