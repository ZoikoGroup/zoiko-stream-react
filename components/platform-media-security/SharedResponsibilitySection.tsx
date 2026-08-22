import React from 'react';

const tableRows = [
  {
    domain: 'Identity & Access',
    platform: 'Provides robust identity infrastructure, directory APIs, secure token stores, and administrative privilege logs.',
    customer: 'Manages user lifecycle, assigns custom roles and scoping permissions, and enforces strong multi-factor authentication policies.',
  },
  {
    domain: 'Media Protection',
    platform: 'Secures storage layers, runs transcoding/packaging in isolated workers, and protects transport paths (TLS 1.3).',
    customer: 'Configures media lifecycle policies, defines encryption key custody, and manages individual video lifecycle states.',
  },
  {
    domain: 'Playback Control',
    platform: 'Evaluates cryptographic token policies at the edge and enforces geo-restriction checks in real-time.',
    customer: 'Issues signed player tokens with valid expirations, handles client secrets, and sets audience geolocation constraints.',
  },
  {
    domain: 'Operations & Auditing',
    platform: 'Monitors physical edge nodes, tracks admin access, logs configuration state shifts, and runs incident response.',
    customer: 'Maintains secure API integrations, protects developer credentials, and reviews system change requests.',
  },
  {
    domain: 'Dependencies',
    platform: 'Secures and monitors managed cloud infra providers, CDNs, and critical upstream cryptographic services.',
    customer: 'Evaluates downstream player configurations and verifies that integrated clients conform to regional audit compliance.',
  },
  {
    domain: 'Evidence',
    platform: 'Maintains active Trust Center documentation, audit logs, third-party attestations, and security reviews.',
    customer: 'Retrieves evidence packets for regulatory submissions, audits local integrations, and validates external setups.',
  },
];

export default function SharedResponsibilitySection() {
  return (
    <section className="w-full bg-white border-b border-slate-200 py-20 md:py-28 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-slate-900 leading-tight">
            Shared responsibility — platform and customer boundaries
          </h2>
          <p className="text-slate-600 text-lg font-normal   leading-relaxed max-w-3xl">
            Make shared responsibility explicit and actionable across every control domain.
          </p>
        </div>

        {/* Table Container */}
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-lg flex flex-col gap-4">
          <div className="p-3 bg-slate-50 rounded-lg grid grid-cols-1 md:grid-cols-12 gap-4 text-sm font-bold  ">
            <span className="md:col-span-3 text-slate-900">Control Domain</span>
            <span className="md:col-span-4 text-blue-600">Platform Responsibility</span>
            <span className="md:col-span-5 text-amber-600">Customer / Integrator Responsibility</span>
          </div>

          <div className="flex flex-col divide-y divide-slate-200">
            {tableRows.map((row, idx) => (
              <div
                key={idx}
                className="p-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-start"
              >
                <span className="md:col-span-3 text-slate-900 text-base font-bold  ">
                  {row.domain}
                </span>
                <p className="md:col-span-4 text-slate-600 text-sm font-normal   leading-relaxed">
                  {row.platform}
                </p>
                <p className="md:col-span-5 text-slate-600 text-sm font-normal   leading-relaxed">
                  {row.customer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
