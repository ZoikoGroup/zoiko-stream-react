import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Square, ShieldCheck, Activity, FileText } from 'lucide-react';

const zoikoResp = [
  {
    title: 'Account Access Controls',
    desc: 'Durable directory structures and Whitelist authentication policies are maintained internally.',
  },
  {
    title: 'Application Documentation',
    desc: 'Stable behavior models, interface routes, and error payload definitions are maintained.',
  },
  {
    title: 'Audience/Content Policy Enforcement',
    desc: 'Machine-readable geofence checks and whitelist assertions are triggered automatically.',
  },
  {
    title: 'Media/Data Handling Integrity',
    desc: 'Safe cryptographic storage of keys and automated regional files placement.',
  },
  {
    title: 'Incident/Support Routes',
    desc: 'Durable support pathways and audit-safe incident logging mechanisms are active.',
  },
];

const customerResp = [
  {
    title: 'Manage Users & Credentials',
    desc: 'Ensure your OIDC whitelists and administrator role structures remain up to date.',
  },
  {
    title: 'Protect App Integrations',
    desc: 'Ensure your API tokens and authentication keys are kept completely secure.',
  },
  {
    title: 'Policy & Rights Strategy',
    desc: 'Define permitted use cases, geofence scopes, and required retention lengths.',
  },
  {
    title: 'Classify Content & Assets',
    desc: 'Enforce accurate metadata, WCAG tags, and certified translations on assets.',
  },
  {
    title: 'Report Incidents Safely',
    desc: 'Initiate troubleshooting tickets with correlation keys without disclosing secrets.',
  },
];

export default function SharedResponsibilitySection() {
  return (
    <section className="relative w-full bg-gray-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-delivery-trust-overview/bg (71).png"
          alt="Shared Responsibility Background"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gray-950/75" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white">
            Media Security and Shared Responsibility
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-normal font-['Space_Grotesk'] max-w-3xl">
            Platform controls and customer obligations — clearly separated
          </p>
        </div>

        {/* 2 Responsibility Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* ZoikoStream Responsibility */}
          <div className="p-7 bg-gray-900/90 rounded-2xl border border-slate-800 flex flex-col gap-5">
            <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
              ZoikoStream Responsibility
            </h3>

            <div className="flex flex-col gap-4">
              {zoikoResp.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check className="size-4 text-teal-400 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-white text-sm font-bold font-['Inter']">
                      {item.title}
                    </span>
                    <span className="text-slate-400 text-xs font-normal font-['Inter']">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Responsibility */}
          <div className="p-7 bg-gray-900/90 rounded-2xl border border-slate-800 flex flex-col gap-5">
            <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
              Customer Responsibility
            </h3>

            <div className="flex flex-col gap-4">
              {customerResp.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Square className="size-3.5 text-blue-500 shrink-0 mt-1" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-white text-sm font-bold font-['Inter']">
                      {item.title}
                    </span>
                    <span className="text-slate-400 text-xs font-normal font-['Inter']">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom 3 Evidence Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 bg-slate-900/50 rounded-xl border border-gray-800 flex flex-col justify-between gap-4">
            <div className="flex justify-between items-center">
              <div className="size-8 bg-teal-400/10 rounded flex items-center justify-center text-teal-400">
                <ShieldCheck className="size-4" />
              </div>
              <span className="text-teal-400 text-xs font-bold font-['Inter']">Trust Center</span>
            </div>
            <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-relaxed">
              Inspect platform certifications, SOC 2 reports, and compliance credentials.
            </p>
            <Link
              href="/company-overview"
              className="px-4 py-2.5 rounded-lg border border-slate-400 text-white text-center text-xs font-bold font-['Inter'] hover:bg-white/10"
            >
              View compliance records
            </Link>
          </div>

          <div className="p-6 bg-slate-900/50 rounded-xl border border-gray-800 flex flex-col justify-between gap-4">
            <div className="flex justify-between items-center">
              <div className="size-8 bg-teal-400/10 rounded flex items-center justify-center text-teal-400">
                <Activity className="size-4" />
              </div>
              <span className="text-teal-400 text-xs font-bold font-['Inter']">System Status</span>
            </div>
            <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-relaxed">
              View real-time global availability, latency parameters, and past incident logs.
            </p>
            <Link
              href="/faqs-and-support"
              className="px-4 py-2.5 rounded-lg border border-slate-400 text-white text-center text-xs font-bold font-['Inter'] hover:bg-white/10"
            >
              Check system status
            </Link>
          </div>

          <div className="p-6 bg-slate-900/50 rounded-xl border border-gray-800 flex flex-col justify-between gap-4">
            <div className="flex justify-between items-center">
              <div className="size-8 bg-teal-400/10 rounded flex items-center justify-center text-teal-400">
                <FileText className="size-4" />
              </div>
              <span className="text-teal-400 text-xs font-bold font-['Inter']">Documentation</span>
            </div>
            <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-relaxed">
              Access our comprehensive guide libraries, API keys, and implementation routes.
            </p>
            <Link
              href="/sdks"
              className="px-4 py-2.5 rounded-lg border border-slate-400 text-white text-center text-xs font-bold font-['Inter'] hover:bg-white/10"
            >
              Open developer guides
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
