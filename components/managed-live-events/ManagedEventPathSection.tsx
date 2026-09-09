import React from "react";
import { Monitor, Layers, Award, HelpCircle, ArrowRight } from "lucide-react";

export default function ManagedEventPathSection() {
  return (
    <section className="relative w-full bg-[#f8fafc] text-slate-900 font-sans py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 mb-3">
            Is a managed event the right path?
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-normal">
            Choose the path that matches your need
          </p>
        </div>

        {/* Grid Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="flex flex-col justify-between rounded-xl bg-slate-50/80 border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-50/80 border border-blue-100/60 flex items-center justify-center mb-5 text-blue-600">
                <Monitor className="w-5 h-5 stroke-[1.75]" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Self-operated platform
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                We operate recurring enterprise programs ourselves.
              </p>
            </div>
            <div className="pt-8">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                <span>Live streaming / Platform</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-between rounded-xl bg-slate-50/80 border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-50/80 border border-blue-100/60 flex items-center justify-center mb-5 text-blue-600">
                <Layers className="w-5 h-5 stroke-[1.75]" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Enterprise media operations
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                We need ongoing enterprise media workflows.
              </p>
            </div>
            <div className="pt-8">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                <span>Enterprise media operations</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-between rounded-xl bg-slate-50/80 border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-50/80 border border-blue-100/60 flex items-center justify-center mb-5 text-blue-600">
                <Award className="w-5 h-5 stroke-[1.75]" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Managed live event
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                We need event-specific professional planning and operation.
              </p>
            </div>
            <div className="pt-8">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                <span>Proceed to readiness</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 4 - Highlighted / Red Variant */}
          <div className="flex flex-col justify-between rounded-xl bg-slate-50/80 border border-red-500/80 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-lg bg-red-50/80 border border-red-100/60 flex items-center justify-center mb-5 text-red-500">
                <HelpCircle className="w-5 h-5 stroke-[1.75]" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Live event support
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Our event is already live and has an issue.
              </p>
            </div>
            <div className="pt-8">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-500 hover:text-red-600 transition-colors"
              >
                <span>Live Events support</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
