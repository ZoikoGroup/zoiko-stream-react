import React from "react";
import Image from "next/image";

export default function OperationsComparisonSection() {
  return (
    <section className="relative w-full text-white font-sans py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/media/b8.png"
          alt="Operations Comparison Background"
          fill
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3">
            Enterprise operations vs. managed live events
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-normal">
            Understand the sibling boundary between recurring enterprise
            operations and event-specific professional management.
          </p>
        </div>

        {/* 2 Comparison Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Enterprise Media Operations */}
          <div className="rounded-2xl border border-slate-800/80 bg-[#0d121f]/80 backdrop-blur-md p-8 flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Enterprise Media Operations
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                A recurring, self-managed or shared operational model. Your
                internal teams or long-term AV partners handle standard cameras,
                runbooks, and timeline gates actively. Optimized for repeating
                townhalls, investor reviews, and continuous developer training
                cycles.
              </p>
            </div>

            {/* Checklist items */}
            <ul className="space-y-3 pt-2">
              <li className="flex items-center text-xs sm:text-sm text-emerald-400 font-medium">
                <span className="mr-2">✓</span> Governed 9-stage lifecycle
                workflows
              </li>
              <li className="flex items-center text-xs sm:text-sm text-emerald-400 font-medium">
                <span className="mr-2">✓</span> SAML SSO access whitelist sync
              </li>
              <li className="flex items-center text-xs sm:text-sm text-emerald-400 font-medium">
                <span className="mr-2">✓</span> Permanent sovereign cloud
                retention
              </li>
            </ul>
          </div>

          {/* Card 2: Managed Live Events */}
          <div className="rounded-2xl border border-slate-800/80 bg-[#0d121f]/80 backdrop-blur-md p-8 flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Managed Live Events
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-8">
                Event-specific, professionally managed service options.
                ZoikoStream on-site engineers actively deploy heavy broadcast
                pipelines, oversee redundant multi-path encoders, coordinate
                with venue crews, and monitor signal health. Optimized for
                boutique product launches and high-fidelity global keynotes.
              </p>
            </div>

            {/* Action Button */}
            <div>
              <button
                type="button"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-slate-950 bg-gradient-to-b from-teal-400 via-cyan-400 to-sky-400 hover:brightness-110 transition-all shadow-md"
              >
                Explore Managed Live Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
