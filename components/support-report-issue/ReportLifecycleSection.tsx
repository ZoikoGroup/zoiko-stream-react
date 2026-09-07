import React from 'react';
import Image from 'next/image';

interface LifecycleStep {
  step: string;
  title: string;
  description: string;
}

const lifecycleSteps: LifecycleStep[] = [
  {
    step: 'STEP 01',
    title: 'Report Recorded',
    description:
      'Your submission is securely logged with a unique referenced ID. A copy of the draft is archived for compliance audit audits.',
  },
  {
    step: 'STEP 02',
    title: 'Routing & Triage',
    description:
      'Automated routing algorithms analyze incident vectors and direct the file to dedicated specialist engineering pipelines.',
  },
  {
    step: 'STEP 03',
    title: 'Investigation',
    description:
      'Engineers review diagnostic metrics and recreation logs. If needed, contact sets help channels authentic further details.',
  },
  {
    step: 'STEP 04',
    title: 'Resolution',
    description:
      'Findings inform systemic product updates, platform failover adjustments, and continuous documentation revisions.',
  },
];

export default function ReportLifecycleSection() {
  return (
    <section className="relative w-full bg-[#030611] text-white py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-slate-800/60">
      {/* Background Server/Data Center Image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/Report Issue Page/sri5.png"
          alt="Server telemetry lifecycle background"
          fill
          priority
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030611]/90 via-[#030611]/60 to-[#030611]" />
        <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent via-[#030611]/30 to-[#030611]/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight mb-3">
            Your report enters a defined lifecycle.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal max-w-3xl leading-relaxed">
            The report is recorded and may be routed for triage. The team may request additional information through an approved channel.
          </p>
        </div>

        {/* 2x2 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-10">
          {lifecycleSteps.map((stepItem, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800/85 bg-[#060c19]/80 backdrop-blur-md p-6 sm:p-7 hover:border-slate-700/90 transition-all duration-200"
            >
              <span className="inline-block font-mono text-[10px] font-semibold text-[#00c5ff] bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-1 rounded tracking-wider uppercase mb-3.5">
                {stepItem.step}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2">
                {stepItem.title}
              </h3>
              <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed">
                {stepItem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Disclaimer Note */}
        <div className="pt-2">
          <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed">
            <span className="text-[#00e5ff] font-semibold mr-1.5">Note:</span>
            We do not promise individual response time, fix timeline, or root cause publication unless an authoritative support policy establishes it.
          </p>
        </div>
      </div>
    </section>
  );
}
