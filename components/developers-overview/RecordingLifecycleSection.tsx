import Image from 'next/image';

const STEPS = [
  { num: '01', label: 'Capture', desc: 'Lossless raw input acquisition at the edge.' },
  { num: '02', label: 'Recording', desc: 'Deterministic stream segmentation and write operations.' },
  { num: '03', label: 'Asset Registry', desc: 'Indexation with secure attributes and metadata.' },
  { num: '04', label: 'Processing', desc: 'Transcoding, AI transcription, and subtitle assembly.' },
  { num: '05', label: 'Access / Replay', desc: 'SSO-verified secure browser delivery paths.' },
  { num: '06', label: 'Lifecycle', desc: 'Immutable long-term compliance storage lock.' },
];

export default function RecordingLifecycleSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#e1e6eb] bg-white px-6 py-20 md:px-12 xl:px-[112px] xl:py-[120px]">
      {/* Topographic background */}
      <Image
        src="/images/developers-overview/recording-lifecycle/section-bg.png"
        alt=""
        fill
        className="pointer-events-none object-cover"
      />
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src="/images/developers-overview/recording-lifecycle/bg-blob-1.svg"
        alt=""
        className="pointer-events-none absolute left-[-171px] top-[-12px] size-[420px]"
      />
      <img
        src="/images/developers-overview/recording-lifecycle/bg-blob-2.svg"
        alt=""
        className="pointer-events-none absolute bottom-[-257px] right-[-134px] size-[520px]"
      />
      {/* eslint-enable @next/next/no-img-element */}

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="text-[30px] font-bold leading-[1.2] text-[#0a0f1a] md:text-[38px] md:leading-[48px]">
            Recording, Assets &amp; Replay Lifecycle
          </h2>
          <p className="text-[16px] font-normal leading-[28px] text-[#4f5e74] md:text-[18px]">
            A recording is not automatically a replay. Follow the explicit phases from live stream
            contribution to cold backup.
          </p>
        </div>

        {/* Lifecycle stepper */}
        <div className="flex w-full flex-col items-stretch md:flex-row md:items-start">
          {STEPS.map((step, i) => (
            <div key={step.num} className="flex flex-col items-center md:flex-1 md:flex-row md:items-start">
              <div className="flex w-full flex-col items-center gap-[12px] md:flex-1">
                <div className="flex size-[48px] items-center justify-center rounded-full border-2 border-solid border-[#4f5e74] bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb]">
                  <span className="text-[14px] font-bold text-white">{step.num}</span>
                </div>
                <p className="whitespace-nowrap text-center text-[15px] font-bold text-[#0a0f1a]">
                  {step.label}
                </p>
                <p className="max-w-[180px] text-center font-inter text-[12px] font-normal leading-[18px] text-[#4f5e74]">
                  {step.desc}
                </p>
              </div>
              {i < STEPS.length - 1 && (
                <div className="my-[8px] h-[24px] w-[2px] shrink-0 self-center bg-[#e1e6eb] md:my-0 md:mt-[23px] md:h-[2px] md:w-auto md:flex-1 md:self-start" />
              )}
            </div>
          ))}
        </div>

        <div className="flex w-full items-start justify-center">
          <button
            type="button"
            className="flex items-center justify-center whitespace-nowrap rounded-[8px] bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] px-[28px] py-[14px] text-[15px] font-bold text-[#0a0d14] transition-opacity hover:opacity-90"
          >
            Read Archival Spec
          </button>
        </div>
      </div>
    </section>
  );
}
