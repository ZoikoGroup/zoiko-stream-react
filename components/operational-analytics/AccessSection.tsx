import Image from 'next/image';

const CARDS = [
  {
    badge: 'VERIFIED INGEST',
    title: 'Allowed / Authorized',
    desc: 'Aggregate count of authorized playback handshakes. No sensitive user IDs or private credentials are ever exposed in public dashboards.',
    highlight: false,
  },
  {
    badge: 'GATEWAY EXCLUSIONS',
    title: 'Denied / Blocked',
    desc: 'Aggregate blocked connections or expired tokens. Highlights threat patterns and unauthorized reproduction attempts globally.',
    highlight: true,
  },
  {
    badge: 'SECURITY BOUNDARY',
    title: 'Verification Pending',
    desc: 'Interrupted sessions awaiting active SAML challenge responses. Identifies latency bottleneck points across corporate networks.',
    highlight: false,
  },
];

const FIELDS = [
  { label: 'ENCRYPTED CHANNELS', value: 'SAML 2.0 / TLS 1.3 Tunneling' },
  { label: 'SECURITY COMPLIANCE AUDIT', value: 'Completed March 2026 — verified SOC-2 criteria' },
  { label: 'Attendee Consent Form Schema', value: 'Form ID: CONSENT-v4-REQD' },
  { label: 'Mandatory Recording Disclosure', value: 'Continuous Stream HUD + Pop-up Modal' },
];

const CHECKLIST = [
  'Strict token-gated access with registration validation pipelines.',
  'Mandatory geographic region boundaries monitored in real-time.',
  'Verification parameters stripped of PII before system telemetry ingest.',
  'Active failover path routing checked during authentication.',
];

export default function AccessSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#e1e6eb] bg-white px-6 py-20 md:px-12 xl:px-[112px] xl:py-[100px]">
      {/* Topographic background */}
      <Image
        src="/images/operational-analytics/access/section-bg.png"
        alt=""
        fill
        className="pointer-events-none object-cover"
      />
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src="/images/operational-analytics/access/bg-blob-1.svg"
        alt=""
        className="pointer-events-none absolute left-[-180px] top-[-120px] size-[420px]"
      />
      <img
        src="/images/operational-analytics/access/bg-blob-2.svg"
        alt=""
        className="pointer-events-none absolute bottom-[87px] right-[-173px] size-[520px]"
      />
      {/* eslint-enable @next/next/no-img-element */}

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <h2 className="text-[30px] font-bold leading-[1.2] text-[#0a0f1a] md:text-[38px] md:leading-[48px]">
          Access &amp; secure-delivery outcomes
        </h2>

        {/* Access cards row */}
        <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className={`flex flex-col items-start gap-[20px] rounded-[12px] border-[1.5px] border-solid bg-[#f8fafc] p-[32px] ${
                card.highlight ? 'border-[#4a8cfb]' : 'border-[#e1e6eb]'
              }`}
            >
              <div className="flex items-start rounded-[4px] border border-solid border-[#e1e6eb] bg-white px-[8px] py-[4px]">
                <p className="text-[11px] font-bold text-[#4a8cfb]">{card.badge}</p>
              </div>
              <p className="w-full text-[22px] font-bold text-[#0a0f1a]">{card.title}</p>
              <p className="w-full font-inter text-[14px] font-normal leading-[22px] text-[#4f5e74]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Access plan split */}
        <div className="flex w-full flex-col items-start gap-[40px] xl:flex-row">
          {/* Access security analytics panel */}
          <div className="flex w-full min-w-px flex-1 flex-col items-start gap-[24px] rounded-[16px] border-[1.5px] border-solid border-[#e1e6eb] bg-[#f8fafc] p-[32px]">
            <p className="w-full text-[18px] font-bold text-[#0a0f1a]">Access Security Analytics</p>
            <div className="flex w-full flex-col items-start gap-[16px]">
              {FIELDS.map((field) => (
                <div key={field.label} className="flex w-full flex-col items-start gap-[8px]">
                  <p className="text-[11px] font-bold uppercase text-[#4f5e74]">{field.label}</p>
                  <div className="flex w-full items-start rounded-[8px] border border-solid border-[#e1e6eb] bg-white p-[14px]">
                    <p className="min-w-px flex-1 font-inter text-[14px] font-normal text-[#0a0f1a]">
                      {field.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Privacy checklist */}
          <div className="flex w-full flex-col items-start gap-[24px] rounded-[16px] border-[1.5px] border-solid border-[#e1e6eb] bg-[#f8fafc] p-[32px] xl:w-[500px]">
            <p className="w-full text-[18px] font-bold text-[#0a0f1a]">Access Diagnostics Checklist</p>
            <div className="flex w-full flex-col items-start gap-[16px]">
              {CHECKLIST.map((item) => (
                <div key={item} className="flex w-full items-start gap-[12px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/operational-analytics/access/check.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="mt-[1px] shrink-0"
                  />
                  <p className="min-w-px flex-1 font-inter text-[14px] font-normal leading-[20px] text-[#4f5e74]">
                    {item}
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
