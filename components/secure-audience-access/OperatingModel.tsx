import Image from "next/image";

interface OperatingCard {
  image: string;
  title: string;
  description: string;
}

const operatingCards: OperatingCard[] = [
  {
    image: "/images/secure-audience-access/operating-1.png",
    title: "Choose who may enter",
    description:
      "Use event-specific access intent instead of a one-size-fits-all gate.",
  },
  {
    image: "/images/secure-audience-access/operating-2.png",
    title: "Keep ownership explicit",
    description:
      "Know whether invitations, identity, entitlements, notices, and support are owned by each party.",
  },
  {
    image: "/images/secure-audience-access/operating-3.png",
    title: "Verify before go-live",
    description:
      "Test representative access and recovery paths, then surface changes.",
  },
  {
    image: "/images/secure-audience-access/operating-4.png",
    title: "Recover viewers clearly",
    description:
      "Give eligible viewers a specific next step when access fails.",
  },
  {
    image: "/images/secure-audience-access/operating-5.png",
    title: "Protect audience data",
    description:
      "Collect only what the access decision and support path require.",
  },
  {
    image: "/images/secure-audience-access/operating-6.png",
    title: "Separate live from replay",
    description:
      "Do not assume live access automatically grants replay access.",
  },
];

export default function OperatingModelSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-white px-6 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-[110px] lg:py-20"
      style={{
        backgroundImage: "url('/images/secure-audience-access/contour-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Heading */}
        <div className="mb-10 flex w-full flex-col gap-4 sm:mb-12">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-zinc-950 sm:text-4xl">
            An operating model built for viewer confidence
          </h2>

          <p className="max-w-[1180px] text-base leading-7 text-slate-500 sm:text-lg">
            Every access point follows strict state checks and explicit
            recovery fallback designs, eliminating guessing when a viewer
            encounters a friction state.
          </p>
        </div>

        {/* Cards */}
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {operatingCards.map((card) => (
            <div
              key={card.title}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0px_2px_8px_0px_rgba(15,23,42,0.08)] transition-shadow duration-300 hover:shadow-[0px_6px_20px_0px_rgba(15,23,42,0.12)]"
            >
              {/* Image */}
              <div className="relative h-[210px] w-full overflow-hidden sm:h-[215px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="flex min-h-[120px] flex-col gap-2.5 px-[18px] py-5">
                <h3 className="text-[17px] font-bold leading-6 text-slate-800">
                  {card.title}
                </h3>

                <p className="text-sm leading-[22px] text-slate-500">
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