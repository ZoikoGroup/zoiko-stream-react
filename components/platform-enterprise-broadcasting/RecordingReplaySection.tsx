import React from 'react';
import Image from 'next/image';
import { Disc, Shield, Globe, Trash2 } from 'lucide-react';

const features = [
  {
    icon: Disc,
    title: 'Recording Decision',
    desc: 'Explicit parameters set before ingestion ports open. No automated capture without affirmative logic.'
  },
  {
    icon: Shield,
    title: 'Replay Authorization',
    desc: 'Determine independent access credentials and licensing rules. Control replay-specific audiences.'
  },
  {
    icon: Globe,
    title: 'Accessibility Continuity',
    desc: 'Automate translation, captions, and alternative streams as core requirements of replay.'
  },
  {
    icon: Trash2,
    title: 'Retention & Disposition',
    desc: 'Set strict timelines for media lifecycles. Ensure deletion protocols run cleanly upon policy end.'
  }
];

export default function RecordingReplaySection() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[112px] py-[100px] border-t border-b border-[#232b3a] border-solid flex flex-col gap-[56px] items-start bg-[#0a0f1a] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/platform-enterprise-broadcasting/recording-bg.png" 
          alt="Recording Background" 
          fill 
          className="object-cover" 
          unoptimized
        />
        <div className="absolute inset-0 bg-[rgba(10,15,26,0.8)]" />
      </div>

      {/* Section Header */}
      <div className="relative z-10 flex flex-col gap-[16px] items-start w-full max-w-4xl">
        <h2 className="font-spaceGrotesk font-bold text-white text-[38px] leading-[61px] tracking-[-0.38px]">
          Live completion is not automatic recording
        </h2>
        <p className="font-spaceGrotesk font-normal text-[#aab3c4] text-[18px] leading-[29px] w-full">
          Recording decisions, replay authorization, accessibility continuity, and retention are each separate governed choices.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-[24px] items-stretch w-full">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div 
              key={idx} 
              className="bg-[rgba(16,21,30,0.8)] backdrop-blur-sm border-[1.5px] border-[#232b3a] border-solid rounded-[12px] p-[24px] flex-1 flex flex-col gap-[16px] items-start transition-shadow hover:shadow-lg"
            >
              <div className="bg-[rgba(78,205,196,0.08)] rounded-[8px] w-[40px] h-[40px] flex items-center justify-center shrink-0">
                <Icon className="w-[20px] h-[20px] text-[#4ecdc4]" strokeWidth={2} />
              </div>
              <div className="flex flex-col gap-[4px] items-start w-full">
                <h3 className="font-spaceGrotesk font-bold text-white text-[16px]">
                  {feature.title}
                </h3>
                <p className="font-spaceGrotesk font-normal text-[#aab3c4] text-[13px] leading-[18px] w-full">
                  {feature.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
