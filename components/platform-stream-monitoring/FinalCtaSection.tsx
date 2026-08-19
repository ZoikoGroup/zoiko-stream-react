import React from 'react';

export default function FinalCtaSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0f1a] px-6 py-24 md:px-[112px]">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/platform-stream-monitoring/final-cta-bg.png"
          alt=""
          className="absolute inset-0 h-full w-full max-w-none object-cover"
        />
        <div className="absolute inset-0 bg-[#0a0f1a]/45" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[820px] flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-bold leading-[1.2] tracking-[-0.6px] text-white md:text-[42px] md:leading-[52px]">
          Ready to understand your stream operations?
        </h2>
        <p className="text-base leading-[1.7] text-[#aab3c4] md:text-[17px]">
          See how ZoikoStream Stream monitoring helps enterprise teams operate with clarity,
          evidence, and confidence.
        </p>
        <button
          className="flex items-center justify-center rounded-[10px] px-8 py-3.5 transition-opacity hover:opacity-90"
          style={{ background: 'linear-gradient(90deg, #00d4aa 0%, #4c86ff 100%)' }}
        >
          <span className="text-[15px] font-bold text-[#04141a]">Talk to an expert</span>
        </button>
      </div>
    </section>
  );
}
