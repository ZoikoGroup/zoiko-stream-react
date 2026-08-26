import Image from 'next/image';

const TABS = [
  { label: 'JavaScript (Node.js)', active: true },
  { label: 'Python', active: false },
  { label: 'Go', active: false },
  { label: 'Ruby', active: false },
];

const COLORS: Record<string, string> = {
  kw: '#f43f5e',
  base: '#aab3c4',
  str: '#10b981',
  cmt: '#60a5fa',
};

type Token = { t: string; c: keyof typeof COLORS };

const CODE_LINES: Token[][] = [
  [
    { t: 'const ', c: 'kw' },
    { t: 'ZoikoStream = require(', c: 'base' },
    { t: "'@zoiko/stream-sdk'", c: 'str' },
    { t: ');', c: 'base' },
  ],
  [
    { t: 'const ', c: 'kw' },
    { t: 'client = ', c: 'base' },
    { t: 'new ', c: 'kw' },
    { t: 'ZoikoStream.Client({ apiKey: process.env.ZOIKO_API_KEY });', c: 'base' },
  ],
  [],
  [{ t: '// Initialize live ingest pipeline with secure dual path routing', c: 'cmt' }],
  [
    { t: 'const ', c: 'kw' },
    { t: 'stream = ', c: 'base' },
    { t: 'await ', c: 'kw' },
    { t: 'client.streams.create({', c: 'base' },
  ],
  [
    { t: '  name: ', c: 'base' },
    { t: '"Interactive Product Launch Q1"', c: 'str' },
    { t: ',', c: 'base' },
  ],
  [
    { t: '  ingestProtocol: ', c: 'base' },
    { t: '"SRT"', c: 'str' },
    { t: ',', c: 'base' },
  ],
  [
    { t: '  resilience: ', c: 'base' },
    { t: '"active-active"', c: 'str' },
    { t: ',', c: 'base' },
  ],
  [
    { t: '  authMode: ', c: 'base' },
    { t: '"token-gated"', c: 'str' },
  ],
  [{ t: '});', c: 'base' }],
];

const REPOS = [
  {
    img: 'repo-0.png',
    title: 'React Native Live Broadcaster',
    desc: 'A pre-configured live broadcaster mobile application showing codec parameters setup.',
    tech: 'iOS & Android WHIP/WebRTC',
  },
  {
    img: 'repo-1.png',
    title: 'Enterprise SAML Stream Portal',
    desc: 'A React/Next.js dashboard project with complete authentication token gating workflow.',
    tech: 'Next.js & SAML SSO',
  },
  {
    img: 'repo-2.png',
    title: 'Automated Archiving Pipeline',
    desc: 'A Node.js server setup with event webhook hooks mapping streams directly to cold S3 vaults.',
    tech: 'Node.js & S3 Storage',
  },
];

