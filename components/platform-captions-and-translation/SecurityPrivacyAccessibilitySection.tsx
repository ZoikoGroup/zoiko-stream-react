import React from 'react';
import Image from 'next/image';

const cards = [
  {
    image: 'spa-card-0.png',
    title: 'Security',
    items: [
      'Least-privilege API access policies',
      'Secure key validation pools',
      'No corporate secrets inside active log strings'
    ]
  },
  {
    image: 'spa-card-1.png',
    title: 'Privacy',
    items: [
      'Preference logs isolated from user profile',
      'No raw translation dumps to public trackers',
      'Anonymized viewer language endpoints'
    ]
  },
  {
    image: 'spa-card-2.png',
    title: 'Accessibility',
    items: [
      'Targeted WCAG 2.2 AA performance',
      'Full screen-reader compatible structures',
      'No color-only warning states in user player'
    ]
  }
];

export default function SecurityPrivacyAccessibilitySection() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[112px] py-16 lg:py-[100px] border-b border-[#232b3a] border-solid flex flex-col gap-[56px] items-start bg-[#0a0f1a] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/platform-captions-and-translation/spa-bg.png" 
          alt="Security Privacy Accessibility Background" 
          fill 
          className="object-cover" 
          unoptimized
        />
        <div className="absolute inset-0 bg-[rgba(10,15,26,0.79)]" />
      </div>

      <div className="relative z-10 flex flex-col items-start w-full">
        <h2 className="font-spaceGrotesk font-bold text-[#eef1f6] text-[38px] leading-[61px] tracking-[-0.38px]">
          Security, privacy, and accessibility
        </h2>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-[24px]">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="bg-[#141b2d] border border-[#232b3a] border-solid rounded-[16px] flex flex-col overflow-hidden w-full transition-colors hover:border-[#34d4ca] group"
          >
            {/* Top Image Area */}
            <div className="relative w-full h-[120px] overflow-hidden">
              <Image 
                src={`/images/platform-captions-and-translation/${card.image}`}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
            </div>
            
            {/* Content Area */}
            <div className="flex flex-col gap-[16px] items-start p-[24px] w-full">
              <h3 className="font-spaceGrotesk font-bold text-[#eef1f6] text-[18px] leading-tight">
                {card.title}
              </h3>
              
              {/* Bullet Points */}
              <div className="flex flex-col gap-[12px] items-start w-full">
                {card.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex flex-row gap-[8px] items-start w-full">
                    {/* Bullet */}
                    <div className="w-[6px] h-[6px] rounded-full bg-[#34d4ca] shrink-0 mt-[7px]"></div>
                    {/* Text */}
                    <p className="font-spaceGrotesk font-normal text-[#aab3c4] text-[13px] leading-snug w-full">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
