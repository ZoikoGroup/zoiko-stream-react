import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bgSection3 from '@/public/images/live-event-conferences/section-3bg (2).png';

export function ConferenceStructureSection() {
  const cards = [
    {
      num: '01',
      badge: 'Standard Plan',
      title: 'Single Program',
      description: 'Continuous chronological feed. Ideal for single-stage keynotes or dedicated corporate broadcasts where your audience moves through a single broadcast timeline.',
    },
    {
      num: '02',
      badge: 'Multi-Session Config',
      title: 'Multiple Sessions',
      description: 'Dynamic breakout streams. Observers transition smoothly from a central keynote panel to individual project workshops without losing connection variables.',
    },
    {
      num: '03',
      badge: 'Enterprise Option',
      title: 'Parallel Tracks',
      description: 'High-density multi-stage broadcasts. Deliver dozens of concurrent sessions with localized language tracks, customized chat environments, and individual DVR setups.',
    },
  ];

  return (
    <section className="relative w-full px-6 sm:px-12 lg:px-28 py-20 lg:py-24 bg-slate-950 text-white overflow-hidden border-b border-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bgSection3}
          alt="Plan Your Conference Structure Background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-slate-950/30" />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 max-w-3xl text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold font-['Space_Grotesk'] text-slate-100 leading-tight">
            Plan Your Conference Structure
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
            Map parallel tracks, concurrent panels, and break sequences beforehand. The platform handles localized stream balancing and audience routing automatically.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="p-7 bg-zinc-900/80 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-start items-start gap-4 overflow-hidden backdrop-blur-sm"
            >
              <div className="w-full inline-flex justify-between items-center">
                <span className="text-teal-500 text-lg font-bold font-['Space_Grotesk']">
                  {card.num}
                </span>
                <div className="px-2 py-1 bg-blue-500/10 rounded-sm">
                  <span className="text-blue-500 text-[10px] font-bold font-['Space_Grotesk']">
                    {card.badge}
                  </span>
                </div>
              </div>
              <h3 className="text-slate-100 text-xl font-bold font-['Space_Grotesk']">
                {card.title}
              </h3>
              <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-5">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="w-full p-6 bg-zinc-900/80 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="max-w-[800px] flex flex-col gap-1">
            <h4 className="text-slate-100 text-base font-bold font-['Space_Grotesk']">
              Configuring a hybrid layout with physical sat-studios?
            </h4>
            <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk']">
              Our team will help map latency thresholds between remote geographic contribution hubs during initial setup.
            </p>
          </div>
          <Link
            href="/talk-to-an-expert"
            className="px-6 py-3 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg text-slate-900 text-sm font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity shrink-0"
          >
            Schedule Architecture Call
          </Link>
        </div>

      </div>
    </section>
  );
}
