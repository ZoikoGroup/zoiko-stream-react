import React from 'react';
import Image from 'next/image';

const roles = [
  { title: 'Audience Owner', dept: 'Business / Operator', desc: 'Declares who has the business need to view. Defines entitlement criteria and policy intentions.' },
  { title: 'Access Administrator', dept: 'Secops / IT', desc: 'Configures active directory paths, rotates signing keys, and manages lifecycle controls.' },
  { title: 'Identity Officer', dept: 'Enterprise IT', desc: 'Owns verification layers, validates SSO providers, and standardizes multi-factor requirements.' },
  { title: 'Compliance Lead', dept: 'Legal', desc: 'Ensures streams meet regional storage laws, monitors logging integrity, and audits content decay.' },
  { title: 'Incident Responder', dept: 'Operations', desc: 'Empowered to hit the stream kill-switch, isolate environments, and secure digital forensic trails.' },
  { title: 'Content Custodian', dept: 'Studio / Producer', desc: 'Controls what assets are ingested, reviews quality parameters, and owns catalog metadata.' },
  { title: 'Procurement Partner', dept: 'Vendor Management', desc: 'Monitors vendor service levels, inspects evidence sheets, and manages contractual agreements.' },
];

const contractItems = [
  { label: 'Sovereign Claim', val: 'A verified identity matches exactly one user within authorized boundaries.' },
  { label: 'Provable Evidence', val: 'SAML cryptographic response payload alongside multi-factor verification timestamps.' },
  { label: 'Verifiable By', val: 'Automated, secure API hooks inspecting independent enterprise directories.' },
  { label: 'Audit Timestamp', val: 'Synchronized UTC clocks validated on key signing and active player checks.' },
  { label: 'Retention Rule', val: 'Un-alterable write-once compliance records retained for exactly 365 calendar days.' },
  { label: 'Purge Pathway', val: 'Durable programmatic deletion processes executing systematically upon lifecycle expiry.' },
];

export function RoleGovernanceSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-gray-950/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/solution-private-audience-delivery/bg (7).png"
          alt="Role Governance Background"
          fill
          className="object-cover opacity-25"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-5xl font-bold  leading-tight lg:leading-[52px]">
            Name the roles that own audience, access, and evidence
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal  leading-7">
            Governance is a named operational responsibility, not an implied expectation.
          </p>
        </div>

        {/* 7 Role Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {roles.map((r, idx) => (
            <div
              key={idx}
              className="p-6 bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col justify-start items-start gap-4 hover:border-gray-700 transition-colors backdrop-blur-sm"
            >
              <div className="flex flex-col gap-1">
                <h3 className="text-white text-lg font-bold ">{r.title}</h3>
                <span className="text-teal-400 text-xs font-semibold  uppercase">{r.dept}</span>
              </div>
              <p className="text-slate-400 text-xs font-normal  leading-5">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Audience Evidence Card Contract Box */}
        <div className="w-full p-8 bg-zinc-900/80 rounded-2xl border-[1.5px] border-teal-400 flex flex-col gap-7 backdrop-blur-sm">
          <div className="flex flex-col gap-2">
            <h3 className="text-white text-xl font-bold ">Audience Evidence Card Contract</h3>
            <p className="text-slate-400 text-sm font-normal ">
              Deterministic operational parameters required for absolute system compliance.
            </p>
          </div>

          <div className="w-full border-t border-gray-800" />

          <div className="w-full flex flex-col gap-3">
            {contractItems.map((ci, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span className="text-teal-400 text-xs font-bold  uppercase">{ci.label}</span>
                <span className="text-white text-sm font-normal  leading-5">{ci.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
