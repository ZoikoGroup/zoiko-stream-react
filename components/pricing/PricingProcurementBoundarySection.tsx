import React from 'react';

export default function PricingProcurementBoundarySection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-10 bg-slate-50 flex justify-center items-center overflow-hidden">
      <div className="w-full max-w-6xl bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-200 p-6 sm:p-7 shadow-xs">
        <p className="text-gray-500 text-sm font-['Inter'] leading-relaxed">
          <strong className="font-bold text-gray-700">Procurement & terms boundary:</strong>{' '}
          Currency, tax treatment, commitment length, and payment terms are only established by the ZoikoStream Commercial Terms Registry once a quote is scoped. This page does not publish contractual commitments, SLAs, or entitlements on its own.
        </p>
      </div>
    </section>
  );
}
