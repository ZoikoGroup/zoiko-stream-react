import Link from "next/link";

export default function ApiReferenceCta() {
  return (
    <section className="relative isolate w-full bg-slate-950">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/images/developer-api-reference/cta-bg.png"
          alt=""
          aria-hidden="true"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/85" />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-12 text-center sm:px-8 sm:py-16 lg:py-20">
        <div className="flex items-center gap-3.5">
          <span className="size-1.5 rounded-full bg-teal-400" />
          <span className="text-xs font-bold uppercase leading-5 tracking-wider text-teal-400">
            Continue building
          </span>
        </div>

        <h2 className="text-[28px] font-bold leading-tight text-white sm:text-4xl">
          Return to Documentation or keep exploring the reference.
        </h2>

        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center">
          <Link
            href="/start-building"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-b from-teal-400 to-blue-500 px-7 py-3.5 text-base font-bold text-slate-950"
          >
            Continue building
          </Link>

          <span className="inline-flex items-center justify-center rounded-lg px-7 py-3.5 text-base font-bold text-white outline-1 -outline-offset-1 outline-slate-500">
            Return to Documentation
          </span>
        </div>
      </div>
    </section>
  );
}
