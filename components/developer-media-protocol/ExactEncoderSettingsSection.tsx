import React from 'react';
import Image from 'next/image';

const rtmpsConfig = [
  { label: 'RTMPS ENDPOINT', val: 'rtmps://ingest.zoiko.stream/live' },
  { label: 'STREAM KEY', val: '[SECRET — copy separately]' },
  { label: 'VIDEO CODEC', val: 'H.264 High Profile' },
  { label: 'AUDIO CODEC', val: 'AAC-LC' },
  { label: 'RESOLUTION', val: 'Up to 1920x1080' },
  { label: 'FRAME RATE', val: '30 or 60 fps' },
  { label: 'BITRATE', val: '3-8 Mbps (CBR)' },
  { label: 'KEYFRAME', val: '2 seconds' },
  { label: 'RECONNECT', val: 'Auto-retry with backoff' },
];

const srtConfig = [
  { label: 'SRT HOST', val: 'srt.ingest.zoiko.stream' },
  { label: 'SRT PORT', val: '9000' },
  { label: 'INGEST MODE', val: 'Caller' },
  { label: 'STREAM ID', val: '[from stream resource]' },
  { label: 'PASSPHRASE', val: '[SECRET]' },
  { label: 'LATENCY', val: '120-250ms (dynamic)' },
  { label: 'ENCRYPTION', val: 'AES-128' },
  { label: 'FEC', val: 'Enabled when supported' },
  { label: 'CODECS', val: 'H.264 / HEVC & AAC' },
];

const whipConfig = [
  { label: 'WHIP ENDPOINT', val: 'https://whip.zoiko.stream/ingest' },
  { label: 'AUTH TYPE', val: 'Bearer Token' },
  { label: 'VIDEO CODECS', val: 'VP8, VP9, or H.264' },
  { label: 'AUDIO CODECS', val: 'Opus' },
  { label: 'ICE NEGOTIATION', val: 'STUN/TURN required' },
  { label: 'SESSION MGMT', val: 'HTTP POST / DELETE' },
  { label: 'MEDIA PROFILE', val: 'Single video + audio' },
  { label: 'TRICKLE ICE', val: 'Fully Supported' },
  { label: 'SIGNALING', val: 'WHEP-aligned standards' },
];

export function ExactEncoderSettingsSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-black border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-media-protocol/bg 14.png"
          alt="Exact Encoder Settings Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-gray-950/90 to-black/5" />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            Use the exact encoder settings for this protocol profile
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Every value has a registry or source pointer and last-verified timestamp. Never validate against invented ranges. If the product cannot validate, label as &apos;Check encoder and current protocol requirements.&apos;
          </p>
        </div>

        {/* 3 Config Cards Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Card 1: RTMPS */}
          <div className="p-8 bg-slate-50 rounded-2xl border border-gray-200 flex flex-col justify-between gap-6 shadow-md">
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center">
                <h3 className="text-slate-900 text-xl font-bold   ">RTMPS Config</h3>
                <span className="px-2.5 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/30 text-teal-600 text-xs font-bold   ">
                  STABLE
                </span>
              </div>
              <div className="w-full h-px bg-gray-200" />

              <div className="flex flex-col divide-y divide-gray-200 text-xs">
                {rtmpsConfig.map((item, idx) => (
                  <div key={idx} className="py-2 flex justify-between items-center">
                    <span className="text-slate-600    font-bold">{item.label}</span>
                    <span className="text-slate-900    truncate max-w-[180px]">
                      {item.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
              <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center cursor-pointer shadow-md">
                <span className="text-slate-950 text-base font-bold   ">
                  Copy configuration
                </span>
              </div>
              <span className="text-slate-600 text-xs text-center   ">
                Last verified: 2024-06-15
              </span>
            </div>
          </div>

          {/* Card 2: SRT */}
          <div className="p-8 bg-slate-50 rounded-2xl border border-gray-200 flex flex-col justify-between gap-6 shadow-md">
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center">
                <h3 className="text-slate-900 text-xl font-bold   ">SRT Config</h3>
                <span className="px-2.5 py-1 bg-blue-500/10 rounded-full border border-blue-500/30 text-blue-600 text-xs font-bold   ">
                  RESILIENT
                </span>
              </div>
              <div className="w-full h-px bg-gray-200" />

              <div className="flex flex-col divide-y divide-gray-200 text-xs">
                {srtConfig.map((item, idx) => (
                  <div key={idx} className="py-2 flex justify-between items-center">
                    <span className="text-slate-600    font-bold">{item.label}</span>
                    <span className="text-slate-900    truncate max-w-[180px]">
                      {item.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
              <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center cursor-pointer shadow-md">
                <span className="text-slate-950 text-base font-bold   ">
                  Copy configuration
                </span>
              </div>
              <span className="text-slate-600 text-xs text-center   ">
                Last verified: 2024-06-15
              </span>
            </div>
          </div>

          {/* Card 3: WHIP */}
          <div className="p-8 bg-slate-50 rounded-2xl border border-gray-200 flex flex-col justify-between gap-6 shadow-md">
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center">
                <h3 className="text-slate-900 text-xl font-bold   ">WHIP Config</h3>
                <span className="px-2.5 py-1 bg-orange-500/10 rounded-full border border-orange-500/30 text-orange-600 text-xs font-bold   ">
                  SUB-SECOND
                </span>
              </div>
              <div className="w-full h-px bg-gray-200" />

              <div className="flex flex-col divide-y divide-gray-200 text-xs">
                {whipConfig.map((item, idx) => (
                  <div key={idx} className="py-2 flex justify-between items-center">
                    <span className="text-slate-600    font-bold">{item.label}</span>
                    <span className="text-slate-900    truncate max-w-[180px]">
                      {item.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
              <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center cursor-pointer shadow-md">
                <span className="text-slate-950 text-base font-bold   ">
                  Copy configuration
                </span>
              </div>
              <span className="text-slate-600 text-xs text-center   ">
                Last verified: 2024-06-15
              </span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="w-full flex justify-center pt-4">
          <div className="px-7 py-3.5 rounded-lg border border-slate-400 text-white font-bold    cursor-pointer hover:border-white transition-colors">
            Download verified preset
          </div>
        </div>
      </div>
    </section>
  );
}
