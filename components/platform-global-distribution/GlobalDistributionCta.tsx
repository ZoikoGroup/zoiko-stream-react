'use client';

export default function GlobalDistributionCta() {
  return (
    <section className="relative isolate w-full border-t border-gray-800 bg-slate-900">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/images/platform-global-distribution/final-cta-bg.png"
          alt=""
          aria-hidden="true"
          className="size-full object-cover brightness-150"
        />
        <div className="absolute inset-0 bg-slate-900/20" />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center sm:px-10 lg:px-8 lg:py-24">
        <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
          Explore distribution scope
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
          View verified regions, access architecture documentation, or connect with our
          team.
        </p>

        <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center">
          <span className="inline-flex items-center justify-center rounded-lg bg-gradient-to-b from-teal-400 to-blue-500 px-7 py-3.5 text-base font-bold text-slate-950">
            View distribution scope
          </span>

          <span className="inline-flex items-center justify-center rounded-lg px-7 py-3.5 text-base font-bold text-white outline-1 -outline-offset-1 outline-slate-400">
            Architecture documentation
          </span>
        </div>
      </div>
    </section>
  );
}
