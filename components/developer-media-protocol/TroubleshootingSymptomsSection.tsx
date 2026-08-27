import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import { CircleDot } from 'lucide-react';

const connSymptoms = [
  'Endpoint resolution failure',
  'Network unreachable / socket offline',
  'TLS/certificate handshake error',
  'Authentication rejected',
  'Protocol negotiation mismatch',
  'Firewall/NAT blocking UDP/TCP rules',
];

const mediaSymptoms = [
  'Connected but no media flowing',
  'Unstable ingest / severe quality drops',
  'Aggressive packet loss & retransmission',
  'Encoder drops socket unexpectedly',
  'Bitrate or codec configuration mismatch',
  'Active session terminated by remote',
];

const platformSymptoms = [
  'Ingestion pipeline processing delays',
  'Global distribution latency or outages',
  'System incident detected & verified',
  'Regional cluster degradation',
  'Scheduled server/service maintenance',
  'Platform-wide operational alerts',
];

export function TroubleshootingSymptomsSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
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
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold leading-tight">
            Know whether the problem is connection, media contribution, or platform health
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Design troubleshooting around symptoms and evidence. System incidents route to System Status — the page must not suggest local reconfiguration when platform status explains failure.
          </p>
        </div>

        {/* 3 Category Cards Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: Connection & Handshake */}
          <div className="p-6 bg-blue-50 rounded-xl border border-blue-200 flex flex-col justify-between gap-5 shadow-xs">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <h3 className="text-slate-900 text-lg font-bold   ">
                  Connection &amp; Handshake
                </h3>
                <span className="px-2.5 py-1 bg-blue-500/10 rounded-full border border-blue-500/30 text-blue-600 text-[10px] font-bold    uppercase">
                  CONNECTION
                </span>
              </div>
              <div className="flex flex-col gap-2.5">
                {connSymptoms.map((sym, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CircleDot className="w-3 h-3 text-blue-500 flex items-center justify-center shrink-0" />
                    <span className="text-slate-600 text-xs">{sym}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-blue-200 flex flex-col gap-1">
              <span className="text-slate-900 text-xs font-bold   ">RECOMMENDED ACTION</span>
              <span className="text-slate-600 text-xs">
                Check endpoint, credentials, and firewall path
              </span>
            </div>
          </div>

          {/* Card 2: Media Contribution */}
          <div className="p-6 bg-amber-50 rounded-xl border border-amber-200 flex flex-col justify-between gap-5 shadow-xs">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <h3 className="text-slate-900 text-lg font-bold   ">
                  Media Contribution
                </h3>
                <span className="px-2.5 py-1 bg-amber-500/10 rounded-full border border-amber-500/30 text-amber-600 text-[10px] font-bold    uppercase">
                  MEDIA
                </span>
              </div>
              <div className="flex flex-col gap-2.5">
                {mediaSymptoms.map((sym, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CircleDot className="w-3 h-3 text-amber-500 flex items-center justify-center shrink-0" />
                    <span className="text-slate-600 text-xs">{sym}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-amber-200 flex flex-col gap-1">
              <span className="text-slate-900 text-xs font-bold   ">RECOMMENDED ACTION</span>
              <span className="text-slate-600 text-xs">
                Verify encoder settings, keyframes, and local quality
              </span>
            </div>
          </div>

          {/* Card 3: Platform Health */}
          <div className="p-6 bg-red-50 rounded-xl border border-red-200 flex flex-col justify-between gap-5 shadow-xs">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <h3 className="text-slate-900 text-lg font-bold   ">
                  Platform Health
                </h3>
                <span className="px-2.5 py-1 bg-red-500/10 rounded-full border border-red-500/30 text-red-600 text-[10px] font-bold    uppercase">
                  PLATFORM
                </span>
              </div>
              <div className="flex flex-col gap-2.5">
                {platformSymptoms.map((sym, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CircleDot className="w-3 h-3 text-red-500 flex items-center justify-center shrink-0" />
                    <span className="text-slate-600 text-xs">{sym}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-red-200 flex flex-col gap-1">
              <span className="text-slate-900 text-xs font-bold   ">RECOMMENDED ACTION</span>
              <span className="text-slate-600 text-xs">
                Check System Status page and platform telemetry logs
              </span>
            </div>
          </div>
        </div>

        {/* Symptom Assistant Dropdown & CTAs */}
        <div className="w-full flex flex-col items-center gap-6 pt-4">
          <div className="flex flex-col items-center gap-2">
            <span className="text-slate-600 text-sm font-semibold">Symptom Quick Assistant</span>
            <div className="w-full sm:w-[560px] px-5 py-3 bg-slate-50 rounded-lg border border-gray-200 flex justify-between items-center text-slate-900 text-base cursor-pointer">
              <span>Select your symptom...</span>
              <span className="text-slate-600 text-xs">▾</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center cursor-pointer shadow-md">
              <span className="text-slate-950 text-base font-bold   ">Open Stream monitoring</span>
            </div>
            <div className="px-7 py-3.5 rounded-lg border border-slate-400 text-slate-900 font-bold    text-center cursor-pointer hover:border-slate-900 transition-colors">
              Error handling docs
            </div>
            <div className="px-7 py-3.5 rounded-lg border border-slate-400 text-slate-900 font-bold    text-center cursor-pointer hover:border-slate-900 transition-colors">
              System status page
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
