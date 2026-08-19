'use client';

import Image from 'next/image';

const controlSections = [
  'Asset Readiness',
  'Rights & Licenses',
  'Accessibility Tracks',
  'Access Policy',
  'Playback Experience',
  'Evidence & Audit',
];

export default function ExperienceControlSection() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-28 py-16 sm:py-20 lg:py-24 flex flex-col gap-14">
      <div className="flex flex-col gap-3">
        <h2 className="text-zinc-950 text-3xl sm:text-4xl font-bold leading-tight">
          On-Demand Experience Control Center
        </h2>
      </div>

      {/* Console UI */}
      <div className="w-full bg-white rounded-2xl border border-gray-200 flex flex-col overflow-hidden">
        {/* Mac-style titlebar */}
        <div className="h-10 px-4 bg-zinc-900 border-b border-gray-800 flex justify-between items-center">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-red-500 rounded-full" />
            <span className="w-2 h-2 bg-amber-600 rounded-full" />
            <span className="w-2 h-2 bg-teal-500 rounded-full" />
          </div>
          <span className="text-slate-400 text-xs font-normal">
            ZoikoStream Platform - Experience Orchestration Studio
          </span>
          <div className="w-10" />
        </div>

        <div className="p-6 bg-slate-50 flex flex-col lg:flex-row gap-6">
          {/* Sidebar nav */}
          <div className="w-full lg:w-56 flex flex-col gap-3">
            <p className="text-slate-500 text-xs font-bold tracking-wide uppercase">CONTROL SECTIONS</p>
            {controlSections.map((section, i) => (
              <div
                key={section}
                className={`px-3 py-2.5 rounded-lg ${
                  i === 0
                    ? 'bg-white border border-gray-200'
                    : 'bg-transparent'
                }`}
              >
                <span
                  className={`text-xs font-bold ${i === 0 ? 'text-blue-500' : 'text-slate-600'}`}
                >
                  {section}
                </span>
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Header row */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-zinc-950 text-lg font-bold">Keynote Replay SF - v2_main</p>
                <p className="text-slate-500 text-xs font-normal">Experience ID: exp_938bf822</p>
              </div>
              <div className="flex gap-2">
                
                <button
                  type="button"
                  className="px-4 py-2.5 bg-white rounded-lg border border-gray-200 text-zinc-950 text-xs font-bold hover:bg-slate-50 transition-colors"
                >
                  Save Draft
                </button>
              </div>
            </div>

            {/* Preview and controls */}
            <div className="flex flex-col lg:flex-row gap-5">
              {/* Live preview */}
              <div className="flex-1 h-60 p-5 bg-zinc-900 rounded-xl flex flex-col gap-3">
                <p className="text-teal-400 text-xs font-bold">LIVE PREVIEW RETRIEVAL</p>
                <div className="relative flex-1 rounded-lg overflow-hidden">
                  <Image
                    src="/images/platform-video-on-demand/frame (2).png"
                    alt="Live Preview"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right controls */}
              <div className="w-full lg:w-80 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <p className="text-zinc-950 text-xs font-bold">Audience Policy Selection</p>
                  <p className="text-zinc-950 text-base font-bold leading-6">What are you interested in?</p>
                  <div className="px-4 py-3 bg-white rounded-md border border-gray-200 flex justify-between items-center">
                    <span className="text-gray-500 text-base font-normal">Corporate Whitelist Option</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 6L8 10L12 6" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-zinc-950 text-xs font-bold">Accessibility Preset</p>
                  <p className="text-zinc-950 text-base font-bold leading-6">What are you interested in?</p>
                  <div className="px-4 py-3 bg-white rounded-md border border-gray-200 flex justify-between items-center">
                    <span className="text-gray-500 text-base font-normal">SLA Captions Verified</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 6L8 10L12 6" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
