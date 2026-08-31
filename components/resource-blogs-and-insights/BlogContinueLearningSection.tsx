import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import {  Video, Code, NotepadText, Grid3X3 } from 'lucide-react';

const LEARNING_RESOURCES = [
  {
    title: 'Guides & Manuals',
    description:
      'In-depth deployment blueprints, configuration files, and architectural SOPs.',
    href: '/live-event-guide',
    icon: NotepadText,
  },
  {
    title: 'Architecture Library',
    description:
      'Visual reference schemas for global CDNs and resilient ingest networks.',
    href: '/resource-architecture',
    icon: Grid3X3,
  },
  {
    title: 'Video Tutorials',
    description:
      'Step-by-step walkthroughs of stream setups, metrics, and failure diagnostics.',
    href: '/resource-video-tutorial',
    icon: Video,
  },
  {
    title: 'Developer Docs',
    description:
      'API endpoints, native wrapper schemas, and interactive sandbox code.',
    href: '/developer-documentation',
    icon: Code,
  },
];

export default function BlogContinueLearningSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-12 bg-white overflow-hidden">
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
          Continue learning
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Complement our editorial insights with structural reference documents and live code.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {LEARNING_RESOURCES.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="p-6 bg-slate-50 rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-200 flex flex-col justify-between items-start gap-5 hover:shadow-md transition-shadow"
            >
              <div className="size-9 bg-blue-500/10 rounded-md flex justify-center items-center">
                <Icon className="w-5 h-5 text-blue-500" />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-5">
                  {item.description}
                </p>
              </div>

              <Link
                href={item.href}
                className="text-blue-500 hover:text-blue-600 text-xs font-bold font-['Space_Grotesk'] transition-colors"
              >
                View resource →
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
