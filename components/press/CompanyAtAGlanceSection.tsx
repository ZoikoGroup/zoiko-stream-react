import React from 'react';

const factItems = [
  { label: 'Platform', val: 'Video streaming platform with Live Events and developer/API capabilities' },
  { label: 'Company', val: 'Developed and operated by Zoiko Tech, part of Zoiko Group' },
  { label: 'Corporate relationship', val: 'Powered by Zoiko Cloud shared technology and infrastructure' },
  { label: 'Headquarters', val: 'United States, with a presence in Europe' },
  { label: 'Product scope', val: 'Platform, Live Events and developer/enterprise capabilities' },
];

export function CompanyAtAGlanceSection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-12">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          <span className="text-blue-400 text-xs font-bold     uppercase tracking-wider">
            GOVERNED ACCURACY
          </span>
        </div>
        <h2 className="text-gray-800 text-3xl font-bold    ">
          ZoikoStream at a glance.
        </h2>
      </div>

      <div className="w-full max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column (6 cols): Fact table */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="w-full border-t border-zinc-200 divide-y divide-zinc-200">
            {factItems.map((item, idx) => (
              <div key={idx} className="py-4 flex justify-between items-start gap-4">
                <span className="w-40 text-gray-400 text-sm font-semibold     flex-shrink-0">
                  {item.label}
                </span>
                <span className="text-gray-800 text-sm font-normal     leading-6 text-right">
                  {item.val}
                </span>
              </div>
            ))}
          </div>

          <p className="text-gray-400 text-xs font-normal    ">
            Last verified: August 2026 · Source: Communications
          </p>
        </div>

        {/* Right Column (6 cols): Boilerplates */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          {/* 50-word Boilerplate */}
          <div className="p-6 bg-slate-50 rounded-2xl border border-zinc-200 flex flex-col gap-4 shadow-xs">
            <span className="text-indigo-500 text-xs font-bold     uppercase tracking-wide">
              50-WORD MEDIA BOILERPLATE
            </span>
            <p className="text-gray-800 text-sm font-normal     leading-6">
              ZoikoStream is a video streaming platform developed and operated by Zoiko Tech, part of Zoiko Group. It provides infrastructure and tools for organizations and developers to build, manage and deliver video experiences, including Live Events, with platform, developer and enterprise capabilities designed for reliable operation at scale.
            </p>
            <div className="px-4 py-2 bg-white rounded-lg border border-zinc-200 w-fit cursor-pointer hover:bg-slate-100 transition-colors">
              <span className="text-gray-800 text-xs font-bold font-['Arial']">Copy</span>
            </div>
          </div>

          {/* Standard Boilerplate */}
          <div className="p-6 bg-slate-50 rounded-2xl border border-zinc-200 flex flex-col gap-4 shadow-xs">
            <span className="text-indigo-500 text-xs font-bold     uppercase tracking-wide">
              STANDARD MEDIA BOILERPLATE
            </span>
            <p className="text-gray-800 text-sm font-normal     leading-6">
              ZoikoStream is a video streaming platform developed and operated by Zoiko Tech, part of Zoiko Group. The platform gives organizations and developers the infrastructure, APIs, workflows and operating capabilities needed to build, manage and deliver video experiences. ZoikoStream includes Live Events capabilities for planned broadcasts and enterprise streaming use cases, alongside developer and operational tooling. The platform is designed around reliability, security, accessibility and clear operational governance.
            </p>
            <div className="px-4 py-2 bg-white rounded-lg border border-zinc-200 w-fit cursor-pointer hover:bg-slate-100 transition-colors">
              <span className="text-gray-800 text-xs font-bold font-['Arial']">Copy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
