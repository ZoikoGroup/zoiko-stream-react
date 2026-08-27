import Link from "next/link";

const LINKS: { label: string; href?: string }[] = [
  { label: "Player integration" },
  { label: "Error handling" },
  { label: "Stream monitoring", href: "/platform-stream-monitoring" },
  { label: "Analytics API", href: "/platform-analytics" },
  { label: "Changelog" },
  { label: "System status" },
];

export default function SecurePlaybackCta() {
  return (
    <section className="relative isolate w-full bg-slate-950">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/images/developer-secure-playback/cta-bg.png"
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
            Ready to go further?
          </span>
        </div>

        <h2 className="text-[28px] font-bold leading-tight text-white sm:text-4xl">
          Start building with secure playback.
        </h2>

        <p className="max-w-2xl text-base leading-6 text-slate-400">
          Keep entitlement logic server-side and issue only temporary,
          client-safe access to your player.
        </p>

        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center">
          <Link
            href="/start-building"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-b from-teal-400 to-blue-500 px-7 py-3.5 text-base font-bold text-slate-950"
          >
            Start building
          </Link>

          <span className="inline-flex items-center justify-center rounded-lg px-7 py-3.5 text-base font-bold text-white outline-1 -outline-offset-1 outline-slate-500">
            Read documentation
          </span>
        </div>

        <ul className="mt-2 flex flex-wrap items-center justify-center gap-3">
          {LINKS.map((link) => {
            const className =
              "inline-flex items-center rounded-[100px] px-4 py-2.5 text-sm text-slate-300 outline-1 -outline-offset-1 outline-gray-700";

            return (
              <li key={link.label}>
                {link.href ? (
                  <Link href={link.href} className={className}>
                    {link.label}
                  </Link>
                ) : (
                  <span className={className}>{link.label}</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
