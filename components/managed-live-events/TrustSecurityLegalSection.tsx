import React from "react";
import Image from "next/image";
import { ShieldCheck, Lock, EyeOff, FileText, ArrowRight } from "lucide-react";

export default function TrustSecurityLegalSection() {
  return (
    <section className="relative min-h-[580px] w-full overflow-hidden text-white font-sans py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/event/bg7.png"
          alt="Trust, security & legal Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-[38px] font-bold tracking-tight text-white mb-2">
            Trust, security & legal
          </h2>
          <p className="text-sm sm:text-base text-gray-300 font-normal">
            Evidence and event data boundaries
          </p>
        </div>

        {/* 4 Cards Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Card 1: Security & Compliance */}
          <div className="rounded-xl bg-[#111622CC] border border-[#232B3A] p-6 backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#111622CC] border border-[#232B3A] flex items-center justify-center mb-5 text-[#34D4CA]">
                <ShieldCheck className="w-5 h-5 stroke-[1.75]" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Security & Compliance
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                Strict SOC 2 Type II processes and ISO 27001 data center
                pipelines protect your content at rest.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#34D4CA] hover:underline"
            >
              <span>Learn more</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Data Protection */}
          <div className="rounded-xl bg-[#111622CC] border border-[#232B3A] p-6 backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#111622CC] border border-[#232B3A] flex items-center justify-center mb-5 text-[#34D4CA]">
                <Lock className="w-5 h-5 stroke-[1.75]" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Data Protection
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                Secure data boundaries ensure absolute segregation of your
                attendee lists, passwords, and metadata.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#34D4CA] hover:underline"
            >
              <span>Learn more</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: Privacy Controls */}
          <div className="rounded-xl bg-[#111622CC] border border-[#232B3A] p-6 backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#111622CC] border border-[#232B3A] flex items-center justify-center mb-5 text-[#34D4CA]">
                <EyeOff className="w-5 h-5 stroke-[1.75]" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Privacy Controls
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                Purpose-bound logs and strict data minimization models ensure
                your IP stays yours. No model training.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#34D4CA] hover:underline"
            >
              <span>Learn more</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 4: Legal & Terms */}
          <div className="rounded-xl bg-[#111622CC] border border-[#232B3A] p-6 backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#111622CC] border border-[#232B3A] flex items-center justify-center mb-5 text-[#34D4CA]">
                <FileText className="w-5 h-5 stroke-[1.75]" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Legal & Terms
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                Clear service agreements and standard SLA terms backed
                completely by verified corporate execution.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#34D4CA] hover:underline"
            >
              <span>Learn more</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Audit Status Badges Row */}
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="text-gray-400 uppercase tracking-wider font-semibold text-[11px] mr-2">
            VERIFIED AUDIT STATUS
          </span>
          <span className="px-3 py-1 rounded-md bg-[#111622CC] border border-[#232B3A] text-gray-200 font-medium">
            SOC 2 TYPE II
          </span>
          <span className="px-3 py-1 rounded-md bg-[#111622CC] border border-[#232B3A] text-gray-200 font-medium">
            ISO 27001
          </span>
          <span className="px-3 py-1 rounded-md bg-[#111622CC] border border-[#232B3A] text-gray-200 font-medium">
            GDPR COMPLIANT
          </span>
          <span className="px-3 py-1 rounded-md bg-[#111622CC] border border-[#232B3A] text-gray-200 font-medium">
            HIPAA READY
          </span>
        </div>
      </div>
    </section>
  );
}
