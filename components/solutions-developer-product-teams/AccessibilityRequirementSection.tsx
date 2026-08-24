import React from 'react';
import Image from 'next/image';

import bg161 from '@/public/images/Developers-product-teams/bg (159).png';

const uiResponsibilities = [
  'Keyboard accessibility and logical focus loops',
  'Visible accessibility labels & accessible names',
  'Enlarged touch targets & robust click bounds',
  'High contrast visual states for all dark modes',
];

const mediaAlternatives = [
  'Live automated transcriptions engine',
  'Multi-language subtitle track injection',
  'Clean screen-reader compatibility tags',
  'Live translation routing configuration',
];

const checkpointPills = [
  'Evaluated WCAG AAA Rules',
  'Audited High contrast player profiles',
  'Tested Multi-language fallback routes',
];

export default function AccessibilityRequirementSection() {
  return (
    <section className="relative w-full bg-slate-950/80 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg161}
          alt="Accessibility Requirement Background"
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-3xl font-bold font-['Space_Grotesk'] text-white leading-tight">
            Accessible product video is a product requirement, not a launch-day toggle
          </h2>
          <p className="text-slate-400 text-lg font-normal font-['Inter'] leading-relaxed max-w-5xl">
            Plan keyboard and screen-reader interaction, captions/subtitles/transcripts, language choices, readable controls, error recovery and live-to-replay continuity as part of product QA.
          </p>
        </div>

        {/* 2 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-zinc-900/80 rounded-xl border border-gray-800 backdrop-blur-md flex flex-col gap-5">
            <h3 className="text-teal-400 text-base font-bold font-['Space_Grotesk']">
              Product UI Responsibilities
            </h3>
            <div className="flex flex-col gap-3">
              {uiResponsibilities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="size-3.5 flex items-center justify-center text-teal-400 font-bold shrink-0 text-xs">
                    ✓
                  </div>
                  <span className="text-slate-400 text-xs font-normal font-['Inter']">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 bg-zinc-900/80 rounded-xl border border-gray-800 backdrop-blur-md flex flex-col gap-5">
            <h3 className="text-teal-400 text-base font-bold font-['Space_Grotesk']">
              Media Alternatives
            </h3>
            <div className="flex flex-col gap-3">
              {mediaAlternatives.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="size-3.5 flex items-center justify-center text-teal-400 font-bold shrink-0 text-xs">
                    ✓
                  </div>
                  <span className="text-slate-400 text-xs font-normal font-['Inter']">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Checkpoint Bar */}
        <div className="p-6 bg-zinc-900/80 rounded-lg border border-gray-800 flex flex-col gap-4">
          <span className="text-white text-xs font-bold font-['Space_Grotesk'] tracking-wider">
            COMPLIANCE AUDITING CHECKPOINT
          </span>

          <div className="flex flex-wrap items-center gap-6">
            {checkpointPills.map((pill, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="size-2 bg-teal-400 rounded-full" />
                <span className="text-slate-400 text-xs font-normal font-['Inter']">
                  {pill}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity"
          >
            Review Accessibility Guidance
          </button>
          <button
            type="button"
            className="px-7 py-3.5 rounded-lg border border-slate-400 text-white text-base font-bold font-['Space_Grotesk'] hover:bg-white/5 transition-colors"
          >
            Explore Accessible &amp; Multilingual Video
          </button>
        </div>
      </div>
    </section>
  );
}
