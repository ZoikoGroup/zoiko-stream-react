import FieldTable, { type Field } from "./FieldTable";
import SectionShell from "./SectionShell";

const FIELDS: Field[] = [
  {
    field: "title",
    type: "string",
    state: "Required",
    description: "Display title for the stream resource.",
  },
  {
    field: "playback_policy",
    type: "enum",
    state: "Required",
    description: "Access policy applied to playback — see Secure Playback.",
  },
  {
    field: "latency_mode",
    type: "enum",
    state: "Conditional",
    description: "Required only when low-latency delivery is requested.",
  },
  {
    field: "metadata",
    type: "object, nullable",
    state: "Optional",
    description: "Customer-defined key/value pairs attached to the resource.",
  },
];

export default function RequestConstructionSection() {
  return (
    <SectionShell
      eyebrow="Request construction"
      title="Parameters, headers & request body."
      subtitle="Required/optional/conditional state is source-defined — a field is never labeled optional if omission triggers an undocumented default."
    >
      <FieldTable fields={FIELDS} />
    </SectionShell>
  );
}
