import React from 'react';
import Image from 'next/image';
import { Activity, Folder } from 'lucide-react';

const paths = [
  {
    icon: Activity,
    title: 'Live Path',
    description: 'Optimize for near-zero latency pipelines from localized encoders directly to global distributed viewers.',
    steps: [
      { label: '1. Ingest Ingress:', text: ' Source endpoint listening on certified UDP/TCP protocols.' },
      { label: '2. Stream Processing:', text: ' Auto-transcoding into adaptive-bitrate ladder outputs.' },
      { label: '3. Secure Outgress:', text: ' Auth verification tokens verified at the CDN edge.' },
      { label: '4. Playback / Ops:', text: ' Stream state telemetry delivered live to the read API.' },
    ],
  },
  {
    icon: Folder,
    title: 'On-Demand Path',
    description: 'Durable assets processed, archived and cached close to viewer locations with automated transcription.',
    steps: [
      { label: '1. Intake / Upload:', text: ' Durable storage ingress over high-throughput HTTPS API.' },
      { label: '2. Transcoding Core:', text: ' Dynamic encoding into resilient HLS/DASH layouts.' },
      { label: '3. Access Controls:', text: ' Storage policies and custom DRM encryption applied.' },
      { label: '4. Preservation:', text: ' Multi-region cold-archive replication and transcription.' },
    ],
  },
];

const stateIndicators = [
  { label: 'Requested', bg: '#f0f4f8', color: '#4f5e74' },
  { label: 'Pending', bg: '#fff7ed', color: '#ea580c' },
  { label: 'Ready/Live', bg: '#ecfdf5', color: '#10b981' },
  { label: 'Failed', bg: '#fef2f2', color: '#ef4444' },
  { label: 'Canceled', bg: '#f3f4f6', color: '#9ca3af' },
  { label: 'Unknown', bg: '#f9fafb', color: '#6b7280' },
];

export default function MediaIngestSection() {
  return (
    <section className="relative isolate w-full px-6 md:px-12 lg:px-[112px] py-16 lg:py-[100px] border-b border-[#e1e6eb] border-solid flex flex-col gap-[56px] items-start overflow-hidden bg-white">
      <Image
        src="/images/build-video-into-product/media-ingest-section-bg.png"
        alt=""
        fill
        className="object-cover pointer-events-none -z-20"
        unoptimized
      />
      <div className="absolute left-[-180px] top-[-120px] size-[420px] -z-10 pointer-events-none">
        <Image src="/images/build-video-into-product/job-blob-1.svg" alt="" fill unoptimized />
      </div>
      <div className="absolute bottom-[-16px] right-[-160px] size-[520px] -z-10 pointer-events-none">
        <Image src="/images/build-video-into-product/job-blob-2.svg" alt="" fill unoptimized />
      </div>

      <h2 className="relative font-spaceGrotesk font-bold text-[#0f1b2d] text-[28px] sm:text-[38px] leading-[1.2] sm:leading-[48px] w-full">
        Bring media into the workflow without making your product own the media infrastructure.
      </h2>

      <div className="relative flex flex-col lg:flex-row gap-[40px] items-start w-full">
        {paths.map(({ icon: Icon, title, description, steps }) => (
          <div
            key={title}
            className="bg-[#f8fafc] border-[1.5px] border-[#e1e6eb] border-solid flex flex-1 flex-col gap-[24px] items-start min-w-0 p-[32px] rounded-[12px] w-full"
          >
            <div className="flex items-center justify-between w-full">
              <p className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[22px] whitespace-nowrap">
                {title}
              </p>
              <Icon className="size-[24px] text-[#34d4ca]" strokeWidth={2} />
            </div>
            <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[14px] leading-[22px] w-full">
              {description}
            </p>
            <div className="border-t border-[#e1e6eb] border-solid w-full" />
            <div className="flex flex-col gap-[12px] items-start w-full">
              {steps.map((step) => (
                <p key={step.label} className="font-spaceGrotesk font-normal text-[#4f5e74] text-[13px]">
                  <span className="font-bold text-[#0f1b2d]">{step.label}</span>
                  {step.text}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="relative bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col gap-[20px] items-start p-[24px] rounded-[12px] w-full">
        <p className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[14px] tracking-[1px] uppercase">
          Managed media pipeline state engine:
        </p>
        <div className="flex flex-wrap gap-[16px] items-start w-full">
          {stateIndicators.map((state) => (
            <div
              key={state.label}
              className="flex items-start px-[12px] py-[6px] rounded-[4px] shrink-0"
              style={{ backgroundColor: state.bg }}
            >
              <p
                className="font-spaceGrotesk font-bold text-[12px] whitespace-nowrap"
                style={{ color: state.color }}
              >
                {state.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
