'use client';

import React from 'react';
import Link from 'next/link';

export default function LiveEventsHero() {
  const readinessItems = [
    { label: 'Contribution source', status: 'Ready', variant: 'ready' },
    { label: 'Production configuration', status: 'Ready', variant: 'ready' },
    { label: 'Audience access controls', status: 'Needs review', variant: 'warning' },
    { label: 'Captions & Language pathways', status: 'Ready', variant: 'ready' },
    { label: 'Network resilience backup', status: 'Conditional', variant: 'warning' },
    { label: 'Recording & Replay timing', status: 'Not configured', variant: 'neutral' },
    { label: 'Dedicated support owner', status: 'Ready', variant: 'ready' },
  ];

  const getStatusBadge = (variant: string, status: string) => {
    switch (variant) {
      case 'ready':
        return (
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
            <span className="text-teal-400 text-xs font-bold  ">
              {status}
            </span>
          </div>
        );
      case 'warning':
        return (
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-orange-300 rounded-full" />
            <span className="text-orange-300 text-xs font-bold  ">
              {status}
            </span>
          </div>
        );
      case 'neutral':
      default:
        return (
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-slate-500 rounded-full" />
            <span className="text-slate-500 text-xs font-bold  ">
              {status}
            </span>
          </div>
        );
    }
  };

  return (
    <section 
      className="relative w-full bg-slate-950 dark:bg-slate-900 text-white dark:text-white py-12 lg:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200 bg-cover bg-center bg-no-repeat"
      style={{
        // Replace '/path-to-your-bg-image.jpg' with your actual image path
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url('/images/live-event-overview/image.png')`,
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 relative z-10">
        
        {/* Left Content Area */}
        <div className="w-full lg:max-w-[708px] flex flex-col justify-start items-start gap-6 sm:gap-8">
          
          {/* Category Tag */}
          <div className="px-3 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] outline-blue-500 inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <span className="text-blue-500 text-xs font-bold   tracking-wider uppercase">
              Live Events
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-slate-100 dark:text-white text-3xl sm:text-5xl lg:text-6xl font-semibold    leading-tight sm:leading-[1.15]">
            Plan the live event around the moment - not the other way around.
          </h1>

          {/* Description */}
          <p className="text-slate-300 dark:text-slate-300 text-base sm:text-lg font-normal   leading-relaxed">
            Choose the event type, model, audience, and support path that fits your broadcast. ZoikoStream keeps planning and delivery decisions visible before broadcast day.
          </p>

          {/* Call to Action Buttons */}
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link href="/plan-a-live-event">
            <button
              type="button"
              className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-[10px] text-zinc-950 text-base font-bold   hover:opacity-90 transition-opacity flex justify-center items-center"
            >
              Plan a live event
            </button></Link>
            <Link href="/talk-to-an-expert">
            <button
              type="button"
              className="px-7 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-500 hover:outline-gray-400 bg-slate-900/40 backdrop-blur-sm text-slate-100 dark:text-white text-base font-medium   transition-colors flex justify-center items-center"
            >
              Talk to an expert
            </button></Link>
          </div>
        </div>

        {/* Right Readiness Card */}
        <div className="w-full lg:w-[480px] p-6 sm:p-7 bg-zinc-900/95 dark:bg-zinc-900/95 backdrop-blur-md rounded-[20px] shadow-2xl border border-gray-800 dark:border-slate-800 flex flex-col gap-5 shrink-0">
          
          {/* Card Header */}
          <div className="w-full flex justify-between items-center">
            <h2 className="text-slate-100 dark:text-white text-base font-bold  ">
              Event Readiness
            </h2>
            <span className="text-orange-300 text-xs font-medium   uppercase tracking-wide">
              Illustrative example
            </span>
          </div>

          <hr className="w-full border-t border-gray-800 dark:border-slate-800" />

          {/* Readiness Checklist */}
          <div className="w-full flex flex-col gap-3.5">
            {readinessItems.map((item, index) => (
              <div key={index} className="w-full flex justify-between items-center gap-4">
                <span className="text-slate-400 dark:text-slate-300 text-sm font-normal   leading-6">
                  {item.label}
                </span>
                {getStatusBadge(item.variant, item.status)}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}