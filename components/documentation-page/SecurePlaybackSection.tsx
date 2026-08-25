import Image from 'next/image';

const STEPS = [
  { label: '1. Viewer Identity', icon: 'shield', active: true },
  { label: '2. App Entitlement', icon: 'shield', active: true },
  { label: '3. Policy Decision', icon: 'shield', active: true },
  { label: '4. Authorization', icon: 'shield', active: true },
  { label: '5. Playback token', icon: 'lock', active: false },
  { label: '6. Outcome', icon: 'lock', active: false },
];

const CARDS = [
  {
    img: 'card-0.png',
    badge: 'NO AUTHENTICATION',
    title: 'Public Open Stream',
    desc: 'Designed for marketing streams. Global reach with high concurrency caching, relying only on ephemeral token parameters to prevent CDN scraping.',
  },
  {
    img: 'card-1.png',
    badge: 'JWT AUTHORIZATION',
    title: 'Token-Gated Playback',
    desc: 'Short-lived cryptographic JSON Web Tokens signed by your backend application. Verifies geo-boundaries, IP matching, and viewing windows.',
  },
  {
    img: 'card-2.png',
    badge: 'ENTERPRISE ENFORCED',
    title: 'Restricted SAML SSO',
    desc: 'Mandatory corporate single sign-on authentication prior to connection negotiation. Integrates directory access logs and compliance audits.',
  },
];

const CHECKLIST = [
  'Retrieve signed playback token from application server asynchronously',
  'Ensure client player passes query token parameter on HLS/DASH manifest fetch',
  'Enable automated key rotation rules inside native iOS & Android playback layers',
  'Listen to stream.authorization.failed event webhooks in parent app',
];

const STATES = [
  { label: 'DENIED', color: '#ef4444', desc: 'Signature mismatch or IP address geolocation block' },
  { label: 'EXPIRED', color: '#f59e0b', desc: 'Playback session duration threshold exceeded limit' },
  { label: 'REVOKED', color: '#aab3c4', desc: 'Administrative cancellation triggered by security compliance' },
];

export default function SecurePlaybackSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#232b3a] px-6 py-20 md:px-12 xl:px-[112px] xl:py-[120px]">
      {/* Background image + overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image src="/images/documentation-page/secure-playback/section-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(15,27,45,0.81)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="w-full text-[30px] font-bold leading-[1.2] text-white md:text-[38px] md:leading-[48px]">
            Secure Playback Starts Before the Player
          </h2>
          <p className="w-full font-inter text-[16px] font-normal leading-[28px] text-[#aab3c4] md:text-[18px]">
            Protect your streams with cryptographic token validation pipelines, SAML SSO boundaries, and
            deterministic policy matching.
          </p>
        </div>

        {/* Trust boundary handshake flow */}
        <div className="flex w-full flex-col items-start gap-[20px] rounded-[16px] border-[1.5px] border-solid border-[#232b3a] bg-[rgba(16,21,30,0.8)] p-[24px]">
          <p className="text-[14px] font-bold leading-normal text-white">PLAYBACK SECURITY HANDSHAKE FLOW</p>
          <div className="flex w-full items-center gap-[12px]">
            {STEPS.map((step, i) => (
              <div key={step.label} className="flex min-w-px flex-1 items-center gap-[8px]">
                <div className="flex min-w-px flex-1 flex-col items-center gap-[8px]">
                  <div
                    className={`flex size-[40px] shrink-0 items-center justify-center rounded-[20px] border border-solid border-[#606a7c] ${
                      step.active ? 'bg-[#34d4ca]' : 'bg-[#162235]'
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/images/documentation-page/secure-playback/icon-${step.icon}.svg`}
                      alt=""
                      className="size-[16px]"
                    />
                  </div>
                  <p
                    className={`w-full truncate text-center text-[12px] font-bold leading-normal ${
                      step.active ? 'text-white' : 'text-[#aab3c4]'
                    }`}
                  >
                    {step.label}
                  </p>
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className={`h-[2px] min-w-px flex-1 ${step.active ? 'bg-[#34d4ca]' : 'bg-[#232b3a]'}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Access model cards */}
        <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-start overflow-hidden rounded-[12px] border-[1.5px] border-solid border-[#232b3a] bg-[#162235]"
            >
              <div className="relative h-[140px] w-full">
                <Image src={`/images/documentation-page/secure-playback/${card.img}`} alt="" fill className="object-cover" />
              </div>
              <div className="flex w-full flex-col items-start gap-[16px] p-[24px]">
                <span className="flex items-start rounded-[4px] border border-solid border-[rgba(16,185,129,0.3)] bg-[rgba(16,185,129,0.1)] px-[8px] py-[4px] text-[10px] font-bold leading-normal text-[#34d4ca]">
                  {card.badge}
                </span>
                <p className="text-[20px] font-bold leading-normal text-white">{card.title}</p>
                <p className="w-full font-inter text-[13px] font-normal leading-[20px] text-[#aab3c4]">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Checklist + state indicators */}
        <div className="flex w-full flex-col items-start gap-[40px] xl:flex-row">
          {/* Player integration checklist */}
          <div className="flex min-w-px flex-1 flex-col items-start gap-[24px] rounded-[16px] border-[1.5px] border-solid border-[#232b3a] bg-[rgba(16,21,30,0.8)] p-[32px]">
            <p className="text-[18px] font-bold leading-normal text-white">Player Integration Checklist</p>
            <div className="flex w-full flex-col items-start gap-[16px]">
              {CHECKLIST.map((item) => (
                <div key={item} className="flex w-full items-start gap-[12px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/documentation-page/secure-playback/icon-check.svg"
                    alt=""
                    className="size-[18px] shrink-0"
                  />
                  <p className="flex-1 font-inter text-[14px] font-normal leading-[20px] text-[#aab3c4]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Playback state indicators */}
          <div className="flex w-full flex-col items-start gap-[24px] rounded-[16px] border-[1.5px] border-solid border-[#232b3a] bg-[rgba(16,21,30,0.8)] p-[32px] xl:w-[440px] xl:shrink-0">
            <p className="text-[18px] font-bold leading-normal text-white">Playback State Indicators</p>
            <div className="flex w-full flex-col items-start gap-[14px]">
              {STATES.map((state) => (
                <div
                  key={state.label}
                  className="flex w-full flex-col items-start gap-[4px] border-b border-solid border-[#232b3a] pb-[12px]"
                >
                  <div className="flex items-center gap-[8px]">
                    <span
                      className="size-[8px] shrink-0 rounded-full"
                      style={{ backgroundColor: state.color }}
                    />
                    <p
                      className="text-[12px] font-bold leading-normal"
                      style={{ color: state.color }}
                    >
                      {state.label}
                    </p>
                  </div>
                  <p className="w-full font-inter text-[13px] font-normal leading-normal text-[#aab3c4]">
                    {state.desc}
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
          Read Secure Playback
        </button>
      </div>
    </section>
  );
}
