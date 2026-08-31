import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import { ExternalLink } from 'lucide-react';

import term0 from '@/public/images/resource-glossary/Term Image.png';
import term1 from '@/public/images/resource-glossary/Term Image (1).png';
import term2 from '@/public/images/resource-glossary/Term Image (2).png';
import term3 from '@/public/images/resource-glossary/Term Image (3).png';
import term4 from '@/public/images/resource-glossary/Term Image (4).png';
import term5 from '@/public/images/resource-glossary/Term Image (5).png';

const FOUNDATIONAL_TERMS = [
  {
    category: 'FOUNDATIONS',
    title: 'Live Stream',
    description:
      'The transmission of real-time video and audio content over the internet as events occur.',
    image: term0,
  },
  {
    category: 'NETWORKS',
    title: 'Latency',
    description:
      "The time delay between when a camera captures a video frame and when it displays on a viewer's screen.",
    image: term1,
  },
  {
    category: 'PROCESSING',
    title: 'Transcoding',
    description:
      'The process of converting a raw ingested video stream into multiple bitrates and resolutions for adaptive playback.',
    image: term2,
  },
  {
    category: 'DELIVERY',
    title: 'CDN',
    description:
      'Content Delivery Network. A globally distributed group of edge servers that cache and deliver video segments rapidly.',
    image: term3,
  },
  {
    category: 'PLAYBACK',
    title: 'Adaptive Bitrate',
    description:
      "A technology that dynamically adjusts video quality in real-time based on the viewer's network bandwidth.",
    image: term4,
  },
  {
    category: 'PROTOCOLS',
    title: 'HLS',
    description:
      'HTTP Live Streaming. An HTTP-based adaptive bitrate streaming communications protocol developed by Apple.',
    image: term5,
  },
];

export default function GlossaryFoundationalTermsSection() {
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

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-gray-950 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Foundational terms.
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          New to streaming? These six concepts form the vocabulary foundation.
        </p>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FOUNDATIONAL_TERMS.map((term, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-[0px_4px_14px_0px_rgba(10,17,34,0.08)] outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative w-full h-36 bg-slate-200 overflow-hidden">
              <Image
                src={term.image}
                alt={term.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full p-6 flex flex-col justify-between items-start gap-4 flex-1">
              <div className="px-2.5 py-1 bg-sky-100 rounded-full flex justify-start items-start">
                <span className="text-blue-700 text-xs font-bold font-['Space_Grotesk']">
                  {term.category}
                </span>
              </div>

              <h3 className="text-gray-950 text-xl font-bold font-['Space_Grotesk']">
                {term.title}
              </h3>
              <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-5">
                {term.description}
              </p>

              <Link
                href="#live-stream"
                className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
              >
                <span className="text-blue-500 text-sm font-bold font-['Space_Grotesk']">
                  Read definition
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-blue-500" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
