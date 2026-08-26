import Image from 'next/image';

const CARDS = [
  {
    image: '/images/operational-analytics/dimensions/card-1.png',
    title: '1. Region & Country Group',
    desc: 'Accessible table + optional map layout. Employs strictly approved geographic granularity constraints with zero raw coordinates or precise user telemetry leaks.',
  },
  {
    image: '/images/operational-analytics/dimensions/card-2.png',
    title: '2. Network / ASN / ISP',
    desc: 'Troubleshoot route issues with verified telemetry records. Exposes transport latency factors and ISP-to-edge handshakes without generating unproven blame.',
  },
  {
    image: '/images/operational-analytics/dimensions/card-3.png',
    title: '3. Device, Browser & OS',
    desc: 'Identify error clusters across approved platform families and core rendering versions. Fully complies with zero browser-fingerprinting audit standards.',
  },
  {
    image: '/images/operational-analytics/dimensions/card-4.png',
    title: '4. Player & App Context',
    desc: 'Implementation-defined player instance labels paired with client application diagnostics. Validated to prevent cross-origin state contamination.',
  },
  {
    image: '/images/operational-analytics/dimensions/card-5.png',
    title: '5. Delivery Path & Mid-Edge',
    desc: 'Isolate transport anomalies within explicit CDN boundaries. True multi-CDN failover tracing based solely on verified, active-edge handshake data.',
  },
  {
    image: '/images/operational-analytics/dimensions/card-6.png',
    title: '6. Content & Stream Type',
    desc: 'Compare performance rules over live versus recorded streams. Enforces granular metadata segmentation rules mapped to approved corporate event templates.',
  },
];

export default function DimensionsSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#232b3a] bg-[#0a0d14] px-6 py-20 md:px-12 xl:px-[112px] xl:py-[120px]">
      {/* Background image + overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/operational-analytics/dimensions/section-bg.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(15,27,45,0.68)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="text-[30px] font-bold leading-[1.2] text-white md:text-[38px] md:leading-[48px]">
            Coverage, geography, device, and delivery dimensions
          </h2>
          <p className="font-inter text-[16px] font-normal leading-[28px] text-[#aab3c4] md:text-[18px]">
            Accessible tables and bounded segment filters — coverage is evidence-bounded and small cohorts
            are protected.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-2 xl:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-start gap-[16px] rounded-[12px] border-[1.5px] border-solid border-[#232b3a] bg-[#162235] p-[24px]"
            >
              <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-[8px]">
                <Image src={card.image} alt="" fill className="object-cover" />
              </div>
              <p className="w-full text-[20px] font-bold text-white">{card.title}</p>
              <p className="w-full font-inter text-[14px] font-normal leading-[22px] text-[#aab3c4]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Small-cohort protection callout */}
        <div className="flex w-full items-center gap-[16px] rounded-[12px] border border-solid border-[#4a8cfb] bg-[#162235] p-[24px]">
          <span className="size-[12px] shrink-0 rounded-full bg-[#4a8cfb]" />
          <div className="flex min-w-px flex-1 flex-col items-start gap-[4px]">
            <p className="text-[15px] font-bold text-white">SMALL-COHORT PROTECTION ACTIVED</p>
            <p className="font-inter text-[13px] font-normal text-[#aab3c4]">
              To protect viewer identity, dimension filters auto-suppress segmentation views with less than
              50 verified connection starts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
