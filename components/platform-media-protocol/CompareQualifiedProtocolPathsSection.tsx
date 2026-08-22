'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, CheckCircle2, ArrowRight } from 'lucide-react';

const protocols = [
  {
    name: 'RTMPS',
    badge: 'VERIFIED',
    badgeClass: 'bg-emerald-500/10 text-emerald-500',
    subtitle: 'Encrypted contribution over RTMP tunneled via TLS',
    direction: 'Source → Platform Ingress',
    qualifications: [
      'Strict TLS 1.2+ handshake mandatory',
      'TCP Port 443 destination open',
      'Static stream-key with token parameters',
      'AAC-LC and H.264 video codec payload only',
    ],
  },
  {
    name: 'SRT',
    badge: 'VERIFIED WITH CONDITIONS',
    badgeClass: 'bg-amber-500/10 text-amber-500',
    subtitle: 'Reliable UDP-based transport with forward error correction',
    direction: 'Source ⇄ Platform Gateway',
    qualifications: [
      'Caller/Listener configuration matched',
      'FEC (Forward Error Correction) matrix configured',
      'AES-128 or AES-256 pre-shared key verified',
      'High-packet-loss threshold telemetry monitored',
    ],
  },
  {
    name: 'WHIP',
    badge: 'VERIFIED',
    badgeClass: 'bg-emerald-500/10 text-emerald-500',
    subtitle: 'WebRTC-based HTTP ingest for real-time browser contribution',
    direction: 'Browser → Ingest Service',
    qualifications: [
      'Whip endpoint HTTPS POST offer authorized',
      'STUN/TURN network negotiation qualified',
      'Opus audio & VP8/H.264 video dynamic fallback',
      'Sub-second contribution profile required',
    ],
  },
];

export default function CompareQualifiedProtocolPathsSection() {
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState('All Connection Jobs');

  const tags = [
    'All Connection Jobs',
    'Source: Hardware & Software',
    'Uptime Target: High-Availability',
    'AES Encryption',
  ];

  return (
    <section className="relative w-full bg-gray-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-media-protocol/bg (91).png"
          alt="Compare Protocols Background"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-3 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white">
            Compare qualified protocol paths
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-normal font-['Space_Grotesk'] max-w-3xl">
            Every visible protocol comes from a complete approved registry record with verified ownership and review date.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="p-6 bg-gray-900/90 rounded-xl border border-gray-800 flex flex-col gap-5 backdrop-blur-md mb-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Search className="size-4 text-slate-400 shrink-0" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Filter protocols by connection context..."
                className="w-full sm:w-80 bg-transparent text-slate-300 text-base font-normal   focus:outline-hidden"
              />
            </div>
            <span className="text-teal-400 text-sm font-bold font-['Space_Grotesk'] shrink-0">
              3 VERIFIED PATHS FOUND
            </span>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            {tags.map((t, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedTag(t)}
                className={`px-3.5 py-2 rounded-full text-xs font-bold font-['Space_Grotesk'] transition-colors ${
                  selectedTag === t
                    ? 'bg-teal-400 text-slate-950'
                    : 'bg-gray-800 text-slate-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Protocol Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {protocols.map((p, idx) => (
            <div
              key={idx}
              className="bg-gray-900/90 rounded-2xl border border-gray-800 flex flex-col justify-between p-6 gap-6 backdrop-blur-md hover:border-teal-400/40 transition-colors group"
            >
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-white text-2xl font-bold font-['Space_Grotesk']">
                    {p.name}
                  </h3>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold font-['Space_Grotesk'] ${p.badgeClass}`}>
                    {p.badge}
                  </span>
                </div>

                <p className="text-slate-400 text-sm font-normal   leading-relaxed">
                  {p.subtitle}
                </p>

                <div className="flex items-center gap-2">
                  <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk']">
                    DIRECTION:
                  </span>
                  <span className="text-white text-xs font-normal  ">
                    {p.direction}
                  </span>
                </div>

                <div className="pt-4 border-t border-gray-800 flex flex-col gap-2.5">
                  <span className="text-slate-400 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
                    KEY QUALIFICATIONS
                  </span>
                  {p.qualifications.map((q, qIdx) => (
                    <div key={qIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="size-3.5 text-teal-400 shrink-0" />
                      <span className="text-slate-400 text-xs font-normal   truncate">
                        {q}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/sdks"
                className="w-full py-2.5 rounded-lg border border-gray-800 text-white text-center text-sm font-bold font-['Space_Grotesk'] group-hover:border-teal-400/60 group-hover:text-teal-400 transition-all flex items-center justify-center gap-2"
              >
                <span>View technical profile</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
