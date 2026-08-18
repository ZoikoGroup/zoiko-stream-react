'use client';

import React from 'react';
import Image from 'next/image';
import { Check, AlertTriangle } from 'lucide-react';

export default function A11yPlanReuse() {
  const carriesForward = [
    'Core Accessibility Requirements',
    'Assigned Methods & Pathways',
    'Defined Operational Owners',
    'Standby Alternative Paths'
  ];

  const requiresRevalidation = [
    'Fresh Verification Evidence & Logs',
    'Live Provider & Staff Availability',
    'Active Stage Content & Slides Contrast',
    'Credential & Gateway Access Checks'
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white dark:bg-zinc-955 text-zinc-900 dark:text-white border-b border-gray-200 dark:border-zinc-900 transition-colors duration-250">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="text-zinc-955 dark:text-white text-3xl sm:text-4xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Reuse the plan. Revalidate the evidence.
          </h2>
          <p className="text-gray-605 dark:text-zinc-400 text-base sm:text-lg font-normal font-spaceGrotesk leading-relaxed">
            Repeat-event templates preserve accessibility structure while requiring current verification for the new event.
          </p>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row justify-start items-stretch gap-10">
          
          {/* Left Column: Template Reuse Model Card */}
          <div className="flex-1 bg-slate-50 dark:bg-zinc-900 rounded-2xl border border-gray-250/60 dark:border-zinc-800 flex flex-col justify-start items-start overflow-hidden hover:shadow-md transition-all duration-300">
            <div className="relative h-64 w-full bg-slate-200 dark:bg-zinc-950">
              <Image 
                src="/images/accessibility-inclusion/Rectangle (77).png" 
                alt="Template Reuse Model Workflow Diagram"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="p-6 sm:p-8 flex flex-col gap-4 justify-start items-start text-left">
              <h3 className="text-zinc-955 dark:text-white text-base sm:text-lg font-bold font-spaceGrotesk">
                Template Reuse Model
              </h3>
              <p className="text-gray-605 dark:text-zinc-400 text-xs sm:text-sm font-normal font-spaceGrotesk leading-relaxed">
                Standard corporate and recurring webcast setups can apply existing accessibility plans instantly. Structure remains intact while verification counters reset to zero.
              </p>
            </div>
          </div>

          {/* Right Column: Two lists (carries forward, requires fresh revalidation) */}
          <div className="flex-1 flex flex-col gap-6 justify-between w-full">
            
            {/* List 1: Carries Forward */}
            <div className="p-6 bg-slate-50 dark:bg-zinc-900 rounded-xl border border-gray-250/60 dark:border-zinc-800 flex flex-col justify-start items-start gap-4">
              <div className="flex items-center gap-2">
                <div className="size-2 bg-blue-500 rounded-full" />
                <h4 className="text-blue-900 dark:text-blue-400 text-xs sm:text-sm font-bold font-spaceGrotesk uppercase tracking-wide">
                  CARRIES FORWARD FROM TEMPLATE
                </h4>
              </div>

              <div className="flex flex-col gap-3 w-full text-zinc-955 dark:text-slate-105 text-xs sm:text-sm font-spaceGrotesk">
                {carriesForward.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="size-4 shrink-0 bg-blue-500/10 rounded-full flex justify-center items-center">
                      <Check className="size-2.5 text-blue-500" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* List 2: Requires Fresh Revalidation */}
            <div className="p-6 bg-slate-50 dark:bg-zinc-900 rounded-xl border border-gray-250/60 dark:border-zinc-800 flex flex-col justify-start items-start gap-4">
              <div className="flex items-center gap-2">
                <div className="size-2 bg-amber-500 rounded-full" />
                <h4 className="text-amber-700 dark:text-amber-450 text-xs sm:text-sm font-bold font-spaceGrotesk uppercase tracking-wide">
                  REQUIRES FRESH REVALIDATION
                </h4>
              </div>

              <div className="flex flex-col gap-3 w-full text-zinc-955 dark:text-slate-105 text-xs sm:text-sm font-spaceGrotesk">
                {requiresRevalidation.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="size-4 shrink-0 bg-amber-500/10 rounded-full flex justify-center items-center">
                      <AlertTriangle className="size-2.5 text-amber-600 dark:text-amber-500" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
