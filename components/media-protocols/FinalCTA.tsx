import React from "react";

export default function FinalCTA() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-28 py-16 lg:py-28 relative flex flex-col justify-center items-center overflow-hidden bg-slate-950">
      {/* Background Overlay (adjust opacity or add image background behind this if needed) */}
      <div className="absolute inset-0 bg-slate-950/60 pointer-events-none" />

      {/* Content Container */}
      <div className="w-full max-w-4xl flex flex-col justify-center items-center gap-6 relative z-10 text-center">
        {/* Headline */}
        <h2 className="text-slate-100 text-3xl md:text-4xl font-bold font-['Space_Grotesk'] leading-tight md:leading-[60.80px]">
          Ready to implement your media protocol?
        </h2>

        {/* Subtitle */}
        <p className="text-slate-400 text-base md:text-lg font-normal font-['Space_Grotesk'] leading-7 max-w-3xl">
          Start with the protocol catalog, validate compatibility and network
          requirements, then proceed to implementation when your access state
          permits.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto mt-2">
          <button className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-950 shadow-md">
            <span className="text-slate-950 text-base font-bold font-['Space_Grotesk']">
              Browse protocols
            </span>
          </button>

          <button className="w-full sm:w-auto px-7 py-3.5 bg-transparent rounded-lg border border-slate-400 flex justify-center items-center hover:bg-slate-800/50 hover:border-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-950">
            <span className="text-slate-100 text-base font-medium font-['Space_Grotesk']">
              View developer documentation
            </span>
          </button>
        </div>

        {/* Disclaimer Note */}
        <p className="text-zinc-400 text-xs md:text-sm font-normal font-['Space_Grotesk'] leading-6 max-w-2xl mt-2">
          Protocol documentation is public. Production access requires current
          Developer Access authorization.
        </p>
      </div>
    </section>
  );
}
