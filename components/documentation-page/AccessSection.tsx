import Image from 'next/image';

const LAYERS = [
  {
    num: '01',
    title: 'Identity Validation',
    desc: 'SAML SSO / IAM boundary verification completed',
    active: true,
  },
  {
    num: '02',
    title: 'Credential Handshake',
    desc: 'API Key payload or JWT token authorized',
    active: false,
  },
  {
    num: '03',
    title: 'Scope Resolution',
    desc: 'Verifies read/write roles and geo-fenced path permissions',
    active: false,
  },
  {
    num: '04',
    title: 'Execution Path',
    desc: 'API call ingest node opened for playback or production',
    active: false,
  },
];

const CHECKLIST = [
  'Valid Zoiko Identity Account with Administrator clearance',
  'Verified TLS 1.3 encryption certificates active on client',
  'Approved API token with write:streams permissions authorized',
  'Region-locked ingress constraints matched exactly',
];

export default function AccessSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#e1e6eb] bg-white px-6 py-20 md:px-12 xl:px-[112px] xl:py-[120px]">
      {/* Topographic background */}
      <Image src="/images/documentation-page/access/section-bg.png"
        alt=""
        fill
        className="pointer-events-none object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src="/images/documentation-page/access/bg-blob-1.svg"
        alt=""
        className="pointer-events-none absolute left-[-177px] top-[-61px] size-[420px]"
      />
      <img
        src="/images/documentation-page/access/bg-blob-2.svg"
        alt=""
        className="pointer-events-none absolute bottom-[-142px] right-[-124px] size-[520px]"
      />
      {/* eslint-enable @next/next/no-img-element */}

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <h2 className="w-full text-[30px] font-bold leading-[1.2] text-[#0f1b2d] md:text-[38px] md:leading-[48px]">
          Know What Must Be Available Before You Call an API
        </h2>

        <div className="flex w-full flex-col items-start gap-[40px] xl:flex-row">
          {/* Layered trust model */}
          <div className="flex min-w-px flex-1 flex-col items-start gap-[24px] rounded-[16px] border border-solid border-[#e1e6eb] bg-[#f8fafc] p-[32px]">
            <p className="text-[18px] font-bold leading-normal text-[#0f1b2d]">Layered Trust Model</p>
            <div className="flex w-full flex-col items-start gap-[12px]">
              {LAYERS.map((layer) => (
                <div
                  key={layer.num}
                  className={`flex w-full items-center gap-[20px] rounded-[8px] border-[1.5px] border-solid bg-white p-[16px] ${
                    layer.active ? 'border-[#4a8cfb]' : 'border-[#e1e6eb]'
                  }`}
                >
                  <div
                    className={`flex size-[36px] shrink-0 items-center justify-center rounded-[18px] ${
                      layer.active ? 'bg-[#4a8cfb]' : 'bg-[#e2e8f0]'
                    }`}
                  >
                    <p
                      className={`text-[14px] font-bold leading-normal ${
                        layer.active ? 'text-white' : 'text-[#4f5e74]'
                      }`}
                    >
                      {layer.num}
                    </p>
                  </div>
                  <div className="flex min-w-px flex-1 flex-col items-start gap-[4px]">
                    <p className="text-[15px] font-bold leading-normal text-[#0f1b2d]">{layer.title}</p>
                    <p className="font-inter text-[13px] font-normal leading-normal text-[#4f5e74]">
                      {layer.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prereqs panel */}
          <div className="flex w-full flex-col items-start gap-[24px] xl:w-[500px] xl:shrink-0">
            {/* Checklist */}
            <div className="flex w-full flex-col items-start gap-[20px] rounded-[16px] border-[1.5px] border-solid border-[#e1e6eb] bg-[#f8fafc] p-[32px]">
              <p className="text-[18px] font-bold leading-normal text-[#0f1b2d]">Developer Checklist</p>
              <div className="flex w-full flex-col items-start gap-[12px]">
                {CHECKLIST.map((item) => (
                  <div key={item} className="flex w-full items-start gap-[12px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/documentation-page/access/icon-check.svg"
                      alt=""
                      className="size-[18px] shrink-0"
                    />
                    <p className="flex-1 font-inter text-[13px] font-normal leading-[20px] text-[#4f5e74]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Warning callout */}
            <div className="flex w-full flex-col items-start gap-[8px] rounded-[8px] border border-solid border-[#f59e0b] bg-[#fef3c7] p-[20px]">
              <p className="whitespace-nowrap text-[13px] font-bold leading-normal text-[#b45309]">
                SECURITY CONSTRAINT ENFORCED
              </p>
              <p className="w-full font-inter text-[12px] font-normal leading-[18px] text-[#d97706]">
                All production video streams default to TOKEN-GATED with SAML validation. Ingest ports close
                automatically after 3 unsuccessful TLS handshakes.
              </p>
            </div>

            <button
              type="button"
              className="flex items-center justify-center whitespace-nowrap rounded-[8px] bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] px-[24px] py-[12px] text-[15px] font-bold text-[#0a0f1a] transition-opacity hover:opacity-90"
            >
              Check Developer Access
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
