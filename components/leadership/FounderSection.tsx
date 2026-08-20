'use client';

const FOUNDER_TAGS = ['Group strategy', 'Platform direction', 'Executive governance'];

export default function FounderSection() {
  return (
    <section className="w-full bg-slate-50">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 sm:px-10 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        {/* Portrait */}
        <div className="w-full max-w-md overflow-hidden rounded-[20px] lg:w-2/5">
          <img
            src="/images/leadership/founder-lennox-mcleod.png"
            alt="Lennox McLeod, Founder & Executive Chairman of Zoiko Group"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Bio */}
        <div className="flex w-full flex-col items-start lg:w-3/5">
          <span className="text-xs font-bold uppercase leading-5 tracking-wider text-indigo-500">
            Founder &amp; Executive Chairman
          </span>

          <h2 className="mt-3 text-2xl font-bold leading-tight text-neutral-700 sm:text-3xl">
            Lennox McLeod
          </h2>

          <p className="mt-3 text-base font-semibold leading-6 text-gray-500">
            Founder &amp; Executive Chairman, Zoiko Group
          </p>

          <p className="mt-5 max-w-2xl text-base leading-6 text-gray-500">
            Lennox McLeod founded Zoiko Group and serves as Executive Chairman. He
            provides group-level strategic direction and executive oversight across
            ZoikoStream and the wider Zoiko technology portfolio, including
            long-term platform direction and the standards by which the business is
            governed and developed.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {FOUNDER_TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-[100px] border border-zinc-200 bg-white px-4 py-2.5 text-xs font-semibold leading-5 text-neutral-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <span className="mt-7 text-base font-semibold leading-6 text-blue-400">
            About Zoiko Group →
          </span>
        </div>
      </div>
    </section>
  );
}
