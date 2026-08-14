import React from 'react';
import { Video, Clock, Users, Accessibility, RotateCcw, ShieldCheck } from 'lucide-react';

export default function DecisionsSection() {
  return (
    <section className="w-full py-16 sm:py-24 bg-white dark:bg-gray-900 text-zinc-900 dark:text-white transition-colors duration-200 border-t border-slate-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col gap-4 mb-12 sm:mb-16">
          <h2 className="text-zinc-900 dark:text-white text-3xl sm:text-4xl font-bold leading-tight">
            What you need to decide
          </h2>
          <p className="text-gray-550 dark:text-slate-400 text-base sm:text-lg">
            Six decisions that shape how the memorial is shared remotely.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Venue & Source */}
          <div className="bg-slate-50 dark:bg-zinc-950 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-teal-900/40 hover:border-teal-400 dark:hover:border-teal-505 transition-colors flex flex-col gap-4">
            <div className="w-9 h-9 bg-zinc-900 dark:bg-gray-850 rounded-lg flex items-center justify-center text-cyan-405">
              <Video className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-zinc-900 dark:text-white text-xl font-bold">Venue &amp; source</h3>
            <p className="text-gray-500 dark:text-slate-350 text-sm leading-relaxed">
              Where will video and audio come from?
            </p>
            <p className="text-slate-400 dark:text-slate-450 text-xs mt-auto pt-2 border-t border-slate-200 dark:border-gray-800">
              Venue AV, camera, remote contribution, or another approved source.
            </p>
          </div>

          {/* Card 2: Timing */}
          <div className="bg-slate-50 dark:bg-zinc-955 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-teal-900/40 hover:border-teal-400 dark:hover:border-teal-505 transition-colors flex flex-col gap-4">
            <div className="w-9 h-9 bg-zinc-900 dark:bg-gray-855 rounded-lg flex items-center justify-center text-cyan-405">
              <Clock className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-zinc-900 dark:text-white text-xl font-bold">Timing</h3>
            <p className="text-gray-505 dark:text-slate-350 text-sm leading-relaxed">
              When is the memorial and how long is the planned program?
            </p>
            <p className="text-slate-400 dark:text-slate-455 text-xs mt-auto pt-2 border-t border-slate-200 dark:border-gray-800">
              Date/time and duration help determine readiness and support needs.
            </p>
          </div>

          {/* Card 3: Audience */}
          <div className="bg-slate-50 dark:bg-zinc-955 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-teal-900/40 hover:border-teal-400 dark:hover:border-teal-505 transition-colors flex flex-col gap-4">
            <div className="w-9 h-9 bg-zinc-900 dark:bg-gray-855 rounded-lg flex items-center justify-center text-cyan-405">
              <Users className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-zinc-900 dark:text-white text-xl font-bold">Audience</h3>
            <p className="text-gray-505 dark:text-slate-350 text-sm leading-relaxed">
              Who should be able to watch?
            </p>
            <p className="text-slate-400 dark:text-slate-455 text-xs mt-auto pt-2 border-t border-slate-200 dark:border-gray-800">
              Public, limited, invite-only, credentialed, or another published access model.
            </p>
          </div>

          {/* Card 4: Accessibility */}
          <div className="bg-slate-50 dark:bg-zinc-955 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-teal-900/40 hover:border-teal-400 dark:hover:border-teal-505 transition-colors flex flex-col gap-4">
            <div className="w-9 h-9 bg-zinc-900 dark:bg-gray-855 rounded-lg flex items-center justify-center text-cyan-405">
              <Accessibility className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-zinc-900 dark:text-white text-xl font-bold">Accessibility</h3>
            <p className="text-gray-505 dark:text-slate-350 text-sm leading-relaxed">
              What do attendees need to participate?
            </p>
            <p className="text-slate-400 dark:text-slate-455 text-xs mt-auto pt-2 border-t border-slate-200 dark:border-gray-800">
              Captions, languages, screen-reader-friendly access, and other published accommodations.
            </p>
          </div>

          {/* Card 5: Recording & Replay */}
          <div className="bg-slate-50 dark:bg-zinc-955 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-teal-900/40 hover:border-teal-400 dark:hover:border-teal-505 transition-colors flex flex-col gap-4">
            <div className="w-9 h-9 bg-zinc-900 dark:bg-gray-855 rounded-lg flex items-center justify-center text-cyan-405">
              <RotateCcw className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-zinc-900 dark:text-white text-xl font-bold">Recording &amp; replay</h3>
            <p className="text-gray-555 dark:text-slate-350 text-sm leading-relaxed">
              Should the event be recorded or available afterward?
            </p>
            <p className="text-slate-400 dark:text-slate-455 text-xs mt-auto pt-2 border-t border-slate-200 dark:border-gray-800">
              Live viewing, recording, replay, archive, and retention are separate decisions.
            </p>
          </div>

          {/* Card 6: Support & Resilience */}
          <div className="bg-slate-50 dark:bg-zinc-955 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-teal-900/40 hover:border-teal-400 dark:hover:border-teal-505 transition-colors flex flex-col gap-4">
            <div className="w-9 h-9 bg-zinc-900 dark:bg-gray-855 rounded-lg flex items-center justify-center text-cyan-405">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-zinc-900 dark:text-white text-xl font-bold">Support &amp; resilience</h3>
            <p className="text-gray-555 dark:text-slate-350 text-sm leading-relaxed">
              How much operational support is appropriate?
            </p>
            <p className="text-slate-400 dark:text-slate-455 text-xs mt-auto pt-2 border-t border-slate-200 dark:border-gray-800">
              Use published support/resilience options; higher-assurance needs route to expert review.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
