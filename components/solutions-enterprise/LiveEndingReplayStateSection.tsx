import React from 'react';
import Image from 'next/image';
import bg167 from '@/public/images/Enterprises/bg (167).png';

const replayCards = [
  {
    title: 'Recording Authorization',
    desc: 'Enforce explicit, dual-signed policies indicating who holds capture rights for metadata and high-definition ingest.',
    pills: [
      { text: 'Not requested', active: false },
      { text: 'Requested', active: false },
      { text: 'Approved', active: true },
      { text: 'Denied', active: false },
      { text: 'Expired', active: false },
    ],
  },
  {
    title: 'Capture Job State',
    desc: 'Verification telemetry tracking ingest pipelines to confirm clean video segment writes directly onto object storage.',
    pills: [
      { text: 'Pending', active: false },
      { text: 'Capturing', active: false },
      { text: 'Complete', active: true },
      { text: 'Partial', active: false },
      { text: 'Failed', active: false },
      { text: 'Unknown', active: false },
    ],
  },
  {
    title: 'Replay Readiness',
    desc: 'Review process enforcing quality standards, audio alignment, and compliance flags before making VOD records public.',
    pills: [
      { text: 'Not reviewed', active: false },
      { text: 'Ready', active: true },
      { text: 'Ready with actions', active: false },
      { text: 'Blocked', active: false },
    ],
  },
  {
    title: 'Audience & Access Continuity',
    desc: 'Confirm policy mapping for post-live replay access relative to initial live broadcast permissions.',
    pills: [
      { text: 'Inherited', active: true },
      { text: 'Narrower', active: false },
      { text: 'Wider (approval required)', active: false },
    ],
  },
  {
    title: 'Retention & Disposition',
    desc: 'Establish duration parameters, compliance lifecycles, deletion approvals, and strict legal-hold mandates.',
    pills: [
      { text: 'Retain', active: false },
      { text: 'Review due', active: false },
      { text: 'Hold', active: true },
      { text: 'Export requested', active: false },
      { text: 'Deletion pending', active: false },
    ],
  },
  {
    title: 'Managed Asset Registration',
    desc: 'Cryptographically seal records, generate tamperproof manifests, and secure ledger receipts.',
    singleBadge: 'Asset Registered & Verified',
  },
];

export function LiveEndingReplayStateSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg167}
          alt="Replay State Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0" />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="size-96 -left-44 -top-24 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Live ending does not automatically mean replay is ready.
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Recording, replay, retention, archive, backup, preservation and legal hold are distinct states and responsibilities.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {replayCards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 bg-slate-50/90 rounded-xl border border-gray-200 flex flex-col justify-start items-start gap-5 shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm"
            >
              <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk'] leading-6">
                {card.title}
              </h3>
              <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-5">
                {card.desc}
              </p>
              <div className="w-full flex flex-wrap gap-2 pt-2">
                {card.singleBadge ? (
                  <span className="px-3.5 py-2 bg-emerald-100 rounded-full border border-emerald-500 text-emerald-800 text-xs font-semibold font-['Inter']">
                    {card.singleBadge}
                  </span>
                ) : (
                  card.pills?.map((p, pIdx) => (
                    <span
                      key={pIdx}
                      className={`px-3.5 py-2 rounded-full border text-xs font-['Inter'] ${
                        p.active
                          ? 'bg-sky-100 border-blue-500 text-sky-700 font-semibold'
                          : 'bg-white border-gray-200 text-slate-600 font-normal'
                      }`}
                    >
                      {p.text}
                    </span>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
