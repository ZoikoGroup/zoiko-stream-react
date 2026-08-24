import React from 'react';
import Image from 'next/image';

const matrixRows = [
  {
    stage: 'Early Evaluation',
    desc: 'Browse full API documentation, system requirements, and pricing schemas.',
    action: 'Explore the platform →',
  },
  {
    stage: 'Unresolved Questions',
    desc: 'Connect with our integration team to discuss custom SSO, LMS, or FERPA needs.',
    action: 'Talk to an expert →',
  },
  {
    stage: 'Managed Event Need',
    desc: 'Submit an operational inquiry with zero booking pressure or cost risk.',
    action: 'Plan a Live Event →',
  },
  {
    stage: 'Existing Customer',
    desc: 'Get direct support from dedicated engineers. No marketing wait-lists.',
    action: 'Submit ticket →',
  },
];

export function ReadyEducationPathSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/Education-Page/bg (197).png"
          alt="Ready Education Path Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-center gap-14 text-center">
        <div className="flex flex-col justify-start items-center gap-4 max-w-[800px]">
          <h2 className="text-white text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Ready to choose the right education video path?
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Your selected workflow, audience requirements, privacy needs, and accessibility decisions — summarized with clear next steps.
          </p>
        </div>

        {/* Matrix Card */}
        <div className="w-full p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col justify-start items-start gap-6 text-left backdrop-blur-sm">
          <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
            Recommended Action Matrix
          </h3>
          <div className="w-full flex flex-col justify-start items-start divide-y divide-gray-800">
            {matrixRows.map((row, idx) => (
              <div key={idx} className="w-full py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <span className="w-56 text-white text-sm font-bold font-['Space_Grotesk'] flex-shrink-0">{row.stage}</span>
                <span className="flex-1 text-slate-400 text-sm font-normal font-['Inter']">{row.desc}</span>
                <span className="text-teal-400 text-sm font-bold font-['Space_Grotesk'] cursor-pointer flex-shrink-0">{row.action}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dual CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer">
            <span className="text-slate-950 text-base font-bold font-['Space_Grotesk']">
              Talk to an expert
            </span>
          </div>
          <div className="px-7 py-3.5 rounded-lg border border-white flex justify-center items-center cursor-pointer">
            <span className="text-white text-base font-bold font-['Space_Grotesk']">
              Explore the platform
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
