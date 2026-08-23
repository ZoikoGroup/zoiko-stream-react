import React from 'react';
import Image from 'next/image';

import bg109 from '@/public/images/Broadcast-globally/bg (109).png';
import { Check } from 'lucide-react';

export default function AccessRoutingComparisonSection() {
  return (
    <section className="relative w-full bg-slate-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg109}
          alt="Access Routing Background"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-white leading-tight">
            How public and controlled audiences differ
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Public Access */}
          <div className="p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 backdrop-blur-md flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="size-2.5 bg-teal-400 rounded-full" />
              <h3 className="text-white text-xl font-bold  ">
                Public access routing
              </h3>
            </div>
            <p className="text-slate-400 text-sm font-normal   leading-relaxed">
              Designed for global scale where access barrier is zero. Optimizes edge cache performance and delivers HLS playlist redundancy at the lowest possible latency bounds.
            </p>

            <div className="flex flex-col gap-3 text-slate-400 text-xs font-normal  ">
              <div className="flex items-center gap-2">
                <Check className="size-2.5 text-teal-400 " />
                <span>Open playback without token validation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="size-2.5 text-teal-400 " />
                <span>Globally distributed multi-CDN edge caching</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="size-2.5 text-teal-400 " />
                <span>Unrestricted anonymous tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="size-2.5 text-teal-400 " />
                <span>High-concurrency traffic priority</span>
              </div>
            </div>
          </div>

          {/* Card 2: Controlled Access */}
          <div className="p-8 bg-zinc-900/80 rounded-2xl border border-blue-500 backdrop-blur-md flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="size-2.5 bg-blue-500 rounded-full" />
              <h3 className="text-white text-xl font-bold  ">
                Controlled access routing
              </h3>
            </div>
            <p className="text-slate-400 text-sm font-normal   leading-relaxed">
              Strict boundary enforcement. Active token verification gating at the edge before media playlists serve. Best for corporate governance and paid media events.
            </p>

            <div className="flex flex-col gap-3 text-slate-400 text-xs font-normal  ">
              <div className="flex items-center gap-2">
                <Check className="size-2.5 text-blue-500 " />
                <span>SAML SSO / OAuth 2.0 gateway integration</span>
              </div>
              <div className="flex items-center gap-2">
  <Check className="size-2.5 text-blue-500 " />
                <span>Dynamic token-gated DRM verification</span>
              </div>
              <div className="flex items-center gap-2">
  <Check className="size-2.5 text-blue-500 " />
                <span>Real-time geographic &amp; domain blocklists</span>
              </div>
              <div className="flex items-center gap-2">
  <Check className="size-2.5 text-blue-500 " />
                <span>Granular administrative telemetry audits</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Policy Bar */}
        <div className="flex flex-col gap-4">
          <span className="text-teal-400 text-sm font-bold   uppercase tracking-wide">
            ACTIVE ACCESS CONTROL POLICIES IN EFFECT
          </span>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="p-5 bg-gray-800 rounded-lg flex flex-col gap-2">
              <span className="text-slate-400 text-xs font-bold   uppercase tracking-wider">
                AUTHENTICATION
              </span>
              <span className="text-white text-sm font-bold  ">
                SAML SSO / JWT
              </span>
            </div>

            <div className="p-5 bg-gray-800 rounded-lg flex flex-col gap-2">
              <span className="text-slate-400 text-xs font-bold   uppercase tracking-wider">
                ENCRYPTION
              </span>
              <span className="text-white text-sm font-bold  ">
                AES-128 / Widevine
              </span>
            </div>

            <div className="p-5 bg-gray-800 rounded-lg flex flex-col gap-2">
              <span className="text-slate-400 text-xs font-bold   uppercase tracking-wider">
                GEO-RESTRICTIONS
              </span>
              <span className="text-white text-sm font-bold  ">
                EU / NA Only
              </span>
            </div>

            <div className="p-5 bg-gray-800 rounded-lg flex flex-col gap-2">
              <span className="text-slate-400 text-xs font-bold   uppercase tracking-wider">
                DEVICE POLICY
              </span>
              <span className="text-white text-sm font-bold  ">
                HDCP-1.4+ Enforcement
              </span>
            </div>

            <div className="p-5 bg-gray-800 rounded-lg flex flex-col gap-2">
              <span className="text-slate-400 text-xs font-bold   uppercase tracking-wider">
                TOKEN EXPIRY
              </span>
              <span className="text-white text-sm font-bold  ">
                Strict 120 min rolling
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
