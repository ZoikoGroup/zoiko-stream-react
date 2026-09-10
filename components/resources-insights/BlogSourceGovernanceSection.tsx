import React from 'react';
import Image from 'next/image';
import bgImage from '@/public/images/resources-insights/herobackground.png';
import { Terminal, Lock, TrendingUp, User } from 'lucide-react';

const GOVERNANCE_ITEMS = [
  {
    title: 'Product & API Sources',
    description: 'Current product capability and developer documentation references.',
    icon: Terminal,
  },
  {
    title: 'Security & Trust',
    description: 'Compliance certifications, security posture, and privacy evidence.',
    icon: Lock,
  },
  {
    title: 'Research & Evidence',
    description: 'External statistics with methodology, timeframe, and scope context.',
    icon: TrendingUp,
  },
  {
    title: 'Customer Outcomes',
    description: 'Case study evidence with governed claims and rights verification.',
    icon: User,
  }
];

export default function BlogSourceGovernanceSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-[#0A111F] border-b border-gray-800 flex flex-col justify-start items-start gap-12 overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={bgImage}
          alt="Background"
          fill
          className="object-cover opacity-20 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A111F] via-[#0A111F]/60 to-[#0A111F]/20" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight">
          Source Governance & Editorial Integrity
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Every high-risk claim is traced to its current authoritative source. No stale dates, no invented authority.
        </p>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {GOVERNANCE_ITEMS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="w-full bg-[#111928] rounded-2xl outline outline-1 outline-gray-800 p-8 flex flex-col justify-start items-start gap-6 hover:outline-teal-500/50 hover:shadow-2xl hover:shadow-teal-900/10 transition-all duration-300 group"
            >
              <div className="w-full flex justify-between items-start gap-4">
                <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
                  {item.title}
                </h3>
                <div className="p-2 bg-[#1A263B] rounded-lg shrink-0">
                  <Icon className="w-5 h-5 text-teal-400" />
                </div>
              </div>
              
              <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
