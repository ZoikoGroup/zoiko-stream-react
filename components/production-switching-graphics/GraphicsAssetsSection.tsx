interface AssetCard {
  title: string;
  meta: string;
  status: 'APPROVED' | 'UNDER REVIEW';
  accessibility: string;
  cue: string;
  image: string;
}

const assets: AssetCard[] = [
  {
    title: 'LowerThird — Lead Speaker',
    meta: 'Overlay Graphic · v2.1',
    status: 'APPROVED',
    accessibility: 'High Contrast AAA',
    cue: 'Cue 12 — Introduction',
    image: '/images/production-switching-graphics/asset-lower-third.png',
  },
  {
    title: 'Keynote Slides Deck',
    meta: 'PDF Presentation · v4.0',
    status: 'UNDER REVIEW',
    accessibility: 'Screen-reader Ready',
    cue: 'Cue 18 — Main Slides',
    image: '/images/production-switching-graphics/asset-keynote-slides.png',
  },
  {
    title: 'Sponsor Brand Banner Grid',
    meta: 'Full Raster Overlay · v1.2',
    status: 'APPROVED',
    accessibility: 'Alt-Text Embedded',
    cue: 'Cue 30 — Break Out',
    image: '/images/production-switching-graphics/asset-sponsor-banner.png',
  },
  {
    title: 'Corporate Watermark Logo',
    meta: 'SVG Transparency · v3.1',
    status: 'APPROVED',
    accessibility: 'Alpha safe area compliant',
    cue: 'Permanent Overlay',
    image: '/images/production-switching-graphics/asset-corporate-watermark.png',
  },
];

const statusStyles: Record<AssetCard['status'], string> = {
  APPROVED: 'bg-emerald-500/10 outline-emerald-500 text-emerald-600',
  'UNDER REVIEW': 'bg-orange-300/10 outline-orange-300 text-orange-500',
};

export default function GraphicsAssetsSection() {
  return (
    <section className="w-full bg-white px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="w-full lg:max-w-[720px] flex flex-col gap-4">
          <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold leading-tight">
            Keep every on-screen asset current, approved, and ready for its cue.
          </h2>
          <p className="text-gray-500 text-base leading-6">
            Organize names, titles, logos, disclosures, and other approved visual content with
            version, owner, approval, cue, and accessibility state.
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {assets.map((asset) => (
          <article
            key={asset.title}
            className="p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col gap-4"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset.image}
              alt=""
              aria-hidden
              className="w-full h-32 object-cover rounded-lg border border-gray-200"
            />

            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <h3 className="text-zinc-900 text-base font-bold line-clamp-1">{asset.title}</h3>
                <span className="text-gray-400 text-xs font-mono">{asset.meta}</span>
              </div>

              <hr className="w-full border-gray-200" />

              <dl className="flex flex-col gap-2">
                <div className="w-full flex justify-between items-center gap-2">
                  <dt className="text-gray-500 text-xs">Status</dt>
                  <dd>
                    <span
                      className={`px-2 py-1 rounded-sm outline outline-1 outline-offset-[-1px] text-[10px] font-bold font-mono uppercase whitespace-nowrap ${statusStyles[asset.status]}`}
                    >
                      {asset.status}
                    </span>
                  </dd>
                </div>
                <div className="w-full flex justify-between items-center gap-2">
                  <dt className="text-gray-500 text-xs shrink-0">Accessibility</dt>
                  <dd className="text-zinc-900 text-xs font-medium text-right">
                    {asset.accessibility}
                  </dd>
                </div>
                <div className="w-full flex justify-between items-center gap-2">
                  <dt className="text-gray-500 text-xs shrink-0">Target Cue</dt>
                  <dd className="text-blue-500 text-xs font-mono text-right">{asset.cue}</dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
