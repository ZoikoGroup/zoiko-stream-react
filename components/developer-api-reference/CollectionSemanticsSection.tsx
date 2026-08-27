import SectionShell from "./SectionShell";

const CARDS = [
  {
    title: "Pagination model",
    description:
      "Cursor-based for this operation — never assumed from another API family.",
  },
  {
    title: "Filter operators",
    description:
      "Equality and range operators as documented per field; unsupported operators return a validation error.",
  },
  {
    title: "Time semantics",
    description:
      "Distinguishes event time, creation time and update time; timezone stated explicitly in each example.",
  },
];

export default function CollectionSemanticsSection() {
  return (
    <SectionShell
      eyebrow="Collection semantics"
      title="Pagination, filtering & time semantics."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((card) => (
          <article
            key={card.title}
            className="flex flex-col gap-2 rounded-[10px] p-5 outline-1 -outline-offset-1 outline-zinc-200"
          >
            <h3 className="text-xs font-bold leading-5 text-neutral-700">
              {card.title}
            </h3>
            <p className="text-xs leading-5 text-gray-500">
              {card.description}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
