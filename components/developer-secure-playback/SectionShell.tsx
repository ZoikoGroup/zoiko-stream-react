import type { ReactNode } from "react";

interface SectionShellProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  tone?: "white" | "muted";
  children: ReactNode;
}

/**
 * Shared frame for every Secure Playback section: eyebrow, heading pair,
 * then the section's own content.
 */
export default function SectionShell({
  id,
  eyebrow,
  title,
  subtitle,
  tone = "white",
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`w-full scroll-mt-24 border-b border-zinc-200 ${
        tone === "muted" ? "bg-slate-50" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20 xl:px-28">
        {eyebrow && (
          <div className="flex items-center gap-3.5">
            <span className="size-1.5 rounded-full bg-teal-400" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-teal-400">
              {eyebrow}
            </span>
          </div>
        )}

        <h2 className="mt-6 max-w-4xl text-2xl font-bold leading-tight text-neutral-700 sm:text-3xl">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-4 max-w-3xl text-base leading-6 text-gray-500">
            {subtitle}
          </p>
        )}

        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
