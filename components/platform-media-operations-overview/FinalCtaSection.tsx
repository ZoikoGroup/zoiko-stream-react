export default function FinalCtaSection() {
  return (
    <section
      className="relative w-full px-4 sm:px-8 lg:px-28 py-16 sm:py-20 lg:py-24  border border-gray-800 rounded-2xl flex flex-col items-center justify-center gap-8 overflow-hidden"
      style={{
        backgroundImage: `url('/images/platform-media-operations-overview/CtaBackground (2).png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0  z-0" />

      <div className="relative z-10 flex flex-col items-center gap-4 text-center">
        <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold leading-tight sm:leading-[48px] font-['Space_Grotesk']">
          Ready to operate with confidence?
        </h2>
        <p className="w-full max-w-[640px] text-slate-400 text-base font-normal leading-6 font-['Space_Grotesk']">
          Talk with our system architects about structured pipelines, SLA delivery models, and accountable governance workflows.
        </p>
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row gap-4">
        <button
          type="button"
          className="px-6 py-3.5 bg-gradient-to-b from-teal-500 to-blue-500 rounded-[10px] text-slate-50 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity"
        >
          Talk to an expert
        </button>
        <button
          type="button"
          className="px-7 py-3.5 rounded-[10px] border border-slate-400 text-slate-100 text-base font-medium font-['Space_Grotesk'] hover:bg-slate-800 transition-colors"
        >
          Start building
        </button>
      </div>
    </section>
  );
}
