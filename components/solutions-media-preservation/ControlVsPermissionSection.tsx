import React from 'react';
import Image from 'next/image';

const hierarchySteps = [
  { step: '01. Custody/Admin Authority', desc: 'Sets preservation rules, retention policies, and compliance boundaries.' },
  { step: '02. Identity Assertion', desc: 'Authenticates operators and users via SAML single sign-on constraints.' },
  { step: '03. Entitlement Rules', desc: 'Decides scope of action (e.g. read archive, issue delete requests).' },
  { step: '04. Active Access Policy', desc: 'Checks temporary constraints (such as active legal holds or embargos).' },
  { step: '05. Playback Authorization', desc: 'Verifies digital tokens and grants temporary stream delivery access.' },
  { step: '06. Verified Viewing Surface', desc: 'Clips playback strictly inside corporate domain boundaries.' },
];

const highImpactActions = [
  'Change asset custody',
  'Widen access permissions',
  'Release legal hold',
  'Export / transfer master bytes',
  'Execute final delete/disposition',
  'Supersede source version',
  'Change retention schedule',
];

const roleMatrices = [
  { role: 'Preservation Admin', scope: 'Custody, policy, evidence ownership, compliance settings.' },
  { role: 'Media Operations', scope: 'Ingest, processing, transcoding, and derivative creations.' },
  { role: 'Security & Identity', scope: 'SAML configuration, audit path validation, SSO settings.' },
  { role: 'Records & Compliance', scope: 'Retention policies, legal hold enforcement, disposition approval.' },
  { role: 'Accessibility & Local', scope: 'Caption artifacts, transcription records, and language feeds.' },
  { role: 'Viewer / Auditor', scope: 'Read-only interface access strictly within entitlement scope.' },
];

export function ControlVsPermissionSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-gray-950/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/solution-media-preservation/bg (13).png"
          alt="Control Vs Permission Background"
          fill
          className="object-cover opacity-25"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-5xl font-bold  leading-tight lg:leading-[50px]">
            Preservation control is not playback permission
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal  leading-7">
            Separate administrative custody from viewer authorization.
          </p>
        </div>

        {/* 2 Column Hierarchy & High-Impact Ledger */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column (7 cols): Divergent Security Hierarchy */}
          <div className="lg:col-span-7 p-8 bg-zinc-900/80 rounded-2xl border-[1.5px] border-gray-800 flex flex-col gap-5 backdrop-blur-sm">
            <h3 className="text-white text-xl font-bold ">Divergent Security Hierarchy</h3>
            <div className="flex flex-col gap-2.5">
              {hierarchySteps.map((hs, idx) => (
                <div key={idx} className="p-4 bg-gray-800 rounded-lg border border-gray-800 flex items-start gap-3">
                  <span className="text-teal-400 text-sm font-bold  flex-shrink-0">{hs.step}</span>
                  <span className="text-slate-400 text-xs font-normal  leading-4">{hs.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (5 cols): High-Impact Control Ledger */}
          <div className="lg:col-span-5 p-8 bg-zinc-900/80 rounded-2xl border-[1.5px] border-gray-800 flex flex-col gap-6 backdrop-blur-sm">
            <div className="flex flex-col gap-1">
              <h3 className="text-white text-lg font-bold ">High-Impact Control Ledger</h3>
              <p className="text-slate-400 text-xs font-normal  leading-5">
                Requires double-authorized compliance validation prior to execution.
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              {highImpactActions.map((action, idx) => (
                <div key={idx} className="p-3 bg-gray-800 rounded-lg border border-gray-800 flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                  <span className="text-white text-xs font-bold ">{action}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Access Role Matrices Grid */}
        <div className="w-full flex flex-col gap-6">
          <h3 className="text-white text-xl font-bold ">Access Role Matrices</h3>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {roleMatrices.map((rm, idx) => (
              <div key={idx} className="p-5 bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col gap-3 min-h-[144px]">
                <h4 className="text-teal-400 text-base font-bold ">{rm.role}</h4>
                <p className="text-slate-400 text-xs font-normal  leading-4">{rm.scope}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
