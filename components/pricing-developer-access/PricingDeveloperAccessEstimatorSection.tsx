'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function PricingDeveloperAccessEstimatorSection() {
  const [minutes, setMinutes] = useState<number>(10000);
  const [concurrency, setConcurrency] = useState<number>(250);
  const [storage, setStorage] = useState<number>(500);

  // Dynamic cost calculation based on rates
  const minutesCost = Math.round(minutes * 0.006);
  const concurrencyCost = Math.round(concurrency * 0.152);
  const storageCost = Math.round(storage * 0.03);
  const totalCost = minutesCost + concurrencyCost + storageCost;

  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-slate-100 flex flex-col justify-start items-start gap-10 border-b border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-blue-500 rounded-[3px]" />
          <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
            NON-INVOICE ESTIMATE
          </span>
        </div>
        <h2 className="text-zinc-900 text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] leading-tight">
          Estimate your usage — not a quote or invoice.
        </h2>
        <p className="text-gray-500 text-base font-normal font-['Inter'] leading-relaxed max-w-3xl">
          Adjust the sliders to see an illustrative estimate built from the dimensions above. This never claims to match your actual bill.
        </p>
      </div>

      {/* Main Estimator Box */}
      <div className="w-full bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-xs">
        {/* Left Sliders Column (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          {/* Slider 1: Minutes */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center text-sm font-['Inter']">
              <span className="text-zinc-900 font-semibold">
                Streaming minutes / month
              </span>
              <span className="text-blue-500 font-semibold font-['IBM_Plex_Mono']">
                {minutes.toLocaleString()}
              </span>
            </div>
           
            <span className="text-gray-500 text-xs font-normal font-['Inter']">
              Combined live and on-demand delivery minutes
            </span>
          </div>

          {/* Slider 2: Concurrency */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center text-sm font-['Inter']">
              <span className="text-zinc-900 font-semibold">
                Peak concurrent viewers
              </span>
              <span className="text-blue-500 font-semibold font-['IBM_Plex_Mono']">
                {concurrency.toLocaleString()}
              </span>
            </div>
            
            <span className="text-gray-500 text-xs font-normal font-['Inter']">
              Highest simultaneous audience during live delivery
            </span>
          </div>

          {/* Slider 3: Storage */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center text-sm font-['Inter']">
              <span className="text-zinc-900 font-semibold">
                Storage (GB-month)
              </span>
              <span className="text-blue-500 font-semibold font-['IBM_Plex_Mono']">
                {storage.toLocaleString()}
              </span>
            </div>
            
            <span className="text-gray-500 text-xs font-normal font-['Inter']">
              Recordings and on-demand assets retained
            </span>
          </div>
        </div>

        {/* Right Output Box (5 cols) */}
        <div className="lg:col-span-5 w-full bg-slate-100 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 p-6 flex flex-col gap-6">
          <span className="text-gray-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
            Illustrative monthly estimate
          </span>

          <div className="flex items-baseline gap-2">
            <span className="text-zinc-900 text-4xl sm:text-5xl font-bold font-['Space_Grotesk']">
              ${totalCost}
            </span>
            <span className="text-gray-500 text-sm font-normal font-['Inter']">
              / month
            </span>
          </div>

          {/* Breakdown Rows */}
          <div className="pt-4 border-t border-gray-200 flex flex-col gap-2.5 text-xs font-['Inter']">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Streaming minutes</span>
              <span className="text-gray-700 font-semibold">${minutesCost}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Peak concurrency</span>
              <span className="text-gray-700 font-semibold">${concurrencyCost}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Storage</span>
              <span className="text-gray-700 font-semibold">${storageCost}</span>
            </div>
          </div>

          {/* Legal Notice */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-gray-500 text-xs font-normal font-['IBM_Plex_Mono'] leading-relaxed">
              Illustrative rates only — not a public price, quote, or invoice. Verify current rates before production use. Source version v1 · reviewed Aug 2026.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Button below */}
      <div className="pt-2">
        <Link
          href="/talk-to-an-expert"
          className="px-6 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-800 text-zinc-900 text-base font-semibold font-['Inter'] hover:bg-slate-200 transition-colors inline-block text-center"
        >
          Discuss a custom estimate
        </Link>
      </div>
    </section>
  );
}
