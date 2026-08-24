import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const features = [
  {
    title: 'Operator Authority',
    desc: 'Explicit access boundaries mapping production roles to concrete stage actions.',
    img: '/images/Media-communications-page/Rectangle  (41).png',
  },
  {
    title: 'Approval Workflow',
    desc: 'Step-based transition gatekeepers ensuring pre-flight checks are met before air.',
    img: '/images/Media-communications-page/Rectangle  (42).png',
  },
  {
    title: 'Audit Trail',
    desc: 'Immutable logs tracking every switcher action, source swap, and telemetry warning.',
    img: '/images/Media-communications-page/Rectangle  (43).png',
  },
  {
    title: 'Preview & Program',
    desc: 'Strict logical separation ensuring next signal is fully qualified before routing to program.',
    img: '/images/Media-communications-page/Rectangle  (44).png',
  },
];

export function LiveOperationsConsoleSection() {
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
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Controlled live operations with clear authority at every stage
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Run-of-show state, operator authority, preview vs program distinction, and audit-ready change records.
          </p>
        </div>

        {/* Live Run-of-Show Console */}
        <div className="w-full p-6 lg:p-7 bg-slate-50 rounded-2xl border border-gray-200 flex flex-col justify-start items-start gap-6 shadow-sm">
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
              <span className="text-slate-900 text-sm font-bold font-['Space_Grotesk']">
                LIVE RUN-OF-SHOW CONSOLE
              </span>
            </div>
            <div className="px-2.5 py-1 bg-red-500/10 rounded-full">
              <span className="text-red-500 text-xs font-semibold font-['Inter'] uppercase">
                Active Stream
              </span>
            </div>
          </div>

          {/* Stepper */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            <div className="px-4 py-2.5 bg-emerald-500/10 rounded-lg flex justify-center items-center">
              <span className="text-emerald-500 text-xs font-bold font-['Space_Grotesk']">1. Planned</span>
            </div>
            <div className="px-4 py-2.5 bg-emerald-500/10 rounded-lg flex justify-center items-center">
              <span className="text-emerald-500 text-xs font-bold font-['Space_Grotesk']">2. Preflight</span>
            </div>
            <div className="px-4 py-2.5 bg-emerald-500/10 rounded-lg flex justify-center items-center">
              <span className="text-emerald-500 text-xs font-bold font-['Space_Grotesk']">3. Ready</span>
            </div>
            <div className="px-4 py-2.5 bg-blue-500/10 border border-blue-500 rounded-lg flex justify-center items-center">
              <span className="text-blue-500 text-xs font-bold font-['Space_Grotesk']">4. Preview</span>
            </div>
            <div className="px-4 py-2.5 bg-red-500 rounded-lg flex justify-center items-center">
              <span className="text-white text-xs font-bold font-['Space_Grotesk']">5. Live/Program</span>
            </div>
            <div className="px-4 py-2.5 bg-gray-200 rounded-lg flex justify-center items-center">
              <span className="text-slate-600 text-xs font-bold font-['Space_Grotesk']">6. Ended</span>
            </div>
          </div>

          {/* Preview vs Program Monitor Boxes */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-5 bg-white rounded-xl border-2 border-blue-500 flex flex-col justify-start items-start gap-3">
              <div className="w-full flex justify-between items-center">
                <span className="text-blue-500 text-sm font-bold font-['Space_Grotesk']">
                  PREVIEW (NEXT SIGNAL)
                </span>
                <span className="text-slate-600 text-xs font-normal font-['Inter']">
                  CAM-02 READY
                </span>
              </div>
                  <img src='/images/Media-communications-page/Rectangle  (45).png'/>

            </div>

            <div className="p-5 bg-white rounded-xl border-2 border-red-500 flex flex-col justify-start items-start gap-3">
              <div className="w-full flex justify-between items-center">
                <span className="text-red-500 text-sm font-bold font-['Space_Grotesk']">
                  PROGRAM (LIVE FEED)
                </span>
                <span className="text-red-500 text-xs font-semibold font-['Inter']">
                  ON AIR - DURATION 01:24:05
                </span>
              </div>
                               <img src='/images/Media-communications-page/Rectangle  (40).png'/>

            </div>
          </div>

          {/* Authority and Audit */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
            <div className="flex flex-col justify-start items-start gap-3">
              <span className="text-slate-600 text-xs font-bold font-['Space_Grotesk'] tracking-wide">
                OPERATOR AUTHORITY IN SESSION
              </span>
              <div className="flex flex-wrap gap-2">
                {['MCR Lead', 'Technical Director', 'Director', 'Executive Producer'].map((role, rIdx) => (
                  <span key={rIdx} className="px-3 py-1.5 bg-teal-400/10 border border-teal-400 rounded-md text-teal-600 text-xs font-semibold font-['Inter']">
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-start items-start gap-2.5">
              <span className="text-slate-600 text-xs font-bold font-['Space_Grotesk'] tracking-wide">
                LIVE CHANGE HISTORY (AUDITED)
              </span>
              <div className="w-full pb-2 border-b border-gray-200 flex justify-between items-center text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-blue-500 font-bold font-['Inter']">10:45:12 AM</span>
                  <span className="text-slate-900 font-normal font-['Inter']">Technical Director switched source to CAM-02 Preview</span>
                </div>
                <span className="text-slate-500 font-normal font-['Inter']">Signed by: td-01</span>
              </div>
              <div className="w-full pb-2 border-b border-gray-200 flex justify-between items-center text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-blue-500 font-bold font-['Inter']">11:00:00 AM</span>
                  <span className="text-slate-900 font-normal font-['Inter']">State transitioned to LIVE/PROGRAM by Executive Producer</span>
                </div>
                <span className="text-slate-500 font-normal font-['Inter']">Signed by: ep-04</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-xl border border-gray-200 flex flex-col justify-start items-start overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-36 bg-slate-200">
                <Image
                  src={feat.img}
                  alt={feat.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full p-5 flex flex-col justify-start items-start gap-2">
                <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
                  {feat.title}
                </h3>
                <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-5">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
