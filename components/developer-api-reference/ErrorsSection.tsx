import SectionShell from "./SectionShell";

const ERRORS = [
  {
    status: "400",
    key: "validation_error",
    condition: "One or more fields failed validation.",
    remediation: "Review the field pointer in the response body.",
  },
  {
    status: "401",
    key: "unauthenticated",
    condition: "Missing or invalid credential.",
    remediation: "Confirm server-side API key — see Authentication.",
  },
  {
    status: "403",
    key: "insufficient_scope",
    condition: "Credential lacks required permission.",
    remediation: "Request additional scope via Developer access.",
  },
  {
    status: "429",
    key: "rate_limited",
    condition: "Request exceeded a published limit.",
    remediation: "See Rate limits; do not retry immediately unless approved.",
  },
];

export default function ErrorsSection() {
  return (
    <SectionShell
      eyebrow="Failure as contract"
      title="Errors, request IDs & remediation."
      subtitle="Root cause is never inferred from an HTTP status alone."
    >
      <table className="hidden w-full border-collapse text-left md:table">
        <thead>
          <tr>
            {["Status", "Error key", "Condition", "Remediation"].map((head) => (
              <th
                key={head}
                scope="col"
                className="border-b border-zinc-200 px-2.5 py-3.5 text-xs font-bold uppercase leading-4 tracking-tight text-gray-400"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {ERRORS.map((row) => (
            <tr key={row.status}>
              <td className="border-b border-zinc-200 px-2.5 py-3.5 font-mono text-xs font-bold leading-5 text-red-500">
                {row.status}
              </td>
              <td className="border-b border-zinc-200 px-2.5 py-3.5 text-xs leading-5 text-gray-500">
                {row.key}
              </td>
              <td className="border-b border-zinc-200 px-2.5 py-3.5 text-xs leading-5 text-gray-500">
                {row.condition}
              </td>
              <td className="border-b border-zinc-200 px-2.5 py-3.5 text-xs leading-5 text-gray-500">
                {row.remediation}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ul className="flex flex-col gap-4 md:hidden">
        {ERRORS.map((row) => (
          <li
            key={row.status}
            className="flex flex-col gap-2 rounded-xl bg-white p-4 outline-1 -outline-offset-1 outline-zinc-200"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-red-500">
                {row.status}
              </span>
              <span className="text-xs text-gray-500">{row.key}</span>
            </div>
            <p className="text-xs leading-5 text-gray-500">{row.condition}</p>
            <p className="text-xs leading-5 text-gray-400">{row.remediation}</p>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-xs leading-5 text-gray-400">
        Support-copy action warns against including secrets or customer
        payloads.{" "}
        <span className="text-sm font-semibold text-blue-400">
          Open Error handling →
        </span>{" "}
        · <span className="text-sm font-semibold text-blue-400">System status →</span>
      </p>
    </SectionShell>
  );
}
