import React from 'react';
import Image from 'next/image';
import { Key, Lock, Check } from 'lucide-react';

const boundaries = [
  {
    icon: Key,
    iconColor: '#34d4ca',
    title: 'Credential Boundary',
    description: 'Enforce strict segregation of developer APIs and server secrets. Maintain environment segregation, auto-rotation rules, and revokable tokens.',
    checklist: [
      'HMAC-signed API payloads mandatory',
      'Custom CORS domain restricts access',
      'Automatic secret rotation and recovery path',
    ],
  },
  {
    icon: Lock,
    iconColor: '#4a8cfb',
    title: 'Viewer Access Plane',
    description: 'Authorize end-user sessions with temporary client keys. Track viewer identity, stream entitlement, and edge location parameters.',
    checklist: [
      'Ephemeral JWT signatures for stream URLs',
      'Dynamic DRM licensing profiles',
      'Geo-fencing and ISP restrictions enforced',
    ],
  },
];

const errorStates = [
  { title: '401 Unauthorized', color: '#ef4444', description: 'Signature missing or malformed token' },
  { title: '403 Forbidden', color: '#ef4444', description: 'Geo-restricted location blocked' },
  { title: '419 Expired/Revoked', color: '#f59e0b', description: 'Playback token validity lifetime met' },
  { title: 'Policy Unavailable', color: '#f59e0b', description: 'DRM license endpoint communication lag' },
  { title: 'Unknown/Retry', color: '#9ca3af', description: 'Fallback connection retry loop engaged' },
];

export default function SecuritySection() {
  return (
    <section className="relative isolate w-full px-6 md:px-12 lg:px-[112px] py-16 lg:py-[100px] border-b border-[#232b3a] border-solid flex flex-col gap-[56px] items-start overflow-hidden bg-[#0a0f1a]">
      <Image
        src="/images/build-video-into-product/security-section-bg.png"
        alt=""
        fill
        className="object-cover pointer-events-none -z-20"
        unoptimized
      />
      <div className="absolute inset-0 bg-[rgba(10,13,20,0.88)] -z-10 pointer-events-none" />

      <h2 className="relative font-spaceGrotesk font-bold text-white text-[28px] sm:text-[38px] leading-[1.2] sm:leading-[48px] w-full">
        Protect control-plane access and viewer playback as separate responsibilities.
      </h2>

      <div className="relative flex flex-col lg:flex-row gap-[40px] items-start w-full">
        {boundaries.map(({ icon: Icon, iconColor, title, description, checklist }) => (
          <div
            key={title}
            className="bg-[#162235] border-[1.5px] border-[#232b3a] border-solid flex flex-1 flex-col gap-[24px] items-start min-w-0 p-[32px] rounded-[12px] w-full"
          >
            <div className="flex items-center justify-between w-full">
              <p className="font-spaceGrotesk font-bold text-white text-[20px] whitespace-nowrap">
                {title}
              </p>
              <Icon className="size-[20px]" style={{ color: iconColor }} strokeWidth={2} />
            </div>
            <p className="font-spaceGrotesk font-normal text-[#aab3c4] text-[14px] leading-[22px] w-full">
              {description}
            </p>
            <div className="border-t border-[#232b3a] border-solid w-full" />
            <div className="flex flex-col gap-[12px] items-start w-full">
              {checklist.map((item) => (
                <div key={item} className="flex gap-[12px] items-center">
                  <Check className="size-[14px] text-[#34d4ca] shrink-0" strokeWidth={2.5} />
                  <p className="font-spaceGrotesk font-normal text-[#aab3c4] text-[13px] whitespace-nowrap">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="relative flex flex-col gap-[20px] items-start w-full">
        <p className="font-spaceGrotesk font-bold text-white text-[14px] tracking-[1px] uppercase">
          Managed player error states & recovery actions:
        </p>
        <div className="flex flex-col sm:flex-row gap-[16px] items-stretch w-full">
          {errorStates.map((error) => (
            <div
              key={error.title}
              className="bg-[#1c1e26] border border-[#2d303d] border-solid flex flex-1 flex-col gap-[12px] items-start min-w-0 p-[20px] rounded-[8px] w-full"
            >
              <p
                className="font-spaceGrotesk font-bold text-[14px] whitespace-nowrap"
                style={{ color: error.color }}
              >
                {error.title}
              </p>
              <p className="font-spaceGrotesk font-normal text-[#aab3c4] text-[12px] w-full">
                {error.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
