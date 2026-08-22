'use client';

export default function LeadershipHero() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-16 sm:px-10 lg:flex-row lg:gap-16 lg:px-8 lg:py-24">
        {/* Left: copy */}
        <div className="flex w-full flex-col items-start gap-5 lg:w-1/2">
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-[3px] bg-blue-400" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-blue-400">
              Leadership
            </span>
          </div>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-neutral-700 sm:text-4xl lg:text-5xl lg:leading-[1.2]">
            Leadership built around clear accountability.
          </h1>

          <p className="max-w-xl text-base leading-7 text-gray-500">
            Meet the people responsible for how ZoikoStream is built, operated,
            trusted, and brought to market — from the platform and Live Events to
            engineering, trust, commercial strategy, and customer operations.
          </p>

          <div className="flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a
              href="#leadership-team"
              className="inline-flex items-center justify-center rounded-[10px] bg-gradient-to-r from-teal-300 to-blue-400 px-6 py-3.5 text-base font-semibold text-gray-800 transition-opacity hover:opacity-90"
            >
              Meet the leadership team
            </a>
            <a
              href="#operating-model"
              className="inline-flex items-center justify-center rounded-[10px] border border-neutral-700 px-6 py-3.5 text-base font-semibold text-neutral-700 transition-colors hover:bg-neutral-700 hover:text-white"
            >
              How ZoikoStream operates
            </a>
          </div>
        </div>

        {/* Right: image */}
        <div className="w-full lg:w-1/2">
          <div className="overflow-hidden rounded-3xl bg-slate-100 shadow-[0px_30px_60px_-30px_rgba(30,35,50,0.35)]">
            <img
              src="/images/leadership/leadership-hero-team.png"
              alt="ZoikoStream leadership team"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
