"use client";

import { useState } from "react";

import FieldTable, { type Field } from "./FieldTable";
import SectionShell from "./SectionShell";

interface ResponseTab {
  status: string;
  error: boolean;
  fields: Field[];
}

const TABS: ResponseTab[] = [
  {
    status: "201 Created",
    error: false,
    fields: [
      {
        field: "id",
        type: "string",
        state: "Required, read-only",
        description: "Stable identifier for the created stream.",
      },
      {
        field: "lifecycle",
        type: "enum",
        state: "Required, read-only",
        description: "Current lifecycle state — see Lifecycle vs. Health.",
      },
      {
        field: "created_at",
        type: "string (timestamp)",
        state: "Required, read-only",
        description:
          "Resource creation time, source timezone documented separately.",
      },
      {
        field: "playback_url",
        type: "string, nullable",
        state: "Conditional",
        description: "Present only once playback becomes available.",
      },
    ],
  },
  {
    status: "400 Bad Request",
    error: false,
    fields: [
      {
        field: "error",
        type: "string",
        state: "Required, read-only",
        description: "Stable error key — validation_error for this response.",
      },
      {
        field: "field_pointer",
        type: "string, nullable",
        state: "Conditional",
        description: "Points at the field that failed validation, when known.",
      },
      {
        field: "request_id",
        type: "string",
        state: "Required, read-only",
        description: "Include this when contacting Developer Support.",
      },
    ],
  },
  {
    status: "401 Unauthorized",
    error: true,
    fields: [
      {
        field: "error",
        type: "string",
        state: "Required, read-only",
        description: "unauthenticated — missing or invalid credential.",
      },
      {
        field: "request_id",
        type: "string",
        state: "Required, read-only",
        description: "Include this when contacting Developer Support.",
      },
    ],
  },
  {
    status: "429 Too Many Requests",
    error: true,
    fields: [
      {
        field: "error",
        type: "string",
        state: "Required, read-only",
        description: "rate_limited — a published limit was exceeded.",
      },
      {
        field: "retry_after",
        type: "integer, nullable",
        state: "Conditional",
        description: "Seconds to wait, when the limit publishes a retry window.",
      },
      {
        field: "request_id",
        type: "string",
        state: "Required, read-only",
        description: "Include this when contacting Developer Support.",
      },
    ],
  },
];

export default function ResponseContractSection() {
  const [active, setActive] = useState(TABS[0].status);
  const activeTab = TABS.find((tab) => tab.status === active) ?? TABS[0];

  return (
    <SectionShell
      tone="muted"
      eyebrow="Response contract"
      title="Responses, objects & schemas."
    >
      <div className="flex flex-wrap gap-3">
        {TABS.map((tab) => {
          const isActive = tab.status === active;

          return (
            <button
              key={tab.status}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(tab.status)}
              className={`rounded-lg px-4 py-2.5 font-mono text-xs font-bold outline-1 -outline-offset-1 transition-colors ${
                isActive
                  ? "bg-neutral-700 text-white outline-neutral-700"
                  : `bg-transparent outline-zinc-200 hover:outline-neutral-400 ${
                      tab.error ? "text-red-500" : "text-gray-500"
                    }`
              }`}
            >
              {tab.status}
            </button>
          );
        })}
      </div>

      <div className="mt-8">
        <FieldTable fields={activeTab.fields} />
      </div>
    </SectionShell>
  );
}
