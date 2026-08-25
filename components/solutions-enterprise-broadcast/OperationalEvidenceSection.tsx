import React from 'react';
import Image from 'next/image';

const evidenceCards = [
  {
    title: 'Operational Evidence',
    desc: 'Ingest latency, failover counts, system degradation metrics',
    guardrail: 'Guardrail: No trace to local client IP addresses',
  },
  {
    title: 'Audience/Media Aggregate',
    desc: 'Total concurrent viewers, packet delivery, regional ratios',
    guardrail: 'Guardrail: Aggregated results only. Zero user cookies',
  },
  {
    title: 'Access Verification',
    desc: 'SSO connection signatures, authentication token timings',
    guardrail: 'Guardrail: Audited secure IT compliance records',
  },
  {
    title: 'Accessibility Telemetry',
    desc: 'Caption delay rates, audio track selection, screen-reader use',
    guardrail: 'Guardrail: Anonymized utility counts only',
  },
  {
    title: 'Replay Lifecycle',
    desc: 'Transcoding latency, cold archive replication, storage states',
    guardrail: 'Guardrail: Restricted administrative oversight log',
  },
  {
    title: 'Change & Configuration',
    desc: 'Versioned brief state adjustments, operator override logging',
    guardrail: 'Guardrail: Attributed strictly to system managers',
  },
];

export function OperationalEvidenceSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-gray-950/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/solutions-enterprise-broadcast/bg (5).png"
          alt="Operational Evidence Background"
          fill
          className="object-cover opacity-25"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold  leading-tight lg:leading-[50px]">
            Improve operations without profiling people
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal  leading-7">
            Use evidence to improve preparation, reliability and replay value.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column (7 cols): 6 Evidence Cards */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {evidenceCards.map((ec, idx) => (
              <div
                key={idx}
                className="p-5 bg-zinc-900/80 rounded-lg border border-gray-800 flex flex-col gap-3 backdrop-blur-sm"
              >
                <h3 className="text-white text-base font-bold ">{ec.title}</h3>
                <p className="text-slate-400 text-xs font-normal  leading-4">{ec.desc}</p>
                <div className="w-full border-t border-gray-800 pt-2 text-blue-500 text-xs font-semibold ">
                  {ec.guardrail}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column (5 cols): Post-Broadcast Review Manual */}
          <div className="lg:col-span-5 p-7 bg-zinc-900/80 rounded-2xl border-[1.5px] border-gray-800 flex flex-col justify-between gap-5 backdrop-blur-sm">
            <div className="flex flex-col gap-5">
              <div className="w-full flex justify-between items-center">
                <span className="text-white text-xs font-bold  tracking-wide uppercase">
                  POST-BROADCAST REVIEW MANUAL
                </span>
                <div className="px-2 py-1 bg-emerald-500/10 rounded-sm border border-emerald-500/20">
                  <span className="text-emerald-500 text-[10px] font-bold ">ARCHIVED</span>
                </div>
              </div>

              <div className="w-full border-t border-gray-800" />

              <div className="w-full flex flex-col gap-3 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-normal ">Active Program Duration</span>
                  <span className="text-teal-400 font-bold ">01:24:12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-normal ">Total Handled Ingests</span>
                  <span className="text-teal-400 font-bold ">4 Nominals</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-normal ">Detected Pipeline Incidents</span>
                  <span className="text-teal-400 font-bold ">0 Failures</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-normal ">Readiness Delta Score</span>
                  <span className="text-teal-400 font-bold ">+4 Improved</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-normal ">Caption Accuracy</span>
                  <span className="text-teal-400 font-bold ">99.8% Nominal</span>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col gap-3">
              <div className="w-full border-t border-gray-800" />
              <div className="w-full flex items-center gap-2">
                <div className="flex-1 px-4 py-3 rounded-md border border-gray-800 flex justify-center items-center cursor-pointer">
                  <span className="text-white text-xs font-bold ">Export Evidence</span>
                </div>
                <div className="flex-1 px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer">
                  <span className="text-slate-900 text-xs font-bold ">Acknowledge SLA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
