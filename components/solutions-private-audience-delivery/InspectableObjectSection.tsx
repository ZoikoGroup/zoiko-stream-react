import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import { ArrowDown } from 'lucide-react';

const blueprintFields = [
  { label: 'Audience Definition ID', val: 'aud_90210_delivery_vip' },
  { label: 'Display Label', val: 'Internal Staff & Selected Board Partners' },
  { label: 'Owner', val: 'Security Ops Team Alpha' },
  { label: 'Audience Segments', val: 'Active Employee SAML (92%), Guest Keys (8%)' },
  { label: 'Entitlement Source', val: 'Okta User Directory Integration' },
  { label: 'Scope', val: 'Limited to current live stream session' },
  { label: 'Effective Window', val: '2026-03-20T13:00Z to 2026-03-20T15:00Z' },
  { label: 'External-Access Rule', val: 'Require 2FA verification pass on guest emails' },
  { label: 'Replay Inheritance', val: 'Allowed (Strict Session Bounds Enforced)' },
  { label: 'Currentness', val: 'Verified: Sync successful 2 minutes ago' },
];

export function InspectableObjectSection() {
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
      <div className="size-96 -left-44 -top-24 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-5xl font-bold  leading-tight lg:leading-[52px]">
            Turn private audience into an inspectable object
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal  leading-7">
            Make it a real object rather than a label.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column (7 cols): Audience Object Definition Blueprint */}
          <div className="lg:col-span-7 p-8 bg-slate-50/90 rounded-xl border border-gray-200 flex flex-col gap-6 shadow-sm backdrop-blur-sm">
            <h3 className="text-slate-900 text-lg font-bold ">
              Audience Object Definition Blueprint
            </h3>

            <div className="w-full flex flex-col divide-y divide-gray-200 text-xs">
              {blueprintFields.map((field, idx) => (
                <div key={idx} className="py-2.5 flex items-center gap-4">
                  <span className="w-48 text-slate-600 font-semibold  flex-shrink-0">{field.label}</span>
                  <span className="flex-1 text-gray-950 font-normal ">{field.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (5 cols): Membership & Eligibility Flow */}
          <div className="lg:col-span-5 p-8 bg-slate-50/90 rounded-xl border border-gray-200 flex flex-col justify-center items-center gap-6 shadow-sm backdrop-blur-sm">
            <h3 className="w-full text-slate-900 text-lg font-bold ">
              Membership &amp; Eligibility Flow
            </h3>

            <div className="w-full flex flex-col items-center gap-4">
              <div className="w-80 p-4 bg-white rounded-lg border border-gray-200 flex justify-center items-center shadow-xs">
                <span className="text-slate-900 text-sm font-bold ">1. Identity Source (Okta/SAML)</span>
              </div>
              <div className="w-4 h-4 flex items-center justify-center">
                <ArrowDown className="w-3 h-3 text-slate-600" />
              </div>
              <div className="w-80 p-4 bg-white rounded-lg border-[1.5px] border-teal-400 flex justify-center items-center shadow-xs">
                <span className="text-slate-900 text-sm font-bold ">2. Entitlement Resolver</span>
              </div>
              <div className="w-4 h-4 flex items-center justify-center">
                <ArrowDown className="w-3 h-3 text-slate-600" />
              </div>
              <div className="w-80 p-4 bg-white rounded-lg border border-gray-200 flex justify-center items-center shadow-xs">
                <span className="text-slate-900 text-sm font-bold ">3. Playback Token Generator</span>
              </div>
              <div className="w-4 h-4 flex items-center justify-center">
                <ArrowDown className="w-3 h-3 text-slate-600" />
              </div>
              <div className="w-80 p-4 bg-teal-400 rounded-lg flex justify-center items-center shadow-sm">
                <span className="text-gray-950 text-sm font-bold ">4. Secure Stream Authorization</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
