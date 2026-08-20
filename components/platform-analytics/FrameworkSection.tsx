import Image from 'next/image';
import type { CSSProperties } from 'react';
import { Box, Users, Clock, CheckSquare, User, ArrowRight } from 'lucide-react';

const fields = [
  {
    number: '01',
    title: 'Measured Object',
    desc: 'What is being measured',
    icon: Box,
    textWidth: 124,
  },
  {
    number: '02',
    title: 'Audience/Population',
    desc: 'Which population included',
    icon: Users,
    textWidth: 152,
  },
  {
    number: '03',
    title: 'Time Basis',
    desc: 'Period, timezone & granularity',
    icon: Clock,
    textWidth: 140,
  },
  {
    number: '04',
    title: 'Decision/Use',
    desc: 'What decision it informs',
    icon: CheckSquare,
    textWidth: 95,
  },
  {
    number: '05',
    title: 'Owner',
    desc: 'Who owns the question',
    icon: User,
    textWidth: 150,
  },
];

export default function FrameworkSection() {
  return (
    <section className="bg-white border-[#e2e8f0] border-b border-solid flex flex-col gap-8 xl:gap-[56px] items-start px-6 md:px-12 xl:px-[112px] py-16 xl:py-[100px] relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-analytics/framework-bg.png"
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
          Every result starts with five governed fields
        </h2>
        <p className="font-spaceGrotesk font-normal leading-relaxed xl:leading-[28.8px] relative shrink-0 text-[#4f5e74] text-base xl:text-[18px] w-full">
          A rigid conceptual framework ensuring data integrity, strict definitions, and clear ownership chains.
        </p>
      </div>

      {/* Framework Visual */}
      <div className="flex flex-col xl:flex-row gap-4 xl:gap-[16px] items-stretch xl:items-center relative shrink-0 w-full">
        {fields.map((field, index) => {
          const Icon = field.icon;
          const isLast = index === fields.length - 1;
          return (
            <div
              key={field.number}
              className={`flex gap-4 xl:gap-[16px] items-center relative ${
                isLast ? 'xl:w-[203px] shrink-0' : 'flex-1 min-w-px'
              }`}
            >
              <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid flex flex-1 xl:flex-[1_0_0] flex-col gap-3 xl:gap-[12px] h-[160px] items-start min-w-px p-5 xl:p-[20px] relative rounded-[12px]">
                <div className="flex items-center justify-between relative shrink-0 w-full">
                  <p className="font-spaceGrotesk font-bold leading-[normal] relative shrink-0 text-[#4a8cfb] text-[12px] whitespace-nowrap">
                    {field.number}
                  </p>
                  <Icon className="text-[#4f5e74] size-[18px]" />
                </div>
                <div
                  className="flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 xl:w-[var(--text-w)]"
                  style={{ '--text-w': `${field.textWidth}px` } as CSSProperties}
                >
                  <p className="font-spaceGrotesk font-bold relative shrink-0 text-[#0a0d13] text-[15px] whitespace-nowrap">
                    {field.title}
                  </p>
                  <p className="font-spaceGrotesk font-normal relative shrink-0 text-[#4f5e74] text-[12px] w-full">
                    {field.desc}
                  </p>
                </div>
              </div>
              {!isLast && (
                <ArrowRight className="hidden xl:block text-[#4f5e74] size-[16px] shrink-0" />
              )}
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
}
