import React from 'react';
import Link from 'next/link';

export default function BroadcastOperationSection() {
  return (
    <section className="relative w-full bg-slate-50 py-20 md:py-28 border-b border-gray-200 text-slate-900 overflow-hidden">
      {/* Background Accent Glows */}
      <div className="size-96 -left-44 -top-28 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-slate-900 leading-tight">
            How a scheduled or continuous broadcast is operated.
          </h2>
        </div>

        <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Timeline */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <span className="text-slate-900 text-lg font-bold  ">
              ACTIVE BROADCAST PIPELINE
            </span>

            <div className="flex flex-col gap-3">
              <div className="p-4 bg-slate-50 rounded-lg border border-gray-200 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="text-blue-600 text-sm font-bold  ">
                    09:00 AM
                  </span>
                  <span className="text-slate-900 text-sm font-normal  ">
                    Studio A Stream Active
                  </span>
                </div>
                <span className="text-emerald-500 text-xs font-bold  ">
                  LIVE
                </span>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg border border-gray-200 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="text-blue-600 text-sm font-bold  ">
                    10:30 AM
                  </span>
                  <span className="text-slate-900 text-sm font-normal  ">
                    Keynote Transition Gate
                  </span>
                </div>
                <span className="text-slate-500 text-xs font-bold  ">
                  PENDING
                </span>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg border border-gray-200 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="text-blue-600 text-sm font-bold  ">
                    12:00 PM
                  </span>
                  <span className="text-slate-900 text-sm font-normal  ">
                    Breakout Stage 1 Routing
                  </span>
                </div>
                <span className="text-slate-500 text-xs font-bold  ">
                  STANDBY
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Capabilities */}
          <div className="lg:col-span-5 flex flex-col gap-5 p-6 bg-slate-50 rounded-xl border border-gray-200">
            <span className="text-slate-900 text-base font-bold  ">
              OPERATIONAL CAPABILITIES
            </span>

            <div className="flex flex-col gap-3 text-slate-600 text-xs font-normal   leading-relaxed">
              <p>• Hot-standby dual inputs automatically evaluate path health.</p>
              <p>• Regional stream routing dynamically aligns latency targets.</p>
              <p>• Compliance rules enforce SAML-SSO policies during runtime.</p>
            </div>

            <div className="w-full h-px border-b border-gray-200" />

            <Link
              href="/talk-to-an-expert"
              className="px-7 py-3.5 rounded-lg border border-slate-400 text-slate-900 text-base font-bold   text-center hover:bg-slate-200 transition-colors"
            >
              Review operating model
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
