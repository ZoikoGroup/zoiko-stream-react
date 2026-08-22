'use client';

import React, { useState } from 'react';

const prerecordedSteps = [
  { num: '✓', title: 'Media Ready', desc: 'Source file uploaded to bucket', done: true },
  { num: '✓', title: 'Source Language Verified', desc: 'Locale and dialect verified via automated metadata', done: true },
  { num: '✓', title: 'Caption Source Selected', desc: 'Human transcription or advanced speech-to-text path configured', done: true },
  { num: '✓', title: 'Processing', desc: 'Sync engine aligns text offsets and wraps lines', done: true },
  { num: '05', title: 'Review Phase', desc: 'Compliance team approves timing, completeness, and styling', current: true },
  { num: '06', title: 'Publishing', desc: 'Durable VTT/SRT sidecars locked to media resource', done: false },
  { num: '07', title: 'Correction & Versioning', desc: 'Audit logs preserve edit revisions of live assets', done: false },
];

const liveStreamMonitors = [
  { label: 'Event Configured', tag: 'EXPECTED', tagStyle: 'bg-emerald-500/10 text-emerald-500' },
  { label: 'Source Language Confirmed', tag: 'EXPECTED', tagStyle: 'bg-emerald-500/10 text-emerald-500' },
  { label: 'Caption Path Expected', tag: 'RECEIVING', tagStyle: 'bg-blue-500/10 text-blue-500' },
  { label: 'Telemetry & Performance Health', tag: 'DEGRADED', tagStyle: 'bg-amber-500/10 text-amber-500' },
  { label: 'Viewer Delivery Status', tag: 'LOST', tagStyle: 'bg-red-500/10 text-red-500' },
  { label: 'Issue Escalation Pathway', tag: 'RESTORED', tagStyle: 'bg-emerald-500/10 text-emerald-500' },
  { label: 'Post-Live Review Lifecycle', tag: 'ENDED', tagStyle: 'bg-gray-800 text-slate-400' },
];

export default function CaptionWorkflowSection() {
  const [activeTab, setActiveTab] = useState<'prerecorded' | 'live'>('prerecorded');

  return (
    <section className="relative w-full bg-slate-50 py-20 md:py-28 border-b border-gray-200 text-slate-900 overflow-hidden">
      {/* Background Accent Glows */}
      <div className="size-96 -left-44 -top-28 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-slate-900 leading-tight">
            Caption Workflow
          </h2>
          <p className="text-slate-600 text-lg font-normal   leading-relaxed max-w-3xl">
            Prerecorded, live, and source-language readiness
          </p>
        </div>

        {/* Tab Switcher Header */}
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="p-1.5 bg-slate-100 rounded-lg flex items-center gap-1 border border-gray-200">
            <button
              onClick={() => setActiveTab('prerecorded')}
              className={`px-6 py-2.5 rounded-md text-sm font-bold   transition-colors ${
                activeTab === 'prerecorded'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Prerecorded Flow
            </button>
            <button
              onClick={() => setActiveTab('live')}
              className={`px-6 py-2.5 rounded-md text-sm font-bold   transition-colors ${
                activeTab === 'live'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Live Stream Flow
            </button>
          </div>

          <span className="text-blue-600 text-sm font-bold   uppercase">
            ACTIVE PROCESS: {activeTab === 'prerecorded' ? 'PRERECORDED INGEST' : 'LIVE STREAM'}
          </span>
        </div>

        {/* 2 Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Prerecorded Pipeline */}
          <div className="lg:col-span-6 p-8 bg-stone-50 rounded-2xl border border-gray-200 shadow-xs flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h3 className="text-slate-900 text-lg font-bold  ">
                Prerecorded File Pipeline
              </h3>
              <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-bold   uppercase rounded-full">
                Operational
              </span>
            </div>

            <div className="flex flex-col gap-1">
              {prerecordedSteps.map((st, idx) => (
                <div key={idx} className="flex items-start gap-4 pb-4">
                  <div className="flex flex-col items-center shrink-0">
                    <div
                      className={`size-7 rounded-full flex items-center justify-center text-xs font-bold   ${
                        st.done
                          ? 'bg-blue-500 text-white'
                          : st.current
                          ? 'bg-teal-400 text-slate-950'
                          : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {st.num}
                    </div>
                    {idx < prerecordedSteps.length - 1 && (
                      <div className="w-0.5 h-6 bg-slate-200 my-1" />
                    )}
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <h4
                      className={`text-base font-bold   ${
                        st.current ? 'text-teal-500' : 'text-slate-900'
                      }`}
                    >
                      {st.title}
                    </h4>
                    <p className="text-slate-600 text-xs font-normal   leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Live Ingest Stream Monitor */}
          <div className="lg:col-span-6 p-8 bg-stone-50 rounded-2xl border border-gray-200 shadow-xs flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h3 className="text-slate-900 text-lg font-bold  ">
                Live Ingest Stream Monitor
              </h3>
              <span className="px-2.5 py-1 bg-blue-500/10 text-blue-500 text-xs font-bold   uppercase rounded-full">
                Receiving Stream
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {liveStreamMonitors.map((m, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-white rounded-lg border border-gray-200 flex justify-between items-center"
                >
                  <span className="text-slate-900 text-sm font-bold  ">
                    {m.label}
                  </span>
                  <span className={`px-2.5 py-1 text-xs font-bold   uppercase rounded-full ${m.tagStyle}`}>
                    {m.tag}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-4 bg-white rounded-lg border border-gray-200 flex flex-col gap-3">
              <span className="text-slate-600 text-xs font-bold  ">
                TELEMETRY LOGS
              </span>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-600 font-normal  ">Last status change:</span>
                <span className="text-slate-900 font-semibold  ">14 seconds ago (Degraded State Detected)</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-600 font-normal  ">SLA Class Owner:</span>
                <span className="text-slate-900 font-semibold  ">Solutions Eng / Enterprise Operations</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-2">
          <button
            type="button"
            className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold   hover:opacity-90 transition-opacity"
          >
            Validate Live Caption Workflow
          </button>
        </div>
      </div>
    </section>
  );
}
