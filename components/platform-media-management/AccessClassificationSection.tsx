import React from 'react';
import Image from 'next/image';
import {
  ShieldCheck,
  Target,
  KeyRound,
  CheckCircle,
  Video,
  File,
} from 'lucide-react';

const accessCards = [
  {
    title: 'Classification',
    desc: 'Surfaces approved sensitivity reference tiers, resource owner, security scope, and next review date explicitly.',
    icon: ShieldCheck,
  },
  {
    title: 'Audience Intent',
    desc: 'Declared business purpose category mapping where and why the media object is approved for public broadcast.',
    icon: Target,
  },
  {
    title: 'Access Policy',
    desc: "Direct authoritative entitlement parameters linked directly to your organization's OIDC directory state.",
    icon: KeyRound,
  },
  {
    title: 'Authorization State',
    desc: 'Real-time query tracking: not assessed, pending, authorized, restricted, or fully revoked.',
    icon: CheckCircle,
  },
  {
    title: 'Playback Relationship',
    desc: 'Rigorous verification check validating that stream decryption keys align with actual delivery parameters.',
    icon: Video,
  },
  {
    title: 'Policy Change',
    desc: 'Audit logs effective transition timelines, affected downstream systems, and verification logs.',
    icon: File,
  },
];

export default function AccessClassificationSection() {
  return (
    <section className="relative w-full bg-slate-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-media-managemnt/bg (81).png"
          alt="Access Classification Background"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white">
            Access, classification, and playback
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-normal font-['Space_Grotesk']">
            Separate media governance from audience authorization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accessCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="p-7 bg-gray-900/80 rounded-xl border border-gray-800 backdrop-blur-sm flex flex-col gap-4 hover:border-teal-400/40 transition-colors"
              >
                <div className="size-10 bg-teal-400/10 rounded-lg border border-teal-400/25 flex items-center justify-center text-teal-400 shrink-0">
                  <Icon className="size-5" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-base font-bold font-['Space_Grotesk']">
                    {card.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-normal font-['Space_Grotesk'] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
