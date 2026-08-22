'use client';

interface Gate {
  number: string;
  title: string;
  explanation: string;
  evidence: string;
}

const GATES: Gate[] = [
  {
    number: '01',
    title: 'Authorization',
    explanation:
      "Every viewer playback request must satisfy the platform's current tenant security policy.",
    evidence: 'EVIDENCE REQUIRED TO NAME ENGINES',
  },
  {
    number: '02',
    title: 'Transport Protection',
    explanation:
      'All transit routes and metadata exchanges are locked inside secure cryptographic protocols.',
    evidence: 'EVIDENCE REQUIRED TO SPECIFY TLS SUITES',
  },
  {
    number: '03',
    title: 'At-Rest Protection',
    explanation:
      'Archived streams and metadata are isolated and protected at rest on target storage networks.',
    evidence: 'EVIDENCE REQUIRED TO CERTIFY AES-256 KEYS',
  },
  {
    number: '04',
    title: 'Packaging Protection',
    explanation:
      'Standardized video wrapping and dynamic chunk segmenting support technology-neutral license handshakes.',
    evidence: 'EVIDENCE REQUIRED TO FLAG DRM SYSTEMS',
  },
  {
    number: '05',
    title: 'Key Management',
    explanation:
      'Decryption keys are delivered JIT via isolated policy channels with automatic rotation properties.',
    evidence: 'EVIDENCE REQUIRED TO STATE HSM POLICIES',
  },
  {
    number: '06',
    title: 'Rights Policy',
    explanation:
      'Media access behaves strictly according to geographic limits and contractual temporal constraints.',
    evidence: 'EVIDENCE REQUIRED TO NAME GEO-FENCES',
  },
];

export default function DrmPublicationGateSection() {
  return (
    <section className="relative w-full overflow-hidden border-y border-gray-800 bg-gray-950">
      <img
        src="/images/platform-secure-playback/drm-gate-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span className="pointer-events-none absolute inset-0 bg-gray-950/55" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            Content Protection &amp; DRM Publication Gate
          </h2>
          <p className="max-w-4xl text-base leading-6 text-slate-400">
            Separate the concept of media protection from any particular DRM,
            encryption, or rights technology.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4">
          {GATES.map((gate) => (
            <article
              key={gate.number}
              className="rounded-xl border border-gray-800 bg-zinc-900/60 p-6 sm:p-7"
            >
              <h3 className="text-lg font-bold text-teal-400">
                {gate.number}. {gate.title}
              </h3>

              <p className="mt-4 text-sm font-bold text-white">Publicly Explained:</p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {gate.explanation}
              </p>

              <p className="mt-2 font-mono text-xs tracking-wide text-teal-400">
                {gate.evidence}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
