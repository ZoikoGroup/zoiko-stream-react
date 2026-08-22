import React from 'react';
import Image from 'next/image';

import bg127 from '@/public/images/secure-enterprise/bg (128).png';
import visual1 from '@/public/images/secure-enterprise/bg (136).png';
import visual2 from '@/public/images/secure-enterprise/bg (129).png';
import visual3 from '@/public/images/secure-enterprise/bg (131).png';
import visual14 from '@/public/images/secure-enterprise/bg (130).png';

const persistenceCards = [
  {
    title: 'Live Event Access',
    tag: 'LIVE PHASE',
    desc: 'Live stream access governed by real-time SSO and active session posture checks.',
    image: visual1,
  },
  {
    title: 'Immediate DVR/Replay',
    tag: 'TRANSITION PHASE',
    desc: 'Instant VOD compilation inherits live access tokens without overexposure or public exposure.',
    image: visual2,
  },
  {
    title: 'Archival Persistence',
    tag: 'STORAGE PHASE',
    desc: 'Encrypted master retention policies prevent unauthorized playback on archived assets.',
    image:visual14,
  },
  {
    title: 'Retention & Expiration',
    tag: 'LIFECYCLE PHASE',
    desc: 'Automated token dissolution and retention policies purge expired access rights.',
    image: visual3,
  },
];

export default function LiveToReplayPersistenceSection() {
  return (
    <section className="relative w-full bg-gray-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg127}
          alt="Live to Replay Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        {/* Title */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white leading-tight">
            Policy persistence: From live stream to replay archive
          </h2>
          <p className="text-slate-400 text-lg font-normal font-['Inter'] leading-relaxed max-w-3xl">
            Protect controlled media access throughout the transition from active ingestion to durable, audited archives.
          </p>
        </div>

        {/* 3-Step Lifecycle Transition Bar */}
        <div className="p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 backdrop-blur-md flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center text-center gap-2 flex-1">
            <span className="px-3 py-1 bg-red-500/10 border border-red-500 text-red-500 text-xs font-bold font-['Space_Grotesk'] rounded-full">
              LIVE INGEST
            </span>
            <h4 className="text-white text-sm font-bold font-['Space_Grotesk']">Active Stream Ingest</h4>
            <p className="text-slate-400 text-xs font-normal font-['Inter']">Policy: Strict SSO + Geo-fence</p>
          </div>

          <div className="w-16 h-0.5 bg-teal-400 shrink-0 hidden md:block" />

          <div className="flex flex-col items-center text-center gap-2 flex-1">
            <span className="px-3 py-1 bg-amber-500/10 border border-amber-500 text-amber-500 text-xs font-bold font-['Space_Grotesk'] rounded-full">
              COMPILING VOD
            </span>
            <h4 className="text-white text-sm font-bold font-['Space_Grotesk']">Transcoding &amp; Archiving</h4>
            <p className="text-slate-400 text-xs font-normal font-['Inter']">Policy: Inheritance Sandbox</p>
          </div>

          <div className="w-16 h-0.5 bg-teal-400 shrink-0 hidden md:block" />

          <div className="flex flex-col items-center text-center gap-2 flex-1">
            <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500 text-emerald-500 text-xs font-bold font-['Space_Grotesk'] rounded-full">
              SECURE REPLAY
            </span>
            <h4 className="text-white text-sm font-bold font-['Space_Grotesk']">On-Demand Distribution</h4>
            <p className="text-slate-400 text-xs font-normal font-['Inter']">Policy: Explicit Re-verification</p>
          </div>
        </div>

        {/* 4 Feature Cards Grid with Thumbnails */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {persistenceCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/90 rounded-2xl border border-gray-800 backdrop-blur-md overflow-hidden flex flex-col hover:border-gray-700 transition-all duration-300 group"
            >
              {/* Card Image Thumbnail */}
              <div className="relative w-full h-36 bg-zinc-950 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-white text-base font-bold font-['Space_Grotesk']">
                    {card.title}
                  </h3>
                  <span className="text-teal-400 text-[10px] font-bold font-['Space_Grotesk']">
                    {card.tag}
                  </span>
                </div>

                <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