export default function CodeExamplesSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#e1e6eb] bg-white px-6 py-20 md:px-12 xl:px-[112px] xl:py-[120px]">
      {/* Topographic background */}
      <Image
        src="/images/documentation-page/code-examples/section-bg.png"
        alt=""
        fill
        className="pointer-events-none object-cover"
      />
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src="/images/documentation-page/code-examples/bg-blob-1.svg"
        alt=""
        className="pointer-events-none absolute left-[-169px] top-[19px] size-[420px]"
      />
      <img
        src="/images/documentation-page/code-examples/bg-blob-2.svg"
        alt=""
        className="pointer-events-none absolute bottom-[-80px] right-[-124px] size-[520px]"
      />
      {/* eslint-enable @next/next/no-img-element */}

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="w-full text-[30px] font-bold leading-[1.2] text-[#0f1b2d] md:text-[38px] md:leading-[48px]">
            Examples Are Only Useful When You Can Tell What They Apply To
          </h2>
          <p className="w-full font-inter text-[16px] font-normal leading-normal text-[#4f5e74] md:text-[18px]">
            Integrate seamlessly with fully typed, copyable snippets matching your production
            architecture specifications.
          </p>
        </div>

        {/* Language tabs */}
        <div className="flex w-full flex-wrap items-start gap-[8px]">
          {TABS.map((tab) => (
            <span
              key={tab.label}
              className={`flex items-start whitespace-nowrap rounded-[20px] px-[16px] py-[8px] text-[12px] font-bold leading-normal ${
                tab.active
                  ? 'bg-[#4a8cfb] text-white'
                  : 'border border-solid border-[#e1e6eb] bg-[#f8fafc] text-[#4f5e74]'
              }`}
            >
              {tab.label}
            </span>
          ))}
        </div>

        {/* Code block */}
        <div className="flex w-full flex-col items-start gap-[20px] rounded-[12px] border border-solid border-[#232b3a] bg-[#0a0d14] p-[24px]">
          <div className="flex w-full flex-wrap items-center justify-between gap-[12px]">
            <div className="flex flex-wrap items-center gap-[8px]">
              <p className="whitespace-nowrap text-[12px] font-bold leading-normal text-[#34d4ca]">
                INGEST_PIPELINE.JS
              </p>
              <p className="font-inter text-[12px] font-normal leading-normal text-[#707a8c]">
                · v2.4.1 (Latest) · Verified 2026-02-15
              </p>
            </div>
            <button
              type="button"
              className="flex shrink-0 items-center rounded-[6px] border border-solid border-[#232b3a] bg-[#162235] px-[12px] py-[6px] text-[11px] font-bold leading-normal text-white transition-colors hover:bg-[#1c2a40]"
            >
              COPY CODE
            </button>
          </div>
          <div className="h-0 w-full border-t border-solid border-[#232b3a]" />
          <div className="flex w-full flex-col items-start gap-[6px] overflow-x-auto">
            {CODE_LINES.map((line, i) => (
              <p
                key={i}
                className="whitespace-pre text-[13px] leading-[20px]"
                style={{ color: COLORS.base }}
              >
                {line.length === 0
                  ? ' '
                  : line.map((tok, j) => (
                      <span key={j} style={{ color: COLORS[tok.c] }}>
                        {tok.t}
                      </span>
                    ))}
              </p>
            ))}
          </div>
        </div>

        {/* Sample repositories */}
        <div className="flex w-full flex-col items-start gap-[24px]">
          <p className="text-[18px] font-bold leading-normal text-[#0f1b2d]">
            Production-Ready Sample Repositories
          </p>
          <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-3">
            {REPOS.map((repo) => (
              <div
                key={repo.title}
                className="flex flex-col items-start overflow-hidden rounded-[12px] border border-solid border-[#e1e6eb] bg-[#f8fafc]"
              >
                <div className="relative h-[160px] w-full">
                  <Image
                    src={`/images/documentation-page/code-examples/${repo.img}`}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex w-full flex-col items-start gap-[12px] p-[24px]">
                  <p className="w-full text-[18px] font-bold leading-normal text-[#0f1b2d]">
                    {repo.title}
                  </p>
                  <p className="w-full font-inter text-[13px] font-normal leading-normal text-[#4f5e74]">
                    {repo.desc}
                  </p>
                  <div className="h-0 w-full border-t border-solid border-[#e1e6eb]" />
                  <div className="flex w-full items-center justify-between gap-[8px]">
                    <p className="text-[11px] font-bold leading-normal text-[#4a8cfb]">{repo.tech}</p>
                    <p className="whitespace-nowrap font-inter text-[12px] font-bold leading-normal text-[#0f1b2d]">
                      CLONE REPO →
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button
          type="button"
          className="flex items-center justify-center whitespace-nowrap rounded-[8px] bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] px-[28px] py-[14px] text-[15px] font-bold text-[#0a0f1a] transition-opacity hover:opacity-90"
        >
          Open Sample Applications
        </button>
      </div>
    </section>
  );
}
