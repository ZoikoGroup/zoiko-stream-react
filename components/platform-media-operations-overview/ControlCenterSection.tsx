'use client';

import Image from 'next/image';

const controlSections = [
  'Live Broadcast',
  'State Summary',
  'Workflow Lanes',
  'Metrics',
  'Alert Queue',
  'Activity Logs',
];

export default function ControlCenterSection() {
  return (
    <section
      className="relative w-full px-4 sm:px-8 lg:px-28 py-16 sm:py-20 lg:py-24 border-b border-gray-200 flex flex-col gap-14 overflow-hidden min-h-[742px]"
      style={{
        backgroundImage: `url('/images/platform-media-operations-overview/bg (59).png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-col gap-3">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold leading-tight font-['Space_Grotesk']">
          Media Operations Control Center
        </h2>
        <p className="text-slate-500 text-lg font-normal leading-7 font-['Space_Grotesk']">
          Accountable operations in context.
        </p>
      </div>

      {/* Console UI */}
      <div className="w-full bg-white rounded-2xl border border-gray-200 shadow-2xl flex flex-col overflow-hidden">
        {/* Title bar */}
        <div className="h-10 px-4 bg-slate-50 border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-red-500 rounded-full" />
            <span className="w-2 h-2 bg-amber-600 rounded-full" />
            <span className="w-2 h-2 bg-teal-500 rounded-full" />
          </div>
          <span className="text-slate-500 text-xs font-normal font-['Space_Grotesk']">
            ZoikoStream Platform - Experience Orchestration Studio
          </span>
          <div className="w-10" />
        </div>

        {/* Console Content */}
        <div className="p-6 bg-slate-50 flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full lg:w-56 flex flex-col gap-3">
            <p className="text-slate-500 text-xs font-bold tracking-wide font-['Space_Grotesk'] uppercase">
              CONTROL SECTIONS
            </p>
            {controlSections.map((section, idx) => (
              <div
                key={section}
                className={`px-3 py-2.5 rounded-lg ${
                  idx === 0 ? 'bg-white border border-gray-200' : 'bg-transparent'
                }`}
              >
                <span
                  className={`text-xs font-bold font-['Space_Grotesk'] ${
                    idx === 0 ? 'text-blue-500' : 'text-slate-600'
                  }`}
                >
                  {section}
                </span>
              </div>
            ))}
          </div>

          {/* Main Area */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-zinc-950 text-lg font-bold font-['Space_Grotesk']">
                  Live Broadcast - Q3 All-Hands
                </p>
                <p className="text-slate-600 text-xs font-normal font-['Space_Grotesk']">
                  Scope: Organization | Owner: Ops Team | Active window: 14:00-15:30 UTC
                </p>
              </div>
              <div className="px-4 py-2.5 bg-white rounded-lg border border-gray-200">
                <span className="text-slate-900 text-xs font-bold font-['Space_Grotesk']">
                  Active (14:15)
                </span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-5">
              {/* Telemetry card */}
              <div className="flex-1 h-60 p-5 bg-white rounded-xl border border-gray-200 flex flex-col gap-3">
                <p className="text-teal-400 text-xs font-bold font-['Space_Grotesk']">
                  LIVE OPERATIONS TELEMETRY
                </p>
                <div className="relative flex-1 rounded-lg overflow-hidden">
                  <Image
                    src="/images/platform-media-operations-overview/Rectangle (110).png"
                    alt="Live Operations Telemetry"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Controls */}
              <div className="w-full lg:w-80 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <p className="text-zinc-950 text-xs font-bold font-['Space_Grotesk']">
                    Dependency Gating policy
                  </p>
                  <div className="px-4 py-3 bg-white rounded-md border border-gray-200 flex justify-between items-center">
                    <span className="text-gray-500 text-base font-normal  ">
                      Corporate Whitelist Active
                    </span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 6L8 10L12 6" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-zinc-950 text-xs font-bold font-['Space_Grotesk']">
                    SLA State Checklist
                  </p>
                  <div className="px-4 py-3 bg-white rounded-md border border-gray-200 flex justify-between items-center">
                    <span className="text-gray-500 text-base font-normal  ">
                      All states validated (Current)
                    </span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 6L8 10L12 6" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
