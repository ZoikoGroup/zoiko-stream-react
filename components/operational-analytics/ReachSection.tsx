import Image from 'next/image';

const ROWS = [
  {
    image: '/images/operational-analytics/reach/row-1.png',
    title: 'Reach',
    subtitle: 'Metric Registry ID: METRIC-REACH-v4',
    desc: 'Validated counted unit of observation as verified by system governance.',
  },
  {
    image: '/images/operational-analytics/reach/row-2.png',
    title: 'Playback Starts',
    subtitle: 'Count with explicit click-to-play event criteria',
    desc: 'Counted attempts where the player officially requests the manifest.',
  },
  {
    image: '/images/operational-analytics/reach/row-3.png',
    title: 'Views / Sessions',
    subtitle: 'Sessionized within standard 30-minute interval windows',
    desc: 'Aggregated views mapped to a shared delivery session path.',
  },
  {
    image: '/images/operational-analytics/reach/row-4.png',
    title: 'Authenticated Accounts',
    subtitle: 'SSO validated user accounts',
    desc: 'Account-level integration mapping where access controls are strictly validated.',
  },
  {
    image: '/images/operational-analytics/reach/row-5.png',
    title: 'Watch Time Duration',
    subtitle: 'Elapsed vs playing seconds metrics',
    desc: 'Distinguishes active playback duration from buffering or pause states.',
  },
  {
    image: '/images/operational-analytics/reach/row-6.png',
    title: 'Concurrent Telemetry',
    subtitle: 'Verified real-time active connections',
    desc: 'Audited playback metrics reporting on-demand viewer heartbeats.',
  },
];

export default function ReachSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0d14] px-6 py-20 md:px-12 xl:px-[112px] xl:py-[120px]">
      {/* Background image + overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/operational-analytics/reach/section-bg.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(10,13,20,0.64)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="text-[30px] font-bold leading-[1.2] text-white md:text-[38px] md:leading-[48px]">
            Reach and audience activity
          </h2>
          <p className="font-inter text-[16px] font-normal leading-[28px] text-[#aab3c4] md:text-[18px]">
            Playback starts, sessions, watch activity with explicit semantics — no automatic unique-person claim.
          </p>
        </div>

        <div className="flex w-full flex-col items-start gap-[16px]">
          {ROWS.map((row) => (
            <div
              key={row.title}
              className="flex w-full items-center gap-[24px] rounded-[12px] border border-solid border-[#232b3a] bg-[#162235] p-[20px]"
            >
              <div className="relative h-[70px] w-[100px] shrink-0 overflow-hidden rounded-[6px]">
                <Image src={row.image} alt="" fill className="object-cover" />
              </div>
              <div className="flex min-w-px flex-1 flex-col items-start gap-[4px]">
                <p className="text-[18px] font-bold text-white">{row.title}</p>
                <p className="font-inter text-[13px] font-normal text-[#34d4ca]">{row.subtitle}</p>
                <p className="font-inter text-[13px] font-normal text-[#aab3c4]">{row.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
