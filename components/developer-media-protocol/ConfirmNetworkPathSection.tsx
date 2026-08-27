import React from 'react';
import Image from 'next/image';

const preflightSteps = [
  { num: '01', title: 'Transport Protocol', desc: 'TCP (RTMPS), UDP (SRT), TCP+UDP (WHIP)' },
  { num: '02', title: 'Destination Ports', desc: '1935/tcp, 9000/udp, 443/tcp' },
  { num: '03', title: 'Hostname/Domain', desc: 'ingest.zoiko.stream' },
  { num: '04', title: 'IP Allowlisting', desc: 'Check current endpoint list' },
  { num: '05', title: 'DNS Resolution', desc: 'Required — verify before event' },
  { num: '06', title: 'TLS Requirement', desc: 'TLS 1.2+ for RTMPS and WHIP' },
  { num: '07', title: 'NAT Traversal', desc: 'STUN/TURN for WHIP; SRT caller mode' },
  { num: '08', title: 'Proxy Compatibility', desc: 'Direct connection recommended' },
  { num: '09', title: 'Regional Endpoints', desc: 'US-East, EU-West, AP-Southeast' },
  { num: '10', title: 'UDP Firewall', desc: 'Must allow outbound UDP for SRT' },
  { num: '11', title: 'Outbound Rules', desc: 'Verify egress on all required ports' },
  { num: '12', title: 'Connectivity Test', desc: 'Run preflight before production' },
];

export function ConfirmNetworkPathSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-media-protocol/bg (13).png"
          alt="Confirm Network Path Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            Confirm the network path before you depend on it
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Move network validation ahead of event day and make unknown requirements visible. Only run automated connectivity tests if the product can actually test from the relevant context. Otherwise render a checklist.
          </p>
        </div>

        {/* 12 Steps 2-Column Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
          {preflightSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-5 bg-zinc-900/80 rounded-lg border border-gray-800 flex items-center gap-5 shadow-md"
            >
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                <span className="text-white text-sm font-bold    ">{step.num}</span>
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <h3 className="text-white text-base font-bold    ">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-5">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Preflight Legend & Action Buttons */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-slate-400 text-xs font-bold     uppercase mr-2">
              Preflight Legend:
            </span>
            <span className="px-2.5 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/30 text-teal-400 text-xs font-bold     uppercase">
              Verified
            </span>
            <span className="px-2.5 py-1 bg-red-500/10 rounded-full border border-red-500/30 text-red-500 text-xs font-bold     uppercase">
              Failed
            </span>
            <span className="px-2.5 py-1 bg-amber-500/10 rounded-full border border-amber-500/30 text-amber-500 text-xs font-bold     uppercase">
              Partially Verified
            </span>
            <span className="px-2.5 py-1 bg-gray-700/10 rounded-full border border-gray-700/30 text-slate-400 text-xs font-bold     uppercase">
              Unknown
            </span>
            <span className="px-2.5 py-1 bg-orange-500/10 rounded-full border border-orange-500/30 text-orange-500 text-xs font-bold     uppercase">
              Requires Network Review
            </span>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center cursor-pointer shadow-md">
              <span className="text-slate-950 text-base font-bold    ">Run network preflight</span>
            </div>
            <div className="px-7 py-3.5 rounded-lg border border-slate-400 text-white font-bold     text-center cursor-pointer hover:border-white transition-colors">
              Talk to an expert
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
