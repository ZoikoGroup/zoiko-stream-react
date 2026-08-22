import Link from "next/link";

interface Stage {
  number: string;
  title: string;
  active: boolean;
}

const stages: Stage[] = [
  {
    number: "01",
    title: "Contribution",
    active: true,
  },
  {
    number: "02",
    title: "Ingest",
    active: true,
  },
  {
    number: "03",
    title: "Production",
    active: true,
  },
  {
    number: "04",
    title: "Security",
    active: true,
  },
  {
    number: "05",
    title: "Delivery",
    active: true,
  },
  {
    number: "06",
    title: "Monitoring",
    active: false,
  },
  {
    number: "07",
    title: "Post-Live",
    active: false,
  },
];

const navigationItems = [
  { label: "Overview", active: false },
  { label: "Live sessions", active: true },
  { label: "Sources", active: false },
  { label: "Access", active: false },
  { label: "Monitoring", active: false },
  { label: "Recordings", active: false },
  { label: "Settings", active: false },
];

export default function LiveSessionControlCenter() {
  return (
    <section
      className="relative w-full overflow-hidden border-y border-[#232B3A] bg-[#0A0F1A] px-6 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-28 lg:py-24"
      style={{
        backgroundImage:
          "linear-gradient(rgba(10,15,26,0.12), rgba(10,15,26,0.12)), url('/images/live-streaming/control-center-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col gap-12">
        {/* Heading */}
        <div className="flex flex-col items-start gap-3">
          <h2 className="  text-3xl font-bold text-[#EEF1F6] sm:text-4xl">
            Live Session Control Center
          </h2>

          <p className="  text-base font-normal text-[#AAB3C4] sm:text-lg">
            Implementation-aware operational state and recovery —
            Illustrative interface
          </p>
        </div>

        {/* Control Center */}
        <div className="flex min-h-[520px] w-full overflow-hidden rounded-[20px] border border-[#232B3A] bg-[#10151E]/80 backdrop-blur-md">
          {/* Sidebar */}
          <aside className="hidden w-48 shrink-0 flex-col gap-4 border-r border-[#232B3A] p-5 md:flex">
            <h3 className="  text-base font-bold text-[#EEF1F6]">
              Dashboard
            </h3>

            <nav className="flex flex-col gap-2">
              {navigationItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 rounded-md p-1.5"
                >
                  <span
                    className={`size-1.5 shrink-0 rounded-full ${
                      item.active
                        ? "bg-[#00D4AA]"
                        : "bg-[#707A8C]"
                    }`}
                  />

                  <span
                    className={`  text-xs ${
                      item.active
                        ? "font-bold text-[#EEF1F6]"
                        : "font-medium text-[#AAB3C4]"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </nav>
          </aside>

          {/* Main Dashboard */}
          <div className="flex min-w-0 flex-1 flex-col gap-5 p-4 sm:p-6">
            {/* Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-1">
                <h3 className="break-all   text-lg font-bold text-[#EEF1F6] sm:text-xl">
                  Tokyo_Main_Ceremony_Broadcast
                </h3>

                <p className="font-['IBM_Plex_Mono'] text-[10px] text-[#AAB3C4] sm:text-xs">
                  ENV: PRODUCTION&nbsp; | &nbsp;OWNER: PLATFORM_OPS&nbsp; |
                  &nbsp;SYS: OK
                </p>
              </div>

              <div className="w-fit rounded-sm border border-[#00D4AA] bg-[#00D4AA]/10 px-3 py-1.5">
                <span className="  text-xs font-bold text-[#00D4AA]">
                  ACTIVE STREAMING
                </span>
              </div>
            </div>

            {/* Stages */}
            <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4 lg:grid-cols-7">
              {stages.map((stage) => (
                <div
                  key={stage.number}
                  className={`flex min-h-[54px] flex-col gap-1 rounded-md border p-2.5 ${
                    stage.active
                      ? "border-[#00D4AA] bg-[#00D4AA]/10"
                      : "border-[#232B3A] bg-[#0A0F1A]"
                  }`}
                >
                  <span
                    className={`  text-[10px] font-bold sm:text-xs ${
                      stage.active
                        ? "text-[#00D4AA]"
                        : "text-[#707A8C]"
                    }`}
                  >
                    STAGE {stage.number}
                  </span>

                  <span
                    className={`  text-[10px] font-bold sm:text-xs ${
                      stage.active
                        ? "text-[#EEF1F6]"
                        : "text-[#AAB3C4]"
                    }`}
                  >
                    {stage.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Metrics + Timeline */}
            <div className="grid flex-1 grid-cols-1 gap-4 lg:grid-cols-2">
              {/* Diagnostic Health Metrics */}
              <div className="flex flex-col gap-3 rounded-lg border border-[#232B3A] bg-[#0A0F1A] p-4">
                <h4 className="  text-sm font-bold text-[#EEF1F6]">
                  Diagnostic Health Metrics
                </h4>

                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                    <span className="  text-xs text-[#AAB3C4]">
                      Ingest Buffer Stability
                    </span>

                    <span className="font-['IBM_Plex_Mono'] text-[10px] text-[#00D4AA] sm:text-xs">
                      Excellent (0.02% Jitter)
                    </span>
                  </div>

                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                    <span className="  text-xs text-[#AAB3C4]">
                      Transcoding Pipeline
                    </span>

                    <span className="font-['IBM_Plex_Mono'] text-[10px] text-[#00D4AA] sm:text-xs">
                      1080p 60fps (Active)
                    </span>
                  </div>

                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                    <span className="  text-xs text-[#AAB3C4]">
                      Edge Delivery Network
                    </span>

                    <span className="font-['IBM_Plex_Mono'] text-[10px] text-[#00D4AA] sm:text-xs">
                      Global (99.98% Cache Hit)
                    </span>
                  </div>
                </div>
              </div>

              {/* System Event Timeline */}
              <div className="flex flex-col gap-3 rounded-lg border border-[#232B3A] bg-[#0A0F1A] p-4">
                <h4 className="  text-sm font-bold text-[#EEF1F6]">
                  System Event Timeline
                </h4>

                <div className="flex flex-col gap-2">
                  <div className="flex items-start gap-3">
                    <span className="shrink-0 font-['IBM_Plex_Mono'] text-[10px] text-[#00D4AA] sm:text-xs">
                      13:04:02
                    </span>

                    <span className="  text-xs text-[#AAB3C4]">
                      Cloud DVR master recording file initialized.
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="shrink-0 font-['IBM_Plex_Mono'] text-[10px] text-[#00D4AA] sm:text-xs">
                      13:00:00
                    </span>

                    <span className="  text-xs text-[#AAB3C4]">
                      Secure SAML Single Sign-On session authorized.
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="shrink-0 font-['IBM_Plex_Mono'] text-[10px] text-[#00D4AA] sm:text-xs">
                      12:58:30
                    </span>

                    <span className="  text-xs text-[#AAB3C4]">
                      Primary SRT contribution pipeline verified.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center font-['IBM_Plex_Mono'] text-[10px] text-[#707A8C]">
              Illustrative interface — example configuration
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/monitoring"
            className="w-full rounded-[10px] bg-gradient-to-b from-[#00D4AA] to-[#4C86FF] px-6 py-3.5 text-center   text-base font-bold text-[#0A0F1A] transition-opacity hover:opacity-90 sm:w-auto"
          >
            Open monitoring cockpit
          </Link>

          <Link
            href="/api-documentation"
            className="w-full rounded-[10px] border border-[#AAB3C4] px-7 py-3.5 text-center   text-base font-medium text-[#EEF1F6] transition-colors hover:border-[#EEF1F6] sm:w-auto"
          >
            View API documentation
          </Link>
        </div>
      </div>
    </section>
  );
}