import SectionShell from "./SectionShell";

const CARDS = [
  {
    title: "Client-safe credential only",
    description:
      "The player receives only the temporary, client-safe credential and configuration needed for playback — never privileged signing material or long-lived secrets.",
    image: "/images/developer-secure-playback/client-safe-credential.png",
  },
  {
    title: "Renewal & re-authorization",
    description:
      "When access expires mid-session, the player and application coordinate renewal or re-authorization following the documented lifecycle — never a silent fallback to public playback.",
    image: "/images/developer-secure-playback/renewal-reauthorization.png",
  },
];

export default function PlayerContractSection() {
  return (
    <SectionShell
      tone="muted"
      eyebrow="Client setup"
      title="Player integration contract."
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {CARDS.map((card) => (
          <article
            key={card.title}
            className="flex flex-col overflow-hidden rounded-2xl bg-white outline-1 -outline-offset-1 outline-zinc-200"
          >
            <img
              src={card.image}
              alt=""
              aria-hidden="true"
              className="h-64 w-full bg-slate-100 object-cover sm:h-96"
            />

            <div className="flex flex-1 flex-col gap-3 p-6">
              <h3 className="text-base font-bold leading-7 text-neutral-700">
                {card.title}
              </h3>
              <p className="text-sm leading-6 text-gray-500">
                {card.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
