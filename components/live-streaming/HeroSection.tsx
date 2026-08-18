import Link from "next/link";

interface PipelineStage {
  code: string;
  label: string;
  active?: boolean;
}

const pipelineStages: PipelineStage[] = [
  { code: "SRC", label: "Source" },
  { code: "ING", label: "Ingest" },
  { code: "SESS", label: "Live Sess", active: true },
  { code: "SEC", label: "Security" },
  { code: "DEL", label: "Delivery" },
  { code: "MON", label: "Monitor" },
  { code: "REC", label: "Archive" },
];

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[720px] w-full overflow-hidden border-b border-[#232B3A] bg-[#04141A] px-6 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-[112px] xl:py-20"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(4, 20, 26, 0.2),
            rgba(4, 20, 26, 0.25)
          ),
          url('/images/live-streaming/hero-bg.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 mx-auto flex min-h-[600px] w-full max-w-[1216px] items-center gap-12">
        {/* LEFT CONTENT */}
        <div className="flex min-w-0 flex-1 flex-col items-start gap-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00D4AA] px-3 py-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-[#00D4AA]" />

            <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wide text-[#00D4AA]">
              Platform / Live Streaming
            </span>
          </div>

          {/* Heading */}
          <h1 className="w-full max-w-[650px] font-['Space_Grotesk'] text-4xl font-bold leading-tight text-[#EEF1F6] sm:text-5xl sm:leading-[62px]">
            Build and operate live video workflows across the complete media
            lifecycle.
          </h1>

          {/* Description */}
          <p className="w-full max-w-[650px] font-['Space_Grotesk'] text-base font-normal leading-6 text-[#707A8C]">
            ZoikoStream Live streaming explains how approved sources enter a
            live workflow, how sessions are operated and secured, how
            audiences receive playback, and how teams observe and recover.
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <Link
              href="/plan-a-live-event"
              className="rounded-[10px] bg-gradient-to-b from-[#00D4AA] to-[#4F80FF] px-6 py-3.5 text-center font-['Space_Grotesk'] text-base font-bold text-[#04141A] transition-opacity hover:opacity-90"
            >
              Start your event brief
            </Link>

            <Link
              href="/talk-to-an-expert"
              className="rounded-[10px] border border-[#707A8C] px-7 py-3.5 text-center font-['Space_Grotesk'] text-base font-medium text-[#AAB3C4] transition-colors hover:border-[#EEF1F6] hover:text-white"
            >
              Talk to an event expert
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="w-full max-w-[650px] border-t border-[#232B3A] pt-4">
            <p className="font-['Space_Grotesk'] text-xs font-normal leading-5 text-[#707A8C]">
              Exact protocols, formats, regions, limits, access models, and
              operational commitments depend on current approved capabilities.
            </p>
          </div>
        </div>

        {/* RIGHT PIPELINE CARD */}
        <div className="w-full max-w-[540px] shrink-0 rounded-2xl border border-[#232B3A] bg-[#10151E]/80 p-5 backdrop-blur-sm">
          {/* Card Header */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#00D4AA]" />

              <span className="font-['IBM_Plex_Mono'] text-xs font-bold text-[#EEF1F6]">
                LIVE WORKFLOW PIPELINE ARCHITECTURE
              </span>
            </div>

            <span className="shrink-0 font-['IBM_Plex_Mono'] text-[10px] font-normal text-[#707A8C]">
              PRO 1080P / MULTI-REGION
            </span>
          </div>

          {/* Pipeline */}
          <div className="mt-4 rounded-lg border border-[#232B3A] bg-[#04141A] p-4">
            <div className="flex items-start gap-2">
              {pipelineStages.map((stage) => (
                <div
                  key={stage.code}
                  className="flex min-w-0 flex-1 flex-col items-center gap-1.5"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-lg border ${
                      stage.active
                        ? "border-[#00D4AA] bg-[#00D4AA]"
                        : "border-[#232B3A] bg-transparent"
                    }`}
                  >
                    <span
                      className={`font-['IBM_Plex_Mono'] text-xs font-bold ${
                        stage.active
                          ? "text-[#04141A]"
                          : "text-[#EEF1F6]"
                      }`}
                    >
                      {stage.code}
                    </span>
                  </div>

                  <span
                    className={`whitespace-nowrap text-center font-['Space_Grotesk'] text-[10px] font-normal ${
                      stage.active
                        ? "text-[#00D4AA]"
                        : "text-[#707A8C]"
                    }`}
                  >
                    {stage.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Status Bar */}
            <div className="mt-3 flex items-center justify-between rounded-sm bg-white/5 p-2">
              <span className="font-['IBM_Plex_Mono'] text-[10px] font-normal text-[#00D4AA]">
                STATE: OPERATIONAL
              </span>

              <span className="font-['IBM_Plex_Mono'] text-[10px] font-normal text-[#707A8C]">
                LATENCY: 1.8S (SRT)
              </span>
            </div>
          </div>

          {/* Bottom Status */}
          <div className="mt-4 flex items-center justify-between gap-4 pt-1">
            <span className="font-['Space_Grotesk'] text-xs font-bold text-[#EEF1F6]">
              Verified RTMP / SRT Ingest Active
            </span>

            <span className="font-['Space_Grotesk'] text-xs font-normal text-[#00D4AA]">
              Stream Status: Healthy
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}