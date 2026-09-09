import React from "react";
import Image from "next/image";
import {
  Video,
  Users,
  HardDrive,
  Layout,
  Layers,
  ShieldAlert,
  Info,
  ArrowRight,
} from "lucide-react";

export default function ContributionProductionSection() {
  return (
    <section className="relative min-h-[720px] w-full overflow-hidden text-white font-sans py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      {/* Background Image - Clean overlay without dark filters/divs */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/event/bg3.png"
          alt="Contribution Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Main Header */}
        <div className="mb-10">
          <h2 className="text-[38px] font-bold tracking-tight text-white mb-2">
            Contribution, speakers & production
          </h2>
          <p className="text-sm sm:text-base text-gray-300 font-normal">
            Specialist authority for source management and broadcast operations
          </p>
        </div>

        {/* 2-Column Grid for Feature Lists */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 mb-8">
          {/* Left Column: Contribution & sources */}
          <div>
            <h3 className="text-lg font-bold text-[#34D4CA] mb-6">
              Contribution & sources
            </h3>

            <div className="space-y-6">
              {/* Item 1 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#111622CC] border border-[#232B3A] flex items-center justify-center shrink-0 text-[#34D4CA]">
                  <Video className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Contribution method
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    Secure primary SRT, RTMP, or WebRTC ingest endpoints
                    optimized directly for stream fidelity and stability.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#111622CC] border border-[#232B3A] flex items-center justify-center shrink-0 text-[#34D4CA]">
                  <Users className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Remote speakers & guests
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    Manage guest greenrooms, remote participant screening, and
                    sub-second switching pathways natively.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#111622CC] border border-[#232B3A] flex items-center justify-center shrink-0 text-[#34D4CA]">
                  <HardDrive className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Contribution hardware
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    Integrated hardware encoders, physical venue switchers, and
                    validated ingest connection diagnostics.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Production operations */}
          <div>
            <h3 className="text-lg font-bold text-[#4A8CFB] mb-6">
              Production operations
            </h3>

            <div className="space-y-6">
              {/* Item 1 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#111622CC] border border-[#232B3A] flex items-center justify-center shrink-0 text-[#4A8CFB]">
                  <Layout className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Production scope
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    Managed switching, lower-third overlay layers, video playout
                    trigger, and synchronized broadcast states.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#111622CC] border border-[#232B3A] flex items-center justify-center shrink-0 text-[#4A8CFB]">
                  <Layers className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Scene & layout management
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    Pre-configured screen templates, picture-in-picture layouts,
                    and custom overlay alignment standards.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#111622CC] border border-[#232B3A] flex items-center justify-center shrink-0 text-[#4A8CFB]">
                  <ShieldAlert className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Backup & failover
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    Multi-region ingestion points with active hot-standby stream
                    failover pathways to guarantee zero signal drops.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Banner Box */}
        <div className="rounded-xl bg-[#111622CC] border border-[#232B3A] p-4 flex items-center gap-3 mb-8 backdrop-blur-md">
          <Info className="w-5 h-5 text-[#34D4CA] shrink-0" />
          <p className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed">
            Staff roles such as producer, engineer, or show caller are not
            assumed — only current service registry roles apply.
          </p>
        </div>

        {/* Action Button */}
        <div>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-950 bg-gradient-to-b from-[#34D4CA] to-[#4A8CFB] hover:brightness-110 transition-all shadow-md"
          >
            <span>Review contribution requirements</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
