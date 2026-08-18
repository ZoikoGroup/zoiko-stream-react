import Link from "next/link";

export default function SecureAudienceAccessCTA() {
  return (
    <section
      className="relative flex min-h-[500px] w-full items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-6 py-20 sm:px-8 md:px-12 lg:px-16"
      style={{
        backgroundImage:
          "linear-gradient(rgba(2, 13, 25, 0.3), rgba(2, 13, 25, 0.3)), url('/images/secure-audience-access/cta-bg.png')",
      }}
    >
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        {/* Heading */}
        <h2 className="max-w-[850px] text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[38px] lg:leading-[1.5]">
          Build safer, clearer, more controlled live events
          <br className="hidden sm:block" />
          with ZoikoStream.
        </h2>

        {/* Description */}
        <p className="mt-7 text-base leading-7 text-slate-300 sm:text-lg">
          Plan your event with explicit access rules, verified entry paths,
          and operational confidence.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <Link
            href="/plan-a-live-event"
            className="w-full rounded-[10px] bg-gradient-to-r from-teal-400 to-blue-500 px-7 py-3.5 text-center text-sm font-bold text-slate-950 shadow-[0px_5px_18px_rgba(45,212,191,0.25)] transition-opacity hover:opacity-90 sm:w-auto"
          >
            Plan a live event
          </Link>

          <Link
            href="/talk-to-an-expert"
            className="w-full rounded-[10px] border border-slate-300 px-7 py-3.5 text-center text-sm font-bold text-white transition-all hover:border-white hover:bg-white/10 sm:w-auto"
          >
            Talk to an expert
          </Link>
        </div>
      </div>
    </section>
  );
}