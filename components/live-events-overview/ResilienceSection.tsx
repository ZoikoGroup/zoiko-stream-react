'use client';

import React from 'react';

export default function ResilienceSection() {
  return (
    <section
      className="relative w-full bg-slate-950 dark:bg-slate-900 text-slate-100 dark:text-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-y border-gray-800 dark:border-slate-800 bg-cover bg-center bg-no-repeat transition-colors duration-200"
      style={{
        // Replace with your actual background image URL
        backgroundImage: ` url('/images/live-event-overview/image (5).png')`,
      }}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col justify-start items-start gap-10 lg:gap-14 relative z-10">
        
        {/* Section Header */}  
        <h2 className="text-slate-100 dark:text-white text-3xl sm:text-4xl lg:text-4xl font-bold   leading-tight sm:leading-[1.2] max-w-3xl">
          Treat resilience as a plan, not a slogan
        </h2>

        {/* Resilience Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Event Resilience */}
          <div className="w-full p-6 sm:p-8 lg:p-10 bg-zinc-950/90 dark:bg-zinc-950/90 backdrop-blur-md rounded-2xl border border-gray-800 dark:border-slate-800 flex flex-col justify-start items-start gap-4 sm:gap-5 shadow-xl">
            <h3 className="text-slate-100 dark:text-white text-xl font-bold   leading-7">
              Event resilience
            </h3>
            <p className="text-slate-400 dark:text-slate-300 text-base sm:text-lg font-normal   leading-relaxed">
              Critical dependencies, fallback paths, monitoring, escalation, and recovery decisions should be reviewed for the event. Design depends on scope.
            </p>
          </div>

          {/* Card 2: Assured Event */}
          <div className="w-full p-6 sm:p-8 lg:p-10 bg-zinc-950/90 dark:bg-zinc-950/90 backdrop-blur-md rounded-2xl border border-blue-500 flex flex-col justify-start items-start gap-4 sm:gap-5 shadow-xl">
            <h3 className="text-slate-100 dark:text-white text-xl font-bold   leading-7">
              Assured Event
            </h3>
            <p className="text-slate-400 dark:text-slate-300 text-base sm:text-lg font-normal   leading-relaxed">
              The highest-assurance planning tier. Scope, staffing, redundancy, and support coverage are confirmed for the specific event.
            </p>
          </div>

        </div>

        {/* CTA Button */}
        <div>
          <button
            type="button"
            className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-white text-base font-bold   leading-6 hover:opacity-90 transition-opacity"
          >
            Talk to an expert
          </button>
        </div>

      </div>
    </section>
  );
}