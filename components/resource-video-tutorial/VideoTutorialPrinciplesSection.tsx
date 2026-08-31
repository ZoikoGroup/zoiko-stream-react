import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import {  CheckCircle, FileText, Activity, MessageSquare, GitMerge } from 'lucide-react';

const PRINCIPLES = [
  {
    title: 'Practical',
    description: 'Real workflows demonstrated with real product UI.',
    icon: Activity,
  },
  {
    title: 'Current',
    description: 'Every tutorial is reviewed against current documentation.',
    icon: CheckCircle,
  },
  {
    title: 'Captioned',
    description: 'Synchronized captions for all spoken content.',
    icon: MessageSquare,
  },
  {
    title: 'Transcript-backed',
    description: 'Full searchable HTML transcripts for every tutorial.',
    icon: FileText,
  },
  {
    title: 'Source-governed',
    description: 'Every capability links to authoritative technical documentation.',
    icon: GitMerge,
  },
];

export default function VideoTutorialPrinciplesSection() {
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
      <div className="size-[520px] left-[1085px] top-[225px] absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Built on five learning principles.
        </h2>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {PRINCIPLES.map((principle, index) => {
          const Icon = principle.icon;
          return (
            <div
              key={index}
              className="p-6 bg-slate-50 rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-200 flex flex-col justify-start items-start gap-4 hover:shadow-md transition-shadow"
            >
              <div className="size-10 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-center items-center bg-white">
                <Icon className="w-5 h-5 text-blue-500" />
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
