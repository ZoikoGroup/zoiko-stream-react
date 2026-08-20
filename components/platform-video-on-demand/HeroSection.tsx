'use client';

import Image from 'next/image';

const pipelineItems = [
  { label: 'Approved Source', value: 'Authorized raw ingest' },
  { label: 'Governed Asset', value: 'Technical validation active' },
  { label: 'Readiness Check', value: 'Metadata & rights matched' },
  { label: 'Access Policy', value: 'HMAC playback rules' },
  { label: 'Approved Playback', value: 'Global secure adaptive CDN' },
];

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden flex items-center bg-slate-950 pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 px-4 sm:px-8 lg:px-28 border-b border-gray-800"
      style={{
        backgroundImage: `url('/images/platform-video-on-demand/bg (52).png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-950/80 z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-12">
        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Badge */}
          <div className="px-3 py-1.5 rounded-full border border-teal-400 inline-flex items-center gap-2 w-fit">
            <span className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
            <span className="text-teal-400 text-xs font-bold tracking-wider uppercase">
              PLATFORM / BUILD / VIDEO ON DEMAND
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-slate-100 text-4xl sm:text-5xl font-bold leading-tight sm:leading-[60px]">
            Build governed on-demand video experiences from approved media
          </h1>

          {/* Description */}
          <p className="text-slate-400 text-base font-normal leading-7 max-w-2xl">
            ZoikoStream Video on demand is the workflow for turning approved recordings into governed assets. It confirms readiness, applies access, delivers playback, and manages preservation under policy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              className="px-6 py-3.5 bg-gradient-to-b from-teal-500 to-blue-500 rounded-[10px] text-white text-base font-bold hover:opacity-90 transition-opacity"
            >
              Start Building
            </button>
            <button
              type="button"
              className="px-7 py-3.5 rounded-[10px] border border-slate-400 text-slate-100 text-base font-medium hover:bg-slate-800 transition-colors"
            >
              Read Documentation
            </button>
          </div>
        </div>

        {/* Right Pipeline Card */}
        <div className="w-full lg:w-[500px] p-7 bg-zinc-900/80 rounded-2xl border border-gray-800 backdrop-blur-sm flex flex-col gap-5 shrink-0">
          <p className="text-teal-400 text-sm font-bold tracking-wide uppercase">
            APPROVED CONTROL PIPELINE
          </p>
          <div className="flex flex-col gap-2.5">
            {pipelineItems.map((item) => (
              <div
                key={item.label}
                className="p-2.5 bg-slate-900 rounded-lg border border-gray-800 flex justify-between items-start"
              >
                <span className="text-slate-100 text-xs font-bold">{item.label}</span>
                <span className="text-teal-400 text-xs font-normal">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
