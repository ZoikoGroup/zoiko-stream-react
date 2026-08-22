import React from 'react';
import Image from 'next/image';
import { FileCheck, Shield, CheckSquare, Activity, AlertCircle, TriangleAlert, Award, CircleQuestionMarkIcon, FileText } from 'lucide-react';

const pillCards = [
  { title: 'Security Practices', desc: 'Current public documents & owners', icon: Shield },
  { title: 'Certifications', desc: 'Exact scope and entity periods', icon: Award },
  { title: 'Audit & Testing', desc: 'Approved summaries, no exploits', icon: FileText },
  { title: 'Incident & Status', desc: 'Authoritative system status', icon: Activity },
];

export default function EvidenceTrustCenterOperationalTruthSection() {
  return (
    <section className="relative w-full bg-gray-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-media-security/bg (102).png"
          alt="Evidence Trust Center Background"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gray-950/80" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white">
            Evidence, Trust Center, and operational truth
          </h2>
          <p className="text-slate-400 text-lg font-normal font-['Space_Grotesk'] leading-relaxed max-w-3xl">
            Give reviewers inspectable evidence without turning the page into a duplicate compliance catalog.
          </p>
        </div>

        {/* Top 4 Pill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillCards.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="px-6 py-5 bg-zinc-900/80 rounded-xl border border-gray-800 flex items-center gap-4 backdrop-blur-md hover:border-teal-400/40 transition-colors"
              >
                <div className="size-8  items-center justify-center text-teal-400 shrink-0">
                  <Icon className="size-4" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-white text-base font-bold font-['Space_Grotesk']">
                    {p.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-normal  ">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Middle 2 Detail Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col gap-6 backdrop-blur-md">
            <div className="size-10 bg-teal-400/10 rounded-lg flex items-center justify-center text-teal-400 shrink-0">
            <TriangleAlert className="size-5" />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
                Responsible Disclosure
              </h3>
              <p className="text-slate-400 text-base font-normal   leading-relaxed">
                We maintain an active security disclosure process. Review legal safe-harbor parameters and report verified issues to our engineering response desk. Coordinated vulnerability handling is strictly prioritized.
              </p>
            </div>
          </div>

          <div className="p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col gap-6 backdrop-blur-md">
            <div className="size-10 bg-teal-400/10 rounded-lg flex items-center justify-center text-teal-400 shrink-0">
              <Activity className="size-5" />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
                Support &amp; Routing
              </h3>
              <p className="text-slate-400 text-base font-normal   leading-relaxed">
                Get dedicated architecture support for enterprise integration. From client diagnostics to regional data-residency audits, connect with media security engineers prepared for deep compliance evaluations.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="p-6 bg-teal-400/5 rounded-xl border border-teal-400/20 flex items-center gap-4">
          <CircleQuestionMarkIcon className="size-6 text-teal-400 shrink-0" />
          <p className="text-teal-400 text-base font-normal   leading-relaxed">
            A certification logo, shield, or compliance framework name is not sufficient evidence. Reviewers must be able to inspect <span className="font-bold">scope, authority, date,</span> and current status directly within the Trust Center.
          </p>
        </div>
      </div>
    </section>
  );
}
