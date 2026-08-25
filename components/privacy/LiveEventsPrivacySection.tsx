import React from 'react';

export function LiveEventsPrivacySection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 bg-slate-50 border-b border-zinc-200 flex flex-col justify-start items-start gap-10">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">
            VIEWER AND CUSTOMER-HOSTED CONTENT PRIVACY
          </span>
        </div>
        <h2 className="text-neutral-700 text-3xl font-bold">
          Privacy for Live Events.
        </h2>
      </div>

      {/* 2 Large Cards Grid */}
      <div className="w-full max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Card */}
        <div className="p-8 bg-white rounded-2xl border border-zinc-200 flex flex-col justify-between gap-6 shadow-xs">
          <div className="flex flex-col gap-3">
            <h3 className="text-neutral-700 text-lg font-bold">
              Viewer and customer-hosted content privacy
            </h3>
            <p className="text-gray-500 text-sm font-normal leading-6">
              If you watched a video hosted by a ZoikoStream customer, that customer may determine why your viewer information is collected. ZoikoStream may process it under the customer&apos;s instructions and may separately process limited data for its own approved operational purposes.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-2">
            <div className="px-6 py-3 rounded-lg border border-neutral-700 cursor-pointer hover:bg-slate-50 transition-colors">
              <span className="text-neutral-700 text-base font-semibold">
                Understand Live Events privacy
              </span>
            </div>
            <span className="text-blue-400 text-sm font-semibold cursor-pointer">
              I am a viewer →
            </span>
          </div>
        </div>

        {/* Right Card */}
        <div className="p-8 bg-white rounded-2xl border border-zinc-200 flex flex-col justify-between gap-6 shadow-xs">
          <div className="flex flex-col gap-3">
            <h3 className="text-neutral-700 text-lg font-bold">
              Live Events privacy
            </h3>
            <p className="text-gray-500 text-sm font-normal leading-6">
              Event organizer and ZoikoStream roles can differ by registration, access model, stream delivery and contract. Interactive features like chat, Q&A and captions may introduce additional identity visibility or data handling.
            </p>
          </div>

          <div className="pt-2">
            <div className="px-6 py-3 rounded-lg border border-neutral-700 cursor-pointer hover:bg-slate-50 transition-colors w-fit">
              <span className="text-neutral-700 text-base font-semibold">
                Understand Live Events privacy
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
