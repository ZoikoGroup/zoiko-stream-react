import Image from 'next/image';

const QUESTIONS = [
  {
    image: '/images/operational-analytics/questions/card-1.png',
    title: '1. Did the stream operate as expected?',
    reveals: 'State history, incident timelines, and recovery trajectories.',
    mustNot: 'Unverified absolute SLA compliance claims.',
  },
  {
    image: '/images/operational-analytics/questions/card-2.png',
    title: '2. Did playback work for viewers?',
    reveals: 'Real-time playback success rates, startup times, and system error logs.',
    mustNot: 'An assumption that every viewer had an identical network path.',
  },
  {
    image: '/images/operational-analytics/questions/card-3.png',
    title: '3. What did we reach?',
    reveals: 'Strictly counted and verified units of observation like connection starts.',
    mustNot: "A count of 'unique people' without a verified matching method.",
  },
  {
    image: '/images/operational-analytics/questions/card-4.png',
    title: '4. Did access controls work?',
    reveals: 'Aggregate counts of authorization success, denial, and credential status.',
    mustNot: 'Identifiable specific user records or private credentials.',
  },
  {
    image: '/images/operational-analytics/questions/card-5.png',
    title: '5. Where did problems concentrate?',
    reveals: 'Coarse regional and device dimensions to narrow troubleshooting.',
    mustNot: 'Direct, singular causal diagnosis without pipeline telemetry.',
  },
  {
    image: '/images/operational-analytics/questions/card-6.png',
    title: '6. What happened after live?',
    reveals: 'Detailed recording processing states, storage locking, and transcription status.',
    mustNot: 'Automatic public replay publication without authorization gates.',
  },
];

export default function QuestionsSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#e1e6eb] bg-white px-6 py-20 md:px-12 xl:px-[112px] xl:py-[100px]">
      {/* Topographic background */}
      <Image
        src="/images/operational-analytics/questions/section-bg.png"
        alt=""
        fill
        className="pointer-events-none object-cover"
      />
      {/* Decorative blobs */}
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src="/images/operational-analytics/questions/bg-blob-1.svg"
        alt=""
        className="pointer-events-none absolute left-[-177px] top-[-61px] size-[420px]"
      />
      <img
        src="/images/operational-analytics/questions/bg-blob-2.svg"
        alt=""
        className="pointer-events-none absolute bottom-[-223px] right-[-124px] size-[520px]"
      />
      {/* eslint-enable @next/next/no-img-element */}

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="text-[30px] font-bold leading-[1.2] text-[#0a0f1a] md:text-[38px] md:leading-[48px]">
            What operational analytics should answer
          </h2>
          <p className="font-inter text-[16px] font-normal leading-[28px] text-[#4f5e74] md:text-[18px]">
            Seven questions every operator, developer, and event owner needs evidence for.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-2 xl:grid-cols-3">
          {QUESTIONS.map((q) => (
            <div
              key={q.title}
              className="flex flex-col items-start gap-[16px] rounded-[12px] border border-solid border-[#e1e6eb] bg-[#f8fafc] p-[24px]"
            >
              <div className="relative h-[130px] w-full shrink-0 overflow-hidden rounded-[8px]">
                <Image src={q.image} alt="" fill className="object-cover" />
              </div>
              <h3 className="text-[18px] font-bold text-[#0a0f1a]">{q.title}</h3>
              <div className="flex w-full flex-col items-start gap-[8px] font-inter text-[13px] font-normal leading-normal text-[#4f5e74]">
                <p>
                  <span className="font-bold text-[#0a0f1a]">REVEALS: </span>
                  {q.reveals}
                </p>
                <p>
                  <span className="font-bold text-[#4a8cfb]">MUST NOT IMPLY: </span>
                  {q.mustNot}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
