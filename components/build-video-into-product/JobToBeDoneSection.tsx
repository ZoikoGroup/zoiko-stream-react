import React from 'react';
import Image from 'next/image';
import { Code, Layers, Users, Shield, Activity } from 'lucide-react';

const roles = [
  { icon: Code, title: 'Product engineer', subtitle: 'implementation' },
  { icon: Layers, title: 'Architect', subtitle: 'lifecycle/trust' },
  { icon: Users, title: 'Product lead', subtitle: 'workflow/rollout' },
  { icon: Shield, title: 'Security/IT', subtitle: 'access/responsibility' },
  { icon: Activity, title: 'Operations', subtitle: 'monitoring/replay' },
];

export default function JobToBeDoneSection() {
  return (
    <section className="relative isolate w-full px-6 md:px-12 lg:px-[112px] py-16 lg:py-[96px] border-b border-[#e1e6eb] border-solid flex flex-col gap-[56px] items-start overflow-hidden bg-white">
      <Image
        src="/images/build-video-into-product/job-section-bg.png"
        alt=""
        fill
        className="object-cover pointer-events-none -z-20"
        unoptimized
      />
      <div className="absolute left-[-180px] top-[-120px] size-[420px] -z-10 pointer-events-none">
        <Image
          src="/images/build-video-into-product/job-blob-1.svg"
          alt=""
          fill
          unoptimized
        />
      </div>
      <div className="absolute bottom-[-141px] right-[-160px] size-[520px] -z-10 pointer-events-none">
        <Image
          src="/images/build-video-into-product/job-blob-2.svg"
          alt=""
          fill
          unoptimized
        />
      </div>

      <div className="relative flex flex-col gap-[16px] items-start w-full">
        <h2 className="font-spaceGrotesk font-bold bg-gradient-to-r from-[#0f1b2d] to-[#1a8c85] bg-clip-text text-transparent text-[32px] sm:text-[44px] leading-[1.2] sm:leading-[52px] w-full">
          What are you building - and what do you need to decide?
        </h2>
        <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[18px] leading-[30px] max-w-[920px] w-full">
          Product video is video embedded in or connected to an application or service. It may be live, on-demand, real-time or mixed. ZoikoStream owns approved media-infrastructure responsibilities while your team retains product UX, business logic, and integration decisions.
        </p>
      </div>

      <div className="relative flex flex-col gap-[20px] items-start w-full">
        <p className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[14px] tracking-[1px] uppercase">
          Explore fast-path responsibilities by role:
        </p>
        <div className="flex flex-wrap gap-[16px] items-start w-full">
          {roles.map(({ icon: Icon, title, subtitle }) => (
            <div
              key={title}
              className="backdrop-blur-[9px] bg-[rgba(255,255,255,0.8)] border border-[#e1e6eb] border-solid flex gap-[12px] h-[96px] items-center p-[16px] rounded-[20px] shadow-[0px_10px_24px_0px_rgba(11,18,32,0.06)] w-full sm:w-[360px]"
            >
              <div className="bg-[#f0f4f8] flex flex-col items-center justify-center rounded-[14px] shrink-0 size-[40px]">
                <Icon className="size-[20px] text-[#0f1b2d]" strokeWidth={2} />
              </div>
              <div className="flex flex-1 flex-col gap-[4px] items-start min-w-0">
                <p className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[16px] whitespace-nowrap">
                  {title}
                </p>
                <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[13px] whitespace-nowrap">
                  {subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
