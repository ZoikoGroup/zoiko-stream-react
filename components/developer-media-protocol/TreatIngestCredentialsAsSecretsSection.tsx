import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import {  Shield } from 'lucide-react';

const securityRules = [
  {
    title: 'Mask by default',
    desc: 'Explicit reveal required for all high-entropy credential viewing.',
  },
  {
    title: 'Accessible copy confirmation',
    desc: 'Interface actions are audit-logged, while the sensitive value is never committed to telemetry.',
  },
  {
    title: 'Source-defined expiration',
    desc: 'Enforce automatic lifecycle rotation on all active bearer tokens and credentials.',
  },
  {
    title: 'Hot rotation capabilities',
    desc: 'Rotate or revoke active credentials without interrupting active ingest processes.',
  },
  {
    title: 'Least privilege boundaries',
    desc: 'Explicit separation between metadata reading and platform management roles.',
  },
];

const pipelineSteps = ['Current', 'Rotating', 'New Issued', 'Old Grace Period', 'Old Invalidated'];

export function TreatIngestCredentialsAsSecretsSection() {
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

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold leading-tight">
            Treat ingest credentials as production secrets
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Never put stream secrets, passphrases, or tokens in URLs rendered to analytics, support screenshots, browser history, clipboard telemetry, or page source.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-gray-200">
            {securityRules.map((rule, idx) => (
              <div key={idx} className="py-4 flex items-start gap-4">
                <div className=" flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-slate-900 text-xs font-bold  "><Shield></Shield></span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-slate-900 text-base font-bold  ">{rule.title}</h3>
                  <p className="text-slate-600 text-sm leading-5">{rule.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Secret-Safe Card */}
          <div className="lg:col-span-5 p-10 bg-gray-950 rounded-2xl border border-gray-800 flex flex-col gap-6 shadow-2xl">
            <div className="w-full flex justify-between items-center">
              <span className="text-white text-base font-bold  ">SECRET-SAFE CREDENTIALS</span>
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/30">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-teal-400 text-xs font-bold   uppercase">ACTIVE</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <span className="text-slate-400 text-xs font-bold  ">STREAM KEY</span>
                <div className="p-3 bg-gray-950 rounded-lg border border-gray-800 flex justify-between items-center   text-sm text-white">
                  <span>••••••••••••••••</span>
                  <div className="flex gap-2 text-xs">
                    <span className="px-2 py-1 bg-gray-800 rounded cursor-pointer">Reveal</span>
                    <span className="px-2 py-1 bg-gray-800 rounded cursor-pointer">Copy</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-slate-400 text-xs font-bold  ">SRT PASSPHRASE</span>
                <div className="p-3 bg-gray-950 rounded-lg border border-gray-800 flex justify-between items-center   text-sm text-white">
                  <span>••••••••••••••••</span>
                  <div className="flex gap-2 text-xs">
                    <span className="px-2 py-1 bg-gray-800 rounded cursor-pointer">Reveal</span>
                    <span className="px-2 py-1 bg-gray-800 rounded cursor-pointer">Copy</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-slate-400 text-xs font-bold  ">WHIP BEARER TOKEN</span>
                <div className="p-3 bg-gray-950 rounded-lg border border-gray-800 flex justify-between items-center   text-sm text-white">
                  <span>••••••••••••••••</span>
                  <div className="flex gap-2 text-xs">
                    <span className="px-2 py-1 bg-gray-800 rounded cursor-pointer">Reveal</span>
                    <span className="px-2 py-1 bg-gray-800 rounded cursor-pointer">Copy</span>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-gray-800" />

              <div className="flex justify-between items-center text-xs">
                <span>
                  <strong className="text-white font-bold">Last Rotated: </strong>
                  <span className="text-slate-400  ">2024-06-10</span>
                </span>
                <span>
                  <strong className="text-white font-bold">Expires: </strong>
                  <span className="text-slate-400  ">2024-09-10</span>
                </span>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <span className="text-slate-400 text-xs font-bold  ">
                  ROTATION PIPELINE FLOW
                </span>
                <div className="grid grid-cols-5 gap-1 text-[10px]   text-center">
                  {pipelineSteps.map((st, i) => (
                    <div
                      key={i}
                      className={`px-1 py-1 rounded ${
                        i === 0
                          ? 'bg-teal-400 text-gray-950 font-bold'
                          : 'bg-gray-800 text-slate-400'
                      }`}
                    >
                      {st}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <div className="flex-1 px-4 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center cursor-pointer shadow-md">
                <span className="text-slate-950 text-sm font-bold  ">Rotate Credential</span>
              </div>
              <div className="flex-1 px-4 py-3.5 bg-gray-800 rounded-lg border border-gray-800 flex items-center justify-center cursor-pointer hover:border-white transition-colors">
                <span className="text-white text-sm font-bold  ">Revoke All</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center pt-4">
          <div className="px-7 py-3.5 rounded-lg border border-slate-400 text-slate-900 font-bold   cursor-pointer hover:border-slate-900 transition-colors">
            Security guidance
          </div>
        </div>
      </div>
    </section>
  );
}
