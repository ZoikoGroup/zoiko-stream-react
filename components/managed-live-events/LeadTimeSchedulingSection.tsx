import React from "react";
import Image from "next/image";
import {
  Clock,
  Calendar,
  Zap,
  PlayCircle,
  Activity,
  Globe,
  Info,
} from "lucide-react";

export default function LeadTimeSchedulingSection() {
  return (
    <section className="relative min-h-[640px] w-full overflow-hidden text-white font-sans py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      {/* Background Image - Clean overlay without dark filters or extra divs */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/event/bg6.png"
          alt="Lead time & Scheduling Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-[38px] font-bold tracking-tight text-white mb-2">
            Lead time, scheduling & availability
          </h2>
          <p className="text-sm sm:text-base text-gray-300 font-normal">
            Commercial and service truth only — no assumptions
          </p>
        </div>

        {/* 6 Grid Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Card 1 */}
          <div className="rounded-xl bg-[#111622CC] border border-[#232B3A] p-6 backdrop-blur-md flex flex-col justify-start">
            <div className="w-10 h-10 rounded-lg bg-[#111622CC] border border-[#232B3A] flex items-center justify-center mb-5 text-[#34D4CA]">
              <Clock className="w-5 h-5 stroke-[1.75]" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              Minimum Lead Time
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Strict 14-day window required for standard technical vetting.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl bg-[#111622CC] border border-[#232B3A] p-6 backdrop-blur-md flex flex-col justify-start">
            <div className="w-10 h-10 rounded-lg bg-[#111622CC] border border-[#232B3A] flex items-center justify-center mb-5 text-[#34D4CA]">
              <Calendar className="w-5 h-5 stroke-[1.75]" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              Date Availability
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Guaranteed scheduler allocation is determined only upon approval.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl bg-[#111622CC] border border-[#232B3A] p-6 backdrop-blur-md flex flex-col justify-start">
            <div className="w-10 h-10 rounded-lg bg-[#111622CC] border border-[#232B3A] flex items-center justify-center mb-5 text-[#34D4CA]">
              <Zap className="w-5 h-5 stroke-[1.75]" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              Rush Services
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Expedited planning under 14 days remains strictly subject to
              commerce approval.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-xl bg-[#111622CC] border border-[#232B3A] p-6 backdrop-blur-md flex flex-col justify-start">
            <div className="w-10 h-10 rounded-lg bg-[#111622CC] border border-[#232B3A] flex items-center justify-center mb-5 text-[#34D4CA]">
              <PlayCircle className="w-5 h-5 stroke-[1.75]" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              Rehearsal Windows
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Dedicated on-air dry run is scheduled natively 48 hours prior.
            </p>
          </div>

          {/* Card 5 */}
          <div className="rounded-xl bg-[#111622CC] border border-[#232B3A] p-6 backdrop-blur-md flex flex-col justify-start">
            <div className="w-10 h-10 rounded-lg bg-[#111622CC] border border-[#232B3A] flex items-center justify-center mb-5 text-[#34D4CA]">
              <Activity className="w-5 h-5 stroke-[1.75]" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              Duration Limits
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Standard live window parameters support up to 8 hours baseline
              continuous stream.
            </p>
          </div>

          {/* Card 6 */}
          <div className="rounded-xl bg-[#111622CC] border border-[#232B3A] p-6 backdrop-blur-md flex flex-col justify-start">
            <div className="w-10 h-10 rounded-lg bg-[#111622CC] border border-[#232B3A] flex items-center justify-center mb-5 text-[#34D4CA]">
              <Globe className="w-5 h-5 stroke-[1.75]" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              Region & Time Zones
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Global operations coverage operating seamlessly across major time
              zones.
            </p>
          </div>
        </div>

        {/* Info Banner Box */}
        <div className="rounded-xl bg-[#111622CC] border border-[#232B3A] p-4 flex items-center gap-3 backdrop-blur-md">
          <Info className="w-5 h-5 text-[#34D4CA] shrink-0" />
          <p className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed">
            Scheduling confirmation requires authoritative booking state — form
            receipt is not reservation.
          </p>
        </div>
      </div>
    </section>
  );
}
