import React from 'react';
import Image from 'next/image';

interface EvidenceCard {
  id: string;
  title: string;
  description: string;
  image: string;
}

const EVIDENCE_TYPES: EvidenceCard[] = [
  {
    id: 'browser-console-log',
    title: 'Browser Console Log',
    description:
      'Copy-paste or upload active browser console diagnostic trace files directly for analysis.',
    image: '/images/Live Events Support Page/les12.png',
  },
  {
    id: 'network-har-export',
    title: 'Network HAR Export',
    description:
      'Upload sanitized browser session HAR traces to audit routing delays or API handshakes.',
    image: '/images/Live Events Support Page/les13.png',
  },
  {
    id: 'screenshot-recording',
    title: 'Screenshot / Recording',
    description:
      'Upload images or clean screen records highlighting playback anomalies or stream artifacts.',
    image: '/images/Live Events Support Page/les14.png',
  },
  {
    id: 'api-response-payload',
    title: 'API Response Payload',
    description:
      'Submit redacted API logs or server JSON response bodies to isolate state guarantees.',
    image: '/images/Live Events Support Page/les15.png',
  },
  {
    id: 'event-configuration-export',
    title: 'Event Configuration Export',
    description:
      'Export anonymized event metadata, encoder parameters, and whitelists.',
    image: '/images/Live Events Support Page/les16.png',
  },
  {
    id: 'sdk-debug-output',
    title: 'SDK Debug Output',
    description:
      'Paste library initialization sequences and connection handshake logs.',
    image: '/images/Live Events Support Page/les17.png',
  },
];

export default function AttachEvidenceSection() {
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 lg:mb-12">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-[40px] text-slate-900 tracking-tight mb-2.5">
            Attach evidence safely.
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-inter">
            You control what you share. Every attachment is scanned and encrypted. Nothing is retained beyond case lifetime.
          </p>
        </div>

        {/* 6 Cards in 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {EVIDENCE_TYPES.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col cursor-pointer"
            >
              {/* Card Banner Image */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-950">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-sans font-bold text-slate-900 text-base sm:text-[17px] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-inter">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Warning Callout */}
        <div className="mt-10 rounded-2xl border border-slate-200/90 bg-white/85 backdrop-blur-sm p-4 sm:p-5 flex items-start gap-3 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-1.5 shadow-[0_0_6px_#f59e0b]" />
          <p className="text-xs sm:text-[13px] leading-relaxed font-inter">
            <strong className="text-slate-900 font-semibold">
              ZoikoStream never asks for passwords, stream keys, or access tokens in attachments.
            </strong>
            <span className="text-slate-500">
              {' '}Please ensure all uploaded diagnostic records are thoroughly redacted of critical private credentials before submitting.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
