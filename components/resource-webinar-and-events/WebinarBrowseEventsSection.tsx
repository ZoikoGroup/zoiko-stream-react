import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

import thumb0 from '@/public/images/resource-webinar-and-events/Thumbnail.png';
import thumb1 from '@/public/images/resource-webinar-and-events/Thumbnail (1).png';
import thumb2 from '@/public/images/resource-webinar-and-events/Thumbnail (2).png';
import thumb3 from '@/public/images/resource-webinar-and-events/Thumbnail (3).png';
import thumb4 from '@/public/images/resource-webinar-and-events/Thumbnail (4).png';
import thumb5 from '@/public/images/resource-webinar-and-events/Thumbnail (5).png';

const EVENTS = [
  {
    status: 'Upcoming',
    statusBg: 'bg-teal-400 text-slate-950',
    date: 'Sep 15, 2026 · 10:00 AM PT',
    title: 'Architecting Zero-Latency Live Pipelines',
    description:
      'Design low-latency ingest paths and edge routing strategies for real-time interactive broadcasts.',
    tags: ['Architecture', 'Engineers'],
    image: thumb0,
  },
  {
    status: 'Live Now',
    statusBg: 'bg-red-500 text-white',
    date: 'Active Broadcast',
    title: 'Real-Time Analytics Dashboard Workshop',
    description:
      'Build a live monitoring stack to track viewer health, latency, and stream performance in real-time.',
    tags: ['Workshop', 'Data'],
    image: thumb1,
  },
  {
    status: 'Replay',
    statusBg: 'bg-blue-500 text-white',
    date: 'Recorded Session',
    title: 'Video Encoding Best Practices',
    description:
      'Mastering bitrate ladders, latency optimization, and multi-codec delivery for modern streaming.',
    tags: ['Technical', 'Media'],
    image: thumb2,
  },
  {
    status: 'Upcoming',
    statusBg: 'bg-teal-400 text-slate-950',
    date: 'Oct 03, 2026 · 1:00 PM PT',
    title: 'Multi-Region Failover Patterns',
    description:
      'Implementing active-active redundancy across regions to ensure zero-fail live event delivery.',
    tags: ['Reliability', 'Ops'],
    image: thumb3,
  },
  {
    status: 'Replay',
    statusBg: 'bg-blue-500 text-white',
    date: 'Recorded Session',
    title: 'Content Delivery at Scale',
    description:
      'Scaling edge delivery for massive concurrent audiences while maintaining high quality and low latency.',
    tags: ['CDN', 'Scale'],
    image: thumb4,
  },
  {
    status: 'Upcoming',
    statusBg: 'bg-teal-400 text-slate-950',
    date: 'Oct 20, 2026 · 9:00 AM PT',
    title: 'Stream Security & Access Control',
    description:
      'Implement SAML SSO, token-based authentication, and secure stream routing for enterprise events.',
    tags: ['Security', 'Enterprise'],
    image: thumb5,
  },
];

export default function WebinarBrowseEventsSection() {
  return (
    <section
      id="browse-events"
      className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-14 bg-white overflow-hidden"
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
      <div className="size-[520px] left-[1072px] top-[746px] absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Browse all events
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Explore the full catalog of upcoming sessions, live events, and replays.
        </p>
      </div>

      {/* Events Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {EVENTS.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative w-full h-44 bg-slate-200 overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full p-5 flex flex-col justify-between items-start gap-3 flex-1">
              <div className="w-full flex justify-between items-center">
                <div className={`px-2 py-1 ${event.statusBg} rounded-sm flex items-center gap-1`}>
                  {event.status === 'Live Now' && (
                    <div className="size-1.5 bg-white rounded-full animate-pulse" />
                  )}
                  <span className="text-xs font-bold font-['Space_Grotesk']">
                    {event.status}
                  </span>
                </div>
                <span className="text-slate-600 text-xs font-normal font-['Inter']">
                  {event.date}
                </span>
              </div>

              <h3 className="text-slate-900 text-xl font-bold font-['Space_Grotesk'] leading-6 line-clamp-2">
                {event.title}
              </h3>
              <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-5 line-clamp-2">
                {event.description}
              </p>

              <div className="flex items-center gap-2">
                {event.tags.map((tag, tIndex) => (
                  <div
                    key={tIndex}
                    className="px-2 py-1 bg-slate-50 rounded-sm outline outline-1 outline-offset-[-1px] outline-gray-200"
                  >
                    <span className="text-slate-600 text-xs font-semibold font-['Inter']">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="#details"
                  className="text-teal-600 hover:text-teal-700 text-xs font-bold font-['Space_Grotesk'] transition-colors"
                >
                  View Details →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
