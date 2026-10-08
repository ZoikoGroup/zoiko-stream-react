import React from 'react';
import { Copy, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';

export default function CodeSamplesSafetySection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 bg-[#0A0D13] flex flex-col items-center overflow-hidden border-t border-slate-800">
      
      {/* Background Graphic */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex justify-center items-center opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/30 via-[#0A0D13] to-[#0A0D13]"></div>
        <div className="w-[1px] h-full bg-slate-800 absolute left-1/4" />
        <div className="w-[1px] h-full bg-slate-800 absolute right-1/4" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] flex flex-col gap-10">
        
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 w-full">
          <div className="flex flex-col gap-4 max-w-3xl">
            <h2 className="text-white text-3xl sm:text-4xl lg:text-[40px] font-bold font-['Space_Grotesk'] leading-tight">
              Inspect safety context before you copy
            </h2>
            <p className="text-slate-400 text-lg font-normal font-['Inter'] leading-relaxed">
              Purpose, contract compatibility, prerequisites, side effects, and lifecycle state stay visible beside every governed sample artifact.
            </p>
          </div>

          <div className="w-full lg:w-[320px] shrink-0 p-5 rounded-xl border border-amber-500/30 bg-[#141A25] flex flex-col gap-2 shadow-lg">
            <span className="text-amber-500 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-widest">
              Copy disabled in preview
            </span>
            <p className="text-slate-300 text-sm font-['Inter'] leading-relaxed">
              Copy appears only when the current source, validation, security, review, and side-effect gates all pass.
            </p>
          </div>
        </div>

        {/* 4-Column Stats */}
        <div className="w-full bg-[#141A25] border border-slate-800 rounded-xl p-6 flex flex-wrap lg:flex-nowrap gap-6 lg:gap-12 shadow-sm">
          <div className="flex flex-col gap-1.5 flex-1 min-w-[150px]">
            <span className="text-slate-500 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-widest">PURPOSE</span>
            <span className="text-slate-200 text-sm font-bold font-['Space_Grotesk']">One approved developer task</span>
          </div>
          <div className="flex flex-col gap-1.5 flex-1 min-w-[150px]">
            <span className="text-slate-500 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-widest">CONTRACT</span>
            <span className="text-teal-400 text-sm font-bold font-['Space_Grotesk']">Current reference required</span>
          </div>
          <div className="flex flex-col gap-1.5 flex-1 min-w-[150px]">
            <span className="text-slate-500 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-widest">RUNTIME</span>
            <span className="text-slate-200 text-sm font-bold font-['Space_Grotesk']">Source-defined only</span>
          </div>
          <div className="flex flex-col gap-1.5 flex-1 min-w-[150px]">
            <span className="text-slate-500 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-widest">SIDE-EFFECT RISK</span>
            <span className="text-amber-500 text-sm font-bold font-['Space_Grotesk']">Review required</span>
          </div>
        </div>

        {/* Split Content Layout */}
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          
          {/* Left: Before you copy */}
          <div className="w-full lg:w-[320px] shrink-0 bg-[#141A25] border border-slate-800 rounded-2xl p-7 flex flex-col gap-6 shadow-sm">
            <div className="flex flex-col gap-2 border-b border-slate-800 pb-4">
              <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
                Before you copy
              </h3>
              <p className="text-slate-400 text-[13px] font-['Inter'] leading-relaxed">
                Required context is adjacent to code and remains available without JavaScript.
              </p>
            </div>
            
            <div className="flex flex-col gap-5">
              <div className="flex gap-4">
                <div className="w-7 h-7 rounded border border-emerald-500/50 flex items-center justify-center shrink-0">
                  <span className="text-emerald-400 text-xs font-bold font-['Space_Grotesk']">01</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-slate-200 text-sm font-bold font-['Space_Grotesk']">Access and environment</span>
                  <span className="text-slate-400 text-xs font-['Inter'] leading-relaxed">Use only the current source-defined permissions and approved environment.</span>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-7 h-7 rounded border border-blue-500/50 flex items-center justify-center shrink-0">
                  <span className="text-blue-400 text-xs font-bold font-['Space_Grotesk']">02</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-slate-200 text-sm font-bold font-['Space_Grotesk']">Synthetic data</span>
                  <span className="text-slate-400 text-xs font-['Inter'] leading-relaxed">No customer data or valid credentials belong in a public artifact.</span>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-7 h-7 rounded border border-teal-500/50 flex items-center justify-center shrink-0">
                  <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk']">03</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-slate-200 text-sm font-bold font-['Space_Grotesk']">Side effects</span>
                  <span className="text-slate-400 text-xs font-['Inter'] leading-relaxed">Unknown, destructive, publish, or security-sensitive impact disables copy.</span>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-7 h-7 rounded border border-indigo-500/50 flex items-center justify-center shrink-0">
                  <span className="text-indigo-400 text-xs font-bold font-['Space_Grotesk']">04</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-slate-200 text-sm font-bold font-['Space_Grotesk']">Dependencies</span>
                  <span className="text-slate-400 text-xs font-['Inter'] leading-relaxed">Runtime and dependency context must be reproducible and in review.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Code Viewer Area */}
          <div className="flex-1 flex flex-col gap-4">
            
            {/* Code Block Mockup */}
            <div className="w-full bg-[#0F1219] border border-slate-800 rounded-2xl flex flex-col overflow-hidden shadow-sm h-[320px]">
              
              {/* Header */}
              <div className="w-full h-14 bg-[#141A25] border-b border-slate-800 px-6 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-500" />
                  <span className="text-slate-300 text-sm font-bold font-['Space_Grotesk']">Canonical variant</span>
                </div>
                <button className="px-3 py-1.5 bg-slate-800/50 border border-slate-700 rounded text-slate-500 text-xs font-medium font-['Space_Grotesk'] flex items-center gap-1.5 cursor-not-allowed">
                  <Copy className="w-3.5 h-3.5" /> Copy unavailable
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 flex flex-col items-center justify-center px-8 text-center bg-[url('/images/Organization-overview/bg (147).png')] bg-cover bg-center bg-no-repeat relative">
                <div className="absolute inset-0 bg-[#0F1219]/90 backdrop-blur-sm z-0"></div>
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-slate-500" />
                  </div>
                  <p className="text-slate-400 text-sm font-mono max-w-md leading-relaxed">
                    Canonical sample artifact unavailable in this design preview. No code, language, command, endpoint, event, dependency, or output is invented.
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              <div className="bg-[#141A25] border border-slate-800 rounded-xl p-5 flex flex-col gap-2 md:col-span-3 lg:col-span-1 min-w-[200px]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  <span className="text-slate-200 text-sm font-bold font-['Space_Grotesk']">Expected result</span>
                </div>
                <p className="text-slate-400 text-[11px] font-['Inter'] leading-relaxed pl-6">
                  Shown only from a current schema-valid synthetic fixture or deterministic test. Passing evidence is scoped and never presented as production readiness.
                </p>
              </div>
              
              <div className="bg-[#141A25] border border-slate-800 rounded-xl p-5 flex flex-col gap-2 lg:col-span-1">
                <span className="text-slate-200 text-sm font-bold font-['Space_Grotesk']">Failure and unknown outcome</span>
                <p className="text-slate-400 text-[11px] font-['Inter'] leading-relaxed">
                  Permission, validation, rate, timeout, duplicate, and unknown states use current contract guidance. No blind retry behavior.
                </p>
              </div>
              
              <div className="bg-[#141A25] border border-slate-800 rounded-xl p-5 flex flex-col gap-2 lg:col-span-1">
                <span className="text-slate-200 text-sm font-bold font-['Space_Grotesk']">Cleanup is risk classified</span>
                <p className="text-slate-400 text-[11px] font-['Inter'] leading-relaxed">
                  Delete, revoke, stop, publish, and send actions remain no-copy unless an explicit safe context is approved.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
