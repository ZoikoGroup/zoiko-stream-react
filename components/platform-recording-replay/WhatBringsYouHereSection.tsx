import React from 'react';
import {
  BookOpen,
  Code,
  Settings,
  AlertCircle,
  FolderKey,
  Users,
  Languages,
  Calendar,
  Database,
  Globe,
  Shield,
} from 'lucide-react';

const paths = [
  {
    title: 'Understand platform recording',
    desc: 'Explore governed continuity and the state model',
    icon: BookOpen,
  },
  {
    title: 'Build recording into a product',
    desc: 'Developer implementation and API handoff',
    icon: Code,
  },
  {
    title: 'Operate a recording workflow',
    desc: 'Sign in, docs, and operational support',
    icon: Settings,
  },
  {
    title: 'Resolve an active issue',
    desc: 'Support and system status',
    icon: AlertCircle,
  },
  {
    title: 'Manage recorded assets',
    desc: 'Media identity, metadata, and lifecycle',
    icon: Database,
  },
  {
    title: 'Control replay audience',
    desc: 'Access, entitlement, and secure playback',
    icon: Shield,
  },
  {
    title: 'Prepare captions & languages',
    desc: 'Accessibility and translation readiness',
    icon: Globe,
  },
  {
    title: 'Plan a managed event',
    desc: 'Event-specific recording and replay',
    icon: Calendar,
  },
];

export default function WhatBringsYouHereSection() {
  return (
    <section className="w-full bg-slate-50 border-b border-slate-200 py-20 md:py-24 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-zinc-950">
            What brings you here?
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal font-['Space_Grotesk']">
            Choose your path to find the most relevant recording and replay guidance
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paths.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-slate-50 rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-teal-500/50 transition-all flex flex-col justify-between gap-4 cursor-pointer group"
              >
                <div className="size-10 bg-teal-400/10 rounded-lg flex items-center justify-center text-teal-600 group-hover:bg-teal-400/20 transition-colors">
                  <Icon className="size-5 text-blue-600" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-zinc-950 text-base font-bold font-['Space_Grotesk'] group-hover:text-teal-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
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
