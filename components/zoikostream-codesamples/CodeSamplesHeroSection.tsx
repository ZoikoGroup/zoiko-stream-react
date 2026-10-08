import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function CodeSamplesHeroSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 pt-32 pb-24 bg-[#0A0D13] flex flex-col justify-center items-start overflow-hidden">
      
      {/* Background Graphic */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#0A0D13]/70 z-10" /> {/* Dark overlay for text readability */}
        <Image src="/images/developers-changelog/sec1-bg.png" alt="Hero background" fill className="object-cover opacity-80" priority />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[100px] rounded-full z-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-6 w-[55%]">
          {/* Tag */}
          <div className="px-3 py-1.5 rounded-full border border-emerald-500/30 bg-[#0A0D13]/80 backdrop-blur flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            <span className="text-slate-200 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-widest">
              CURRENT SOURCE-TESTED EXAMPLES
            </span>
          </div>

          <h1 className="text-white text-5xl sm:text-6xl lg:text-[62px] font-bold font-['Space_Grotesk'] leading-[1.05] tracking-tight min-w-max">
            Code samples built for<br/>
            safe, exact<br/>
            implementation
          </h1>

          <p className="text-slate-400 text-lg sm:text-[19px] font-normal font-['Inter'] leading-relaxed max-w-[550px]">
            Find focused ZoikoStream examples by developer task. Every public sample is tied to a current contract, runtime, synthetic fixture, validation evidence, and an explicit copy-eligibility state.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <button className="h-12 px-6 bg-gradient-to-r from-teal-400 to-blue-500 rounded text-slate-950 text-sm font-bold font-['Space_Grotesk'] whitespace-nowrap hover:opacity-90 transition-opacity flex items-center gap-2">
              Browse samples <ArrowRight className="w-4 h-4" />
            </button>
            <button className="h-12 px-6 bg-transparent border border-slate-700 rounded text-slate-200 text-sm font-bold font-['Space_Grotesk'] whitespace-nowrap hover:bg-slate-800 transition-colors">
              Open Quickstart
            </button>
            <a href="#api" className="text-emerald-400 text-sm font-bold font-['Space_Grotesk'] flex items-center gap-1.5 ml-2 hover:text-emerald-300">
              API reference <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <p className="text-slate-500 text-xs font-['Inter'] max-w-lg mt-4">
            Code samples demonstrate one approved task. They do not imply SDK availability, production readiness, or access entitlement.
          </p>
        </div>

        {/* Right Column: Copy Eligibility Box */}
        <div className="w-full lg:w-[420px] shrink-0 bg-[#0F1219] border border-slate-800 rounded-2xl p-7 flex flex-col gap-6 shadow-2xl relative z-10 backdrop-blur-md">
          <div className="flex flex-col gap-1.5">
            <span className="text-emerald-500 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-widest">
              COPY ELIGIBILITY
            </span>
            <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
              Trust the gate, not the gloss
            </h3>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                <span className="text-slate-300 text-sm font-['Inter']">Canonical source artifact</span>
              </div>
              <span className="text-emerald-400 text-[10px] font-bold font-['Space_Grotesk'] tracking-wider">REQUIRED</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                <span className="text-slate-300 text-sm font-['Inter']">Contract and fixture tests</span>
              </div>
              <span className="text-emerald-400 text-[10px] font-bold font-['Space_Grotesk'] tracking-wider">PASS</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                <span className="text-slate-300 text-sm font-['Inter']">Secret and data scans</span>
              </div>
              <span className="text-emerald-400 text-[10px] font-bold font-['Space_Grotesk'] tracking-wider">PASS</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                <span className="text-slate-300 text-sm font-['Inter']">Side-effect classification</span>
              </div>
              <span className="text-amber-500 text-[10px] font-bold font-['Space_Grotesk'] tracking-wider">VISIBLE</span>
            </div>
          </div>

          <div className="bg-[#0A0D13] border border-slate-800 rounded-lg p-4 flex gap-3 mt-2">
            <div className="mt-0.5 shrink-0">
              <div className="w-4 h-4 rounded border border-emerald-500 flex items-center justify-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-sm" />
              </div>
            </div>
            <p className="text-slate-400 text-xs font-['Inter'] leading-relaxed">
              Copy appears only when lifecycle, compatibility, security, review, and side-effect gates permit it.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-3 py-1 rounded-full border border-slate-700 text-slate-400 text-[10px] font-medium">Current</span>
            <span className="px-3 py-1 rounded-full border border-slate-700 text-slate-400 text-[10px] font-medium">No-copy</span>
            <span className="px-3 py-1 rounded-full border border-slate-700 text-slate-400 text-[10px] font-medium">Stale</span>
            <span className="px-3 py-1 rounded-full border border-slate-700 text-slate-400 text-[10px] font-medium">Security hold</span>
          </div>
        </div>

      </div>
    </section>
  );
}
