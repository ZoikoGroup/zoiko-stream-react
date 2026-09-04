'use client';

import React from 'react';
import { Check } from 'lucide-react';

interface RoleCard {
  title: string;
  description: string;
}

const ROLES: RoleCard[] = [
  {
    title: 'Event Owner',
    description: 'Objective, audience, run-of-show, date, stakeholders.',
  },
  {
    title: 'Producer / Show Runner',
    description: 'Run-of-show, cues, production coordination.',
  },
  {
    title: 'Technical Owner',
    description: 'Contribution, network, switcher operation.',
  },
  {
    title: 'Accessibility Owner',
    description: 'Captions, languages, accessibility readiness.',
  },
  {
    title: 'Security/Privacy Owner',
    description: 'Access, privacy, consent policy.',
  },
  {
    title: 'Moderator',
    description: 'Q&A, chat policy, speaker preparation.',
  },
  {
    title: 'Recording Owner',
    description: 'Recording, archive rights, post-event plan.',
  },
  {
    title: 'Commercial Specialist',
    description: 'Escalated capacity, SLA confirmation, custom venue.',
  },
];

interface ReadinessItem {
  label: string;
  status: 'PARTIAL/PENDING' | 'NEEDS REHEARSAL' | 'NOT STARTED';
}

const READINESS_ITEMS: ReadinessItem[] = [
  { label: 'Event Date & Time confirmed', status: 'PARTIAL/PENDING' },
  { label: 'People assigned', status: 'PARTIAL/PENDING' },
  { label: 'Sources tested', status: 'NEEDS REHEARSAL' },
  { label: 'Production format', status: 'NEEDS REHEARSAL' },
  { label: 'Audience access model set', status: 'NOT STARTED' },
  { label: 'Accessibility workflow', status: 'NOT STARTED' },
  { label: 'Security/privacy reviewed', status: 'NOT STARTED' },
  { label: 'Fallbacks defined', status: 'NEEDS REHEARSAL' },
  { label: 'Recording decided', status: 'PARTIAL/PENDING' },
  { label: 'Support model clear', status: 'NOT STARTED' },
];

export default function AssignOwnersReadinessSection() {
  const getBadgeStyle = (status: ReadinessItem['status']) => {
    switch (status) {
      case 'PARTIAL/PENDING':
        return 'text-amber-400 bg-amber-950/80 border-amber-800/80';
      case 'NEEDS REHEARSAL':
        return 'text-orange-400 bg-orange-950/80 border-orange-800/80';
      case 'NOT STARTED':
        return 'text-slate-400 bg-slate-800/80 border-slate-700/80';
    }
  };

  return (
    <section className="relative w-full bg-[#070b14] text-white py-16 lg:py-24 border-b border-slate-800/80">
      {/* Background Graphic */}
      <div 
        className="absolute inset-0 pointer-events-none -z-0 opacity-40 mix-blend-screen bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/live-events-planning-guide/bg1.png')`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Title & Subtitle */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight mb-3">
            Assign owners, rehearse critical paths, and confirm readiness
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-4xl leading-relaxed">
            Every successful event has clear ownership across organizer, producer, technical, accessibility, security, and moderation roles. Rehearsal validates sources, production, access, captions, and escalation paths.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Roles & Responsibilities */}
          <div className="lg:col-span-7">
            <span className="font-mono text-xs font-bold text-teal-300 tracking-wider uppercase mb-4 block">
              ROLES &amp; RESPONSIBILITIES
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ROLES.map((role) => (
                <div
                  key={role.title}
                  className="bg-[#0d1424]/90 rounded-xl border border-slate-800/90 p-4 shadow-md hover:border-slate-700/90 transition-all"
                >
                  <h3 className="font-bold text-white text-sm sm:text-base mb-1">
                    {role.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {role.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Go/No-Go Readiness Gate Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#0d1424]/90 rounded-2xl border border-slate-800/90 p-6 sm:p-7 shadow-2xl">
              <h3 className="font-bold text-white text-base sm:text-lg mb-1">
                Go/No-Go Readiness Gate
              </h3>
              <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                Rehearsal verifies that all decisions, technical setup, and readiness gates are green before launching live stream.
              </p>

              <div className="space-y-3">
                {READINESS_ITEMS.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-3 text-xs border-b border-slate-800/60 pb-2.5 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <Check className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span className="text-slate-300 font-medium truncate">
                        {item.label}
                      </span>
                    </div>

                    <span
                      className={`font-mono text-[9px] font-bold px-2 py-0.5 rounded border tracking-wider uppercase shrink-0 ${getBadgeStyle(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
