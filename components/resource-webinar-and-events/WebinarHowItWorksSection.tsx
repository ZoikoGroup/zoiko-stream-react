import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import {  Globe, Eye, Video, Shield } from 'lucide-react';

const PILLARS = [
  {
    title: 'Register with minimum data',
    description:
      'Privacy-first registration. We only collect essential metrics with completely separate and optional marketing opt-in paths.',
    icon: Shield,
  },
  {
    title: 'Exact timezone display',
    description:
      'Dynamic timezone mapping display. You will always see local broadcast times adjusted accurately with explicit DST-aware context.',
    icon: Globe,
  },
  {
    title: 'Accessible by design',
    description:
      'Built around WCAG 2.2 AA standards. Keyboard navigability, semantic screen reader compatibility, and accurate live captions.',
    icon: Eye,
  },
  {
    title: 'Replay when ready',
    description:
      'No broken promises. Every session features immutable transcripts, related resource attachments, and downloadable files post-event.',
    icon: Video,
  },
];

const COMPLIANCE_BADGES = [
  'WCAG 2.2 AA',
  'SOC 2 TYPE II',
  'GDPR COMPLIANT',
  'PRIVACY FIRST',
];

export default function WebinarHowItWorksSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-28 border-b border-gray-200 flex flex-col justify-start items-start gap-14 bg-white overflow-hidden">
      {/* Background overlay snippet */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 " />
      </div>
      <div className="size-[520px] left-[1068px] top-[454px] absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          How our events work
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Simple, transparent, and accessible from registration to replay.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PILLARS.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <div key={index} className="flex flex-col justify-start items-start gap-4">
              <div className="size-12 bg-emerald-500/10 rounded-lg outline outline-1 outline-offset-[-1px] outline-emerald-500/20 flex justify-center items-center">
                <Icon className="w-6 h-6 text-teal-600" />
              </div>
              <div className="flex flex-col justify-start items-start gap-2">
                <h3 className="text-slate-900 text-xl font-bold font-['Space_Grotesk']">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 text-base font-normal font-['Inter'] leading-5">
                  {pillar.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative z-10 w-full h-0 border-b border-gray-200" />

      {/* Compliance Badges Bar */}
      <div className="relative z-10 w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <span className="text-slate-600 text-xs font-bold font-['Space_Grotesk'] tracking-wide">
          COMPLIANCE &amp; ACCESSIBILITY STANDARDS
        </span>
        <div className="flex flex-wrap items-center gap-3 sm:gap-6">
          {COMPLIANCE_BADGES.map((badge, index) => (
            <div
              key={index}
              className="px-3.5 py-1.5 rounded-md outline outline-[1.50px] outline-offset-[-1.50px] outline-slate-600 bg-slate-50"
            >
              <span className="text-slate-900 text-xs font-bold font-['Space_Grotesk']">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
