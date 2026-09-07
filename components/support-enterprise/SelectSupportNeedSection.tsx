'use client';

import Image from 'next/image';
import {
  Users,
  Key,
  PlayCircle,
  Code2,
  Radio,
  AlertTriangle,
  CreditCard,
  Monitor,
  UserCheck,
} from 'lucide-react';

interface SupportNeed {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NEEDS: SupportNeed[] = [
  {
    id: 'org-admin',
    title: 'Organization / Account Administration',
    icon: Users,
  },
  {
    id: 'access-permissions',
    title: 'Access / Sign-in / Permissions',
    icon: Key,
  },
  {
    id: 'streaming-playback',
    title: 'Streaming / Playback / Platform',
    icon: PlayCircle,
  },
  {
    id: 'api-sdk',
    title: 'API / SDK / Integration',
    icon: Code2,
  },
  {
    id: 'live-events',
    title: 'Live Event Operations',
    icon: Radio,
  },
  {
    id: 'incident-availability',
    title: 'Service Availability / Incident',
    icon: AlertTriangle,
  },
  {
    id: 'billing-invoice',
    title: 'Usage / Invoice / Billing',
    icon: CreditCard,
  },
  {
    id: 'product-website',
    title: 'Product / Website Issue',
    icon: Monitor,
  },
  {
    id: 'accessibility',
    title: 'Accessibility Help',
    icon: UserCheck,
  },
];

export default function SelectSupportNeedSection() {
  return (
    <section className="relative w-full bg-[#070b14] text-white py-16 lg:py-24 border-b border-slate-800/80">
      {/* Background Circuit Grid */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Title & Subtitle */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight mb-3">
            Select your support need to reach the right authority
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-4xl leading-relaxed">
            Intent-driven routing speeds up resolution by immediately dispatching cases to specialized department engineers.
          </p>
        </div>

        {/* 9 Support Needs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {NEEDS.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                className="w-full bg-[#0d1424]/90 rounded-2xl border border-slate-800/90 p-4 sm:p-5 flex items-center gap-4 hover:border-teal-500/50 hover:bg-[#111a30] transition-all duration-200 text-left group shadow-lg"
              >
                <div className="w-9 h-9 rounded-xl bg-teal-950/80 border border-teal-800/80 flex items-center justify-center text-teal-400 shrink-0 group-hover:scale-105 group-hover:border-teal-500 transition-all">
                  <IconComponent className="w-4 h-4" />
                </div>
                <span className="font-bold text-white text-xs sm:text-sm group-hover:text-teal-300 transition-colors">
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
