import React from 'react';

export default function SecurityGovernance() {
  const governancePoints = [
    'Dedicated CISO-led security oversight team',
    'Bi-annual comprehensive penetration test cycles',
    'Mandatory SOC 2 Type II trust criteria alignment',
    'Automated continuous compliance auditing systems',
  ];

  const trustBoundaries = [
    {
      dotColor: 'bg-blue-500',
      title: 'Customer-Controlled Layer',
      description: 'Access keys, auth integrations, webhook targets',
    },
    {
      dotColor: 'bg-teal-500',
      title: 'ZoikoStream-Managed Layer',
      description: 'Ingest security, edge signal routing, token validation',
    },
    {
      dotColor: 'bg-slate-500',
      title: 'Third-Party Controlled Layer',
      description: 'Physical data host infrastructure, compliance storage',
    },
  ];

  return (
    <section className="w-full relative bg-[#060B14] py-20 lg:py-24 px-6 lg:px-12 flex justify-center overflow-hidden">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-[#060B14] via-transparent to-[#060B14] z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060B14] via-transparent to-[#060B14] z-10" />
        <img 
          src="/images/security/Architecture.png" 
          alt="" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16 relative z-10">
        
        {/* Left Column: Content */}
        <div className="flex-1 flex flex-col justify-start items-start gap-6 max-w-2xl w-full">
          <h2 className="text-slate-100 text-3xl md:text-4xl font-bold font-['Space_Grotesk'] leading-tight md:leading-[48px]">
            Security governance built on accountability, not assumptions
          </h2>
          
          <p className="text-slate-400 text-base font-normal font-['Space_Grotesk'] leading-6">
            We govern security with clear metrics, frequent validation gates, and auditable proof chains. Our framework ensures absolute transparent alignment between public-facing trust statements and private engineering actions.
          </p>
          
          <ul className="flex flex-col gap-3 w-full mt-2">
            {governancePoints.map((point, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-teal-500/10">
                  <svg 
                    className="w-3.5 h-3.5 text-teal-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-slate-400 text-sm font-normal font-['Space_Grotesk']">
                  {point}
                </span>
              </li>
            ))}
          </ul>
          
          <a 
            href="#" 
            className="mt-2 text-teal-500 hover:text-teal-400 text-base font-bold font-['Space_Grotesk'] underline underline-offset-4 transition-colors"
          >
            View related evidence &rarr;
          </a>
        </div>

        {/* Right Column: Trust Boundary Model Card */}
        <div className="w-full max-w-lg p-6 sm:p-8 bg-[#0B1120]/80 backdrop-blur-md rounded-2xl border border-white/10 flex flex-col justify-start items-start gap-6 shadow-2xl shrink-0">
          <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
            Trust Boundary Model
          </h3>
          
          <div className="w-full flex flex-col gap-3">
            {trustBoundaries.map((boundary, index) => (
              <div 
                key={index} 
                className="w-full p-4 bg-[#060B14]/80 rounded-lg border border-white/5 flex flex-col gap-1 hover:border-white/10 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${boundary.dotColor} shrink-0`} />
                  <h4 className="text-slate-200 text-sm font-bold font-['Space_Grotesk']">
                    {boundary.title}
                  </h4>
                </div>
                <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] pl-4 leading-relaxed">
                  {boundary.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
