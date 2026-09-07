'use client';

import React, { useState } from 'react';
import { UserCheck, Mail, User, ArrowLeftRight } from 'lucide-react';

interface FollowUpOption {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const followUpOptions: FollowUpOption[] = [
  {
    id: 'signed-in',
    title: 'Signed In',
    description: 'Use verified account contact with clear disclosure of communication preferences.',
    icon: UserCheck,
  },
  {
    id: 'not-signed-in',
    title: 'Not Signed In',
    description: 'Minimum email address entry requested only if the receiving workflow strictly requires it.',
    icon: Mail,
  },
  {
    id: 'anonymous',
    title: 'Anonymous Report',
    description: 'No contact details collected. Please note individual follow-up or updates may not be possible.',
    icon: User,
  },
  {
    id: 'specialist-handoff',
    title: 'Specialist Handoff',
    description: 'Transfer only approved operational context to dedicated engineering groups after manual review.',
    icon: ArrowLeftRight,
  },
];

export default function HowShouldWeFollowUpSection() {
  const [selectedId, setSelectedId] = useState<string>('signed-in');

  return (
    <section className="relative w-full bg-[#fbfcfe] py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-slate-100">
      {/* Subtle ambient light glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3" />

      {/* Topographic background SVG pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.35] overflow-hidden">
        <svg
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 600"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M-100,120 C200,80 400,240 720,180 C1040,120 1200,280 1540,200"
            stroke="#cbd5e1"
            strokeWidth="0.8"
            strokeDasharray="4 6"
          />
          <path
            d="M-100,240 C180,180 460,340 760,270 C1060,200 1240,360 1540,310"
            stroke="#cbd5e1"
            strokeWidth="0.8"
          />
          <path
            d="M-100,360 C240,320 480,480 820,400 C1160,320 1320,490 1540,430"
            stroke="#cbd5e1"
            strokeWidth="0.8"
            strokeDasharray="3 5"
          />
          <path
            d="M-100,480 C260,420 540,560 880,510 C1220,460 1380,580 1540,540"
            stroke="#e2e8f0"
            strokeWidth="0.7"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight mb-3">
            How should we follow up?
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-normal max-w-3xl leading-relaxed">
            We only collect contact information when the receiving workflow requires it. Marketing consent is never bundled with issue reporting.
          </p>
        </div>

        {/* 2x2 Follow-up Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {followUpOptions.map((option) => {
            const Icon = option.icon;
            const isSelected = selectedId === option.id;

            return (
              <div
                key={option.id}
                onClick={() => setSelectedId(option.id)}
                className={`group relative flex items-start gap-4 p-5 sm:p-6 lg:p-7 rounded-2xl bg-white transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? 'border-blue-500/80 shadow-[0_4px_20px_rgba(37,99,235,0.08)] ring-1 ring-blue-500/20'
                    : 'border-slate-200/80 hover:border-slate-300 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md'
                }`}
              >
                {/* Icon Container */}
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 ${
                    isSelected
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-[#eff6ff] text-blue-500 group-hover:bg-blue-100 group-hover:text-blue-600'
                  }`}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.75} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pt-0.5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 tracking-tight">
                    {option.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-[13px] sm:leading-relaxed font-normal">
                    {option.description}
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
