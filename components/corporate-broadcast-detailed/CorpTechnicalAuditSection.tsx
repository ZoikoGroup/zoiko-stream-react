'use client';

import React from 'react';

export default function CorpTechnicalAuditSection() {
  const steps = [
    {
      label: 'Network redundancy tested',
      status: 'PASSED',
      statusClass: 'bg-emerald-500/10 text-emerald-500'
    },
    {
      label: 'Captions provider verified',
      status: 'PASSED',
      statusClass: 'bg-emerald-500/10 text-emerald-500'
    },
    {
      label: 'Backup encoder online',
      status: 'PASSED',
      statusClass: 'bg-emerald-500/10 text-emerald-500'
    },
    {
      label: 'Source health check',
      status: 'NEEDS REVIEW',
      statusClass: 'bg-amber-500/10 text-amber-500'
    },
    {
      label: 'Presenter rehearsal complete',
      status: 'PASSED',
      statusClass: 'bg-emerald-500/10 text-emerald-500'
    }
  ];

  return (
    <section className="relative w-full py-24 bg-white text-zinc-900 overflow-hidden border-t border-slate-105">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 text-left">
          <h2 className="text-slate-900 text-4xl font-bold font-['Space_Grotesk'] leading-[60.80px]">
            Readiness, resilience, and event-day help
          </h2>
          <p className="text-slate-655 text-lg font-normal font-['Inter'] leading-7">
            Validate every technical dependency before the event begins. A shared preflight checklist tracks network, captions, encoders, and presenter rehearsals — flagging deviations from historical norms and prompting recovery steps in real time.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-12">
          
          {/* Left Column (Card Checklist) */}
          <div className="w-full lg:w-[540px] p-8 bg-slate-50 rounded-2xl border border-gray-200 flex flex-col justify-start items-start gap-4 font-sans shadow-md shrink-0">
            <div className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
              Technical Alignment Checklist
            </div>
            
            <div className="w-full h-px bg-gray-200" />
            
            <div className="w-full flex flex-col gap-3">
              {steps.map((step, idx) => (
                <div 
                  key={idx}
                  className="w-full px-4 py-3 bg-white rounded-lg border border-gray-150 inline-flex justify-between items-center"
                >
                  <span className="text-slate-900 text-sm font-medium font-['Space_Grotesk']">
                    {step.label}
                  </span>
                  <div className={`px-3 py-1 ${step.statusClass} rounded-sm flex justify-center items-center`}>
                    <span className="text-xs font-bold font-['Space_Grotesk']">
                      {step.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 w-full flex flex-col justify-start items-start gap-8 font-sans">
            <h3 className="text-slate-900 text-xl font-bold font-['Space_Grotesk']">
              No green status guarantees without verification
            </h3>
            <p className="text-slate-600 text-lg font-normal font-['Space_Grotesk'] leading-7">
              Event days require perfect synchronization. ZoikoStream tracks preflight milestones explicitly in a shared, read-only interface. If any metric deviates from historical norms, the system prompts immediate recovery steps.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto font-sans">
              <button className="px-6 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold hover:opacity-90 transition-opacity cursor-pointer border-none shadow-[0px_4px_16px_rgba(51,217,199,0.20)]">
                Get active-event help
              </button>
              <button className="px-7 py-3.5 rounded-lg border border-gray-800 bg-white text-gray-800 text-sm font-medium hover:bg-slate-50 transition-colors cursor-pointer text-center">
                View fallback documentation
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
