import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const readinessModules = [
  {
    title: 'Stream Monitoring',
    status: 'Complete',
    statusCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    dotCls: 'bg-emerald-500',
    desc: 'Telemetry signals mapped to active alerts',
    img: '/images/quickstart/Rectangle (5).png',
  },
  {
    title: 'Analytics Privacy',
    status: 'Needs Review',
    statusCls: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    dotCls: 'bg-amber-500',
    desc: 'Viewer data cleaned prior to compliance logs',
    img: '/images/quickstart/Rectangle (6).png',
  },
  {
    title: 'Error Fallbacks',
    status: 'Complete',
    statusCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    dotCls: 'bg-emerald-500',
    desc: 'Local play failures route to offline screens',
    img: '/images/quickstart/Rectangle (7).png',
  },
  {
    title: 'Rate Limit Audit',
    status: 'Complete',
    statusCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    dotCls: 'bg-emerald-500',
    desc: 'Concurrent stream thresholds calculated',
    img: '/images/quickstart/Rectangle (8).png',
  },
  {
    title: 'SSO Governance',
    status: 'Needs Review',
    statusCls: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    dotCls: 'bg-amber-500',
    desc: 'SAML identity tokens tied to playback limits',
    img: '/images/quickstart/Rectangle (9).png',
  },
  {
    title: 'Changelog Owner',
    status: 'Complete',
    statusCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    dotCls: 'bg-emerald-500',
    desc: 'Assigned resource for API version tracking',
    img: '/images/quickstart/Rectangle (10).png',
  },
  {
    title: 'Redundant Ingest',
    status: 'Not Applicable',
    statusCls: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    dotCls: 'bg-amber-500',
    desc: 'Dual active servers configured for failover',
    img: '/images/quickstart/Rectangle (11).png',
  },
  {
    title: 'Asset Lifecycle',
    status: 'Complete',
    statusCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    dotCls: 'bg-emerald-500',
    desc: 'Recording retention and expiration active',
    img: '/images/quickstart/Rectangle (12).png',
  },
];

export function ReadinessModulesGapSection() {
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
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            The Gap Between First Success and Dependable Production
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Do not run production traffic through a basic quickstart setup. Verify our 8 operational readiness modules to ensure your software is resilient to high-volume user activity.
          </p>
        </div>

        {/* 8 Module Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {readinessModules.map((m, idx) => {
            return (
              <div
                key={idx}
                className="p-5 bg-slate-50/90 rounded-xl border border-gray-200 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm"
              >
                <div className="w-full h-28 relative rounded-lg overflow-hidden bg-slate-900">
                  <Image
                    src={m.img}
                    alt={m.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-slate-900 text-base font-bold">{m.title}</h3>
                    </div>
                    <div className={`px-2 py-0.5 rounded-full border flex items-center gap-1 text-[10px] font-bold ${m.statusCls}`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${m.dotCls}`} />
                      <span>{m.status}</span>
                    </div>
                  </div>
                  <p className="text-slate-600 text-xs font-normal leading-5">{m.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-gray-200">
          <span className="text-slate-600 text-sm font-normal">
            Operational guidelines are subject to change. Always verify current platform SLAs.
          </span>
          <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer shadow-md flex-shrink-0">
            <span className="text-gray-900 text-base font-bold">Review Production Checklist</span>
          </div>
        </div>
      </div>
    </section>
  );
}
