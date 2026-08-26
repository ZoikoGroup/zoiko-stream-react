import Image from 'next/image';

const STATUSES = [
  {
    label: 'Available',
    desc: 'Open endpoints ready for sandbox or immediate deployment.',
    color: '#10B981',
  },
  {
    label: 'Request Required',
    desc: 'Standard verification needed for high-volume limits.',
    color: '#3B82F6',
  },
  {
    label: 'Invite/Approval Required',
    desc: 'Private features gated behind partner review cycles.',
    color: '#F59E0B',
  },
  {
    label: 'Pending',
    desc: 'Awaiting security team compliance signing.',
    color: '#6B7280',
  },
  {
    label: 'Restricted',
    desc: 'Access restricted due to geolocation governance.',
    color: '#EF4444',
  },
  {
    label: 'Revoked',
    desc: 'Credentials deactivated by administrative audit.',
    color: '#7F1D1D',
  },
  {
    label: 'Unknown',
    desc: 'System handshake unreachable or configuration error.',
    color: '#374151',
  },
];

const LAYERS = [
  { step: '01. Credential Type', value: 'HMAC-SHA256 Signatures' },
  { step: '02. Permission Scope', value: 'publish:stream:write' },
  { step: '03. Request Context', value: 'TLS 1.3 Ingestion Tunnel' },
  { step: '04. Rotation Schedule', value: '90-Day Automatic Lifecycle' },
];

const LINKS = ['View Developer Access', 'Read Authentication', 'Developer Support'];

export default function DeveloperAuthSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#e1e6eb] bg-white px-6 py-20 md:px-12 xl:px-[112px] xl:py-[100px]">
      {/* Topographic background */}
      <Image
        src="/images/developers-overview/developer-auth/section-bg.png"
        alt=""
        fill
        className="pointer-events-none object-cover"
      />
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src="/images/developers-overview/developer-auth/bg-blob-1.svg"
        alt=""
        className="pointer-events-none absolute left-[-170px] top-[-124px] size-[420px]"
      />
      <img
        src="/images/developers-overview/developer-auth/bg-blob-2.svg"
        alt=""
        className="pointer-events-none absolute bottom-[-136px] right-[-130px] size-[520px]"
      />
      {/* eslint-enable @next/next/no-img-element */}

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="text-[30px] font-bold leading-[1.2] text-[#0a0f1a] md:text-[38px] md:leading-[48px]">
            Developer Access &amp; Authentication — Know What You Can Use and How
          </h2>
          <p className="text-[16px] font-normal leading-[28px] text-[#4f5e74] md:text-[18px]">
            Enterprise-grade credentialing engineered for secure, auditable streaming access.
          </p>
        </div>

        <div className="flex w-full flex-col items-stretch gap-[40px] xl:flex-row xl:items-start">
          {/* Access State */}
          <div className="flex min-w-px flex-1 flex-col items-start gap-[24px] rounded-[16px] border-[1.5px] border-solid border-[#e1e6eb] bg-[#f8fafc] p-[32px]">
            <p className="text-[20px] font-bold leading-normal text-[#0a0f1a]">Developer Access State</p>
            <div className="flex w-full flex-col items-start gap-[16px]">
              {STATUSES.map((status) => (
                <div key={status.label} className="flex w-full items-center gap-[12px]">
                  <span
                    className="size-[10px] shrink-0 rounded-full"
                    style={{ backgroundColor: status.color }}
                  />
                  <div className="flex min-w-px flex-1 flex-col items-start gap-[2px]">
                    <p className="text-[14px] font-bold leading-normal text-[#0a0f1a]">{status.label}</p>
                    <p className="w-full font-inter text-[12px] font-normal leading-normal text-[#4f5e74]">
                      {status.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Auth Layers */}
          <div className="flex min-w-px flex-1 flex-col items-start gap-[24px] rounded-[16px] border-[1.5px] border-solid border-[#e1e6eb] bg-[#f8fafc] p-[32px]">
            <p className="text-[20px] font-bold leading-normal text-[#0a0f1a]">Authentication Layers</p>
            <div className="flex w-full flex-col items-start gap-[12px]">
              {LAYERS.map((layer) => (
                <div
                  key={layer.step}
                  className="flex w-full items-center justify-between gap-[12px] rounded-[8px] border border-solid border-[#e1e6eb] bg-white p-[16px]"
                >
                  <p className="text-[14px] font-bold leading-normal text-[#0a0f1a]">{layer.step}</p>
                  <p className="text-right font-inter text-[13px] font-normal leading-normal text-[#4a8cfb]">
                    {layer.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-[20px]">
              {LINKS.map((link) => (
                <button key={link} type="button" className="text-[14px] font-bold text-[#4a8cfb]">
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
