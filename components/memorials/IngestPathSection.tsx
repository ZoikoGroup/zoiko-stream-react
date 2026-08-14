import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function IngestPathSection() {
  return (
    <section className="w-full py-16 sm:py-24 bg-zinc-900 dark:bg-zinc-955 border-t border-b border-gray-850 dark:border-gray-800 text-white transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-14">
        
        <div className="flex flex-col gap-4">
          <h2 className="text-slate-100 dark:text-white text-3xl sm:text-4xl font-bold leading-tight">
            How video and audio reach the memorial
          </h2>
          <p className="text-slate-400 dark:text-slate-350 text-base sm:text-lg">
            Identify where the event originates and what is needed to share it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Venue Source */}
          <div className="p-6 sm:p-8 bg-zinc-950 dark:bg-gray-900 rounded-xl border border-gray-800 dark:border-gray-850 flex flex-col gap-4">
            <div className="h-40 rounded-lg overflow-hidden flex">
              <img 
                className="w-full h-full object-cover" 
                src="/images/memorials/image (2).png" 
                alt="Venue AV source setup" 
              />
            </div>
            <h3 className="text-slate-100 dark:text-white text-xl font-bold">Venue source</h3>
            <p className="text-slate-400 dark:text-slate-300 text-sm leading-relaxed">
              Identify venue AV, camera, or source availability. Setup depends on event configuration.
            </p>
          </div>

          {/* Card 2: Remote Contribution */}
          <div className="p-6 sm:p-8 bg-zinc-955 dark:bg-gray-900 rounded-xl border border-gray-800 dark:border-gray-855 flex flex-col gap-4">
            <div className="h-40 rounded-lg overflow-hidden flex">
              <img 
                className="w-full h-full object-cover" 
                src="/images/memorials/image (4).png" 
                alt="Remote speakers contributing video streams" 
              />
            </div>
            <h3 className="text-slate-100 dark:text-white text-xl font-bold">Remote contribution</h3>
            <p className="text-slate-400 dark:text-slate-300 text-sm leading-relaxed">
              If remote speakers or sources are supported, plan the contribution path into the event.
            </p>
          </div>

          {/* Card 3: Production & Switching */}
          <div className="p-6 sm:p-8 bg-zinc-955 dark:bg-gray-900 rounded-xl border border-gray-800 dark:border-gray-855 flex flex-col gap-4">
            <div className="h-40 rounded-lg overflow-hidden flex">
              <img 
                className="w-full h-full object-cover" 
                src="/images/memorials/image (3).png" 
                alt="Multi-camera production and video switching setup" 
              />
            </div>
            <h3 className="text-slate-100 dark:text-white text-xl font-bold">Production &amp; switching</h3>
            <p className="text-slate-400 dark:text-slate-300 text-sm leading-relaxed">
              Camera management, switching, and graphics responsibilities defined before the event.
            </p>
          </div>

        </div>

        {/* Responsibility Matrix */}
        <div className="p-6 sm:p-8 bg-zinc-955 dark:bg-gray-900 rounded-2xl flex flex-col gap-6">
          <h3 className="text-slate-100 dark:text-white text-base font-bold">
            Operational Responsibility Matrix
          </h3>
          
          <div className="w-full h-px bg-gray-800" />
          
          <div className="overflow-x-auto w-full scrollbar-none">
            <div className="min-w-[768px] flex flex-col gap-1">
              
              {/* Header Row */}
              <div className="px-4 py-3 bg-slate-800 dark:bg-gray-800 rounded-t-lg grid grid-cols-4 gap-4">
                <div className="text-slate-200 dark:text-white text-xs font-bold uppercase tracking-wider">Responsibility</div>
                <div className="text-slate-200 dark:text-white text-xs font-bold uppercase tracking-wider">Organizer / Venue</div>
                <div className="text-slate-200 dark:text-white text-xs font-bold uppercase tracking-wider">ZoikoStream</div>
                <div className="text-slate-200 dark:text-white text-xs font-bold uppercase tracking-wider">Third party</div>
              </div>

              {/* Rows */}
              <div className="px-4 py-3 bg-gray-900/30 grid grid-cols-4 gap-4 border-b border-gray-800/50">
                <div className="text-slate-300 dark:text-slate-202 text-xs font-medium">Venue connectivity</div>
                <div className="text-slate-400 dark:text-slate-300 text-xs">Primary owner</div>
                <div className="text-slate-400 dark:text-slate-300 text-xs">Support advisory</div>
                <div className="text-slate-400 dark:text-slate-300 text-xs">Optional backup</div>
              </div>

              <div className="px-4 py-3 bg-gray-900/30 grid grid-cols-4 gap-4 border-b border-gray-800/50">
                <div className="text-slate-300 dark:text-slate-202 text-xs font-medium">Video/audio source</div>
                <div className="text-slate-400 dark:text-slate-300 text-xs">AV setup owner</div>
                <div className="text-slate-400 dark:text-slate-300 text-xs">Ingest path validation</div>
                <div className="text-slate-400 dark:text-slate-300 text-xs">AV contractor (optional)</div>
              </div>

              <div className="px-4 py-3 bg-gray-900/30 grid grid-cols-4 gap-4 border-b border-gray-800/50">
                <div className="text-slate-300 dark:text-slate-202 text-xs font-medium">Streaming config</div>
                <div className="text-slate-400 dark:text-slate-300 text-xs">Input parameters</div>
                <div className="text-slate-400 dark:text-slate-300 text-xs">Core cloud platform</div>
                <div className="text-slate-400 dark:text-slate-300 text-xs">Integration helper</div>
              </div>

              <div className="px-4 py-3 bg-gray-900/30 grid grid-cols-4 gap-4 border-b border-gray-800/50">
                <div className="text-slate-305 dark:text-slate-202 text-xs font-medium">Audience invitation</div>
                <div className="text-slate-400 dark:text-slate-300 text-xs">Primary owner</div>
                <div className="text-slate-400 dark:text-slate-300 text-xs">Access control logic</div>
                <div className="text-slate-400 dark:text-slate-300 text-xs">N/A</div>
              </div>

              <div className="px-4 py-3 bg-gray-900/30 grid grid-cols-4 gap-4">
                <div className="text-slate-305 dark:text-slate-202 text-xs font-medium">Active-event support</div>
                <div className="text-slate-400 dark:text-slate-300 text-xs">Local monitor</div>
                <div className="text-slate-400 dark:text-slate-300 text-xs">Standard platform SLA</div>
                <div className="text-slate-400 dark:text-slate-350 text-xs">Assigned tech expert</div>
              </div>

            </div>
          </div>
        </div>

        {/* Expert CTA */}
        <div className="flex items-center gap-2 group cursor-pointer w-fit">
          <span className="text-blue-400 group-hover:text-blue-300 text-base font-bold transition-colors">
            Discuss setup with an expert
          </span>
          <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
        </div>

      </div>
    </section>
  );
}
