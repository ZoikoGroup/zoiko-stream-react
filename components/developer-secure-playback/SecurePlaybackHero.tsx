import Link from "next/link";

const CHAIN = [
  "Viewer",
  "Application",
  "Auth server",
  "Temp access",
  "ZoikoStream player",
];

const SUMMARY = [
  { label: "Protected resource", value: "stream-a1b2" },
  { label: "Access state", value: "Granted", granted: true },
  { label: "Expires", value: "in 4m 12s" },
  { label: "Environment", value: "Production" },
  { label: "Policy summary", value: "Session-bound" },
];

export default function SecurePlaybackHero() {
  return (
    <section className="relative isolate w-full border-b border-gray-800 bg-slate-950">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/images/developer-secure-playback/hero-bg.png"
          alt=""
          aria-hidden="true"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:px-16 lg:py-24 xl:px-28">
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-3.5">
            <span className="size-1.5 rounded-full bg-teal-400" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-teal-400">
              Secure playback
            </span>
          </div>

          <h1 className="text-[28px] font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
            Protect playback without exposing your secrets.
          </h1>

          <p className="max-w-xl text-base leading-7 text-slate-400">
            Authorize viewers on your server, issue temporary playback access
            using an approved ZoikoStream mechanism, and hand only the
            client-safe credential to your player.
          </p>

          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href="/start-building"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-b from-teal-400 to-blue-500 px-7 py-3.5 text-base font-bold text-slate-950"
            >
              Start building
            </Link>

            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-lg px-7 py-3.5 text-base font-bold text-white outline-1 -outline-offset-1 outline-slate-500"
            >
              See how authorization works
            </a>
          </div>

          <p className="max-w-xl text-xs leading-5 text-teal-400/80">
            Keep entitlement logic and signing material server-side.
            Product-specific token, key, DRM and policy details are shown only
            when verified by ZoikoStream documentation.
          </p>
        </div>

        <div className="w-full rounded-2xl bg-zinc-900/80 p-6 outline-[1.5px] -outline-offset-[1.5px] outline-gray-800 sm:p-8">
          <ol className="flex flex-wrap items-center gap-2">
            {CHAIN.map((step, index) => (
              <li key={step} className="flex items-center gap-2">
                <span className="rounded-lg px-3 py-2 text-xs font-semibold text-slate-200 outline-1 -outline-offset-1 outline-gray-700">
                  {step}
                </span>
                {index < CHAIN.length - 1 && (
                  <span aria-hidden="true" className="text-xs text-gray-600">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>

          <dl className="mt-6 rounded-xl bg-slate-950/70 p-5 outline-1 -outline-offset-1 outline-gray-800">
            {SUMMARY.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between gap-4 border-b border-gray-800 py-3 last:border-b-0 last:pb-0"
              >
                <dt className="text-xs text-gray-400">{row.label}</dt>
                <dd className="flex items-center gap-2 text-xs font-semibold text-white">
                  {row.granted && (
                    <span className="size-1.5 rounded-full bg-green-400" />
                  )}
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
