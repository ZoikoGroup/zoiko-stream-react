import React from 'react';
import Image from 'next/image';
import bg167 from '@/public/images/Enterprises/bg (167).png';

const questions = [
  'Do multiple teams share media responsibilities?',
  'Are audience/access policies important?',
  'Do broadcasts require readiness/continuity?',
  'Do recordings/replay require governance?',
  'Are accessibility/language requirements material?',
  'Do security, legal or procurement teams need evidence?',
];

export function OperatingModelAssessmentSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg167}
          alt="Operating Model Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0" />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="size-96 -left-44 -top-24 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Enterprise is an operating model, not a headcount.
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Evaluate your organization&apos;s architectural and operational constraints to identify relevant operational needs without arbitrary tier segmentation.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {questions.map((q, idx) => (
            <div
              key={idx}
              className="p-6 bg-slate-50/90 rounded-xl border border-gray-200 flex flex-col justify-start items-start gap-5 min-h-[192px] shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm"
            >
              <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk'] leading-6">
                {q}
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3.5 py-2 bg-sky-100 rounded-full border border-blue-500 text-sky-700 text-xs font-semibold font-['Inter'] cursor-pointer">
                  Yes
                </span>
                <span className="px-3.5 py-2 bg-white rounded-full border border-gray-200 text-slate-600 text-xs font-normal font-['Inter'] cursor-pointer">
                  Sometimes
                </span>
                <span className="px-3.5 py-2 bg-white rounded-full border border-gray-200 text-slate-600 text-xs font-normal font-['Inter'] cursor-pointer">
                  Not currently
                </span>
                <span className="px-3.5 py-2 bg-white rounded-full border border-gray-200 text-slate-600 text-xs font-normal font-['Inter'] cursor-pointer">
                  Not sure
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer">
          <span className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
            Talk to an Expert
          </span>
        </div>
      </div>
    </section>
  );
}
