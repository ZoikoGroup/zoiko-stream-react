import React from "react";

interface ImplementationPhase {
  phase: string;
  title: string;
  description: string;
}

const implementationData: ImplementationPhase[] = [
  {
    phase: "PHASE 1",
    title: "Discovery",
    description:
      "Map active operational challenges and define organizational scope limits.",
  },
  {
    phase: "PHASE 2",
    title: "Architecture review",
    description:
      "Verify network routing path capacities and source stream specifications.",
  },
  {
    phase: "PHASE 3",
    title: "Onboarding",
    description:
      "Sync SAML whitelists, deploy player layouts, and establish admin domains.",
  },
  {
    phase: "PHASE 4",
    title: "Pilot/rehearsal",
    description:
      "Run comprehensive 10-point speed sweeps and timeline cue testing.",
  },
  {
    phase: "PHASE 5",
    title: "Go-live",
    description: "Broadcast under dedicated L1 engineering monitoring windows.",
  },
  {
    phase: "PHASE 6",
    title: "Ongoing adoption",
    description:
      "Evaluate run analytics, adjust runbooks, and scale workflows safely.",
  },
];

export default function ImplementationPhasesSection() {
  return (
    <section className="w-full bg-white text-slate-900 font-sans py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950 mb-3">
            Source-backed implementation without timeline guarantees
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-normal">
            Logical phases from discovery through ongoing adoption, each linked
            to current authority.
          </p>
        </div>

        {/* 6 Cards Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {implementationData.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-5 shadow-sm flex flex-col justify-between transition-all hover:shadow-md hover:border-slate-300"
            >
              <div>
                {/* Phase Label */}
                <span className="text-[10px] font-mono font-bold tracking-wider text-blue-600 uppercase mb-3 block">
                  {item.phase}
                </span>

                {/* Phase Title */}
                <h3 className="text-sm font-bold text-slate-950 mb-2">
                  {item.title}
                </h3>

                {/* Phase Description */}
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
