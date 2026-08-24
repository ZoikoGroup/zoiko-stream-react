import React from 'react';
import Image from 'next/image';

import bg148 from '@/public/images/Organization-overview/bg (149).png';
import card58 from '@/public/images/Organization-overview/graph-image.png';

const governanceFeatures = [
  { title: 'Access governance', desc: 'Rigorous SAML single sign-on mapping and detailed administrative audit trails.' },
  { title: 'Operational control', desc: 'Custom ingestion stream thresholds, failover policies, and team permissions.' },
  { title: 'Resilience planning', desc: 'Hot standby fallback stream paths guaranteeing live event continuity.' },
  { title: 'Analytics', desc: 'Anonymized regional connection metrics satisfying strict compliance rules.' },
  { title: 'Procurement evidence', desc: 'Attributable compliance specs, SOC2 documentation, and inspectable guides.' },
];

export default function EnterpriseGovernanceSection() {
  return (
    <section className="relative w-full  text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg148}
          alt="Enterprise Governance Background"
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white leading-tight">
            Govern critical media across organizational workflows.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Feature List */}
          <div className="flex flex-col gap-6">
            {governanceFeatures.map((g, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="p-1.5 bg-gray-800 rounded-full text-teal-400 shrink-0 mt-0.5">
                  <div className="size-4 flex items-center justify-center font-bold text-xs">✓</div>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-white text-base font-bold font-['Space_Grotesk']">
                    {g.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed">
                    {g.desc}
                  </p>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <button
                type="button"
                className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity"
              >
                Talk to an expert
              </button>
            </div>
          </div>

          {/* Right Enterprise Governance Card */}
          <div className="p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 backdrop-blur-md flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <span className="text-teal-400 text-sm font-bold font-['Space_Grotesk'] tracking-wider">
                ENTERPRISE GOVERNANCE
              </span>
              <div className="flex items-center gap-1.5 text-teal-400 text-xs font-semibold font-['Space_Grotesk']">
                <div className="size-2 bg-teal-400 rounded-full" />
                <span>SECURE LINK ACTIVE</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-sm font-['Inter']">
                <span className="text-slate-400">Active Access Policy:</span>
                <span className="text-white font-bold font-['Space_Grotesk']">SAML SSO Strict</span>
              </div>
              <div className="flex justify-between items-center text-sm font-['Inter']">
                <span className="text-slate-400">Compliance Audit:</span>
                <span className="text-white font-bold font-['Space_Grotesk']">SOC2 Type II Verified</span>
              </div>
              <div className="flex justify-between items-center text-sm font-['Inter']">
                <span className="text-slate-400">Archive Continuity:</span>
                <span className="text-white font-bold font-['Space_Grotesk']">Cold Replication ON</span>
              </div>
            </div>

            <div className="relative w-full h-36 bg-slate-950 rounded-lg overflow-hidden border border-gray-800">
              <Image
                src={card58}
                alt="Governance Analytics Visual"
                fill
                className="object-cover opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
