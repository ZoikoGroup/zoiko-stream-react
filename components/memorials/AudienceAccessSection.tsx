import React from 'react';

export default function AudienceAccessSection() {
  return (
    <section className="w-full py-16 sm:py-24 bg-white dark:bg-gray-900 text-zinc-900 dark:text-white transition-colors duration-200 border-t border-slate-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <div className="lg:col-span-7 flex flex-col justify-start items-start gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-zinc-900 dark:text-white text-3xl sm:text-4xl font-bold leading-tight">
              Decide who should be able to watch before you decide how to publish
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg">
              Audience access is a first-class planning decision, not a last-minute configuration.
            </p>
          </div>

          <div className="w-full flex flex-col gap-4">
            {/* Card 1 */}
            <div className="p-5 bg-slate-50 dark:bg-zinc-955 rounded-xl border border-slate-200 dark:border-gray-800 flex items-center gap-4">
              <div className="w-3 h-3 bg-teal-400 rounded-full shrink-0" />
              <div>
                <h4 className="text-zinc-900 dark:text-white text-base font-bold">Open / public</h4>
                <p className="text-slate-505 dark:text-slate-400 text-sm">Anyone with the link can view.</p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="p-5 bg-slate-50 dark:bg-zinc-955 rounded-xl border border-slate-200 dark:border-gray-800 flex items-center gap-4">
              <div className="w-3 h-3 bg-teal-400 rounded-full shrink-0" />
              <div>
                <h4 className="text-zinc-900 dark:text-white text-base font-bold">Link-based</h4>
                <p className="text-slate-505 dark:text-slate-400 text-sm">Shared via a specific link with optional controls.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-5 bg-slate-50 dark:bg-zinc-955 rounded-xl border border-slate-200 dark:border-gray-800 flex items-center gap-4">
              <div className="w-3 h-3 bg-teal-400 rounded-full shrink-0" />
              <div>
                <h4 className="text-zinc-900 dark:text-white text-base font-bold">Invite-only</h4>
                <p className="text-slate-505 dark:text-slate-400 text-sm">Only invited participants can access the stream.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-5 bg-slate-50 dark:bg-zinc-955 rounded-xl border border-slate-200 dark:border-gray-800 flex items-center gap-4">
              <div className="w-3 h-3 bg-teal-400 rounded-full shrink-0" />
              <div>
                <h4 className="text-zinc-900 dark:text-white text-base font-bold">Private / credentialed</h4>
                <p className="text-slate-505 dark:text-slate-400 text-sm">Verified identity or credentials required. Scope confirmed during planning.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-5 flex justify-center items-center">
          <img 
            className="w-full max-w-[526px] aspect-[526/505] object-cover rounded-3xl shadow-[0px_4px_24px_rgba(0,0,0,0.15)] border border-slate-200 dark:border-gray-700" 
            src="/images/memorials/image (6).png" 
            alt="Audience access management dashboard layout mockup"
          />
        </div>

      </div>
    </section>
  );
}
