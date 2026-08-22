import Image from "next/image";
import Link from "next/link";

interface SecurityCard {
  image: string;
  icon: string;
  title: string;
  description: string;
}

const securityCards: SecurityCard[] = [
  {
    image: "/images/live-streaming/access-control.png",
    icon: "/images/live-streaming/access-control.svg",
    title: "Access control",
    description:
      "Role and permission model with authenticated action boundaries and robust audit logs mapping all stream operations.",
  },
  {
    image: "/images/live-streaming/audience-authorization.png",
    icon: "/images/live-streaming/audience-authorization.svg",
    title: "Audience authorization",
    description:
      "Audience access must be intentionally defined for each unique workflow context, including SAML and passcode checks.",
  },
  {
    image: "/images/live-streaming/playback-protection.png",
    icon: "/images/live-streaming/playback-protection.svg",
    title: "Playback protection",
    description:
      "Secure playback is a separate capability area utilizing token-gated CDN tokens to defend against hotlinking.",
  },
  {
    image: "/images/live-streaming/data-protection.png",
    icon: "/images/live-streaming/data-protection.svg",
    title: "Data protection",
    description:
      "No secrets, keys, tokens, or live operational credentials are ever exposed in public client interfaces or telemetry logs.",
  },
];

export default function SecureDeliveryAudienceBoundary() {
  return (
    <section
      className="relative w-full overflow-hidden border-y border-[#232B3A] bg-[#0A0F1A] px-6 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-28 lg:py-24"
      style={{
        backgroundImage:
          "url('/images/live-streaming/secure-delivery-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0A0F1A]/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col gap-10 lg:gap-12">
        {/* Heading */}
        <div className="flex w-full flex-col gap-4">
          <h2 className="  text-3xl font-bold leading-tight text-[#EEF1F6] sm:text-4xl lg:leading-[60.8px]">
            Secure delivery and audience boundary
          </h2>

          <p className="  text-base font-normal leading-7 text-[#AAB3C4] sm:text-lg">
            Identity, access, playback authorization, and data protection
            built directly into the core live routing fabric.
          </p>
        </div>

        {/* Cards */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {securityCards.map((card) => (
            <div
              key={card.title}
              className="flex min-h-[355px] flex-col overflow-hidden rounded-2xl border border-[#232B3A] bg-[#10151E]/80 p-7 backdrop-blur-sm"
            >
              {/* Card image */}
              <div className="relative mb-5 h-40 w-full overflow-hidden rounded-lg">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 25vw"
                />
              </div>

              {/* Icon + title */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="relative h-5 w-5 shrink-0">
                    <Image
                      src={card.icon}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>

                  <h3 className="  text-lg font-bold text-[#EEF1F6]">
                    {card.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="  text-xs font-normal leading-5 text-[#AAB3C4]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Operational expectation */}
        <div className="flex w-full items-start gap-4">
          <div className="relative mt-0.5 h-4 w-4 shrink-0">
            <Image
              src="/images/live-streaming/info.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          <p className="flex-1   text-xs font-normal leading-5 text-[#707A8C]">
            Operational Expectation: Secure access controls authorization and
            stream perimeter validation, not a promise of absolute zero-leak
            or client screen capture defense.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-start gap-4 sm:flex-row">
          <Link
            href="/secure-audience-access"
            className="rounded-[10px] bg-gradient-to-b from-[#00D4AA] to-[#4C86FF] px-6 py-3.5   text-base font-bold text-[#04141A] transition-opacity hover:opacity-90"
          >
            Configure Access Control
          </Link>

          <button
            type="button"
            className="rounded-[10px] border border-[#AAB3C4] px-7 py-3.5   text-base font-medium text-[#EEF1F6] transition-colors hover:bg-white/5"
          >
            Security Documentation
          </button>
        </div>
      </div>
    </section>
  );
}