import React from 'react';
import Image from 'next/image';

export function WorkflowSummarySection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/75 border-b border-gray-800 flex flex-col justify-start items-start gap-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/Media-communications-page/bg (188).png"
          alt="Workflow Summary Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-16">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            What happens next depends on what you need now
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Your selected workflow summary, unresolved requirements, approved routes, and the correct next action.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Box */}
          <div className="p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col justify-start items-start gap-6 backdrop-blur-sm">
            <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
              SELECTED WORKFLOW SUMMARY
            </h3>
            <div className="w-full flex flex-col justify-start items-start gap-4">
              <div className="w-full flex justify-start items-center gap-3">
                <span className="w-44 text-slate-400 text-sm font-bold font-['Space_Grotesk']">Workflow Type:</span>
                <span className="text-white text-sm font-normal font-['Inter']">Secure Live Enterprise Broadcast</span>
              </div>
              <div className="w-full flex justify-start items-center gap-3">
                <span className="w-44 text-slate-400 text-sm font-bold font-['Space_Grotesk']">Selected Pillars:</span>
                <span className="text-white text-sm font-normal font-['Inter']">Signal Ingest, Rights &amp; Access, Preservation</span>
              </div>
              <div className="w-full flex justify-start items-center gap-3">
                <span className="w-44 text-slate-400 text-sm font-bold font-['Space_Grotesk']">Target SLA:</span>
                <span className="text-teal-400 text-sm font-bold font-['Inter']">99.99% Uptime Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Box */}
          <div className="p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col justify-start items-start gap-5 backdrop-blur-sm">
            <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
              UNRESOLVED REQUIREMENTS
            </h3>
            <div className="w-full flex flex-col justify-start items-start gap-3">
              {[
                'Selected workflow integration rules verified',
                'Compliance and encryption parameters validated',
                'Origin CDN caches configured and locked',
                'Primary live camera feeds matched and connected',
              ].map((req, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-emerald-500/10 rounded border border-emerald-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-500 text-xs">✓</span>
                  </div>
                  <span className="text-slate-400 text-sm font-normal font-['Inter']">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3 CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer">
            <span className="text-slate-950 text-base font-bold font-['Space_Grotesk']">
              Talk to an Expert
            </span>
          </div>
          <div className="px-7 py-3.5 rounded-lg border border-slate-400 flex justify-center items-center cursor-pointer">
            <span className="text-white text-base font-bold font-['Space_Grotesk']">
              Explore the Platform
            </span>
          </div>
          <div className="px-7 py-3.5 rounded-lg border border-slate-400 flex justify-center items-center cursor-pointer">
            <span className="text-white text-base font-bold font-['Space_Grotesk']">
              Plan a Live Event
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
