import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg3 from '@/public/images/resources-system-status/section-3bg.png';
import cardImg0 from '@/public/images/resources-system-status/card-image-top.png';
import cardImg1 from '@/public/images/resources-system-status/card-image-top (1).png';

const INCIDENTS = [
  {
    id: 'INC-2895',
    status: 'Monitoring',
    statusStyle: 'bg-amber-500/10 text-amber-500 outline-amber-500/30',
    title: 'Elevated latency on Real-Time Analytics API',
    affected: 'Real-Time Analytics',
    timeLabel: 'Started',
    timeValue: 'Aug 27, 2026 at 11:45 UTC',
    description:
      'The engineering team has implemented a fix and is monitoring telemetry parameters to ensure baseline latency profiles are fully restored.',
    image: cardImg0,
  },
  {
    id: 'INC-2811',
    status: 'Resolved',
    statusStyle: 'bg-emerald-500/10 text-emerald-500 outline-emerald-500/30',
    title: 'Intermittent webhook delivery delays',
    affected: 'Webhook Delivery',
    timeLabel: 'Resolved',
    timeValue: 'Aug 26, 2026 at 10:58 UTC',
    description:
      'Our upstream queue buffers experienced a transient spike. Internal automation scaled out active consumers and flushed outstanding jobs safely.',
    image: cardImg1,
  },
];

export default function StatusActiveIncidentsSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-28 bg-slate-900/75 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg3}
          alt="Active Incidents Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Active incidents
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Current public incident communications with timestamps and affected services.
        </p>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {INCIDENTS.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-start items-start overflow-hidden hover:outline-teal-400/50 transition-all group"
          >
            <div className="relative w-full h-40 bg-gray-950 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-full p-6 sm:p-8 flex flex-col justify-start items-start gap-4 flex-1">
              <div className="w-full flex justify-between items-center">
                <div className={`px-2.5 py-1 rounded-full outline outline-1 outline-offset-[-1px] ${item.statusStyle}`}>
                  <span className="text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wide">
                    {item.status}
                  </span>
                </div>
                <span className="text-slate-400 text-xs font-bold font-['Space_Grotesk']">
                  INCIDENT ID: {item.id}
                </span>
              </div>

              <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
                {item.title}
              </h3>

              <div className="flex flex-col justify-start items-start gap-1">
                <div className="text-sm font-normal font-['Inter']">
                  <span className="text-white font-bold">Affected: </span>
                  <span className="text-slate-400">{item.affected}</span>
                </div>
                <div className="text-sm font-normal font-['Inter']">
                  <span className="text-white font-bold">{item.timeLabel}: </span>
                  <span className="text-slate-400">{item.timeValue}</span>
                </div>
              </div>

              <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed">
                {item.description}
              </p>

              <div className="w-full pt-4 border-t border-gray-800">
                <Link
                  href="#incident-report"
                  className="text-teal-400 hover:text-teal-300 text-sm font-bold font-['Space_Grotesk'] transition-colors"
                >
                  View incident →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
