import Image from 'next/image';

const STACK = [
  {
    title: '1. Audience/Application Context',
    desc: 'User claims, domain boundaries, geo-restriction mapping.',
  },
  {
    title: '2. Identity & Entitlement',
    desc: 'SAML SSO assertion tokens and validated authentication tokens.',
  },
  {
    title: '3. Policy Decision',
    desc: 'Server-side rules engine validating token expiry limits.',
  },
  {
    title: '4. Playback Authorization & Protection',
    desc: 'Encrypted playlist generation with short-lived session keys.',
  },
  {
    title: '5. Player/Viewer Outcome',
    desc: 'HLS / WebRTC secure media pipeline delivery.',
  },
];

const STATES = [
  { label: 'Checking', color: '#3B82F6' },
  { label: 'Allowed', color: '#10B981' },
  { label: 'Denied', color: '#EF4444' },
  { label: 'Verification Required', color: '#F59E0B' },
  { label: 'Expired', color: '#6B7280' },
  { label: 'Revoked', color: '#7F1D1D' },
  { label: 'Unknown', color: '#374151' },
];

export default function SecurePlaybackSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#e1e6eb] bg-white px-6 py-20 md:px-12 xl:px-[112px] xl:py-[100px]">
      {/* Topographic background */}
      <Image
        src="/images/developers-overview/secure-playback/section-bg.png"
        alt=""
        fill
        className="pointer-events-none object-cover"
      />
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src="/images/developers-overview/secure-playback/bg-blob-1.svg"
        alt=""
        className="pointer-events-none absolute left-[-151px] top-[-20px] size-[420px]"
      />
      <img
        src="/images/developers-overview/secure-playback/bg-blob-2.svg"
        alt=""
        className="pointer-events-none absolute bottom-[-5px] right-[-138px] size-[520px]"
      />
      {/* eslint-enable @next/next/no-img-element */}

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="text-[30px] font-bold leading-[1.2] text-[#0a0f1a] md:text-[38px] md:leading-[48px]">
            Secure Playback &amp; Player Integration — Keep Trust Boundaries Explicit
          </h2>
          <p className="text-[16px] font-normal leading-[28px] text-[#4f5e74] md:text-[18px]">
            Protect playback without burying access decisions inside the player.
          </p>
        </div>

        <div className="flex w-full flex-col items-stretch gap-[40px] xl:flex-row xl:items-start">
          {/* Governance Trust Stack */}
          <div className="flex min-w-px flex-1 flex-col items-start gap-[24px] rounded-[16px] border-[1.5px] border-solid border-[#e1e6eb] bg-[#f8fafc] p-[32px]">
            <p className="text-[18px] font-bold leading-normal text-[#0a0f1a]">Governance Trust Stack</p>
            <div className="flex w-full flex-col items-start gap-[12px]">
              {STACK.map((item) => (
                <div
                  key={item.title}
                  className="flex w-full flex-col items-start gap-[4px] rounded-[8px] border border-solid border-[#e1e6eb] bg-white p-[16px]"
                >
                  <p className="text-[14px] font-bold leading-normal text-[#4a8cfb]">{item.title}</p>
                  <p className="w-full font-inter text-[12px] font-normal leading-normal text-[#4f5e74]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Player State Validation */}
          <div className="flex w-full flex-col items-start gap-[24px] rounded-[16px] border-[1.5px] border-solid border-[#e1e6eb] bg-[#f8fafc] p-[32px] xl:w-[440px] xl:shrink-0">
            <p className="text-[18px] font-bold leading-normal text-[#0a0f1a]">Player State Validation</p>

            {/* Player mockup */}
            <div className="flex h-[180px] w-full flex-col items-center justify-center gap-[12px] rounded-[12px] bg-[#0a0d14] p-[16px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/developers-overview/secure-playback/icon-shield-alert.svg"
                alt=""
                className="size-[24px]"
              />
              <p className="text-center text-[14px] font-bold leading-normal text-white">
                Securing Media Pipeline...
              </p>
              <p className="text-center font-inter text-[11px] font-normal leading-normal text-[#aab3c4]">
                Authorizing play session token
              </p>
            </div>

            {/* State legend */}
            <div className="flex w-full flex-col items-start gap-[10px]">
              {STATES.map((state) => (
                <div key={state.label} className="flex items-center gap-[8px]">
                  <span
                    className="size-[8px] shrink-0 rounded-full"
                    style={{ backgroundColor: state.color }}
                  />
                  <p className="text-[12px] font-bold leading-normal text-[#0a0f1a]">{state.label}</p>
                </div>
              ))}
            </div>

            <div className="h-0 w-full border-t border-solid border-[#e1e6eb]" />

            <p className="w-full font-inter text-[11px] font-normal leading-normal text-[#4f5e74]">
              Accessibility Note: Includes ARIA landmarks, WCAG keyboard control mapping, and screen
              reader-friendly error disclosures natively.
            </p>
          </div>
        </div>

        <div className="flex w-full items-start justify-center">
          <button
            type="button"
            className="flex items-center justify-center whitespace-nowrap rounded-[8px] bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] px-[28px] py-[14px] text-[15px] font-bold text-[#0a0f1a] transition-opacity hover:opacity-90"
          >
            Explore Secure Playback
          </button>
        </div>
      </div>
    </section>
  );
}
