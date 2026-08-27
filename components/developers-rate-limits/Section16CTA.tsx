import Link from "next/link";
import React from "react";

export default function Section16CTA() {
  return (
    <section
      className="relative w-full overflow-hidden px-4 md:px-[112px] py-20 lg:py-28"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(2, 6, 23, 0.45), rgba(3, 7, 18, 0.45)), url('/images/live-streaming/start-building-bg.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center gap-6">
        {/* Heading */}
        <h2 className="w-full max-w-[800px] text-center font-[family-name:var(--font-space-grotesk)] text-[32px] md:text-4xl lg:text-[48px] font-bold leading-[1.2] lg:leading-[60.80px] text-slate-100">
          Ready to build with confidence?
        </h2>

        {/* Description */}
        <p className="w-full max-w-[700px] text-center font-[family-name:var(--font-inter)] text-base md:text-lg font-normal leading-[1.6] md:leading-7 text-slate-400">
          Deploy your rate-limit architectures dynamically. Start for free
          on our standard developer tiers.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          {/* Start Building */}
          <Link
            href="/start-building"
            className="rounded-[8px] bg-gradient-to-b from-[#34d4ca] to-[#3b82f6] px-8 py-3.5 font-[family-name:var(--font-inter)] text-base font-bold text-slate-950 transition-transform duration-200 hover:scale-[1.02]"
          >
            Get Started Now
          </Link>

          {/* Talk to an Expert */}
          <Link
            href="/talk-to-engineering"
            className="rounded-[8px] border border-slate-400 bg-transparent px-8 py-3.5 font-[family-name:var(--font-inter)] text-base font-medium text-slate-100 transition-colors duration-200 hover:bg-white/10"
          >
            Talk to Engineering
          </Link>
        </div>
      </div>
    </section>
  );
}
