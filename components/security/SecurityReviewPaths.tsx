import React from 'react';

export default function SecurityReviewPaths() {
  const reviewPaths = [
    {
      title: 'Architecture & Developer Docs',
      description: 'Technical implementation, endpoint security, and SDK sandboxing.',
      linkText: 'Explore',
      imageSrc: '/images/security/developerdocs.png',
    },
    {
      title: 'Trust Center',
      description: 'Governed evidence inventory, SOC 2 requests, and audit logs.',
      linkText: 'Explore',
      imageSrc: '/images/security/trustcenter.png',
    },
    {
      title: 'Compliance',
      description: 'Detailed overview of frameworks, regulatory holds, and audits.',
      linkText: 'Explore',
      imageSrc: '/images/security/compilance.png',
    },
    {
      title: 'Data Protection',
      description: 'Data sovereignty, AES-256 cloud encryption, and key retention.',
      linkText: 'Explore',
      imageSrc: '/images/security/dataprotection.png',
    },
    {
      title: 'Service Reliability',
      description: 'Active-Active streaming resilience setup and edge network telemetry.',
      linkText: 'Explore',
      imageSrc: '/images/security/servicereliability.png',
    },
    {
      title: 'Contact an Expert',
      description: 'Schedule an enterprise architecture and security control review.',
      linkText: 'Explore',
      imageSrc: '/images/security/contact.png',
    },
  ];

  return (
    <section className="relative w-full bg-[#060B14] py-16 md:py-24 px-6 md:px-12 lg:px-28 overflow-hidden">
      
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

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Header Section */}
        <div className="flex flex-col justify-start items-center gap-4 max-w-2xl mx-auto text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold font-['Space_Grotesk'] leading-tight md:leading-[48px]">
            Continue your security review
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-normal font-['Space_Grotesk'] leading-7">
            Choose the right path based on your intent.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {reviewPaths.map((path, index) => (
            <a 
              key={index}
              href="#"
              className="flex flex-col bg-[#11141c] rounded-xl border border-white/10 overflow-hidden group shadow-lg hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Card Image */}
              <div className="w-full aspect-[2/1] relative overflow-hidden bg-[#0A101C]/50 border-b border-white/5 shrink-0">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src={path.imageSrc} 
                  alt={`${path.title} visual representation`}
                />
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col gap-3 flex-grow">
                <h3 className="text-white text-base font-bold font-['Space_Grotesk'] line-clamp-1">
                  {path.title}
                </h3>
                
                <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-relaxed flex-grow">
                  {path.description}
                </p>
                
                <div className="text-[#00E5FF] group-hover:text-cyan-300 text-xs font-bold font-['Space_Grotesk'] inline-flex items-center gap-1.5 transition-colors mt-auto w-fit">
                  {path.linkText} 
                  <span className="group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true">&rarr;</span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
