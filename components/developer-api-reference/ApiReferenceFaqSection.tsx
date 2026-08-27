import SectionShell from "./SectionShell";

const FAQS = [
  {
    question: "Does the API Reference grant access?",
    answer:
      "No. Public contract documentation and developer entitlement are separate — see Developer access to request credentials.",
  },
  {
    question: "Can I download an API specification?",
    answer:
      "Only when an approved public machine-readable contract exists for the selected version. If none is published, no download is offered.",
  },
  {
    question: "How do versions work?",
    answer:
      'Each operation is scoped to an exact version and lifecycle state — current, deprecated, sunset scheduled, or retired. "Latest" is always a resolved alias, never a guess.',
  },
  {
    question: "Where is authentication defined?",
    answer:
      "Authentication, authorization and business entitlement are documented separately — start with the Authentication page.",
  },
  {
    question: "Is try-it available?",
    answer:
      "Only when a verified safe environment and side-effect model exist for the operation. Otherwise, no execute control is rendered.",
  },
  {
    question: "Where do rate limits and errors live?",
    answer:
      "Operation pages show concise contextual facts; the canonical destinations are Rate limits and Error handling.",
  },
  {
    question: "How are changes communicated?",
    answer:
      "Through the Changelog and version history on this page — breaking-change language and migration windows come from release authority, not marketing copy.",
  },
];

export default function ApiReferenceFaqSection() {
  return (
    <SectionShell eyebrow="AEO" title="Frequently asked questions.">
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
