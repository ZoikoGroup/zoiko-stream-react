'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function WhereDidItHappenSection() {
  const [productArea, setProductArea] = useState(
    'Playback Player & Live Stream Delivery'
  );
  const [platform, setPlatform] = useState('Web (Standard HTML5 Player)');
  const [accountContext, setAccountContext] = useState(
    'Authenticated User (Pro Tier)'
  );
  const [localeRegion, setLocaleRegion] = useState('North America (US-East)');

  return (
    <section className="relative w-full bg-[#fafbfc] py-16 lg:py-24 overflow-hidden">
      {/* Topographic Contour Background SVG Texture */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-40 overflow-hidden"
        aria-hidden="true"
      >
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
        >
          <g stroke="#0f172a" strokeOpacity="0.06" strokeWidth="1">
            <path d="M-80 80 C 240 0, 520 200, 880 90 S 1280 -10, 1520 100" />
            <path d="M-80 150 C 270 60, 560 260, 920 150 S 1320 50, 1520 160" />
            <path d="M-80 220 C 300 120, 600 320, 960 210 S 1360 110, 1520 220" />
            <path d="M-80 320 C 320 240, 640 400, 1000 300 S 1400 200, 1520 310" />
            <path d="M-80 500 C 230 580, 500 440, 830 540 S 1240 620, 1520 500" />
            <path d="M-80 570 C 260 650, 540 500, 870 610 S 1280 680, 1520 570" />
            <path d="M-80 640 C 290 720, 580 560, 910 680 S 1320 740, 1520 640" />
            <path d="M-80 720 C 310 800, 620 630, 950 750 S 1350 810, 1520 710" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 lg:mb-12">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-[40px] text-slate-900 tracking-tight mb-2.5">
            Where did this happen?
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-inter">
            Help us understand the context. Only fields relevant to your issue category are required.
          </p>
        </div>

        {/* Stacked Form Container */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          {/* Field 1: Product area */}
          <div>
            <label className="block text-slate-800 text-xs sm:text-[13px] font-semibold mb-2 font-inter">
              Product area
            </label>
            <div className="relative">
              <select
                aria-label="Product area"
                value={productArea}
                onChange={(e) => setProductArea(e.target.value)}
                className="w-full appearance-none bg-white border border-slate-200/90 rounded-lg px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-cyan-500 transition-colors shadow-2xs pr-10 cursor-pointer"
              >
                <option value="Playback Player & Live Stream Delivery">
                  Playback Player &amp; Live Stream Delivery
                </option>
                <option value="Media Upload & Video Ingest">
                  Media Upload &amp; Video Ingest
                </option>
                <option value="Developer Platform & REST APIs">
                  Developer Platform &amp; REST APIs
                </option>
                <option value="Account Management & SAML Billing">
                  Account Management &amp; SAML Billing
                </option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Field 2: Platform */}
          <div>
            <label className="block text-slate-800 text-xs sm:text-[13px] font-semibold mb-2 font-inter">
              Platform
            </label>
            <div className="relative">
              <select
                aria-label="Platform"
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="w-full appearance-none bg-white border border-slate-200/90 rounded-lg px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-cyan-500 transition-colors shadow-2xs pr-10 cursor-pointer"
              >
                <option value="Web (Standard HTML5 Player)">
                  Web (Standard HTML5 Player)
                </option>
                <option value="iOS Native SDK (v4.x)">
                  iOS Native SDK (v4.x)
                </option>
                <option value="Android Native SDK (v4.x)">
                  Android Native SDK (v4.x)
                </option>
                <option value="OBS / Hardware SRT Broadcast Ingest">
                  OBS / Hardware SRT Broadcast Ingest
                </option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Field 3: Browser or app version */}
          <div>
            <label className="block text-slate-800 text-xs sm:text-[13px] font-semibold mb-2 font-inter">
              Browser or app version
            </label>
            <input
              type="text"
              placeholder="e.g., Chrome 124.0.5 or iOS App v3.2.1"
              className="w-full bg-white border border-slate-200/90 rounded-lg px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-500 transition-colors shadow-2xs"
            />
          </div>

          {/* Field 4: Page URL */}
          <div>
            <div className="flex items-center mb-2">
              <label className="text-slate-800 text-xs sm:text-[13px] font-semibold font-inter">
                Page URL
              </label>
              <span className="text-slate-400 text-xs font-normal ml-2 font-inter">
                Public URL only — do not paste private/admin URLs
              </span>
            </div>
            <input
              type="text"
              placeholder="https://zoikostream.com/event/..."
              className="w-full bg-white border border-slate-200/90 rounded-lg px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-500 transition-colors shadow-2xs"
            />
          </div>

          {/* Field 5: Asset / Stream / Event reference (Optional) */}
          <div>
            <label className="block text-slate-800 text-xs sm:text-[13px] font-semibold mb-2 font-inter">
              Asset / Stream / Event reference (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g., ID string: ZS-901-44E"
              className="w-full bg-white border border-slate-200/90 rounded-lg px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-500 transition-colors shadow-2xs"
            />
          </div>

          {/* Field 6: Account context */}
          <div>
            <label className="block text-slate-800 text-xs sm:text-[13px] font-semibold mb-2 font-inter">
              Account context
            </label>
            <div className="relative">
              <select
                aria-label="Account context"
                value={accountContext}
                onChange={(e) => setAccountContext(e.target.value)}
                className="w-full appearance-none bg-white border border-slate-200/90 rounded-lg px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-cyan-500 transition-colors shadow-2xs pr-10 cursor-pointer"
              >
                <option value="Authenticated User (Pro Tier)">
                  Authenticated User (Pro Tier)
                </option>
                <option value="Enterprise Administrator (Dedicated SLA)">
                  Enterprise Administrator (Dedicated SLA)
                </option>
                <option value="Anonymous / Public Viewer">
                  Anonymous / Public Viewer
                </option>
                <option value="Developer Sandbox Account">
                  Developer Sandbox Account
                </option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Field 7: Locale / Region */}
          <div>
            <label className="block text-slate-800 text-xs sm:text-[13px] font-semibold mb-2 font-inter">
              Locale / Region
            </label>
            <div className="relative">
              <select
                aria-label="Locale / Region"
                value={localeRegion}
                onChange={(e) => setLocaleRegion(e.target.value)}
                className="w-full appearance-none bg-white border border-slate-200/90 rounded-lg px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-cyan-500 transition-colors shadow-2xs pr-10 cursor-pointer"
              >
                <option value="North America (US-East)">
                  North America (US-East)
                </option>
                <option value="North America (US-West)">
                  North America (US-West)
                </option>
                <option value="Europe (EU-Central)">
                  Europe (EU-Central)
                </option>
                <option value="Asia Pacific (AP-Southeast)">
                  Asia Pacific (AP-Southeast)
                </option>
                <option value="Global CDN Distributed Edge">
                  Global CDN Distributed Edge
                </option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Field 8: When did it happen? (Timezone-aware) */}
          <div>
            <label className="block text-slate-800 text-xs sm:text-[13px] font-semibold mb-2 font-inter">
              When did it happen? (Timezone-aware)
            </label>
            <input
              type="text"
              placeholder="e.g., Today, 10:45 AM PST"
              className="w-full bg-white border border-slate-200/90 rounded-lg px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-500 transition-colors shadow-2xs"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
