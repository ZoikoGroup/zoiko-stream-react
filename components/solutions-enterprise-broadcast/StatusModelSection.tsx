import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const catalogStates = [
  { title: 'Healthy / Ready', dotCls: 'bg-emerald-500', desc: 'All 7 telemetry segments nominal, meeting complete service SLA bounds.' },
  { title: 'Degraded', dotCls: 'bg-amber-500', desc: 'A non-critical stream is falling below target throughput constraints.' },
  { title: 'Partial', dotCls: 'bg-amber-500', desc: 'Secondary output is inactive while main streams perform normally.' },
  { title: 'Failed', dotCls: 'bg-red-500', desc: 'Critical program pathway is broken, triggering emergency backup slates.' },
  { title: 'Unknown', dotCls: 'bg-slate-500', desc: 'Telemetry connection lost. Signal integrity cannot be verified.' },
  { title: 'Recovering', dotCls: 'bg-blue-500', desc: 'Handshake parameters re-negotiating. Automatic reconnection active.' },
  { title: 'Stale', dotCls: 'bg-slate-500', desc: 'Configuration out of sync. Reload active workspace to update.' },
  { title: 'Ended', dotCls: 'bg-emerald-500', desc: 'Broadcast teardown executed cleanly. Archives committed to cold storage.' },
];

