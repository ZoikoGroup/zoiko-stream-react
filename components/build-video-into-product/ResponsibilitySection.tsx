import React from 'react';
import Image from 'next/image';

const columns = [
  {
    title: 'ZoikoStream Operates',
    titleColor: '#34d4ca',
    items: [
      'Published global multi-CDN media infrastructure',
      'Real-time video transcode engines and adaptive-bitrate pipelines',
      'Physical and logical security of ingestion servers',
      'Operational evidence logging, compliance, and platform SLA',
    ],
  },
  {
    title: 'Your Team Owns',
    titleColor: '#ffffff',
    items: [
      'Application-level user identity and entitlement logic',
      'Consent gather models, copyright checks, and content rights',
      'Secure management of developer API keys and server-side secrets',
      'Custom player user experience and accessibility wrapper styles',
    ],
  },
  {
    title: 'Shared Areas',
    titleColor: '#4a8cfb',
    items: [
      'Integration of secure viewer-entitlement token boundaries',
      'Joint incident escalation response plans and disaster scenarios',
      'Retrospective analysis of historical telemetry and logs',
      'Configuration of data retention policies and audit pathways',
    ],
  },
];

export default function ResponsibilitySection() {
  return (
    <section className="relative isolate w-full px-6 md:px-12 lg:px-[112px] py-16 lg:py-[120px] border-b border-[#232b3a] border-solid flex flex-col gap-[56px] items-start overflow-hidden bg-[#0a0f1a]">
      <Image
        src="/images/build-video-into-product/responsibility-section-bg.png"
        alt=""
        fill
        className="object-cover pointer-events-none -z-20"
        unoptimized
      />
      <div className="absolute inset-0 bg-[rgba(15,27,45,0.85)] -z-10 pointer-events-none" />

      <div className="relative flex flex-col gap-[16px] items-start w-full">
        <h2 className="font-spaceGrotesk font-bold text-white text-[28px] sm:text-[37.9px] leading-[1.2] sm:leading-[60.8px] tracking-[-0.38px] w-full">
          Know what ZoikoStream operates — and what your product team still owns.
        </h2>
        <p className="font-spaceGrotesk font-normal text-[#aab3c4] text-[18px] leading-[28.8px] w-full">
          A transparent division of operational boundaries protects uptime, application security, and system resilience.
        </p>
      </div>

      <div className="relative flex flex-col lg:flex-row gap-[24px] items-stretch w-full">
        {columns.map((col) => (
          <div
            key={col.title}
            className="bg-[#162235] border-[1.5px] border-[#232b3a] border-solid flex flex-1 flex-col gap-[20px] items-start min-w-0 p-[28px] rounded-[12px] w-full"
          >
            <p
              className="font-spaceGrotesk font-bold text-[20px] whitespace-nowrap"
              style={{ color: col.titleColor }}
            >
              {col.title}
            </p>
            <div className="border-t border-[#232b3a] border-solid w-full" />
            <div className="flex flex-col gap-[12px] items-start w-full">
              {col.items.map((item) => (
                <p key={item} className="font-spaceGrotesk font-normal text-[#aab3c4] text-[13px] leading-[normal] w-full">
                  • {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
