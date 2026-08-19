import Link from "next/link";

const implementationCards = [
  {
    image: "/images/live-streaming/live-streaming-api.png",
    title: "Live streaming API",
    description:
      "Programmatic control of live video streams with modern endpoints.",
  },
  {
    image: "/images/live-streaming/sdks-libraries.png",
    title: "SDKs & libraries",
    description:
      "Maintained libraries for supported frameworks and languages.",
  },
  {
    image: "/images/live-streaming/media-protocols.png",
    title: "Media protocols",
    description:
      "Qualified connection ingest transport paths for source contribution.",
  },
  {
    image: "/images/live-streaming/authentication.png",
    title: "Authentication",
    description:
      "Secure credential handling and SSO integrations.",
  },
];

export default function DeveloperImplementationHandoff() {
  return (
    <section
      className="relative w-full overflow-hidden border-b border-t border-gray-800 bg-[#0A0F1A] px-6 py-16 sm:px-10 lg:px-28 lg:py-24"
      style={{
        backgroundImage:
          "url('/images/live-streaming/developer-implementation-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[#0A0F1A]/75" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col gap-12">

        {/* ================= HEADING ================= */}
        <div className="flex w-full flex-col items-start gap-4">
          <h2 className="w-full font-['Space_Grotesk'] text-4xl font-bold leading-[60.8px] text-slate-100">
            Developer implementation handoff
          </h2>

          <p className="w-full font-['Space_Grotesk'] text-lg font-normal leading-7 text-slate-400">
            Shorten the path to reliable implementation without forcing
            operators to navigate full developer portals.
          </p>
        </div>

        {/* ================= RESOURCE CARDS ================= */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {implementationCards.map((card) => (
            <div
              key={card.title}
              className="flex min-h-[220px] w-full flex-col overflow-hidden rounded-xl border border-gray-800 bg-zinc-900/80 p-5"
            >
              {/* Image */}
              <div className="h-28 w-full overflow-hidden rounded-md bg-[#10151E]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="mt-4 flex w-full flex-col items-start gap-1">
                <h3 className="font-['Space_Grotesk'] text-base font-bold text-slate-100">
                  {card.title}
                </h3>

                <p className="w-full font-['Space_Grotesk'] text-xs font-normal leading-5 text-slate-400">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= CODE BLOCK ================= */}
        <div className="w-full rounded-xl border border-gray-800 bg-[#04060C] p-6">

          {/* Code Header */}
          <div className="flex w-full items-center justify-between gap-4">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

              <span className="ml-1 font-['IBM_Plex_Mono'] text-xs font-normal text-slate-400">
                POST /api/v1/sessions/initialize
              </span>
            </div>

            <span className="font-['IBM_Plex_Mono'] text-xs font-normal text-slate-500">
              cURL Request Example
            </span>
          </div>

          {/* Code */}
          <pre className="mt-4 w-full overflow-x-auto whitespace-pre-wrap font-['IBM_Plex_Mono'] text-xs font-normal leading-5 text-slate-400">
{`curl -X POST "https://api.zoikostream.com/v1/sessions" -H "Authorization: Bearer " -H "Content-Type: application/json" -d '{
"name": "Tokyo_Main_Ceremony_Broadcast",
"ingest_protocol": "SRT",
"delivery_mode": "secure_token_gated",
"recording": {
"redundant_cloud_capture": true,
"retention_days": 30
}
}'`}
          </pre>
        </div>

        {/* ================= BUTTONS ================= */}
        <div className="flex flex-wrap items-center gap-4">

          {/* Primary Button */}
          <Link
            href="/start-building"
            className="rounded-[10px] bg-gradient-to-b from-teal-500 to-blue-500 px-6 py-3.5 font-['Space_Grotesk'] text-base font-bold text-slate-950 transition-opacity duration-200 hover:opacity-90"
          >
            Start Building
          </Link>

          {/* Secondary Button */}
          <button
            type="button"
            className="rounded-[10px] border border-slate-400 px-7 py-3.5 font-['Space_Grotesk'] text-base font-medium text-slate-100 transition-colors duration-200 hover:bg-white/5"
          >
            View API Docs
          </button>

        </div>

      </div>
    </section>
  );
}