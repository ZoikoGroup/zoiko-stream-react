import React from 'react';
import Image from 'next/image';

const domains = [
  {
    title: 'Administrative & Service Access',
    desc: 'Controlled identity, least authority, credential safety, and evidence for every privileged action.',
    image: '/images/platform-media-security/card-image (12).png',
  },
  {
    title: 'Media & Data Protection',
    desc: 'Scoped encryption, key custody, processing exceptions, and state-specific evidence.',
    image: '/images/platform-media-security/card-image (13).png',
  },
  {
    title: 'Audience & Playback Security',
    desc: 'Authorization decisions, session context, content protection, and revocation where supported.',
    image: '/images/platform-media-security/card-image (14).png',
  },
  {
    title: 'Network & Delivery Security',
    desc: 'Transport protection, dependency boundaries, geographic scope, and recovery security.',
    image: '/images/platform-media-security/card-image (15).png',
  },
  {
    title: 'Operational Governance',
    desc: 'Change control, secure development lifecycle, vulnerability handling, and incident boundaries.',
    image: '/images/platform-media-security/card-image (16).png',
  },
  {
    title: 'Evidence & Assurance',
    desc: 'Trust Center authority, current certifications, scoped audit evidence, and review freshness.',
    image: '/images/platform-media-security/card-image (17).png',
  },
];

export default function SixControlDomainsSection() {
  return (
    <section className="relative w-full bg-gray-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-media-security/bg (99).png"
          alt="Control Domains Background"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gray-950/75" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white">
            What is protected — six control domains
          </h2>
          <p className="text-slate-400 text-lg font-normal font-['Space_Grotesk'] leading-relaxed max-w-3xl">
            Scoped controls with applicability states, not a universal checklist.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((dom, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/80 rounded-xl border border-gray-800 overflow-hidden flex flex-col backdrop-blur-md hover:border-teal-400/40 transition-all group"
            >
              <div className="relative w-full h-40 bg-slate-800">
                <Image
                  src={dom.image}
                  alt={dom.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="text-white text-lg font-bold font-['Space_Grotesk'] group-hover:text-teal-400 transition-colors">
                    {dom.title}
                  </h3>
                  <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-500 rounded border border-emerald-500/20 text-xs font-bold font-mono uppercase tracking-wide shrink-0">
                    SCOPED
                  </span>
                </div>
                <p className="text-slate-400 text-base font-normal font-['Inter'] leading-relaxed">
                  {dom.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
