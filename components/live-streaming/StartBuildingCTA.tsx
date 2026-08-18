import Link from "next/link";

const StartBuildingCTA = () => {
  return (
    <section
      className="relative w-full overflow-hidden px-6 py-20 sm:px-10 lg:px-28 lg:py-28"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(2, 6, 23, 0.35), rgba(3, 7, 18, 0.35)), url('/images/live-streaming/start-building-bg.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center gap-6">

        {/* Heading */}
        <h2 className="w-full max-w-[800px] text-center font-['Space_Grotesk'] text-4xl font-bold leading-[60.80px] text-slate-100">
          Start building live video workflows today
        </h2>

        {/* Description */}
        <p className="w-full max-w-[800px] text-center font-['Space_Grotesk'] text-lg font-normal leading-7 text-slate-400">
          From source to audience - governed, observable, recoverable.
          Backed by expert support.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4">

          {/* Start Building */}
          <Link
            href="/start-building"
            className="rounded-[10px] bg-gradient-to-b from-teal-500 to-blue-500 px-6 py-3.5 font-['Space_Grotesk'] text-base font-bold text-slate-950 transition-transform duration-200 hover:scale-[1.02]"
          >
            Start building
          </Link>

          {/* Talk to an Expert */}
          <Link
            href="/talk-to-an-expert"
            className="rounded-[10px] border border-slate-400 px-7 py-3.5 font-['Space_Grotesk'] text-base font-medium text-slate-100 transition-colors duration-200 hover:bg-white/10"
          >
            Talk to an expert
          </Link>

        </div>
      </div>
    </section>
  );
};

export default StartBuildingCTA;