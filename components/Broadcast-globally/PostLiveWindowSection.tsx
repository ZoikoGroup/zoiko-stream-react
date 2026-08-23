import React from 'react';
import Image from 'next/image';

import bg111 from '@/public/images/Broadcast-globally/bg (111).png';
import card47 from '@/public/images/Broadcast-globally/card-image (45).png';
import rect111 from '@/public/images/Broadcast-globally/card-image (46).png';
import rect112 from '@/public/images/Broadcast-globally/card-image (47).png';
import { Database } from 'lucide-react';

const postLiveCards = [
  {
    title: 'Recording State',
    tag: 'AUTO-RECORD',
    desc: 'Continuous master archive captures raw source files before transcode loops.',
    image: card47,
  },
  {
    title: 'Replay Availability',
    tag: 'GATEWAYS ONLINE',
    desc: 'Instant VOD availability populated in user playlists within 60 seconds of live end.',
    image: rect111,
  },
  {
    title: 'Storage & Retention',
    tag: 'GLACIER DEEP',
    desc: 'Automated transition policies pass data to cold storage compliance layers after 30 days.',
    image: rect112,
  },
];

export default function PostLiveWindowSection() {
  return (
    <section className="relative w-full bg-slate-950 text-white py-15 md:py-18 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg111}
          alt="Post Live Window Background"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-white leading-tight">
            What happens after the live window closes
          </h2>
        </div>

        {/* 3 Step Connected Process Diagram */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-4">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-[1px] bg-[#3D4B64] -translate-y-6 z-0" />

          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center text-center gap-3">
            <div className="size-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400 shadow-lg">
              <Database className="size-6 text-cyan-400" />
            </div>
            <h3 className="text-white text-base font-bold  ">
              Live Broadcaster
            </h3>
            <p className="text-slate-400 text-xs font-normal  ">
              Active contribution ingest
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center text-center gap-3">
            <div className="size-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400 shadow-lg">
              <Database className="size-6 text-cyan-400" />
            </div>
            <h3 className="text-white text-base font-bold  ">
              Post-Live Transcode
            </h3>
            <p className="text-slate-400 text-xs font-normal  ">
              HLS slice validation and stitch
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center text-center gap-3">
            <div className="size-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400 shadow-lg">
              <Database className="size-6 text-cyan-400" />
            </div>
            <h3 className="text-white text-base font-bold  ">
              Preservation Handover
            </h3>
            <p className="text-slate-400 text-xs font-normal  ">
              Durable regulatory replication
            </p>
          </div>
        </div>

        {/* 3 Post-Live Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {postLiveCards.map((c, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/80 rounded-xl border border-gray-800 backdrop-blur-md overflow-hidden flex flex-col group hover:border-gray-700 transition-colors"
            >
              <div className="relative w-full h-32 bg-zinc-800">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-white text-base font-bold  ">
                    {c.title}
                  </h3>
                  <span className="text-teal-400 text-[10px] font-bold  ">
                    {c.tag}
                  </span>
                </div>
                <p className="text-slate-400 text-xs font-normal   leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
