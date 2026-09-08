import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import decisionGraphic from '@/public/images/Zoiko Stream footer - Platform - Security-and-Access-Platform-Page/DecisionGraphic.png';

const INPUTS = [
  { title: 'Principal', desc: 'Verified identity class' },
  { title: 'Resource', desc: 'Protected object or endpoint' },
  { title: 'Action', desc: 'Requested operation' },
  { title: 'Scope', desc: 'Bounded context or environment' },
  { title: 'Policy & Conditions', desc: 'Current authorization rules' },
  { title: 'Session State', desc: 'Credential assurance level' },
  { title: 'Decision', desc: 'Allowed / Denied / Conditional / Review Required' },
];

const OUTCOMES = [
  { label: 'Allowed', style: 'bg-emerald-100 text-emerald-600' },
  { label: 'Denied', style: 'bg-red-100 text-red-600' },
  { label: 'Conditional', style: 'bg-amber-100 text-amber-600' },
  { label: 'Restricted', style: 'bg-orange-100 text-orange-600' },
  { label: 'Review Required', style: 'bg-slate-100 text-slate-600' },
];

export default function PlatformSecurityAccessAuthorizationSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-white border-b border-slate-200 flex flex-col justify-start items-start gap-14 overflow-hidden z-10">
      {/* White Background Snippet */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0" />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="size-96 -left-36 -top-20 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl flex flex-col justify-start items-start gap-14">
        {/* Header Text */}
        <div className="w-full flex flex-col justify-start items-start gap-3">
          <h2 className="w-full text-zinc-950 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[48px]">
            Authorization and effective access
          </h2>
          <p className="w-full text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
            Authorization evaluates whether this principal may perform this action on this resource in this context right now. A role label alone never proves effective access.
          </p>
        </div>

        {/* 2 Column Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Access Decision Inputs */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <h3 className="text-zinc-950 text-lg font-bold font-['Space_Grotesk']">
              Access Decision Inputs
            </h3>
            <div className="flex flex-col gap-4">
              {INPUTS.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="size-2 bg-teal-400 rounded-full shrink-0" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-zinc-950 text-base font-bold font-['Space_Grotesk']">
                      {item.title}
                    </span>
                    <span className="text-slate-600 text-sm font-normal font-['Space_Grotesk']">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Box: DECISION ENGINE OUTCOMES */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[520px] p-6 sm:p-7 bg-slate-50/90 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 backdrop-blur-xs flex flex-col gap-6 shadow-md">
              <span className="text-slate-600 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
                DECISION ENGINE OUTCOMES
              </span>

              <div className="relative w-full h-56 rounded-xl overflow-hidden shadow-inner">
                <Image
                  src={decisionGraphic}
                  alt="Decision Engine Outcomes Graphic"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="w-full flex flex-wrap gap-2.5">
                {OUTCOMES.map((item, idx) => (
                  <div key={idx} className={`px-3 py-1.5 rounded-md ${item.style}`}>
                    <span className="text-xs font-bold font-['Space_Grotesk']">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
