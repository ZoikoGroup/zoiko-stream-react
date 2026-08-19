'use client';

import React from 'react';

export default function CorpEventShapeSection() {
  const models = [
    {
      title: 'All-Hands & Town Halls',
      desc: 'Highly collaborative, mixed active/passive roles with live Q&A.',
      badge: 'Verified',
      badgeClass: 'bg-emerald-500/10 text-emerald-500'
    },
    {
      title: 'Earnings Call & Webcasts',
      desc: 'Strictly authenticated, high-stakes security with zero room for error.',
      badge: 'Secure',
      badgeClass: 'bg-emerald-500/10 text-emerald-500'
    },
    {
      title: 'Product Launch & Keynote',
      desc: 'Optimized for maximum global scale and CDN load-balancing.',
      badge: 'High Scale',
      badgeClass: 'bg-emerald-500/10 text-emerald-500'
    },
    {
      title: 'Department Sync',
      desc: 'Private, single-site, low latency priority workflows.',
      badge: 'Internal',
      badgeClass: 'bg-slate-400/10 text-slate-600'
    }
  ];

  return (
    <section className="relative w-full py-24 bg-white text-zinc-900 overflow-hidden border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 text-left">
          <h2 className="text-slate-900 text-4xl font-bold font-['Space_Grotesk'] leading-[60.80px]">
            Choose your corporate broadcast model
          </h2>
          <p className="text-slate-600 text-lg font-normal font-['Space_Grotesk'] leading-7">
            Select the broadcast model that best fits your event type, audience size, and security requirements.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-16">
          {/* Left Column (List) */}
          <div className="flex-1 w-full flex flex-col gap-4 font-sans">
            {models.map((model, idx) => (
              <div 
                key={idx}
                className="w-full p-5 bg-slate-50 rounded-xl border border-gray-200 inline-flex justify-between items-center gap-4 hover:shadow-sm transition-all"
              >
                <div className="flex-1 flex flex-col justify-start items-start gap-1">
                  <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                    {model.title}
                  </h3>
                  <p className="self-stretch text-slate-600 text-xs font-normal font-['Space_Grotesk']">
                    {model.desc}
                  </p>
                </div>
                <div className={`px-3 py-1 ${model.badgeClass} rounded-sm flex justify-center items-center`}>
                  <span className="text-xs font-bold font-['Space_Grotesk']">
                    {model.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column (Image) */}
          <div className="w-full lg:w-[560px] h-[460px] overflow-hidden rounded-3xl bg-slate-100 shadow-md">
            <img 
              className="w-full h-full object-cover select-none pointer-events-none" 
              src="/images/corporate-broadcast-detailed/model-right-image.png" 
              alt="Corporate Broadcast Model Representative" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}
