import Image from "next/image";
import Link from "next/link";

interface AccessIntentCard {
  image: string;
  title: string;
  description: string;
}

const accessIntentCards: AccessIntentCard[] = [
  {
    image: "/images/secure-audience-access/invite-only.png",
    title: "Invite-only",
    description: "Known recipients or controlled guest list.",
  },
  {
    image: "/images/secure-audience-access/ticketed-access.png",
    title: "Ticketed access",
    description: "Entry follows a ticket or entitlement decision.",
  },
  {
    image: "/images/secure-audience-access/authenticated-org.png",
    title: "Authenticated org",
    description: "Employees, members, students, partners.",
  },
  {
    image: "/images/secure-audience-access/credentialed-access.png",
    title: "Credentialed access",
    description: "Controlled credential without identity.",
  },
  {
    image: "/images/secure-audience-access/mixed-access.png",
    title: "Mixed access",
    description: "Different groups use different methods.",
  },
];

export default function AudienceAccessIntent() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#061A32] bg-cover bg-center bg-no-repeat px-6 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-[112px] lg:py-24"
      style={{
        backgroundImage:
          "linear-gradient(rgba(4, 21, 42, 0.35), rgba(4, 21, 42, 0.35)), url('/images/secure-audience-access/access-intent-bg.png')",
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Heading */}
        <div className="mb-12 flex w-full flex-col gap-4">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[38px]">
            Choose your audience access intent.
          </h2>

          <p className="text-base leading-7 text-slate-400 sm:text-lg">
            Identify your exact distribution mode and configure verification
            rules that protect downstream streams seamlessly.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {accessIntentCards.map((card) => (
            <div
              key={card.title}
              className="overflow-hidden rounded-[15px] border border-slate-400 bg-[#111522]/95 shadow-[0px_8px_25px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300"
            >
              {/* Image */}
              <div className="relative h-[140px] w-full overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 20vw"
                />
              </div>

              {/* Content */}
              <div className="flex min-h-[122px] flex-col px-4 py-4">
                <h3 className="text-[15px] font-bold leading-6 text-white">
                  {card.title}
                </h3>

                <p className="mt-1.5 text-[13px] leading-[19px] text-slate-400">
                  {card.description}
                </p>

                <Link
                  href="/secure-audience-access"
                  className="mt-auto pt-3 text-[12px] font-semibold text-slate-300 transition-colors hover:text-white"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}