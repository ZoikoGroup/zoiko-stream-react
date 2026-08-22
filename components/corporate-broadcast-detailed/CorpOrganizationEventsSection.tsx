'use client';

import React from 'react';

export default function CorpOrganizationEventsSection() {
  const cards = [
    {
      title: 'Broadcast Templates',
      desc: 'Lock down encoder bitrates, auth pathways, and audio delay scripts once.'
    },
    {
      title: 'SAML SSO Directories',
      desc: 'Centralize permissions across boards, offices, and external partners.'
    },
    {
      title: 'Procurement Assets',
      desc: 'Easy access to technical compliance packets, SLAs, and security forms.'
    }
  ];

  return (
    <section className="relative w-full py-24 bg-zinc-955 text-white overflow-hidden border-t border-slate-900">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-55"
        style={{ backgroundImage: "url('/images/corporate-broadcast-detailed/bg (7).png')" }}
      />
      <div className="absolute inset-0  pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 text-left">
          <h2 className="text-white text-4xl font-bold font-['Space_Grotesk'] leading-[60.80px]">
            Recurring enterprise broadcast path
          </h2>
          <p className="text-slate-400 text-lg font-normal font-['Space_Grotesk'] leading-7">
            Professional communications teams plan for the year, not the hour. We synchronize municipal networks, corporate directories, AV suppliers, and satellite campuses into a single templates engine. Run repeating town halls or webcasts with minimal re-evaluation.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
          {cards.map((c, idx) => (
            <div 
              key={idx}
              className="p-8 bg-gray-900/90 rounded-xl border border-slate-800 flex flex-col justify-start items-start gap-4 hover:border-slate-700/60 transition-colors backdrop-blur-[10px] shadow-lg"
            >
              <h3 className="text-teal-400 text-xl font-bold font-['Space_Grotesk']">
                {c.title}
              </h3>
              <p className="text-slate-450 text-sm font-normal font-['Space_Grotesk'] leading-6">
                {c.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="inline-flex justify-start items-center gap-4 mt-2">
          <a href="/talk-to-an-expert" className="px-6 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold hover:opacity-90 transition-opacity cursor-pointer border-none shadow-[0px_4px_16px_rgba(51,217,199,0.20)]">
            Talk to an event expert
          </a>
        </div>

      </div>
    </section>
  );
}
