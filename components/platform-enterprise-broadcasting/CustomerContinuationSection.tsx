import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LogIn, BookOpen, Activity, HelpCircle, Compass } from 'lucide-react';

const continuationItems = [
  {
    icon: LogIn,
    title: 'Sign in',
    desc: 'Corporate credentials entry point.',
    href: 'https://zoikostream-git-454227754507.europe-west1.run.app/login'
  },
  {
    icon: BookOpen,
    title: 'Documentation',
    desc: 'Full developer & operations guides.',
    href: '/developer-documentation'
  },
  {
    icon: Activity,
    title: 'System Status',
    desc: 'Unbiased real-time platform metrics.',
    href: '/developers-system-status'
  },
  {
    icon: HelpCircle,
    title: 'Support',
    desc: 'Direct engineering contact routes.',
    href: undefined
  },
  {
    icon: Compass,
    title: 'Specialist Routes',
    desc: 'Reach custom configuration desks.',
    href: undefined
  }
];

export default function CustomerContinuationSection() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[112px] py-[100px] flex flex-col gap-[56px] items-start bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/platform-enterprise-broadcasting/observation-bg.png" 
          alt="Continuation Background" 
          fill 
          className="object-cover" 
          unoptimized
        />
      </div>

      {/* Section Header */}
      <div className="relative z-10 flex flex-col gap-[16px] items-start w-full max-w-4xl">
        <h2 className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[38px] leading-[61px] tracking-[-0.38px]">
          Continue your operation without interruption
        </h2>
        <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[18px] leading-[29px] w-full">
          Sign in, access documentation, check system status, reach support, or explore specialist capabilities directly.
        </p>
      </div>

      {/* Continuation Row */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-[16px] items-stretch w-full">
        {continuationItems.map((item, idx) => {
          const Icon = item.icon;
          const cardContent = (
            <div 
              className="h-full bg-[#f8fafc] border-[1.5px] border-[#e2e8f0] border-solid rounded-[12px] p-[20px] flex flex-col gap-[12px] items-start transition-shadow hover:shadow-lg cursor-pointer group"
            >
              <div className="bg-[rgba(78,205,196,0.08)] rounded-[8px] w-[36px] h-[36px] flex items-center justify-center shrink-0 transition-colors group-hover:bg-[rgba(78,205,196,0.15)]">
                <Icon className="w-[16px] h-[16px] text-[#0f1b2d]" strokeWidth={2} />
              </div>
              <div className="flex flex-col gap-[2px] items-start w-full">
                <h3 className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[15px]">
                  {item.title}
                </h3>
                <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[12px] leading-[16px] w-full">
                  {item.desc}
                </p>
              </div>
            </div>
          );

          if (item.href) {
            return (
              <Link key={idx} href={item.href} className="flex-1 block">
                {cardContent}
              </Link>
            );
          }

          return (
            <div key={idx} className="flex-1">
              {cardContent}
            </div>
          );
        })}
      </div>
    </section>
  );
}
