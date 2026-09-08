import React from 'react';

export default function PartiesRolesSection() {
  return (
    <section id="parties-roles" className="w-full bg-[#FAFAFC] border-b border-slate-200 py-12 lg:py-16 px-6 sm:px-12 lg:px-20 scroll-mt-20">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8">
        
        {/* Header */}
        <div className="flex flex-col gap-2 max-w-[740px]">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#40C4AA] rounded-full" />
            <span className="text-[#0D6EFD] text-xs font-mono uppercase tracking-wide font-medium">
              SOURCE-CONTROLLED ROLES ONLY
            </span>
          </div>
          <h2 className="text-slate-900 text-2xl sm:text-3xl font-semibold font-['Space_Grotesk'] leading-snug">
            Parties, privacy roles & relationship.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Exact roles depend on the specific processing activity and are defined in the operative DPA — not assumed from company structure.
          </p>
        </div>

        {/* Table Container */}
        <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-[#F3F4F6] border-b border-slate-200 font-mono uppercase text-slate-900 font-semibold">
              <tr>
                <th scope="col" className="px-5 py-3.5 w-64">Party</th>
                <th scope="col" className="px-5 py-3.5 w-56">Typical role</th>
                <th scope="col" className="px-5 py-3.5">Order of precedence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-sans">
              <tr className="hover:bg-slate-50/50">
                <td className="px-5 py-3.5 font-semibold text-slate-900">Customer</td>
                <td className="px-5 py-3.5 text-slate-600">Controller (typical)</td>
                <td className="px-5 py-3.5 text-slate-600">Executed account agreement, then this DPA, then general Terms</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="px-5 py-3.5 font-semibold text-slate-900">ZoikoStream</td>
                <td className="px-5 py-3.5 text-slate-600">Processor (typical)</td>
                <td className="px-5 py-3.5 text-slate-600">Acts only on documented customer instructions within scope</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="px-5 py-3.5 font-semibold text-slate-900">Approved subprocessors</td>
                <td className="px-5 py-3.5 text-slate-600">Sub-processor</td>
                <td className="px-5 py-3.5 text-slate-600">Engaged under written agreement imposing equivalent obligations</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-slate-500 font-mono text-xs">
          Illustrative example roles — your executed agreement is the authoritative source for the roles that apply to your account.
        </p>

      </div>
    </section>
  );
}
