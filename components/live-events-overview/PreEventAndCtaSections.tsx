'use client';

import React from 'react';

export default function PreEventAndCtaSections() {
  const reviewedItems = [
    {
      title: 'Operational readiness',
      icon: (
        <svg className="w-6 h-6 stroke-teal-400" fill="none" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Controlled audience',
      icon: (
        <svg className="w-6 h-6 stroke-teal-400" fill="none" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: 'Accessibility planning',
      icon: (
        <svg className="w-6 h-6 stroke-teal-400" fill="none" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: 'Event resilience',
      icon: (
        <svg className="w-6 h-6 stroke-teal-400" fill="none" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Recording governance',
      icon: (
        <svg className="w-6 h-6 stroke-teal-400" fill="none" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Support ownership',
      icon: (
        <svg className="w-6 h-6 stroke-teal-400" fill="none" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col transition-colors duration-200">
      
      {/* Top Section: What's reviewed before every event */}
      <section className="w-full bg-slate-100 dark:bg-slate-900 text-zinc-900 dark:text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto flex flex-col justify-start items-start gap-8 sm:gap-10">
          
          <h2 className="text-zinc-900 dark:text-white text-3xl sm:text-4xl lg:text-4xl font-bold   leading-tight sm:leading-[1.2]">
            What&apos;s reviewed before every event
          </h2>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 pt-4">
            {reviewedItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-3 p-4 rounded-xl bg-white dark:bg-zinc-900/60 border border-gray-200 dark:border-slate-800 shadow-sm transition-transform hover:-translate-y-1"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-teal-500/10 dark:bg-teal-400/10 border border-teal-400/30">
                  {item.icon}
                </div>
                <span className="text-zinc-900 dark:text-slate-200 text-sm font-bold   leading-snug">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom Section: Plan the Event CTA Hero */}
      <section className="w-full bg-zinc-950 dark:bg-zinc-950 text-slate-100 dark:text-white py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-gray-800 dark:border-slate-800">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-start items-start gap-8">
            <div className="flex flex-col justify-start items-start gap-4 sm:gap-6">
              <h2 className="text-slate-100 dark:text-white text-3xl sm:text-4xl lg:text-4xl font-bold   leading-tight sm:leading-[1.2]">
                Plan the event before the live moment becomes the deadline
              </h2>
              <p className="text-slate-400 dark:text-slate-300 text-base sm:text-lg font-normal   leading-relaxed">
                Tell us what you are preparing, what the audience needs, and where you want help. We will route you to the right Live Events path without treating every event as the same production.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-zinc-950 text-base font-bold   leading-6 hover:opacity-90 transition-opacity"
              >
                Plan a live event
              </button>
              <button
                type="button"
                className="px-7 py-3.5 rounded-lg border border-gray-800 dark:border-slate-700 bg-zinc-900/50 hover:bg-zinc-900 text-slate-100 dark:text-white text-base font-bold   leading-6 transition-colors"
              >
                Talk to an expert
              </button>
            </div>

            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal   leading-relaxed">
              Scope, availability, accessibility support, resilience options, and commercial terms are confirmed for the event.
            </p>
          </div>

          {/* Right Column Image */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden border border-gray-800 dark:border-slate-800 shadow-2xl">
              <img
                src="/images/live-event-overview/image 1 (1).png"
                alt="Live Event Planning"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}