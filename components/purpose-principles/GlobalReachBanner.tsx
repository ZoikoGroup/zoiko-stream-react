'use client';

export default function GlobalReachBanner() {
  return (
    <section className="relative w-full overflow-hidden">
      <img
        src="/images/purpose-principles/global-reach-earth-at-night.png"
        alt="Earth viewed from space at night with illuminated city lights across continents"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/60 to-zinc-950/30" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-8 lg:py-24">
        <h2 className="max-w-xl text-2xl font-bold leading-tight text-slate-100 sm:text-3xl">
          Built to be dependable, wherever your audience is.
        </h2>

        <p className="mt-5 max-w-lg text-base leading-6 text-slate-400">
          Global infrastructure should increase reach and reliability — never
          obscure who&apos;s responsible when something matters.
        </p>
      </div>

      <span className="absolute bottom-2 right-4 font-mono text-[10px] leading-4 text-white/60">
        Photo: Unsplash
      </span>
    </section>
  );
}
