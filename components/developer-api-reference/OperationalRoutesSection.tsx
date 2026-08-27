import Link from "next/link";

import SectionShell from "./SectionShell";

interface Route {
  title: string;
  description: string;
  cta: string;
  image: string;
  href?: string;
}

const ROUTES: Route[] = [
  {
    title: "Documentation",
    description: "Guides and quickstarts.",
    cta: "Read docs →",
    image: "/images/developer-api-reference/route-documentation.png",
  },
  {
    title: "Authentication",
    description: "Credential and scope setup.",
    cta: "View auth →",
    image: "/images/developer-api-reference/route-authentication.png",
  },
  {
    title: "System status",
    description: "Current platform incidents.",
    cta: "Check status →",
    image: "/images/developer-api-reference/route-system-status.png",
  },
  {
    title: "Developer Support",
    description: "Escalate with a redacted bundle.",
    cta: "Get support →",
    image: "/images/developer-api-reference/route-developer-support.png",
    href: "/faqs-and-support",
  },
];

export default function OperationalRoutesSection() {
  return (
    <SectionShell
      tone="muted"
      eyebrow="Operational routes"
      title="Continue building — or get help."
    >
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {ROUTES.map((route) => (
          <article
            key={route.title}
            className="flex flex-col overflow-hidden rounded-2xl bg-white outline-1 -outline-offset-1 outline-zinc-200"
          >
            <img
              src={route.image}
              alt=""
              aria-hidden="true"
              className="h-44 w-full bg-slate-100 object-cover"
            />

            <div className="flex flex-1 flex-col gap-2 p-5">
              <h3 className="text-base font-bold leading-6 text-neutral-700">
                {route.title}
              </h3>
              <p className="text-xs leading-5 text-gray-500">
                {route.description}
              </p>

              {route.href ? (
                <Link
                  href={route.href}
                  className="mt-auto pt-3 text-sm font-semibold text-blue-400"
                >
                  {route.cta}
                </Link>
              ) : (
                <span className="mt-auto pt-3 text-sm font-semibold text-blue-400">
                  {route.cta}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
