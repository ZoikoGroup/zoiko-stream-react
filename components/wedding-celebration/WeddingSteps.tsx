'use client';

import React from 'react';

export default function WeddingSteps() {
  const steps = [
    { num: '01', title: 'Define the event', desc: 'Select date, location, and timezone details.' },
    { num: '02', title: 'Establish the source', desc: 'Coordinate on-site camera and connection.' },
    { num: '03', title: 'Choose audience access', desc: 'Define who receives the streaming keys.' },
    { num: '04', title: 'Add remote contributors', desc: 'Incorporate live digital screen toasts.' },
    { num: '05', title: 'Plan audio & captions', desc: 'Assure translation/captions setup.' },
    { num: '06', title: 'Decide recording/replay', desc: 'Choose permanent digital archive rules.' },
    { num: '07', title: 'Test & prepare', desc: 'Execute network diagnostics on-site.' },
    { num: '08', title: 'Go live & get help', desc: 'Broadcast live with support engineer support.' },
    { num: '09', title: 'Close out', desc: 'Retrieve archive records & analytics.' }
  ];

  const scrollToBrief = () => {
    const el = document.getElementById('wedding-cta-band');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white text-zinc-900 border-b border-gray-200 transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="text-zinc-955 text-3xl sm:text-4xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            A clear path from idea to live event
          </h2>
          <p className="text-slate-655 text-base sm:text-lg font-normal font-spaceGrotesk leading-relaxed">
            A complete 9-step planning model engineered to structure all logistical pathways before the broadcast starts.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {steps.map((s, idx) => (
            <div 
              key={idx}
              className="p-6 bg-slate-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-4 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-between items-center w-full">
                <span className="text-blue-500 text-2xl font-bold font-spaceGrotesk">
                  {s.num}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-zinc-955 text-base sm:text-lg font-bold font-spaceGrotesk">
                  {s.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm font-normal font-spaceGrotesk leading-relaxed text-left">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Start Brief button at bottom */}
        <div className="flex justify-center w-full pt-4">
          <button 
            onClick={scrollToBrief}
            className="px-8 py-4 bg-gradient-to-r from-teal-400 to-blue-500 hover:opacity-95 transition-opacity text-slate-950 text-base font-bold font-spaceGrotesk rounded-[10px] cursor-pointer border-none shadow-md"
          >
            Start your event brief
          </button>
        </div>

      </div>
    </section>
  );
}
