import React from 'react';
import Image from 'next/image';

const pillars = [
  {
    title: 'Governance',
    desc: 'Continuous policy mapping, audience scopes, dynamic overrides, and explicit exceptions.',
    core: 'Who establishes global scopes?',
    verification: 'Administrative audit logging records',
    img: '/images/Enterprises/Card-Image (64).png',
  },
  {
    title: 'Authority',
    desc: 'Stateful permission structures, separation of duties, and explicit review hierarchies.',
    core: 'Who approves critical configurations?',
    verification: 'Cryptographic policy evaluation trails',
    img: '/images/Enterprises/Card-Image (65).png',
  },
  {
    title: 'Continuity',
    desc: 'Deterministic pipeline failovers, input routing protection, and recording cold standby.',
    core: 'How do we handle primary ingest loss?',
    verification: 'Automated fallback telemetry records',
    img: '/images/Enterprises/Card-Image (66).png',
  },
  {
    title: 'Evidence',
    desc: 'Inspectable cryptographic evidence, temporal validity windows, and SLA guarantees.',
    core: 'Is operational performance inspectable?',
    verification: 'Exportable JSON compliance reports',
    img: '/images/Enterprises/Card-Image (67).png',
  },
  {
    title: 'Support',
    desc: 'White-glove implementation architects, dedicated engineering, and event concierge.',
    core: 'What is our operational SLA?',
    verification: 'Signed custom service level agreement',
    img: '/images/Enterprises/Card-Image (68).png',
  },
  {
    title: 'Change Control',
    desc: 'Audited integration, version control, and non-destructive rollbacks.',
    core: 'When did this policy change occur?',
    verification: 'Immutable git-style version ledger',
    img: '/images/Enterprises/Card-Image (69).png',
  },
];

export function OperatingContractSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-slate-950/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/Enterprises/bg (166).png"
          alt="Operating Contract Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            The enterprise media operating contract.
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Six architectural pillars that define how critical video workloads are structurally governed, operated, and verifiably evidenced.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col justify-start items-start overflow-hidden hover:border-gray-700 transition-colors"
            >
              <div className="relative w-full h-36 bg-zinc-950">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full p-6 flex flex-col justify-start items-start gap-4">
                <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-5">
                  {item.desc}
                </p>
                <div className="w-full border-t border-gray-800 pt-3 flex flex-col gap-1.5 text-xs">
                  <div>
                    <span className="text-teal-400 font-bold font-['Inter']">Core Question: </span>
                    <span className="text-slate-500 font-normal font-['Inter']">{item.core}</span>
                  </div>
                  <div>
                    <span className="text-blue-500 font-bold font-['Inter']">Verification: </span>
                    <span className="text-slate-500 font-normal font-['Inter']">{item.verification}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="inline-flex justify-start items-center gap-4 flex-wrap">
          <div className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer">
            <span className="text-white text-base font-bold font-['Space_Grotesk']">
              Review Operating Contract
            </span>
          </div>
          <div className="px-7 py-3.5 rounded-lg border border-gray-400 flex justify-center items-center cursor-pointer">
            <span className="text-white text-base font-bold font-['Space_Grotesk']">
              Explore Evidence
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
