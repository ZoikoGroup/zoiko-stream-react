import React from 'react';
import Image from 'next/image';

const cards = [
  {
    title: 'Developer Documentation',
    image: '/images/build-video-into-product/card-developer-docs.png',
    fields: [
      { label: 'TYPE', value: 'Technical Guide' },
      { label: 'OWNER', value: 'Engineering' },
      { label: 'SCOPE', value: 'Core Platform' },
      { label: 'STATUS', value: 'Active' },
    ],
  },
  {
    title: 'API Reference',
    image: '/images/build-video-into-product/card-api-reference.png',
    fields: [
      { label: 'TYPE', value: 'REST Spec' },
      { label: 'OWNER', value: 'Product' },
      { label: 'SCOPE', value: 'Endpoints & Schema' },
      { label: 'STATUS', value: 'Updated Today' },
    ],
  },
  {
    title: 'Architecture Guide',
    image: '/images/build-video-into-product/card-architecture-guide.png',
    fields: [
      { label: 'TYPE', value: 'Blueprint Diagram' },
      { label: 'OWNER', value: 'Solutions Team' },
      { label: 'SCOPE', value: 'Video Pipelines' },
      { label: 'STATUS', value: 'Verified v3.4' },
    ],
  },
  {
    title: 'Security & Trust Evidence',
    image: '/images/build-video-into-product/card-security-trust.png',
    fields: [
      { label: 'TYPE', value: 'Compliance Log' },
      { label: 'OWNER', value: 'InfoSec & Audit' },
      { label: 'SCOPE', value: 'SOC 2 Type II' },
      { label: 'STATUS', value: 'Current Schedule' },
    ],
  },
  {
    title: 'System Status & History',
    image: '/images/build-video-into-product/card-system-status.png',
    fields: [
      { label: 'TYPE', value: 'Telemetry Log' },
      { label: 'OWNER', value: 'Ops Center' },
      { label: 'SCOPE', value: 'Uptime Metrics' },
      { label: 'STATUS', value: '99.993% Realized' },
    ],
  },
  {
    title: 'Changelog',
    image: '/images/build-video-into-product/card-changelog.png',
    fields: [
      { label: 'TYPE', value: 'Release Notes' },
      { label: 'OWNER', value: 'Product Ops' },
      { label: 'SCOPE', value: 'Platform Updates' },
      { label: 'STATUS', value: 'v4.1.2 Hotfix' },
    ],
  },
  {
    title: 'Sample Application',
    image: '/images/build-video-into-product/card-sample-application.png',
    fields: [
      { label: 'TYPE', value: 'Developer Demo' },
      { label: 'OWNER', value: 'DevRel' },
      { label: 'SCOPE', value: 'HLS / WebRTC UI' },
      { label: 'STATUS', value: 'React/iOS Ready' },
    ],
  },
  {
    title: 'Case Study',
    image: '/images/build-video-into-product/card-case-study.png',
    fields: [
      { label: 'TYPE', value: 'Operator Proof' },
      { label: 'OWNER', value: 'Marketing' },
      { label: 'SCOPE', value: 'Meridian P.E.' },
      { label: 'STATUS', value: 'Verified Outcome' },
    ],
  },
];

export default function EvidenceSection() {
  return (
    <section className="relative isolate w-full px-6 md:px-12 lg:px-[112px] py-16 lg:py-[120px] border-b border-[#e1e6eb] border-solid flex flex-col gap-[56px] items-start overflow-hidden bg-white">
      <Image
        src="/images/build-video-into-product/evidence-section-bg.png"
        alt=""
        fill
        className="object-cover pointer-events-none -z-20"
        unoptimized
      />
      <div className="absolute left-[-180px] top-[-120px] size-[420px] -z-10 pointer-events-none">
        <Image src="/images/build-video-into-product/job-blob-1.svg" alt="" fill unoptimized />
      </div>
      <div className="absolute bottom-[117px] right-[-160px] size-[520px] -z-10 pointer-events-none">
        <Image src="/images/build-video-into-product/job-blob-2.svg" alt="" fill unoptimized />
      </div>

      <div className="relative flex flex-col gap-[16px] items-start w-full">
        <h2 className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[28px] sm:text-[37.9px] leading-[1.2] sm:leading-[60.8px] tracking-[-0.38px] w-full">
          Inspect the evidence before you commit.
        </h2>
        <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[18px] leading-[28.8px] w-full">
          All platform specs, audit records, architecture diagrams, and system performance metrics are publicly verifiable.
        </p>
      </div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] w-full">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-[#f8fafc] border-[1.5px] border-[#e1e6eb] border-solid flex flex-col items-start overflow-hidden rounded-[12px] w-full"
          >
            <div className="h-[130px] relative shrink-0 w-full">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover pointer-events-none"
                unoptimized
              />
            </div>
            <div className="flex flex-col gap-[12px] items-start p-[16px] w-full">
              <p className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[16px] overflow-hidden text-ellipsis whitespace-nowrap w-full">
                {card.title}
              </p>
              <div className="border-t border-[#e1e6eb] border-solid w-full" />
              <div className="flex flex-col gap-[4px] items-start w-full">
                {card.fields.map((field) => (
                  <p key={field.label} className="font-spaceGrotesk font-normal text-[#4f5e74] text-[11px] whitespace-nowrap">
                    {field.label}:{' '}
                    <span
                      className={`font-bold ${field.label === 'STATUS' ? 'text-[#10b981]' : 'text-[#4f5e74]'}`}
                    >
                      {field.value}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
