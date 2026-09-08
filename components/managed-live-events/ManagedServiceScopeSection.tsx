import React from "react";
import {
  Map,
  Cpu,
  Layout,
  PlayCircle,
  Activity,
  Headphones,
} from "lucide-react";

export default function ManagedServiceScopeSection() {
  return (
    <section className="relative w-full bg-white text-slate-900 font-sans py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-[38px] font-bold tracking-tight text-slate-950 mb-2">
            Current managed service scope
          </h2>
          <p className="text-base text-slate-500 font-normal">
            Only approved service components — each with clear state and
            ownership
          </p>
        </div>

        {/* 6 Grid Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="flex flex-col justify-between rounded-2xl bg-slate-50/70 border border-slate-200/80 p-6 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-9 h-9 rounded-lg bg-blue-50/80 border border-blue-100/60 flex items-center justify-center text-blue-600">
                  <Map className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-100/80 text-emerald-600">
                    CURRENT
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-100/80 text-blue-600">
                    CUSTOMER
                  </span>
                </div>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Planning
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Initial feasibility mapping, timeline structuring, and budget
                constraint reviews.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-between rounded-2xl bg-slate-50/70 border border-slate-200/80 p-6 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-9 h-9 rounded-lg bg-blue-50/80 border border-blue-100/60 flex items-center justify-center text-blue-600">
                  <Cpu className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-100/80 text-emerald-600">
                    CURRENT
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-100/80 text-blue-600">
                    ZOIKOSTREAM
                  </span>
                </div>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Architecture & technical review
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Bandwidth diagnostics, failover paths planning, and hardware
                compliance audit.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-between rounded-2xl bg-slate-50/70 border border-slate-200/80 p-6 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-9 h-9 rounded-lg bg-blue-50/80 border border-blue-100/60 flex items-center justify-center text-blue-600">
                  <Layout className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-100/80 text-amber-600">
                    CONDITIONAL
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-100/80 text-blue-600">
                    SHARED
                  </span>
                </div>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Production
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Custom watermarks, graphics overlays design, lower-third
                assembly, and video cues.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col justify-between rounded-2xl bg-slate-50/70 border border-slate-200/80 p-6 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-9 h-9 rounded-lg bg-blue-50/80 border border-blue-100/60 flex items-center justify-center text-blue-600">
                  <PlayCircle className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-100/80 text-amber-600">
                    CONDITIONAL
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-100/80 text-blue-600">
                    ZOIKOSTREAM
                  </span>
                </div>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Event-day operations
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                On-site streaming engineer orchestration, switching master
                streams, and real-time mixing.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col justify-between rounded-2xl bg-slate-50/70 border border-slate-200/80 p-6 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-9 h-9 rounded-lg bg-blue-50/80 border border-blue-100/60 flex items-center justify-center text-blue-600">
                  <Activity className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-100/80 text-emerald-600">
                    CURRENT
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-100/80 text-blue-600">
                    SHARED
                  </span>
                </div>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Monitoring
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Active signal telemetry, network load optimization, and
                real-time L1 technical support.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="flex flex-col justify-between rounded-2xl bg-slate-50/70 border border-slate-200/80 p-6 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-9 h-9 rounded-lg bg-blue-50/80 border border-blue-100/60 flex items-center justify-center text-blue-600">
                  <Headphones className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-200/70 text-slate-600">
                    NOT ESTABLISHED
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-100/80 text-blue-600">
                    CUSTOMER
                  </span>
                </div>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Accessibility & language
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Embed speech-to-text translators, sub-audio channels routing,
                and accessible player controls.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
