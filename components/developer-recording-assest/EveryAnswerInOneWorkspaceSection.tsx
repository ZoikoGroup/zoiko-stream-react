import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const workspaceCards = [
  {
    title: 'Identity & Origin',
    desc: 'Full trace on exactly where, when, and how this asset was captured.',
    img: '/images/Recording-assest/Card-Image (4).png',
    items: [
      'Origin Channel: town-hall-ch-1',
      'Recording task: task_0921_abc',
      'Codec parameters: H.264 / AAC',
      'Integrity Hash: SHA-256 validated',
    ],
  },
  {
    title: 'State & Readiness',
    desc: 'Determine if the asset is ready for streaming operations and check constraints.',
    img: '/images/Recording-assest/Card-Image (5).png',
    items: [
      'Handoff status: complete',
      'Bitrate ladder generated: 4/4 profiles',
      'DRM key initialized',
      'WCAG caption file bound',
    ],
  },
  {
    title: 'Outputs & Security',
    desc: 'Direct manifest URLs with advanced encryption and delivery parameters.',
    img: '/images/Recording-assest/Card-Image (6).png',
    items: [
      'HLS Manifest ready',
      'Dash Manifest ready',
      'SSO restriction: Enabled',
      'Regional residency rules active',
    ],
  },
];

export function EveryAnswerInOneWorkspaceSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 " />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-950 text-3xl lg:text-4xl font-bold leading-tight">
            Every answer about an asset, in one workspace.
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Review granular execution state. Inspect origin references, verify multi-bitrate ladder outputs, check protection metrics, and trace compliance markers.
          </p>
        </div>

        {/* 3 Workspace Cards Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          {workspaceCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl border border-gray-200 overflow-hidden flex flex-col justify-start items-start shadow-xs"
            >
              <div className="w-full h-40 relative bg-slate-200">
                <Image src={card.img} alt={card.title} fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col justify-start items-start gap-5 flex-1 w-full">
                <h3 className="text-slate-950 text-xl font-bold">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-5">{card.desc}</p>
                <div className="w-full h-px bg-gray-200" />
                <div className="flex flex-col gap-2.5 w-full">
                  {card.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                      <span className="text-slate-600 text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
