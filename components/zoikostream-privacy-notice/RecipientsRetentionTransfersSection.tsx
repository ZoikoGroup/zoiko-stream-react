import React from 'react';

export default function RecipientsRetentionTransfersSection() {
  return (
    <section id="recipients-retention" className="relative w-full bg-[#f0f4f8] py-16 lg:py-20 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          <span className="font-mono text-xs font-semibold tracking-wider text-blue-600 uppercase">
            THREE SEPARATE DISCLOSURES
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
          Recipients, retention &amp; transfers.
        </h2>

        {/* Subtitle */}
        <p className="text-slate-600 text-sm sm:text-base max-w-4xl leading-relaxed mb-8">
          Sharing data, keeping it, and moving it across borders are three distinct questions, each with its own answer.
        </p>

        {/* 3 Dark Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Recipients */}
          <div className="bg-[#0d1424] text-white rounded-2xl border border-slate-800 p-6 sm:p-7 shadow-md flex flex-col justify-start">
            <h3 className="font-bold text-white text-base mb-4">
              Recipients
            </h3>
            <ul className="space-y-3 text-xs text-slate-400 leading-relaxed">
              <li>Service providers who help us operate ZoikoStream (hosting, payments, analytics)</li>
              <li>Legal or regulatory bodies, only where required by law</li>
              <li>A successor entity in the event of a merger or acquisition, under equivalent protections</li>
            </ul>
          </div>

          {/* Card 2: Retention */}
          <div className="bg-[#0d1424] text-white rounded-2xl border border-slate-800 p-6 sm:p-7 shadow-md flex flex-col justify-start">
            <h3 className="font-bold text-white text-base mb-4">
              Retention
            </h3>
            <ul className="space-y-3 text-xs text-slate-400 leading-relaxed">
              <li>Account data: retained while your account is active, plus a limited period after closure</li>
              <li>Billing records: retained as required by applicable financial record-keeping obligations</li>
              <li>Support communications: retained for a limited period to resolve related issues</li>
            </ul>
          </div>

          {/* Card 3: Transfers */}
          <div className="bg-[#0d1424] text-white rounded-2xl border border-slate-800 p-6 sm:p-7 shadow-md flex flex-col justify-start">
            <h3 className="font-bold text-white text-base mb-4">
              Transfers
            </h3>
            <ul className="space-y-3 text-xs text-slate-400 leading-relaxed">
              <li>Personal data may be processed in countries other than your own</li>
              <li>Approved safeguards (such as standard contractual clauses) apply where required</li>
              <li>Exact mechanism and countries are stated in the current approved notice text</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
