import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import {   Shield, Cpu, Database, Activity } from 'lucide-react';

const PRINCIPLES = [
  {
    title: 'Source-governed',
    description:
      'Every capability must trace to an authoritative registry record with verified ownership and review date.',
    icon: Shield,
  },
  {
    title: 'Composable',
    description:
      'Patterns show how building blocks combine without enforcing one mandatory monolithic topology.',
    icon: Cpu,
  },
  {
    title: 'Operable',
    description:
      'Patterns surface operational metrics, latency concerns, and health pathways needed to run media reliably.',
    icon: Activity,
  },
  {
    title: 'Lifecycle-aware',
    description:
      'Deprecated or superseded architecture patterns do not silently remain canonical. Continuous validation holds.',
    icon: Database,
  },
];

export default function ArchitecturePrinciplesSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-12 bg-white overflow-hidden">
      {/* Background image & Glow overlay snippet */}
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

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Built on four principles.
        </h2>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRINCIPLES.map((principle, index) => {
          const Icon = principle.icon;
          return (
            <div
              key={index}
              className="p-6 bg-slate-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start gap-4 hover:shadow-md transition-shadow"
            >
              <div className="p-2 bg-slate-200/80 rounded-lg flex justify-center items-center">
                <Icon className="w-5 h-5 text-teal-400" />
              </div>
              <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
                {principle.title}
              </h3>
              <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-5">
                {principle.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
