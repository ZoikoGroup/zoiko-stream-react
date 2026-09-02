import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import img9 from '@/public/images/developers/section9image.png';

const LAYERS = [
  {
    tag: 'Audience / application context',
    desc: 'Who or what is requesting playback',
    bg: 'bg-indigo-50',
    tagColor: 'text-cyan-900',
    descColor: 'text-cyan-900',
  },
  {
    tag: 'Identity / entitlement',
    desc: 'Is this viewer recognized and entitled',
    bg: 'bg-emerald-50',
    tagColor: 'text-teal-800',
    descColor: 'text-teal-800',
  },
  {
    tag: 'Policy decision',
    desc: 'What access rule applies',
    bg: 'bg-fuchsia-100',
    tagColor: 'text-fuchsia-900',
    descColor: 'text-fuchsia-900',
  },
  {
    tag: 'Playback authorization',
    desc: 'Token or signed access issued',
    bg: 'bg-orange-100',
    tagColor: 'text-yellow-900',
    descColor: 'text-yellow-900',
  },
  {
    tag: 'Player / viewer outcome',
    desc: 'Playback succeeds or fails closed',
    bg: 'bg-zinc-900',
    tagColor: 'text-slate-100',
    descColor: 'text-slate-100',
  },
];

export default function DevelopersTrustBoundariesSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-12 bg-slate-100 overflow-hidden">
      {/* Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-blue-500 rounded-[3px]" />
          <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
            KEEP TRUST BOUNDARIES EXPLICIT
          </span>
        </div>
        <h2 className="text-zinc-900 text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] leading-tight">
          Protect playback without burying access decisions inside the player.
        </h2>
        <p className="text-gray-500 text-sm font-normal font-['Inter'] leading-relaxed max-w-2xl">
          The overview explains boundaries; child pages own supported mechanisms.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Stacked Layer Cards */}
        <div className="flex flex-col gap-4">
          {LAYERS.map((l, idx) => (
            <div
              key={idx}
              className={`w-full p-5 ${l.bg} rounded-[10px] flex flex-col gap-1 shadow-xs`}
            >
              <span className={`${l.tagColor} text-xs font-semibold font-['IBM_Plex_Mono'] uppercase tracking-wide`}>
                {l.tag}
              </span>
              <span className={`${l.descColor} text-xs font-normal font-['Inter']`}>
                {l.desc}
              </span>
            </div>
          ))}

          <div className="flex flex-wrap items-center gap-4 pt-3">
            <Link
              href="/developer-secure-playback"
              className="px-6 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-[10px] text-slate-950 text-base font-semibold font-['Inter'] hover:opacity-90 transition-opacity"
            >
              Explore Secure playback
            </Link>
            <Link
              href="/developer-player-integrations"
              className="px-6 py-3.5 bg-zinc-100 rounded-[10px] outline outline-1 outline-gray-800 text-zinc-900 text-base font-semibold font-['Inter'] hover:bg-zinc-200 transition-colors"
            >
              Player integration
            </Link>
          </div>
        </div>

        {/* Right Protected Preview Card */}
        <div className="relative w-full h-80 bg-black rounded-2xl overflow-hidden shadow-lg group">
          <Image
            src={img9}
            alt="Protected Stream Preview"
            fill
            className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-xs rounded-full">
            <span className="text-teal-400 text-xs font-normal font-['IBM_Plex_Mono']">
              PROTECTED
            </span>
          </div>

          <div className="absolute inset-0 flex justify-center items-center">
            <div className="size-12 bg-white/20 rounded-3xl outline outline-1 outline-white/40 backdrop-blur-[2px] flex justify-center items-center">
              <span className="text-white text-lg font-normal font-['Inter']">▶</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
