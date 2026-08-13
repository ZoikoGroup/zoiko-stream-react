'use client';

import React from 'react';

export default function ReplayArchiveSection() {
  const processSteps = [
    'Live stream ends',
    'Automatic recording',
    'Review/publish decision',
    'Replay access window',
    'Long-term archive',
  ];

  return (
    <section
      className="relative w-full bg-zinc-950/70 dark:bg-slate-900/90 text-slate-100 dark:text-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat transition-colors duration-200"
      style={{
        // Replace with your actual background image URL
        backgroundImage: `linear-gradient(rgba(9, 9, 11, 0.85), rgba(9, 9, 11, 0.85)), url('/images/live-event-overview/image 1 (3).png')`,
      }}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col justify-start items-start gap-10 lg:gap-14 relative z-10">
        
        {/* Section Header */}
        <div className="w-full flex flex-col justify-start items-start gap-4 max-w-5xl">
          <h2 className="text-slate-100 dark:text-white text-3xl sm:text-4xl lg:text-4xl font-bold   leading-tight sm:leading-[1.2]">
            Decide what should remain after the live moment ends
          </h2>
          <p className="text-slate-400 dark:text-slate-300 text-base sm:text-lg font-normal   leading-relaxed">
            Recording, replay, and archive are separate decisions. Capture, publication timing, viewer access, retention, and archive scope depend on configured service and event requirements.
          </p>
        </div>

        {/* Process Flow Card */}
        <div className="w-full p-6 sm:p-8 bg-zinc-900/90 dark:bg-zinc-900/90 backdrop-blur-md rounded-2xl border border-gray-800 dark:border-slate-800 shadow-xl overflow-x-auto">
          <div className="flex items-center gap-3 sm:gap-5 min-w-max">
            {processSteps.map((step, index) => {
              const isLast = index === processSteps.length - 1;

              return (
                <React.Fragment key={index}>
                  {/* Step Card */}
                  <div className="p-4 bg-zinc-950 dark:bg-zinc-950 rounded-lg border border-gray-800 dark:border-slate-800 flex justify-center items-center">
                    <span className="text-slate-100 dark:text-white text-sm font-medium  ">
                      {step}
                    </span>
                  </div>

                  {/* Connector Arrow */}
                  {!isLast && (
                    <span className="text-teal-400 text-sm font-normal   select-none">
                      →
                    </span>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}