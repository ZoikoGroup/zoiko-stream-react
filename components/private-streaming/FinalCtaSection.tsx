import Link from 'next/link';

export default function FinalCtaSection() {
  return (
    <section
      className="w-full bg-zinc-950 bg-cover bg-center px-6 md:px-12 xl:px-[112px] py-20 lg:py-28 flex flex-col items-center gap-6 text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(9, 9, 11, 0.45), rgba(9, 9, 11, 0.45)), url('/images/private-streaming/final-cta-band.png')`,
      }}
    >
      <h2 className="max-w-3xl text-slate-100 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
        Ready to create your private viewing room?
      </h2>

      <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
        <Link
          href="/plan-a-live-event"
          className="px-6 py-3.5 rounded-[10px] bg-gradient-to-r from-teal-400 to-blue-500 shadow-[0px_4px_16px_0px_rgba(51,217,199,0.20)] text-slate-950 text-base font-bold text-center hover:opacity-90 transition-opacity"
        >
          Plan a private event
        </Link>
        <Link
          href="/talk-to-an-expert"
          className="px-7 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-400 hover:outline-slate-200 text-slate-100 text-base font-medium text-center transition-colors"
        >
          Talk to an event expert
        </Link>
      </div>

      <p className="text-slate-500 text-xs">
        Your event brief is a technical planning inquiry, not a confirmed booking.
      </p>
    </section>
  );
}
