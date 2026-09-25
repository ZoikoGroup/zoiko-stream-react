import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function ChangelogMigrationSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 bg-[#0A0D13] flex flex-col items-center overflow-hidden border-t border-slate-800">
      
      {/* Background graphic */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex justify-center items-center opacity-30">
        <div className="w-[800px] h-[800px] rounded-full border-[1px] border-slate-700/50 absolute scale-150" />
        <div className="w-[600px] h-[600px] rounded-full border-[1px] border-slate-700/50 absolute scale-150" />
        <div className="w-[1000px] h-[1000px] rounded-full border-[1px] border-slate-700/30 absolute scale-150" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] flex flex-col gap-10">
        
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 w-full">
          <div className="flex flex-col gap-4 max-w-3xl">
            <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight">
              Webhook signature verification now requires the timestamped payload
            </h2>
            <p className="text-slate-400 text-lg font-normal font-['Inter'] leading-relaxed">
              Verification must use the exact raw request body together with the signed timestamp. This closes ambiguity across approved webhook runtimes without changing the event schema.
            </p>
          </div>

          <div className="w-full lg:w-[320px] shrink-0 p-5 rounded-xl border border-amber-500/30 bg-amber-500/5 flex flex-col gap-2 shadow-lg">
            <span className="text-amber-500 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-widest">
              ACTION REQUIRED
            </span>
            <p className="text-slate-300 text-sm font-['Inter'] leading-relaxed">
              Review required for custom verifiers. Managed SDK helpers remain compatible.
            </p>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="w-full bg-[#141A25] border border-slate-800 rounded-xl p-5 flex flex-wrap lg:flex-nowrap gap-6 lg:gap-12 shadow-sm">
          <div className="flex flex-col gap-1.5 flex-1 min-w-[150px]">
            <span className="text-slate-500 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-widest">PUBLISHED ON</span>
            <span className="text-slate-200 text-sm font-medium font-['Inter']">August 21, 2026 • 14:00 UTC</span>
          </div>
          <div className="flex flex-col gap-1.5 flex-1 min-w-[150px]">
            <span className="text-slate-500 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-widest">EFFECTIVE ON</span>
            <span className="text-slate-200 text-sm font-medium font-['Inter']">September 15, 2026</span>
          </div>
          <div className="flex flex-col gap-1.5 flex-1 min-w-[150px]">
            <span className="text-slate-500 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-widest">AFFECTED SURFACE</span>
            <span className="text-slate-200 text-sm font-medium font-['Inter']">Webhooks - delivery verification</span>
          </div>
          <div className="flex flex-col gap-1.5 flex-1 min-w-[150px]">
            <span className="text-slate-500 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-widest">EVENT SCHEMA</span>
            <span className="text-slate-200 text-sm font-medium font-['Inter']">v2026-08</span>
          </div>
        </div>

        {/* Split Content */}
        <div className="flex flex-col lg:flex-row gap-8 w-full mt-2">
          
          {/* Left: Before you migrate */}
          <div className="w-full lg:w-[320px] shrink-0 bg-[#141A25] border border-slate-800 rounded-2xl p-7 flex flex-col gap-6 shadow-sm">
            <h3 className="text-white text-lg font-bold font-['Space_Grotesk'] border-b border-slate-800 pb-4">
              Before you migrate
            </h3>
            <p className="text-slate-400 text-sm font-['Inter'] leading-relaxed">
              Compatibility and action are independent, source-owned states.
            </p>
            
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1 relative pl-4 border-l-2 border-emerald-500/50">
                <span className="text-slate-200 text-sm font-bold font-['Space_Grotesk']">Compatibility: Limited</span>
                <span className="text-slate-400 text-xs font-['Inter'] leading-relaxed">Existing custom verifiers that rebuild JSON may reject valid requests.</span>
              </div>
              <div className="flex flex-col gap-1 relative pl-4 border-l-2 border-amber-500/50">
                <span className="text-slate-200 text-sm font-bold font-['Space_Grotesk']">Action: Review required</span>
                <span className="text-slate-400 text-xs font-['Inter'] leading-relaxed">Compare your verifier with the current Webhooks guide before the effective date.</span>
              </div>
              <div className="flex flex-col gap-1 relative pl-4 border-l-2 border-cyan-500/50">
                <span className="text-slate-200 text-sm font-bold font-['Space_Grotesk']">Audience</span>
                <span className="text-slate-400 text-xs font-['Inter'] leading-relaxed">Teams operating a custom webhook endpoint or proxy.</span>
              </div>
              <div className="flex flex-col gap-1 relative pl-4 border-l-2 border-blue-500/50">
                <span className="text-slate-200 text-sm font-bold font-['Space_Grotesk']">Current authority</span>
                <span className="text-slate-400 text-xs font-['Inter'] leading-relaxed">Use current Webhooks documentation for implementation behaviors.</span>
              </div>
            </div>
          </div>

          {/* Right: Approved migration path */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="w-full bg-[#141A25] border border-slate-800 rounded-2xl p-7 flex flex-col gap-6 shadow-sm">
              <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
                  Approved migration path
                </h3>
                <span className="text-emerald-400 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-widest bg-emerald-500/10 px-2 py-1 rounded">
                  RESOURCE : CURRENT
                </span>
              </div>
              
              <div className="flex flex-col gap-3">
                <div className="bg-[#0A0D13] border border-slate-800/80 rounded-xl p-5 flex items-start gap-4">
                  <span className="text-blue-500 text-sm font-bold font-['Space_Grotesk'] shrink-0 pt-0.5">01</span>
                  <p className="text-slate-300 text-sm font-['Inter'] leading-relaxed">
                    Capture the unmodified request body before parsing or middleware transformation.
                  </p>
                </div>
                <div className="bg-[#0A0D13] border border-slate-800/80 rounded-xl p-5 flex items-start gap-4">
                  <span className="text-blue-500 text-sm font-bold font-['Space_Grotesk'] shrink-0 pt-0.5">02</span>
                  <p className="text-slate-300 text-sm font-['Inter'] leading-relaxed">
                    Pass the signed timestamp and raw payload to the current verification helper.
                  </p>
                </div>
                <div className="bg-[#0A0D13] border border-slate-800/80 rounded-xl p-5 flex items-start gap-4">
                  <span className="text-blue-500 text-sm font-bold font-['Space_Grotesk'] shrink-0 pt-0.5">03</span>
                  <p className="text-slate-300 text-sm font-['Inter'] leading-relaxed">
                    Retest affected samples and delivery fixtures; do not infer retry behavior from this entry.
                  </p>
                </div>
              </div>
            </div>

            {/* Warning Callout */}
            <div className="w-full bg-[#141A25] border border-amber-500/30 rounded-2xl p-5 flex items-start gap-4 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-500" />
              <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <span className="text-amber-500 text-sm font-bold font-['Space_Grotesk']">
                  Corrected August 24, 2026 - CHG-2026-031
                </span>
                <p className="text-slate-400 text-[13px] font-['Inter'] leading-relaxed">
                  Clarified that managed SDK helpers remain compatible. Original publication is preserved; current reading is shown above.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
