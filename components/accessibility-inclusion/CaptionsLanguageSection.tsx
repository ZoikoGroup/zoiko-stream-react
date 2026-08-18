type LanguageState = 'Targeted' | 'Pending' | 'Pass' | 'Flagged';

interface LanguageRow {
  label: string;
  state: LanguageState;
}

interface MediaCard {
  title: string;
  description: string;
  image: string;
}

const languageRows: LanguageRow[] = [
  { label: 'Captioning needed', state: 'Targeted' },
  { label: 'Planned Streams', state: 'Pending' },
  { label: 'Verified Feeds', state: 'Pass' },
  { label: 'Known Limitations', state: 'Flagged' },
];

const mediaCards: MediaCard[] = [
  {
    title: 'Audio Description',
    description: 'Parallel audio tracks explaining key visual actions.',
    image: '/images/accessibility-inclusion/card-audio-description.png',
  },
  {
    title: 'Sign Language Overlay',
    description: 'Dedicated picture-in-picture signer streams.',
    image: '/images/accessibility-inclusion/card-sign-language.png',
  },
  {
    title: 'Live Transcripts',
    description: 'Real-time scrollable and searchable event scripts.',
    image: '/images/accessibility-inclusion/card-live-transcripts.png',
  },
  {
    title: 'Terminology Support',
    description: 'Contextual jargon and acronym definitions sidebar.',
    image: '/images/accessibility-inclusion/card-terminology.png',
  },
];

const stateStyles: Record<LanguageState, string> = {
  Targeted: 'bg-blue-900/10 outline-blue-500 text-blue-500',
  Pending: 'bg-amber-900/10 outline-amber-600 text-amber-600',
  Pass: 'bg-emerald-900/10 outline-emerald-600 text-emerald-600',
  Flagged: 'bg-red-500/10 outline-red-500 text-red-500',
};

export default function CaptionsLanguageSection() {
  return (
    <section
      className="w-full bg-neutral-900 bg-cover bg-center px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10 lg:gap-14"
      style={{
        backgroundImage: `linear-gradient(rgba(3, 7, 18, 0.15), rgba(3, 7, 18, 0.15)), url('/images/accessibility-inclusion/captions-bg.png')`,
      }}
    >
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-4">
        <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold leading-tight">
          Captions are one part of a broader accessible experience
        </h2>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Caption and language planning connects directly to the core of your event&apos;s
          architectural roadmap.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl flex flex-col lg:flex-row items-start gap-6 lg:gap-10">
        <div className="w-full lg:w-[500px] shrink-0 p-6 bg-gray-900/90 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col gap-4">
          <h3 className="text-slate-100 text-base font-bold">Language Requirement States</h3>
          {languageRows.map((row) => (
            <div
              key={row.label}
              className="w-full p-3 bg-gray-950 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 flex justify-between items-center gap-3"
            >
              <span className="text-slate-100 text-xs">{row.label}</span>
              <span
                className={`px-2.5 py-1 rounded-full outline outline-1 outline-offset-[-1px] text-xs font-bold uppercase tracking-wide shrink-0 ${stateStyles[row.state]}`}
              >
                {row.state}
              </span>
            </div>
          ))}
        </div>

        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          {mediaCards.map((card) => (
            <article
              key={card.title}
              className="bg-gray-900/90 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 overflow-hidden flex flex-col"
            >
              <div
                className="h-24 w-full bg-gray-950 bg-cover bg-center"
                style={{ backgroundImage: `url('${card.image}')` }}
                role="presentation"
              />
              <div className="p-4 flex flex-col gap-1">
                <h4 className="text-slate-100 text-sm font-bold">{card.title}</h4>
                <p className="text-slate-400 text-xs leading-4">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl pt-4 border-t border-gray-800">
        <p className="text-slate-500 text-xs">
          * Captions and language options are available only when configured and verified for the
          specific event context.
        </p>
      </div>
    </section>
  );
}
