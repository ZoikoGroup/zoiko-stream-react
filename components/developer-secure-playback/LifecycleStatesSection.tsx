import SectionShell from "./SectionShell";

const STATES = [
  { title: "Issued", description: "Credential minted; not yet used." },
  { title: "Active", description: "Valid and currently usable." },
  { title: "Expiring", description: "Nearing expiry — renewal recommended." },
  { title: "Expired", description: "No longer valid; re-authorization required." },
  { title: "Invalid", description: "Failed validation against current policy." },
  { title: "Denied", description: "Entitlement or policy check failed." },
  {
    title: "Unavailable",
    description: "Resource or service temporarily unreachable.",
  },
  { title: "Redacted", description: "Sensitive value hidden from this view." },
];

export default function LifecycleStatesSection() {
  return (
    <SectionShell
      eyebrow="Lifecycle states"
      title="Expiry, renewal, revocation & policy change."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STATES.map((state) => (
          <article
            key={state.title}
            className="flex flex-col gap-2 rounded-[10px] bg-slate-50 p-4 outline-1 -outline-offset-1 outline-zinc-200"
          >
            <h3 className="text-xs font-bold leading-5 text-neutral-700">
              {state.title}
            </h3>
            <p className="text-xs leading-5 text-gray-500">
              {state.description}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
