import React from 'react';
import Image from 'next/image';

const zones = [
  {
    zone: 'ZONE 1',
    title: 'Customer Application',
    description: 'Own your product UX, custom client layout, permission systems, and business logic mapping.',
    label: 'CUSTOMER REVENUE',
    highlighted: true,
  },
  {
    zone: 'ZONE 2',
    title: 'Programmable Control Plane',
    description: 'Manage interactions via production APIs, secure SDKs, system webhooks, and modern player controls.',
    label: 'DEVELOPER OWNED',
    highlighted: false,
  },
  {
    zone: 'ZONE 3',
    title: 'Media Lifecycle Pipeline',
    description: 'Handoff the entire pipeline: Contribute → Ingest → Produce → Secure → Deliver → Understand → Preserve.',
    label: 'ZOIKOSTREAM PLATFORM',
    highlighted: false,
  },
  {
    zone: 'ZONE 4',
    title: 'Viewer Access & Experience',
    description: 'Establish token-gated playback authorization, multi-device adaptive player setups, and accessible captions.',
    label: 'SECURE EDGE',
    highlighted: false,
  },
  {
    zone: 'ZONE 5',
    title: 'Operations & Evidence',
    description: 'Continuous monitoring, cold storage archive logs, real-time telemetry, and technical SLA accountability.',
    label: 'OBSERVABILITY',
    highlighted: false,
  },
];

export default function ArchitectureSection() {
  return (
    <section className="relative isolate w-full px-6 md:px-12 lg:px-[112px] py-16 lg:py-[100px] border-b border-[#e1e6eb] border-solid flex flex-col gap-[56px] items-start overflow-hidden bg-white">
      <Image
        src="/images/build-video-into-product/architecture-section-bg.png"
        alt=""
        fill
        className="object-cover pointer-events-none -z-20"
        unoptimized
      />
      <div className="absolute left-[-180px] top-[-120px] size-[420px] -z-10 pointer-events-none">
        <Image src="/images/build-video-into-product/job-blob-1.svg" alt="" fill unoptimized />
      </div>
      <div className="absolute bottom-[16px] right-[-160px] size-[520px] -z-10 pointer-events-none">
        <Image src="/images/build-video-into-product/job-blob-2.svg" alt="" fill unoptimized />
      </div>

      <h2 className="relative font-spaceGrotesk font-bold text-[#0f1b2d] text-[28px] sm:text-[38px] leading-[1.2] sm:leading-[48px] w-full">
        Keep your product experience. Use a governed media foundation underneath it.
      </h2>

      <div className="relative flex flex-col gap-[16px] items-start w-full">
        {zones.map((zone) => (
          <div
            key={zone.zone}
            className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[16px] p-[24px] rounded-[8px] w-full"
          >
            <div className="flex flex-col sm:flex-row gap-[12px] sm:gap-[24px] items-start sm:items-center">
              <div
                className={`flex items-start px-[12px] py-[6px] rounded-[4px] shrink-0 ${
                  zone.highlighted ? 'bg-[#0f1b2d]' : 'bg-[#f0f4f8]'
                }`}
              >
                <p
                  className={`font-spaceGrotesk font-bold text-[12px] whitespace-nowrap ${
                    zone.highlighted ? 'text-[#34d4ca]' : 'text-[#0f1b2d]'
                  }`}
                >
                  {zone.zone}
                </p>
              </div>
              <div className="flex flex-col gap-[4px] items-start">
                <p className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[16px] whitespace-nowrap">
                  {zone.title}
                </p>
                <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[14px]">
                  {zone.description}
                </p>
              </div>
            </div>
            <p
              className={`font-spaceGrotesk font-bold text-[12px] tracking-[1px] whitespace-nowrap ${
                zone.highlighted ? 'text-[#34d4ca]' : 'text-[#4f5e74]'
              }`}
            >
              {zone.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
