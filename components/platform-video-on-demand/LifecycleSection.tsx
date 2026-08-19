const lifecycleSteps = [
  { num: '01', label: 'UNDERSTAND' },
  { num: '02', label: 'SELECT' },
  { num: '03', label: 'REGISTER' },
  { num: '04', label: 'PREPARE' },
  { num: '05', label: 'ENRICH' },
  { num: '06', label: 'SECURE' },
  { num: '07', label: 'DELIVER' },
  { num: '08', label: 'OPERATE' },
  { num: '09', label: 'PRESERVE' },
  { num: '010', label: 'CONTINUE' },
];

const stageConfigs = [
  {
    tag: 'STAGE CONFIG 1',
    title: 'Ingest & Selection',
    question: 'How to register secure SRT/VOD paths?',
    description:
      'VOD assets undergo automated codec, track structure, and keyframe compliance checkmarks instantly.',
  },
  {
    tag: 'STAGE CONFIG 2',
    title: 'Rights & Security',
    question: 'How to apply token gates?',
    description:
      'HMAC signatures and whitelist rules separate direct asset readiness from temporary player authorization context.',
  },
  {
    tag: 'STAGE CONFIG 3',
    title: 'Delivery SLA',
    question: 'What is latency standard?',
    description:
      'Global edge CDN egress points cache secure chunks for immediate adaptive-bitrate playback response.',
  },
];

export default function LifecycleSection() {
  return (
    <section
      className="relative w-full px-4 sm:px-8 lg:px-28 py-16 sm:py-20 lg:py-24 bg-slate-950 border-b border-gray-800 flex flex-col gap-14 overflow-hidden"
      style={{
        backgroundImage: `url('/images/platform-video-on-demand/LifecycleBackground.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0  z-0" />

      <div className="relative z-10 flex flex-col gap-14">
        <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight">
          How the governed asset lifecycle works
        </h2>

        {/* Steps row */}
        <div className="flex flex-wrap gap-2">
          {lifecycleSteps.map((step) => (
            <div
              key={step.num}
              className="flex-1 min-w-[80px] p-3 bg-slate-900 rounded-lg border border-gray-800 flex flex-col gap-2"
            >
              <span className="text-teal-400 text-xs font-bold">{step.num}</span>
              <span className="text-white text-xs font-bold">{step.label}</span>
            </div>
          ))}
        </div>

        {/* Stage config cards */}
        <div className="flex flex-col lg:flex-row gap-6">
          {stageConfigs.map((cfg) => (
            <div
              key={cfg.tag}
              className="flex-1 p-6 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col gap-3"
            >
              <span className="text-teal-400 text-xs font-bold">{cfg.tag}</span>
              <p className="text-white text-base font-bold">{cfg.title}</p>
              <p className="text-slate-400 text-xs font-normal">{cfg.question}</p>
              <p className="text-slate-500 text-xs font-normal leading-5">{cfg.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
