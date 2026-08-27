const STEPS = [
  {
    number: "1",
    actor: "Your app",
    description: "Viewer authenticates or presents application context.",
  },
  {
    number: "2",
    actor: "Your app",
    description: "Application evaluates entitlement or access policy.",
  },
  {
    number: "3",
    actor: "Your server",
    description:
      "Server mints/requests approved playback credential using protected server-side material.",
  },
  {
    number: "4",
    actor: "Player",
    description:
      "Client receives only the temporary credential and player configuration.",
  },
  {
    number: "5",
    actor: "ZoikoStream",
    description:
      "ZoikoStream validates the request against the approved credential/policy.",
  },
  {
    number: "6",
    actor: "Player",
    description:
      "Player reports playback or denial state; app renews if required.",
  },
];

const LEGEND = [
  { label: "Your app", color: "bg-blue-400" },
  { label: "Your server", color: "bg-violet-500" },
  { label: "ZoikoStream", color: "bg-teal-400" },
  { label: "Player", color: "bg-indigo-500" },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="w-full scroll-mt-24 border-b border-zinc-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20 xl:px-28">
        <div className="border-l-2 border-teal-400 pl-5 sm:pl-8">
          <h2 className="text-2xl font-bold leading-tight text-neutral-700 sm:text-3xl">
            How secure playback works.
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-6 text-gray-500">
            Secure playback separates business entitlement from media delivery:
            your backend decides whether a viewer may watch, then issues
            approved temporary playback access for that resource.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {STEPS.map((step) => (
            <li
              key={step.number}
              className="flex flex-col items-center gap-3 rounded-2xl bg-white p-4 text-center outline-1 -outline-offset-1 outline-zinc-200"
            >
              <span className="flex size-6 items-center justify-center rounded-xl bg-slate-100 text-xs font-bold text-indigo-500">
                {step.number}
              </span>
              <span className="text-[10px] font-bold uppercase leading-4 tracking-wide text-teal-400">
                {step.actor}
              </span>
              <p className="text-xs leading-5 text-gray-500">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <ul className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
          {LEGEND.map((item) => (
            <li key={item.label} className="flex items-center gap-2">
              <span className={`size-2 rounded-sm ${item.color}`} />
              <span className="text-xs leading-5 text-gray-400">
                {item.label}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-xs leading-5 text-gray-400">
          Security note: a browser or mobile client is never the trusted signing
          boundary.{" "}
          <span className="text-sm font-semibold text-blue-400">
            Authentication for API credentials →
          </span>{" "}
          ·{" "}
          <span className="text-sm font-semibold text-blue-400">
            Error handling →
          </span>
        </p>
      </div>
    </section>
  );
}
