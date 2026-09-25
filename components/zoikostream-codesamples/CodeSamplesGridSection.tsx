import React from 'react';
import Image from 'next/image';
import bgPattern from '@/public/images/Organization-overview/bg (147).png';

const SAMPLES = [
  {
    tag: 'Current',
    tagColor: 'text-slate-900',
    tagDot: 'bg-emerald-500',
    title: 'Read a current resource',
    description: 'Start with a focused, read-only pattern tied to its canonical API contract.',
    details: 'API contract • Current artifact',
    footerLeft: 'Read-only / local',
    footerRight: 'Copy eligible',
    footerRightColor: 'text-emerald-500',
    image: '/images/zoikostream-codesample/Preview.png'
  },
  {
    tag: 'Current',
    tagColor: 'text-slate-900',
    tagDot: 'bg-emerald-500',
    title: 'Create approved test state',
    description: 'Review prerequisites, environment and cleanup before creating synthetic test state.',
    details: 'Sample registry • Test environment',
    footerLeft: 'Creates test state',
    footerRight: 'Copy eligible',
    footerRightColor: 'text-emerald-500',
    image: '/images/zoikostream-codesample/Preview (1).png'
  },
  {
    tag: 'Current',
    tagColor: 'text-slate-900',
    tagDot: 'bg-emerald-500',
    title: 'Verify an event fixture',
    description: 'Use only an event fixture generated from the current Webhooks contract.',
    details: 'Webhooks contract • Synthetic fixture',
    footerLeft: 'Read-only / local',
    footerRight: 'Copy eligible',
    footerRightColor: 'text-emerald-500',
    image: '/images/zoikostream-codesample/Preview (2).png'
  },
  {
    tag: 'Review required',
    tagColor: 'text-slate-900',
    tagDot: 'bg-amber-500',
    title: 'Reconcile an unknown outcome',
    description: 'Resolve timeout ambiguity without teaching a blind retry for a mutating operation.',
    details: 'API contract • State reconciliation',
    footerLeft: 'Mutating',
    footerRight: 'Review needed',
    footerRightColor: 'text-amber-500',
    image: '/images/zoikostream-codesample/Preview (3).png'
  },
  {
    tag: 'Current',
    tagColor: 'text-slate-900',
    tagDot: 'bg-emerald-500',
    title: 'Validate a media profile',
    description: 'Confirm a source-defined protocol profile without assuming ports, flags or latency.',
    details: 'Media protocols • Profile sync',
    footerLeft: 'Read-only / remote',
    footerRight: 'Copy eligible',
    footerRightColor: 'text-emerald-500',
    image: '/images/zoikostream-codesample/Preview (4).png'
  },
  {
    tag: 'Review required',
    tagColor: 'text-slate-900',
    tagDot: 'bg-amber-500',
    title: 'Inspect lifecycle replacement',
    description: 'See why a stale artifact is unavailable and follow its governed replacement path.',
    details: 'Lifecycle registry • Migration path',
    footerLeft: 'Deprecated',
    footerRight: 'Copy disabled',
    footerRightColor: 'text-slate-400',
    image: '/images/zoikostream-codesample/Preview (5).png'
  }
];

export default function CodeSamplesGridSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-24 bg-white flex flex-col items-center overflow-hidden">
      
      {/* Background Topo */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image src={bgPattern} alt="Pattern" fill className="object-cover opacity-30 mix-blend-multiply" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] flex flex-col gap-12">
        
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 w-full">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-slate-900 text-3xl sm:text-4xl lg:text-[40px] font-bold font-['Space_Grotesk'] leading-tight">
              Find the right sample by intent, not by logo
            </h2>
            <p className="text-slate-500 text-lg font-normal font-['Inter'] leading-relaxed">
              Every visible example is a governed artifact. Currentness, authority, side-effect risk and copy eligibility stay attached to the task.
            </p>
          </div>

          <div className="w-full lg:w-[240px] shrink-0 p-5 rounded-xl border border-slate-200 bg-white flex flex-col gap-2 shadow-sm">
            <span className="text-slate-900 text-sm font-bold font-['Space_Grotesk']">
              6 task patterns
            </span>
            <p className="text-slate-400 text-xs font-['Inter']">
              Source status shown on every card
            </p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="w-full flex items-center gap-3 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          <button className="px-5 py-2.5 bg-slate-900 text-white rounded-full text-xs font-bold font-['Space_Grotesk'] whitespace-nowrap">
            All tasks
          </button>
          <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-full text-xs font-medium font-['Space_Grotesk'] whitespace-nowrap transition-colors">
            Read-only
          </button>
          <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-full text-xs font-medium font-['Space_Grotesk'] whitespace-nowrap transition-colors">
            Creates test state
          </button>
          <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-full text-xs font-medium font-['Space_Grotesk'] whitespace-nowrap transition-colors">
            Events
          </button>
          <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-full text-xs font-medium font-['Space_Grotesk'] whitespace-nowrap transition-colors">
            Reliability
          </button>
          <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-full text-xs font-medium font-['Space_Grotesk'] whitespace-nowrap transition-colors">
            Media profiles
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {SAMPLES.map((sample, idx) => (
            <div key={idx} className="w-full bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
              
              {/* Card Image */}
              <Image
                src={sample.image}
                alt={`${sample.title} preview`}
                width={560}
                height={180}
                className="w-full h-44 object-cover"
              />
              
              {/* Text Area */}
              <div className="flex flex-col flex-1 p-6 gap-3">
                <div className="w-fit bg-slate-100 border border-slate-200 rounded-full px-3 py-1.5 flex items-center gap-2 mb-1">
                  <div className={`w-1.5 h-1.5 rounded-full ${sample.tagDot}`} />
                  <span className={`text-[11px] font-bold font-['Space_Grotesk'] uppercase tracking-wider ${sample.tagColor}`}>
                    {sample.tag}
                  </span>
                </div>
                <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
                  {sample.title}
                </h3>
                <p className="text-slate-500 text-sm font-normal font-['Inter'] leading-relaxed flex-1">
                  {sample.description}
                </p>
                <div className="text-slate-400 text-xs font-mono tracking-tight mt-2">
                  {sample.details}
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-slate-100 flex justify-between items-center bg-slate-50/50">
                <span className="text-slate-500 text-[11px] font-medium font-['Inter']">
                  {sample.footerLeft}
                </span>
                <span className={`${sample.footerRightColor} text-[11px] font-bold font-['Space_Grotesk'] uppercase tracking-wider`}>
                  {sample.footerRight}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
