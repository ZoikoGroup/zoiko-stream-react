'use client';

import React from 'react';

interface ScheduleSlot {
  time: string;
  trackA: string;
  trackB: string;
  trackC: string;
}

export default function MultiTrackSection() {
  const scheduleData: ScheduleSlot[] = [
    {
      time: '09:00 - 10:00',
      trackA: 'Keynote Address',
      trackB: 'Scaling Operations',
      trackC: 'Interactive Onboarding',
    },
    {
      time: '10:15 - 11:15',
      trackA: 'Feature Deep-Dive',
      trackB: 'Security Best Practices',
      trackC: 'Developer Sandbox Run',
    },
    {
      time: '11:30 - 12:30',
      trackA: 'Fireside Panel',
      trackB: 'Global Compliance',
      trackC: 'API Integration Lab',
    },
  ];

  return (
    <section className="w-full bg-slate-100 dark:bg-slate-900 text-zinc-900 dark:text-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="w-full max-w-6xl mx-auto flex flex-col justify-start items-start gap-10 lg:gap-14">
        
        {/* Section Header */}
        <div className="w-full flex flex-col justify-start items-start gap-3 sm:gap-4 max-w-5xl">
          <h2 className="text-zinc-900 dark:text-white text-3xl sm:text-4xl lg:text-4xl font-bold   leading-tight sm:leading-[1.2]">
            When one event contains many rooms, sessions, or tracks
          </h2> 
          <p className="text-gray-600 dark:text-slate-400 text-base sm:text-lg font-normal   leading-relaxed">
            Plan the structure before the audience arrives. Multi-track is a separate planning model for concurrent or segmented programming.
          </p>
        </div>

        {/* Schedule Table Container */}
        <div className="w-full bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm overflow-x-auto">
          <div className="min-w-[680px] flex flex-col gap-4">
            
            {/* Table Header */}
            <div className="flex items-center gap-6 pb-2">
              <div className="w-32 shrink-0">
                <span className="text-slate-400 dark:text-slate-500 text-xs font-bold   tracking-wider uppercase">
                  TIME SLOT
                </span>
              </div>
              <div className="flex-1">
                <span className="text-blue-500 dark:text-blue-400 text-xs font-bold   tracking-wider uppercase">
                  TRACK A (MAIN)
                </span>
              </div>
              <div className="flex-1">
                <span className="text-teal-500 dark:text-teal-400 text-xs font-bold   tracking-wider uppercase">
                  TRACK B (SESSION)
                </span>
              </div>
              <div className="flex-1">
                <span className="text-violet-500 dark:text-violet-400 text-xs font-bold   tracking-wider uppercase">
                  TRACK C (WORKSHOP)
                </span>
              </div>
            </div>

            <hr className="w-full border-t border-gray-200 dark:border-slate-800" />

            {/* Table Rows */}
            {scheduleData.map((slot, index) => (
              <div key={index} className="flex items-center gap-6 py-1">
                <div className="w-32 shrink-0">
                  <span className="text-zinc-900 dark:text-white text-sm font-bold  ">
                    {slot.time}
                  </span>
                </div>
                <div className="flex-1 p-3 bg-slate-100 dark:bg-zinc-800 rounded-md">
                  <span className="text-zinc-900 dark:text-slate-200 text-sm font-normal   leading-6">
                    {slot.trackA}
                  </span>
                </div>
                <div className="flex-1 p-3 bg-slate-100 dark:bg-zinc-800 rounded-md">
                  <span className="text-zinc-900 dark:text-slate-200 text-sm font-normal   leading-6">
                    {slot.trackB}
                  </span>
                </div>
                <div className="flex-1 p-3 bg-slate-100 dark:bg-zinc-800 rounded-md">
                  <span className="text-zinc-900 dark:text-slate-200 text-sm font-normal   leading-6">
                    {slot.trackC}
                  </span>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}