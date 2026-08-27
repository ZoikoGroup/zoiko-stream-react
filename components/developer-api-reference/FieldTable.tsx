export type FieldState =
  | "Required"
  | "Conditional"
  | "Optional"
  | "Required, read-only";

export interface Field {
  field: string;
  type: string;
  state: FieldState;
  description: string;
}

const STATE_STYLES: Record<FieldState, string> = {
  Required: "bg-rose-100 text-red-500",
  "Required, read-only": "bg-rose-100 text-red-500",
  Conditional: "bg-orange-100 text-orange-400",
  Optional: "bg-slate-100 text-gray-400",
};

function StateBadge({ state }: { state: FieldState }) {
  return (
    <span
      className={`inline-block rounded-[100px] px-2 py-0.5 text-xs font-bold leading-4 ${STATE_STYLES[state]}`}
    >
      {state}
    </span>
  );
}

/** Field/type/state/description contract table, stacked into cards on phones. */
export default function FieldTable({ fields }: { fields: Field[] }) {
  return (
    <>
      <table className="hidden w-full border-collapse text-left md:table">
        <thead>
          <tr>
            {["Field", "Type", "State", "Description"].map((head) => (
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
          {fields.map((field) => (
            <tr key={field.field}>
              <td className="border-b border-zinc-200 px-2.5 py-3.5 font-mono text-xs leading-5 text-gray-500">
                {field.field}
              </td>
              <td className="border-b border-zinc-200 px-2.5 py-3.5 text-xs leading-5 text-gray-500">
                {field.type}
              </td>
              <td className="border-b border-zinc-200 px-2.5 py-3.5">
                <StateBadge state={field.state} />
              </td>
              <td className="border-b border-zinc-200 px-2.5 py-3.5 text-xs leading-5 text-gray-500">
                {field.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ul className="flex flex-col gap-4 md:hidden">
        {fields.map((field) => (
          <li
            key={field.field}
            className="flex flex-col gap-3 rounded-xl bg-white p-4 outline-1 -outline-offset-1 outline-zinc-200"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="font-mono text-xs font-semibold text-neutral-700">
                {field.field}
              </span>
              <StateBadge state={field.state} />
            </div>

            <p className="text-xs leading-5 text-gray-400">{field.type}</p>
            <p className="text-xs leading-5 text-gray-500">
              {field.description}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
