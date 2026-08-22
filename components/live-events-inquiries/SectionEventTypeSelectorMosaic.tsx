import React from 'react';

const imgContainer = "/images/live-event-inquiries/mosaic-conference-hybrid.png";
const imgContainer1 = "/images/live-event-inquiries/mosaic-company-internal.png";
const imgContainer2 = "/images/live-event-inquiries/mosaic-product-launch.png";
const imgContainer3 = "/images/live-event-inquiries/mosaic-sports-live.png";
const imgImage3 = "/images/live-event-inquiries/mosaic-media-premiere.png";
const imgContainer4 = "/images/live-event-inquiries/mosaic-education-community.png";

export default function SectionEventTypeSelectorMosaic() {
  return (
    <div className="bg-white relative w-full px-6 lg:px-[112px] py-[80px] lg:py-[120px] flex flex-col items-center">
      <div className="w-full max-w-[1176px] flex flex-col items-start gap-[40px] lg:gap-[64px]">
        {/* Header content */}
        <div className="flex flex-col items-start gap-[16px]">
          <div className="flex items-center gap-[8px]">
            <div className="h-[6px] w-[6px] bg-[#5b8def] rounded-full" />
            <p className="font-inter font-bold text-[#5b8def] text-[12.5px] uppercase tracking-[1.25px] m-0">
              What are you planning?
            </p>
          </div>
          <h2 className="font-sans font-bold text-[#32353c] text-[28px] lg:text-[30px] tracking-[-0.3px] m-0">
            Choose the event type closest to yours.
          </h2>
          <p className="font-inter font-normal text-[#6b7280] text-[16px] leading-[25.6px] m-0">
            This classifies your inquiry — it pre-fills the form and doesn't lock you in.
          </p>
        </div>

        {/* Mosaic Photo Grid */}
        <div className="w-full flex flex-col lg:flex-row gap-[14px]">
          
          {/* Column 1 */}
          <div className="flex-1 flex flex-col gap-[14px]">
            {/* Card 1 */}
            <div className="relative w-full h-[300px] lg:h-[478px] rounded-[14px] overflow-hidden group cursor-pointer">
              <img alt="Conference & hybrid event" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={imgContainer} />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,23,30,0.85)] via-[rgba(20,23,30,0.15)] via-55% to-transparent to-80%" />
              <div className="absolute inset-x-[16px] bottom-[16px] flex flex-col gap-[8px]">
                <h3 className="font-sans font-bold text-white text-[14.5px] tracking-[-0.145px] m-0 leading-[1.2]">
                  Conference & hybrid event
                </h3>
                <p className="font-inter font-normal text-[#d8dbe0] text-[11.5px] m-0 leading-[1.2]">
                  Summit, keynote or multi-session hybrid
                </p>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex-1 flex flex-col gap-[14px]">
            {/* Card 2 */}
            <div className="relative w-full h-[300px] lg:h-[314px] rounded-[14px] overflow-hidden group cursor-pointer">
              <img alt="Company & internal comms" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={imgContainer1} />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,23,30,0.85)] via-[rgba(20,23,30,0.15)] via-55% to-transparent to-80%" />
              <div className="absolute inset-x-[16px] bottom-[16px] flex flex-col gap-[8px]">
                <h3 className="font-sans font-bold text-white text-[14.5px] tracking-[-0.145px] m-0 leading-[1.2]">
                  Company & internal comms
                </h3>
                <p className="font-inter font-normal text-[#d8dbe0] text-[11.5px] m-0 leading-[1.2]">
                  Town hall or leadership broadcast
                </p>
              </div>
            </div>
            {/* Card 5 */}
            <div className="relative w-full h-[300px] lg:h-[314px] rounded-[14px] overflow-hidden group cursor-pointer">
              <img alt="Media & premiere" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={imgImage3} />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,23,30,0.85)] via-[rgba(20,23,30,0.15)] via-55% to-transparent to-80%" />
              <div className="absolute inset-x-[16px] bottom-[16px] flex flex-col gap-[8px]">
                <h3 className="font-sans font-bold text-white text-[14.5px] tracking-[-0.145px] m-0 leading-[1.2]">
                  Media & premiere
                </h3>
                <p className="font-inter font-normal text-[#d8dbe0] text-[11.5px] m-0 leading-[1.2]">
                  Premiere or media program
                </p>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex-1 flex flex-col gap-[14px]">
            {/* Card 3 */}
            <div className="relative w-full h-[300px] lg:h-[314px] rounded-[14px] overflow-hidden group cursor-pointer">
              <img alt="Product launch" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={imgContainer2} />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,23,30,0.85)] via-[rgba(20,23,30,0.15)] via-55% to-transparent to-80%" />
              <div className="absolute inset-x-[16px] bottom-[16px] flex flex-col gap-[8px]">
                <h3 className="font-sans font-bold text-white text-[14.5px] tracking-[-0.145px] m-0 leading-[1.2]">
                  Product launch
                </h3>
                <p className="font-inter font-normal text-[#d8dbe0] text-[11.5px] m-0 leading-[1.2]">
                  Public launch or announcement
                </p>
              </div>
            </div>
            {/* Card 6 */}
            <div className="relative w-full h-[300px] lg:h-[314px] rounded-[14px] overflow-hidden group cursor-pointer">
              <img alt="Education & community" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={imgContainer4} />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,23,30,0.85)] via-[rgba(20,23,30,0.15)] via-55% to-transparent to-80%" />
              <div className="absolute inset-x-[16px] bottom-[16px] flex flex-col gap-[8px]">
                <h3 className="font-sans font-bold text-white text-[14.5px] tracking-[-0.145px] m-0 leading-[1.2]">
                  Education & community
                </h3>
                <p className="font-inter font-normal text-[#d8dbe0] text-[11.5px] m-0 leading-[1.2]">
                  Civic or nonprofit programming
                </p>
              </div>
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex-1 flex flex-col gap-[14px]">
            {/* Card 4 */}
            <div className="relative w-full h-[300px] lg:h-[478px] rounded-[14px] overflow-hidden group cursor-pointer">
              <img alt="Sports & live performance" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={imgContainer3} />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,23,30,0.85)] via-[rgba(20,23,30,0.15)] via-55% to-transparent to-80%" />
              <div className="absolute inset-x-[16px] bottom-[16px] flex flex-col gap-[8px]">
                <h3 className="font-sans font-bold text-white text-[14.5px] tracking-[-0.145px] m-0 leading-[1.2]">
                  Sports & live performance
                </h3>
                <p className="font-inter font-normal text-[#d8dbe0] text-[11.5px] m-0 leading-[1.2]">
                  Competition or live performance
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
