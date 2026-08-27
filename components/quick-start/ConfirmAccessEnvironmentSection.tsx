import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const accessStates = [
  {
    title: 'Anonymous',
    desc: 'No session active',
    badge: 'Not configured',
    badgeCls: 'bg-gray-200 text-slate-600',
  },
  {
    title: 'Signed In',
    desc: 'Session validated',
    badge: 'Ready',
    badgeCls: 'bg-blue-500 text-white',
  },
  {
    title: 'Access Pending',
    desc: 'Verification in progress',
    badge: 'Pending',
    badgeCls: 'bg-gray-200 text-slate-600',
  },
  {
    title: 'Permission Denied',
    desc: 'Organization limits',
    badge: 'Restricted',
    badgeCls: 'bg-gray-200 text-slate-600',
  },
];

export function ConfirmAccessEnvironmentSection() {
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
            Confirm Access and Working Environment
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Every operation on ZoikoStream is secure by default. We must first establish your organization access credentials before instantiating active streams.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Card: Working Environment */}
          <div className="p-8 bg-slate-50/90 rounded-xl border border-gray-200 flex flex-col gap-6 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <h3 className="text-slate-900 text-lg font-bold">Working Environment</h3>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-slate-600 text-sm font-normal">Current Access State:</span>
                <div className="px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                  <span className="text-blue-500 text-xs font-bold">READY</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-slate-600 text-sm font-normal">Permissions Required:</span>
                <span className="text-slate-900 text-sm font-bold">stream:write, telemetry:read</span>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="px-7 py-3.5 bg-slate-900 rounded-lg flex justify-center items-center cursor-pointer hover:bg-slate-800 transition-colors w-fit">
                <span className="text-white text-base font-bold">Continue</span>
              </div>
            </div>
          </div>

          {/* Right Box: Access States Matrix */}
          <div className="flex flex-col gap-4">
            <span className="text-slate-600 text-sm font-bold tracking-wide uppercase">ACCESS STATES MATRIX</span>
            <div className="flex flex-col gap-3">
              {accessStates.map((st, idx) => {
                return (
                  <div
                    key={idx}
                    className="p-5 bg-slate-50/90 rounded-lg border border-gray-200 flex justify-between items-center shadow-2xs backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <span className="text-slate-900 text-base font-bold">{st.title}</span>
                        <span className="text-slate-600 text-xs font-normal">{st.desc}</span>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-bold ${st.badgeCls}`}>
                      {st.badge}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
