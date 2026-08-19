'use client';

const pipelineNodes = [
  { label: 'APPROVED WORKFLOW', value: 'Origin ingest authorized' },
  { label: 'READINESS / AUTHORITY', value: 'Checklist and permissions verified' },
  { label: 'ACTIVE OPERATION / OBSERVE', value: 'SLA state telemetries active' },
  { label: 'DECIDE / CONTROLLED CHANGE', value: 'In-context workflow modifications' },
  { label: 'EVIDENCE / ESCALATION', value: 'Audit trace preserved globally' },
];

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden flex items-center bg-slate-950 pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 px-4 sm:px-8 lg:px-28 border-b border-gray-800 min-h-[709px]"
      style={{
        backgroundImage: `url('/images/platform-media-operations-overview/bg (55).png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-slate-950/60 z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start gap-6">
          <div className="px-3 py-1.5 rounded-full border border-blue-500 bg-blue-500/10 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <span className="text-blue-500 text-xs font-bold tracking-wider uppercase font-['Space_Grotesk']">
              PLATFORM / MEDIA OPERATIONS OVERVIEW
            </span>
          </div>

          <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight sm:leading-[52px] font-['Space_Grotesk']">
            Operate media workflows with clear responsibility, state, and evidence
          </h1>

          <p className="text-slate-400 text-base font-medium leading-6 font-['Space_Grotesk'] max-w-2xl">
            ZoikoStream Media operations overview explains how approved live and on-demand workflows can be prepared, authorized, observed, changed, escalated, measured, and preserved with clear roles, state, evidence, and specialist handoffs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              type="button"
              className="px-6 py-3.5 bg-gradient-to-b from-teal-500 to-blue-500 rounded-[10px] text-white text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity"
            >
              Talk to an expert
            </button>
            <button
              type="button"
              className="px-7 py-3.5 rounded-[10px] border border-white text-white text-base font-medium font-['Space_Grotesk'] hover:bg-white/10 transition-colors"
            >
              View documentation
            </button>
          </div>
        </div>

        {/* Right Pipeline Nodes Panel */}
        <div className="w-full lg:w-[500px] p-7 bg-zinc-900/80 rounded-2xl border border-gray-800 backdrop-blur-sm flex flex-col gap-5 shrink-0">
          <p className="text-teal-400 text-sm font-bold tracking-wide font-['Space_Grotesk']">
            OPERATIONS PIPELINE NODES
          </p>
          <div className="flex flex-col gap-2">
            {pipelineNodes.map((node) => (
              <div
                key={node.label}
                className="p-3 bg-slate-900 rounded-lg border border-gray-800 flex justify-between items-start"
              >
                <span className="text-white text-xs font-bold font-['Space_Grotesk']">
                  {node.label}
                </span>
                <span className="text-teal-400 text-xs font-normal font-['Space_Grotesk']">
                  {node.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
