import React from "react";

interface MatrixRow {
  domain: string;
  customer?: boolean;
  zoikostream?: boolean;
  partner?: boolean;
  shared?: boolean;
}

const matrixData: MatrixRow[] = [
  { domain: "Event objective/content", customer: true },
  { domain: "Speaker/talent coordination", customer: true },
  { domain: "Source/device readiness", shared: true },
  { domain: "Production operations", shared: true },
  { domain: "Identity/audience access", customer: true },
  { domain: "Accessibility/language", shared: true },
  { domain: "Monitoring/incident", zoikostream: true },
  { domain: "Recording/replay", zoikostream: true },
  { domain: "Analytics/reporting", zoikostream: true },
  { domain: "Change/cancellation", shared: true },
];

export default function ResponsibilityMatrixSection() {
  return (
    <section className="relative w-full bg-white text-slate-900 font-sans py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-[38px] font-bold tracking-tight text-slate-950 mb-2">
            Responsibility matrix
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-normal">
            Clear ownership for every domain — source-backed, not assumed
          </p>
        </div>

        {/* Matrix Card Container */}
        <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 backdrop-blur-md overflow-hidden shadow-sm p-4 sm:p-6 mb-6">
          <div className="w-full overflow-x-auto">
            <div className="min-w-[640px]">
              {/* Header Row */}
              <div className="grid grid-cols-12 gap-4 pb-4 border-b border-slate-200/80 px-4 text-[11px] font-bold tracking-wider text-slate-900 uppercase">
                <div className="col-span-4">RESPONSIBILITY DOMAIN</div>
                <div className="col-span-2 text-center">CUSTOMER</div>
                <div className="col-span-2 text-center">ZOIKOSTREAM</div>
                <div className="col-span-2 text-center">PARTNER</div>
                <div className="col-span-2 text-center">SHARED</div>
              </div>

              {/* Data Rows */}
              <div className="divide-y divide-slate-200/50">
                {matrixData.map((row) => (
                  <div
                    key={row.domain}
                    className="grid grid-cols-12 gap-4 py-3.5 px-4 items-center text-xs sm:text-sm font-medium text-slate-800 hover:bg-slate-100/50 transition-colors"
                  >
                    <div className="col-span-4 font-semibold text-slate-900">
                      {row.domain}
                    </div>

                    {/* Customer Dot */}
                    <div className="col-span-2 flex items-center justify-center">
                      {row.customer ? (
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block shadow-sm" />
                      ) : (
                        <span className="text-slate-300 font-normal">—</span>
                      )}
                    </div>

                    {/* Zoikostream Dot */}
                    <div className="col-span-2 flex items-center justify-center">
                      {row.zoikostream ? (
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block shadow-sm" />
                      ) : (
                        <span className="text-slate-300 font-normal">—</span>
                      )}
                    </div>

                    {/* Partner Dot */}
                    <div className="col-span-2 flex items-center justify-center">
                      {row.partner ? (
                        <span className="w-2.5 h-2.5 rounded-full bg-purple-600 inline-block shadow-sm" />
                      ) : (
                        <span className="text-slate-300 font-normal">—</span>
                      )}
                    </div>

                    {/* Shared Dot */}
                    <div className="col-span-2 flex items-center justify-center">
                      {row.shared ? (
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block shadow-sm" />
                      ) : (
                        <span className="text-slate-300 font-normal">—</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-[11px] sm:text-xs text-slate-400 font-normal">
          * Responsibility domains map strictly to pre-negotiated SLA bounds.
          Specific operational parameters remain subject to technical review
          during intake.
        </p>
      </div>
    </section>
  );
}
