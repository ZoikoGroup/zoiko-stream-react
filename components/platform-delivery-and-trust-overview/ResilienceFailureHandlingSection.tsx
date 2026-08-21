import React from 'react';

const resilienceItems = [
  {
    question: 'What can fail?',
    answer:
      'Failures can manifest at any operational stage: primary stream source loss, ingest route failure, edge processing anomalies, token authorization expired, or delivery network latency peaks.',
  },
  {
    question: 'How is it noticed?',
    answer:
      'Continuously evaluated telemetries. Real-time active observation flags dropped frames, transit timeouts, or permission errors instantly.',
  },
  {
    question: 'What can recover?',
    answer:
      'Failures route automatically through redundant ingestion paths, or can be adjusted programmatically by customer-driven script parameters.',
  },
  {
    question: 'What is the user told?',
    answer:
      'No developer secrets are ever exposed. User clients receive clean, formatted error payloads containing request correlation keys.',
  },
  {
    question: 'What is preserved?',
    answer:
      'Every pipeline transition is cryptographically signed and archived locally, ensuring complete provenance.',
  },
];

export default function ResilienceFailureHandlingSection() {
  return (
    <section className="w-full bg-white border-b border-slate-200 py-20 md:py-24 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-gray-950 leading-tight">
            Resilience and Failure Handling
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal font-['Space_Grotesk'] max-w-3xl">
            Understand failure modes, continuity, and the boundary between platform status and this overview
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {resilienceItems.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-slate-50 rounded-xl border border-slate-200 flex flex-col gap-3"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-gray-950 text-lg font-bold font-['Space_Grotesk']">
                  {item.question}
                </h3>
                <span className="px-2.5 py-1 bg-sky-100 text-blue-600 rounded text-xs font-bold font-['Inter']">
                  ANALYZED MODE
                </span>
              </div>
              <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
