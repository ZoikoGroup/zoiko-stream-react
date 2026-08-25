import React from 'react';
import Image from 'next/image';

const dependencies = [
  { name: 'Primary Encoder', owner: 'NYC-Studio-A', expected: 'Active RTMP', state: 'Nominal', stateDot: 'bg-emerald-500', criticality: 'CRITICAL', critCls: 'text-red-500' },
  { name: 'Standby Gateway', owner: 'BOS-Gateway-B', expected: 'Hot Standby', state: 'Nominal', stateDot: 'bg-emerald-500', criticality: 'CRITICAL', critCls: 'text-red-500' },
  { name: 'SAML Auth Directory', owner: 'Enterprise IT', expected: 'SSO Active', state: 'Nominal', stateDot: 'bg-emerald-500', criticality: 'CRITICAL', critCls: 'text-red-500' },
  { name: 'Caption Auto-AI', owner: 'Zoiko Transcribe', expected: 'Ingesting', state: 'Nominal', stateDot: 'bg-emerald-500', criticality: 'SUPPORTING', critCls: 'text-slate-400' },
  { name: 'Fallback Slate Engine', owner: 'Local System', expected: 'Armed', state: 'Nominal', stateDot: 'bg-emerald-500', criticality: 'CRITICAL', critCls: 'text-red-500' },
];

const scenarios = [
  { scenario: 'Primary Ingest Loss', detection: '500ms Frame Drop', response: 'Auto route to Standby', recovery: 'Active RTMP Ingest' },
  { scenario: 'Auth Gateway Down', detection: 'Directory Timeout', response: 'Bypass to Cached Token', recovery: 'SSO Sync Active' },
  { scenario: 'Transcribe Pipeline Drop', detection: 'Zero Captions 3s', response: 'Local slate fallback', recovery: 'Auto transcribing' },
  { scenario: 'Slate Trigger Failure', detection: 'Engine Error', response: 'Concierge intervention', recovery: 'Manual override active' },
];

const failoverStates = [
  { label: 'Not Configured', dotCls: 'bg-slate-400 opacity-30', active: false },
  { label: 'Configured', dotCls: 'bg-emerald-500', borderCls: 'border-emerald-500 bg-gray-800', active: true },
  { label: 'Standby', dotCls: 'bg-blue-500', borderCls: 'border-blue-500 bg-gray-800', active: true },
  { label: 'Triggered', dotCls: 'bg-slate-400 opacity-30', active: false },
  { label: 'Switched', dotCls: 'bg-slate-400 opacity-30', active: false },
  { label: 'Failed', dotCls: 'bg-slate-400 opacity-30', active: false },
  { label: 'Manual Required', dotCls: 'bg-slate-400 opacity-30', active: false },
  { label: 'Unknown', dotCls: 'bg-slate-400 opacity-30', active: false },
];

export function FailureContinuitySection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-gray-950/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/solutions-enterprise-broadcast/bg (4).png"
          alt="Failure Continuity Background"
          fill
          className="object-cover opacity-25"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold  leading-tight lg:leading-[50px]">
            Plan for failure without inventing guarantees
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal  leading-7">
            Separate continuity design from the live fact of whether continuity measures exist.
          </p>
        </div>

        {/* 2 Main Cards Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Card: Dependency Registry */}
          <div className="p-6 bg-zinc-900/80 rounded-2xl border-[1.5px] border-gray-800 flex flex-col gap-5 backdrop-blur-sm">
            <h3 className="text-white text-lg font-bold ">Dependency Registry</h3>
            <div className="w-full flex flex-col divide-y divide-gray-800 text-xs">
              <div className="pb-2 flex justify-between items-center text-teal-400 font-bold  uppercase">
                <span className="w-28">DEPENDENCY</span>
                <span className="w-24">OWNER</span>
                <span className="w-24">EXPECTED</span>
                <span className="w-20">STATE</span>
                <span className="w-24 text-right">CRITICALITY</span>
              </div>
              {dependencies.map((dep, idx) => (
                <div key={idx} className="py-2.5 flex justify-between items-center ">
                  <span className="w-28 text-white font-bold truncate">{dep.name}</span>
                  <span className="w-24 text-slate-400 font-normal truncate">{dep.owner}</span>
                  <span className="w-24 text-slate-400 font-normal truncate">{dep.expected}</span>
                  <div className="w-20 flex items-center gap-1.5">
                    <div className={`w-1.5 h-1.5 rounded-full ${dep.stateDot}`} />
                    <span className="text-white font-normal truncate">{dep.state}</span>
                  </div>
                  <span className={`w-24 text-right font-bold ${dep.critCls}`}>{dep.criticality}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card: Continuity Plan */}
          <div className="p-6 bg-zinc-900/80 rounded-2xl border-[1.5px] border-gray-800 flex flex-col gap-5 backdrop-blur-sm">
            <h3 className="text-white text-lg font-bold ">Continuity Plan</h3>
            <div className="w-full flex flex-col divide-y divide-gray-800 text-xs">
              <div className="pb-2 flex justify-between items-center text-teal-400 font-bold  uppercase">
                <span className="w-32">FAILURE SCENARIO</span>
                <span className="w-28">DETECTION</span>
                <span className="w-32">RESPONSE</span>
                <span className="w-32 text-right">RECOVERY CRITERIA</span>
              </div>
              {scenarios.map((sc, idx) => (
                <div key={idx} className="py-2.5 flex justify-between items-center ">
                  <span className="w-32 text-white font-bold truncate">{sc.scenario}</span>
                  <span className="w-28 text-slate-400 font-normal truncate">{sc.detection}</span>
                  <span className="w-32 text-slate-400 font-normal truncate">{sc.response}</span>
                  <span className="w-32 text-right text-teal-400 font-normal truncate">{sc.recovery}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Failover States Configuration */}
        <div className="w-full flex flex-col gap-4">
          <h3 className="text-white text-lg font-bold ">Failover States Configuration</h3>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {failoverStates.map((fs, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-lg flex flex-col items-center justify-center gap-3 ${
                  fs.borderCls || 'bg-zinc-900/80 border-[1.5px] border-gray-800'
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${fs.dotCls}`} />
                <span className={`text-center text-xs font-bold  ${fs.active ? 'text-white' : 'text-slate-400'}`}>
                  {fs.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Notice Bar */}
        <div className="w-full p-5 bg-slate-200 rounded-lg flex items-center gap-3">
          <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
            <div className="w-3.5 h-3.5 border-2 border-slate-900 rounded-xs" />
          </div>
          <p className="text-slate-900 text-sm font-bold ">
            Important: Operational parameters rely on explicit continuity measures and recovery path coordination, not claims of zero downtime or guaranteed systems.
          </p>
        </div>
      </div>
    </section>
  );
}
