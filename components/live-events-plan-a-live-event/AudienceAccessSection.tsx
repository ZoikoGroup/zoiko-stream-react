import React from 'react';
import Image from 'next/image';
import { Eye, Activity, Lock, ShieldCheck, Users, Shield } from 'lucide-react';
import section7Bg from '@/public/images/live-events-plan-a-live-event/section-7bg.png';

const ACCESS_CARDS = [
  {
    tag: 'Visibility',
    title: 'Audience Model',
    desc: 'Select between Public Broadcast for maximum reach, or locked Private Circles for sensitive corporate announcements.',
    icon: Users,
  },
  {
    tag: 'Performance',
    title: 'Scale Band',
    desc: 'Determine appropriate scale bands-ranging from small VIP focus streams up to global multi-CDN stadium scales.',
    icon: Activity,
  },
  {
    tag: 'Authentication',
    title: 'Access Control',
    desc: 'Identify authentication tiers. Require SAML Single Sign-On (SSO), secure email lists, or invite passcodes.',
    icon: Shield,
  },
  {
    tag: 'Data Governance',
    title: 'Privacy & Compliance',
    desc: 'Designate strict geo-blocking ranges, sovereign local server storage paths, and custom data compliance routing.',
    icon: Lock,
  },
];

export function AudienceAccessSection() {
  return (
    <section className="relative w-full px-6 sm:px-12 lg:px-28 py-20 lg:py-24 bg-slate-950 text-white overflow-hidden border-t border-b border-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={section7Bg}
          alt="Audience Access Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight text-slate-100">
            Audience Access &amp; Privacy
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
            Capture audience model, scale band, and access requirements as planning categories. No claim is made about capacity, authentication methods, or supported access models.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ACCESS_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-zinc-900/80 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 backdrop-blur-sm space-y-4 hover:border-teal-500/50 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-teal-400 text-[10px] font-bold font-mono uppercase">
                      {card.tag}
                    </span>
                    <div className="w-6 h-6 bg-teal-500/10 text-teal-400 rounded flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <h3 className="text-slate-100 text-base font-bold font-['Space_Grotesk']">
                    {card.title}
                  </h3>
                </div>
                <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
