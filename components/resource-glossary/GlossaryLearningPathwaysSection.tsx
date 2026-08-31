import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import bg20 from '@/public/images/resource-glossary/bg (21).png';
import path6 from '@/public/images/resource-glossary/Pathway-Image (6).png';
import path7 from '@/public/images/resource-glossary/Pathway-Image (7).png';
import path8 from '@/public/images/resource-glossary/Pathway-Image (8).png';
import path9 from '@/public/images/resource-glossary/Pathway-Image (9).png';

const PATHWAYS = [
  {
    title: 'Architecture Guides',
    description:
      'System design patterns, failure thresholds, and global delivery pipelines.',
    href: '/resource-architecture',
    image: path6,
  },
  {
    title: 'Video Tutorials',
    description:
      'Step-by-step walkthroughs covering RTMP, SRT, and direct WebRTC setup.',
    href: '/resource-video-tutorial',
    image: path7,
  },
  {
    title: 'Developer Docs',
    description:
      'Complete API specs, integration snippets, and multi-platform native SDK parameters.',
    href: '/developer-documentation',
    image: path8,
  },
  {
    title: 'Help Center',
    description:
      'Knowledge base covering connection context resolution and debugging procedures.',
    href: '/contact-us',
    image: path9,
  },
];

export default function GlossaryLearningPathwaysSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-slate-900/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Image - bg (20).png */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg20}
          alt="Related Learning Pathways Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[60.80px]">
          Related learning pathways.
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
          Explore authoritative guides, architecture docs, tutorials, and developer resources.
        </p>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PATHWAYS.map((pathway, index) => (
          <div
            key={index}
            className="bg-gray-800/80 rounded-2xl border-l border-r border-t-4 border-b border-gray-800 border-t-teal-400 flex flex-col justify-start items-start overflow-hidden hover:border-t-teal-300 transition-all group"
          >
            <div className="relative w-full h-32 bg-gray-900 overflow-hidden">
              <Image
                src={pathway.image}
                alt={pathway.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-5 flex flex-col justify-between items-start gap-4 flex-1">
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-base font-bold font-['Space_Grotesk']">
                  {pathway.title}
                </h3>
                <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-5">
                  {pathway.description}
                </p>
              </div>

              <Link
                href={pathway.href}
                className="inline-flex items-center gap-1 text-teal-400 hover:text-teal-300 transition-colors"
              >
                <span className="text-teal-400 text-sm font-bold font-['Space_Grotesk']">
                  Explore
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-teal-400" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
