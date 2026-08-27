import SectionShell from "./SectionShell";

const HEADS = ["Resource type", "Protection inheritance", "Credential required"];

const ROWS = [
  ["Embedded player", "Inherits primary resource policy", "Yes"],
  ["Captions/subtitles", "Follows primary resource by default", "Yes"],
  [
    "Downloads",
    "Product- and resource-specific; confirm in the capability matrix",
    "Where documented",
  ],
  [
    "Recordings & replays",
    "Protection is evaluated against the recorded resource",
    "Yes",
  ],
];

export default function ProtectionInheritanceSection() {
  return (
    <SectionShell
      tone="muted"
      eyebrow="Secondary resources"
      title="Protection inheritance — embeds, captions, downloads & recordings."
    >
      {/* Table from md up; stacked cards on phones. */}
      <table className="hidden w-full border-collapse text-left md:table">
        <thead>
          <tr>
            {HEADS.map((head) => (
              <th
                key={head}
                scope="col"
                className="bg-slate-50 px-4 py-3.5 text-xs font-bold leading-5 text-neutral-700 outline-1 -outline-offset-1 outline-zinc-200"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {ROWS.map((row) => (
            <tr key={row[0]}>
              {row.map((cell) => (
                <td
                  key={cell}
                  className="px-4 py-3.5 text-xs leading-5 text-gray-500 outline-1 -outline-offset-1 outline-zinc-200"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <ul className="flex flex-col gap-4 md:hidden">
        {ROWS.map((row) => (
          <li
            key={row[0]}
            className="flex flex-col gap-3 rounded-xl bg-white p-4 outline-1 -outline-offset-1 outline-zinc-200"
          >
            <h3 className="text-sm font-bold leading-5 text-neutral-700">
              {row[0]}
            </h3>

            <dl className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <dt className="text-xs uppercase tracking-wide text-gray-400">
                  {HEADS[1]}
                </dt>
                <dd className="text-xs leading-5 text-gray-500">{row[1]}</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-xs uppercase tracking-wide text-gray-400">
                  {HEADS[2]}
                </dt>
                <dd className="text-xs leading-5 text-gray-500">{row[2]}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-xs leading-5 text-gray-400">
        Use the published capability and inheritance matrices rather than
        assuming parity between live, VOD and secondary resources.
      </p>
    </SectionShell>
  );
}
