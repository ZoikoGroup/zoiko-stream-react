import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Activity, SlidersHorizontal, Check, Headphones } from 'lucide-react';

import bg147 from '@/public/images/Organization-overview/bg (147).png';
import img65 from '@/public/images/resource-help-center/card-image (65).png';
import img66 from '@/public/images/resource-help-center/card-image (66).png';
import img67 from '@/public/images/resource-help-center/card-image (67).png';

const FLOWS = [
  {
    steps: '5 steps',
    title: 'Stream Not Starting',
    description:
      'Isolate encoder configuration parameters, credentials errors, or ingest node blockages.',
    image: img65,
    href: '#start-flow',
  },
  {
    steps: '4 steps',
    title: 'High Latency or Buffering',
    description:
      'Identify packet loss, local hardware limits, or edge network distribution delays.',
    image: img66,
    href: '#start-flow',
  },
  {
    steps: '6 steps',
    title: 'Recording Not Available',
    description:
      'Resolve cloud storage replication lags, verification failures, or preservation delays.',
    image: img67,
    href: '#start-flow',
  },
];

const DIAGNOSTIC_STEPS = [
  { name: 'Symptom', icon: Activity },
  { name: 'Check Status', icon: Activity },
  { name: 'Diagnostics', icon: SlidersHorizontal },
  { name: 'Resolution', icon: Check },
  { name: 'Escalation', icon: Headphones },
];

export default function HelpCenterTroubleshootingSection() {
  return (
    <section id="guided-troubleshooting" className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-14 bg-white overflow-hidden">
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
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Guided troubleshooting
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Step-by-step diagnostic flows for common issues
        </p>
      </div>

      {/* 3 Guided Flow Cards */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {FLOWS.map((item, index) => (
          <div
            key={index}
            className="bg-slate-50/90 backdrop-blur-xs rounded-xl shadow-[0px_4px_12px_0px_rgba(11,8,16,0.02)] outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start overflow-hidden hover:border-blue-500/50 transition-all group"
          >
            <div className="relative w-full h-36 bg-gray-100 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-6 flex flex-col justify-between items-start gap-3 flex-1">
              <div className="flex flex-col gap-2">
                <div className="w-full flex justify-between items-center">
                  <span className="text-blue-600 text-xs font-bold font-['Space_Grotesk'] tracking-wider">
                    GUIDED FLOW
                  </span>
                  <span className="text-slate-500 text-xs font-semibold font-['Inter']">
                    {item.steps}
                  </span>
                </div>

                <h3 className="text-slate-900 text-xl font-bold font-['Space_Grotesk']">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href={item.href}
                  className="text-blue-600 hover:text-blue-700 text-sm font-bold font-['Space_Grotesk'] transition-colors"
                >
                  Start Troubleshooting →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Diagnostic Stepper Banner with Icons */}
      <div className="relative z-10 w-full p-6 sm:p-8 bg-slate-50/90 backdrop-blur-xs rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-200 flex flex-col justify-start items-start gap-6 shadow-xs">
        <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk'] tracking-wide">
          HOW GUIDED DIAGNOSTICS WORK
        </h3>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
          {DIAGNOSTIC_STEPS.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <React.Fragment key={idx}>
                <div className="flex items-center gap-3">
                  <div className="size-9 bg-blue-500 rounded-full flex justify-center items-center shrink-0 shadow-xs">
                    <IconComponent className="w-4.5 h-4.5 text-white" />
                  </div>
                  <span className="text-slate-900 text-sm font-bold font-['Space_Grotesk'] whitespace-nowrap">
                    {step.name}
                  </span>
                </div>
                {idx < DIAGNOSTIC_STEPS.length - 1 && (
                  <div className="hidden md:block flex-1 h-[1.5px] bg-gray-200 mx-2" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
