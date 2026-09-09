import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

export function ScheduleTimezoneSection() {
  return (
    <section className="relative w-full px-6 sm:px-12 lg:px-28 py-20 lg:py-24 bg-white text-slate-900 overflow-hidden border-b border-gray-200">
      {/* Background Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 " />
      </div>
      <div className="size-96 -left-35 -top-22 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 max-w-3xl text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold font-['Space_Grotesk'] text-zinc-950 leading-tight">
            Schedule, Sessions &amp; Time Zones
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
            Set session timelines, track limits, and speaker slots. Observers receive customized agenda panels synced directly to local system timezones.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Preview Card */}
          <div className="lg:col-span-6 p-7 bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-5 shadow-sm">
            <h3 className="text-zinc-950 text-lg font-bold font-['Space_Grotesk']">
              Live Schedule Preview
            </h3>
            
            <div className="w-full flex flex-col gap-3">
              {/* Item 1 */}
              <div className="w-full p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex items-center justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-blue-500 text-xs font-bold font-['IBM_Plex_Mono']">
                    09:00 AM PST — KEYNOTE
                  </span>
                  <span className="text-zinc-950 text-sm font-bold font-['Space_Grotesk']">
                    The Next Decade of Cloud Compute
                  </span>
                </div>
                <div className="px-2 py-1 bg-teal-500/10 rounded-sm shrink-0">
                  <span className="text-teal-500 text-[10px] font-bold font-['Space_Grotesk']">
                    MAIN STAGE
                  </span>
                </div>
              </div>

              {/* Item 2 */}
              <div className="w-full p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex items-center justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-blue-500 text-xs font-bold font-['IBM_Plex_Mono']">
                    10:15 AM PST — BREAKOUT TRACK A
                  </span>
                  <span className="text-zinc-950 text-sm font-bold font-['Space_Grotesk']">
                    Building Zero-Trust Stream Pipelines
                  </span>
                </div>
                <div className="px-2 py-1 bg-blue-500/10 rounded-sm shrink-0">
                  <span className="text-blue-500 text-[10px] font-bold font-['Space_Grotesk']">
                    DEV TRACK
                  </span>
                </div>
              </div>

              {/* Item 3 */}
              <div className="w-full p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex items-center justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-blue-500 text-xs font-bold font-['IBM_Plex_Mono']">
                    11:30 AM PST — Q&amp;A DISCUSSION
                  </span>
                  <span className="text-zinc-950 text-sm font-bold font-['Space_Grotesk']">
                    Interactive Open Panel with Founders
                  </span>
                </div>
                <div className="px-2 py-1 bg-teal-500/10 rounded-sm shrink-0">
                  <span className="text-teal-500 text-[10px] font-bold font-['Space_Grotesk']">
                    LIVE PANEL
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Description */}
          <div className="lg:col-span-6 flex flex-col justify-start items-start gap-6">
            <h3 className="text-zinc-950 text-2xl font-bold font-['Space_Grotesk']">
              No more manual UTC conversion charts
            </h3>
            <p className="text-slate-600 text-base font-normal font-['Space_Grotesk'] leading-7">
              Our dynamic scheduler recalculates broadcast offsets for all registered attendees. When scheduling updates change, player cards push fresh session parameters immediately to prevent missing a single keynote moment.
            </p>
            <Link
              href="/live-events-plan-a-live-event"
              className="px-6 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-[10px] text-slate-900 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity"
            >
              Try scheduling engine
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
