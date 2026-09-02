import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import { AlertCircle, ChartLine, GraduationCap, TextQuote, User, Wrench } from 'lucide-react';

const STEPS = [
  {
    num: '1',
    title: 'Customer Context',
    desc: 'Who they are, their market position, scale, and operational realities.',
    icon: User,
  },
  {
    num: '2',
    title: 'The Turning Point',
    desc: 'Why change became necessary and the critical streaming challenges faced.',
    icon: AlertCircle,
  },
  {
    num: '3',
    title: 'The Approach',
    desc: 'How they adopted ZoikoStream, customized architecture, and integrated SDKs.',
    icon: Wrench,
  },
  {
    num: '4',
    title: 'What Changed',
    desc: 'Measurable performance outcomes, reliability improvements, and concrete metrics.',
    icon: ChartLine
  },
  {
    num: '5',
    title: 'In Their Words',
    desc: 'Verbatim, approved feedback from engineering leads and stakeholders.',
    icon: TextQuote,
  },
  {
    num: '6',
    title: 'Lessons for Peers',
    desc: 'Key technical takeaways and implementation advice for other teams.',
    icon: GraduationCap,
  },
];

export default function ResourceCustomerStoriesStructureSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-14 bg-white overflow-hidden z-10">
      {/* Background Snippet */}
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
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4 max-w-4xl">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[60px]">
          What you will find in every story
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
          Each customer story follows a structured narrative so you can understand context, journey, outcomes, and lessons.
        </p>
      </div>

      {/* 6 Steps Timeline / Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 items-start">
        {STEPS.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={idx} className="flex flex-col justify-start items-start gap-4 w-full">
              <div className="w-full flex items-center gap-2">
                <div className="size-8 bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl flex justify-center items-center shrink-0">
                  <span className="text-white text-xs font-bold font-['Space_Grotesk']">
                    {step.num}
                  </span>
                </div>
                <div className="flex-1 h-0.5 bg-gray-200" />
              </div>

              <div className="flex flex-col justify-start items-start gap-2">
                <div className="flex items-center gap-2">
                  <Icon className="size-4 text-teal-400 shrink-0" />
                  <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                    {step.title}
                  </h3>
                </div>

                <p className="text-slate-600 text-sm font-normal font-['Space_Grotesk'] leading-6">
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
