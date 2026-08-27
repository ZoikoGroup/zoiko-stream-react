import SectionShell from "./SectionShell";

const FAQS = [
  {
    question: "What is secure playback?",
    answer:
      "It is the set of controls that authorize protected viewers and gate media delivery using approved temporary access mechanisms, with DRM as a separate optional layer where supported.",
  },
  {
    question: "Are signed URLs/tokens the same as DRM?",
    answer:
      "No. Signed access controls who may request protected media; DRM adds encrypted-media/license enforcement for supported premium-content workflows.",
  },
  {
    question: "Where should playback credentials be generated?",
    answer:
      "On a protected server or approved server-side environment so privileged signing material is not exposed to clients.",
  },
  {
    question: "What happens when access expires?",
    answer:
      "The application must renew/re-authorize according to the documented lifecycle; it should not fall back to public playback.",
  },
  {
    question: "How do I rotate signing keys?",
    answer:
      "Follow the documented key lifecycle and overlap/retirement behavior for the supported mechanism; do not invalidate active access blindly.",
  },
  {
    question: "Does protection apply to live and VOD?",
    answer:
      "The exact behavior is product- and resource-specific; use the capability and inheritance matrices rather than assuming parity.",
  },
  {
    question: "Which DRM systems are supported?",
    answer:
      "The current registry-backed support matrix is rendered above. If no evidence is published, a system is not shown as supported.",
  },
];

export default function SecurePlaybackFaqSection() {
  return (
    <SectionShell
      eyebrow="Conversion + retention"
      title="Frequently asked questions."
    >
      <dl className="border-t border-zinc-200">
        {FAQS.map((faq) => (
          <div key={faq.question} className="border-b border-zinc-200 py-6">
            <dt className="text-sm font-bold leading-5 text-neutral-700">
              {faq.question}
            </dt>
            <dd className="mt-3 max-w-5xl text-sm leading-6 text-gray-500">
              {faq.answer}
            </dd>
          </div>
        ))}
      </dl>
    </SectionShell>
  );
}
