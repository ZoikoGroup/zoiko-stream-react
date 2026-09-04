import React from 'react';
import Image from 'next/image';
import { Globe, Lock, CheckSquare, Box, PenLine, AlertTriangle } from 'lucide-react';

interface ContextCard {
  stateNumber: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CONTEXT_STATES: ContextCard[] = [
  {
    stateNumber: 'STATE 01',
    title: 'Public Orientation',
    description: 'Explore general support parameters without active sign-in constraints.',
    icon: Globe,
  },
  {
    stateNumber: 'STATE 02',
    title: 'Sign-in Required',
    description: 'Account credentials required to verify private event configurations.',
    icon: Lock,
  },
  {
    stateNumber: 'STATE 03',
    title: 'One Eligible Event',
    description: 'Active direct routing shown for your single registered upcoming broadcast.',
    icon: CheckSquare,
  },
  {
    stateNumber: 'STATE 04',
    title: 'Multiple Events',
    description: 'Select from your authorized registry to isolate the correct event path.',
    icon: Box,
  },
  {
    stateNumber: 'STATE 05',
    title: 'Not Eligible',
    description: 'Credentials verified but tier restrictions apply. General alternatives available.',
    icon: PenLine,
  },
  {
    stateNumber: 'STATE 06',
    title: 'Authorization Error',
    description: 'System mismatch during verification. Safely recovery to general tier.',
    icon: AlertTriangle,
  },
];

export default function VerifyContextSection() {
  return (
    <section className="relative w-full bg-[#040813] text-white py-16 lg:py-24 overflow-hidden">
      {/* Dark Server Room Background with Shields */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/Live Events Support Page/les-bg-2.png"
          alt="Server infrastructure background"
          fill
          priority
          className="object-cover object-center opacity-70"
        />
        {/* Subtle Dark Overlays for smooth depth & text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#040813]/80 via-[#040813]/40 to-[#040813]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 lg:mb-12">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-[42px] text-white tracking-tight mb-2.5">
            Verify your event and account context.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-inter">
            Sign in only when private event or account data is genuinely required.
          </p>
        </div>

        {/* 6 State Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {CONTEXT_STATES.map((item) => {
            const IconComponent = item.icon;

            return (
              <div
                key={item.stateNumber}
                className="bg-[#09101d]/85 rounded-2xl border border-slate-800/90 p-6 backdrop-blur-md hover:border-slate-700 transition-all duration-200 flex flex-col justify-between shadow-xl"
              >
                {/* Top Row: State number + Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs font-semibold tracking-wider text-emerald-400 uppercase">
                    {item.stateNumber}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="font-sans font-bold text-white text-base sm:text-[17px] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed font-inter">
                    {item.description}
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
