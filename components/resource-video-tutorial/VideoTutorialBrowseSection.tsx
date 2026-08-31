import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg8 from '@/public/images/resource-videotutorial/bg (8).png';

import card17 from '@/public/images/resource-videotutorial/card-image (17).png';
import card18 from '@/public/images/resource-videotutorial/card-image (18).png';
import card19 from '@/public/images/resource-videotutorial/card-image (19).png';
import card20 from '@/public/images/resource-videotutorial/card-image (20).png';
import card21 from '@/public/images/resource-videotutorial/card-image (21).png';
import card22 from '@/public/images/resource-videotutorial/card-image (22).png';
import { Play } from 'lucide-react';

const TUTORIALS = [
  {
    duration: '12 min',
    category: 'Live Streaming',
    categoryColor: 'text-indigo-600',
    updated: 'Updated Aug 2026',
    title: 'Getting Started with Live Streaming',
    description:
      'Set up your first live stream from contribution to playback with monitoring and recording.',
    image: card17,
  },
  {
    duration: '18 min',
    category: 'VOD',
    categoryColor: 'text-slate-700',
    updated: 'Updated Aug 2026',
    title: 'VOD Processing Pipeline Setup',
    description:
      'Configure ingest, transcoding, storage, and delivery for video-on-demand workflows.',
    image: card18,
  },
  {
    duration: '15 min',
    category: 'Real-Time',
    categoryColor: 'text-slate-700',
    updated: 'Updated Aug 2026',
    title: 'Real-Time Contribution Configuration',
    description:
      'Establish low-latency contribution paths from remote sources into your production environment.',
    image: card19,
  },
  {
    duration: '10 min',
    category: 'Security',
    categoryColor: 'text-slate-700',
    updated: 'Updated Aug 2026',
    title: 'Secure Token-Based Playback',
    description:
      'Implement signed URLs, token validation, and DRM for protected content delivery.',
    image: card20,
  },
  {
    duration: '14 min',
    category: 'Operations',
    categoryColor: 'text-slate-700',
    updated: 'Updated Aug 2026',
    title: 'Stream Health Monitoring Dashboard',
    description:
      'Build operational dashboards with alerts, event-driven monitoring, and analytics.',
    image: card21,
  },
  {
    duration: '22 min',
    category: 'Enterprise',
    categoryColor: 'text-slate-700',
    updated: 'Updated Aug 2026',
    title: 'Enterprise Multi-Tenant Setup',
    description:
      'Configure isolated environments, governance controls, and regional distribution.',
    image: card22,
  },
];

export default function VideoTutorialBrowseSection() {
  return (
    <section
      id="tutorials"
      className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-slate-900/90 border-b border-gray-800 flex flex-col justify-start items-start gap-10 overflow-hidden"
    >
      {/* Background Image - bg (8).png */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg8}
          alt="Browse Video Tutorials Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Browse all video tutorials.
        </h2>
        <p className="text-white text-base sm:text-lg font-normal font-['Space_Grotesk']">
          Every tutorial is captioned, transcript-backed, and linked to authoritative technical documentation.
        </p>
      </div>

      {/* Filter and Sort header */}
      <div className="relative z-10 w-full pb-4 border-b border-slate-600 flex flex-wrap justify-between items-center gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <button className="px-4 py-2 bg-teal-400 rounded-full text-slate-950 text-xs font-bold font-['Space_Grotesk']">
            All
          </button>
          <button className="px-4 py-2 bg-slate-50 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-200 text-indigo-600 text-xs font-bold font-['Space_Grotesk'] hover:bg-slate-100 transition-colors">
            Live Streaming
          </button>
          <button className="px-4 py-2 bg-slate-50 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-200 text-slate-700 text-xs font-bold font-['Space_Grotesk'] hover:bg-slate-100 transition-colors">
            VOD
          </button>
          <button className="px-4 py-2 bg-slate-50 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-200 text-slate-700 text-xs font-bold font-['Space_Grotesk'] hover:bg-slate-100 transition-colors">
            Real-Time
          </button>
          <button className="px-4 py-2 bg-slate-50 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-200 text-slate-700 text-xs font-bold font-['Space_Grotesk'] hover:bg-slate-100 transition-colors">
            Security
          </button>
          <button className="px-4 py-2 bg-slate-50 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-200 text-slate-700 text-xs font-bold font-['Space_Grotesk'] hover:bg-slate-100 transition-colors">
            Operations
          </button>
          <button className="px-4 py-2 bg-slate-50 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-200 text-slate-700 text-xs font-bold font-['Space_Grotesk'] hover:bg-slate-100 transition-colors">
            Enterprise
          </button>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-white text-sm font-bold font-['Space_Grotesk']">
            Sort: Recently updated ▾
          </span>
          <span className="text-white text-sm font-bold font-['Space_Grotesk'] uppercase">
            24 TUTORIALS FOUND
          </span>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TUTORIALS.map((item, index) => (
          <div
            key={index}
            className="bg-slate-50 rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-200 flex flex-col justify-start items-start overflow-hidden group hover:shadow-lg transition-shadow"
          >
            <div className="relative w-full h-44 bg-slate-200 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3 px-2 py-1 bg-black/70 rounded-sm flex items-center gap-1">
                <Play className="w-3 h-3 text-white fill-white" />
                <span className="text-white text-xs font-bold font-['Space_Grotesk']">
                  {item.duration}
                </span>
              </div>
            </div>

            <div className="w-full p-6 flex flex-col justify-between items-start gap-3 flex-1">
              <div className="w-full flex justify-between items-center">
                <div className="px-2 py-0.5 bg-emerald-500/10 rounded-sm">
                  <span className={`text-xs font-bold font-['Space_Grotesk'] ${item.categoryColor}`}>
                    {item.category}
                  </span>
                </div>
                <span className="text-slate-500 text-xs font-bold font-['Space_Grotesk']">
                  {item.updated}
                </span>
              </div>

              <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk'] group-hover:text-indigo-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-5">
                {item.description}
              </p>

              <div className="w-full pt-3 flex justify-start items-center">
                <Link
                  href="#watch"
                  className="text-slate-700 hover:text-slate-900 text-sm font-bold font-['Space_Grotesk'] transition-colors"
                >
                  Watch tutorial →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
