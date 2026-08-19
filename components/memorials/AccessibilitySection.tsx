import React from 'react';

export default function AccessibilitySection() {
  return (
    <section className="w-full py-16 sm:py-24 bg-white text-zinc-900 transition-colors duration-200 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-14">
        
        <div className="flex flex-col gap-4">
          <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold leading-tight">
            Plan for people who will watch, listen, read, navigate, and participate differently
          </h2>
          <p className="text-gray-500 text-base sm:text-lg">
            Accessible participation is part of planning, not a footnote.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <div className="p-8 sm:p-10 bg-slate-50 rounded-2xl border border-teal-400 flex flex-col gap-5">
            <h3 className="text-zinc-900 text-xl font-bold">Captions and languages</h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Captioning needs, language support, and delivery behavior planned with the event brief. Methods and availability confirmed during planning.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 sm:p-10 bg-slate-50 rounded-2xl border border-teal-400 flex flex-col gap-5">
            <h3 className="text-zinc-900 text-xl font-bold">Accessibility &amp; inclusion</h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Keyboard access, screen-reader compatibility, contrast, visible focus, media alternatives, and assistive-technology considerations.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
