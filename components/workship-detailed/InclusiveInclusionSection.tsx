import React from 'react';

export default function InclusiveInclusionSection() {
  return (
    <section className="w-full py-16 sm:py-24 bg-white dark:bg-gray-900 text-zinc-900 dark:text-white transition-colors duration-200 border-t border-slate-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-14">
        
        <div className="flex flex-col gap-4">
          <h2 className="text-zinc-900 dark:text-white text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            Plan for inclusive participation from the start
          </h2>
          <p className="text-gray-500 dark:text-slate-400 text-base sm:text-lg">
            Include everyone with closed captions, screen reader optimization, and customizable language tracks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Captions & languages */}
          <div className="h-[420px] bg-slate-50 dark:bg-zinc-950 rounded-2xl border border-slate-200 dark:border-gray-850 flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-56 w-full overflow-hidden flex">
              <img 
                className="w-full h-full object-cover" 
                src="/images/workship-detailed/image (23).png" 
                alt="Automated speech-to-text closed captions translations preview" 
              />
            </div>
            <div className="px-6 py-6 sm:px-8 flex flex-col gap-3">
              <h3 className="text-zinc-900 dark:text-white text-xl font-bold font-sans">
                Captions &amp; languages
              </h3>
              <p className="text-gray-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                Automated real-time speech-to-text, localized translations, and live sign-language inserts options verified.
              </p>
            </div>
          </div>

          {/* Card 2: Accessibility & player controls */}
          <div className="h-[420px] bg-slate-50 dark:bg-zinc-955 rounded-2xl border border-slate-200 dark:border-gray-850 flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-56 w-full overflow-hidden flex relative">
              <img 
                className="w-full h-full object-cover opacity-90" 
                src="/images/workship-detailed/image (24).png" 
                alt="Contrast settings and accessible screen reader tools overlay dashboard" 
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="px-6 py-6 sm:px-8 flex flex-col gap-3">
              <h3 className="text-zinc-900 dark:text-white text-xl font-bold font-sans">
                Accessibility &amp; player controls
              </h3>
              <p className="text-gray-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                Keyboard navigable web player, custom contrast controls, and screen-reader optimized elements.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
