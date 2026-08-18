interface AccessStep {
  number: string;
  title: string;
  description: string;
}

const accessSteps: AccessStep[] = [
  {
    number: "01",
    title: "Choose intent",
    description: "Define rules",
  },
  {
    number: "02",
    title: "Define scope",
    description: "Total capacity",
  },
  {
    number: "03",
    title: "Connect APIs",
    description: "Ticketing keys",
  },
  {
    number: "04",
    title: "Set notices",
    description: "Legal banners",
  },
  {
    number: "05",
    title: "Verify entry",
    description: "Preflight tests",
  },
  {
    number: "06",
    title: "Review changes",
    description: "Operational diff",
  },
  {
    number: "07",
    title: "Open access",
    description: "Live ingestion",
  },
  {
    number: "08",
    title: "Support gate",
    description: "Exception routing",
  },
  {
    number: "09",
    title: "Close gate",
    description: "Grace periods",
  },
  {
    number: "10",
    title: "Retain policy",
    description: "Purge details",
  },
];

export default function HowSecureAudienceAccessWorks() {
  return (
    <section
      className="relative w-full overflow-hidden bg-white px-6 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-0 lg:py-24"
      style={{
        backgroundImage:
          "url('/images/secure-audience-access/contour-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-[1216px]">
        <div className="mb-[68px] flex flex-col gap-4">
          <h2 className="text-[36px] font-bold leading-[45px] tracking-[-0.5px] text-slate-900">
            How secure audience access works.
          </h2>

          <p className="text-[17px] font-normal leading-7 text-slate-500">
            Every source and viewer ticket follows an integrated eight-stage
            lifecycle from plan to close.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-9 xl:gap-y-[22px]">
          {accessSteps.map((step) => (
            <div
              key={step.number}
              className="h-[145px] w-full rounded-[14px] border border-cyan-400 bg-white/90 px-10 py-7 shadow-[0px_10px_25px_rgba(15,23,42,0.12)] backdrop-blur-sm"
            >
              <div className="flex flex-col">
                <span className="font-mono text-[20px] font-bold leading-6 text-teal-400">
                  {step.number}
                </span>

                <div className="mt-7 flex flex-col gap-1">
                  <h3 className="whitespace-nowrap text-[21px] font-bold leading-6 text-slate-900">
                    {step.title}
                  </h3>

                  <p className="whitespace-nowrap text-[18px] font-normal leading-6 text-slate-500">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}