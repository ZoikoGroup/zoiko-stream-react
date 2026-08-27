"use client";

const NAV_GROUPS = [
  {
    group: "Streams",
    items: ["Create stream", "Get stream", "List streams", "Update stream"],
  },
  { group: "Assets", items: ["Upload asset", "Get asset"] },
  { group: "Webhooks", items: ["List endpoints"] },
];

const META_CHIPS = [
  "v2 · Current",
  "Production environment",
  "Source verified Aug 25, 2026",
];

const PREVIEW = `{
  "resource": "stream",
  "lifecycle": "current",
  "auth": "server-side"
}`;

export default function ApiReferenceHero() {
  return (
    <section className="relative isolate w-full border-b border-gray-800 bg-slate-950">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/images/developer-api-reference/hero-bg.png"
          alt=""
          aria-hidden="true"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/80" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:px-16 lg:py-20 xl:px-28">
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-3.5">
            <span className="size-1.5 rounded-full bg-teal-400" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-teal-400">
              API Reference
            </span>
          </div>

          <h1 className="text-[28px] font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
            Build from exact, versioned API contracts.
          </h1>

          <p className="max-w-xl text-base leading-7 text-slate-400">
            Use the ZoikoStream API Reference to inspect approved operations,
            request and response schemas, authentication requirements, errors,
            reliability semantics, versions, and lifecycle state.
          </p>

          <form
            className="flex w-full max-w-xl flex-col gap-3 sm:flex-row"
            onSubmit={(event) => event.preventDefault()}
          >
            <label htmlFor="api-search" className="sr-only">
              Search operations, schemas, fields or errors
            </label>
            <input
              id="api-search"
              type="search"
              placeholder="Search operations, schemas, fields or errors"
              className="w-full rounded-lg bg-slate-950/60 px-4 py-3 text-sm text-white outline-1 -outline-offset-1 outline-gray-700 placeholder:text-gray-500 focus:outline-teal-400"
            />
            <button
              type="submit"
              className="shrink-0 rounded-lg bg-gradient-to-b from-teal-400 to-blue-500 px-7 py-3 text-base font-bold text-slate-950"
            >
              Search
            </button>
          </form>

          <ul className="flex flex-wrap gap-3">
            {META_CHIPS.map((chip) => (
              <li
                key={chip}
                className="rounded-[100px] px-3.5 py-1.5 text-xs font-semibold text-slate-300 outline-1 -outline-offset-1 outline-gray-700"
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid w-full grid-cols-1 overflow-hidden rounded-2xl bg-zinc-900/80 outline-[1.5px] -outline-offset-[1.5px] outline-gray-800 md:grid-cols-[220px_1fr]">
          <nav
            aria-label="Reference explorer"
            className="border-b border-gray-800 p-5 md:border-b-0 md:border-r"
          >
            {NAV_GROUPS.map((group) => (
              <div key={group.group} className="mb-5 last:mb-0">
                <p className="text-[10px] font-bold uppercase tracking-wide text-gray-500">
                  {group.group}
                </p>
                <ul className="mt-2 flex flex-col gap-1">
                  {group.items.map((item, index) => (
                    <li
                      key={item}
                      className={`rounded-md px-3 py-2 text-sm ${
                        group.group === "Streams" && index === 0
                          ? "bg-slate-950/70 font-semibold text-teal-400 outline-1 -outline-offset-1 outline-gray-800"
                          : "text-slate-300"
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="flex flex-col gap-4 p-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-md bg-teal-400/15 px-2.5 py-1 font-mono text-xs font-bold text-teal-300">
                POST
              </span>
              <span className="font-mono text-sm font-semibold text-white">
                /v2/streams
              </span>
            </div>

            <p className="text-xs leading-5 text-slate-400">
              Structural preview only — reflects reference explorer layout, not
              live contract content until source-generated.
            </p>

            <pre className="overflow-x-auto rounded-lg bg-slate-950/70 p-4 font-mono text-xs leading-5 text-slate-300 outline-1 -outline-offset-1 outline-gray-800">
              <code>{PREVIEW}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
