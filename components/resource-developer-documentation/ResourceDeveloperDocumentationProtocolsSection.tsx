'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, CheckCircle2 } from 'lucide-react';
import section7Bg from '@/public/images/resource-developer-documentation/section-7bg.png';

import cardVisual0 from '@/public/images/resource-developer-documentation/card-visual (1).png';
import cardVisual1 from '@/public/images/resource-developer-documentation/card-visual (2).png';
import cardVisual2 from '@/public/images/resource-developer-documentation/card-visual.png';

const PROTOCOLS = [
  {
    name: 'RTMPS',
    status: 'VERIFIED',
    statusStyle: 'bg-emerald-500/10 text-emerald-500',
    desc: 'Encrypted contribution over RTMP tunneled via TLS',
    direction: 'Source → Platform Ingest',
    qualifications: [
      'Strict TLS 1.2+ handshake mandatory',
      'TCP Port 443 destination open',
      'Static stream-key with token parameters',
      'AAC-LC and H.264 video codec payload only',
    ],
    image: cardVisual0,
  },
  {
    name: 'SRT',
    status: 'VERIFIED WITH CONDITIONS',
    statusStyle: 'bg-amber-500/10 text-amber-500',
    desc: 'Reliable UDP-based transport with forward error correction',
    direction: 'Source ⇄ Platform Gateway',
    qualifications: [
      'Caller/Listener configuration matched',
      'FEC (Forward Error Correction) matrix configured',
      'AES-128 or AES-256 pre-shared key verified',
      'High-packet-loss threshold telemetry monitored',
    ],
    image: cardVisual1,
  },
  {
    name: 'WHIP',
    status: 'VERIFIED',
    statusStyle: 'bg-emerald-500/10 text-emerald-500',
    desc: 'WebRTC-based HTTP ingest for real-time browser contribution',
    direction: 'Browser → Ingest Service',
    qualifications: [
      'Whip endpoint HTTPS POST offer authorized',
      'STUN/TURN network negotiation qualified',
      'Opus audio & VP8/H.264 video dynamic fallback',
      'Sub-second contribution profile required',
    ],
    image: cardVisual2,
  },
];

export default function ResourceDeveloperDocumentationProtocolsSection() {
  const [activeFilter, setActiveFilter] = useState<string>('All Connection Jobs');

  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-black border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden z-10">
      {/* Background Image */}
      {section7Bg && (
        <div className="absolute inset-0 pointer-events-none z-0 ">
          <Image src={section7Bg} alt="Background" fill className="object-cover" />
        </div>
      )}

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4 max-w-4xl">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[60px]">
          Compare qualified protocol paths
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
          Every visible protocol comes from a complete approved registry record with verified ownership and review date.
        </p>
      </div>

      {/* Search & Filter Component */}
      <div className="relative z-10 w-full p-6 bg-gray-800 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-start items-start gap-5 shadow-lg">
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Search className="size-4 text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Filter protocols by connection context..."
              className="w-full sm:w-96 bg-transparent text-slate-200 placeholder-slate-400 text-sm font-normal font-['Inter'] focus:outline-none"
            />
          </div>
          <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] tracking-wider shrink-0">
            3 VERIFIED PATHS FOUND
          </span>
        </div>

        {/* Filter Pills */}
        <div className="w-full flex flex-wrap items-center gap-3">
          {[
            'All Connection Jobs',
            'Source: Hardware & Software',
            'Uptime Target: High-Availability',
            'AES Encryption',
          ].map((pill) => (
            <button
              key={pill}
              onClick={() => setActiveFilter(pill)}
              className={`px-3.5 py-2 rounded-[20px] text-xs font-bold font-['Space_Grotesk'] transition-colors ${
                activeFilter === pill
                  ? 'bg-teal-400 text-slate-950'
                  : 'bg-gray-800 text-slate-400 hover:bg-gray-700'
              }`}
            >
              {pill}
            </button>
          ))}
        </div>
      </div>

      {/* 3 Protocol Cards Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
        {PROTOCOLS.map((proto, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-start items-start overflow-hidden hover:outline-gray-700 transition-all shadow-md"
          >
            <div className="relative w-full h-36 bg-gray-900 overflow-hidden">
              <Image
                src={proto.image}
                alt={proto.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="w-full p-6 flex flex-col justify-start items-start gap-5 flex-1">
              <div className="w-full flex justify-between items-center gap-2">
                <h3 className="text-white text-2xl font-bold font-['Space_Grotesk']">
                  {proto.name}
                </h3>
                <span className={`px-2.5 py-1 rounded-[100px] text-xs font-bold font-['Space_Grotesk'] ${proto.statusStyle}`}>
                  {proto.status}
                </span>
              </div>

              <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-5">
                {proto.desc}
              </p>

              <div className="w-full flex items-center gap-2 text-xs">
                <span className="text-teal-400 font-bold font-['Space_Grotesk']">
                  DIRECTION:
                </span>
                <span className="text-white font-normal font-['Inter']">
                  {proto.direction}
                </span>
              </div>

              <div className="w-full pt-4 border-t border-gray-800 flex flex-col gap-2.5 mt-auto">
                <span className="text-slate-400 text-xs font-bold font-['Space_Grotesk'] tracking-wide">
                  KEY QUALIFICATIONS
                </span>
                {proto.qualifications.map((q, qIdx) => (
                  <div key={qIdx} className="flex items-center gap-2 text-xs">
                    <CheckCircle2 className="size-3.5 text-teal-400 shrink-0" />
                    <span className="text-slate-400 font-normal font-['Inter'] line-clamp-1">
                      {q}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/developer-media-protocol"
                className="w-full py-2.5 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 text-white text-sm font-bold font-['Space_Grotesk'] text-center hover:bg-gray-700 transition-colors mt-2"
              >
                View technical profile →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
