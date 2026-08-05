import React from 'react';

// --- DATA DEFINITIONS ---

const PRINCIPLES = [
  {
    id: 'customer-obsession',
    title: 'Customer Obsession',
    description: 'We start with our customers and solve real problems.',
    icon:'/images/about-us/Icon (14).svg'
  },
  {
    id: 'innovation-impact',
    title: 'Innovation with Impact',
    description: 'We build for performance, scale, and real-world impact.',
    icon:'/images/about-us/Icon (12).svg'
  },
  {
    id: 'integrity-transparency',
    title: 'Integrity & Transparency',
    description: 'We are honest, accountable, and clear in everything we do.',
    icon:'/images/about-us/Icon (10).svg'
  },
  {
    id: 'global-mindset',
    title: 'Global Mindset',
    description: 'We operate globally and serve locally.',
    icon:'/images/about-us/Icon (9).svg'
  },
  {
    id: 'security-by-design',
    title: 'Security by Design',
    description: 'Security is built in, not bolted on.',
    icon:'/images/about-us/Icon (11).svg'
  },
  {
    id: 'people-first',
    title: 'People First',
    description: 'We empower our team and celebrate diversity.',
    icon:'/images/about-us/Icon (13).svg'
  },
];

// --- COMPONENT ---

export default function OperatingPrinciplesSection() {
  return (
    <section className="w-full bg-neutral-900 border-y border-white/5 py-16 sm:py-20 px-6 sm:px-10 lg:px-20  ">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12 sm:gap-16">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-3 max-w-[576px]">
          <span className="text-teal-400 text-base font-normal uppercase tracking-widest  ">
            WHAT WE BELIEVE
          </span>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl  leading-tight  ">
            Our operating principles
          </h2>
        </div>

        {/* Principles Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {PRINCIPLES.map((item) => (
            <div key={item.id} className="flex items-start gap-5">
              
              {/* Icon Container with subtle blue outline */}
              <div className="w-12 h-12 rounded-xl outline outline-1 outline-offset-[-1px] outline-blue-500/20 bg-neutral-800/50 flex items-center justify-center shrink-0">
                <img className="w-5 h-5 " src={item.icon} />
              </div>

              {/* Text Block */}
              <div className="flex flex-col gap-1.5 pt-0.5">
                <h3 className="text-white text-base font-bold   leading-snug">
                  {item.title}
                </h3>
                <p className="text-neutral-300 text-sm font-normal   leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}