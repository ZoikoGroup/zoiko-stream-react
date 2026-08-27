import SectionShell from "./SectionShell";

const META = [
  { label: "Stable operation ID", value: "streams.create" },
  { label: "Side effect", value: "Create" },
  { label: "Auth requirement", value: "Server-side API key" },
  { label: "Last verified", value: "Aug 25, 2026" },
];

export default function OperationIdentitySection() {
  return (
    <SectionShell
      tone="muted"
      eyebrow="Operation identity"
      title="Know exactly which contract you're implementing against."
      subtitle="Illustrative operation — field values are structural examples, not live contract content."
    >
      <article className="overflow-hidden rounded-2xl bg-white outline-1 -outline-offset-1 outline-zinc-200">
        <img
          src="/images/developer-api-reference/operation-identity.png"
          alt=""
          aria-hidden="true"
          className="h-56 w-full bg-slate-100 object-cover sm:h-72 lg:h-[347px]"
        />

        <div className="flex flex-col gap-4 p-6 sm:p-7">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-lg bg-indigo-500 px-3 py-1.5 font-mono text-xs font-bold text-white">
              POST
            </span>
            <span className="font-mono text-base font-bold text-neutral-700">
              /v2/streams
            </span>
            <span className="rounded-[100px] bg-teal-300/10 px-3 py-1.5 text-xs font-bold text-teal-500 outline-1 -outline-offset-1 outline-teal-300/40">
              Current
            </span>
          </div>

          <p className="max-w-4xl text-sm leading-5 text-gray-500">
            Create a new live stream resource. Requires server-side
            authorization; not callable from a browser or mobile client
            directly.
          </p>

          <dl className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {META.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-2 border-t border-zinc-200 pt-3.5"
              >
                <dt className="text-xs uppercase leading-4 tracking-wide text-gray-400">
                  {item.label}
                </dt>
                <dd className="text-sm font-semibold leading-5 text-neutral-700">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </article>
    </SectionShell>
  );
}
