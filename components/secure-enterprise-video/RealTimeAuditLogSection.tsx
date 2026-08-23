import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg128 from '@/public/images/secure-enterprise/bg (128).png';

const auditLogs = [
  { time: '09:41 EST', title: 'Admin Policy Change', desc: "James Holloway updated restriction 'DRM required'", badge: 'AUTHORIZED', badgeStyle: 'bg-emerald-500/10 text-emerald-500' },
  { time: '10:15 EST', title: 'SAML SSO Exception Raised', desc: 'Granted 2h access to Board_Auditor_Guest', badge: 'PENDING SIGNATURE', badgeStyle: 'bg-amber-500/10 text-amber-500' },
  { time: '11:00 EST', title: 'Periodic Telemetry Verification', desc: '0 playbacks blocked, 142 sessions active', badge: 'VERIFIED', badgeStyle: 'bg-emerald-500/10 text-emerald-500' },
];

export default function RealTimeAuditLogSection() {
  return (
    <section className="relative w-full bg-gray-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg128}
          alt="Audit Stream Background"
          fill
          className="object-cover "
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-white leading-tight">
            Every access decision leaves a trail
          </h2>
          <p className="text-slate-400 text-lg font-normal   leading-relaxed max-w-3xl">
            Never question who authorized a playback. Convert trust from abstract corporate policy into inspectable, chronological truth.
          </p>
        </div>

        {/* Audit Log Stream Box */}
        <div className="p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 backdrop-blur-md flex flex-col gap-5">
          <span className="text-white text-sm font-bold   tracking-wide">
            REAL-TIME TRANSACTION AUDIT STREAM
          </span>

          <div className="flex flex-col gap-3">
            {auditLogs.map((log, idx) => (
              <div key={idx} className="p-3.5 bg-gray-950 rounded-lg border border-gray-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-4 flex-1">
                  <span className="text-teal-400 text-xs font-normal   w-20 shrink-0">
                    {log.time}
                  </span>
                  <div className="w-0.5 h-6 bg-gray-800 shrink-0 hidden sm:block" />
                  <div className="flex flex-col gap-0.5">
                    <h4 className="text-white text-sm font-bold  ">
                      {log.title}
                    </h4>
                    <p className="text-slate-400 text-xs font-normal font-['Inter']">
                      {log.desc}
                    </p>
                  </div>
                </div>

                <span className={`px-2.5 py-1 rounded text-xs font-bold   shrink-0 ${log.badgeStyle}`}>
                  {log.badge}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Governance Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-lg font-bold  ">Policy governance</h3>
            <ul className="flex flex-col gap-3 text-slate-400 text-sm font-normal font-['Inter']">
              <li>✓ Change tracking with diff logs</li>
              <li>✓ Multi-stage approval workflows</li>
              <li>✓ Version history rollback capabilities</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-white text-lg font-bold  ">Exception management</h3>
            <ul className="flex flex-col gap-3 text-slate-400 text-sm font-normal font-['Inter']">
              <li>✓ Temporary overrides with reasons</li>
              <li>✓ Self-dissolving time windows</li>
              <li>✓ Auditor-mandated accountability</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-white text-lg font-bold  ">Evidence export</h3>
            <ul className="flex flex-col gap-3 text-slate-400 text-sm font-normal font-['Inter']">
              <li>✓ ISO 27001 compliance-ready logs</li>
              <li>✓ Cryptographically signed records</li>
              <li>✓ SIEM raw stream integrations</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-start">
          <Link
            href="/talk-to-an-expert"
            className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold   hover:opacity-90 transition-opacity"
          >
            Review governance capabilities
          </Link>
        </div>
      </div>
    </section>
  );
}
