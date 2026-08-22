interface LifecycleStep {
  number: string;
  title: string;
  description: string;
}

const lifecycleSteps: LifecycleStep[] = [
  {
    number: "01",
    title: "Contribute",
    description: "How does source enter?",
  },
  {
    number: "02",
    title: "Ingest",
    description: "How is media accepted?",
  },
  {
    number: "03",
    title: "Produce",
    description: "How is session run?",
  },
  {
    number: "04",
    title: "Secure",
    description: "Who may access stream?",
  },
  {
    number: "05",
    title: "Deliver",
    description: "How does playback reach?",
  },
  {
    number: "06",
    title: "Understand",
    description: "How do teams observe?",
  },
  {
    number: "07",
    title: "Preserve",
    description: "What continues after?",
  },
];

export default function LiveStreamingLifecycle() {
  return (
    <section
      className="relative w-full overflow-hidden bg-white px-6 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-28 lg:py-24"
      style={{
        backgroundImage:
          "url('/images/live-streaming/contour-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col gap-14">
        {/* Heading */}
        <div className="flex flex-col items-start gap-3">
          <h2 className="  text-3xl font-bold text-[#0F1B2D] sm:text-4xl">
            The complete live-streaming lifecycle
          </h2>

          <p className="  text-base font-normal text-[#4F5E74] sm:text-lg">
            End-to-end workflow from source entry through post-live continuity
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden w-full items-start lg:flex">
          {lifecycleSteps.map((step, index) => (
            <div
              key={step.number}
              className="flex flex-1 items-start"
            >
              {/* Step */}
              <div className="flex min-w-0 flex-1 flex-col items-center gap-3">
                {/* Number Circle */}
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-[#E1E6EB] bg-[#F5F7FA]">
                  <span className="  text-base font-bold text-[#0F1B2D]">
                    {step.number}
                  </span>
                </div>

                {/* Text */}
                <div className="flex w-full flex-col items-center gap-1">
                  <h3 className="  text-base font-bold text-[#0F1B2D]">
                    {step.title}
                  </h3>

                  <p className="w-full text-center   text-xs font-normal text-[#4F5E74]">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connecting Line */}
              {index < lifecycleSteps.length - 1 && (
                <div className="mt-6 h-[2px] flex-1 bg-[#E1E6EB]" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile / Tablet Timeline */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:hidden">
          {lifecycleSteps.map((step) => (
            <div
              key={step.number}
              className="flex items-center gap-4 rounded-xl border border-[#E1E6EB] bg-[#F5F7FA]/70 p-5"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-[#E1E6EB] bg-[#F5F7FA]">
                <span className="  text-base font-bold text-[#0F1B2D]">
                  {step.number}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="  text-base font-bold text-[#0F1B2D]">
                  {step.title}
                </h3>

                <p className="  text-xs font-normal text-[#4F5E74]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
