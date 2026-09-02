'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, UploadCloud } from 'lucide-react';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

export default function ResourceContactSupportFormSection() {
  const [impactLevel, setImpactLevel] = useState<string>('Degraded');

  return (
    <section id="support-form" className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 border-b border-gray-200 flex flex-col items-center justify-start gap-14 bg-white overflow-hidden z-10">
      {/* Background Snippet */}
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
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4 max-w-4xl">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[60px]">
          Tell us about your issue
        </h2>
        <p className="text-gray-500 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
          We collect only the information needed to route and resolve your request.
        </p>
      </div>

      {/* Form Container Card */}
      <div className="relative z-10 w-full max-w-4xl p-6 sm:p-10 bg-slate-100 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start gap-8 shadow-sm">
        {/* Row 1: Category & Product Area */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-slate-900 text-base font-bold font-['Space_Grotesk'] leading-6">
              Issue category
            </label>
            <div className="relative w-full">
              <select className="w-full px-4 py-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 text-gray-700 text-sm font-normal font-['Space_Grotesk'] appearance-none focus:outline-none pr-10 cursor-pointer">
                <option>Developer & API Support</option>
                <option>Product & Account</option>
                <option>Live Events</option>
                <option>Billing & Admin</option>
                <option>Something else</option>
              </select>
              <ChevronDown className="size-4 text-gray-500 absolute right-3.5 top-3.5 pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-slate-900 text-base font-bold font-['Space_Grotesk'] leading-6">
              Product / workflow area
            </label>
            <div className="relative w-full">
              <select className="w-full px-4 py-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 text-gray-700 text-sm font-normal font-['Space_Grotesk'] appearance-none focus:outline-none pr-10 cursor-pointer">
                <option>Swift SDK / iOS Ingest</option>
                <option>Live Streaming API</option>
                <option>Video on Demand</option>
                <option>Playback & Player</option>
                <option>Analytics & Metrics</option>
              </select>
              <ChevronDown className="size-4 text-gray-500 absolute right-3.5 top-3.5 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Row 2: Subject */}
        <div className="w-full flex flex-col gap-2">
          <label className="text-slate-900 text-base font-bold font-['Space_Grotesk'] leading-6">
            Short subject line
          </label>
          <input
            type="text"
            defaultValue="e.g. Ingest stream failure with Swift SDK v2.5.3"
            className="w-full px-4 py-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 text-slate-900 text-sm font-normal font-['Space_Grotesk'] focus:outline-none"
          />
        </div>

        {/* Row 3: Description */}
        <div className="w-full flex flex-col gap-2">
          <label className="text-slate-900 text-base font-bold font-['Space_Grotesk'] leading-6">
            Description
          </label>
          <textarea
            rows={4}
            defaultValue="Attempting to initialize the Swift SDK (v2.5.3) on iOS 17 yields a TLS handshake failure during signaling negotiation on TCP Port 443..."
            className="w-full p-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 text-slate-900 text-sm font-normal font-['Space_Grotesk'] focus:outline-none resize-none"
          />
        </div>

        {/* Row 4: Impact Level */}
        <div className="w-full flex flex-col gap-3">
          <label className="text-slate-900 text-base font-bold font-['Space_Grotesk'] leading-6">
            Impact level
          </label>
          <div className="flex flex-wrap items-center gap-6">
            {['Cannot complete task', 'Degraded', 'Question'].map((lvl) => (
              <label
                key={lvl}
                onClick={() => setImpactLevel(lvl)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <div
                  className={`size-4 rounded-full border-2 flex items-center justify-center ${
                    impactLevel === lvl
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300 bg-transparent'
                  }`}
                >
                  {impactLevel === lvl && <div className="size-1.5 bg-white rounded-full" />}
                </div>
                <span className="text-slate-900 text-sm font-normal font-['Space_Grotesk']">
                  {lvl}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Row 5: Affected URL & Environment */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-slate-900 text-base font-bold font-['Space_Grotesk'] leading-6">
              Affected URL or object ID (optional)
            </label>
            <input
              type="text"
              placeholder="stream_id or endpoint URL"
              defaultValue="live_zk_9821x"
              className="w-full px-4 py-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 text-slate-900 text-sm font-normal font-['Space_Grotesk'] focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-slate-900 text-base font-bold font-['Space_Grotesk'] leading-6">
              Environment
            </label>
            <div className="relative w-full">
              <select className="w-full px-4 py-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 text-slate-900 text-sm font-normal font-['Space_Grotesk'] appearance-none focus:outline-none pr-10 cursor-pointer">
                <option>iOS 17 Client App</option>
                <option>Browser</option>
                <option>Node.js Server</option>
                <option>Python Runtime</option>
              </select>
              <ChevronDown className="size-4 text-gray-500 absolute right-3.5 top-3.5 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Row 6: Attachments */}
        <div className="w-full flex flex-col gap-2">
          <label className="text-slate-900 text-base font-bold font-['Space_Grotesk'] leading-6">
            Attachments
          </label>
          <div className="w-full p-6 bg-white rounded-lg outline outline-[1.50px] outline-offset-[-1.50px] outline-blue-500 flex flex-col justify-center items-center gap-2 cursor-pointer hover:bg-slate-50 transition-colors">
            <UploadCloud className="size-6 text-blue-500" />
            <span className="text-slate-900 text-sm font-bold font-['Space_Grotesk']">
              Drag and drop files here or click to upload
            </span>
            <span className="text-gray-500 text-xs font-normal font-['Space_Grotesk']">
              Supports log files, screenshots, diagnostics up to 10MB
            </span>
          </div>
        </div>

        {/* Row 7: Email */}
        <div className="w-full flex flex-col gap-2">
          <label className="text-slate-900 text-base font-bold font-['Space_Grotesk'] leading-6">
            Contact email
          </label>
          <input
            type="email"
            defaultValue="engineering-lead@organization.com"
            className="w-full px-4 py-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 text-slate-900 text-sm font-normal font-['Space_Grotesk'] focus:outline-none"
          />
        </div>

        <div className="w-full h-0 border-b border-gray-200" />

        {/* Form Footer */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <span className="text-gray-500 text-xs font-normal font-['Space_Grotesk'] leading-6">
            Information is used for operational support processing only.
          </span>

          <div className="flex items-center gap-1.5">
            <div className="size-2 bg-emerald-500 rounded-full" />
            <span className="text-emerald-500 text-xs font-bold font-['Space_Grotesk']">
              Draft auto-saved
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
