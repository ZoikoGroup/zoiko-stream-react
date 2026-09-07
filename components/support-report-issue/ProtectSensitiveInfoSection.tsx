import React from 'react';
import Image from 'next/image';

export default function ProtectSensitiveInfoSection() {
  return (
    <section className="relative w-full bg-[#030611] text-white py-16 sm:py-20 lg:py-24 overflow-hidden text-center">
      {/* Background Grand Auditorium Image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/Report Issue Page/sri3.png"
          alt="Privacy protection background"
          fill
          priority
          className="object-cover object-center opacity-70 scale-[1.02]"
        />
        {/* Gradients to keep text crisp while revealing ambient auditorium details */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030611]/85 via-[#030611]/50 to-[#030611]" />
        <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent via-[#030611]/25 to-[#030611]/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Privacy Pill Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-orange-500/60 bg-[#230f06]/85 backdrop-blur-sm mb-6 shadow-[0_0_12px_rgba(249,115,22,0.2)]">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shadow-[0_0_6px_#f97316]" />
          <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase font-mono text-orange-400">
            CRITICAL PRIVACY WARNING
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shadow-[0_0_6px_#f97316]" />
        </div>

        {/* Main Headline */}
        <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-[44px] text-white tracking-tight mb-6 sm:mb-7">
          Protect your sensitive information.
        </h2>

        {/* Highlighted Warning Box */}
        <div className="w-full max-w-3xl rounded-2xl border border-orange-500/70 bg-[#120703]/85 backdrop-blur-md px-6 py-6 sm:px-8 sm:py-7 text-center shadow-[0_0_35px_rgba(249,115,22,0.15)] mb-6">
          <p className="text-slate-100 text-[13px] sm:text-[14px] leading-relaxed font-sans font-medium">
            Do not include passwords, access tokens, API keys, private keys, stream keys, authentication cookies, payment card information, government identifiers, regulated health information, private media, confidential customer data, or unnecessary personal information.
          </p>
        </div>

        {/* Guidance Subtitle */}
        <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-9 font-sans opacity-90">
          If a specialist team needs sensitive evidence to resolve your report, it will be requested through an approved, protected channel after initial triage.
        </p>

        {/* Actions Row */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          <button
            type="button"
            className="bg-[#00c5ff] hover:bg-[#00b2e8] active:scale-[0.98] text-[#021324] font-semibold text-sm sm:text-base px-7 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-[0_0_18px_rgba(0,197,255,0.45)] cursor-pointer"
          >
            I understand, Submit Report
          </button>

          <button
            type="button"
            className="bg-[#09111e]/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-500 text-slate-100 font-medium text-sm sm:text-base px-6 py-3 rounded-lg transition-all duration-200 cursor-pointer"
          >
            Cancel and Go Back
          </button>
        </div>
      </div>
    </section>
  );
}
