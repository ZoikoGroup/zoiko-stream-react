import React from "react";

interface LifecycleStage {
  step: string;
  title: string;
  description: string;
}

const lifecycleData: LifecycleStage[] = [
  {
    step: "01",
    title: "Prepare",
    description:
      "Configure base objectives, rehearse timelines, and establish ownership rules.",
  },
  {
    step: "02",
    title: "Contribute",
    description:
      "Approved local and remote source streams feed into the network actively.",
  },
  {
    step: "03",
    title: "Produce",
    description:
      "Assembles and manages overlays and graphic layers where supported.",
  },
  {
    step: "04",
    title: "Secure",
    description:
      "Enforce least-privilege administrative access and player authorization.",
  },
  {
    step: "05",
    title: "Deliver",
    description:
      "Distribute stream output flawlessly across global content networks.",
  },
  {
    step: "06",
    title: "Monitor",
    description:
      "Active observability mapping stream parameters and network health.",
  },
  {
    step: "07",
    title: "Preserve",
    description:
      "Structured recording, cloud capture limits, and archive lifecycle.",
  },
  {
    step: "08",
    title: "Understand",
    description: "Source-approved telemetry analytics without vanity metrics.",
  },
  {
    step: "09",
    title: "Improve",
    description:
      "Evaluate post-run audits, configure updates, and adopt learnings.",
  },
];

export default function MediaOperationsLifecycleSection() {
  return (
    <section className="w-full bg-white text-slate-900 font-sans py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950 mb-3">
            The enterprise media operations lifecycle
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-normal">
            A governed 9-stage pathway from preparation through continuous
            improvement.
          </p>
        </div>

        {/* 9 Cards Grid Container (3x3 on medium/large screens) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {lifecycleData.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 shadow-sm flex items-start gap-4 transition-all hover:shadow-md hover:border-slate-300"
            >
              {/* Numbered Badge */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white shadow-sm">
                {item.step}
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <h3 className="text-base font-bold text-slate-950 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
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
