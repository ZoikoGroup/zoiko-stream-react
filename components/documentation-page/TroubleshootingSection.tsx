import Image from 'next/image';

const SYMPTOMS = [
  { img: 'card-0.png', title: 'Request Rejected', desc: 'HTTP 403 / Invalid Signature Key' },
  { img: 'card-1.png', title: 'Resource Stuck', desc: 'Ingest Allocation Queued State Limit' },
  { img: 'card-2.png', title: 'Playback Denied', desc: 'SAML SSO Authorization Token Expiry' },
  { img: 'card-3.png', title: 'Stream Unhealthy', desc: 'High packet drop threshold telemetry alert' },
  { img: 'card-4.png', title: 'Recording Missing', desc: 'Storage destination permission mismatch' },
  { img: 'card-5.png', title: 'Event Not Received', desc: 'Webhook handshake endpoint SSL rejection' },
  { img: 'card-6.png', title: 'Rate-Limited', desc: 'HTTP 429 quota threshold exceeded limits' },
  { img: 'card-7.png', title: 'Docs Mismatch', desc: 'API payload schema version conflict guide' },
];

const EVIDENCE = [
  { lead: '1. Request ID (X-Zoiko-Request-ID): ', rest: 'Check the client HTTP headers.' },
  { lead: '2. Stream Endpoint URI: ', rest: 'The exact contribution or playback path.' },
  { lead: '3. Integration Log Excerpt: ', rest: 'Recent console errors or raw webhook payloads.' },
];

const ESCALATION = [
  {
    level: 'LEVEL 1: DEVELOPER CONSOLE',
    color: '#34d4ca',
    desc: 'Self-service logs, API reference schemas, troubleshooting guide.',
  },
  {
    level: 'LEVEL 2: COMPLIANCE OFFICE',
    color: '#4a8cfb',
    desc: 'SSO authorization failures, regional residency mapping changes.',
  },
];

export default function TroubleshootingSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#232b3a] px-6 py-20 md:px-12 xl:px-[112px] xl:py-[120px]">
      {/* Background image + overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image src="/images/documentation-page/troubleshooting/section-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(10,13,20,0.83)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="w-full text-[30px] font-bold leading-[1.2] text-white md:text-[38px] md:leading-[48px]">
            Diagnose From Observed Behavior and Current Evidence
          </h2>
          <p className="w-full font-inter text-[16px] font-normal leading-[28px] text-[#aab3c4] md:text-[18px]">
            Identify integration symptoms quickly using targeted diagnostic profiles instead of
            trial-and-error debugging.
          </p>
        </div>

        {/* Symptom grid */}
        <div className="grid w-full grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-4">
          {SYMPTOMS.map((symptom) => (
            <div
              key={symptom.title}
              className="flex flex-col items-start gap-[16px] rounded-[12px] border border-solid border-[#232b3a] bg-[#162235] p-[20px]"
            >
              <div className="relative h-[90px] w-full overflow-hidden rounded-[6px]">
                <Image
                  src={`/images/documentation-page/troubleshooting/${symptom.img}`}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex w-full flex-col items-start gap-[6px]">
                <p className="text-[16px] font-bold leading-normal text-white">{symptom.title}</p>
                <p className="w-full font-inter text-[12px] font-normal leading-normal text-[#aab3c4]">
                  {symptom.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Diagnostics split */}
        <div className="flex w-full flex-col items-start gap-[40px] xl:flex-row">
          {/* Evidence panel */}
          <div className="flex min-w-px flex-1 flex-col items-start gap-[24px] rounded-[16px] border-[1.5px] border-solid border-[#232b3a] bg-[rgba(16,21,30,0.8)] p-[32px]">
            <p className="text-[18px] font-bold leading-normal text-white">Diagnostic Evidence Gathering</p>
            <p className="w-full font-inter text-[14px] font-normal leading-[22px] text-[#aab3c4]">
              To resolve pipeline inconsistencies quickly, prepare these attributes before opening an
              administrative escalation ticket:
            </p>
            <div className="h-0 w-full border-t border-solid border-[#232b3a]" />
            <div className="flex w-full flex-col items-start gap-[12px]">
              {EVIDENCE.map((item) => (
                <p key={item.lead} className="font-inter text-[13px] leading-normal text-[#aab3c4]">
                  <span className="font-bold text-white">{item.lead}</span>
                  {item.rest}
                </p>
              ))}
            </div>
          </div>

          {/* Escalation matrix */}
          <div className="flex w-full flex-col items-start gap-[24px] rounded-[16px] border-[1.5px] border-solid border-[#232b3a] bg-[rgba(16,21,30,0.8)] p-[32px] xl:w-[440px] xl:shrink-0">
            <p className="text-[18px] font-bold leading-normal text-white">Escalation Matrix</p>
            <div className="flex w-full flex-col items-start gap-[16px]">
              {ESCALATION.map((tier) => (
                <div key={tier.level} className="flex w-full flex-col items-start gap-[4px]">
                  <p className="text-[12px] font-bold leading-normal" style={{ color: tier.color }}>
                    {tier.level}
                  </p>
                  <p className="w-full font-inter text-[13px] font-normal leading-normal text-[#aab3c4]">
                    {tier.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          type="button"
          className="flex items-center justify-center whitespace-nowrap rounded-[8px] bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] px-[28px] py-[14px] text-[15px] font-bold text-[#0a0f1a] transition-opacity hover:opacity-90"
        >
          Find a Troubleshooting Guide
        </button>
      </div>
    </section>
  );
}
