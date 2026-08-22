import React from 'react';
import Image from 'next/image';

import bg116 from '@/public/images/accessible-multilingual/bg (116).png';

const multilingualTracks = [
  { mode: 'Live Stream', type: 'Audio Translation', source: 'English (US)', target: 'Spanish (ES-MX)', status: 'Available', statusStyle: 'bg-emerald-500/10 text-emerald-500', review: 'AI + Human Post-Live', evidence: 'Verified 99.8% Sync Score' },
  { mode: 'VOD Replay', type: 'Closed Captions', source: 'French (FR)', target: 'English (UK)', status: 'Available with Review', statusStyle: 'bg-blue-500/10 text-blue-500', review: 'Double Pass Edit', evidence: 'WCAG AA Compliant Logs' },
  { mode: 'Live Stream', type: 'Subtitles', source: 'German (DE)', target: 'Japanese (JA)', status: 'Enterprise-Assisted', statusStyle: 'bg-amber-500/10 text-amber-500', review: 'Real-time Native Edit', evidence: 'SLA Guaranteed Track' },
  { mode: 'VOD Replay', type: 'Audio Description', source: 'English (US)', target: 'English (US-AD)', status: 'Planned', statusStyle: 'bg-amber-500/10 text-amber-500', review: 'Script Draft Phase', evidence: 'Release Scheduled Apr 2026' },
  { mode: 'Live Stream', type: 'Sign-Language overlay', source: 'Spanish (ES)', target: 'LSE Sign Track', status: 'Not Available', statusStyle: 'bg-red-500/10 text-red-500', review: 'N/A', evidence: 'Request Custom Broadcaster' },
];

const locales = [
  { name: 'English (United States)', id: 'en-US', active: true },
  { name: 'Español (América Latina)', id: 'es-419', active: false },
  { name: 'Français (Europe)', id: 'fr-FR', active: false },
  { name: 'Deutsch (Deutschland)', id: 'de-DE', active: false },
  { name: 'Português (Brasil)', id: 'pt-BR', active: false },
  { name: 'English (United States)', id: 'en-US', active: false },
];

export default function MultilingualVideoTableSection() {
  return (
    <section className="relative w-full  text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg116}
          alt="Multilingual Video Background"
          fill
          className="object-cover "
        />
        <div className="absolute inset-0 bg-slate-950/80" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-white leading-tight">
            Multilingual Video
          </h2>
          <p className="text-slate-400 text-lg font-normal   leading-relaxed max-w-3xl">
            Language tracks, locales, and viewer choice
          </p>
        </div>

        {/* Multilingual Tracks Table */}
        <div className="bg-zinc-900 rounded-2xl border border-gray-800 backdrop-blur-md overflow-hidden flex flex-col">
          <div className="p-4 bg-slate-900 border-b border-gray-800 grid grid-cols-12 gap-3 text-white text-xs font-bold  ">
            <span className="col-span-2">Media Mode</span>
            <span className="col-span-2">Track Type</span>
            <span className="col-span-2">Source Lang</span>
            <span className="col-span-2">Target Lang</span>
            <span className="col-span-2">Status</span>
            <span className="col-span-2">Review Mode</span>
          </div>

          <div className="flex flex-col divide-y divide-gray-800">
            {multilingualTracks.map((tr, idx) => (
              <div key={idx} className="p-4 grid grid-cols-12 gap-3 items-center text-xs  ">
                <span className="col-span-2 text-white font-semibold">{tr.mode}</span>
                <span className="col-span-2 text-slate-400 font-normal">{tr.type}</span>
                <span className="col-span-2 text-white font-normal">{tr.source}</span>
                <span className="col-span-2 text-teal-400 font-normal">{tr.target}</span>
                <div className="col-span-2 flex items-center">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold   uppercase ${tr.statusStyle}`}>
                    {tr.status}
                  </span>
                </div>
                <span className="col-span-2 text-slate-400 font-normal">{tr.review}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Viewer Channel Choose Box */}
        <div className="p-8 bg-zinc-900 rounded-2xl border border-gray-800 flex flex-col gap-6">
          <span className="text-white text-sm font-bold   tracking-wide">
            VIEWER CHANNEL CHOOSE WORKFLOW
          </span>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {locales.map((loc, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-xl border flex flex-col justify-between gap-2 ${
                  loc.active
                    ? 'bg-gray-800 border-teal-400'
                    : 'bg-gray-950 border-gray-800'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className={`text-base font-bold   ${loc.active ? 'text-teal-400' : 'text-white'}`}>
                    {loc.name}
                  </span>
                  {loc.active && <div className="size-2 bg-teal-400 rounded-full shrink-0" />}
                </div>
                <span className="text-slate-400 text-xs font-normal  ">
                  Locale ID: {loc.id}
                </span>
              </div>
            ))}
          </div>

          <div className="p-4 bg-gray-800 rounded-lg flex items-center gap-3">
            <span className="text-teal-400 font-bold   text-xs">Note on localization standards:</span>
            <p className="text-slate-400 text-xs font-normal  ">
              No flags as language identifiers. Languages represent linguistic communities, not sovereign borders. Locales are always mapped using human-readable native language tags.
            </p>
          </div>
        </div>

        <div className="flex justify-center pt-2">
          <button
            type="button"
            className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold   hover:opacity-90 transition-opacity"
          >
            Check Language Availability
          </button>
        </div>
      </div>
    </section>
  );
}
