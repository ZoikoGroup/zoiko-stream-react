'use client';

import React, { useState } from 'react';
import { Paperclip } from 'lucide-react';

interface PriorityItem {
  number: string;
  title: string;
  description: string;
  active: boolean;
}

const ITEMS: PriorityItem[] = [
  {
    number: '01',
    title: 'Structured IDs',
    description:
      'Core identifiers (case ID, error codes, correlation IDs) are captured with zero risk of PII leak.',
    active: true,
  },
  {
    number: '02',
    title: 'Environment & Metadata',
    description:
      'Operating system, SDK version, network configuration, and platform diagnostic state.',
    active: true,
  },
  {
    number: '03',
    title: 'Redacted Excerpts',
    description:
      'Truncated and automatically sanitized error logs focusing strictly on stack traces.',
    active: true,
  },
  {
    number: '04',
    title: 'Screenshot / Document',
    description:
      'Optional visual diagnostic attachments for immediate physical interface issues.',
    active: true,
  },
  {
    number: '05',
    title: 'Config Export / Private Media',
    description:
      'Deep system configuration files and private streams. Disabled unless explicitly requested.',
    active: false,
  },
];

export default function EvidenceTransferSection() {
  const [attachmentVisible, setAttachmentVisible] = useState(true);

  return (
    <section className="relative w-full bg-[#fafbfc] py-20 lg:py-28 overflow-hidden">
      {/* Topographic contour background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden" aria-hidden="true">
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
            <path d="M-80 500 C 230 580, 500 440, 830 540 S 1240 620, 1520 500" />
            <path d="M-80 570 C 260 650, 540 500, 870 610 S 1280 680, 1520 570" />
            <path d="M-80 640 C 290 720, 580 560, 910 680 S 1320 740, 1520 640" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Title & Subtitle */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight mb-3">
            See exactly what transfers before you submit
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-4xl leading-relaxed">
            The best enterprise case is the smallest safe evidence set. Identifiers first, excerpts second, files last.
          </p>
        </div>

        {/* Content Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Priority Hierarchy */}
          <div className="lg:col-span-6 w-full">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Evidence Priority Hierarchy
            </h3>

            <div className="space-y-4">
              {ITEMS.map((item) => (
                <div
                  key={item.number}
                  className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 flex items-start gap-4 shadow-sm hover:border-slate-300 transition-all duration-200"
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                      item.active
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {item.number}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Security Preview Card */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-[#0e1626] rounded-2xl border border-slate-800 p-6 sm:p-7 text-white shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-800/80 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-400" />
                  <span className="font-mono text-[10px] font-bold text-slate-300 tracking-wider uppercase">
                    ZOIKOSTREAM SECURITY PREVIEW
                  </span>
                </div>
                <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider">
                  VERIFICATION LOOP
                </span>
              </div>

              {/* Rows */}
              <div className="divide-y divide-slate-800/80 space-y-3.5 text-xs sm:text-sm mb-6">
                {/* Organization Context */}
                <div className="flex items-center justify-between gap-2 pt-1 pb-3">
                  <span className="text-slate-400">Organization Context</span>
                  <span className="font-mono text-xs text-teal-400 font-semibold tracking-wider">
                    ORG_ID_901_44E
                  </span>
                </div>

                {/* Support Intent & Affected Area */}
                <div className="flex items-center justify-between gap-2 pt-3 pb-3">
                  <span className="text-slate-400">Support Intent &amp; Affected Area</span>
                  <span className="text-xs text-slate-200">
                    Live Stream Ingest (SRT)
                  </span>
                </div>

                {/* Impact Facts */}
                <div className="pt-3 pb-3">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-slate-400">Impact Facts</span>
                    <span className="font-mono text-[9px] font-bold text-amber-400/90 tracking-wider uppercase">
                      NOT AN SLA PROMISE
                    </span>
                  </div>
                  <span className="text-xs text-slate-200">
                    Signal Jitter exceeding 150ms in NA-East region
                  </span>
                </div>

                {/* Attachments */}
                <div className="pt-3 pb-3">
                  <span className="text-slate-400 block mb-2">Attachments (1 file)</span>
                  {attachmentVisible ? (
                    <div className="flex items-center justify-between text-xs bg-[#141f33] px-3 py-2 rounded-lg border border-slate-800">
                      <div className="flex items-center gap-2 text-slate-300">
                        <Paperclip className="w-3.5 h-3.5 text-slate-400" />
                        <span>srt_handshake_timeout.log</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setAttachmentVisible(false)}
                        className="text-red-400 hover:text-red-300 text-xs font-medium cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <span className="text-xs text-slate-500 italic">No attachments added</span>
                  )}
                </div>

                {/* Channel Selected */}
                <div className="flex items-center justify-between gap-2 pt-3 pb-1">
                  <span className="text-slate-400">Channel Selected</span>
                  <span className="text-xs text-slate-200">
                    Direct L1 Incident Routing
                  </span>
                </div>
              </div>

              {/* Footnote */}
              <p className="text-[11px] text-slate-500 mb-5 leading-relaxed">
                By submitting, you agree to transmit the above diagnostic context strictly for technical triage.
              </p>

              {/* Submit Button */}
              <button
                type="button"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#27c3a7] to-[#38bdf8] hover:opacity-95 text-[#06181f] font-bold text-sm shadow-[0_4px_20px_rgba(39,195,167,0.3)] transition-all duration-200 cursor-pointer"
              >
                Authorize Context &amp; Submit Case
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
