import React from "react";
import Image from "next/image";
import {
  Disc,
  RotateCcw,
  Download,
  Clock,
  Scissors,
  Trash2,
  Info,
} from "lucide-react";

export default function RecordingContinuitySection() {
  return (
    <section className="relative min-h-[640px] w-full overflow-hidden text-white font-sans py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      {/* Background Image - Clean overlay without dark filters or divs */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/event/bg5.png"
          alt="Recording & Post-Event Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-[38px] font-bold tracking-tight text-white mb-2">
            Recording, replay & post-event continuity
          </h2>
          <p className="text-sm sm:text-base text-gray-300 font-normal">
            Source-backed service scope — no inference beyond current components
          </p>
        </div>

        {/* 6 Grid Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Card 1 */}
          <div className="rounded-xl bg-[#111622CC] border border-[#232B3A] p-6 backdrop-blur-md flex flex-col justify-start">
            <div className="w-10 h-10 rounded-lg bg-[#111622CC] border border-[#232B3A] flex items-center justify-center mb-5 text-[#34D4CA]">
              <Disc className="w-5 h-5 stroke-[1.75]" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Recording</h3>
            <p className="text-xs sm:text-[13px] text-gray-400 leading-relaxed">
              Redundant, cloud-based high-definition master record capture
              verified natively through active ingest nodes.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl bg-[#111622CC] border border-[#232B3A] p-6 backdrop-blur-md flex flex-col justify-start">
            <div className="w-10 h-10 rounded-lg bg-[#111622CC] border border-[#232B3A] flex items-center justify-center mb-5 text-[#34D4CA]">
              <RotateCcw className="w-5 h-5 stroke-[1.75]" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              Replay workflow
            </h3>
            <p className="text-xs sm:text-[13px] text-gray-400 leading-relaxed">
              Configure post-live DVR scrub capabilities, instant visual seek
              limits, and player-back buffer windows.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl bg-[#111622CC] border border-[#232B3A] p-6 backdrop-blur-md flex flex-col justify-start">
            <div className="w-10 h-10 rounded-lg bg-[#111622CC] border border-[#232B3A] flex items-center justify-center mb-5 text-[#34D4CA]">
              <Download className="w-5 h-5 stroke-[1.75]" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              Asset handoff
            </h3>
            <p className="text-xs sm:text-[13px] text-gray-400 leading-relaxed">
              Secure, raw MP4 or ProRes broadcast master deliveries compiled
              directly to customer cloud storage endpoints.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-xl bg-[#111622CC] border border-[#232B3A] p-6 backdrop-blur-md flex flex-col justify-start">
            <div className="w-10 h-10 rounded-lg bg-[#111622CC] border border-[#232B3A] flex items-center justify-center mb-5 text-[#34D4CA]">
              <Clock className="w-5 h-5 stroke-[1.75]" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              Retention policy
            </h3>
            <p className="text-xs sm:text-[13px] text-gray-400 leading-relaxed">
              Define strict, corporate-compliant lifetime archiving limits (90
              days, 1 year, or permanent storage tiers).
            </p>
          </div>

          {/* Card 5 */}
          <div className="rounded-xl bg-[#111622CC] border border-[#232B3A] p-6 backdrop-blur-md flex flex-col justify-start">
            <div className="w-10 h-10 rounded-lg bg-[#111622CC] border border-[#232B3A] flex items-center justify-center mb-5 text-[#34D4CA]">
              <Scissors className="w-5 h-5 stroke-[1.75]" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              Edits & clips
            </h3>
            <p className="text-xs sm:text-[13px] text-gray-400 leading-relaxed">
              Generate highlight clips or short segmented VOD files instantly
              upon technical switch sign-off.
            </p>
          </div>

          {/* Card 6 */}
          <div className="rounded-xl bg-[#111622CC] border border-[#232B3A] p-6 backdrop-blur-md flex flex-col justify-start">
            <div className="w-10 h-10 rounded-lg bg-[#111622CC] border border-[#232B3A] flex items-center justify-center mb-5 text-[#34D4CA]">
              <Trash2 className="w-5 h-5 stroke-[1.75]" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              Deletion triggers
            </h3>
            <p className="text-xs sm:text-[13px] text-gray-400 leading-relaxed">
              Automated, clean closeout and physical hardware file wipe
              guarantees following stream lifecycle close.
            </p>
          </div>
        </div>

        {/* Info Banner Box */}
        <div className="rounded-xl bg-[#111622CC] border border-[#232B3A] p-4 flex items-center gap-3 backdrop-blur-md">
          <Info className="w-5 h-5 text-[#34D4CA] shrink-0" />
          <p className="text-xs sm:text-[13px] text-gray-300 font-normal leading-relaxed">
            Recording does not imply a post-production package. Retention,
            formats, and delivery are source-controlled.
          </p>
        </div>
      </div>
    </section>
  );
}
