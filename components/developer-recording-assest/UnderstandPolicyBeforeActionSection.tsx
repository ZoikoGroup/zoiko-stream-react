import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const steps = [
  { num: '01', title: 'Initiate Request', desc: 'User or API triggers hard delete request on an asset ID.' },
  { num: '02', title: 'Impact Preview', desc: 'System queries dependencies (active players, portal attachments).' },
  { num: '03', title: 'SSO Re-Auth', desc: 'For restricted classes, admin re-authentication is enforced.' },
  { num: '04', title: 'Submit Queue', desc: 'Operation moves to async scheduler; state transitions to DELETING.' },
  { num: '05', title: 'Block Purge', desc: 'Storage engine clears chunk blocks across distributed CDNs.' },
  { num: '06', title: 'Metadata Soft-Lock', desc: 'Linage record persists but media indices are permanently wiped.' },
  { num: '07', title: 'Verification', desc: 'Durable storage logs confirm block deletion; state enters DELETED.' },
  { num: '08', title: 'Final Evidence', desc: 'Irreversible cryptographically signed purge receipt is dispatched.' },
];

export function UnderstandPolicyBeforeActionSection() {
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

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-950 text-3xl lg:text-4xl font-bold leading-tight">
            Understand policy before you act.
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Every recording is governed by hierarchical compliance boundaries. Absolute block deletion is permanent and leaves metadata lineage traces only.
          </p>
        </div>

        {/* 2 Column Details */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Policy Inheritance Model */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h3 className="text-slate-900 text-xl font-bold">Policy Inheritance Model</h3>

            <div className="flex flex-col gap-4">
              <div className="p-5 bg-slate-50 rounded-2xl border border-gray-200 flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 text-sm font-bold">01. ORGANIZATION DEFAULT</span>
                  <span className="text-teal-400 text-xs font-bold">GLOBAL LEVEL</span>
                </div>
                <p className="text-slate-600 text-xs leading-5">
                  All recordings automatically inherit a 30-day rolling expiration window upon live stream closure.
                </p>
              </div>

              <div className="flex justify-center">
                <span className="text-slate-400 text-sm">↓</span>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-gray-200 flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-900 text-sm font-bold">02. WORKSPACE OVERRIDE</span>
                  <span className="text-blue-500 text-xs font-bold">GROUP LEVEL</span>
                </div>
                <p className="text-slate-600 text-xs leading-5">
                  Town Halls workspace extends default retention to 365 Days, enforcing auto-cold-archival after 90 days.
                </p>
              </div>

              <div className="flex justify-center">
                <span className="text-slate-400 text-sm">↓</span>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-teal-400 flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-900 text-sm font-bold">03. ASSET SPECIFIC POLICY</span>
                  <span className="text-emerald-500 text-xs font-bold">EXPLICIT RULE</span>
                </div>
                <p className="text-slate-600 text-xs leading-5">
                  <strong className="text-slate-900">RETENTION_LOCK</strong> metadata tag injected. Overrides Organization and Workspace limits. Deletion blocked indefinitely.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Destructive Handoff Contract */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h3 className="text-slate-900 text-xl font-bold">Destructive Handoff Contract</h3>

            <div className="flex flex-col gap-3">
              {steps.map((st, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-slate-50 rounded-lg border border-gray-200 flex items-start gap-3"
                >
                  <div className="w-7 h-7 rounded-full bg-teal-400/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-teal-500 text-xs font-bold">{st.num}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-slate-900 text-sm font-bold">{st.title}</h4>
                    <p className="text-slate-600 text-xs leading-4">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
