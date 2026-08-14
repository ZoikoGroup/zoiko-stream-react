import React from 'react';

export default function ArchiveReplaySection() {
  return (
    <section className="w-full py-16 sm:py-24 bg-zinc-950 dark:bg-black text-white transition-colors duration-200 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-14">
        
        <div className="flex flex-col gap-4">
          <h2 className="text-gray-550 text-3xl sm:text-4xl font-bold leading-tight">
            Decide what should remain after the live moment ends
          </h2>
          <p className="text-gray-400 dark:text-slate-400 text-base sm:text-lg">
            Recording, replay, and archive are separate decisions with their own considerations.
          </p>
        </div>

        <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden flex">
          <img 
            className="w-full h-full object-cover" 
            src="/images/memorials/image (5).png" 
            alt="Archived recordings, replay timeline options" 
          />
        </div>

        {/* Path steps row */}
        <div className="p-6 sm:p-8 bg-slate-900 dark:bg-zinc-900 rounded-2xl border border-gray-800 dark:border-gray-850 flex flex-col sm:flex-row flex-wrap md:flex-nowrap gap-6 sm:gap-4 items-center justify-between">
          
          <div className="flex items-center gap-4">
            <div className="p-4 bg-gray-950 dark:bg-zinc-950 rounded-lg border border-gray-800 text-gray-50 text-sm font-bold">
              Record?
            </div>
            <span className="text-indigo-400 text-sm font-bold hidden sm:inline">&rarr;</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-4 bg-gray-955 dark:bg-zinc-950 rounded-lg border border-gray-800 text-gray-50 text-sm font-bold">
              Replay available?
            </div>
            <span className="text-indigo-400 text-sm font-bold hidden sm:inline">&rarr;</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-4 bg-gray-955 dark:bg-zinc-950 rounded-lg border border-gray-800 text-gray-50 text-sm font-bold">
              Who can view?
            </div>
            <span className="text-indigo-400 text-sm font-bold hidden sm:inline">&rarr;</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-4 bg-gray-955 dark:bg-zinc-950 rounded-lg border border-gray-800 text-gray-50 text-sm font-bold">
              Retention / removal
            </div>
            <span className="text-indigo-400 text-sm font-bold hidden sm:inline">&rarr;</span>
          </div>

          <div className="p-4 bg-gray-955 dark:bg-zinc-950 rounded-lg border border-gray-800 text-gray-50 text-sm font-bold">
            Download/export
          </div>

        </div>

      </div>
    </section>
  );
}
