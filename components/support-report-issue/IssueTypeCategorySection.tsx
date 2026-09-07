'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  PlayCircle,
  Upload,
  Radio,
  Film,
  Globe,
  FileText,
  SlidersHorizontal,
  Accessibility,
  HelpCircle,
} from 'lucide-react';

interface IssueCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ISSUE_CATEGORIES: IssueCategory[] = [
  {
    id: 'playback-viewing',
    title: 'Playback / Viewing',
    description:
      'Playback fails, quality issues, captions, or player controller UI problems.',
    icon: PlayCircle,
  },
  {
    id: 'upload-ingest',
    title: 'Upload / Ingest',
    description:
      'Upload connection timeouts, processing stuck, or file validation rejection.',
    icon: Upload,
  },
  {
    id: 'live-streaming',
    title: 'Live Streaming',
    description:
      'Broadcasting interruptions, source ingest jitter, or active stream errors.',
    icon: Radio,
  },
  {
    id: 'video-on-demand',
    title: 'Video on Demand',
    description:
      'Transcoding failures, metadata sync delays, or thumbnail processing bugs.',
    icon: Film,
  },
  {
    id: 'website-navigation',
    title: 'Website / Navigation',
    description:
      'Broken links, page exceptions, or layout alignment issues across standard frames.',
    icon: Globe,
  },
  {
    id: 'documentation-content',
    title: 'Documentation / Content',
    description:
      'Stale setup instructions, missing API endpoints description, or typo reports.',
    icon: FileText,
  },
  {
    id: 'ui-controls',
    title: 'UI / Controls',
    description:
      'Button state failures, missing interactive elements, or form input bugs.',
    icon: SlidersHorizontal,
  },
  {
    id: 'accessibility',
    title: 'Accessibility',
    description:
      'Screen-reader bugs, keyboard trap issues, contrast compliance, or caption usability problems.',
    icon: Accessibility,
  },
  {
    id: 'other-product-issue',
    title: 'Other Product Issue',
    description:
      'General system behavior or platform issues not covered by typical categories.',
    icon: HelpCircle,
  },
];

export default function IssueTypeCategorySection() {
  const [selectedId, setSelectedId] = useState<string>('playback-viewing');

  return (
    <section className="relative w-full bg-[#040813] text-white py-16 lg:py-24 overflow-hidden">
      {/* Background Broadcast Control Center Image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/Report Issue Page/sri2.png"
          alt="Operations monitor control room"
          fill
          priority
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040813]/85 via-[#040813]/40 to-[#040813]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 lg:mb-12">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-[42px] text-white tracking-tight mb-2.5">
            What type of issue are you reporting?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-inter">
            Select the category that best describes the problem. This helps us route your report to the right team.
          </p>
        </div>

        {/* 9 Category Cards (3x3 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {ISSUE_CATEGORIES.map((cat) => {
            const IconComponent = cat.icon;
            const isSelected = selectedId === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedId(cat.id)}
                className={`group rounded-2xl p-6 backdrop-blur-md transition-all duration-200 flex flex-col justify-between text-left cursor-pointer shadow-xl ${
                  isSelected
                    ? 'border-2 border-teal-400/80 bg-[#091524]/90 shadow-[0_0_20px_rgba(20,184,166,0.2)]'
                    : 'border border-slate-800/90 bg-[#080f1d]/85 hover:border-slate-700 hover:bg-[#0b1426]/90'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-sans font-bold text-white text-base sm:text-[17px]">
                      {cat.title}
                    </h3>
                    <IconComponent className="w-5 h-5 text-teal-400 shrink-0 group-hover:scale-105 transition-transform" />
                  </div>

                  <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed font-inter">
                    {cat.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
