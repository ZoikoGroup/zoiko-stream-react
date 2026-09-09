import React from "react";
import Image from "next/image";

export default function CtaSection() {
  return (
    <section className="relative w-full text-white font-sans py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/media/b9.png"
          alt="CTA Background"
          fill
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
          Ready to explore your operating model?
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-300 font-normal max-w-2xl leading-relaxed mb-8">
          Start with architecture and evidence. Every enterprise workflow
          deserves clear decisions and visible ownership.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 w-full sm:w-auto">
          <button
            type="button"
            className="w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-semibold text-slate-950 bg-gradient-to-b from-teal-400 via-cyan-400 to-sky-400 hover:brightness-110 transition-all shadow-lg"
          >
            Talk to an expert
          </button>
          <button
            type="button"
            className="w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-semibold text-white bg-slate-900/60 border border-slate-700/80 hover:bg-slate-800/80 hover:border-slate-600 transition-all backdrop-blur-sm"
          >
            Review architecture documentation
          </button>
        </div>

        {/* Footer Caption */}
        <p className="text-xs text-slate-500 font-normal">
          Expert reviews align scope transparently. No payment details required.
        </p>
      </div>
    </section>
  );
}
