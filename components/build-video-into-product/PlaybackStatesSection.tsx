import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

const states = [
  { label: 'Loading', color: '#4a8cfb' },
  { label: 'Ready', color: '#4a8cfb' },
  { label: 'Playing', color: '#10b981' },
  { label: 'Paused', color: '#f59e0b' },
  { label: 'Ended', color: '#9ca3af' },
  { label: 'Buffering', color: '#f59e0b' },
  { label: 'Access Denied', color: '#ef4444' },
  { label: 'Media Unavailable', color: '#ef4444' },
  { label: 'Network Error', color: '#ef4444' },
];

const requirements = [
  { label: 'Keyboard Controls:', text: ' Native tab-navigation and focus boundaries' },
  { label: 'Accessible Names:', text: ' Screen reader text labels on video components' },
  { label: 'Captions Menu:', text: ' Integrated WebVTT and dynamic styling layouts' },
  { label: 'Focus Restoration:', text: ' Return user focus on closing overlay views' },
];

export default function PlaybackStatesSection() {
  return (
    <section className="relative isolate w-full px-6 md:px-12 lg:px-[112px] py-16 lg:py-[100px] border-b border-[#e1e6eb] border-solid flex flex-col gap-[56px] items-start overflow-hidden bg-white">
      <Image
        src="/images/build-video-into-product/playback-section-bg.png"
        alt=""
        fill
        className="object-cover pointer-events-none -z-20"
        unoptimized
      />
      <div className="absolute left-[-180px] top-[-120px] size-[420px] -z-10 pointer-events-none">
        <Image src="/images/build-video-into-product/job-blob-1.svg" alt="" fill unoptimized />
      </div>
      <div className="absolute bottom-[2px] right-[-160px] size-[520px] -z-10 pointer-events-none">
        <Image src="/images/build-video-into-product/job-blob-2.svg" alt="" fill unoptimized />
      </div>

      <h2 className="relative font-spaceGrotesk font-bold text-[#0f1b2d] text-[28px] sm:text-[38px] leading-[1.2] sm:leading-[48px] w-full">
        Design the viewer experience for normal, degraded, and unavailable states.
      </h2>

      <div className="relative flex flex-col gap-[20px] items-start w-full">
        <p className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[14px] tracking-[1px] uppercase">
          Viewer experience flow chart states:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] w-full">
          {states.map((state) => (
            <div
              key={state.label}
              className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex gap-[10px] items-center p-[20px] rounded-[8px] w-full"
            >
              <span
                className="block rounded-full size-[8px] shrink-0"
                style={{ backgroundColor: state.color }}
              />
              <p className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[15px] whitespace-nowrap">
                {state.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col gap-[20px] items-start p-[24px] rounded-[12px] w-full">
        <p className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[14px] tracking-[1px] uppercase">
          Critical accessibility & performance compliance:
        </p>
        <div className="flex flex-col sm:flex-row gap-[24px] sm:gap-[40px] items-start w-full">
          {requirements.map((req) => (
            <div key={req.label} className="flex flex-1 gap-[12px] items-center min-w-0">
              <Check className="size-[16px] text-[#34d4ca] shrink-0" strokeWidth={2.5} />
              <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[13px]">
                <span className="font-bold text-[#0f1b2d]">{req.label}</span>
                {req.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
