import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const steps = [
  { step: 'Step 01', title: 'Propose', desc: 'Submit operational change' },
  { step: 'Step 02', title: 'Scope', desc: 'Define impacted targets' },
  { step: 'Step 03', title: 'Authority', desc: 'Requires role approval' },
  { step: 'Step 04', title: 'Confirm', desc: 'Preflight simulation' },
  { step: 'Step 05', title: 'Execute', desc: 'Enforce state update' },
  { step: 'Step 06', title: 'Verify', desc: 'Durable status validation' },
  { step: 'Step 07', title: 'Rollback/Recover', desc: 'Automated revert path' }
];

export default function RehearsalSafetySection() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[112px] py-[100px] flex flex-col gap-[56px] items-start bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-enterprise-broadcasting/intent-bg.png"
          alt="Safety Background"
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      {/* Section Header */}
      <div className="relative z-10 flex flex-col gap-[12px] items-start w-full max-w-4xl">
        <h2 className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[38px] leading-[61px] tracking-[-0.38px]">
          Every change carries scope, authority, and evidence
        </h2>
        <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[18px] leading-[29px] w-full">
          Preflight review, authorization, controlled changes, and rollback paths keep operations safe and auditable.
        </p>
      </div>

      {/* Process Flow */}
      <div className="relative z-10 flex flex-wrap lg:flex-nowrap gap-y-[12px] gap-x-[8px] items-center justify-between w-full">
        {steps.map((item, index) => (
          <React.Fragment key={index}>
            <div className="bg-[#f8fafc] border-[1.5px] border-[#e2e8f0] border-solid rounded-[12px] p-[16px] w-[150px] flex flex-col gap-[8px] items-start shrink-0 transition-transform hover:-translate-y-1">
              <p className="font-spaceGrotesk font-bold text-[#4ecdc4] text-[12px]">
                {item.step}
              </p>
              <p className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[14px] w-full truncate">
                {item.title}
              </p>
              <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[11px] w-full truncate">
                {item.desc}
              </p>
            </div>
            {index < steps.length - 1 && (
              <div className="flex items-center justify-center shrink-0 w-[12px] h-[12px]">
                <ArrowRight className="w-[12px] h-[12px] text-[#4f5e74]" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
