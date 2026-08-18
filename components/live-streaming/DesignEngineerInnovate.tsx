const innovationCards = [
  {
    image: "/images/live-streaming/innovation-1.png",
    title: "Aerodynamic form",
    description:
      "Computational fluid dynamics and parametric sculpting shape every surface for maximum efficiency, drag reduction, and visual drama.",
    tag: "CFD-optimized surfaces",
  },
  {
    image: "/images/live-streaming/innovation-2.png",
    title: "Electrified powertrain",
    description:
      "Next-generation solid-state battery architecture and dual-motor layouts engineered for instant torque delivery and zero-emission range records.",
    tag: "Solid-state cell tech",
  },
  {
    image: "/images/live-streaming/innovation-3.png",
    title: "Autonomous cockpit",
    description:
      "AI-driven sensor fusion and gesture-controlled HUDs reimagine the driver environment for a seamlessly intelligent, hands-free travel experience.",
    tag: "Level 4 autonomy ready",
  },
];

export default function DesignEngineerInnovate() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-16 sm:px-10 lg:px-28 lg:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-radial from-blue-500/5 to-white" />

      {/* Decorative circles */}
      <div className="pointer-events-none absolute -right-20 -top-44 h-[600px] w-[600px] rounded-full border border-blue-500/10" />

      <div className="pointer-events-none absolute -right-4 -top-24 h-96 w-96 rounded-full border border-blue-500/5" />

      <div className="pointer-events-none absolute right-16 top-0 h-72 w-72 rounded-full border border-blue-500/5" />

      <div className="pointer-events-none absolute -left-20 top-[400px] h-96 w-96 rounded-full border border-blue-500/5" />

      <div className="pointer-events-none absolute -left-5 top-[460px] h-60 w-60 rounded-full border border-blue-500/5" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col gap-14">

        {/* Heading */}
        <div className="flex w-full flex-col items-start gap-3.5">
          <h2 className="font-['Space_Grotesk'] text-4xl font-bold text-gray-900 sm:text-5xl">
            Design, engineer, and innovate
          </h2>

          <p className="font-['Space_Grotesk'] text-lg font-normal text-gray-700">
            Cutting-edge automotive design powered by precision engineering and
            bold vision
          </p>
        </div>

        {/* Cards */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {innovationCards.map((card) => (
            <div
              key={card.title}
              className="flex w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-gray-50"
            >
              {/* Image */}
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="block h-full w-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="flex min-h-[214px] w-full flex-col items-start gap-3.5 px-6 pb-7 pt-6">
                
                {/* Title */}
                <div className="flex items-center gap-2.5">
                  <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />

                  <h3 className="font-['Space_Grotesk'] text-base font-bold text-gray-900">
                    {card.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="w-full font-['Space_Grotesk'] text-sm font-normal leading-5 text-gray-700">
                  {card.description}
                </p>

                {/* Tag */}
                <div className="rounded-[100px] border border-indigo-200 bg-indigo-50 px-3 py-[5px]">
                  <span className="font-['Space_Grotesk'] text-xs font-bold text-blue-500">
                    {card.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}