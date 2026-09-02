import React from 'react';
import Image from 'next/image';

import bg147 from '@/public/images/Organization-overview/bg (147).png';
import img3 from '@/public/images/resources-security-trust-center/Rectangle (3).png';
import img4 from '@/public/images/resources-security-trust-center/Rectangle (4).png';
import img5 from '@/public/images/resources-security-trust-center/Rectangle (5).png';

const CARDS = [
  {
    title: 'Customer-Controlled',
    description:
      'Rigorous isolation of processing nodes ensures clear ownership of each execution segment.',
    image: img3,
  },
  {
    title: 'ZoikoStream-Managed',
    description:
      'Rigorous isolation of processing nodes ensures clear ownership of each execution segment.',
    image: img4,
  },
  {
    title: 'Shared Boundary',
    description:
      'Rigorous isolation of processing nodes ensures clear ownership of each execution segment.',
    image: img5,
  },
];

export default function TrustCenterMediaArchitectureSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-12 bg-white overflow-hidden">
      {/* Background overlay snippet */}
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

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-3">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Media architecture and trust boundaries
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed">
          Review detailed flow diagrams mapping active boundary protections, transit encryption states, and third-party ingress boundaries.
        </p>
      </div>

      {/* Diagram Stepper Flow */}
      <div className="relative z-10 w-full p-6 bg-slate-50/90 backdrop-blur-xs rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col md:flex-row justify-center items-center gap-4 lg:gap-6 shadow-xs">
        <div className="w-full md:w-60 p-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col gap-2">
          <h3 className="text-slate-900 text-sm font-bold font-['Space_Grotesk']">
            Customer Zone
          </h3>
          <p className="text-slate-600 text-xs font-normal font-['Inter']">
            Browser, SDK, Ingest sources. User authenticated controls.
          </p>
        </div>

        <div className="hidden md:block w-10 h-0.5 bg-blue-500 shrink-0" />

        <div className="w-full md:w-72 p-4 bg-white rounded-lg outline outline-2 outline-offset-[-2px] outline-blue-500 flex flex-col gap-2 shadow-sm">
          <h3 className="text-blue-600 text-sm font-bold font-['Space_Grotesk']">
            ZoikoStream Processing Zone
          </h3>
          <p className="text-slate-600 text-xs font-normal font-['Inter']">
            Isolated VPC processing nodes, transit encryption gates, telemetry pipelines.
          </p>
        </div>

        <div className="hidden md:block w-10 h-0.5 bg-blue-500 shrink-0" />

        <div className="w-full md:w-60 p-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col gap-2">
          <h3 className="text-slate-900 text-sm font-bold font-['Space_Grotesk']">
            Third-Party Gateways
          </h3>
          <p className="text-slate-600 text-xs font-normal font-['Inter']">
            CDN edges, compliance monitors, cold storage vaults.
          </p>
        </div>
      </div>

      {/* 3 Bottom Cards */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {CARDS.map((item, index) => (
          <div
            key={index}
            className="bg-slate-50/90 backdrop-blur-xs rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start overflow-hidden shadow-xs hover:border-blue-500/50 transition-all group"
          >
            <div className="relative w-full h-40 bg-gray-100 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-5 flex flex-col justify-start items-start gap-2 flex-1">
              <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                {item.title}
              </h3>
              <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
