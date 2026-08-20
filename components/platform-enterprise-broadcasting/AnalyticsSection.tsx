import React from 'react';
import Image from 'next/image';
import { FileText, Users, Activity, TrendingUp, Package, RefreshCw } from 'lucide-react';

const analyticsItems = [
  {
    icon: FileText,
    title: 'Operational evidence',
    desc: 'Evaluate ingestion stability, edge latency performance, and compliance signatures against expected limits.'
  },
  {
    icon: Users,
    title: 'Audience metrics',
    desc: 'Track verified registrations and authenticated attendance. No phantom accounts or untraceable visits.'
  },
  {
    icon: Activity,
    title: 'Quality metrics',
    desc: 'Review real-time video buffer stats, error states, and localized stream quality scores.'
  },
  {
    icon: TrendingUp,
    title: 'Program comparison',
    desc: 'Benchmarking current results against corporate baselines without individual team scoreboards.'
  },
  {
    icon: Package,
    title: 'Evidence package',
    desc: 'Download full programmatic execution records including attendance logs and system signatures.'
  },
  {
    icon: RefreshCw,
    title: 'Improvement loop',
    desc: 'Generate concrete process recommendations based on real telemetry data and incident records.'
  }
];

export default function AnalyticsSection() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[112px] py-[100px] flex flex-col gap-[56px] items-start bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/platform-enterprise-broadcasting/analytics-bg.png" 
          alt="Analytics Background" 
          fill 
          className="object-cover" 
          unoptimized
        />
      </div>

      {/* Section Header */}
      <div className="relative z-10 flex flex-col gap-[16px] items-start w-full max-w-4xl">
        <h2 className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[38px] leading-[61px] tracking-[-0.38px]">
          Governed measurement, not vanity metrics
        </h2>
        <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[18px] leading-[29px] w-full">
          Validate whether broadcasts met declared objectives within evidence limits. No automatic success scores or individual performance rankings.
        </p>
      </div>

      {/* Analytics Grid */}
      <div className="relative z-10 flex flex-col gap-[24px] w-full">
        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row gap-[24px] items-stretch w-full">
          {analyticsItems.slice(0, 3).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="bg-[#f8fafc] border-[1.5px] border-[#e2e8f0] border-solid rounded-[12px] p-[24px] flex-1 flex flex-col gap-[16px] items-start transition-shadow hover:shadow-lg"
              >
                <div className="bg-[rgba(78,205,196,0.08)] rounded-[8px] w-[40px] h-[40px] flex items-center justify-center shrink-0">
                  <Icon className="w-[18px] h-[18px] text-[#4f5e74]" strokeWidth={2} />
                </div>
                <div className="flex flex-col gap-[4px] items-start w-full">
                  <h3 className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[16px]">
                    {item.title}
                  </h3>
                  <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[13px] leading-[18px] w-full">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row gap-[24px] items-stretch w-full">
          {analyticsItems.slice(3, 6).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx + 3} 
                className="bg-[#f8fafc] border-[1.5px] border-[#e2e8f0] border-solid rounded-[12px] p-[24px] flex-1 flex flex-col gap-[16px] items-start transition-shadow hover:shadow-lg"
              >
                <div className="bg-[rgba(78,205,196,0.08)] rounded-[8px] w-[40px] h-[40px] flex items-center justify-center shrink-0">
                  <Icon className="w-[18px] h-[18px] text-[#4f5e74]" strokeWidth={2} />
                </div>
                <div className="flex flex-col gap-[4px] items-start w-full">
                  <h3 className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[16px]">
                    {item.title}
                  </h3>
                  <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[13px] leading-[18px] w-full">
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
