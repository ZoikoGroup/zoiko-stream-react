import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const surfaces = [
  {
    category: 'CAPABILITY',
    title: 'Platform Capability',
    desc: 'Enterprise broadcasting, real-time stream monitoring, and recording.',
    img: '/images/solutions-enterprise-broadcast/card-image2x.png',
  },
  {
    category: 'INTEGRATION',
    title: 'Integrations & Dependencies',
    desc: 'Sync directly with SAML Identity providers, video ingress encoders, and captions systems.',
    img: '/images/solutions-enterprise-broadcast/card-image.png',
  },
  {
    category: 'DOCS',
    title: 'System Documentation',
    desc: 'Inspect current API limits, code samples, SDK features, and operator manuals.',
    img: '/images/solutions-enterprise-broadcast/card-image (1).png',
  },
  {
    category: 'STATUS',
    title: 'System Status Page',
    desc: 'Verify real-time API uptime, regional pipeline state, and continuous status telemetry.',
    img: '/images/solutions-enterprise-broadcast/card-image (2).png',
  },
  {
    category: 'SUPPORT',
    title: 'Enterprise Support',
    desc: 'Access direct SLA-backed support pipelines and professional solutions specialists.',
    img: '/images/solutions-enterprise-broadcast/card-image (3).png',
  },
  {
    category: 'COMPLIANCE',
    title: 'Change Management System',
    desc: 'Enforce versioned configuration brief approvals, authorized change owners, and reviews.',
    img: '/images/solutions-enterprise-broadcast/card-image (4).png',
  },
  {
    category: 'OPERATIONS',
    title: 'Live Events Handoff',
    desc: 'Coordinate smooth operational transition to professionally managed live event services.',
    img: '/images/solutions-enterprise-broadcast/card-image (5).png',
  },
  {
    category: 'SECURITY',
    title: 'Inspectable Security & Trust',
    desc: 'Review compliance certifications, SOC 2 qualification manuals, and directory encryption specs.',
    img: '/images/solutions-enterprise-broadcast/card-image (6).png',
  },
];

export function PlatformSurfacesSection() {
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
      <div className="size-96 -left-44 -top-24 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold  leading-tight lg:leading-[50px]">
            Connect the workflow to authoritative enterprise surfaces
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal  leading-7">
            The workflow page explains architecture; documentation owns implementation detail.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {surfaces.map((surf, idx) => (
            <div
              key={idx}
              className="bg-slate-50/90 rounded-2xl border-[1.5px] border-gray-200 flex flex-col justify-start items-start overflow-hidden shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm"
            >
              <div className="relative w-full h-44 bg-slate-200">
                <Image
                  src={surf.img}
                  alt={surf.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full p-6 flex flex-col justify-start items-start gap-3">
                <span className="text-teal-400 text-xs font-bold  tracking-wide">
                  {surf.category}
                </span>
                <h3 className="text-slate-900 text-xl font-bold ">
                  {surf.title}
                </h3>
                <p className="text-slate-600 text-sm font-normal  leading-5">
                  {surf.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
