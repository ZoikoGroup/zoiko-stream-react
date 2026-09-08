import React from "react";
import Image from "next/image";
import { Eye, Globe, Play, Info } from "lucide-react";

export default function AccessibilitySection() {
  return (
    <section className="relative min-h-[580px] w-full overflow-hidden text-white font-sans py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      {/* Background Image - Clean overlay without dark filters/divs */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/event/bg4.png"
          alt="Accessibility Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-[38px] font-bold tracking-tight text-white mb-2">
            Accessibility, captions & translation
          </h2>
          <p className="text-sm sm:text-base text-gray-300 font-normal">
            First-class readiness dimension — source-backed capability only
          </p>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Card 1 */}
          <div className="rounded-xl bg-[#111622CC] border border-[#232B3A] p-6 backdrop-blur-md flex flex-col justify-start">
            <div className="w-10 h-10 rounded-lg bg-[#111622CC] border border-[#232B3A] flex items-center justify-center mb-5 text-[#34D4CA]">
              <Eye className="w-5 h-5 stroke-[1.75]" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              Event accessibility
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Build inclusive broadcasts natively. High-contrast options and
              fully vetted player templates guarantee effortless visual
              navigation. No diagnostic disclosures required.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl bg-[#111622CC] border border-[#232B3A] p-6 backdrop-blur-md flex flex-col justify-start">
            <div className="w-10 h-10 rounded-lg bg-[#111622CC] border border-[#232B3A] flex items-center justify-center mb-5 text-[#34D4CA]">
              <Globe className="w-5 h-5 stroke-[1.75]" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              Captions & translation
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Route low-latency speech-to-text translators and multi-language
              audio pipelines. Every word preserved, matched strictly to
              verified scope components.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl bg-[#111622CC] border border-[#232B3A] p-6 backdrop-blur-md flex flex-col justify-start">
            <div className="w-10 h-10 rounded-lg bg-[#111622CC] border border-[#232B3A] flex items-center justify-center mb-5 text-[#34D4CA]">
              <Play className="w-5 h-5 stroke-[1.75]" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              Accessible player
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Keyboard focus logic, screen-reader optimized elements, and ARIA
              compliance rules embedded directly into the delivery core player.
            </p>
          </div>
        </div>

        {/* Info Banner Box */}
        <div className="rounded-xl bg-[#111622CC] border border-[#232B3A] p-4 flex items-center gap-3 backdrop-blur-md">
          <Info className="w-5 h-5 text-[#34D4CA] shrink-0" />
          <p className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed">
            Human captioners, interpreters, language counts, and accuracy
            guarantees are not inferred — only current service terms apply.
          </p>
        </div>
      </div>
    </section>
  );
}
