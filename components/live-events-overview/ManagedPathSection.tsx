'use client';

import React from 'react';

export default function ManagedPathSection() {
  const selfServiceFeatures = [
    'Self-service APIs and direct dashboard tools',
    'Managed by your internal production crew',
    'Audience management handled in-house',
    'Standard community support coverage',
  ];

  const managedFeatures = [
    'Agreed operational ownership for live delivery',
    'Scoped production responsibility defined in advance',
    'Defined direct support coverage during stream',
    'Commercial terms confirmed specifically for the event',
  ];

  const planningQuestions = [
    { q: 'Q1', text: 'Who owns contribution and production?' },
    { q: 'Q2', text: 'Who controls audience access?' },
    { q: 'Q3', text: 'What accessibility/language is required?' },
    { q: 'Q4', text: 'What resilience level is required?' },
  ];

  return (
    <section
      className="relative w-full bg-slate-950 dark:bg-slate-900 text-slate-100 dark:text-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-y border-gray-800 dark:border-slate-800 bg-cover bg-center bg-no-repeat transition-colors duration-200"
      style={{
        // Replace this placeholder URL with your actual background image URL
        backgroundImage: `linear-gradient(170deg, rgba(2, 6, 23, 0.88), rgba(15, 23, 42, 0.92)), url('/images/live-event-overview/image (4).png')`,
      }}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col justify-start items-start gap-10 lg:gap-14 relative z-10">
        
        {/* Header Content */}
        <div className="w-full flex flex-col justify-start items-start gap-3 sm:gap-4 max-w-6xl">
          <h2 className="text-slate-100 dark:text-white text-3xl sm:text-4xl lg:text-4xl font-bold   leading-tight sm:leading-[1.2]">
            Bring in a managed path when the event needs more operational ownership
          </h2>
          <p className="text-slate-400 dark:text-slate-300 text-base sm:text-lg font-normal   leading-relaxed">
            Managed live event streaming is a planning path for events that need agreed operational responsibilities beyond a self-service build.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          
          {/* Card 1: Self Service */}
          <div className="w-full p-6 sm:p-8 bg-zinc-950/90 dark:bg-zinc-950/90 backdrop-blur-md rounded-2xl border border-gray-800 dark:border-slate-800 flex flex-col gap-5 shadow-xl">
            <h3 className="text-slate-100 dark:text-white text-xl font-bold   leading-7">
              Build / operate yourself
            </h3>
            <hr className="w-full border-t border-gray-800 dark:border-slate-800" />
            <div className="flex flex-col gap-3.5">
              {selfServiceFeatures.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-500 rounded-full shrink-0" />
                  <span className="text-slate-400 dark:text-slate-300 text-sm sm:text-base font-normal   leading-normal">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Managed Event */}
          <div className="w-full p-6 sm:p-8 bg-zinc-950/90 dark:bg-zinc-950/90 backdrop-blur-md rounded-2xl border border-blue-500 flex flex-col gap-5 shadow-xl">
            <h3 className="text-slate-100 dark:text-white text-xl font-bold   leading-7">
              Plan a managed event
            </h3>
            <hr className="w-full border-t border-gray-800 dark:border-slate-800" />
            <div className="flex flex-col gap-3.5">
              {managedFeatures.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-teal-400 rounded-full shrink-0" />
                  <span className="text-slate-100 dark:text-white text-sm sm:text-base font-normal   leading-normal">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Section: Core Planning Questions */}
        <div className="w-full flex flex-col justify-start items-start gap-6 sm:gap-8 pt-4">
          <h3 className="text-slate-100 dark:text-white text-xl font-bold   leading-7">
            Core Planning Questions Considered:
          </h3>

          {/* Questions Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            {planningQuestions.map((item, index) => (
              <div key={index} className="flex flex-col justify-start items-start gap-2">
                <span className="text-teal-400 text-base font-bold  ">
                  {item.q}
                </span>
                <p className="text-slate-400 dark:text-slate-300 text-sm font-normal   leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <button
              type="button"
              className="px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-zinc-950 text-base font-bold   leading-6 hover:opacity-90 transition-opacity"
            >
              Plan a live event
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}