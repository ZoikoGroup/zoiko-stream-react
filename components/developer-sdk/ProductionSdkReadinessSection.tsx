import React from 'react';
import Image from 'next/image';

const readinessChecklist = [
  {
    num: '1.',
    label: 'Version & Currentness: Active suggestions pin latest major v3 release.',
    status: 'READY',
    statusCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30',
  },
  {
    num: '2.',
    label: 'Authentication: Mapped credentials isolated inside structured secrets.',
    status: 'READY',
    statusCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30',
  },
  {
    num: '3.',
    label: 'Retries & Idempotency: Auto-generated client key headers set.',
    status: 'READY',
    statusCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30',
  },
  {
    num: '4.',
    label: 'Error handling & limits: Automatic rate-limit catchers mapped.',
    status: 'NOT REVIEWED',
    statusCls: 'bg-amber-500/10 text-amber-500 border-amber-500/30',
  },
];

export function ProductionSdkReadinessSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-sdk/bg (8).png"
          alt="Production SDK Readiness Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0  " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            Production SDK readiness — from local success to supported operation.
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            A concrete readiness review that distinguishes local success from production readiness.
          </p>
        </div>

        {/* 2 Column Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Checklist */}
          <div className="lg:col-span-7 p-8 bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col gap-6 shadow-xl backdrop-blur-md">
            <h3 className="text-white text-xl font-bold font-mono">Verification Checklist &amp; Status</h3>
            <div className="flex flex-col divide-y divide-gray-800">
              {readinessChecklist.map((item, idx) => (
                <div key={idx} className="py-3.5 flex justify-between items-center gap-4">
                  <span className="text-white text-sm leading-5">{item.label}</span>
                  <span className={`px-2.5 py-1 rounded-full border text-xs font-bold font-mono whitespace-nowrap ${item.statusCls}`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Verification Complete Card */}
          <div className="lg:col-span-5 p-8 bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col gap-6 shadow-xl backdrop-blur-md">
            <h3 className="text-white text-lg font-bold font-mono">Verification Complete?</h3>
            <p className="text-slate-400 text-sm leading-5">
              Move seamlessly from local testing to global deployment. Review our live streaming references or schedule a production checklist review.
            </p>

            <div className="flex flex-col gap-3">
              <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center cursor-pointer shadow-md">
                <span className="text-gray-950 text-base font-bold">Continue to Live streaming API</span>
              </div>
              <div className="px-7 py-3.5 rounded-lg border border-slate-400 flex items-center justify-center cursor-pointer hover:border-white transition-colors">
                <span className="text-white text-base font-bold">Talk to an expert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
