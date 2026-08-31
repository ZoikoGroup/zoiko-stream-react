import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const BLOCKS = [
  {
    num: '01',
    title: 'Breadcrumb Paths',
    description:
      'Explicit taxonomy route (e.g. Live Events > Memorials) for clean spatial search.',
  },
  {
    num: '02',
    title: 'Hero & At-a-Glance',
    description:
      'Outcome-focused title, verified partner identity, and 3 key high-integrity metrics.',
  },
  {
    num: '03',
    title: 'Context & Challenge',
    description:
      "The customer's starting baseline, operating constraints, and specific technical friction.",
  },
  {
    num: '04',
    title: 'Why This Approach',
    description:
      'Evaluation rationale behind selecting specific ZoikoStream SDKs, APIs, or managed tools.',
  },
  {
    num: '05',
    title: 'Implementation Roadmap',
    description:
      'Phased rollout timeline, network architecture setups, and integration checkpoints.',
  },
  {
    num: '06',
    title: 'Evidence & Outcomes',
    description:
      'Traceable performance outcomes matched to client-authenticated telemetry logs.',
  },
  {
    num: '07',
    title: 'Measurement Basis',
    description:
      'Underlying system methodology, sample rates, and calculation structures.',
  },
  {
    num: '08',
    title: 'Customer Testimony',
    description:
      'Verbatim quote from verified technical sponsor, protected by name-separation rules.',
  },
  {
    num: '09',
    title: 'Architecture Diagram',
    description:
      'Technical diagram detailing system inputs, security boundaries, and deliver edges.',
  },
  {
    num: '10',
    title: 'Related Resources',
    description:
      'Curation of matching reference guides, developer documents, and product manuals.',
  },
  {
    num: '11',
    title: 'Contextual Action CTA',
    description:
      'Deterministic next steps to help evaluators calculate bandwidth or speak to architects.',
  },
];

export default function CaseStudiesInsideSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-14 bg-white overflow-hidden">
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
      <div className="size-[520px] left-[1068px] top-[620px] absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Inside every case study
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          A structured, governed proof narrative designed to help architects evaluate architecture fit rapidly.
        </p>
      </div>

      {/* Content Layout */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row justify-start items-center lg:items-start gap-12 lg:gap-14">
        {/* Left Side Wireframe Card */}
        <div className="w-full lg:w-[480px] p-6 sm:p-8 bg-slate-50/80 rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-200 flex flex-col justify-start items-start gap-6 overflow-hidden shrink-0 shadow-sm">
          <span className="text-slate-900 text-sm font-bold font-['Space_Grotesk'] tracking-wider uppercase">
            SAMPLE CASE STUDY WIREFRAME
          </span>

          <div className="w-full flex flex-col justify-start items-start gap-3.5">
            <div className="w-full p-4 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-between items-center shadow-xs">
              <span className="text-slate-900 text-sm font-bold font-['Space_Grotesk']">
                AeroSpace Corp Case
              </span>
              <div className="px-2 py-0.5 bg-gray-200/80 rounded-md">
                <span className="text-slate-600 text-[10px] font-bold font-['Inter'] uppercase tracking-wider">
                  VERIFIED
                </span>
              </div>
            </div>

            <div className="w-full flex items-center gap-3">
              <div className="flex-1 p-4 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col items-start gap-1 shadow-xs">
                <span className="text-slate-900 text-2xl font-bold font-['Space_Grotesk']">
                  99.999%
                </span>
                <span className="text-slate-500 text-xs font-normal font-['Inter']">
                  Uptime achieved
                </span>
              </div>
              <div className="flex-1 p-4 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col items-start gap-1 shadow-xs">
                <span className="text-slate-900 text-2xl font-bold font-['Space_Grotesk']">
                  100ms
                </span>
                <span className="text-slate-500 text-xs font-normal font-['Inter']">
                  Failover recovery
                </span>
              </div>
            </div>

            <div className="w-full p-5 bg-sky-100/70 rounded-xl flex flex-col justify-start items-start gap-2">
              <p className="text-slate-900 text-xs italic font-normal font-['Inter'] leading-relaxed">
                &quot;ZoikoStream provided the deterministic pipeline security we required...&quot;
              </p>
              <span className="text-slate-900 text-xs font-bold font-['Space_Grotesk']">
                — Principal Systems Architect, AeroSpace
              </span>
            </div>
          </div>
        </div>

        {/* Right Side 11 Governed Blocks 2-Column Grid */}
        <div className="flex-1 w-full flex flex-col justify-start items-start gap-5">
          <span className="text-slate-900 text-sm font-bold font-['Space_Grotesk'] tracking-wider uppercase">
            11 GOVERNED CONTENT BLOCKS:
          </span>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {BLOCKS.map((block, index) => (
              <div key={index} className="flex items-start gap-3.5">
                <span className="text-blue-500 text-lg font-bold font-['Space_Grotesk'] shrink-0 pt-0.5">
                  {block.num}
                </span>
                <div className="flex flex-col justify-start items-start gap-1">
                  <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk'] leading-snug">
                    {block.title}
                  </h3>
                  <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-relaxed">
                    {block.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
