import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import bg147 from '@/public/images/Organization-overview/bg (147).png';

const STEPS = [
  { num: '01', title: 'Self-service search', desc: 'Scan current articles' },
  { num: '02', title: 'Check status', desc: 'Isolate platform faults' },
  { num: '03', title: 'Review context', desc: 'Select diagnostic logs' },
  { num: '04', title: 'Contact support', desc: 'Escalate to specialists' },
];

export default function HelpCenterHumanSupportSection() {
  return (
    <section id="human-support" className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-center gap-14 bg-white overflow-hidden text-center">
      {/* Background overlay snippet */}
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
      <div className="relative z-10 w-full max-w-2xl flex flex-col justify-start items-center gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Need human support?
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          When self-service is not enough, escalate directly with precise system context to reduce resolution cycles.
        </p>
      </div>

      {/* Steps Banner */}
      <div className="relative z-10 w-full p-6 bg-slate-50/90 backdrop-blur-xs rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left shadow-xs">
        {STEPS.map((step, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className="size-9 bg-blue-500 rounded-2xl flex justify-center items-center shrink-0">
              <span className="text-white text-sm font-bold font-['Space_Grotesk']">
                {step.num}
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-slate-900 text-sm font-bold font-['Space_Grotesk']">
                {step.title}
              </span>
              <span className="text-slate-600 text-xs font-normal font-['Inter']">
                {step.desc}
              </span>
            </div>
            {idx < STEPS.length - 1 && (
              <ArrowRight className="hidden lg:block w-3.5 h-3.5 text-slate-400 ml-auto shrink-0" />
            )}
          </div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4">
        <Link
          href="/contact-us"
          className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center hover:opacity-90 transition-opacity"
        >
          <span className="text-slate-950 text-base font-bold font-['Space_Grotesk']">
            Contact Support
          </span>
        </Link>
        <span className="text-slate-600 text-xs font-normal font-['Inter']">
          We show what context will be shared before you submit. No false response-time promises.
        </span>
      </div>
    </section>
  );
}
