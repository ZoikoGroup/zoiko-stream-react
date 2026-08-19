import React from 'react';

const supportCards = [
  {
    title: 'I have a general question',
    description: 'Find commercial policies, standard contracts, or general capabilities.',
    actionText: 'Email Support →',
    actionColor: 'text-[#00b895]',
    image: '/images/faqs-and-support/support-card1.png',
  },
  {
    title: 'Planning is blocked',
    description: 'Something is actively blocking your upcoming event brief submission.',
    actionText: 'Open active ticket →',
    actionColor: 'text-[#00b895]',
    image: '/images/faqs-and-support/support-card2.png',
  },
  {
    title: 'I am live right now',
    description: 'Direct connection to live operations engineers for active broadcast issues.',
    actionText: 'Urgent Hotline →',
    actionColor: 'text-[#ef4444]',
    image: '/images/faqs-and-support/support-card3.png',
  }
];

export default function SupportRouterSection() {
  return (
    <section className="relative w-full py-[80px] px-6 md:px-[112px] bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/images/faqs-and-support/support-bg.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-[40px]">
        
        <div className="flex flex-col gap-3 text-[#171b22]">
          <h2 className="font-space-grotesk font-bold text-3xl md:text-[38px] leading-tight md:leading-[60.8px] tracking-[-0.38px]">
            Still have a question?
          </h2>
          <p className="font-space-grotesk font-normal text-[16px] md:text-[18px] leading-[28.8px] text-[#171b22]">
            Select your current context so we can route you to the correct engineering or support team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {supportCards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white border border-[#e5e8ed] rounded-[16px] overflow-hidden shadow-[0px_4px_16px_rgba(0,0,0,0.08)] flex flex-col transition-transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
            >
              <div className="relative w-full h-[200px]">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
              <div className="flex flex-col gap-2.5 p-6 relative flex-1">
                <h3 className="font-space-grotesk font-bold text-[#171b22] text-[18px]">
                  {card.title}
                </h3>
                <p className="font-space-grotesk font-normal text-[#5a6478] text-[14px] leading-[22px] mb-2 flex-1">
                  {card.description}
                </p>
                <div className="pt-2">
                  <span className={`font-space-grotesk font-bold text-[14px] ${card.actionColor}`}>
                    {card.actionText}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
