'use client';

import React, { useState } from 'react';
import {
  FileImage,
  Video,
  FileText,
  Activity,
  Terminal,
  Link2,
  Paperclip,
} from 'lucide-react';

interface AttachmentType {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ATTACHMENT_TYPES: AttachmentType[] = [
  {
    id: 'screenshot',
    title: 'Screenshot',
    subtitle: 'Upload image file (PNG, JPG)',
    icon: FileImage,
  },
  {
    id: 'screen-recording',
    title: 'Screen Recording',
    subtitle: 'Upload video capture (MP4)',
    icon: Video,
  },
  {
    id: 'log-excerpt',
    title: 'Log Excerpt',
    subtitle: 'Paste log file / console trace',
    icon: FileText,
  },
  {
    id: 'har-network-trace',
    title: 'HAR / Network Trace',
    subtitle: 'Upload sanitized HAR capture',
    icon: Activity,
  },
  {
    id: 'console-output',
    title: 'Console Output',
    subtitle: 'Paste console warnings',
    icon: Terminal,
  },
  {
    id: 'public-url',
    title: 'Public URL',
    subtitle: 'Add public reference link',
    icon: Link2,
  },
];

export default function StepsToReproduceSafeEvidenceSection() {
  const [activeWorkaround, setActiveWorkaround] = useState('Page refresh');

  return (
    <section className="relative w-full bg-[#fafbfc] py-16 lg:py-24 overflow-hidden">
      {/* Topographic Contour Background SVG Texture */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-40 overflow-hidden"
        aria-hidden="true"
      >
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
        >
          <g stroke="#0f172a" strokeOpacity="0.06" strokeWidth="1">
            <path d="M-80 80 C 240 0, 520 200, 880 90 S 1280 -10, 1520 100" />
            <path d="M-80 150 C 270 60, 560 260, 920 150 S 1320 50, 1520 160" />
            <path d="M-80 220 C 300 120, 600 320, 960 210 S 1360 110, 1520 220" />
            <path d="M-80 320 C 320 240, 640 400, 1000 300 S 1400 200, 1520 310" />
            <path d="M-80 500 C 230 580, 500 440, 830 540 S 1240 620, 1520 500" />
            <path d="M-80 570 C 260 650, 540 500, 870 610 S 1280 680, 1520 570" />
            <path d="M-80 640 C 290 720, 580 560, 910 680 S 1320 740, 1520 640" />
            <path d="M-80 720 C 310 800, 620 630, 950 750 S 1350 810, 1520 710" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 lg:mb-12">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-[40px] text-slate-900 tracking-tight mb-2.5">
            Steps to reproduce and safe evidence.
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-inter">
            Structured reproduction steps help us understand the issue. Only upload evidence that does not contain secrets or sensitive data.
          </p>
        </div>

        {/* 1. Steps to reproduce */}
        <div className="mb-6">
          <div className="flex items-center mb-2.5">
            <label className="text-slate-800 text-xs sm:text-[13px] font-semibold font-inter">
              Steps to reproduce
            </label>
            <span className="text-slate-400 text-xs font-normal ml-2 font-inter">
              List step-by-step actions
            </span>
          </div>

          <div className="space-y-2.5">
            <div className="w-full bg-white border border-slate-200/90 rounded-lg px-4 py-3 flex items-center gap-3 shadow-2xs">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500 shrink-0 shadow-[0_0_6px_#0284c7]" />
              <span className="text-slate-700 text-xs sm:text-sm font-inter">
                Open standard live broadcast stream link in Chrome window
              </span>
            </div>

            <div className="w-full bg-white border border-slate-200/90 rounded-lg px-4 py-3 flex items-center gap-3 shadow-2xs">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500 shrink-0 shadow-[0_0_6px_#0284c7]" />
              <span className="text-slate-700 text-xs sm:text-sm font-inter">
                Let stream run continuously for at least 5 minutes
              </span>
            </div>
          </div>

          <button
            type="button"
            className="text-sky-600 hover:text-sky-700 text-xs font-semibold mt-2.5 inline-flex items-center gap-1 cursor-pointer font-inter"
          >
            + Add reproduction step
          </button>
        </div>

        {/* 2. Expected result */}
        <div className="mb-6">
          <label className="block text-slate-800 text-xs sm:text-[13px] font-semibold mb-2 font-inter">
            Expected result
          </label>
          <input
            type="text"
            defaultValue="Stream plays continuously in 1080p without visual drops"
            className="w-full bg-white border border-slate-200/90 rounded-lg px-4 py-3 text-slate-700 text-sm focus:outline-none focus:border-cyan-500 transition-colors shadow-2xs"
          />
        </div>

        {/* 3. Actual result */}
        <div className="mb-6">
          <label className="block text-slate-800 text-xs sm:text-[13px] font-semibold mb-2 font-inter">
            Actual result
          </label>
          <input
            type="text"
            defaultValue='Video freeze occurs while master player state registers "playing"'
            className="w-full bg-white border border-slate-200/90 rounded-lg px-4 py-3 text-slate-700 text-sm focus:outline-none focus:border-cyan-500 transition-colors shadow-2xs"
          />
        </div>

        {/* 4. Workaround tried */}
        <div className="mb-8">
          <label className="block text-slate-800 text-xs sm:text-[13px] font-semibold mb-2.5 font-inter">
            Workaround tried
          </label>
          <div className="flex flex-wrap items-center gap-2.5">
            {['Page refresh', 'Re-init encoder', 'DNS flush', 'Alternative browser test'].map((item) => {
              const isActive = activeWorkaround === item;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setActiveWorkaround(item)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'border border-sky-400 bg-sky-50 text-sky-700 shadow-xs'
                      : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        {/* 5. Upload evidence / attachments */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <h3 className="text-slate-800 text-xs sm:text-[13px] font-semibold font-inter">
              Upload evidence / attachments
            </h3>
            <span className="text-slate-400 text-xs font-normal font-inter">
              File limits: Max 25MB per file
            </span>
          </div>

          <p className="text-xs leading-relaxed mb-4 font-inter">
            <span className="text-amber-500 font-semibold">Security Note: </span>
            <span className="text-slate-400">
              Always redact tokens, private keys, cookies, or database identifiers before uploading files.
            </span>
          </p>

          {/* 6 Attachment Cards Grid (3x2) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {ATTACHMENT_TYPES.map((att) => {
              const IconComp = att.icon;

              return (
                <div
                  key={att.id}
                  className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="font-sans font-bold text-slate-900 text-sm">
                        {att.title}
                      </h4>
                      <IconComp className="w-4 h-4 text-sky-500 shrink-0" />
                    </div>
                    <p className="text-slate-400 text-xs font-inter mb-4">
                      {att.subtitle}
                    </p>
                  </div>

                  <div>
                    <span className="inline-flex items-center gap-1.5 text-sky-600 font-semibold text-xs group-hover:text-sky-700 transition-colors">
                      <Paperclip className="w-3.5 h-3.5" />
                      Attach file
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
