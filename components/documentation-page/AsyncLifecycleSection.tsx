const STAGES = [
  {
    badge: '01. REQUEST',
    title: 'API Request Accepted',
    desc: 'The ingress endpoint successfully parses and returns a 202 Accepted. The pipeline is queued for immediate allocation.',
    active: false,
  },
  {
    badge: '02. PROCESSING',
    title: 'Asynchronous Pipeline',
    desc: 'Zoiko orchestrates media transcoding, active storage node mapping, and event replication triggers.',
    active: true,
  },
  {
    badge: '03. COMPLETED',
    title: 'State Machine Verified',
    desc: 'A webhook fires informing your application of absolute readiness, giving client players qualified stream tokens.',
    active: false,
  },
];

const FIELDS = [
  {
    label: 'Event Type: stream.started',
    value: 'Fires immediately when input ingest validates H.264 video handshake.',
  },
  {
    label: 'Event Type: stream.archived',
    value: 'Triggered on complete cold storage replication success.',
  },
  {
    label: 'Event Type: stream.failed',
    value: 'Urgent telemetry alert triggered by packet drop threshold breach.',
  },
  {
    label: 'Idempotency Protection',
    value: 'Mandatory X-Idempotency-Key headers required on retry pipelines.',
  },
];

const RULES = [
  'Always process webhooks idempotently using historical event IDs.',
  'Exponential backoff retry configured natively on client nodes.',
  'Validate event payload signature against public compliance key.',
  'Verify stream metadata consistency constraints before replay.',
];

export default function AsyncLifecycleSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#e1e6eb] bg-white px-6 py-20 md:px-12 xl:px-[112px] xl:py-[100px]">
      {/* Background blobs */}
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src="/images/documentation-page/lifecycle/bg-blob-1.svg"
        alt=""
        className="pointer-events-none absolute left-[-180px] top-[-120px] size-[420px]"
      />
      <img
        src="/images/documentation-page/lifecycle/bg-blob-2.svg"
        alt=""
        className="pointer-events-none absolute bottom-[87px] right-[-173px] size-[520px]"
      />
      {/* eslint-enable @next/next/no-img-element */}

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <h2 className="w-full text-[30px] font-bold leading-[1.2] text-[#0a0f1a] md:text-[38px] md:leading-[48px]">
          Treat Acceptance as the Start, Not Proof of Completion
        </h2>

        {/* Stage cards */}
        <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-3">
          {STAGES.map((stage) => (
            <div
              key={stage.badge}
              className={`flex flex-col items-start gap-[20px] rounded-[12px] border-[1.5px] border-solid bg-[#f8fafc] p-[32px] ${
                stage.active ? 'border-[#4a8cfb]' : 'border-[#e1e6eb]'
              }`}
            >
              <span className="flex items-start rounded-[4px] border border-solid border-[#e1e6eb] bg-white px-[8px] py-[4px] text-[11px] font-bold leading-normal text-[#4a8cfb]">
                {stage.badge}
              </span>
              <p className="w-full text-[22px] font-bold leading-normal text-[#0a0f1a]">{stage.title}</p>
              <p className="w-full font-inter text-[14px] font-normal leading-[22px] text-[#4f5e74]">
                {stage.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Schema + rules split */}
        <div className="flex w-full flex-col items-start gap-[40px] xl:flex-row">
          {/* Webhook schema */}
          <div className="flex min-w-px flex-1 flex-col items-start gap-[24px] rounded-[16px] border-[1.5px] border-solid border-[#e1e6eb] bg-[#f8fafc] p-[32px]">
            <p className="w-full text-[18px] font-bold leading-normal text-[#0a0f1a]">
              Webhook Event Lifecycle Schema
            </p>
            <div className="flex w-full flex-col items-start gap-[16px]">
              {FIELDS.map((field) => (
                <div key={field.label} className="flex w-full flex-col items-start gap-[8px]">
                  <p className="whitespace-nowrap text-[11px] font-bold uppercase leading-normal text-[#4f5e74]">
                    {field.label}
                  </p>
                  <div className="flex w-full items-start rounded-[8px] border border-solid border-[#e1e6eb] bg-white p-[14px]">
                    <p className="flex-1 font-inter text-[14px] font-normal leading-normal text-[#0a0f1a]">
                      {field.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Event & retry rules */}
          <div className="flex w-full flex-col items-start gap-[24px] rounded-[16px] border-[1.5px] border-solid border-[#e1e6eb] bg-[#f8fafc] p-[32px] xl:w-[500px] xl:shrink-0">
            <p className="w-full text-[18px] font-bold leading-normal text-[#0a0f1a]">Event &amp; Retry Rules</p>
            <div className="flex w-full flex-col items-start gap-[16px]">
              {RULES.map((rule) => (
                <div key={rule} className="flex w-full items-start gap-[12px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/documentation-page/lifecycle/icon-check.svg"
                    alt=""
                    className="size-[18px] shrink-0"
                  />
                  <p className="flex-1 font-inter text-[14px] font-normal leading-[20px] text-[#4f5e74]">
                    {rule}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
