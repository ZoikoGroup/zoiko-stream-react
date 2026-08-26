import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#232b3a] bg-[#0a0d14] px-6 py-20 md:px-12 xl:px-[112px] xl:py-[120px]">
      {/* Background image + overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/operational-analytics/hero/hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(10,13,20,0.85)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-center gap-12 xl:flex-row xl:gap-[48px]">
        {/* Left */}
        <div className="flex min-w-px flex-1 flex-col items-start gap-8 xl:max-w-[680px] xl:gap-[32px]">
          <div className="flex items-start rounded-[100px] border border-solid border-[#34d4ca] px-[12px] py-[6px]">
            <p className="text-[11px] font-bold uppercase tracking-[1px] text-[#34d4ca]">
              OPERATIONAL ANALYTICS
            </p>
          </div>

          <h1 className="text-[36px] font-bold leading-[1.1] tracking-[-1.5px] text-white md:text-[52px] md:leading-[60px]">
            Prove reach and reliability with evidence you can inspect.
          </h1>

          <p className="font-inter text-[16px] font-normal leading-[26px] text-[#c2c2c2] md:text-[18px] md:leading-[28px]">
            Understand stream and event health, playback behavior, access outcomes, audience activity, replay
            performance, and data quality — with definitions, freshness, and limitations attached.
          </p>

          <div className="flex flex-wrap items-center gap-[16px]">
            <Link
              href="#evidence"
              className="flex items-start rounded-[8px] bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] px-[28px] py-[14px] transition-opacity hover:opacity-90"
            >
              <span className="text-[15px] font-bold text-[#0a0f1a]">Explore analytics evidence</span>
            </Link>
            <Link
              href="/talk-to-an-expert"
              className="flex items-center justify-center rounded-[8px] border-[1.5px] border-solid border-[#aab3c4] px-[28px] py-[14px] transition-colors hover:bg-white/5"
            >
              <span className="text-[15px] font-bold text-white">Talk to an expert</span>
            </Link>
          </div>
        </div>

        {/* Right visual */}
        <div className="flex w-full flex-col items-start gap-[20px] overflow-clip rounded-[16px] border-[1.5px] border-solid border-[#232b3a] bg-[rgba(16,21,30,0.8)] p-[24px] xl:h-[520px] xl:w-[500px]">
          <div className="relative h-[220px] w-full shrink-0 overflow-hidden rounded-[12px]">
            <Image
              src="/images/operational-analytics/hero/dashboard-mockup.png"
              alt="Operations center dashboard preview"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex w-full flex-col items-start gap-[12px]">
            <div className="flex w-full items-center justify-between">
              <p className="text-[14px] font-bold text-white">OPERATIONAL HEALTH PIPELINE</p>
              <div className="flex items-start rounded-[4px] border border-solid border-[#34d4ca] bg-[rgba(52,212,202,0.13)] px-[8px] py-[2px]">
                <p className="text-[10px] font-bold text-[#34d4ca]">LIVE · FRESHNESS: 2s AGO</p>
              </div>
            </div>

            <div className="flex w-full items-center gap-[12px] rounded-[8px] border border-solid border-[#232b3a] bg-[#162235] p-[12px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/operational-analytics/hero/status-dot.svg"
                alt=""
                width={10}
                height={10}
                className="shrink-0"
              />
              <div className="flex min-w-px flex-1 flex-col items-start gap-[2px]">
                <p className="text-[13px] font-bold text-white">Playback Quality Index</p>
                <p className="font-inter text-[12px] font-normal text-[#aab3c4]">
                  99.84% Stream Rebuffering Free
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col items-start gap-[8px] rounded-[8px] border border-solid border-[#232b3a] bg-[#162235] p-[12px]">
              <p className="text-[12px] font-bold text-[#4a8cfb]">INSPECTABLE EVIDENCE RECORD</p>
              <p className="font-inter text-[12px] font-normal text-[#aab3c4]">
                Verified raw telemetry packet audits linked to system telemetry schema version 4.2.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
