import React from 'react';
import Image from 'next/image';
import {
  KeyRound,
  ShieldCheck,
  Zap,
  Globe2,
  RefreshCw,
  Lock,
} from 'lucide-react';

const boundaries = [
  {
    title: 'Access Control',
    question: 'Who may act or receive access, under what policy?',
    desc: 'Grant precise operations permission based on stable active directory credentials.',
    icon: KeyRound,
  },
  {
    title: 'Secure Playback',
    question: 'How is playback authorized and protected?',
    desc: 'Issue temporary, tamper-resistant access tokens verified prior to stream start.',
    icon: ShieldCheck,
  },
  {
    title: 'Adaptive Video Delivery',
    question: 'How does delivery respond to changing conditions?',
    desc: 'Dynamic bitrate switches and transit route optimizations at the edge.',
    icon: Zap,
  },
  {
    title: 'Global Distribution',
    question: 'Where is delivery available and what is the scope?',
    desc: 'Whitelisted regional endpoints configured and governed globally.',
    icon: Globe2,
  },
  {
    title: 'Resilient Delivery',
    question: 'How are failure and continuity handled?',
    desc: 'Proactive route failover and access fail-safe fallbacks keep media streaming.',
    icon: RefreshCw,
  },
  {
    title: 'Media Security',
    question: 'What protects media workflows and where is evidence?',
    desc: 'Cryptographic asset signatures and immutable auditing evidence archives.',
    icon: Lock,
  },
];

export default function ChooseRightControlBoundarySection() {
  return (
    <section className="relative w-full bg-gray-950 text-white py-20 md:py-24 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-delivery-trust-overview/bg (69).png"
          alt="Control Boundary Background"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gray-950/70" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold   text-white">
            Choose the Right Control Boundary
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-normal   max-w-3xl">
            Six specialist destinations for detailed evaluation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {boundaries.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="min-h-[240px] p-7 bg-gray-900/90 rounded-2xl border border-slate-800 shadow-xl backdrop-blur-sm flex flex-col gap-4 hover:border-teal-400/40 transition-colors"
              >
                <div className="size-11 bg-teal-400/10 rounded-lg border border-teal-400/20 flex items-center justify-center text-teal-400 shrink-0">
                  <Icon className="size-5" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-white text-base font-bold  ">
                    {item.title}
                  </h3>
                  <span className="text-teal-400 text-xs font-semibold  ">
                    {item.question}
                  </span>
                  <p className="text-slate-400 text-xs font-normal   leading-relaxed pt-1">
                    {item.desc}
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
