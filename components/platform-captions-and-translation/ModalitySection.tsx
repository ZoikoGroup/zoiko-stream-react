import React from 'react';
import Image from 'next/image';

const modalities = [
  {
    title: 'Captions',
    description: 'Text representation of the spoken audio and acoustic sound cues in the original spoken language.',
    policy: 'Mandatory for accessibility compliance',
    image: '/images/platform-captions-and-translation/modality-card-0.png'
  },
  {
    title: 'Translated captions',
    description: 'Original language audio converted to synchronized text in a secondary target language.',
    policy: 'Requires explicit translation model license',
    image: '/images/platform-captions-and-translation/modality-card-1.png'
  },
  {
    title: 'Transcript',
    description: 'Asynchronous complete text file representing spoken content with speaker IDs, optimized for screen readers.',
    policy: 'Generated post-live via authorized transcribers',
    image: '/images/platform-captions-and-translation/modality-card-2.png'
  },
  {
    title: 'Interpretation',
    description: 'Live vocal speech replacement or sign language video overlay in the designated target language.',
    policy: 'Restricted to authorized translation pools',
    image: '/images/platform-captions-and-translation/modality-card-3.png'
  },
  {
    title: 'Alternate audio',
    description: 'Secondary, pre-packaged post-produced audio tracks mapped explicitly onto parent video timestamps.',
    policy: 'Requires multi-track player client support',
    image: '/images/platform-captions-and-translation/modality-card-4.png'
  },
  {
    title: 'Customer-supplied track',
    description: 'Externally authored WebVTT or alternate audio files pushed via API to run on the native player.',
    policy: 'Must pass checksum and format integrity verification',
    image: '/images/platform-captions-and-translation/modality-card-5.png'
  }
];

export default function ModalitySection() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[112px] py-16 lg:py-[100px] border-b border-[#e2e8f0] border-solid flex flex-col gap-[56px] items-start bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/platform-captions-and-translation/modality-bg.png" 
          alt="Modality Section Background" 
          fill 
          className="object-cover" 
          unoptimized
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        <h2 className="font-spaceGrotesk font-bold text-[#0a0d13] text-[38px] leading-[61px] tracking-[-0.38px]">
          Understand each modality
        </h2>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {modalities.map((modality, index) => (
          <div key={index} className="bg-[#f8fafc] border border-[#e2e8f0] border-solid rounded-[12px] flex flex-col items-start overflow-hidden w-full transition-transform hover:-translate-y-1 hover:shadow-md h-full">
            <div className="relative w-full h-[140px] shrink-0 border-b border-[#e2e8f0]">
              <Image 
                src={modality.image} 
                alt={modality.title} 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="flex flex-col flex-grow items-start p-[24px] w-full">
              <h3 className="font-spaceGrotesk font-bold text-[#0a0d13] text-[18px] leading-tight mb-3">
                {modality.title}
              </h3>
              <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[14px] leading-[22px] mb-6">
                {modality.description}
              </p>
              
              <div className="mt-auto w-full">
                <div className="h-[1px] w-full bg-[#e2e8f0] mb-4" />
                <div className="flex flex-wrap gap-[6px] items-center text-[11px] uppercase tracking-wide">
                  <span className="font-spaceGrotesk font-bold text-[#4a8cfb]">
                    POLICY:
                  </span>
                  <span className="font-spaceGrotesk font-medium text-[#707a8c] normal-case tracking-normal">
                    {modality.policy}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
