import React from 'react';
import Image from 'next/image';

import bg158 from '@/public/images/Developers-product-teams/bg (162).png';
import rect6 from '@/public/images/Developers-product-teams/Rectangle  (23).png';
import rect7 from '@/public/images/Developers-product-teams/Rectangle  (22).png';
import rect8 from '@/public/images/Developers-product-teams/Rectangle  (21).png';
import rect9 from '@/public/images/Developers-product-teams/Rectangle  (20).png';

const surfaces = [
  {
    title: 'API Reference',
    desc: 'Authoritative media control logic endpoint definitions.',
    aud: 'Backend Engineers',
    rev: 'Feb 2026',
    status: 'PUBLISHED',
    image: rect6,
  },
  {
    title: 'Web / Mobile SDKs',
    desc: 'Native platform hooks for rapid custom interface bindings.',
    aud: 'Frontend Developers',
    rev: 'Jan 2026',
    status: 'PUBLISHED',
    image: rect7,
  },
  {
    title: 'Media Protocols',
    desc: 'Low latency RTSP/RTMP and WebRTC pipeline sourcing.',
    aud: 'Media Specialists',
    rev: 'Feb 2026',
    status: 'PUBLISHED',
    image: rect8,
  },
  {
    title: 'Webhooks Engine',
    desc: 'Instant downstream event relays back to client servers.',
    aud: 'Platform Engineers',
    rev: 'Feb 2026',
    status: 'PREVIEW',
    image: rect9,
  },
];

export default function AuthoritativeSurfacesSection() {
  return (
    <section className="relative w-full bg-gray-950/75 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg158}
          alt="Authoritative Surfaces Background"
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white leading-tight">
            APIs, SDKs, protocols, webhooks, and product surfaces — each with a clear job.
          </h2>
          <p className="text-slate-400 text-lg font-normal font-['Inter'] leading-relaxed max-w-4xl">
            Use authoritative developer surfaces for control, media movement, playback/access, events, analytics, and integration guidance.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {surfaces.map((s, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/80 rounded-xl border border-gray-800 overflow-hidden flex flex-col group hover:border-gray-700 transition-colors"
            >
              <div className="relative w-full h-32 bg-slate-900 overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5 flex flex-col gap-3 flex-1 justify-between">
                <div className="flex flex-col gap-1">
                  <h3 className="text-white text-base font-bold font-['Space_Grotesk']">
                    {s.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-normal font-['Inter']">
                    {s.desc}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <div className="flex flex-col gap-1 text-xs font-['Inter']">
                    <div>
                      <span className="text-teal-400 font-bold">Audience: </span>
                      <span className="text-slate-400">{s.aud}</span>
                    </div>
                    <div>
                      <span className="text-teal-400 font-bold">Reviewed: </span>
                      <span className="text-slate-400">{s.rev}</span>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-teal-400 text-[10px] font-semibold font-['Inter'] rounded-full">
                    {s.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
