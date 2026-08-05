import React from 'react';

// --- DATA DEFINITIONS ---

const LEADERSHIP_TEAM = [
  {
    name: 'Rohit Malhotra',
    role: 'Chief Executive Officer',
    image: '/images/about-us/Rohit Malhotra - CEO.png',
  },
  {
    name: 'Anita Iyer',
    role: 'Chief Product Officer',
    image: '/images/about-us/Anita Iyer - CPO.png',
  },
  {
    name: 'Jason Lee',
    role: 'Chief Technology Officer',
    image: '/images/about-us/Jason Lee - CTO.png',
  },
  {
    name: 'David Park',
    role: 'Chief Revenue Officer',
    image: '/images/about-us/David Park - CRO.png',
  },
];

// --- COMPONENT ---

export default function LeadershipSection() {
  return (
    <section className="w-full bg-neutral-950 py-16 sm:py-24 px-6 sm:px-10 lg:px-20   text-white">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12 sm:gap-16">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center max-w-[700px] gap-3">
          <span className="text-teal-400 text-base font-normal uppercase tracking-widest  ">
            LEADERSHIP
          </span>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-4xl  leading-tight  ">
            Experienced leaders. Unified vision.
          </h2>
          <p className="text-neutral-300 text-base font-normal leading-relaxed pt-1">
            Our leadership team brings decades of experience in media, cloud, and enterprise technology.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {LEADERSHIP_TEAM.map((member, idx) => (
            <div key={idx} className="flex flex-col gap-4 group">
              
              {/* Image Container with Hover Action */}
              <div className="relative w-full aspect-square bg-neutral-800 rounded-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Social Icon Overlay Action */}
                
              </div>

              {/* Name & Role */}
              <div className="flex flex-col">
                <h3 className="text-white text-lg font-bold   leading-snug">
                  {member.name}
                </h3>
                <p className="text-neutral-300 text-sm font-normal   leading-snug">
                  {member.role}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}