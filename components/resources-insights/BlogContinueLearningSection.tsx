import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import lightBgPattern from '@/public/images/Organization-overview/bg (147).png';
import { BookOpen, Layers, Briefcase, Video, GitMerge, Activity, Code, ShieldCheck } from 'lucide-react';

const LEARNING_JOURNEYS = [
  {
    title: 'Guides',
    description: 'Step-by-step implementation and operation guidance.',
    icon: BookOpen,
  },
  {
    title: 'Architecture',
    description: 'Reference patterns, system design, and architecture guidance.',
    icon: Layers,
  },
  {
    title: 'Case Studies',
    description: 'Evidence-led implementation and customer proof.',
    icon: Briefcase,
  },
  {
    title: 'Events & Webinars',
    description: 'Scheduled and on-demand sessions and event learning.',
    icon: Video,
  },
  {
    title: 'Changelog',
    description: 'Released implementation-level change history.',
    icon: GitMerge,
  },
  {
    title: 'System Status',
    description: 'Current availability and active incident reports.',
    icon: Activity,
  },
  {
    title: 'Developer Docs',
    description: 'Current technical contracts and API reference.',
    icon: Code,
  },
  {
    title: 'Trust & Security',
    description: 'Security, privacy, and compliance evidence assets.',
    icon: ShieldCheck,
  }
];

export default function BlogContinueLearningSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-100 flex flex-col justify-start items-start gap-12 bg-[#F5F7FF] overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={lightBgPattern}
          alt="Pattern"
          fill
          className="object-cover opacity-50 mix-blend-multiply"
        />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight">
          Continue Your Learning Journey
        </h2>
        <p className="text-slate-500 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Every insight connects to the right authoritative next step across ZoikoStream Resources.
        </p>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {LEARNING_JOURNEYS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="w-full bg-white rounded-2xl outline outline-1 outline-gray-200 p-8 flex flex-col justify-start items-start gap-6 shadow-[0px_4px_20px_0px_rgba(0,0,10,0.03)] hover:shadow-[0px_10px_30px_0px_rgba(0,0,10,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-full flex items-center gap-4">
                <div className="p-2.5 bg-blue-50 rounded-xl flex justify-center items-center">
                  <Icon className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
                  {item.title}
                </h3>
              </div>
              
              <p className="flex-1 text-slate-500 text-sm font-normal font-['Inter'] leading-relaxed">
                {item.description}
              </p>

              <Link
                href="#explore"
                className="text-blue-600 hover:text-blue-700 text-sm font-bold font-['Space_Grotesk'] transition-colors flex items-center gap-1"
              >
                Explore <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
