import Image from 'next/image';
import { FileText, CheckSquare, Globe, MessageSquare, Play, Shield } from 'lucide-react';

const methods = [
  {
    title: 'Caption availability',
    desc: 'Track proportion of stream duration covered by valid WebVTT subtitle tracks',
    icon: FileText,
  },
  {
    title: 'Caption quality',
    desc: 'Analyze sync performance comparing index boundaries against actual playback timelines',
    icon: CheckSquare,
  },
  {
    title: 'Language availability',
    desc: 'Identify audio track selection maps across diverse international geographical nodes',
    icon: Globe,
  },
  {
    title: 'Translation quality',
    desc: 'Track latency boundaries of live translation pipelines against primary audio tracks',
    icon: MessageSquare,
  },
  {
    title: 'Accessible playback',
    desc: 'Monitor session metrics for screen readers and high-contrast web overlays',
    icon: Play,
  },
];

export default function AccessibilitySection() {
  return (
    <section className="bg-white border-[#e2e8f0] border-b border-solid flex flex-col gap-8 xl:gap-[56px] items-start px-6 md:px-12 xl:px-[112px] py-16 xl:py-[100px] relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-analytics/accessibility-bg.png"
          alt=""
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      <div className="flex flex-col gap-8 xl:gap-[56px] items-start max-w-[1216px] mx-auto relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col gap-3 xl:gap-[12px] items-start relative shrink-0 w-full">
          <h2 className="font-spaceGrotesk font-bold leading-[1.3] xl:leading-[60.8px] relative shrink-0 text-[28px] xl:text-[37.9px] text-[#0a0d13] tracking-[-0.38px] w-full">
            Accessibility and language analytics
          </h2>
          <p className="font-spaceGrotesk font-normal leading-relaxed xl:leading-[28.8px] relative shrink-0 text-[#4f5e74] text-base xl:text-[18px] w-full">
            Understand inclusive-media measurement boundaries without inferring identity.
          </p>
        </div>

        {/* Accessibility Layout */}
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-[40px] items-stretch xl:items-center relative shrink-0 w-full">
          {/* Methods Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-x-[24px] xl:gap-y-[24px] relative flex-1 min-w-px w-full">
            {methods.map((method) => {
              const Icon = method.icon;
              return (
                <div
                  key={method.title}
                  className="bg-[#f8fafc] border border-[#e2e8f0] border-solid flex gap-[12px] items-start p-5 xl:p-[20px] relative rounded-[8px]"
                >
                  <Icon className="text-[#4a8cfb] size-[18px] shrink-0" />
                  <div className="flex flex-1 flex-col gap-[2px] items-start min-w-px relative">
                    <p className="font-spaceGrotesk font-bold leading-[normal] relative shrink-0 text-[#0a0d13] text-[14px] whitespace-nowrap">
                      {method.title}
                    </p>
                    <p className="font-spaceGrotesk font-normal leading-[1.4] relative shrink-0 text-[#4f5e74] text-[12px] w-full">
                      {method.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Privacy Callout */}
          <div className="bg-[#eff6ff] border border-[#bfdbfe] border-solid flex flex-col gap-4 xl:gap-[16px] items-start p-6 xl:p-[32px] relative rounded-[16px] shrink-0 w-full xl:w-[480px]">
            <Shield className="text-[#4a8cfb] size-[24px]" />
            <p className="font-spaceGrotesk font-bold leading-[normal] relative shrink-0 text-[#0a0d13] text-[18px] whitespace-nowrap">
              Strict Privacy Boundaries
            </p>
            <p className="font-spaceGrotesk font-normal leading-[1.5] relative shrink-0 text-[#4f5e74] text-[14px] w-full">
              Language preference must never be utilized as a proxy to infer absolute personal identity. All accessibility metrics are aggregated globally and strictly separate from personal user identifier caches.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
