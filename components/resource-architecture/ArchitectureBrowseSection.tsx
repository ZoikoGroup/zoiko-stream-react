import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

import card7 from '@/public/images/resources-architecture/card-image (6).png';
import card8 from '@/public/images/resources-architecture/card-image (7).png';
import card9 from '@/public/images/resources-architecture/card-image (30).png';
import card10 from '@/public/images/resources-architecture/card-image (8).png';
import card6 from '@/public/images/resources-architecture/card-image (9).png';
import card5 from '@/public/images/resources-architecture/card-image (10).png';

const PATTERNS = [
  {
    category: 'LIVE STREAMING',
    title: 'Live Streaming End-to-End Architecture',
    description:
      'Complete contribution-to-playback pipeline for live events with integrated edge delivery, continuous latency tracking, and backup paths.',
    updated: 'Updated Aug 2026',
    image: card7,
  },
  {
    category: 'VOD DELIVERY',
    title: 'VOD Processing and Delivery Pipeline',
    description:
      'Optimized pipeline to ingest, transcode to multiple profiles, securely preserve raw inputs, and distribute on-demand video assets globally.',
    updated: 'Updated July 2026',
    image: card8,
  },
  {
    category: 'REAL-TIME',
    title: 'Real-Time Contribution Architecture',
    description:
      'Low-latency browser-based contribution using WHIP/WebRTC directly feeding live cloud-production mixers and switcher nodes.',
    updated: 'Updated June 2026',
    image: card9,
  },
  {
    category: 'SECURITY',
    title: 'Secure Token-Based Playback',
    description:
      'Strict audience access protection workflow incorporating SAML authentication, ephemeral session keys, and geofencing.',
    updated: 'Updated Aug 2026',
    image: card10,
  },
  {
    category: 'OPERATIONS',
    title: 'Media Operations and Monitoring',
    description:
      'Continuous pipeline latency tracking, real-time fallback protection loops, and comprehensive QoE dashboard integration.',
    updated: 'Updated May 2026',
    image: card6,
  },
  {
    category: 'ENTERPRISE',
    title: 'Enterprise Multi-Tenant Delivery',
    description:
      'Isolated environment provisioning models with absolute tenant boundaries, secure internal CDN routing, and compliance archives.',
    updated: 'Updated Aug 2026',
    image: card5,
  },
];

export default function ArchitectureBrowseSection() {
  return (
    <section
      id="patterns"
      className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-28 border-b border-gray-200 flex flex-col justify-start items-start gap-10 bg-white overflow-hidden"
    >
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
      <div className="size-[520px] left-[1056px] top-[828px] absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Browse all architecture patterns.
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Canonical pattern directory — source-governed, lifecycle-aware, and maintained by architecture owners.
        </p>
      </div>

      {/* Filter and Sort bar */}
      <div className="relative z-10 w-full flex flex-wrap justify-between items-center gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <button className="px-3.5 py-2 bg-teal-400 rounded-full text-slate-950 text-sm font-bold font-['Space_Grotesk']">
            All Patterns
          </button>
          <button className="px-3.5 py-2 bg-slate-50 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-200 text-slate-600 text-sm font-bold font-['Space_Grotesk'] hover:bg-slate-100 transition-colors">
            Live Streaming
          </button>
          <button className="px-3.5 py-2 bg-slate-50 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-200 text-slate-600 text-sm font-bold font-['Space_Grotesk'] hover:bg-slate-100 transition-colors">
            VOD
          </button>
          <button className="px-3.5 py-2 bg-slate-50 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-200 text-slate-600 text-sm font-bold font-['Space_Grotesk'] hover:bg-slate-100 transition-colors">
            Real-Time
          </button>
          <button className="px-3.5 py-2 bg-slate-50 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-200 text-slate-600 text-sm font-bold font-['Space_Grotesk'] hover:bg-slate-100 transition-colors">
            Security
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-slate-600 text-sm font-normal font-['Inter']">
            Sort by:
          </span>
          <div className="px-3 py-1.5 rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 text-slate-900 text-sm font-medium font-['Space_Grotesk'] bg-slate-50">
            Most Recent
          </div>
        </div>
      </div>

      {/* Pattern Cards Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PATTERNS.map((pattern, index) => (
          <div
            key={index}
            className="bg-slate-50 rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-200 flex flex-col justify-start items-start overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative w-full h-44 bg-slate-200 overflow-hidden">
              <Image
                src={pattern.image}
                alt={pattern.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full p-6 flex flex-col justify-between items-start gap-4 flex-1">
              <div className="flex flex-col items-start gap-3">
                <div className="px-2 py-1 bg-blue-500/10 rounded-sm">
                  <span className="text-blue-600 text-xs font-bold font-['Space_Grotesk']">
                    {pattern.category}
                  </span>
                </div>
                <h3 className="text-slate-900 text-xl font-bold font-['Space_Grotesk']">
                  {pattern.title}
                </h3>
                <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-5">
                  {pattern.description}
                </p>
              </div>

              <div className="w-full pt-4 border-t border-gray-200 flex justify-between items-center">
                <span className="text-slate-500 text-xs font-normal font-['Inter']">
                  {pattern.updated}
                </span>
                <Link
                  href="/developer-documentation"
                  className="text-blue-600 hover:text-blue-700 text-sm font-bold font-['Space_Grotesk']"
                >
                  View architecture →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
