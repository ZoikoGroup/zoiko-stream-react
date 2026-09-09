import React from "react";
import Image from "next/image";

interface WorkflowColumn {
  title: string;
  titleColor: string;
  items: string[];
}

const workflowData: WorkflowColumn[] = [
  {
    title: "SOURCES & INTAKE",
    titleColor: "text-emerald-400",
    items: [
      "SRT Camera Handshake",
      "RTMP Remote Guest",
      "Local Video Preflight",
    ],
  },
  {
    title: "PRODUCTION LAYER",
    titleColor: "text-blue-400",
    items: [
      "Lower-third Graphics",
      "Composite Slides",
      "Failover Audio Mix",
    ],
  },
  {
    title: "IDENTITY & ACCESS",
    titleColor: "text-sky-400",
    items: [
      "Active SAML Sync",
      "Invite Whitelisting",
      "Credential Passcodes",
    ],
  },
  {
    title: "MONITOR & DELIVER",
    titleColor: "text-amber-400",
    items: [
      "Live OBSERVABILITY",
      "Stream Health Audit",
      "Cloud Storage Preservation",
    ],
  },
];

export default function WorkflowArchitectureSection() {
  return (
    <section className="relative w-full text-white font-sans py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/media/b2.png"
          alt="Workflow Background"
          fill
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-slate-950/60" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3">
            See the workflow architecture in action
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-normal">
            A centralized view mapping every decision, gate, responsibility, and authority under a unified operating model.
          </p>
        </div>

        {/* Dashboard/Operations Board Panel */}
        <div className="rounded-2xl border border-slate-800/80 bg-[#0B0F17]/80 backdrop-blur-xl p-6 sm:p-8 shadow-2xl">
          {/* Panel Top Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-6 mb-6">
            <div className="flex items-center gap-3">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
                ZoikoStream Operations Board
              </h3>
              <span className="inline-flex items-center rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-mono font-semibold tracking-wider text-emerald-400 uppercase">
                ACTIVE OPERATING SYSTEM
              </span>
            </div>
            <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">
              MODEL ID: ZS-ENTERPRISE-OPS
            </span>
          </div>

          {/* 4 Columns Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflowData.map((col, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-4 flex flex-col"
              >
                {/* Column Title */}
                <span className={`text-[11px] font-mono font-bold tracking-wider mb-4 uppercase ${col.titleColor}`}>
                  {col.title}
                </span>

                {/* Cards List */}
                <div className="space-y-3">
                  {col.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="rounded-lg border border-slate-800 bg-[#121824]/60 p-3 text-xs font-medium text-slate-200 shadow-sm transition-all hover:border-slate-700 hover:bg-[#161d2b]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}