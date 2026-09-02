import React from 'react';
import Image from 'next/image';

import bg147 from '@/public/images/Organization-overview/bg (147).png';

const MATRIX = [
  {
    domain: 'Physical Datacenter',
    managed: 'Full audit mapping',
    customer: 'None',
    shared: 'None',
  },
  {
    domain: 'Application Logic',
    managed: 'API processing integrity',
    customer: 'Player implementation',
    shared: 'Authorization schemes',
  },
  {
    domain: 'Key Management',
    managed: 'VPC KMS envelopes',
    customer: 'Access token generation',
    shared: 'Token parameters',
  },
  {
    domain: 'Access Governance',
    managed: 'Platform audit trails',
    customer: 'SSO tenant mapping',
    shared: 'Role classifications',
  },
  {
    domain: 'Regulatory Archiving',
    managed: 'Cold storage availability',
    customer: 'Residency limits rule',
    shared: 'Retention period',
  },
];

export default function TrustCenterSharedResponsibilitySection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-10 bg-white overflow-hidden">
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
          Shared responsibility and deployment scope
        </h2>
      </div>

      {/* Table Matrix */}
      <div className="relative z-10 w-full bg-slate-50/90 backdrop-blur-xs rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start overflow-x-auto shadow-xs">
        <div className="min-w-[650px] w-full flex flex-col">
          {/* Header Row */}
          <div className="w-full p-4 bg-slate-100 border-b border-gray-200 flex justify-start items-center gap-6">
            <div className="w-60 text-slate-900 text-sm font-bold font-['Space_Grotesk']">
              Deployment Domain
            </div>
            <div className="flex-1 text-slate-900 text-sm font-bold font-['Space_Grotesk']">
              ZoikoStream-Managed
            </div>
            <div className="flex-1 text-slate-900 text-sm font-bold font-['Space_Grotesk']">
              Customer-Controlled
            </div>
            <div className="flex-1 text-slate-900 text-sm font-bold font-['Space_Grotesk']">
              Shared / Varies
            </div>
          </div>

          {/* Rows */}
          {MATRIX.map((row, idx) => (
            <div
              key={idx}
              className="w-full p-4 border-b border-gray-200 flex justify-start items-center gap-6 hover:bg-white/50 transition-colors"
            >
              <div className="w-60 text-slate-900 text-sm font-bold font-['Space_Grotesk']">
                {row.domain}
              </div>
              <div className="flex-1 text-slate-600 text-xs font-normal font-['Inter']">
                {row.managed}
              </div>
              <div className="flex-1 text-slate-600 text-xs font-normal font-['Inter']">
                {row.customer}
              </div>
              <div className="flex-1 text-slate-600 text-xs font-normal font-['Inter']">
                {row.shared}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
