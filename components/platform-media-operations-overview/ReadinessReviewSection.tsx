const requirements = [
  {
    req: 'Scope defined',
    owner: 'Ops-Lead',
    state: 'Ready',
    scheme: 'teal',
    evidence: 'Scope document finalized',
  },
  {
    req: 'Input/source ready',
    owner: 'Developer-Platform',
    state: 'Ready',
    scheme: 'teal',
    evidence: 'Primary RTMP source verified',
  },
  {
    req: 'Media/asset ready',
    owner: 'Ingest-Coordinator',
    state: 'Conditional',
    scheme: 'red',
    evidence: 'Waiting for secondary transcode',
  },
  {
    req: 'Rights/policy',
    owner: 'Legal-Operations',
    state: 'Ready',
    scheme: 'teal',
    evidence: 'Distribution approved under policy',
  },
  {
    req: 'Accessibility',
    owner: 'Media-Handoff',
    state: 'Review needed',
    scheme: 'amber',
    evidence: 'No WebVTT captions uploaded',
  },
  {
    req: 'Operational roles',
    owner: 'Ops-Lead',
    state: 'Ready',
    scheme: 'teal',
    evidence: '4 roles assigned and online',
  },
  {
    req: 'Dependencies',
    owner: 'Sys-Admin',
    state: 'Degraded',
    scheme: 'red',
    evidence: 'Partner egress CDN latency high',
  },
];

const badgeStyles: Record<string, { bg: string; text: string }> = {
  teal: { bg: 'bg-teal-500/10', text: 'text-teal-500' },
  amber: { bg: 'bg-amber-600/10', text: 'text-slate-400' },
  red: { bg: 'bg-red-500/10', text: 'text-slate-400' },
};

export default function ReadinessReviewSection() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-28 py-16 sm:py-20 lg:py-24 bg-slate-950/75 border-b border-slate-700 flex flex-col gap-14 overflow-hidden">
      <div className="flex flex-col gap-3">
        <h2 className="text-slate-50 text-3xl sm:text-4xl font-bold leading-tight font-['Space_Grotesk']">
          Media Operations Readiness Review
        </h2>
        <p className="text-slate-400 text-lg font-normal leading-7 font-['Space_Grotesk']">
          Every operation starts with verified readiness.
        </p>
      </div>

      {/* Console Card */}
      <div className="w-full bg-slate-950 rounded-2xl border border-slate-700 flex flex-col overflow-hidden shadow-2xl">
        {/* Title bar */}
        <div className="h-10 px-4 bg-zinc-900 border-b border-gray-800 flex justify-between items-center">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-red-500 rounded-full" />
            <span className="w-2 h-2 bg-amber-600 rounded-full" />
            <span className="w-2 h-2 bg-teal-500 rounded-full" />
          </div>
          <span className="text-slate-400 text-xs font-normal font-['Space_Grotesk']">
            ZoikoStream Platform - Pre-Flight Operational Registry
          </span>
          <div className="w-10" />
        </div>

        {/* Console Body */}
        <div className="p-6 bg-slate-950 flex flex-col lg:flex-row gap-6">
          {/* Main Table Area */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <p className="text-slate-50 text-lg font-bold font-['Space_Grotesk']">
                  Production Broadcast - Weekly Town Hall
                </p>
                <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk']">
                  Type: Recurring | Owner: Operations Team
                </p>
              </div>
              <div className="px-2 py-1 bg-amber-600/10 rounded-sm">
                <span className="text-slate-400 text-xs font-bold font-['Space_Grotesk'] uppercase">
                  8/10 READY (UNAUTHORIZED GAPS)
                </span>
              </div>
            </div>

            {/* Table */}
            <div className="bg-slate-900 rounded-lg border border-slate-700 flex flex-col overflow-hidden">
              <div className="px-4 py-3 bg-slate-900 flex justify-between items-center border-b border-slate-700 text-slate-50 text-xs font-bold font-['Space_Grotesk']">
                <span className="w-48">Requirement</span>
                <span className="w-36 hidden sm:block">Owner</span>
                <span className="w-28">State</span>
                <span className="w-56 hidden md:block">Evidence</span>
              </div>

              {requirements.map((item, idx) => (
                <div key={item.req}>
                  <div className="px-4 py-3 flex justify-between items-center text-xs font-['Space_Grotesk']">
                    <span className="w-48 text-slate-50 font-normal">{item.req}</span>
                    <span className="w-36 text-slate-400 font-normal hidden sm:block">
                      {item.owner}
                    </span>
                    <div className="w-28 flex">
                      <div className={`px-2 py-1 ${badgeStyles[item.scheme].bg} rounded-sm`}>
                        <span className={`${badgeStyles[item.scheme].text} text-xs font-bold uppercase`}>
                          {item.state}
                        </span>
                      </div>
                    </div>
                    <span className="w-56 text-slate-400 font-normal line-clamp-1 hidden md:block">
                      {item.evidence}
                    </span>
                  </div>
                  {idx < requirements.length - 1 && (
                    <div className="border-t border-slate-700" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-72 p-5 bg-slate-900 rounded-xl border border-slate-700 flex flex-col gap-4 shrink-0">
            <p className="text-slate-400 text-sm font-bold font-['Space_Grotesk']">
              BLOCKING ISSUES (1)
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-slate-50 text-xs font-bold font-['Space_Grotesk']">
                Partner CDN latency high
              </p>
              <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-4">
                Egress node response times in AP-Southeast region exceed the SLA threshold of 250ms.
              </p>
            </div>

            <div className="border-t border-slate-700" />

            <p className="text-slate-400 text-xs font-bold font-['Space_Grotesk']">
              TRUST LABEL: ILLUSTRATIVE READINESS
            </p>

            <div className="flex flex-col gap-2">
              <button
                type="button"
                className="px-6 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-[10px] text-slate-50 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity"
              >
                Review readiness
              </button>
              <button
                type="button"
                className="px-7 py-3.5 rounded-[10px] border border-slate-700 text-slate-50 text-base font-medium font-['Space_Grotesk'] hover:bg-slate-800 transition-colors"
              >
                View documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
