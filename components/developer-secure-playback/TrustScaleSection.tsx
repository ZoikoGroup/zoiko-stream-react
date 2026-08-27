import SectionShell from "./SectionShell";

const CARDS = [
  {
    title: "Abuse resistance",
    description:
      "Signed access and session binding reduce link-sharing exposure without relying on obscurity.",
    image: "/images/developer-secure-playback/abuse-resistance.png",
  },
  {
    title: "Audit & privacy",
    description:
      "Access decisions and credential issuance follow documented audit and data-handling practices. See the Trust Center for evidence.",
    image: "/images/developer-secure-playback/audit-privacy.png",
  },
  {
    title: "Enterprise architecture",
    description:
      "Custom entitlement, regulated security review, private delivery and migration needs are handled through the expert path.",
    image: "/images/developer-secure-playback/enterprise-architecture.png",
  },
];

export default function TrustScaleSection() {
  return (
    <SectionShell
      eyebrow="Trust & scale"
      title="Security, privacy, audit & enterprise readiness."
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((card) => (
          <article
            key={card.title}
            className="flex flex-col overflow-hidden rounded-2xl bg-white outline-1 -outline-offset-1 outline-zinc-200"
          >
            <img
              src={card.image}
              alt=""
              aria-hidden="true"
              className="h-52 w-full bg-slate-100 object-cover"
            />

            <div className="flex flex-1 flex-col gap-3 p-6">
              <h3 className="text-base font-bold leading-6 text-neutral-700">
                {card.title}
              </h3>
              <p className="text-xs leading-5 text-gray-500">
                {card.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
