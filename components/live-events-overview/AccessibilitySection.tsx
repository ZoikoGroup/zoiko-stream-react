'use client';

import React from 'react';

export default function AccessibilitySection() {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-900 text-zinc-900 dark:text-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="w-full max-w-6xl mx-auto flex flex-col justify-start items-start gap-10 lg:gap-14">
        
        {/* Section Header */}
        <div className="w-full flex flex-col justify-start items-start gap-3 sm:gap-4 max-w-6xl">
          <h2 className="text-zinc-900 dark:text-white text-3xl sm:text-4xl lg:text-4xl font-bold   leading-tight sm:leading-[1.2]">
            Plan for people who will watch, listen, read, navigate, and participate differently
          </h2> 
          <p className="text-gray-600 dark:text-slate-400 text-base sm:text-lg font-normal   leading-relaxed">
            Accessible participation is a visible event-planning dimension, not a compliance afterthought.
          </p>
        </div>

        {/* Grid Container */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Captions & Languages */}
          <div className="w-full p-6 sm:p-8 lg:p-10 bg-white dark:bg-zinc-900 rounded-2xl shadow-md border border-teal-400 dark:border-teal-500/50 flex flex-col justify-start items-start gap-4 sm:gap-5 transition-colors">
            <h3 className="text-zinc-900 dark:text-white text-xl font-bold   leading-7">
              Captions and languages
            </h3>
            <p className="text-gray-600 dark:text-slate-400 text-sm sm:text-base font-normal   leading-relaxed">
              Determine your live captioning needs, translation requirements, and how multiple audio language tracks should be made available to your viewers globally.
            </p>
          </div>

          {/* Card 2: Accessibility & Inclusion */}
          <div className="w-full p-6 sm:p-8 lg:p-10 bg-white dark:bg-zinc-900 rounded-2xl shadow-md border border-teal-400 dark:border-teal-500/50 flex flex-col justify-start items-start gap-4 sm:gap-5 transition-colors">
            <h3 className="text-zinc-900 dark:text-white text-xl font-bold   leading-7">
              Accessibility &amp; inclusion
            </h3>
            <p className="text-gray-600 dark:text-slate-400 text-sm sm:text-base font-normal   leading-relaxed">
              Ensure full keyboard navigation compatibility, optimized screen-reader labeling, clean design contrast patterns, and helpful transcript options for all event formats.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}