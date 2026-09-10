import React from 'react';
import Image from 'next/image';
import { Activity, ShieldCheck, Headphones, User, Shield } from 'lucide-react';
import section9Bg from '@/public/images/live-events-plan-a-live-event/section-9bg.png';

const CARDS = [
  {
    title: 'Monitoring',
    icon: Activity,
    desc: 'Identify real-time diagnostic parameters, stream-health dashboards, and critical alert notification thresholds.',
  },
  {
    title: 'Resilience & Assurance',
    icon: Shield,
    desc: 'Specify intent for redundant encoding pathways, backup network bonding, and standby stream configurations.',
  },
  {
    title: 'Event Support',
    icon: User,
    desc: 'Indicate on-shift engineer assignment requirements, incident escalation loops, and dedicated support channel needs.',
  },
];

export function ResilienceMonitoringSection() {
  return (
    <section className="relative w-full px-6 sm:px-12 lg:px-28 py-20 lg:py-24 bg-slate-950 text-white overflow-hidden border-t border-b border-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={section9Bg}
          alt="Resilience & Monitoring Background"
          fill
          className="object-cover "
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight text-slate-100">
            Resilience, Monitoring &amp; Support
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
            Capture high-level operational monitoring needs, resilience requirements, and support expectations as planning categories — no SLA, redundancy tier, or failover guarantees.
          </p>
        </div>

        {/* 3 Full Width Cards */}
        <div className="space-x-4 grid grid-cols-3">
          {CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-zinc-900/80 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 backdrop-blur-sm space-y-3 hover:border-teal-500/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-slate-100 text-lg font-bold font-['Space_Grotesk']">
                    {card.title}
                  </h3>
                  <div className="w-8 h-8 bg-teal-500/10 text-teal-400 rounded flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
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
