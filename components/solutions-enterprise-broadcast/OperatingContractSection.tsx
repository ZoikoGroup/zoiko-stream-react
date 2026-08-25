import React from 'react';
import Image from 'next/image';

const contractRows = [
  {
    area: 'Purpose & Authority',
    truth: 'The broadcast must map to an approved corporate communications mandate, with a designated workflow administrator holding operational override authority.',
  },
  {
    area: 'Readiness State',
    truth: 'All 7 readiness dimensions (Schedule, Input, Source, Route, Security, Output, Replay) must evaluate to \'Ready\' or hold an explicit authorized bypass code before signoff.',
  },
  {
    area: 'Contribution Plan',
    truth: 'Active redundant sources must be configured, containing at least one hot-standby stream routed through a separate network gateway.',
  },
  {
    area: 'Production State',
    truth: 'The program output must conform to strict corporate broadcast standards with automated slate screens for pre-show, intermission, and incident recovery.',
  },
  {
    area: 'Audience & Access',
    truth: 'Client viewer access must enforce SAML SSO authentication, logging all connections to regional access directories with audit logging enabled.',
  },
  {
    area: 'Operational Continuity',
    truth: 'A defined incident recovery matrix must exist. Network drops must trigger automated route switching within 500ms of failure detection.',
  },
  {
    area: 'Replay & Preservation',
    truth: 'Durable high-fidelity VOD recordings must be archived automatically, replicating files across two distinct geographical cold-storage hubs.',
  },
  {
    area: 'Evidence & Support',
    truth: 'SLA targets are backed by inspectable real-time pipelines. Telemetry dashboards must serve public state updates every 15 seconds.',
  },
];

export function OperatingContractSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-slate-900/60 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/solutions-enterprise-broadcast/bg (6).png"
          alt="Operating Contract Background"
          fill
          className="object-cover opacity-25"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold  leading-tight lg:leading-[48px]">
            Enterprise Broadcast Operating Contract
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal  leading-7">
            Define what must be true for the workflow to be credible.
          </p>
        </div>

        <div className="w-full rounded-xl border border-gray-800 overflow-hidden flex flex-col justify-start items-start">
          <div className="w-full p-5 bg-slate-900 flex justify-start items-center gap-6">
            <div className="w-64 text-teal-400 text-sm font-bold  uppercase">
              CONTRACT AREA
            </div>
            <div className="flex-1 text-teal-400 text-sm font-bold  uppercase">
              REQUIRED TRUTH
            </div>
          </div>

          <div className="w-full flex flex-col divide-y divide-gray-800">
            {contractRows.map((row, idx) => (
              <div key={idx} className="w-full p-5 bg-gray-950 flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 sm:gap-6 hover:bg-gray-900/60 transition-colors">
                <div className="w-64 text-white text-base font-bold  flex-shrink-0">
                  {row.area}
                </div>
                <div className="flex-1 text-slate-400 text-sm font-normal  leading-6">
                  {row.truth}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
