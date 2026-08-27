import SectionShell from "./SectionShell";

const ITEMS = [
  "Entitlement logic lives entirely server-side",
  "Signing material never reaches the client",
  "Credential expiry and renewal flow tested",
  "Key rotation and overlap behavior understood",
  "Denial and error states handled gracefully in the player",
  "Protection inheritance confirmed for embeds/downloads",
  "DRM requirement confirmed against the capability registry (if needed)",
];

export default function ReadinessChecklistSection() {
  return (
    <SectionShell
      tone="muted"
      eyebrow="Before you ship"
      title="Production readiness checklist."
    >
      <ul className="overflow-hidden rounded-2xl bg-white outline-1 -outline-offset-1 outline-zinc-200">
        {ITEMS.map((item) => (
          <li key={item} className="border-b border-zinc-200 last:border-b-0">
            <label className="flex cursor-pointer items-center gap-4 px-6 py-5">
              <input
                type="checkbox"
                className="size-4 shrink-0 rounded-sm border border-zinc-300 accent-teal-400"
              />
              <span className="text-sm leading-5 text-neutral-700">{item}</span>
            </label>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
