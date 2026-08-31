import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const qualityChecklist = [
  {
    title: 'Source Configuration',
    desc: 'Validate that active ingest profiles, transcode configurations, and fallback stream pathways align with target specifications.',
  },
  {
    title: 'Security & Authorization',
    desc: 'Confirm all client handshakes utilize dynamic, transient token credentials. Secure keys must never sit in front-end browser variables.',
  },
  {
    title: 'Accessibility Compliance',
    desc: 'Ensure native HTML5 player shells preserve accurate keyboard tab index orders and WCAG 2.2 AA focus states.',
  },
  {
    title: 'Browser Behavior',
    desc: 'Test active autoplay promise chains, inline container setups, and multi-device fullscreen transition capabilities.',
  },
  {
    title: 'Reliability & Recovery',
    desc: 'Confirm stream failure handlers successfully execute exponential backoff retries and handle network transitions cleanly.',
  },
  {
    title: 'Observability & Analytics',
    desc: 'Verify live metric reporting loops gather playback performance details without piping signed manifest paths.',
  },
  {
    title: 'Performance Optimization',
    desc: 'Tune buffer targets, chunk fetching intervals, and hardware acceleration handovers to keep loading latency low.',
  },
  {
    title: 'Operational Readiness',
    desc: 'Ensure your application and administrative workflows align with agreed support levels and regional SLA targets.',
  },
];

const certifiedBrowsers = [
  { name: 'Google Chrome', ver: 'v120+ Verified', badge: 'VERIFIED' },
  { name: 'Apple Safari', ver: 'v17+ Native HLS', badge: 'VERIFIED' },
  { name: 'Mozilla Firefox', ver: 'v122+ Engine Support', badge: 'VERIFIED' },
  { name: 'Microsoft Edge', ver: 'v120+ Chromium', badge: 'VERIFIED' },
];

export function ValidateIntegrationBeforeProductionSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
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

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-950 text-3xl lg:text-4xl font-bold leading-tight">
            Validate the integration before production.
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Avoid standard client-side integration failures by walking through our structured architecture quality-check matrix.
          </p>
        </div>

        {/* 8 Items Grid */}
        <div className="w-full grid grid-cols-2 gap-3">
          {qualityChecklist.map((item, idx) => (
            <div
              key={idx}
              className="p-5 bg-slate-50 rounded-xl border border-gray-200 flex items-center gap-5 shadow-xs"
            >
              <div className="w-7 h-7 rounded-full bg-teal-400/10 border border-teal-400 flex items-center justify-center shrink-0">
                <span className="text-teal-500 text-xs font-bold">✓</span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-slate-950 text-base font-bold">{item.title}</h3>
                <p className="text-slate-600 text-xs leading-4">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certified Environments Box */}
        <div className="w-full p-7 bg-slate-50 rounded-xl border border-gray-200 flex flex-col gap-6 shadow-xs">
          <span className="text-blue-500 text-xs font-bold tracking-wide uppercase">
            CERTIFIED CLIENT ENVIRONMENTS
          </span>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifiedBrowsers.map((b, idx) => (
              <div
                key={idx}
                className="p-4 bg-white rounded-lg border border-gray-200 flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded bg-slate-50 flex items-center justify-center shrink-0">
                  <span className="text-blue-500 text-xs">🌐</span>
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-slate-950 text-sm font-bold">{b.name}</span>
                  <span className="text-slate-600 text-xs">{b.ver}</span>
                </div>
                <span className="px-2 py-0.5 bg-emerald-500/10 rounded text-emerald-600 text-[9px] font-bold">
                  {b.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
