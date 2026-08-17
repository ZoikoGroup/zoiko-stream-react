'use client';

import React, { useState } from 'react';

export default function ManagedLifecycleSection() {
  const [activeStep, setActiveStep] = useState(4); // Step 5 is index 4 (0-indexed)

  const steps = [
    {
      num: 1,
      title: 'Brief',
      owner: 'Shared',
      desc: 'Initial requirement collection. Define date/time, sources, and audience pathways.'
    },
    {
      num: 2,
      title: 'Scope',
      owner: 'Shared',
      desc: 'Boundary & ownership signoff. Formulate explicitly what is venue-managed and what is ZoikoStream-managed.'
    },
    {
      num: 3,
      title: 'Plan',
      owner: 'Shared',
      desc: 'AV and network path map. Identify encoders, codecs, transcoding profiles, and CDNs.'
    },
    {
      num: 4,
      title: 'Prepare',
      owner: 'Customer',
      desc: 'Encoder prep & test targets. Venue configures local switcher hardware to dispatch draft RTMP streams.'
    },
    {
      num: 5,
      title: 'Verify',
      owner: 'ZoikoStream',
      desc: 'SLA preflight signoff. Verify ingestion stability, backup routes, latency tolerances, and technician tasks.'
    },
    {
      num: 6,
      title: 'Go-live',
      owner: 'Shared',
      desc: 'Broadcast auto-arm state. Stream targets are armed and ready for the main switcher trigger.'
    },
    {
      num: 7,
      title: 'Operate',
      owner: 'ZoikoStream',
      desc: 'Sub-second active matrixing. Network health monitoring, slide sync checks, and backup transcoding.'
    },
    {
      num: 8,
      title: 'Handoff',
      owner: 'ZoikoStream',
      desc: 'Archive migration start. Shift master recordings to secure AWS S3 compliance vault storage.'
    },
    {
      num: 9,
      title: 'Close',
      owner: 'Shared',
      desc: 'Access pruning and safety lock. Delete session tokens, restrict download permissions, and lock archives.'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white dark:bg-zinc-955 text-zinc-900 dark:text-white transition-colors duration-250 border-t border-slate-100 dark:border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 sm:gap-14 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-zinc-950 dark:text-white text-3xl sm:text-4xl font-bold font-sans tracking-tight">
            Managed Event Lifecycle
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed font-sans">
            From initial operator brief to final archive closure, every live stream stage is verified.
          </p>
        </div>

        {/* Stepper Timeline UI */}
        <div className="w-full flex flex-col gap-8">
          
          {/* Horizontal timeline dots */}
          <div className="w-full relative py-4">
            {/* Connecting lines */}
            <div className="absolute top-[26px] left-3.5 right-3.5 h-1 bg-slate-200 dark:bg-zinc-800 pointer-events-none z-0" />
            <div 
              className="absolute top-[26px] left-3.5 h-1 bg-teal-400 dark:bg-teal-500 pointer-events-none z-0 transition-all duration-300"
              style={{ width: `${(activeStep / (steps.length - 1)) * 98}%` }}
            />

            <div className="relative z-10 flex justify-between items-center w-full">
              {steps.map((step, idx) => {
                const isPassedOrActive = idx <= activeStep;
                const isActive = idx === activeStep;
                return (
                  <button
                    key={step.num}
                    onClick={() => setActiveStep(idx)}
                    className="flex flex-col items-center gap-2 bg-transparent border-none cursor-pointer focus:outline-none"
                  >
                    <div 
                      className={`w-5 h-5 rounded-full flex justify-center items-center font-bold text-[10px] transition-all ${
                        isActive
                          ? 'bg-teal-450 text-slate-950 ring-4 ring-teal-400/20 scale-125'
                          : isPassedOrActive
                          ? 'bg-teal-400 text-slate-950 hover:bg-teal-300'
                          : 'bg-slate-300 dark:bg-zinc-800 text-gray-500 dark:text-slate-500 hover:bg-slate-400/30'
                      }`}
                    >
                      {step.num}
                    </div>
                    <span 
                      className={`text-[10px] sm:text-xs font-bold font-sans hidden sm:block ${
                        isActive 
                          ? 'text-teal-500 dark:text-teal-400 font-extrabold' 
                          : 'text-gray-500 dark:text-slate-500'
                      }`}
                    >
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detailed card block for active step */}
          <div className="p-6 sm:p-8 bg-slate-50 dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 flex flex-col justify-start items-start gap-4 transition-all duration-300 shadow-sm">
            <div className="flex justify-between items-center w-full">
              <span className="text-teal-500 dark:text-teal-400 text-xs sm:text-sm font-bold font-sans uppercase tracking-wider">
                Step {steps[activeStep].num} of 9
              </span>
              <span className="px-3 py-1 bg-slate-200 dark:bg-zinc-800 text-gray-700 dark:text-slate-350 text-xs font-semibold rounded-md font-sans">
                Owner: {steps[activeStep].owner}
              </span>
            </div>

            <h3 className="text-zinc-950 dark:text-white text-2xl font-bold font-sans tracking-tight">
              {steps[activeStep].title}
            </h3>

            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-sans leading-relaxed">
              {steps[activeStep].desc}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
