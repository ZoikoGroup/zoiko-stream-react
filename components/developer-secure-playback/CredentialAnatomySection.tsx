import SectionShell from "./SectionShell";

const CARDS = [
  {
    title: "Credential fields (semantic)",
    image: "/images/developer-secure-playback/credential-fields.png",
    rows: [
      ["Protected resource", "Which resource this grants access to"],
      ["Expiry", "When temporary access ends"],
      ["Scope / policy", "Session, viewer or resource binding"],
      ["Issuer context", "Environment the credential was issued in"],
    ],
  },
  {
    title: "Build your authorization service",
    image: "/images/developer-secure-playback/authorization-service.png",
    rows: [
      ["Step 1", "Verify viewer identity/context"],
      ["Step 2", "Evaluate entitlement policy"],
      ["Step 3", "Request credential using server-side material"],
      ["Step 4", "Return only the client-safe credential"],
    ],
  },
];

export default function CredentialAnatomySection() {
  return (
    <SectionShell
      eyebrow="Credential & policy anatomy"
      title="Signed playback credentials."
      subtitle="Semantic field anatomy only — actual field names, types and examples come from the verified Credential Schema Registry."
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {CARDS.map((card) => (
          <article
            key={card.title}
            className="flex flex-col overflow-hidden rounded-2xl bg-white outline-1 -outline-offset-1 outline-zinc-200"
          >
            <img
              src={card.image}
              alt=""
              aria-hidden="true"
              className="h-64 w-full bg-slate-100 object-cover sm:h-80"
            />

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-base font-bold leading-6 text-neutral-700">
                {card.title}
              </h3>

              <dl className="mt-4">
                {card.rows.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex flex-col gap-1 border-b border-zinc-200 py-3 last:border-b-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                  >
                    <dt className="text-xs leading-5 text-gray-400">{label}</dt>
                    <dd className="text-xs leading-5 text-gray-500 sm:text-right">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl bg-neutral-800">
        <div className="flex items-center justify-between gap-4 border-b border-zinc-600 px-4 py-4">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-zinc-600" />
            <span className="size-2.5 rounded-full bg-zinc-600" />
            <span className="size-2.5 rounded-full bg-zinc-600" />
          </div>
          <span className="font-mono text-xs leading-5 text-gray-400">
            conceptual example — not a live endpoint
          </span>
        </div>

        <div className="overflow-x-auto p-6">
          <pre className="font-mono text-xs leading-5 text-neutral-300">
            <code>
              <span className="text-gray-500">
                {"// Server-side: issue a temporary playback credential"}
              </span>
              {"\n"}
              <span className="text-teal-300">const</span> credential ={" "}
              <span className="text-teal-300">await</span> zoiko.
              <span className="text-indigo-300">playback</span>.
              <span className="text-indigo-300">authorize</span>({"{"}
              {"\n  resource: "}
              <span className="text-orange-300">&quot;stream-a1b2&quot;</span>,
              {"\n  viewer: viewerContext,"}
              {"\n  policy: "}
              <span className="text-orange-300">&quot;session-bound&quot;</span>
              {"\n});\n\n"}
              <span className="text-gray-500">
                {"// Return only the client-safe credential to your player"}
              </span>
              {"\nres."}
              <span className="text-indigo-300">json</span>
              {"({ playbackToken: credential.clientSafeToken });"}
            </code>
          </pre>
        </div>
      </div>
    </SectionShell>
  );
}
