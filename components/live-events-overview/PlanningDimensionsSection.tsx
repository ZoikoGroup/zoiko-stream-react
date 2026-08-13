'use client';

import React from 'react';

interface DimensionCard {
  category: string;
  title: string;
  tags: string;
}

export default function PlanningDimensionsSection() {
  const dimensions: DimensionCard[] = [
    {
      category: 'EVENT TYPES',
      title: 'Choose the context of the moment',
      tags: 'Memorials · Worship · Weddings & celebrations · Graduations · Civic events · Corporate broadcasts',
    },
    {
      category: 'PLAN & OPERATE',
      title:
        'Plan workflow, managed delivery, contribution, production, audience access, captions & languages, and recording & replay',
      tags: 'Configuration Setup · Camera Operations · Access Tokens · Live Captions · File Export',
    },
    {
      category: 'RESILIENCE & HELP',
      title:
        'Multi-track, resilience, assurance, private streaming, accessibility, FAQ & support, and planning & briefing',
      tags: 'Redundancy Design · Direct SLA Support · 24/7 Operations Room · Complete Briefing Documents',
    },
  ];

  return (
    <section
      className="relative w-full bg-slate-950 dark:bg-slate-900 text-white dark:text-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat transition-colors duration-200"
      style={{
        // Replace the placeholder URL with your actual background image URL
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url('/images/live-event-overview/image 1 (5).png')`,
      }}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col justify-start items-start gap-8 sm:gap-12 relative z-10">
        
        {/* Section Title */}
        <h2 className="text-slate-100 dark:text-white text-3xl sm:text-4xl lg:text-4xl font-bold   leading-tight sm:leading-[1.2]">
          One event journey. Three planning dimensions.
        </h2>

        {/* Cards Stack */}
        <div className="w-full flex flex-col justify-start items-stretch gap-6">
          {dimensions.map((item, index) => (
            <div
              key={index}
              className="w-full p-6 sm:p-8 lg:p-10 bg-zinc-900/90 dark:bg-zinc-900/90 backdrop-blur-md rounded-2xl border border-gray-800 dark:border-slate-800 flex flex-col justify-start items-start gap-5 shadow-xl hover:border-gray-700 transition-colors"
            >
              {/* Card Header & Arrow */}
              <div className="w-full flex justify-between items-start sm:items-center gap-4">
                <div className="max-w-3xl flex flex-col justify-start items-start gap-2">
                  <span className="text-teal-400 text-xs sm:text-sm font-bold   tracking-wider uppercase">
                    {item.category}
                  </span>
                  <h3 className="text-slate-100 dark:text-white text-lg sm:text-xl font-bold   leading-snug sm:leading-7">
                    {item.title}
                  </h3>
                </div>

                {/* Chevron Arrow Icon */}
                <div className="w-8 h-8 rounded-full bg-slate-800/80 flex items-center justify-center shrink-0">
                  <svg
                    className="w-4 h-4 text-white transform rotate-90"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>

              {/* Divider */}
              <hr className="w-full border-t border-gray-800 dark:border-slate-800" />

              {/* Tags/Footnote */}
              <p className="text-slate-400 dark:text-slate-300 text-xs sm:text-sm font-normal   leading-relaxed">
                {item.tags}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}