import Image from "next/image";

interface AccessCard {
  image: string;
  title: string;
  description: string;
}

const accessCards: AccessCard[] = [
  {
    image: "/images/secure-audience-access/right-audience.png",
    title: "Right audience",
    description: "Align entry with the event’s intended audience.",
  },
  {
    image: "/images/secure-audience-access/clearer-viewer-experience.png",
    title: "Clearer viewer experience",
    description:
      "Explain what is required, when entry opens, and how to recover.",
  },
  {
    image: "/images/secure-audience-access/operational-confidence.png",
    title: "Operational confidence",
    description:
      "Make dependencies, owners, readiness, changes visible.",
  },
  {
    image: "/images/secure-audience-access/privacy-discipline.png",
    title: "Privacy discipline",
    description:
      "Avoid unnecessary identity collection and marketing reuse.",
  },
  {
    image: "/images/secure-audience-access/commercial-flexibility.png",
    title: "Commercial flexibility",
    description: "Support entitlement-based planning.",
  },
  {
    image: "/images/secure-audience-access/post-event-control.png",
    title: "Post-event control",
    description:
      "Keep live access, replay access, and retention separate.",
  },
];

export default function ControlledAccessSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#080B11] px-6 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-[112px] lg:py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-180px] top-[250px] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[150px]" />

      <div className="pointer-events-none absolute right-[25%] top-[-100px] h-[400px] w-[400px] rounded-full bg-purple-600/20 blur-[150px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex w-full flex-col gap-4">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[38px]">
            Why controlled access matters for your events.
          </h2>

          <p className="text-base leading-7 text-slate-400 sm:text-lg">
            Connecting audience intent to privacy, event experience, support,
            and operational clarity.
          </p>
        </div>

        {/* Cards */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {accessCards.map((card) => (
            <div
              key={card.title}
              className="overflow-hidden rounded-2xl border border-slate-400/80 bg-[#111522] transition-all duration-300 hover:border-slate-300"
            >
              {/* Image */}
              <div className="relative h-[140px] w-full overflow-hidden sm:h-[140px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="flex min-h-[105px] flex-col gap-2 px-[19px] py-5">
                <h3 className="text-[16px] font-bold leading-6 text-white">
                  {card.title}
                </h3>

                <p className="text-[13px] leading-[21px] text-slate-400">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}