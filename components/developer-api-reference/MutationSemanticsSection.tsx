import SectionShell from "./SectionShell";

const CARDS = [
  {
    label: "Retry classification",
    description:
      "Safe to retry only when the response indicates a transient failure with no partial mutation confirmed.",
  },
  {
    label: "Idempotency",
    description:
      "Supported when an idempotency key is documented for this operation; scope and reuse rules are source-defined, not assumed from other providers.",
  },
  {
    label: "Timeout handling",
    description:
      'A request that times out after dispatch is never labeled "failed" unless authoritative state confirms no mutation occurred.',
  },
  {
    label: "Consistency",
    description:
      "Strong, eventual or other — evidence-gated per operation, not assumed platform-wide.",
  },
];

export default function MutationSemanticsSection() {
  return (
    <SectionShell
      tone="muted"
      eyebrow="Mutating operation semantics"
      title="Retries, idempotency & unknown outcomes."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {CARDS.map((card) => (
          <article
            key={card.label}
            className="flex flex-col gap-3 rounded-2xl bg-slate-50 p-5 outline-1 -outline-offset-1 outline-zinc-200 sm:p-6"
          >
            <h3 className="text-xs font-bold uppercase leading-4 tracking-wide text-indigo-500">
              {card.label}
            </h3>
            <p className="text-sm leading-5 text-gray-500">
              {card.description}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