export function StatusModelSection() {
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
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold  leading-tight lg:leading-[52px]">
            Show current truth, not a success narrative
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal  leading-7">
            Give operators one inspectable status model.
          </p>
        </div>

        {/* Live Desk Console Box (Dark Card) */}
        <div className="w-full p-8 bg-gray-950 rounded-2xl flex flex-col gap-6 shadow-xl border border-gray-800">
          <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-3">
                <h3 className="text-white text-2xl font-bold ">Enterprise Broadcast Live Desk</h3>
                <div className="px-2 py-1 bg-red-500/10 rounded-sm flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-red-500 text-[10px] font-bold ">LIVE PROGRAM</span>
                </div>
              </div>
              <span className="text-slate-400 text-xs font-normal ">Config: H1 Global Executive Town Hall (Brief v4.2)</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-400 text-xs font-normal ">Last Updated: 12:08:45 PM (Every 15s)</span>
              <div className="p-1.5 bg-gray-800 rounded-sm">
                <div className="w-3.5 h-3.5 border border-teal-400 rounded-xs" />
              </div>
            </div>
          </div>

          <div className="w-full border-t border-gray-800" />

          {/* Grid of 9 Telemetry Blocks */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* 1. Readiness */}
            <div className="p-5 bg-gray-800 rounded-lg border border-gray-700 flex flex-col gap-3">
              <span className="text-teal-400 text-sm font-bold ">READINESS SUMMARY</span>
              <div className="flex flex-col gap-2 text-xs ">
                <div className="flex justify-between"><span className="text-slate-400">Schedule Staging</span><span className="text-emerald-500 font-bold">Ready</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Source Handshake</span><span className="text-emerald-500 font-bold">Ready</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Security &amp; SSO</span><span className="text-emerald-500 font-bold">Ready</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Caption Ingest</span><span className="text-amber-500 font-bold">Degraded</span></div>
              </div>
            </div>

            {/* 2. Contribution */}
            <div className="p-5 bg-gray-800 rounded-lg border border-gray-700 flex flex-col gap-3">
              <span className="text-teal-400 text-sm font-bold ">CONTRIBUTION PLAN</span>
              <div className="flex flex-col gap-2 text-xs ">
                <div className="flex justify-between"><span className="text-slate-400">Active Source</span><span className="text-white font-bold">SRT-Ingest-Main</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Source State</span><span className="text-emerald-500 font-bold">Receiving</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Last Verified</span><span className="text-white">12:08:30 PM</span></div>
              </div>
            </div>

            {/* 3. Program State */}
            <div className="p-5 bg-gray-800 rounded-lg border border-gray-700 flex flex-col gap-3">
              <span className="text-teal-400 text-sm font-bold ">PROGRAM STATE</span>
              <div className="flex flex-col gap-2 text-xs ">
                <div className="flex justify-between"><span className="text-slate-400">Current State</span><span className="text-red-500 font-bold">LIVE</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Operator In Charge</span><span className="text-white">James Holloway</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Run-of-Show Segment</span><span className="text-teal-400 font-bold">H1 Strategy Keynote</span></div>
              </div>
            </div>

            {/* 4. Audience & Security */}
            <div className="p-5 bg-gray-800 rounded-lg border border-gray-700 flex flex-col gap-3">
              <span className="text-teal-400 text-sm font-bold ">AUDIENCE &amp; SECURITY</span>
              <div className="flex flex-col gap-2 text-xs ">
                <div className="flex justify-between"><span className="text-slate-400">Access Intent</span><span className="text-white font-bold">Restricted (SSO Only)</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Policy State</span><span className="text-emerald-500 font-bold">Strict Enforcement</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Auth Failures (10m)</span><span className="text-white font-bold">0 (Nominal)</span></div>
              </div>
            </div>

            {/* 5. Accessibility */}
            <div className="p-5 bg-gray-800 rounded-lg border border-gray-700 flex flex-col gap-3">
              <span className="text-teal-400 text-sm font-bold ">ACCESSIBILITY TRACKS</span>
              <div className="flex flex-col gap-2 text-xs ">
                <div className="flex justify-between"><span className="text-slate-400">Primary Captions</span><span className="text-amber-500 font-bold">Degraded (Latency)</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Multi-Language Audio</span><span className="text-emerald-500 font-bold">Healthy (ES / FR)</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Player Focus State</span><span className="text-white">WCAG Compliant</span></div>
              </div>
            </div>

            {/* 6. Delivery */}
            <div className="p-5 bg-gray-800 rounded-lg border border-gray-700 flex flex-col gap-3">
              <span className="text-teal-400 text-sm font-bold ">DELIVERY &amp; OUTLETS</span>
              <div className="flex flex-col gap-2 text-xs ">
                <div className="flex justify-between"><span className="text-slate-400">Destination Hub</span><span className="text-white font-bold">Internal Live Portal</span></div>
                <div className="flex justify-between"><span className="text-slate-400">CDN Edge Health</span><span className="text-emerald-500 font-bold">Optimal (12 Regions)</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Target Latency</span><span className="text-white">Ultra-Low (~2.4s)</span></div>
              </div>
            </div>

            {/* 7. Archiving */}
            <div className="p-5 bg-gray-800 rounded-lg border border-gray-700 flex flex-col gap-3">
              <span className="text-teal-400 text-sm font-bold ">ARCHIVING &amp; REPLAY</span>
              <div className="flex flex-col gap-2 text-xs ">
                <div className="flex justify-between"><span className="text-slate-400">Live Archive Status</span><span className="text-emerald-500 font-bold">Recording Active</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Instant Replay Engine</span><span className="text-white font-bold">Stage Ready</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Cold Storage Sync</span><span className="text-white">Armed (US-East / EU-West)</span></div>
              </div>
            </div>

            {/* 8. Open Incidents */}
            <div className="p-5 bg-gray-800 rounded-lg border border-gray-700 flex flex-col gap-3">
              <span className="text-red-500 text-sm font-bold ">OPEN INCIDENTS (1)</span>
              <div className="flex flex-col gap-2 text-xs ">
                <div className="flex justify-between"><span className="text-slate-400">Incident Ref</span><span className="text-red-500 font-bold">INC-402 (Captions Delay)</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Operational Impact</span><span className="text-amber-500 font-bold">Minor (Slight drift)</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Incident Owner</span><span className="text-white">m_webb (Accessibility)</span></div>
              </div>
            </div>

            {/* 9. Event Timeline */}
            <div className="p-5 bg-gray-800 rounded-lg border border-gray-700 flex flex-col gap-3">
              <span className="text-teal-400 text-sm font-bold ">EVENT TIMELINE (LOGS)</span>
              <div className="flex flex-col gap-1 text-xs ">
                <div><span className="text-white font-bold">12:04 PM</span> <span className="text-slate-400">Ingest main reconnected via admin force.</span></div>
                <div><span className="text-white font-bold">12:00 PM</span> <span className="text-slate-400">Program state transitions to LIVE.</span></div>
                <div><span className="text-white font-bold">11:58 AM</span> <span className="text-slate-400">SSO directory boundary restricted.</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Operational Health State Catalog */}
        <div className="w-full p-8 bg-slate-50/90 rounded-xl border border-gray-200 flex flex-col gap-6 shadow-sm backdrop-blur-sm">
          <div className="w-full flex flex-col gap-2">
            <h3 className="text-slate-900 text-xl font-bold ">Operational Health State Catalog</h3>
            <p className="text-slate-600 text-sm font-medium  leading-5">
              A structured reference for interpreting live broadcast telemetry states - organized by severity and operational impact.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {catalogStates.map((cat, idx) => (
              <div key={idx} className="p-5 bg-white rounded-xl border border-slate-200 flex flex-col gap-2.5 shadow-xs">
                <div className="flex items-center gap-2.5">
                  <div className={`w-2.5 h-2.5 rounded-full ${cat.dotCls}`} />
                  <h4 className="text-slate-900 text-base font-bold ">{cat.title}</h4>
                </div>
                <p className="text-slate-600 text-xs font-normal  leading-4">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
