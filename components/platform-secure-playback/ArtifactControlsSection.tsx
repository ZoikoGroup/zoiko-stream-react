'use client';

interface Artifact {
  title: string;
  description: string;
  image: string;
}

const ARTIFACTS: Artifact[] = [
  {
    title: 'Playback Artifact',
    description:
      'A temporary or contextual artifact may carry or reference authorization parameters where natively supported.',
    image: '/images/platform-secure-playback/artifact-playback.png',
  },
  {
    title: 'Lifetime',
    description:
      'Authorization or playback context may expire automatically to prevent persistent, unauthorized streaming.',
    image: '/images/platform-secure-playback/artifact-lifetime.png',
  },
  {
    title: 'Scope',
    description:
      'Each generated artifact is strictly bound to its resource, audience, session, origin, device, or temporal context.',
    image: '/images/platform-secure-playback/artifact-scope.png',
  },
  {
    title: 'Refresh / Renewal',
    description:
      'An uninterrupted active session requires transparent background re-evaluation before previous validation lapses.',
    image: '/images/platform-secure-playback/artifact-refresh.png',
  },
  {
    title: 'Revocation',
    description:
      'Authority can be immediately withdrawn according to real-time administrative overrides and supported security policies.',
    image: '/images/platform-secure-playback/artifact-revocation.png',
  },
  {
    title: 'Sharing Resistance',
    description:
      'Advanced cryptographic and context validation controls actively restrict link leakage and unauthorized session reuse.',
    image: '/images/platform-secure-playback/artifact-sharing-resistance.png',
  },
];

export default function ArtifactControlsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <img
        src="/images/platform-secure-playback/artifact-controls-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-2.5">
          <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Session, Link &amp; Playback Artifact Controls
          </h2>
          <p className="max-w-4xl text-base leading-6 text-gray-500">
            Explain temporary playback artifacts without asserting a token design.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ARTIFACTS.map((artifact) => (
            <article
              key={artifact.title}
              className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)]"
            >
              <div className="aspect-[389/176] w-full overflow-hidden bg-slate-950">
                <img
                  src={artifact.image}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col gap-2.5 px-5 pb-6 pt-5">
                <h3 className="text-base font-bold leading-6 text-slate-900">
                  {artifact.title}
                </h3>
                <p className="text-xs leading-5 text-gray-500">
                  {artifact.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
