import SectionShell from "./SectionShell";

const LIMITS = [
  {
    type: "Request rate",
    scope: "Per API key",
    value: "Registry-driven",
    state: "Published on Rate limits",
  },
  {
    type: "Payload size",
    scope: "Per request",
    value: "Registry-driven",
    state: "Published on Rate limits",
  },
  {
    type: "Concurrent streams",
    scope: "Per account/plan",
    value: "Not published here",
    state: "See Pricing / Talk to an expert",
  },
];

export default function RateLimitsSection() {
  return (
    <SectionShell
      eyebrow="Capacity boundaries"
      title="Rate limits, quotas & payload limits."
    >
      <table className="hidden w-full border-collapse text-left md:table">
        <thead>
          <tr>
            {["Limit type", "Scope", "Value", "State"].map((head) => (
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
          {LIMITS.map((row) => (
            <tr key={row.type}>
              <td className="border-b border-zinc-200 px-2.5 py-3.5 text-sm leading-5 text-gray-500">
                {row.type}
              </td>
              <td className="border-b border-zinc-200 px-2.5 py-3.5 text-sm leading-5 text-gray-500">
                {row.scope}
              </td>
              <td className="border-b border-zinc-200 px-2.5 py-3.5 text-sm leading-5 text-gray-500">
                {row.value}
              </td>
              <td className="border-b border-zinc-200 px-2.5 py-3.5 text-sm leading-5 text-gray-500">
                {row.state}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ul className="flex flex-col gap-4 md:hidden">
        {LIMITS.map((row) => (
          <li
            key={row.type}
            className="flex flex-col gap-2 rounded-xl bg-white p-4 outline-1 -outline-offset-1 outline-zinc-200"
          >
            <h3 className="text-sm font-bold text-neutral-700">{row.type}</h3>
            <p className="text-xs text-gray-400">{row.scope}</p>
            <p className="text-sm text-gray-500">{row.value}</p>
            <p className="text-xs text-gray-400">{row.state}</p>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-xs leading-5 text-gray-400">
        Technical limits are never equated with commercial entitlement.{" "}
        <span className="text-sm font-semibold text-blue-400">
          Open Rate limits →
        </span>
      </p>
    </SectionShell>
  );
}
