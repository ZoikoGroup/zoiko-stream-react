import Image from 'next/image';

const CHIPS = [
  { label: 'All Connection Jobs', active: true },
  { label: 'Source: Hardware & Software', active: false },
  { label: 'Uptime Target: High-Availability', active: false },
  { label: 'AES Encryption', active: false },
];

const PROTOCOLS = [
  {
    img: 'card-rtmps.png',
    name: 'RTMPS',
    badge: 'VERIFIED',
    badgeTone: 'green',
    desc: 'Encrypted contribution over RTMP tunneled via TLS',
    direction: 'Source → Platform Ingest',
    quals: [
      'Strict TLS 1.2+ handshake mandatory',
      'TCP Port 443 destination open',
      'Static stream-key with token parameters',
      'AAC-LC and H.264 video codec payload only',
    ],
  },
  {
    img: 'card-srt.png',
    name: 'SRT',
    badge: 'VERIFIED WITH CONDITIONS',
    badgeTone: 'amber',
    desc: 'Reliable UDP-based transport with forward error correction',
    direction: 'Source ⇄ Platform Gateway',
    quals: [
      'Caller/Listener configuration matched',
      'FEC (Forward Error Correction) matrix configured',
      'AES-128 or AES-256 pre-shared key verified',
      'High-packet-loss threshold telemetry monitored',
    ],
  },
  {
    img: 'card-whip.png',
    name: 'WHIP',
    badge: 'VERIFIED',
    badgeTone: 'green',
    desc: 'WebRTC-based HTTP ingest for real-time browser contribution',
    direction: 'Browser → Ingest Service',
    quals: [
      'Whip endpoint HTTPS POST offer authorized',
      'STUN/TURN network negotiation qualified',
      'Opus audio & VP8/H.264 video dynamic fallback',
      'Sub-second contribution profile required',
    ],
  },
];

export default function ProtocolSelectorSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#232b3a] px-6 py-20 md:px-12 xl:px-[112px] xl:py-[100px]">
      {/* Background image + overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image src="/images/documentation-page/protocols/section-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(15,27,45,0.78)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="w-full text-[30px] font-bold leading-[1.2] tracking-[-0.38px] text-white md:text-[38px] md:leading-[48px]">
            Choose the Surface That Matches the Job
          </h2>
          <p className="w-full text-[16px] font-normal leading-[28px] text-[#aab3c4] md:text-[18px]">
            Compare qualified integration endpoints across our SDK frameworks, low-latency live media
            protocols, and event webhooks.
          </p>
        </div>

        {/* Search + filters */}
        <div className="flex w-full flex-col items-start gap-[20px] rounded-[12px] border border-solid border-[#232b3a] bg-[#162235] p-[24px]">
          <div className="flex w-full flex-wrap items-center justify-between gap-[12px]">
            <div className="flex items-center gap-[12px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/documentation-page/protocols/icon-search.svg"
                alt=""
                className="size-[18px] shrink-0"
              />
              <p className="font-inter text-[15px] font-normal leading-normal text-[#aab3c4]">
                Filter protocols by connection context...
              </p>
            </div>
            <p className="whitespace-nowrap text-[14px] font-bold leading-normal text-[#34d4ca]">
              3 VERIFIED PATHS FOUND
            </p>
          </div>
          <div className="flex flex-wrap items-start gap-[12px]">
            {CHIPS.map((chip) => (
              <span
                key={chip.label}
                className={`flex items-start whitespace-nowrap rounded-[20px] px-[14px] py-[8px] text-[12px] font-bold leading-normal ${
                  chip.active ? 'bg-[#34d4ca] text-[#04141a]' : 'bg-[#232b3a] text-[#aab3c4]'
                }`}
              >
                {chip.label}
              </span>
            ))}
          </div>
        </div>

        {/* Protocol cards */}
        <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-2 lg:grid-cols-3">
          {PROTOCOLS.map((proto) => (
            <div
              key={proto.name}
              className="flex flex-col items-start overflow-hidden rounded-[16px] border-[1.5px] border-solid border-[#232b3a] bg-[#162235]"
            >
              <div className="relative h-[140px] w-full">
                <Image src={`/images/documentation-page/protocols/${proto.img}`} alt="" fill className="object-cover" />
              </div>
              <div className="flex w-full flex-col items-start gap-[20px] p-[24px]">
                <div className="flex w-full items-center justify-between gap-[8px]">
                  <p className="text-[24px] font-bold leading-normal text-white">{proto.name}</p>
                  <span
                    className={`flex shrink-0 items-start rounded-[100px] px-[10px] py-[4px] text-[11px] font-bold leading-normal ${
                      proto.badgeTone === 'amber'
                        ? 'bg-[rgba(245,158,11,0.1)] text-[#f59e0b]'
                        : 'bg-[rgba(16,185,129,0.1)] text-[#10b981]'
                    }`}
                  >
                    {proto.badge}
                  </span>
                </div>
                <p className="w-full font-inter text-[14px] font-normal leading-[22px] text-[#aab3c4]">
                  {proto.desc}
                </p>
                <div className="flex w-full flex-wrap items-center gap-[8px]">
                  <p className="text-[12px] font-bold leading-normal text-[#34d4ca]">DIRECTION:</p>
                  <p className="font-inter text-[13px] font-normal leading-normal text-white">
                    {proto.direction}
                  </p>
                </div>
                <div className="flex w-full flex-col items-start gap-[10px] border-t border-solid border-[#232b3a] pt-[16px]">
                  <p className="whitespace-nowrap text-[12px] font-bold leading-normal tracking-[1px] text-[#aab3c4]">
                    KEY QUALIFICATIONS
                  </p>
                  {proto.quals.map((qual) => (
                    <div key={qual} className="flex w-full items-center gap-[8px]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/documentation-page/protocols/icon-check.svg"
                        alt=""
                        className="size-[14px] shrink-0"
                      />
                      <p className="flex-1 font-inter text-[13px] font-normal leading-normal text-[#aab3c4]">
                        {qual}
                      </p>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  className="flex w-full items-center rounded-[8px] border border-solid border-[#232b3a] px-[16px] py-[10px] text-[14px] font-bold leading-normal text-white transition-colors hover:bg-white/5"
                >
                  View technical profile →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
