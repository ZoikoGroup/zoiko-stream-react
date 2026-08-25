import React from 'react';
import Image from 'next/image';
 import bg147 from '@/public/images/Organization-overview/bg (147).png';


export function OperatingModelSection() {
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
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold  leading-tight lg:leading-[48px]">
            Define the operating model before the technology
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal  leading-7">
            Prevent enterprise broadcast from becoming a catch-all for company size or important events.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* STEP 01 */}
          <div className="p-8 bg-slate-50/90 rounded-xl border border-gray-200 flex flex-col justify-start items-start gap-6 shadow-sm backdrop-blur-sm">
            <div className="w-full flex flex-col gap-3">
              <span className="text-blue-500 text-sm font-bold ">STEP 01</span>
              <h3 className="text-slate-900 text-xl font-bold  leading-7">
                Who primarily operates the broadcast?
              </h3>
            </div>
            <div className="w-full flex flex-col gap-2.5">
              <div className="p-3.5 bg-white rounded-lg border-[1.5px] border-teal-400 flex items-center gap-3">
                <div className="w-2 h-2 bg-teal-400 rounded-full" />
                <span className="text-slate-900 text-sm font-bold  leading-5">Our organization (In-house)</span>
              </div>
              <div className="p-3.5 bg-white rounded-lg border border-gray-200 flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-200 rounded-full" />
                <span className="text-slate-600 text-sm font-normal  leading-5">Shared / assisted implementation</span>
              </div>
              <div className="p-3.5 bg-white rounded-lg border border-gray-200 flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-200 rounded-full" />
                <span className="text-slate-600 text-sm font-normal  leading-5">Professionally managed Live Events</span>
              </div>
            </div>
          </div>

          {/* STEP 02 */}
          <div className="p-8 bg-slate-50/90 rounded-xl border border-gray-200 flex flex-col justify-start items-start gap-6 shadow-sm backdrop-blur-sm">
            <div className="w-full flex flex-col gap-3">
              <span className="text-blue-500 text-sm font-bold ">STEP 02</span>
              <h3 className="text-slate-900 text-xl font-bold  leading-7">
                What audience intent applies?
              </h3>
            </div>
            <div className="w-full flex flex-col gap-2.5">
              <div className="p-3.5 bg-white rounded-lg border border-gray-200 flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-200 rounded-full" />
                <span className="text-slate-600 text-sm font-normal  leading-5">Public-facing broadcast</span>
              </div>
              <div className="p-3.5 bg-white rounded-lg border-[1.5px] border-teal-400 flex items-center gap-3">
                <div className="w-2 h-2 bg-teal-400 rounded-full" />
                <span className="text-slate-900 text-sm font-bold  leading-5">Restricted (SAML SSO Gated)</span>
              </div>
              <div className="p-3.5 bg-white rounded-lg border border-gray-200 flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-200 rounded-full" />
                <span className="text-slate-600 text-sm font-normal  leading-5">Embargoed / Internal Only</span>
              </div>
            </div>
          </div>

          {/* STEP 03 */}
          <div className="p-8 bg-slate-50/90 rounded-xl border border-gray-200 flex flex-col justify-start items-start gap-6 shadow-sm backdrop-blur-sm">
            <div className="w-full flex flex-col gap-3">
              <span className="text-blue-500 text-sm font-bold ">STEP 03</span>
              <h3 className="text-slate-900 text-xl font-bold  leading-7">
                Should output become instant replay?
              </h3>
            </div>
            <div className="w-full flex flex-col gap-2.5">
              <div className="p-3.5 bg-white rounded-lg border-[1.5px] border-teal-400 flex items-center gap-3">
                <div className="w-2 h-2 bg-teal-400 rounded-full" />
                <span className="text-slate-900 text-sm font-bold  leading-5">Yes (Durable archival replay)</span>
              </div>
              <div className="p-3.5 bg-white rounded-lg border border-gray-200 flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-200 rounded-full" />
                <span className="text-slate-600 text-sm font-normal  leading-5">No (Live-only stream deletion)</span>
              </div>
              <div className="p-3.5 bg-white rounded-lg border border-gray-200 flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-200 rounded-full" />
                <span className="text-slate-600 text-sm font-normal  leading-5">Decide later / Custom workflow</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
