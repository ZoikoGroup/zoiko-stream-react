import Link from 'next/link';

export default function FinalCtaSection() {
  return (
    <section
      className="w-full bg-slate-950 bg-cover bg-center px-6 md:px-12 xl:px-[112px] py-20 lg:py-28 flex flex-col items-center gap-6 text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.45), rgba(2, 6, 23, 0.45)), url('/images/assured-event/cta-bg.png')`,
      }}
    >
      <h2 className="max-w-3xl text-slate-100 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
        Ready to explore Assured Event?
      </h2>

      <p className="max-w-2xl text-slate-400 text-base sm:text-lg leading-relaxed">
        Submit the minimum event context for a qualified review. A review request is not a booking,
        reservation, or service confirmation. We align scope transparently beforehand.
      </p>

      <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
        <Link
          href="#"
          className="px-6 py-3.5 rounded-[10px] bg-gradient-to-r from-teal-400 to-blue-500 text-slate-950 text-base font-bold text-center hover:opacity-90 transition-opacity"
        >
          Request Assured Event review
        </Link>
        <Link
          href="/talk-to-an-expert"
          className="px-7 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-400 hover:outline-slate-200 bg-slate-900/40 backdrop-blur-sm text-slate-100 text-base font-medium text-center transition-colors"
        >
          Talk to an expert
        </Link>
      </div>

      <p className="text-slate-500 text-xs">
        No technical, commercial, or resource commitment is created by requesting a planning review.
      </p>
    </section>
  );
}
