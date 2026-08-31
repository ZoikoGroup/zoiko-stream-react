import React from 'react';
import Image from 'next/image';
import { Search, CheckCircle, ArrowRight } from 'lucide-react';

import bg19 from '@/public/images/resource-glossary/Section — Protocol Comparison.png';
import cardVis0 from '@/public/images/resource-glossary/card-visual.png';
import cardVis1 from '@/public/images/resource-glossary/card-visual (1).png';
import cardVis2 from '@/public/images/resource-glossary/card-visual (2).png';

const PROTOCOLS = [
  {
    name: 'RTMPS',
    status: 'VERIFIED',
    statusBg: 'bg-emerald-500/10 text-emerald-500',
    description: 'Encrypted contribution over RTMP tunneled via TLS',
    direction: 'Source → Platform Ingest',
    qualifications: [
      'Strict TLS 1.2+ handshake mandatory',
      'TCP Port 443 destination open',
      'Static stream-key with token parameters',
      'AAC-LC and H.264 video codec payload only',
    ],
    image: cardVis0,
  },
  {
    name: 'SRT',
    status: 'VERIFIED WITH CONDITIONS',
    statusBg: 'bg-amber-500/10 text-amber-500',
    description: 'Reliable UDP-based transport with forward error correction',
    direction: 'Source ⇄ Platform Gateway',
    qualifications: [
      'Caller/Listener configuration matched',
      'FEC (Forward Error Correction) matrix configured',
      'AES-128 or AES-256 pre-shared key verified',
      'High-packet-loss threshold telemetry monitored',
    ],
    image: cardVis1,
  },
  {
    name: 'WHIP',
    status: 'VERIFIED',
    statusBg: 'bg-emerald-500/10 text-emerald-500',
    description: 'WebRTC-based HTTP ingest for real-time browser contribution',
    direction: 'Browser → Ingest Service',
    qualifications: [
      'Whip endpoint HTTPS POST offer authorized',
      'STUN/TURN network negotiation qualified',
      'Opus audio & VP8/H.264 video dynamic fallback',
      'Sub-second contribution profile required',
    ],
    image: cardVis2,
  },
];

export default function GlossaryProtocolCompareSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-slate-900/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Overlay - bg (19).png */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg19}
          alt="Protocol Compare Background"
          fill
          className="object-cover "
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[60px]">
          Compare qualified protocol paths
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
          Every visible protocol comes from a complete approved registry record with verified ownership and review date.
        </p>
      </div>

      {/* Filter Box */}
      <div className="relative z-10 w-full p-6 bg-gray-800 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-start items-start gap-5">
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-3">
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <span className="text-slate-400 text-base font-normal font-['Inter']">
              Filter protocols by connection context...
            </span>
          </div>
          <span className="text-teal-400 text-sm font-bold font-['Space_Grotesk']">
            3 VERIFIED PATHS FOUND
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="px-3.5 py-2 bg-teal-400 rounded-full">
            <span className="text-slate-950 text-xs font-bold font-['Space_Grotesk']">
              All Connection Jobs
            </span>
          </div>
          <div className="px-3.5 py-2 bg-gray-800 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-700">
            <span className="text-slate-400 text-xs font-bold font-['Space_Grotesk']">
              Source: Hardware &amp; Software
            </span>
          </div>
          <div className="px-3.5 py-2 bg-gray-800 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-700">
            <span className="text-slate-400 text-xs font-bold font-['Space_Grotesk']">
              Uptime Target: High-Availability
            </span>
          </div>
          <div className="px-3.5 py-2 bg-gray-800 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-700">
            <span className="text-slate-400 text-xs font-bold font-['Space_Grotesk']">
              AES Encryption
            </span>
          </div>
        </div>
      </div>

      {/* 3 Protocol Cards */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROTOCOLS.map((protocol, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-start items-start overflow-hidden hover:outline-teal-400/50 transition-all"
          >
            <div className="relative w-full h-36 bg-gray-900 overflow-hidden">
              <Image
                src={protocol.image}
                alt={protocol.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="w-full p-6 flex flex-col justify-start items-start gap-5 flex-1">
              <div className="w-full flex justify-between items-center">
                <h3 className="text-white text-2xl font-bold font-['Space_Grotesk']">
                  {protocol.name}
                </h3>
                <div className={`px-2.5 py-1 ${protocol.statusBg} rounded-full`}>
                  <span className="text-xs font-bold font-['Space_Grotesk'] uppercase">
                    {protocol.status}
                  </span>
                </div>
              </div>

              <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-5">
                {protocol.description}
              </p>

              <div className="flex items-center gap-2">
                <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase">
                  DIRECTION:
                </span>
                <span className="text-white text-xs font-normal font-['Inter']">
                  {protocol.direction}
                </span>
              </div>

              <div className="w-full pt-4 border-t border-gray-800 flex flex-col justify-start items-start gap-2.5">
                <span className="text-slate-400 text-xs font-bold font-['Space_Grotesk'] tracking-wide uppercase">
                  KEY QUALIFICATIONS
                </span>
                {protocol.qualifications.map((q, qIndex) => (
                  <div key={qIndex} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                    <span className="text-slate-400 text-xs font-normal font-['Inter'] line-clamp-1">
                      {q}
                    </span>
                  </div>
                ))}
              </div>

              <button className="w-full py-2.5 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-700 text-white text-sm font-bold font-['Space_Grotesk'] flex items-center justify-center gap-2 hover:bg-white/5 transition-colors">
                <span>View technical profile</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
