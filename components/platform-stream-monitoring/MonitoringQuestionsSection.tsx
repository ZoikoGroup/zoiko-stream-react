import React from 'react';

const primaryQuestions = [
  {
    image: 'question-current-state.png',
    title: 'What is current stream state?',
    description: 'Analyze instant active telemetry pipelines and current health indices.',
  },
  {
    image: 'question-health-degraded.png',
    title: 'Is stream health degraded?',
    description: 'Investigate drop-offs, track alignment errors, and codec degradation.',
  },
  {
    image: 'question-alert-response.png',
    title: 'How do we respond to an alert?',
    description: 'Trigger actionable runbooks and route incidents directly to system owners.',
  },
];

const secondaryQuestions = [
  {
    image: 'question-broad-outage.png',
    title: 'Verify broad outage?',
    description: 'Confirm multi-region dependency faults or edge egress issues.',
  },
  {
    image: 'question-state-recovered.png',
    title: 'Is state recovered?',
    description: 'Validate post-incident track health against core baseline metrics.',
  },
  {
    image: 'question-impact-resolved.png',
    title: 'Is impact resolved?',
    description: 'Verify downstream delivery and audience client experience SLA metrics.',
  },
];

export default function MonitoringQuestionsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0f1a] px-6 py-20 md:px-[112px] md:py-24">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/platform-stream-monitoring/monitoring-questions-bg.png"
          alt=""
          className="absolute inset-0 h-full w-full max-w-none object-cover"
        />
        <div className="absolute inset-0 bg-[#0a0f1a]/55" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col gap-14">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold leading-[1.2] tracking-[-0.4px] text-white md:text-[37.9px]">
            Choose your monitoring question
          </h2>
          <p className="text-base text-[#aab3c4] md:text-[18px] md:leading-7">
            Select the playbook path matching your operational intent.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {primaryQuestions.map((card) => (
              <article
                key={card.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-[#232b3a] bg-[#131a26]"
              >
                <img
                  src={`/images/platform-stream-monitoring/${card.image}`}
                  alt=""
                  className="h-[150px] w-full object-cover"
                />
                <div className="flex flex-col gap-3 p-5">
                  <h3 className="text-base font-bold text-white">{card.title}</h3>
                  <p className="text-[12px] leading-4 text-[#6b7688]">{card.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {secondaryQuestions.map((card) => (
              <article
                key={card.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-[#232b3a] bg-[#131a26]"
              >
                <img
                  src={`/images/platform-stream-monitoring/${card.image}`}
                  alt=""
                  className="h-[120px] w-full object-cover"
                />
                <div className="flex flex-col gap-2 p-4">
                  <h3 className="text-sm font-bold text-white">{card.title}</h3>
                  <p className="text-[12px] leading-4 text-[#6b7688]">{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
