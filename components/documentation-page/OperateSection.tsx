import Image from 'next/image';

const DOCS = [
  {
    img: 'card-0.png',
    title: 'Analytics API',
    desc: 'Query real-time QoE, viewers metrics & error rate data',
  },
  {
    img: 'card-1.png',
    title: 'Stream Monitoring',
    desc: 'Active live ingest telemetry, input bitrate checks',
  },
  {
    img: 'card-2.png',
    title: 'Recording & Assets',
    desc: 'Manage recorded VOD catalogs and compliance metadata',
  },
  {
    img: 'card-3.png',
    title: 'Rate Limits',
    desc: 'Inspect requests boundaries and API quota structures',
  },
  {
    img: 'card-4.png',
    title: 'Changelog',
    desc: 'Track weekly pipeline upgrades and API updates',
  },
  {
    img: 'card-5.png',
    title: 'System Status',
    desc: 'SLA metrics tracker and continuous uptime reports',
  },
];

const REVIEW = [
  {
    title: 'Bitrate Cap Configuration',
    desc: 'Enforce dynamic transcoding profiles to optimize bandwidth payload.',
  },
  {
    title: 'Geo-Fencing Policies Verification',
    desc: 'Verify target regional storage matches privacy governance limits.',
  },
  {
    title: 'Fallback Routing Testing',
    desc: 'Simulate dual active-active ingest disconnect triggers.',
  },
];

export default function OperateSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#e1e6eb] bg-white px-6 py-20 md:px-12 xl:px-[112px] xl:py-[120px]">
      {/* Topographic background */}
      <Image
        src="/images/documentation-page/operate/section-bg.png"
        alt=""
        fill
        className="pointer-events-none object-cover"
      />
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src="/images/documentation-page/operate/bg-blob-1.svg"
        alt=""
        className="pointer-events-none absolute left-[-177px] top-[-61px] size-[420px]"
      />
      <img
        src="/images/documentation-page/operate/bg-blob-2.svg"
        alt=""
        className="pointer-events-none absolute bottom-[33px] right-[-124px] size-[520px]"
      />
      {/* eslint-enable @next/next/no-img-element */}

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="w-full text-[30px] font-bold leading-[1.2] text-[#0f1b2d] md:text-[38px] md:leading-[48px]">
            Shipping Playback Is Not the End of the Integration
          </h2>
          <p className="w-full font-inter text-[16px] font-normal leading-normal text-[#4f5e74] md:text-[18px]">
            Manage, observe, and sustain your video pipeline using programmatic endpoints and real-time
            telemetry analytics.
          </p>
        </div>

        <div className="flex w-full flex-col items-start gap-[40px] xl:flex-row">
          {/* Docs grid */}
          <div className="grid min-w-px flex-1 grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
            {DOCS.map((doc) => (
              <div
                key={doc.title}
                className="flex flex-col items-start gap-[16px] rounded-[12px] border border-solid border-[#e1e6eb] bg-[#f8fafc] p-[20px]"
              >
                <div className="relative h-[90px] w-full overflow-hidden rounded-[6px]">
                  <Image src={`/images/documentation-page/operate/${doc.img}`} alt="" fill className="object-cover" />
                </div>
                <div className="flex w-full flex-col items-start gap-[6px]">
                  <p className="text-[16px] font-bold leading-normal text-[#0f1b2d]">{doc.title}</p>
                  <p className="w-full font-inter text-[12px] font-normal leading-[18px] text-[#4f5e74]">
                    {doc.desc}
                  </p>
                </div>
                <div className="flex w-full items-center border-t border-solid border-[#e1e6eb] pt-[8px]">
                  <p className="text-[11px] font-bold leading-normal text-[#4a8cfb]">VERIFIED TELEMETRY</p>
                </div>
              </div>
            ))}
          </div>

          {/* Production readiness review */}
          <div className="flex w-full flex-col items-start gap-[24px] rounded-[16px] border-[1.5px] border-solid border-[#e1e6eb] bg-[#f8fafc] p-[32px] xl:w-[400px] xl:shrink-0">
            <p className="text-[18px] font-bold leading-normal text-[#0f1b2d]">Production Readiness Review</p>
            <div className="flex w-full flex-col items-start gap-[16px]">
              {REVIEW.map((item) => (
                <div key={item.title} className="flex w-full flex-col items-start gap-[6px]">
                  <div className="flex items-center gap-[8px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/documentation-page/operate/icon-check.svg"
                      alt=""
                      className="size-[16px] shrink-0"
                    />
                    <p className="text-[14px] font-bold leading-normal text-[#0f1b2d]">{item.title}</p>
                  </div>
                  <p className="w-full font-inter text-[13px] font-normal leading-[18px] text-[#4f5e74]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="h-0 w-full border-t border-solid border-[#e1e6eb]" />
            <p className="w-full font-inter text-[12px] font-normal leading-normal text-[#4f5e74]">
              Review completed before promoting client integration keys to production grade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
