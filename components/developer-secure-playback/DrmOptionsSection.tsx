import Link from "next/link";

import SectionShell from "./SectionShell";

const SYSTEMS = ["Widevine", "FairPlay", "PlayReady"];

export default function DrmOptionsSection() {
  return (
    <SectionShell
      eyebrow="Optional layer"
      title="DRM options & license boundary."
      subtitle="DRM system names are published only when approved and current. Rendered here as a status matrix, not a support promise."
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {SYSTEMS.map((system) => (
          <article
            key={system}
            className="flex flex-col items-center gap-4 rounded-2xl bg-white p-6 outline-1 -outline-offset-1 outline-zinc-200"
          >
            <span className="flex size-11 items-center justify-center rounded-[10px] bg-slate-100">
              <img
                src="/images/developer-secure-playback/shield-icon.svg"
                alt=""
                aria-hidden="true"
                className="size-5"
              />
            </span>

            <h3 className="text-base font-bold leading-6 text-neutral-700">
              {system}
            </h3>

            <span className="rounded-[100px] bg-slate-100 px-2.5 py-1 text-xs font-bold leading-4 text-gray-400">
              Needs verification
            </span>
          </article>
        ))}
      </div>

      <p className="mt-8 text-xs leading-5 text-gray-400">
        Are signed URLs the same as DRM? No — signed access controls who may
        request protected media; DRM adds encrypted-media/license enforcement for
        supported premium-content workflows.
      </p>

      <Link
        href="/talk-to-an-expert"
        className="mt-2 inline-block text-sm font-semibold leading-6 text-blue-400"
      >
        Talk to an expert about DRM →
      </Link>
    </SectionShell>
  );
}
