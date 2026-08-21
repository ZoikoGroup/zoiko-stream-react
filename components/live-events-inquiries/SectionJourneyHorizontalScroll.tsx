import React from 'react';

const imgBackground = "http://localhost:3845/assets/ecbe9b9defab1cb8dce5eeb89e2ea95a150f6d2b.png";
const imgBackground1 = "http://localhost:3845/assets/d4ba2e86e1876fe1bf529de236a0cfe0429bebe5.png";
const imgBackground2 = "http://localhost:3845/assets/1490182deaa4064947c6b6dd8c297f79e442e385.png";
const imgBackground3 = "http://localhost:3845/assets/a632deb0ee93e0dc0adb33d07a06076c5a76b688.png";
const imgBackground4 = "http://localhost:3845/assets/91b909cacbbf74752e00c6912730de697951b39d.png";
const imgBackground5 = "http://localhost:3845/assets/80215a83ae0d389888bcc4daa52156f63348c80b.png";

export default function SectionJourneyHorizontalScroll() {
  const cards = [
    {
      id: 1,
      image: imgBackground,
      label: '01 — DEFINE',
      title: 'Define',
      description: 'Share event purpose, timing, audience and desired experience.',
      exit: 'Exit: a planning record is created.'
    },
    {
      id: 2,
      image: imgBackground1,
      label: '02 — VALIDATE',
      title: 'Validate',
      description: 'Discuss feasibility, technical assumptions, access and production inputs.',
      exit: 'Exit: risks and assumptions understood.'
    },
    {
      id: 3,
      image: imgBackground2,
      label: '03 — ALIGN',
      title: 'Align responsibilities',
      description: 'Clarify who owns production, registration, accessibility and communications.',
      exit: 'Exit: owners are explicit.'
    },
    {
      id: 4,
      image: imgBackground3,
      label: '04 — CONFIRM',
      title: 'Confirm scope',
      description: 'Align technical design, commercial scope, trust and operational expectations.',
      exit: 'Exit: an authorized engagement exists.'
    },
    {
      id: 5,
      image: imgBackground4,
      label: '05 — PREPARE',
      title: 'Prepare',
      description: 'Rehearsal, run-of-show, access checks and go-live readiness.',
      exit: 'Exit: readiness gate passed.'
    },
    {
      id: 6,
      image: imgBackground5,
      label: '06 — LIVE & CLOSE',
      title: 'Live & close',
      description: 'Event operation, incident handling and post-event handoff.',
      exit: 'Exit: event closed; follow-up assigned.'
    }
  ];

  return (
    <div className="bg-white relative w-full pt-[80px] lg:pt-[120px] pb-[40px] flex flex-col overflow-hidden">
      
      {/* Header and Content Wrapper */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1176px] px-6 flex flex-col items-start">
          
          {/* Header */}
          <div className="w-full mb-[40px] lg:mb-[60px]">
            <div className="flex items-center gap-[8px] mb-[16px]">
              <div className="h-[6px] w-[6px] bg-[#5b8def] rounded-full" />
              <p className="font-inter font-bold text-[#5b8def] text-[12.5px] uppercase tracking-[1.25px] m-0 leading-[20px]">
                Readiness journey
              </p>
            </div>
            <h2 className="font-sans font-bold text-[#32353c] text-[28px] lg:text-[30px] tracking-[-0.3px] m-0 leading-[48px]">
              A clear path from event idea to live readiness.
            </h2>
          </div>

          {/* Horizontal Scroll Cards (One-sided bleed) */}
          <div className="w-full">
            <div 
              className="overflow-x-auto pb-[40px] snap-x snap-mandatory hide-scrollbar"
              style={{
                marginRight: 'calc(-50vw + 50%)',
                paddingRight: 'calc(50vw - 50% + 24px)'
              }}
            >
              <div className="flex gap-[20px] w-max">
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className="flex-shrink-0 w-[260px] h-[390px] bg-white border border-[#dde2ea] rounded-[14px] overflow-hidden flex flex-col snap-start transition-shadow hover:shadow-lg"
                  >
                    {/* Card Image */}
                    <div className="w-full h-[193.5px] bg-[#f1f4f8] overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="flex flex-col flex-1 p-[20px]">
                      <div className="flex flex-col gap-[4px] mb-[12px]">
                        <p className="font-sans font-bold text-[#5b8def] text-[12px] uppercase leading-[1.2] m-0">
                          {card.label}
                        </p>
                        <h3 className="font-sans font-bold text-[#32353c] text-[15.5px] tracking-[-0.155px] leading-[1.2] m-0">
                          {card.title}
                        </h3>
                      </div>
                      
                      <p className="font-inter font-normal text-[#6b7280] text-[13px] leading-[20.8px] m-0 mb-auto">
                        {card.description}
                      </p>

                      <p className="font-inter font-normal text-[#9aa1ae] text-[11.5px] leading-[18.4px] m-0 mt-[16px]">
                        {card.exit}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
