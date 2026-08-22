export default function FinalCtaSection() {
  return (
    <section
      className="relative w-full px-4 sm:px-8 lg:px-28 py-20 sm:py-24 lg:py-28 bg-slate-950 border-t border-gray-800 flex flex-col gap-12 overflow-hidden"
      style={{
        backgroundImage: `url('/images/platform-video-on-demand/CtaBackground (1).png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0  z-0" />

      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        <h2 className="w-full max-w-[800px] text-slate-100 text-3xl sm:text-4xl font-bold leading-tight sm:leading-[60px]">
          Ready to build governed on-demand experiences?
        </h2>
        <p className="w-full max-w-[800px] text-slate-400 text-lg font-normal leading-7">
          Start with developer documentation or talk to an expert about enterprise architecture. Explore our sandboxes without commitment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="button"
            className="px-6 py-3.5 bg-gradient-to-b from-teal-500 to-blue-500 rounded-[10px] text-gray-800 text-base font-bold hover:opacity-90 transition-opacity"
          >
            Start Building
          </button>
          <button
            type="button"
            className="px-7 py-3.5 rounded-[10px] border border-slate-400 text-slate-100 text-base font-medium hover:bg-slate-800 transition-colors"
          >
            Talk to an expert
          </button>
        </div>
      </div>
    </section>
  );
}
