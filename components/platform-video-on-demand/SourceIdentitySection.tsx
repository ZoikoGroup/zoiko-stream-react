import Image from 'next/image';

const cards = [
  {
    image: '/images/platform-video-on-demand/Rectangle (90).png',
    title: 'Source Identity',
    description: 'Provenance verification and ingest reference checking.',
  },
  {
    image: '/images/platform-video-on-demand/Rectangle (91).png',
    title: 'Rights & Permissions',
    description: 'Check authorized usage rules, territories, and expiration terms.',
  },
  {
    image: '/images/platform-video-on-demand/Rectangle (92).png',
    title: 'Media Qualification',
    description: 'Confirm container, codec, profile, and aspect constraints.',
  },
  {
    image: '/images/platform-video-on-demand/Rectangle (93).png',
    title: 'Preparation Boundary',
    description: 'Separate assets into logical security groups.',
  },
];

const bullets = [
  'Verify stable raw origin classes.',
  'Check explicit playback restrictions and end of life.',
  'Enforce audio/video track structure validation rules.',
];

export default function SourceIdentitySection() {
  return (
    <section
      className="relative w-full px-4 sm:px-8 lg:px-28 py-16 sm:py-20 lg:py-24 bg-slate-950 border-b border-gray-800 overflow-hidden"
      style={{
        backgroundImage: `url('/images/platform-video-on-demand/GovernanceBackground.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 z-0" />

      <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-start">
        {/* Left content */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight">
            Source, identity, rights, and preparation
          </h2>
          <p className="text-slate-400 text-base font-normal leading-6">
            All on-demand video begins by mapping raw media to an approved origin. We establish strict boundaries for provenance, technical format compatibility, and explicit usage rights before processing VOD files.
          </p>
          <div className="border-t border-gray-800 w-full" />
          <div className="flex flex-col gap-3">
            {bullets.map((b) => (
              <div key={b} className="flex items-center gap-2">
                <span className="w-1 h-1 bg-teal-400 rounded-full shrink-0" />
                <span className="text-slate-100 text-sm font-normal">{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right cards */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-slate-900 rounded-xl border border-gray-800 flex flex-col overflow-hidden"
              >
                <div className="relative w-full h-24">
                  <Image src={card.image} alt={card.title} fill className="object-cover" />
                </div>
                <div className="p-4 flex flex-col gap-2">
                  <p className="text-white text-sm font-bold">{card.title}</p>
                  <p className="text-slate-500 text-xs font-normal leading-4">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
