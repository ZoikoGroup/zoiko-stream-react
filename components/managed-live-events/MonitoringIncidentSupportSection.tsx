import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function MonitoringIncidentSupportSection() {
  return (
    <section className="relative w-full bg-white text-slate-900 font-sans py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Topographic/Contour Wave Overlay */}
    
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-[38px] font-bold tracking-tight text-slate-950 mb-2">
            Monitoring, incident response & support
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-normal">
            Operational authority — current health and event-specific support
          </p>
        </div>

        {/* 3 Cards Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Stream health */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 backdrop-blur-md overflow-hidden shadow-sm flex flex-col transition-all hover:shadow-md">
            <div className="relative w-full h-48 bg-slate-900">
              <Image
                src="/images/event/6.png"
                alt="Stream health monitoring interface"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-950 mb-1">
                  Stream health
                </h3>
                <p className="text-xs font-semibold text-blue-600 mb-3">
                  Is the event stream healthy now?
                </p>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                  Active telemetry checks, video frame rate tracking, and
                  automated ingest quality alerts mapped instantly.
                </p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-500 hover:underline"
              >
                <span>Access stream monitoring</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Platform status */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 backdrop-blur-md overflow-hidden shadow-sm flex flex-col transition-all hover:shadow-md">
            <div className="relative w-full h-48 bg-slate-900">
              <Image
                src="/images/event/7.png"
                alt="Platform status dashboard"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-950 mb-1">
                  Platform status
                </h3>
                <p className="text-xs font-semibold text-blue-600 mb-3">
                  Is there a platform incident?
                </p>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                  Real-time regional server performance status, global
                  distribution network diagnostics, and resolved metrics.
                </p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-500 hover:underline"
              >
                <span>View system status</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Event support */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 backdrop-blur-md overflow-hidden shadow-sm flex flex-col transition-all hover:shadow-md">
            <div className="relative w-full h-48 bg-slate-900">
              <Image
                src="/images/event/8.png"
                alt="Event support operator"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-950 mb-1">
                  Event support
                </h3>
                <p className="text-xs font-semibold text-blue-600 mb-3">
                  My managed event needs help
                </p>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                  Instantly connect with senior technical operations staff
                  assigned directly to your active live event window.
                </p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-500 hover:underline"
              >
                <span>Contact Live Events support</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
