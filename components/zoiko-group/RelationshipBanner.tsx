'use client';

export default function RelationshipBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-zinc-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_20%,_rgba(45,212,191,0.2),_transparent_55%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-16 sm:px-10 lg:flex-row lg:gap-16 lg:px-8 lg:py-20">
        {/* Image */}
        <div className="w-full lg:w-[42%]">
          <img
            src="/images/zoiko-group/relationship-puzzle.png"
            alt="Two people joining puzzle pieces across a desk"
            className="h-full w-full rounded-[10px] object-cover"
          />
        </div>

        {/* Copy */}
        <div className="flex w-full flex-col lg:w-[58%]">
          <h2 className="text-xl font-bold leading-9 text-white sm:text-2xl">
            What is Zoiko Group, in relation to ZoikoStream?
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white">
            Zoiko Group is the parent organization behind ZoikoStream. ZoikoStream is
            built within Zoiko Tech and operates as part of the broader Zoiko
            technology portfolio. The applicable service terms, order form, or
            agreement remain authoritative for the legal entity providing a
            particular customer service.
          </p>

          <p className="mt-6 text-sm italic leading-6 text-white/90">
            This relationship is explained in more detail on the Operating Context
            page.
          </p>
        </div>
      </div>
    </section>
  );
}
