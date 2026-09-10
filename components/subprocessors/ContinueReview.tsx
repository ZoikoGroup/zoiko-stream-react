import React from 'react';

export default function ContinueReview() {
  const reviewResources = [
    {
      title: 'Trust Center',
      description: 'Our cross-domain evidence hub housing SOC 2 reports, system architecture audits, and active security status updates.',
      imageSrc: '/images/subprocessors/updates.png',
      link: '#',
    },
    {
      title: 'Data Protection',
      description: 'Deep-dive guidelines covering GDPR compliance, secure customer payload deletion, and data privacy frameworks.',
      imageSrc: '/images/subprocessors/frameworks.png',
      link: '#',
    },
    {
      title: 'Security Portal',
      description: 'Inspect live threat tracking, platform pen-test certificates, and real-time vulnerability disclosure protocols.',
      imageSrc: '/images/subprocessors/protocols.png',
      link: '#',
    },
    {
      title: 'Compliance Scope',
      description: 'Our active certifications registry aligning platform scopes with regulatory frameworks (HIPAA, ISO, SOC 2).',
      imageSrc: '/images/subprocessors/scope.png',
      link: '#',
    },
    {
      title: 'Service Reliability',
      description: 'Live uptime status, global server performance logs, and failover engineering documentation.',
      imageSrc: '/images/subprocessors/reliability.png',
      link: '#',
    },
    {
      title: 'Support Desk',
      description: 'Submit account-specific requests or initiate a legal review of customized Data Processing Addendums.',
      imageSrc: '/images/subprocessors/support.png',
      link: '#',
    },
  ];

  return (
    <section className="relative w-full bg-slate-950 py-16 md:py-24 px-6 md:px-12 lg:px-28 border-y border-gray-800 overflow-hidden">
      {/* Decorative Background Blurs */}
      <div className="absolute w-[300px] h-[300px] md:w-[520px] md:h-[520px] right-[-10%] md:right-[-5%] top-[60%] md:top-[40%] bg-blue-500/10 rounded-full blur-[55px] pointer-events-none z-0" />
      <div className="absolute w-[200px] h-[200px] md:w-96 md:h-96 left-[-10%] md:left-[-5%] top-[-5%] bg-teal-400/10 rounded-full blur-[60px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header Section */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="text-slate-100 text-3xl md:text-4xl font-bold font-['Space_Grotesk'] leading-tight md:leading-[60px]">
            Continue Your Review
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-normal font-['Space_Grotesk'] leading-7">
            Explore related Trust & Security resources or connect with our team for specific questions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {reviewResources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              className="flex flex-col bg-zinc-900/80 rounded-2xl border border-gray-800 overflow-hidden shadow-lg hover:border-gray-700 transition-all duration-300 group h-full"
            >
              {/* Card Image */}
              <div className="w-full h-40 relative overflow-hidden bg-zinc-800 shrink-0">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={resource.imageSrc}
                  alt={`${resource.title} visual`}
                  aria-hidden="true"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col gap-3 flex-grow">
                <h3 className="text-slate-100 text-lg font-bold font-['Space_Grotesk'] leading-snug">
                  {resource.title}
                </h3>
                <p className="text-slate-400 text-sm font-normal font-['Space_Grotesk'] leading-relaxed">
                  {resource.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Footer CTA Banner */}
        <div className="w-full p-6 md:p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-md">
          <div className="flex flex-col gap-1 max-w-2xl">
            <h3 className="text-slate-100 text-lg md:text-xl font-bold font-['Space_Grotesk']">
              Need customized legal terms or have specific compliance criteria?
            </h3>
            <p className="text-slate-400 text-sm md:text-base font-normal font-['Space_Grotesk']">
              Our legal counsel and compliance engineers can assist with custom DPA reviews or specific security whitelist requests.
            </p>
          </div>

          <div className="w-full md:w-auto shrink-0">
            <a
              href="#"
              className="w-full md:w-auto px-6 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 hover:opacity-90 transition-opacity rounded-[10px] flex justify-center items-center text-slate-950 text-base font-bold font-['Space_Grotesk'] shadow-sm"
            >
              Talk to Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
