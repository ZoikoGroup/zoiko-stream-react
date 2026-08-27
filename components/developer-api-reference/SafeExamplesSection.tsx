"use client";

import { useState, type ReactNode } from "react";

import SectionShell from "./SectionShell";

const TABS = ["Node.js", "Python", "cURL"] as const;

type Tab = (typeof TABS)[number];

const SAMPLES: Record<Tab, ReactNode> = {
  "Node.js": (
    <code>
      <span className="text-gray-500">
        {"// Server-side only — never call this from a browser/mobile client"}
      </span>
      {"\n"}
      <span className="text-teal-300">const</span> stream ={" "}
      <span className="text-teal-300">await</span> zoiko.
      <span className="text-indigo-300">streams</span>.
      <span className="text-indigo-300">create</span>({"{"}
      {"\n  title: "}
      <span className="text-orange-300">&quot;Quarterly product update&quot;</span>,
      {"\n  playback_policy: "}
      <span className="text-orange-300">&quot;protected&quot;</span>
      {"\n});\n\n"}
      <span className="text-indigo-300">console.log</span>
      {"(stream.id, stream.lifecycle);"}
    </code>
  ),
  Python: (
    <code>
      <span className="text-gray-500">
        {"# Server-side only — never call this from a browser/mobile client"}
      </span>
      {"\nstream = zoiko."}
      <span className="text-indigo-300">streams</span>.
      <span className="text-indigo-300">create</span>
      {"(\n    title="}
      <span className="text-orange-300">&quot;Quarterly product update&quot;</span>
      {",\n    playback_policy="}
      <span className="text-orange-300">&quot;protected&quot;</span>
      {",\n)\n\n"}
      <span className="text-indigo-300">print</span>
      {"(stream.id, stream.lifecycle)"}
    </code>
  ),
  cURL: (
    <code>
      <span className="text-gray-500">
        {"# Server-side only — never call this from a browser/mobile client"}
      </span>
      {"\ncurl -X "}
      <span className="text-teal-300">POST</span>
      {" https://api.example/v2/streams \\\n  -H "}
      <span className="text-orange-300">
        &quot;Authorization: Bearer $ZOIKO_API_KEY&quot;
      </span>
      {" \\\n  -H "}
      <span className="text-orange-300">
        &quot;Content-Type: application/json&quot;
      </span>
      {" \\\n  -d "}
      <span className="text-orange-300">
        {
          '\'{"title":"Quarterly product update","playback_policy":"protected"}\''
        }
      </span>
    </code>
  ),
};

const RAW: Record<Tab, string> = {
  "Node.js": `// Server-side only — never call this from a browser/mobile client
const stream = await zoiko.streams.create({
  title: "Quarterly product update",
  playback_policy: "protected"
});

console.log(stream.id, stream.lifecycle);`,
  Python: `# Server-side only — never call this from a browser/mobile client
stream = zoiko.streams.create(
    title="Quarterly product update",
    playback_policy="protected",
)

print(stream.id, stream.lifecycle)`,
  cURL: `# Server-side only — never call this from a browser/mobile client
curl -X POST https://api.example/v2/streams \\
  -H "Authorization: Bearer $ZOIKO_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"title":"Quarterly product update","playback_policy":"protected"}'`,
};

export default function SafeExamplesSection() {
  const [active, setActive] = useState<Tab>("Node.js");
  const [copied, setCopied] = useState(false);

  async function copyExample() {
    try {
      await navigator.clipboard.writeText(RAW[active]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <SectionShell
      tone="muted"
      eyebrow="Implementation"
      title="Safe examples & language tabs."
      subtitle="No real keys, tokens, signed URLs or customer data ever appear in examples."
    >
      <div className="overflow-hidden rounded-2xl bg-neutral-800">
        <div
          role="tablist"
          aria-label="Example language"
          className="flex flex-wrap border-b border-zinc-700"
        >
          {TABS.map((tab) => {
            const isActive = tab === active;

            return (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(tab)}
                className={`border-b-2 px-4 py-3.5 font-mono text-sm transition-colors sm:px-6 sm:py-4 ${
                  isActive
                    ? "border-teal-400 font-bold text-white"
                    : "border-transparent text-gray-400 hover:text-slate-200"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        <div className="overflow-x-auto p-4 sm:p-6">
          <pre className="font-mono text-xs leading-5 text-neutral-300">
            {SAMPLES[active]}
          </pre>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-zinc-700 px-4 py-4 sm:px-6">
          <span className="text-xs font-bold text-teal-400">
            Validated against source
          </span>
          <button
            type="button"
            onClick={copyExample}
            className="rounded-md px-3 py-1.5 text-xs text-slate-300 outline-1 -outline-offset-1 outline-zinc-600 transition-colors hover:text-white hover:outline-zinc-400"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>
    </SectionShell>
  );
}
