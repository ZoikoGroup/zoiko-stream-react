import React from 'react';
import Image from 'next/image';
import { Info } from 'lucide-react';

import bg9 from '@/public/images/resource-help-center/section-9bg (2).png';
import img75 from '@/public/images/resource-help-center/card-image (75).png';
import img76 from '@/public/images/resource-help-center/card-image (76).png';
import img77 from '@/public/images/resource-help-center/card-image (77).png';

const EVENTS_HELP = [
  {
    title: 'Pre-Event Planning',
    description:
      'Establish transmission failover, signal redundancy paths, local venue parameters, and hot standbys.',
    image: img75,
  },
  {
    title: 'Live Event Support',
    description:
      'Access verified live support engineers, direct signal telemetry, and hot backup manual triggers.',
    image: img76,
  },
  {
    title: 'Post-Event Review',
    description:
      'Retrieve multi-angle capture files, administrative logs, attendance records, and archival reports.',
    image: img77,
  },
];

export default function HelpCenterLiveEventsSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-gray-950/75 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg9}
          alt="Live Events Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Live Events support
        </h2>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {EVENTS_HELP.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-start items-start overflow-hidden hover:outline-teal-400/50 transition-all group"
          >
            <div className="relative w-full h-36 bg-gray-950 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-6 flex flex-col justify-start items-start gap-3 flex-1">
              <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Operational Routing Banner */}
      <div className="relative z-10 w-full px-6 py-4 bg-zinc-900 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 flex items-center gap-3 shadow-md">
        <Info className="w-5 h-5 text-teal-400 shrink-0" />
        <p className="text-sm font-normal font-['Inter'] leading-relaxed">
          <span className="text-white font-bold">Operational Routing: </span>
          <span className="text-slate-400">
            Planning workflows should move to the Live Events Guide. For live active-stream emergencies, always check System Status or contact the hot-standby engineering desk directly.
          </span>
        </p>
      </div>
    </section>
  );
}
