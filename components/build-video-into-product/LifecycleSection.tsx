import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';

const steps = [
  'Discover',
  'Confirm Access',
  'Prototype',
  'Authenticate',
  'Test',
  'Security',
  'Launch',
  'Observe',
  'Migrate',
];

const sandboxChecks = [
  'Simulate 401/403 Player Authentication errors',
  'Inject high packet-loss stream simulation to verify SRT fallback',
  'Test multi-region ingest failover state engine routing',
];

const productionGates = [
  'Integrate webhook signing key verification rules',
  'Confirm WCAG 2.1 AAA accessibility focus indicators on player',
  'Review data residency boundary mappings for compliant archiving',
];

export default function LifecycleSection() {
  return (
    <section className="relative isolate w-full px-6 md:px-12 lg:px-[112px] py-16 lg:py-[120px] border-b border-[#e1e6eb] border-solid flex flex-col gap-[56px] items-start overflow-hidden bg-white">
      <Image
        src="/images/build-video-into-product/lifecycle-section-bg.png"
        alt=""
        fill
        className="object-cover pointer-events-none -z-20"
        unoptimized
      />
      <div className="absolute left-[-180px] top-[-120px] size-[420px] -z-10 pointer-events-none">
        <Image src="/images/build-video-into-product/job-blob-1.svg" alt="" fill unoptimized />
      </div>
      <div className="absolute bottom-[38px] right-[-160px] size-[520px] -z-10 pointer-events-none">
        <Image src="/images/build-video-into-product/job-blob-2.svg" alt="" fill unoptimized />
      </div>

      <div className="relative flex flex-col gap-[16px] items-start w-full">
        <h2 className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[28px] sm:text-[37.9px] leading-[1.2] sm:leading-[60.8px] tracking-[-0.38px] w-full">
          Move from evaluation to production with explicit readiness gates.
        </h2>
        <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[18px] leading-[28.8px] w-full">
          A structured deployment methodology ensures zero-fail stream launches. Follow our reference lifecycle from sandbox to scaling.
        </p>
      </div>

      <div className="relative flex items-center w-full overflow-hidden py-[16px]">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-1 gap-[4px] items-center min-w-0">
            <div className="flex flex-[3_0_0] flex-col gap-[8px] items-center min-w-0">
              <div className="bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] flex items-center justify-center rounded-[20px] shrink-0 size-[40px]">
                <p className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[14px] whitespace-nowrap">
                  {index + 1}
                </p>
              </div>
              <p className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[12px] text-center whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                {step}
              </p>
            </div>
            {index !== steps.length - 1 && (
              <div className="bg-[#e1e6eb] flex-1 h-[2px] min-w-[8px]" />
            )}
          </div>
        ))}
      </div>

      <div className="relative flex flex-col sm:flex-row gap-[40px] items-start w-full">
        <div className="bg-[#f8fafc] border-[1.5px] border-[#e1e6eb] border-solid flex flex-1 flex-col gap-[20px] items-start min-w-0 p-[24px] rounded-[12px] w-full">
          <p className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[18px] whitespace-nowrap">
            Sandbox Testing Matrix
          </p>
          <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[14px] leading-[22px] w-full">
            Trigger intentional edge-case behaviors in our sandbox environment before committing code:
          </p>
          <div className="flex flex-col gap-[12px] items-star w-full">
            {sandboxChecks.map((item) => (
              <div key={item} className="flex gap-[8px] items-start w-full">
                <Check className="size-[14px] text-[#34d4ca] shrink-0 mt-[3px]" strokeWidth={2.5} />
                <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[13px] min-w-0">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#f8fafc] border-[1.5px] border-[#e1e6eb] border-solid flex flex-1 flex-col gap-[20px] items-start min-w-0 p-[24px] rounded-[12px] w-full">
          <p className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[18px] whitespace-nowrap">
            Production Gate Checklist
          </p>
          <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[14px] leading-[22px] w-full">
            Ensure these steps are satisfied before requesting production API escalation<br></br> keys:
          </p>
          <div className="flex flex-col gap-[12px] items-start w-full">
            {productionGates.map((item) => (
              <div key={item} className="flex gap-[8px] items-start w-full">
                <span className="border-[1.5px] border-[#4f5e74] border-solid rounded-[2px] shrink-0 size-[14px] mt-[3px]" />
                <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[13px] min-w-0">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative flex flex-wrap gap-[16px] items-start justify-center w-full">
        <Link
          href="#"
          className="border-[#aab3c4] border-[1.5px] border-solid flex items-center justify-center px-[24px] py-[14px] rounded-[8px] hover:bg-[#0f1b2d]/5 transition-colors"
        >
          <span className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[15px] whitespace-nowrap">
            Read implementation guide
          </span>
        </Link>
        <Link
          href="/start-building"
          className="bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] flex items-center justify-center px-[28px] py-[14px] rounded-[8px] hover:opacity-90 transition-opacity"
        >
          <span className="font-spaceGrotesk font-bold text-[#0a0f1a] text-[15px] whitespace-nowrap">
            Start building
          </span>
        </Link>
      </div>
    </section>
  );
}
