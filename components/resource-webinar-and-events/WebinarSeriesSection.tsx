import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg13 from '@/public/images/resource-webinar-and-events/bg (13).png';
import thumb6 from '@/public/images/resource-webinar-and-events/Thumbnail (6).png';
import thumb7 from '@/public/images/resource-webinar-and-events/Thumbnail (7).png';
import thumb8 from '@/public/images/resource-webinar-and-events/Thumbnail (8).png';

const SERIES_TRACKS = [
  {
    sessions: '6 Sessions',
    status: 'ACTIVE TRACK',
    title: 'Live Pipeline Masterclass',
    description:
      'Deep technical dive into RTMP ingestion, WebRTC mesh routing, and low-latency global CDN delivery architectures.',
    nextDate: 'Next: Oct 12, 2026',
    image: thumb6,
  },
  {
    sessions: '4 Sessions',
    status: 'ACTIVE TRACK',
    title: 'Video Operations Fundamentals',
    description:
      'Learn the core telemetry and QoS monitoring practices necessary to scale secure corporate town halls flawlessly.',
    nextDate: 'Next: Nov 03, 2026',
    image: thumb7,
  },
  {
    sessions: '8 Sessions',
    status: 'ACTIVE TRACK',
    title: 'Developer Integration Workshop',
    description:
      'Hands-on interactive builder lab covering direct SDK customization, custom media player controls, and websocket chat.',
    nextDate: 'Next: Oct 29, 2026',
    image: thumb8,
  },
];

export default function WebinarSeriesSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-28 bg-slate-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Image - bg (13).png */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg13}
          alt="Follow a Series Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Follow a series. Build expertise session by session.
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Recurring webinar series and structured learning tracks that build on each other across multiple sessions.
        </p>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {SERIES_TRACKS.map((track, index) => (
          <div
            key={index}
            className="bg-gray-800/80 rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-start items-start overflow-hidden hover:outline-teal-400/50 transition-all group"
          >
            <div className="relative w-full h-44 bg-gray-900 overflow-hidden">
              <Image
                src={track.image}
                alt={track.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-full p-6 flex flex-col justify-between items-start gap-4 flex-1">
              <div className="w-full flex justify-between items-center">
                <div className="px-2.5 py-1 bg-emerald-500/10 rounded-full outline outline-1 outline-offset-[-1px] outline-emerald-500/30">
                  <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase">
                    {track.sessions}
                  </span>
                </div>
                <span className="text-teal-400 text-xs font-semibold font-['Inter']">
                  {track.status}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
                  {track.title}
                </h3>
                <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-5">
                  {track.description}
                </p>
              </div>

              <div className="w-full pt-3 border-t border-gray-800 flex justify-between items-center">
                <span className="text-slate-400 text-xs font-normal font-['Inter']">
                  {track.nextDate}
                </span>
                <Link
                  href="#series"
                  className="text-teal-400 hover:text-teal-300 text-xs font-bold font-['Space_Grotesk'] transition-colors"
                >
                  View Series →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
