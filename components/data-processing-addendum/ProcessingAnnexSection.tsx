import React from 'react';

export default function ProcessingAnnexSection() {
  return (
    <section id="processing-annex" className="w-full bg-[#FAFAFC] border-b border-slate-200 py-12 lg:py-16 px-6 sm:px-12 lg:px-20 scroll-mt-20">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8">
        
        {/* Header */}
        <div className="flex flex-col gap-2 max-w-[740px]">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#40C4AA] rounded-full" />
            <span className="text-[#0D6EFD] text-xs font-mono uppercase tracking-wide font-medium">
              ANNEX, NOT INFERENCE
            </span>
          </div>
          <h2 className="text-slate-900 text-2xl sm:text-3xl font-semibold font-['Space_Grotesk'] leading-snug">
            Processing details annex.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Data subjects, categories, operations, purpose, and duration — shown only as defined in the current annex.
          </p>
        </div>

        {/* Table Container */}
        <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-[#F3F4F6] border-b border-slate-200 font-mono uppercase text-slate-900 font-semibold">
              <tr>
                <th scope="col" className="px-5 py-3.5 w-60">Field</th>
                <th scope="col" className="px-5 py-3.5">Detail</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-sans">
              <tr className="hover:bg-slate-50/50">
                <td className="px-5 py-3.5 font-medium text-slate-900">Data subjects</td>
                <td className="px-5 py-3.5 text-slate-600">Customer&apos;s authorized users, and end viewers where applicable to the service configuration</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="px-5 py-3.5 font-medium text-slate-900">Personal data categories</td>
                <td className="px-5 py-3.5 text-slate-600">Account identifiers, contact information, usage and technical logs, and content metadata submitted to the services</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="px-5 py-3.5 font-medium text-slate-900">Special categories</td>
                <td className="px-5 py-3.5 text-slate-600">Not intended to be processed under standard use; see annex for exceptions if applicable</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="px-5 py-3.5 font-medium text-slate-900">Processing operations</td>
                <td className="px-5 py-3.5 text-slate-600">Collection, storage, transmission, and technical operations necessary to deliver the services</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="px-5 py-3.5 font-medium text-slate-900">Purpose</td>
                <td className="px-5 py-3.5 text-slate-600">Provision, security, and support of the ZoikoStream services under the underlying agreement</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="px-5 py-3.5 font-medium text-slate-900">Duration/frequency</td>
                <td className="px-5 py-3.5 text-slate-600">Continuous for the term of the services agreement, per the annex</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-slate-500 font-mono text-xs">
          Illustrative example annex — the current signed/downloadable annex is the authoritative source.
        </p>

      </div>
    </section>
  );
}
