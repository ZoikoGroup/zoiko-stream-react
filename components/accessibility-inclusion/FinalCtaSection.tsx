import Link from 'next/link';

export default function FinalCtaSection() {
  return (
    <section
      className="w-full bg-zinc-950 bg-cover bg-center px-6 md:px-12 xl:px-[112px] py-20 lg:py-24 flex flex-col items-center gap-5 text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(9, 9, 11, 0.25), rgba(9, 9, 11, 0.25)), url('/images/accessibility-inclusion/cta-bg.png')`,
      }}
    >
      <h2 className="max-w-3xl text-slate-100 text-3xl sm:text-4xl font-bold leading-tight">
        Plan an event more people can access and understand.
      </h2>

      <p className="max-w-2xl text-slate-400 text-sm sm:text-base leading-relaxed">
        Define requirements. Verify readiness. Keep limitations visible. Give viewers operable
        choices.
      </p>

      <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-2">
        <Link
          href="/plan-a-live-event"
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 text-slate-950 text-sm font-bold text-center hover:opacity-90 transition-opacity"
        >
          Plan a live event
        </Link>
        <Link
          href="/talk-to-an-expert"
          className="px-6 py-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-500 hover:outline-slate-300 text-slate-100 text-sm font-medium text-center transition-colors"
        >
          Talk to an expert
        </Link>
      </div>
    </section>
  );
}
