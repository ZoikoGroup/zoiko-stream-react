import Image from "next/image";

interface ProtectionCard {
  image: string;
  title: string;
  description: string;
}

const protectionCards: ProtectionCard[] = [
  {
    image: "/images/secure-audience-access/privacy-respecting.png",
    title: "Privacy-respecting",
    description:
      "Operates cleanly with minimum data footprint. Marketing permission is never combined with structural viewing authorizations.",
  },
  {
    image: "/images/secure-audience-access/security-bounded.png",
    title: "Security-bounded",
    description:
      "No overclaiming. Explicit key constraints, automatic lease expiration, and rapid revocation guarantee streaming integrity.",
  },
  {
    image: "/images/secure-audience-access/accessibility-first.png",
    title: "Accessibility-first",
    description:
      "Fully WCAG 2.2 compliant out of the box. Supports tab index, keyboard-only traversal, screen readers, and high contrast options.",
  },
];

export default function PrivacySecurityAccessibility() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#02080C] bg-cover bg-center bg-no-repeat px-6 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-[112px] lg:py-24"
      style={{
        backgroundImage:
          "linear-gradient(rgba(1, 8, 12, 0.3), rgba(1, 8, 12, 0.3)), url('/images/secure-audience-access/privacy-security-bg.png')",
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Heading */}
        <div className="mb-12 flex flex-col gap-4">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[38px]">
            Privacy, security, and accessibility built into the gate.
          </h2>

          <p className="text-base leading-7 text-slate-400 sm:text-lg">
            Do not treat user dignity as a secondary compliance task. Built for
            inclusion.
          </p>
        </div>

        {/* Cards */}
        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
          {protectionCards.map((card) => (
            <div
              key={card.title}
              className="overflow-hidden rounded-[16px] border border-slate-400 bg-[#111522] shadow-[0px_8px_25px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300"
            >
              {/* Image */}
              <div className="relative h-[140px] w-full overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1023px) 100vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="min-h-[218px] px-6 py-6">
                <h3 className="text-[17px] font-bold leading-6 text-white">
                  {card.title}
                </h3>

                <p className="mt-4 text-sm leading-[22px] text-slate-400">
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