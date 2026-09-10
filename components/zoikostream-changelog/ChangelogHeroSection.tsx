import React from 'react';
import { Search } from 'lucide-react';

export default function ChangelogHeroSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 pt-32 pb-24 bg-[#0A0D13] flex flex-col justify-center items-start overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[800px] h-[600px] bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-6 max-w-2xl">
          {/* Tag */}
          <div className="px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center">
            <span className="text-emerald-400 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-widest">
              CANONICAL CHANGE LEDGER
            </span>
          </div>

          <h1 className="text-white text-4xl sm:text-5xl lg:text-[56px] font-bold font-['Space_Grotesk'] leading-tight tracking-tight">
            Track what changed across ZoikoStream.
          </h1>

          <p className="text-slate-400 text-lg font-normal font-['Inter'] leading-relaxed">
            The ZoikoStream Changelog records released implementation-level changes, compatibility impact, deprecations, migrations, and required actions across approved developer and platform surfaces. Developers and Resources use the same canonical ledger.
          </p>

          {/* Search Box */}
          <div className="w-full max-w-[600px] mt-4 flex flex-col gap-3">
            <div className="relative w-full h-14 bg-white rounded-xl flex items-center px-2 shadow-lg">
              <Search className="w-5 h-5 text-slate-400 shrink-0 ml-3" />
              <input
                type="text"
                placeholder="Search change IDs, APIs, SDKs, events, protocols, players, or versions"
                className="w-full h-full bg-transparent border-none focus:outline-none focus:ring-0 text-slate-900 text-sm font-['Inter'] px-3 placeholder-slate-400"
              />
              <button className="h-10 px-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg text-slate-950 text-sm font-bold font-['Space_Grotesk'] whitespace-nowrap hover:opacity-90 transition-opacity mr-1">
                Search changes
              </button>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-xs font-['Space_Grotesk'] font-medium ml-1">
              <a href="#release-notes" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                Release notes - what the release means &rarr;
              </a>
              <span className="text-slate-500">
                Only released approved changes appear.
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Ledger Status Box */}
        <div className="w-full lg:w-[420px] shrink-0 bg-[#141A25] border border-slate-700/50 rounded-2xl p-6 flex flex-col gap-5 shadow-2xl relative z-10 backdrop-blur-md">
          <div className="flex flex-col gap-1">
            <span className="text-emerald-400 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-widest">
              LEDGER STATUS
            </span>
            <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
              One history, shared everywhere
            </h3>
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
              <span className="text-slate-400 text-xs font-['Inter']">Authority</span>
              <span className="text-emerald-400 text-xs font-['Space_Grotesk'] font-bold">Canonical</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
              <span className="text-slate-400 text-xs font-['Inter']">Publication history</span>
              <span className="text-slate-200 text-xs font-['Space_Grotesk'] font-medium">Immutable</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
              <span className="text-slate-400 text-xs font-['Inter']">Correction state</span>
              <span className="text-slate-200 text-xs font-['Space_Grotesk'] font-medium">Visible</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
              <span className="text-slate-400 text-xs font-['Inter']">Compatibility</span>
              <span className="text-slate-200 text-xs font-['Space_Grotesk'] font-medium">Source-governed</span>
            </div>
          </div>

          <div className="mt-2 bg-[#0A0D13] border border-emerald-500/20 rounded-lg p-4">
            <span className="text-emerald-400 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-widest block mb-1">
              TRUTH BOUNDARY
            </span>
            <p className="text-slate-400 text-[11px] font-['Inter'] leading-relaxed">
              Current health stays on System status. Current behavior stays in Documentation and API reference.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
