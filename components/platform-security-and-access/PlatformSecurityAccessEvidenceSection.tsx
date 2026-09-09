import React from 'react';
import Image from 'next/image';
import { Clock, FileText, FileCheck, Shield, CheckCircle2, Building, Menu, NotepadText, Key } from 'lucide-react';
import section11Bg from '@/public/images/Zoiko Stream footer - Platform - Security-and-Access-Platform-Page/section-11bg.png';

const EVIDENCE_ITEMS = [
  {
    icon: Menu,
    title: 'Access Events',
    desc: 'Timestamped actions tied to principal, resource, action.',
  },
  {
    icon: Shield,
    title: 'Policy Snapshots',
    desc: 'Configuration at decision time, not after-the-fact reconstruction.',
  },
  {
    icon: NotepadText,
    title: 'Audit Trails',
    desc: 'Immutable, append-only log structures.',
  },
  {
    icon: Key,
    title: 'Session Records',
    desc: 'Credential assurance and session state at evaluation.',
  },
];

const ZOIKO_OWNS = [
  'Platform identity',
  'Access policy engine',
  'Audit infrastructure',
  'Credential lifecycle',
];

const USER_OWNS = [
  'User provisioning decisions',
  'Role assignment choices',
  'Review cadence',
  'Offboarding execution',
];

export default function PlatformSecurityAccessEvidenceSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-slate-950 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden z-10">
      {/* Background Image section-11bg.png */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={section11Bg}
          alt="Evidence Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col justify-start items-start gap-14">
        {/* Header Text */}
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="w-full text-slate-100 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[48px]">
            Evidence and shared responsibility
          </h2>
          <p className="w-full text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
            Every material access claim is backed by observable evidence. ZoikoStream sources and the consuming organization each own defined accountability boundaries.
          </p>
        </div>

        {/* 2 Column Content Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Evidence Model */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h3 className="text-slate-100 text-2xl font-bold font-['Space_Grotesk']">
              Evidence model
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EVIDENCE_ITEMS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 bg-gray-900/90 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 backdrop-blur-xs flex flex-col gap-4 shadow-xl"
                  >
                    <div className="size-10 bg-teal-400/10 rounded-lg border border-gray-800 flex items-center justify-center text-teal-400 shrink-0">
                      <Icon className="size-5 text-teal-400" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="text-slate-100 text-lg font-bold font-['Space_Grotesk']">
                        {item.title}
                      </h4>
                      <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Shared Responsibility Boundaries */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h3 className="text-slate-100 text-2xl font-bold font-['Space_Grotesk']">
              Shared responsibility boundaries
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* ZoikoStream owns */}
              <div className="p-6 sm:p-7 bg-gray-900/90 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 backdrop-blur-xs flex flex-col gap-5 shadow-xl">
                <div className="w-full flex justify-between items-center">
                  <h4 className="text-teal-400 text-lg font-bold font-['Space_Grotesk']">
                    ZoikoStream owns
                  </h4>
                  <Shield className="size-4 text-teal-400 shrink-0" />
                </div>
                <div className="flex flex-col gap-3">
                  {ZOIKO_OWNS.map((name, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-slate-950 rounded-lg flex items-center gap-3"
                    >
                      <div className="size-1.5 bg-teal-400 rounded-full shrink-0" />
                      <span className="text-slate-100 text-sm font-medium font-['Space_Grotesk']">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Your organization owns */}
              <div className="p-6 sm:p-7 bg-gray-900/90 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 backdrop-blur-xs flex flex-col gap-5 shadow-xl">
                <div className="w-full flex justify-between items-center">
                  <h4 className="text-teal-400 text-lg font-bold font-['Space_Grotesk']">
                    Your organization owns
                  </h4>
                  <Shield className="size-4 text-teal-400 shrink-0" />
                </div>
                <div className="flex flex-col gap-3">
                  {USER_OWNS.map((name, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-slate-950 rounded-lg flex items-center gap-3"
                    >
                      <div className="size-1.5 bg-teal-400 rounded-full shrink-0" />
                      <span className="text-slate-100 text-sm font-medium font-['Space_Grotesk']">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
