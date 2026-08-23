import React from 'react';

const receiptRows = [
  { label: 'Decision ID', value: 'urn:zoiko:decision:8e2d4f5a', status: 'Logged', statusClass: 'bg-emerald-100 text-emerald-600' },
  { label: 'Actor Reference', value: 'urn:zoiko:actor:partner-api-9b', status: 'Authenticated', statusClass: 'bg-emerald-100 text-emerald-600' },
  { label: 'Resource + Action', value: 'stream:decrypt_payload on urn:zoiko:media:9f8b417e', status: 'Authorized', statusClass: 'bg-emerald-100 text-emerald-600' },
  { label: 'Policy Reference', value: 'Policy: corporate-internal-restrict', status: 'Active', statusClass: 'bg-emerald-100 text-emerald-600' },
  { label: 'Decision State', value: 'ALLOWED (OIDC scope matched)', status: 'Success', statusClass: 'bg-emerald-100 text-emerald-600' },
  { label: 'Evidence Signature', value: 'SHA-256: 0x7a2d...f4e1 verified', status: 'Cryptographic', statusClass: 'bg-emerald-100 text-emerald-600' },
];

export default function DecisionEvidenceAuditabilitySection() {
  return (
    <section className="w-full bg-white border-b border-slate-200 py-20 md:py-24 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold   text-slate-900 leading-tight">
            Decision Evidence &amp; Auditability
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal   max-w-3xl">
            Prove what was authorized, limited, denied, changed, or revoked with reconstructable cryptographic receipts.
          </p>
        </div>

        {/* Audit Receipt Card */}
        <div className="p-8 bg-white rounded-2xl border-2 border-slate-200 shadow-xl flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-200">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-slate-900 text-xl font-bold  ">
                  Cryptographic Audit Receipt #9F8B
                </h3>
                <span className="px-2.5 py-0.5 bg-slate-100 text-slate-600 rounded text-xs font-bold  ">
                  COMPLIANCE RECORD
                </span>
              </div>
              <span className="text-slate-500 text-xs font-mono">
                ID: urn:zoiko:audit:9f8b417e-324c-46fe-88e1-e9db71eba30b
              </span>
            </div>

            <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold   border border-emerald-300 shrink-0">
              VERIFIED DECISION
            </span>
          </div>

          <div className="bg-slate-100 rounded-lg overflow-hidden flex flex-col divide-y divide-slate-200 border border-slate-200">
            {receiptRows.map((row, idx) => (
              <div key={idx} className="p-4 bg-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div className="flex flex-col">
                  <span className="text-slate-900 text-sm font-semibold  ">
                    {row.label}
                  </span>
                  <span className="text-slate-600 text-xs font-mono">
                    {row.value}
                  </span>
                </div>
                <span className={`px-2.5 py-1 rounded text-xs font-bold   ${row.statusClass}`}>
                  {row.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
