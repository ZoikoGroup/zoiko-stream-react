import Image from 'next/image';

const row1 = [
  {
    image: '/images/platform-video-on-demand/CardImg (13).png',
    title: 'Build on-demand video into a product',
    description: 'Programmatic VOD workflow for application and product teams.',
  },
  {
    image: '/images/platform-video-on-demand/CardImg (14).png',
    title: 'Publish an approved recording after live',
    description: 'Live-to-replay continuity for post-event content.',
  },
  {
    image: '/images/platform-video-on-demand/CardImg (15).png',
    title: 'Operate governed media at scale',
    description: 'Identity, metadata, rights, versions, readiness, and lifecycle.',
  },
  {
    image: '/images/platform-video-on-demand/CardImg (16).png',
    title: 'Deliver private or controlled playback',
    description: 'Separate asset readiness from access and playback policy.',
  },
];

const row2 = [
  {
    image: '/images/platform-video-on-demand/CardImg (17).png',
    title: 'Prepare accessible or multilingual media',
    description: 'Captions, transcripts, language tracks, and alternatives.',
  },
  {
    image: '/images/platform-video-on-demand/CardImg (18).png',
    title: 'Preserve or retire important media',
    description: 'Authorized retention, archive, export, and deletion.',
  },
  {
    image: '/images/platform-video-on-demand/CardImg (19).png',
    title: 'Plan event-specific replay',
    description: 'Managed event recording and replay requirements.',
  },
  {
    image: '/images/platform-video-on-demand/CardImg (20).png',
    title: 'Troubleshoot asset or playback state',
    description: 'Current recovery through docs, status, and support.',
  },
];

function WorkflowCard({ image, title, description }: { image: string; title: string; description: string }) {
  return (
    <div className="flex-1 bg-slate-50 rounded-2xl border border-gray-200 flex flex-col overflow-hidden">
      <div className="relative w-full h-36">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-5 flex flex-col gap-3">
        <p className="text-zinc-950 text-base font-bold line-clamp-1">{title}</p>
        <p className="text-slate-600 text-xs font-normal leading-5">{description}</p>
      </div>
    </div>
  );
}

export default function WorkflowSection() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-28 py-16 sm:py-20 lg:py-24 flex flex-col gap-14">
      <div className="flex flex-col gap-3">
        <h2 className="text-zinc-950 text-3xl sm:text-4xl font-bold leading-tight">
          Choose your on-demand workflow
        </h2>
        <p className="text-slate-600 text-lg font-normal leading-7">
          Select the path that matches your intended outcome.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {row1.map((card) => (
            <WorkflowCard key={card.title} {...card} />
          ))}
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          {row2.map((card) => (
            <WorkflowCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
