'use client';

import React from 'react';

export default function CorpRemoteContributionSection() {
  const steps = [
    {
      num: '1',
      title: 'Presenter invitations',
      desc: 'Automated setup instructions dispatched to remote executives.'
    },
    {
      num: '2',
      title: 'Connection Audits',
      desc: 'Continuous real-time bandwidth and packets loss monitoring.'
    },
    {
      num: '3',
      title: 'Backstage greenroom',
      desc: 'Verify presenter audio and camera quality before switching feeds.'
    }
  ];

  return (
    <section className="relative w-full py-24 bg-zinc-955 text-white overflow-hidden border-t border-slate-900">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-20"
        style={{ backgroundImage: "url('/images/corporate-broadcast-detailed/bg (6).png')" }}
      />
      <div className="absolute inset-0 bg-zinc-950/90 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-start items-start gap-14 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 text-left">
          <h2 className="text-slate-105 text-4xl font-bold font-['Space_Grotesk'] leading-[60.80px]">
            Remote contribution and multi-location
          </h2>
          <p className="text-slate-400 text-lg font-normal font-['Inter'] leading-7">
            Bridge distributed teams and satellite offices into a single broadcast. Sub-second return feeds, automated connection audits, and backstage greenrooms ensure remote presenters join with confidence and zero delay.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-16">
          {/* Left Column (Image) */}
          <div className="w-full lg:w-[560px] h-[460px] overflow-hidden rounded-3xl bg-gray-900 shadow-md shrink-0">
            <img 
              className="w-full h-full object-cover select-none pointer-events-none" 
              src="/images/corporate-broadcast-detailed/remote-image.png" 
              alt="Remote Executive Contribution Screen Mockup" 
            />
          </div>

          {/* Right Column (List Steps) */}
          <div className="flex-1 w-full flex flex-col justify-start items-start gap-6 font-sans">
            <h3 className="text-teal-400 text-xl font-bold font-['Space_Grotesk']">
              Connect executives, guest presenters, and satellite branches
            </h3>
            <p className="text-slate-400 text-base font-normal font-['Space_Grotesk'] leading-6">
              Seamlessly bridge multiple locations. Our system coordinates sub-second latency return feeds, enabling remote presenters to see and hear local audiences with zero delay. Automated preflight connection audits verify network strength before going live.
            </p>
            
            <div className="self-stretch flex flex-col justify-start items-start gap-4 font-sans mt-2">
              {steps.map((step, idx) => (
                <div key={idx} className="self-stretch inline-flex justify-start items-start gap-3">
                  <div className="w-6 h-6 bg-slate-800 rounded-xl flex justify-center items-center select-none shrink-0 mt-0.5">
                    <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk']">
                      {step.num}
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col justify-start items-start gap-0.5">
                    <h4 className="text-slate-100 text-base font-bold font-['Space_Grotesk']">
                      {step.title}
                    </h4>
                    <p className="self-stretch text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
