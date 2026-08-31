import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import bg2 from '@/public/images/resources-architecture/bg (2).png';

const COMPARISONS = [
  {
    pattern: 'Live Streaming',
    objective: 'Global scale low latency distribution',
    latency: '~2-5 seconds',
    latencyColor: 'text-teal-400',
    complexity: 'Moderate',
    security: 'Public edge CDN authentication',
    bestFit: 'Marketing / Broadcast',
  },
  {
    pattern: 'VOD Pipeline',
    objective: 'Durable packaging & playback asset',
    latency: 'N/A (Playback)',
    latencyColor: 'text-slate-400',
    complexity: 'Low',
    security: 'Storage bucket rules, signed URLs',
    bestFit: 'On-Demand libraries',
  },
  {
    pattern: 'Real-Time Contrib.',
    objective: 'Sub-second interactive collaboration',
    latency: '< 500ms',
    latencyColor: 'text-teal-400',
    complexity: 'High',
    security: 'WebRTC mesh protocol handshakes',
    bestFit: 'App-integrated video',
  },
  {
    pattern: 'Secure Playback',
    objective: 'Strict authorized access pipelines',
    latency: '~2-8 seconds',
    latencyColor: 'text-slate-400',
    complexity: 'High',
    security: 'SAML SSO identity verification',
    bestFit: 'Enterprise internal',
  },
];

export default function ArchitectureCompareSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-28 bg-slate-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Image - bg (2) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg2}
          alt="Resource Architecture Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Compare patterns before you commit.
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Understand the trade-offs between architecture patterns to make an informed decision.
        </p>
      </div>

      <div className="relative z-10 w-full p-4 sm:p-6 bg-gray-800/80 rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-start items-start overflow-x-auto">
        <div className="min-w-[800px] w-full flex flex-col">
          {/* Header Row */}
          <div className="p-4 bg-slate-900 border-b-2 border-gray-700 flex justify-start items-center gap-3">
            <div className="w-44 text-white text-xs font-bold font-['Space_Grotesk'] uppercase">
              Pattern
            </div>
            <div className="flex-1 text-white text-xs font-bold font-['Space_Grotesk'] uppercase">
              Primary Objective
            </div>
            <div className="w-28 text-white text-xs font-bold font-['Space_Grotesk'] uppercase">
              Latency
            </div>
            <div className="w-28 text-white text-xs font-bold font-['Space_Grotesk'] uppercase">
              Complexity
            </div>
            <div className="flex-1 text-white text-xs font-bold font-['Space_Grotesk'] uppercase">
              Security Boundary
            </div>
            <div className="w-36 text-white text-xs font-bold font-['Space_Grotesk'] uppercase">
              Best Fit
            </div>
          </div>

          {/* Table Data Rows */}
          {COMPARISONS.map((row, index) => (
            <div
              key={index}
              className={`p-4 flex justify-start items-center gap-3 ${
                index < COMPARISONS.length - 1 ? 'border-b border-gray-800' : ''
              }`}
            >
              <div className="w-44 text-white text-sm font-bold font-['Space_Grotesk']">
                {row.pattern}
              </div>
              <div className="flex-1 text-slate-400 text-xs font-normal font-['Inter'] leading-5">
                {row.objective}
              </div>
              <div className={`w-28 text-xs font-normal font-['Inter'] ${row.latencyColor}`}>
                {row.latency}
              </div>
              <div className="w-28 text-slate-400 text-xs font-normal font-['Inter']">
                {row.complexity}
              </div>
              <div className="flex-1 text-slate-400 text-xs font-normal font-['Inter'] leading-5">
                {row.security}
              </div>
              <div className="w-36 text-slate-400 text-xs font-normal font-['Inter']">
                {row.bestFit}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full flex justify-center items-center">
        <Link
          href="/contact-us"
          className="text-teal-400 hover:text-teal-300 text-base font-bold font-['Space_Grotesk'] transition-colors"
        >
          Need help choosing? Talk to an Expert →
        </Link>
      </div>
    </section>
  );
}
