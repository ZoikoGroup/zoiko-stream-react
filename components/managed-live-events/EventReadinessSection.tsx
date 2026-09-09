import React from "react";
import Image from "next/image";
import {
  Target,
  Calendar,
  Users,
  Video,
  Globe,
  Shield,
  ArrowRight,
} from "lucide-react";

export default function EventReadinessSection() {
  return (
    <section className="relative min-h-[640px] w-full overflow-hidden text-white font-sans py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/event/bg1.png"
          alt="Event Readiness Background"
          fill
          className="object-cover object-center opacity-100 mix-blend-luminosity"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-[38px] font-bold tracking-tight leading-tight text-white mb-2">
              Event readiness & requirements
            </h2>
            <p className="text-sm sm:text-base text-gray-400 font-normal">
              High-level planning dimensions — minimum data, maximum clarity
            </p>
          </div>

          <div>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-950 bg-gradient-to-b from-[#34D4CA] to-[#4A8CFB] hover:brightness-110 transition-all shadow-md"
            >
              <span>Start event readiness check</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 6 Grid Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="rounded-xl bg-[#111622CC] border border-[#232B3A] p-6 backdrop-blur-md flex flex-col justify-start">
            <div className="mb-4 text-[#34D4CA]">
              <Target className="w-6 h-6 stroke-[1.75]" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              Event purpose
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Define your high-level objective and target business outcomes.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl bg-[#111622CC] border border-[#232B3A] p-6 backdrop-blur-md flex flex-col justify-start">
            <div className="mb-4 text-[#34D4CA]">
              <Calendar className="w-6 h-6 stroke-[1.75]" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Date/window</h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Lock in dates, backup options, and global timezones.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl bg-[#111622CC] border border-[#232B3A] p-6 backdrop-blur-md flex flex-col justify-start">
            <div className="mb-4 text-[#34D4CA]">
              <Users className="w-6 h-6 stroke-[1.75]" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              Audience/access
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Public open broadcast or private corporate SAML secure gates.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-xl bg-[#111622CC] border border-[#232B3A] p-6 backdrop-blur-md flex flex-col justify-start">
            <div className="mb-4 text-[#34D4CA]">
              <Video className="w-6 h-6 stroke-[1.75]" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              Sources/contributors
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Manage ingest endpoints, remote speakers, and venue cameras.
            </p>
          </div>

          {/* Card 5 */}
          <div className="rounded-xl bg-[#111622CC] border border-[#232B3A] p-6 backdrop-blur-md flex flex-col justify-start">
            <div className="mb-4 text-[#34D4CA]">
              <Globe className="w-6 h-6 stroke-[1.75]" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              Accessibility/language
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Live automated captioning, multilingual translations.
            </p>
          </div>

          {/* Card 6 */}
          <div className="rounded-xl bg-[#111622CC] border border-[#232B3A] p-6 backdrop-blur-md flex flex-col justify-start">
            <div className="mb-4 text-[#34D4CA]">
              <Shield className="w-6 h-6 stroke-[1.75]" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              Security/privacy
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Configure custom passkeys, whitelisted IP blocks, and routes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
