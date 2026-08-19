import Image from 'next/image';

const row1 = [
  {
    image: '/images/platform-video-on-demand/Rectangle (98).png',
    title: 'Access Control',
    description: 'Token gating, geo-restrictions, and SAML whitelist validation.',
  },
  {
    image: '/images/platform-video-on-demand/Rectangle (99).png',
    title: 'Playback Policy',
    description: 'Set valid playback windows, domain constraints, and concurrent session limits.',
  },
  {
    image: '/images/platform-video-on-demand/Rectangle (100).png',
    title: 'Device Support',
    description: 'Enforce strict browser-level security checks and HDCP rules.',
  },
];

const row2 = [
  {
    image: '/images/platform-video-on-demand/Rectangle (101).png',
    title: 'Adaptive Delivery',
    description: 'Deliver HLS and DASH streams dynamically parsed for device.',
  },
  {
    image: '/images/platform-video-on-demand/Rectangle (102).png',
    title: 'Secure Playback',
    description: 'HMAC signed playback requests with strict validation keys.',
  },
  {
    image: '/images/platform-video-on-demand/Rectangle (103).png',
    title: 'Operational SLA',
    description: 'Globally redundant CDNs ensure uptime for high-traffic assets.',
  },
];

export default function AudienceAccessSection() {
  return (
    <section
      className="relative w-full px-4 sm:px-8 lg:px-28 py-16 sm:py-20 lg:py-24 bg-slate-950 border-b border-gray-800 flex flex-col gap-14 overflow-hidden"
      style={{
        backgroundImage: `url('/images/platform-video-on-demand/AccessBackground.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0  z-0" />

      <div className="relative z-10 flex flex-col gap-14">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight">
            Audience access and secure playback
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {row1.map((card) => (
              <div
                key={card.title}
                className="bg-slate-900 rounded-xl border border-gray-800 flex flex-col overflow-hidden"
              >
                <div className="relative w-full h-28">
                  <Image src={card.image} alt={card.title} fill className="object-cover" />
                </div>
                <div className="p-4 flex flex-col gap-2">
                  <p className="text-white text-base font-bold">{card.title}</p>
                  <p className="text-slate-500 text-xs font-normal">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {row2.map((card) => (
              <div
                key={card.title}
                className="bg-slate-900 rounded-xl border border-gray-800 flex flex-col overflow-hidden"
              >
                <div className="relative w-full h-28">
                  <Image src={card.image} alt={card.title} fill className="object-cover" />
                </div>
                <div className="p-4 flex flex-col gap-2">
                  <p className="text-white text-base font-bold">{card.title}</p>
                  <p className="text-slate-500 text-xs font-normal">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
