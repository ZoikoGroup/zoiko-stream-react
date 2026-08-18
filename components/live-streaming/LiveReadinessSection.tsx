import Link from "next/link";

type ReadinessStatus = "Verified" | "Needs confirmation" | "Blocked";

interface ReadinessCard {
  title: string;
  description: string;
  status: ReadinessStatus;
}

const readinessCards: ReadinessCard[] = [
  {
    title: "Workflow owner",
    description:
      "Who owns configuration, operation, escalation, and review?",
    status: "Verified",
  },
  {
    title: "Source & contribution",
    description:
      "Is an approved source path selected and tested?",
    status: "Needs confirmation",
  },
  {
    title: "Identity & access",
    description:
      "Who can configure, operate, and view?",
    status: "Verified",
  },
  {
    title: "Monitoring & evidence",
    description:
      "Where will state, alerts, and evidence be inspected?",
    status: "Verified",
  },
  {
    title: "Recording & replay",
    description:
      "Is post-live recording required and authorized?",
    status: "Needs confirmation",
  },
  {
    title: "Recovery & support",
    description:
      "What retry/fallback/escalation path is approved?",
    status: "Blocked",
  },
];

const statusStyles: Record<ReadinessStatus, string> = {
  Verified:
    "bg-[#00D4AA]/10 border-[#00D4AA] text-[#00D4AA]",
  "Needs confirmation":
    "bg-[#FFC837]/10 border-[#FFC837] text-[#FFC837]",
  Blocked:
    "bg-[#FF5F57]/10 border-[#FF5F57] text-[#FF5F57]",
};

export default function LiveReadinessSection() {
  return (
    <section
      className="relative w-full overflow-hidden border-y border-[#232B3A] bg-[#0A0F1A] px-6 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-28 lg:py-24"
      style={{
        backgroundImage:
          "linear-gradient(rgba(10,15,26,0.3), rgba(10,15,26,0.3)), url('/images/live-streaming/readiness-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col gap-12">
        {/* Heading */}
        <div className="flex flex-col items-start gap-3">
          <h2 className="font-['Space_Grotesk'] text-3xl font-bold leading-tight text-[#EEF1F6] sm:text-4xl">
            What must be true before live?
          </h2>

          <p className="font-['Space_Grotesk'] text-base font-normal leading-7 text-[#AAB3C4] sm:text-lg">
            Evidence-aware review of dependencies required for your declared
            workflow.
          </p>
        </div>

        {/* Readiness Cards */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {readinessCards.map((card) => (
            <div
              key={card.title}
              className="flex min-h-[138px] flex-col gap-4 rounded-2xl border border-[#232B3A] bg-[#10151E]/80 p-7 backdrop-blur-sm"
            >
              {/* Card Header */}
              <div className="flex w-full items-center justify-between gap-4">
                <h3 className="font-['Space_Grotesk'] text-base font-bold text-[#EEF1F6]">
                  {card.title}
                </h3>

                <span
                  className={`shrink-0 rounded-full border px-2.5 py-1 font-['Space_Grotesk'] text-xs font-bold ${statusStyles[card.status]}`}
                >
                  {card.status}
                </span>
              </div>

              {/* Description */}
              <p className="font-['Space_Grotesk'] text-xs font-normal leading-5 text-[#AAB3C4]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex w-full justify-center">
          <Link
            href="/live-streaming/readiness"
            className="rounded-[10px] border border-[#AAB3C4] px-7 py-3.5 font-['Space_Grotesk'] text-base font-medium text-[#EEF1F6] transition-all duration-200 hover:border-[#00D4AA] hover:text-[#00D4AA]"
          >
            Review readiness requirements →
          </Link>
        </div>
      </div>
    </section>
  );
}