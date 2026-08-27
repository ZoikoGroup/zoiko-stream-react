import SectionShell from "./SectionShell";

const VERSIONS = [
  {
    version: "v2",
    description: "Current — active development and support.",
    badge: "Current",
    badgeStyle: "bg-emerald-50 text-green-500",
  },
  {
    version: "v1",
    description: "Still serves active integrations; migration guidance available.",
    badge: "Deprecated",
    badgeStyle: "bg-orange-100 text-orange-500",
  },
];

const LINKS = [
  "Compare versions →",
  "Open Changelog →",
  "Download OpenAPI spec (when published) →",
];

export default function ContractHistorySection() {
  return (
    <SectionShell
      eyebrow="Contract history"
      title="Versioning, changelog & machine-readable specs."
    >
      <dl className="border-t border-zinc-200">
        {VERSIONS.map((item) => (
          <div
            key={item.version}
            className="flex flex-col gap-2 border-b border-zinc-200 py-5 sm:flex-row sm:items-center sm:gap-8"
          >
            <dt className="w-16 shrink-0 text-base font-bold text-neutral-700">
              {item.version}
            </dt>
            <dd className="flex flex-1 flex-wrap items-center justify-between gap-3">
              <span className="text-sm leading-5 text-gray-500">
                {item.description}
              </span>
              <span
                className={`rounded-[100px] px-2.5 py-1 text-xs font-bold ${item.badgeStyle}`}
              >
                {item.badge}
              </span>
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-semibold text-blue-400">
        {LINKS.map((link, index) => (
          <span key={link} className="flex items-center gap-3">
            <span>{link}</span>
            {index < LINKS.length - 1 && (
              <span aria-hidden="true" className="text-xs text-gray-400">
                ·
              </span>
            )}
          </span>
        ))}
      </p>
    </SectionShell>
  );
}
