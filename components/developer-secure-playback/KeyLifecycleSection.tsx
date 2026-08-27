import SectionShell from "./SectionShell";

const KEYS = [
  {
    key: "key-primary-01",
    state: "Current",
    dot: "bg-green-400",
    created: "2026-06-01",
    behavior: "Active for new credentials",
  },
  {
    key: "key-next-02",
    state: "Next",
    dot: "bg-blue-400",
    created: "2026-08-01",
    behavior: "Staged, not yet active",
  },
  {
    key: "key-retiring-00",
    state: "Retiring",
    dot: "bg-orange-400",
    created: "2026-01-15",
    behavior: "Overlap window — validates existing credentials only",
  },
  {
    key: "key-disabled-99",
    state: "Disabled",
    dot: "bg-gray-400",
    created: "2025-11-02",
    behavior: "No longer validates any credential",
  },
];

export default function KeyLifecycleSection() {
  return (
    <SectionShell
      tone="muted"
      eyebrow="Key management"
      title="Signing key lifecycle."
      subtitle="Private signing material is never stored or displayed in this UI — only public metadata and lifecycle state."
    >
      {/* Table from md up; stacked cards on phones. */}
      <table className="hidden w-full border-collapse text-left md:table">
        <thead>
          <tr>
            {["Key", "State", "Created", "Rotation behavior"].map((head) => (
              <th
                key={head}
                scope="col"
                className="border-b border-zinc-200 px-3 py-4 text-xs font-bold uppercase leading-4 tracking-wide text-gray-400"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {KEYS.map((row) => (
            <tr key={row.key}>
              <td className="border-b border-zinc-200 px-3 py-4 text-sm text-gray-500">
                {row.key}
              </td>
              <td className="border-b border-zinc-200 px-3 py-4">
                <span className="flex items-center gap-2 text-sm font-semibold text-neutral-700">
                  <span className={`size-1.5 rounded-sm ${row.dot}`} />
                  {row.state}
                </span>
              </td>
              <td className="border-b border-zinc-200 px-3 py-4 text-sm text-gray-500">
                {row.created}
              </td>
              <td className="border-b border-zinc-200 px-3 py-4 text-sm text-gray-500">
                {row.behavior}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ul className="flex flex-col gap-4 md:hidden">
        {KEYS.map((row) => (
          <li
            key={row.key}
            className="flex flex-col gap-3 rounded-xl bg-white p-4 outline-1 -outline-offset-1 outline-zinc-200"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-sm text-gray-500">{row.key}</span>
              <span className="flex items-center gap-2 text-sm font-semibold text-neutral-700">
                <span className={`size-1.5 rounded-sm ${row.dot}`} />
                {row.state}
              </span>
            </div>

            <dl className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-4">
                <dt className="text-xs uppercase tracking-wide text-gray-400">
                  Created
                </dt>
                <dd className="text-sm text-gray-500">{row.created}</dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-xs uppercase tracking-wide text-gray-400">
                  Rotation behavior
                </dt>
                <dd className="text-sm text-gray-500">{row.behavior}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-xs leading-5 text-gray-400">
        Follow the documented key lifecycle and overlap/retirement behavior — do
        not invalidate active access blindly.
      </p>
    </SectionShell>
  );
}
