import Link from "next/link";

import SectionShell from "./SectionShell";

interface ApiFamily {
  name: string;
  version: string;
  description: string;
  owner: string;
  image: string;
  href?: string;
}

const FAMILIES: ApiFamily[] = [
  {
    name: "Live Streaming API",
    version: "v2",
    description:
      "Create, manage and observe live stream resources and their lifecycle.",
    owner: "Platform Eng",
    image: "/images/developer-api-reference/live-streaming-api.png",
    href: "/live-streaming",
  },
  {
    name: "Video-on-Demand API",
    version: "v2",
    description: "Upload, manage and deliver on-demand video assets.",
    owner: "Platform Eng",
    image: "/images/developer-api-reference/video-on-demand-api.png",
    href: "/platform-video-on-demand",
  },
  {
    name: "Analytics API",
    version: "v1",
    description:
      "Query viewer and quality-of-service data for your streams and assets.",
    owner: "Data Platform",
    image: "/images/developer-api-reference/analytics-api.png",
    href: "/platform-analytics",
  },
  {
    name: "Webhooks & Events API",
    version: "v1",
    description:
      "Subscribe to and manage event delivery for resource state changes.",
    owner: "Platform Eng",
    image: "/images/developer-api-reference/webhooks-events-api.png",
  },
  {
    name: "Authentication & Credentials",
    version: "v2",
    description:
      "Manage API credentials, scopes and server-side authorization.",
    owner: "Security",
    image: "/images/developer-api-reference/authentication-api.png",
  },
  {
    name: "Stream Monitoring API",
    version: "v1",
    description:
      "Read operational health, lifecycle and alert state for streams.",
    owner: "Platform Eng",
    image: "/images/developer-api-reference/stream-monitoring-api.png",
    href: "/platform-stream-monitoring",
  },
];

export default function DomainCatalogSection() {
  return (
    <SectionShell
      eyebrow="Domain catalog"
      title="Public API and domain catalog."
      subtitle="API-family naming and status come from the Public API Registry — not marketing taxonomy."
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {FAMILIES.map((family) => (
          <article
            key={family.name}
            className="flex flex-col overflow-hidden rounded-2xl bg-white outline-1 -outline-offset-1 outline-zinc-200"
          >
            <img
              src={family.image}
              alt=""
              aria-hidden="true"
              className="h-56 w-full bg-slate-100 object-cover"
            />

            <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="rounded-[100px] bg-emerald-50 px-2.5 py-1 text-xs font-bold uppercase leading-4 tracking-wide text-green-400">
                  Current
                </span>
                <span className="text-xs text-gray-400">{family.version}</span>
              </div>

              <h3 className="text-base font-bold leading-6 text-neutral-700">
                {family.name}
              </h3>

              <p className="text-xs leading-5 text-gray-500">
                {family.description}
              </p>

              <div className="mt-auto flex items-center justify-between gap-4 pt-3">
                <span className="text-xs text-gray-400">
                  Owner: {family.owner}
                </span>

                {family.href ? (
                  <Link
                    href={family.href}
                    className="text-xs font-semibold text-blue-400"
                  >
                    Open →
                  </Link>
                ) : (
                  <span className="text-xs font-semibold text-blue-400">
                    Open →
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
