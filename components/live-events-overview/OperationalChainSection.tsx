'use client';

import React from 'react';

export default function OperationalChainSection() {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-900 text-zinc-900 dark:text-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="w-full max-w-6xl mx-auto flex flex-col justify-start items-start gap-10 lg:gap-14">
        
        {/* Section Header */}
        <h2 className="text-zinc-900 dark:text-white text-3xl sm:text-4xl lg:text-4xl font-bold   leading-tight max-w-4xl">
          From source to screen - plan the operational chain
        </h2>

        {/* Content Container */}
        <div className="w-full flex flex-col lg:flex-row justify-start items-stretch gap-8 lg:gap-10">
          
          {/* Left Column: Feature Cards */}
          <div className="flex-1 flex flex-col justify-between gap-6">
            
            {/* Remote Contribution Card */}
            <div className="p-6 sm:p-8 bg-white dark:bg-zinc-900/90 rounded-xl shadow-sm border border-teal-400 dark:border-teal-500/50 flex flex-col gap-3">
              <h3 className="text-zinc-900 dark:text-white text-xl font-bold   leading-7">
                Remote contribution
              </h3>
              <p className="text-gray-600 dark:text-slate-400 text-sm font-normal   leading-relaxed">
                Contributors may need a planned path into the event from another location. Source and network requirements depend on event configuration.
              </p>
            </div>

            {/* Production, Switching & Graphics Card */}
            <div className="p-6 sm:p-8 bg-white dark:bg-zinc-900/90 rounded-xl shadow-sm border border-teal-400 dark:border-teal-500/50 flex flex-col gap-3">
              <h3 className="text-zinc-900 dark:text-white text-xl font-bold   leading-7">
                Production, switching &amp; graphics
              </h3>
              <p className="text-gray-600 dark:text-slate-400 text-sm font-normal   leading-relaxed">
                Cameras, switching, graphics, and production responsibilities must be defined before the event.
              </p>
            </div>

          </div>

          {/* Right Column: Pipeline Diagram & Monitoring */}
          <div className="w-full lg:w-[555px] p-6 sm:p-8 lg:p-10 bg-zinc-950 dark:bg-zinc-950 rounded-2xl flex flex-col justify-center items-start gap-6 shadow-xl border border-gray-800 shrink-0">
            
            <span className="text-slate-400 text-sm font-normal   leading-6">
              Event Pipeline Topology
            </span>

            {/* Pipeline Flow Badges */}
            <div className="w-full flex items-center gap-2 sm:gap-4 overflow-x-auto pb-2 sm:pb-0">
              <div className="p-3 sm:p-4 bg-zinc-900 rounded-lg shrink-0">
                <span className="text-teal-400 text-xs font-bold   uppercase tracking-wider">
                  SOURCES
                </span>
              </div>
              <span className="text-slate-500 text-sm font-normal  ">
                →
              </span>
              <div className="p-3 sm:p-4 bg-zinc-900 rounded-lg shrink-0">
                <span className="text-teal-400 text-xs font-bold   capitalize">
                  Production
                </span>
              </div>
              <span className="text-slate-500 text-sm font-normal  ">
                →
              </span>
              <div className="p-3 sm:p-4 bg-zinc-900 rounded-lg shrink-0">
                <span className="text-teal-400 text-xs font-bold   capitalize">
                  Audience
                </span>
              </div>
            </div>

            <span className="text-slate-500 text-xs font-normal  ">
              Monitored via Zoiko Stream Control Plane
            </span>

            {/* Monitoring & Control Info Box */}
            <div className="w-full pt-6 border-t border-gray-800 flex flex-col gap-3">
              <h4 className="text-slate-300 text-base font-bold   leading-6">
                Monitoring &amp; Control
              </h4>

              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-teal-400 rounded-sm mt-1.5 shrink-0" />
                <p className="text-slate-400 text-sm font-normal   leading-relaxed">
                  Real-time health checks across ingest, processing, and delivery
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-teal-400 rounded-sm mt-1.5 shrink-0" />
                <p className="text-slate-400 text-sm font-normal   leading-relaxed">
                  Automated alerts for latency, packet loss, and stream failures
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}