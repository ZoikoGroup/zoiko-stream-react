import React from 'react';
import Image from 'next/image';
import { ShieldAlert } from 'lucide-react';

const manifests = [
  {
    path: '/hls/stream_v2_ready.m3u8',
    desc: 'Edge manifest synchronized across global CDN nodes',
    badge: 'READY',
    dotCls: 'bg-emerald-500',
    badgeCls: 'bg-emerald-500/10 text-emerald-500',
  },
  {
    path: '/dash/stream_v2_pending.mpd',
    desc: 'Multiplexing chunk sequence boundaries',
    badge: 'PENDING',
    dotCls: 'bg-amber-500',
    badgeCls: 'bg-amber-500/10 text-amber-500',
  },
  {
    path: '/hls/stream_v1_failed.m3u8',
    desc: 'Discontinuity error at ingest chunk boundary #4021',
    badge: 'FAILED',
    dotCls: 'bg-red-500',
    badgeCls: 'bg-red-500/10 text-red-500',
  },
  {
    path: '/hls/stream_legacy_stale.m3u8',
    desc: 'Ingest source disconnected. Retention policy expired',
    badge: 'STALE',
    dotCls: 'bg-amber-500',
    badgeCls: 'bg-amber-500/10 text-amber-500',
  },
];

const audienceModes = [
  { mode: 'Public', desc: 'No token check required', active: false },
  { mode: 'Controlled', desc: 'SAML SSO authenticated only', active: true },
  { mode: 'Private', desc: 'Strict token validation', active: false},
];

export function SeparateMediaAvailabilitySection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-slate-900/90 border-t border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/quickstart/bg (21).png"
          alt="Separate Media Availability Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0  " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Separate Media Availability From Viewer Authorization
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            A live media ingest state is separate from downstream delivery permission. Every playback manifest is generated with cryptographic signatures that require strict operational verification before client-side loading.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Card: Manifest Generation Stats */}
          <div className="p-8 bg-zinc-900/90 rounded-2xl border border-gray-800 flex flex-col gap-6 shadow-2xl backdrop-blur-md">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <h3 className="text-white text-base font-bold">MANIFEST GENERATION STATS</h3>
              </div>
              <div className="px-2.5 py-1 bg-emerald-500/10 rounded-full flex items-center gap-1.5 border border-emerald-500/20">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-emerald-500 text-xs font-bold uppercase">Active Engine</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {manifests.map((m, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-gray-950 rounded-lg border border-gray-800 flex justify-between items-center gap-3"
                >
                  <div className="flex flex-col gap-1 max-w-[340px]">
                    <span className="text-white text-sm font-mono font-bold">{m.path}</span>
                    <span className="text-slate-400 text-xs font-normal">{m.desc}</span>
                  </div>
                  <div className={`px-2.5 py-1 rounded-full flex items-center gap-1.5 text-xs font-bold uppercase ${m.badgeCls}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${m.dotCls}`} />
                    <span>{m.badge}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Audience Mode & Fail-Closed Standard */}
          <div className="flex flex-col gap-8">
            <div className="p-6 bg-zinc-900/90 rounded-xl border border-gray-800 flex flex-col gap-4 shadow-xl backdrop-blur-md">
              <span className="text-teal-400 text-sm font-bold tracking-wide uppercase">
                AUDIENCE MODE &amp; AUTHORIZATION
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {audienceModes.map((item, idx) => {
                  return (
                    <div
                      key={idx}
                      className={`p-3 rounded-lg border flex flex-col gap-1 transition-all ${
                        item.active
                          ? 'bg-slate-800 border-teal-400'
                          : 'bg-black/0 border-gray-800 hover:border-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="text-white text-sm font-bold">{item.mode}</span>
                      </div>
                      <span className="text-slate-400 text-xs font-normal">{item.desc}</span>
                    </div>
                  );
                })}
              </div>

              {/* Status Checks */}
              <div className="flex flex-col gap-2 pt-2 border-t border-gray-800">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-xs font-normal">Checking Session</span>
                  <div className="px-2.5 py-0.5 bg-amber-500/10 rounded-full flex items-center gap-1.5 text-amber-500 text-xs font-bold uppercase">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                    <span>checking</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-xs font-normal">Signature Verified</span>
                  <div className="px-2.5 py-0.5 bg-emerald-500/10 rounded-full flex items-center gap-1.5 text-emerald-500 text-xs font-bold uppercase">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    <span>success</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-xs font-normal">Token Revoked / Expired</span>
                  <div className="px-2.5 py-0.5 bg-red-500/10 rounded-full flex items-center gap-1.5 text-red-500 text-xs font-bold uppercase">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                    <span>error</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Fail-Closed Box */}
            <div className="p-6 bg-red-900/20 rounded-xl border border-red-900/50 flex flex-col gap-3 shadow-sm">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-red-500 flex-shrink-0" />
                <h3 className="text-red-300 text-sm font-bold">FAIL-CLOSED SECURITY STANDARD</h3>
              </div>
              <p className="text-red-300 text-xs font-normal leading-5">
                If the token validation endpoint times out or drops packets, client playback is immediately denied. Manifest paths are rotated hourly to prevent unauthorized static cache redistribution.
              </p>
            </div>

            <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer shadow-md w-fit">
              <span className="text-gray-900 text-base font-bold">Verify Playback</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
