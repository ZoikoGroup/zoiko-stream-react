import SectionShell from "./SectionShell";

const FLOW: { label: string; separator?: string }[] = [
  { label: "Accepted", separator: "→" },
  { label: "Processing", separator: "→" },
  { label: "Ready", separator: "/" },
  { label: "Partial", separator: "/" },
  { label: "Failed", separator: "/" },
  { label: "Unknown" },
];

export default function AsyncOperationsSection() {
  return (
    <SectionShell
      tone="muted"
      eyebrow="Beyond the initial response"
      title="Asynchronous operations & event relationships."
    >
      <ol className="flex flex-wrap items-center gap-x-3 gap-y-3">
        {FLOW.map((step) => (
          <li key={step.label} className="flex items-center gap-3">
            <span className="rounded-lg bg-slate-50 px-4 py-2.5 text-xs font-semibold leading-5 text-neutral-700 outline-1 -outline-offset-1 outline-zinc-200">
              {step.label}
            </span>
            {step.separator && (
              <span aria-hidden="true" className="text-xs text-gray-400">
                {step.separator}
              </span>
            )}
          </li>
        ))}
      </ol>

      <p className="mt-8 max-w-5xl text-sm leading-6 text-gray-500">
        Event receipt, event acknowledgment, consumer processing and business
        completion are separate truths — a webhook firing does not by itself
        confirm final state.{" "}
        <span className="font-semibold text-blue-400">
          Open Webhooks and events →
        </span>
      </p>
    </SectionShell>
  );
}
