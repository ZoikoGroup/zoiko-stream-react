import Link from "next/link";

const replayItems = [
  {
    title: "Is recording required?",
    description:
      "Explicit state triggers cloud-routing redudant archives. Default state: Requested / Needs confirmation.",
    status: "Needs confirmation",
    statusStyle:
      "bg-amber-400/10 border-amber-400 text-yellow-600",
  },
  {
    title: "Who can view replay?",
    description:
      "Replay authorization is modeled separately from live audience access. Restrict by role or IP bounds.",
    status: "Authorized",
    statusStyle:
      "bg-emerald-500/10 border-emerald-500 text-emerald-700",
  },
  {
    title: "How long is it retained?",
    description:
      "No default retention period is assigned without verified policy and product authority limits.",
    status: "30 Days Standard",
    statusStyle:
      "bg-gray-200 border-slate-400 text-slate-600",
  },
  {
    title: "Are captions preserved?",
    description:
      "Live transmission captions and static VOD replay accessibility assets are separate verification states.",
    status: "Preserved",
    statusStyle:
      "bg-emerald-500/10 border-emerald-500 text-emerald-700",
  },
];

export default function RecordReplayPreserve() {
  return (
    <section className="relative w-full overflow-hidden border-b border-gray-200 bg-white px-6 py-16 sm:px-10 lg:px-28 lg:py-24">
      
      {/* Background contour */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "url('/images/live-streaming/contour-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col gap-12">

        {/* Heading */}
        <div className="flex w-full flex-col items-start gap-4">
          <h2 className="w-full   text-4xl font-bold leading-[60.8px] text-slate-900">
            Record, replay, and preserve
          </h2>

          <p className="w-full   text-lg font-normal leading-7 text-slate-600">
            Post-live continuity requires separate authorization and retention
            decisions mapped during event setup.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-12">

          {/* Left Side */}
          <div className="flex w-full flex-1 flex-col gap-4">
            {replayItems.map((item) => (
              <div
                key={item.title}
                className="flex w-full items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5"
              >
                {/* Text */}
                <div className="flex min-w-0 flex-1 flex-col items-start gap-1">
                  <h3 className="  text-base font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="w-full   text-xs font-normal leading-5 text-slate-600">
                    {item.description}
                  </p>
                </div>

                {/* Status */}
                <div
                  className={`shrink-0 rounded-full border px-2.5 py-1   text-xs font-bold ${item.statusStyle}`}
                >
                  {item.status}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="w-full shrink-0 rounded-2xl bg-slate-900 p-6 lg:w-[580px]">

            {/* Header */}
            <div className="flex w-full items-center justify-between gap-4">
              <div className="font-['IBM_Plex_Mono'] text-xs font-bold text-slate-100">
                REPLAY RETENTION &amp; ARCHIVE CONFIG
              </div>

              <div className="shrink-0 font-['IBM_Plex_Mono'] text-[10px] font-normal text-teal-500">
                STATUS: DEPLOYED
              </div>
            </div>

            {/* Image */}
            <div className="mt-4 w-full overflow-hidden rounded-lg">
              <img
                src="/images/live-streaming/replay-retention.png"
                alt="Replay retention and archive configuration"
                className="h-72 w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-4">

          {/* Primary Button */}
          <Link
            href="/recording-replay-archive"
            className="rounded-[10px] bg-gradient-to-b from-teal-500 to-blue-500 px-6 py-3.5   text-base font-bold text-slate-950 transition-opacity duration-200 hover:opacity-90"
          >
            Manage Recordings
          </Link>

          {/* Secondary Button */}
          <Link
            href="/recording-replay-archive"
            className="rounded-[10px] border border-slate-600 px-7 py-3.5   text-base font-medium text-slate-900 transition-colors duration-200 hover:bg-slate-50"
          >
            Explore VOD Pipeline
          </Link>

        </div>
      </div>
    </section>
  );
}