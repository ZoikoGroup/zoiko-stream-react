import Image from 'next/image';

interface CapabilityCard {
  image: string;
  title: string;
  description: string;
}

const capabilities: CapabilityCard[] = [
  {
    image: '/images/recording-replay-archive/capabilities/decide.png',
    title: 'Decide',
    description: 'Choose live-only, recording, replay, or archive for your event.',
  },
  {
    image: '/images/recording-replay-archive/capabilities/verify-capture.png',
    title: 'Verify Capture',
    description: 'Know source, scope, owner, and state of every recording.',
  },
  {
    image: '/images/recording-replay-archive/capabilities/prepare-replay.png',
    title: 'Prepare Replay',
    description: 'Keep processing, access, and accessibility streams separate.',
  },
  {
    image: '/images/recording-replay-archive/capabilities/control-audience.png',
    title: 'Control Audience',
    description: 'Apply replay-specific authorization and expiry policies.',
  },
  {
    image: '/images/recording-replay-archive/capabilities/preserve-accessibility.png',
    title: 'Preserve Accessibility',
    description: 'Review captions, transcripts, and language options.',
  },
  {
    image: '/images/recording-replay-archive/capabilities/govern-lifecycle.png',
    title: 'Govern Lifecycle',
    description: 'Archive, retention, and export follow organizational policy.',
  },
];

export default function CapabilitiesSection() {
  return (
    <section
      className="relative w-full flex flex-col gap-8 sm:gap-10 items-start py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-28 bg-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/images/recording-replay-archive/capabilities/strip-bg.png')`,
      }}
    >
      <h2 className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl font-bold w-full">
        Capabilities
      </h2>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map((card) => (
          <div
            key={card.title}
            className="bg-white border border-gray-200 rounded-2xl shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] flex flex-col items-start overflow-hidden"
          >
            <div className="relative w-full h-[200px]">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 items-start px-5 pt-5 pb-6 w-full">
              <p className="text-gray-900 text-xl font-bold">{card.title}</p>
              <p className="text-gray-500 text-sm leading-5">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
