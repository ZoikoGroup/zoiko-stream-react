import React from 'react';

const layers = [
  { num: '01', name: 'Admin Authority', tag: 'CUSTOMER', style: 'bg-red-500/10 text-red-500' },
  { num: '02', name: 'Audience Identity', tag: 'SHARED', style: 'bg-amber-500/10 text-amber-500' },
  { num: '03', name: 'Policy Evaluation', tag: 'PLATFORM', style: 'bg-emerald-500/10 text-emerald-500' },
  { num: '04', name: 'Playback Protection', tag: 'PLATFORM', style: 'bg-emerald-500/10 text-emerald-500' },
  { num: '05', name: 'Evidence & Lifecycle', tag: 'SHARED', style: 'bg-amber-500/10 text-amber-500' },
];

export default function FiveControlLayersSection() {
  return (
    <section className="relative w-full bg-slate-50 py-20 md:py-28 border-b border-gray-200 text-slate-900 overflow-hidden" id="security">
      {/* Background Accent Glows */}
      <div className="size-96 -left-44 -top-28 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-slate-900 leading-tight">
            Five control layers. One explainable access path.
          </h2>
          <p className="text-slate-600 text-lg font-normal   leading-relaxed max-w-3xl">
            ZoikoStream splits system responsibilities cleanly. Know exactly what controls you manage versus what the platform maintains.
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="size-3 bg-red-500 rounded-xs" />
            <span className="text-slate-900 text-xs font-bold  ">Customer-Owned</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 bg-amber-500 rounded-xs" />
            <span className="text-slate-900 text-xs font-bold  ">Shared Control</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 bg-emerald-500 rounded-xs" />
            <span className="text-slate-900 text-xs font-bold  ">ZoikoStream-Owned</span>
          </div>
        </div>

        {/* 5 Layer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {layers.map((lyr, idx) => (
            <div
              key={idx}
              className="p-5 bg-white rounded-xl border border-gray-200 shadow-xs flex flex-col justify-between h-36 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center">
                <span className="text-slate-600 text-sm font-bold  ">
                  {lyr.num}
                </span>
                <span className={`px-2 py-0.5 rounded text-[9px] font-bold   uppercase ${lyr.style}`}>
                  {lyr.tag}
                </span>
              </div>

              <h3 className="text-slate-900 text-base font-bold  ">
                {lyr.name}
              </h3>
            </div>
          ))}
        </div>

        {/* 3 Responsibility Domains */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          <div className="flex flex-col gap-4">
            <h3 className="text-slate-900 text-lg font-bold  ">Customer Domain</h3>
            <ul className="flex flex-col gap-2.5 text-slate-600 text-sm font-normal  ">
              <li>• Authoritative user and entitlement database</li>
              <li>• Definition of business policy intent</li>
              <li>• Approval of audience registry</li>
              <li>• Client workstation environmental security</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-slate-900 text-lg font-bold  ">Shared Domain</h3>
            <ul className="flex flex-col gap-2.5 text-slate-600 text-sm font-normal  ">
              <li>• Secure API and policy mapping</li>
              <li>• End-to-end sandbox and integration testing</li>
              <li>• Custom playback user experiences</li>
              <li>• Access review and incident management</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-slate-900 text-lg font-bold  ">Platform Domain</h3>
            <ul className="flex flex-col gap-2.5 text-slate-600 text-sm font-normal  ">
              <li>• Verification of outcomes in capability registry</li>
              <li>• Ultra-low latency global CDN mechanics</li>
              <li>• SSO federation and encryption boundaries</li>
              <li>• Attributable compliance records compilation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
