interface AccessibilityCard {
  icon: string;
  title: string;
  description: string;
}

const cards: AccessibilityCard[] = [
  {
    icon: '/images/private-streaming/keyboard.svg',
    title: 'Keyboard navigation',
    description:
      'Full gate and player operation without pointer interaction. Standard focus indicators preserved.',
  },
  {
    icon: '/images/private-streaming/focus.svg',
    title: 'Focus management',
    description:
      'Explicit trap and skip structures prevent modal trapping during multi-factor handshake flows.',
  },
  {
    icon: '/images/private-streaming/shield.svg',
    title: 'Authentication accessibility',
    description:
      'MFA and authentication screens conform to cognitive and physical support patterns.',
  },
  {
    icon: '/images/private-streaming/alert-triangle.svg',
    title: 'Error handling',
    description:
      'Descriptive screen reader alerts and clear instructions on failure recoverability states.',
  },
  {
    icon: '/images/private-streaming/video.svg',
    title: 'Player accessibility',
    description:
      'Captions, sign overlays, and secondary audibles are natively integrated into the private portal.',
  },
  {
    icon: '/images/private-streaming/maximize-2.svg',
    title: 'Zoom/reflow support',
    description:
      'Interfaces scale gracefully up to 400% without loss of access controls or text layout overlapping.',
  },
];

export default function AccessibilitySection() {
  return (
    <section
      className="w-full bg-zinc-950 bg-cover bg-center px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10 lg:gap-14"
      style={{
        backgroundImage: `linear-gradient(rgba(9, 9, 11, 0.3), rgba(9, 9, 11, 0.3)), url('/images/private-streaming/accessibility-bg.png')`,
      }}
    >
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-4">
        <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold leading-tight">
          The private gate does not create an inaccessible barrier.
        </h2>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Keyboard, screen reader, captions, language, and recovery &mdash; continuous through the
          private experience.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <article
            key={card.title}
            className="p-6 bg-zinc-900/80 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col gap-4"
          >
            <span className="w-9 h-9 bg-teal-400/10 rounded-lg outline outline-1 outline-offset-[-1px] outline-teal-400/25 flex justify-center items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={card.icon} alt="" aria-hidden className="w-[18px] h-[18px]" />
            </span>
            <h3 className="text-slate-100 text-base font-bold">{card.title}</h3>
            <p className="text-slate-400 text-xs leading-5">{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
