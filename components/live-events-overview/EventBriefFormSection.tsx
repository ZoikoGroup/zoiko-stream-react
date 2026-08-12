'use client';

import React from 'react';

export default function EventBriefFormSection() {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-900 text-zinc-900 dark:text-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="w-full max-w-6xl mx-auto flex flex-col justify-start items-start gap-10 lg:gap-14">
        
        {/* Section Header */}
        <div className="w-full flex flex-col justify-start items-start gap-3 sm:gap-4 max-w-3xl">
          <h2 className="text-zinc-900 dark:text-white text-3xl sm:text-4xl lg:text-4xl font-bold   leading-tight sm:leading-[1.2]">
            Start with the event brief
          </h2>
          <p className="text-gray-600 dark:text-slate-400 text-base sm:text-lg font-normal   leading-relaxed">
            Tell us what you are preparing. We will route you to the right Live Events path.
          </p>
        </div>

        {/* Form Container */}
        <div className="w-full p-6 sm:p-8 lg:p-10 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-slate-800 shadow-sm flex flex-col gap-8">
          
          <h3 className="text-zinc-900 dark:text-white text-lg font-bold  ">
            Event Details Form (Step 1 of 2)
          </h3>

          <form onSubmit={(e) => e.preventDefault()} className="w-full flex flex-col gap-8">
            {/* Form Fields Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Left Column */}
              <div className="flex flex-col gap-5">
                {/* Event Type */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="eventType" className="text-zinc-900 dark:text-slate-200 text-sm font-bold  ">
                    Event type *
                  </label>
                  <div className="relative w-full">
                    <select
                      id="eventType"
                      defaultValue=""
                      required
                      className="w-full appearance-none px-4 py-3 bg-white dark:bg-zinc-950 text-gray-500 dark:text-slate-300 text-sm font-normal   leading-6 rounded-lg border border-gray-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-400 cursor-pointer pr-10"
                    >
                      <option value="" disabled>Select one</option>
                      <option value="conference">Conference</option>
                      <option value="webinar">Webinar</option>
                      <option value="town-hall">Town Hall</option>
                      <option value="workshop">Workshop</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500 dark:text-slate-400">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Planned date/time window */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="dateWindow" className="text-zinc-900 dark:text-slate-200 text-sm font-bold  ">
                    Planned date/time window *
                  </label>
                  <input
                    type="text"
                    id="dateWindow"
                    placeholder="e.g., Q3 2026"
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-slate-100 placeholder-slate-400 text-sm font-normal   leading-6 rounded-lg border border-gray-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-5">
                {/* Expected audience pattern */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="audiencePattern" className="text-zinc-900 dark:text-slate-200 text-sm font-bold  ">
                    Expected audience pattern *
                  </label>
                  <div className="relative w-full">
                    <select
                      id="audiencePattern"
                      defaultValue=""
                      required
                      className="w-full appearance-none px-4 py-3 bg-white dark:bg-zinc-950 text-gray-500 dark:text-slate-300 text-sm font-normal   leading-6 rounded-lg border border-gray-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-400 cursor-pointer pr-10"
                    >
                      <option value="" disabled>Public / Private / Restricted</option>
                      <option value="public">Public</option>
                      <option value="private">Private</option>
                      <option value="restricted">Restricted</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500 dark:text-slate-400">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Managed vs Build preference */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="pathPreference" className="text-zinc-900 dark:text-slate-200 text-sm font-bold  ">
                    Managed vs Build preference
                  </label>
                  <div className="relative w-full">
                    <select
                      id="pathPreference"
                      defaultValue=""
                      className="w-full appearance-none px-4 py-3 bg-white dark:bg-zinc-950 text-gray-500 dark:text-slate-300 text-sm font-normal   leading-6 rounded-lg border border-gray-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-400 cursor-pointer pr-10"
                    >
                      <option value="" disabled>Select path preference</option>
                      <option value="fully-managed">Fully Managed Path</option>
                      <option value="self-service">Self-Service Build</option>
                      <option value="hybrid">Hybrid Approach</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500 dark:text-slate-400">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Actions Row */}
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-2">
              <button
                type="submit"
                className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-zinc-950 font-bold text-base   leading-6 hover:opacity-90 transition-opacity shrink-0"
              >
                Plan a live event
              </button>
              <p className="max-w-xl text-slate-500 dark:text-slate-400 text-sm font-normal   leading-6">
                We use this information to route your event to the right planning path. Do not include credentials or sensitive attendee data.
              </p>
            </div>
          </form>

        </div>

      </div>
    </section>
  );
}