import React from 'react';
import Image from 'next/image';

export default function SecurityControlDomains() {
  const domains = [
    {
      title: 'Governance & Accountability',
      description: 'Security ownership model, policy review cadences and compliance programs.',
      badgeText: 'EVIDENCE AVAILABLE',
      badgeColor: 'text-blue-500',
      badgeBg: 'bg-blue-500/10',
      image: '/images/security/Governance.png',
    },
    {
      title: 'Architecture & Trust Boundaries',
      description: 'Data isolation, secure ingest zones, and microservice boundary definitions.',
      badgeText: 'SOURCE-BACKED',
      badgeColor: 'text-emerald-500',
      badgeBg: 'bg-emerald-500/10',
      image: '/images/security/Architecture.png',
    },
    {
      title: 'Identity & Access',
      description: 'Multi-factor authentication (MFA) governance, SAML SSO, and least-privilege rules.',
      badgeText: 'SOURCE-BACKED',
      badgeColor: 'text-emerald-500',
      badgeBg: 'bg-emerald-500/10',
      image: '/images/security/Identity.png',
    },
    {
      title: 'Application, API & Media Delivery',
      description: 'Secure RTMP/SRT/WHIP ingestion, edge buffer integrity, and client SDK sandboxing.',
      badgeText: 'EVIDENCE AVAILABLE',
      badgeColor: 'text-blue-500',
      badgeBg: 'bg-blue-500/10',
      image: '/images/security/Application.png',
    },
    {
      title: 'Data Security',
      description: 'At-rest and in-transit encryption standards, regulatory cold storage locking.',
      badgeText: 'SOURCE-BACKED',
      badgeColor: 'text-emerald-500',
      badgeBg: 'bg-emerald-500/10',
      image: '/images/security/Datasecurity.png',
    },
    {
      title: 'Secure Development & Supply Chain',
      description: 'Static/dynamic code analysis (SAST/DAST) and rigorous third-party package audits.',
      badgeText: 'EVIDENCE AVAILABLE',
      badgeColor: 'text-blue-500',
      badgeBg: 'bg-blue-500/10',
      image: '/images/security/secure.png',
    },
    {
      title: 'Vulnerability Management & Testing',
      description: 'Frequent internal testing cycles and vetted public penetration report histories.',
      badgeText: 'SOURCE-BACKED',
      badgeColor: 'text-emerald-500',
      badgeBg: 'bg-emerald-500/10',
      image: '/images/security/Testing.png',
    },
    {
      title: 'Monitoring & Incident Security',
      description: '24/7 security operations center tracking, fast-recovery playbooks.',
      badgeText: 'EVIDENCE AVAILABLE',
      badgeColor: 'text-blue-500',
      badgeBg: 'bg-blue-500/10',
      image: '/images/security/Monitoring.png',
    },
    {
      title: 'Infrastructure, Resilience & Third Parties',
      description: 'Active-Active dual-ingest failover networks and provider assurance programs.',
      badgeText: 'SOURCE-BACKED',
      badgeColor: 'text-emerald-500',
      badgeBg: 'bg-emerald-500/10',
      image: '/images/security/Infrastucture.png',
    },
  ];

  return (
    <section className="relative w-full bg-[#f8fafc] py-20 px-6 sm:px-12 lg:px-24 overflow-hidden">
      
      {/* Topographic contour background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-50 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
          fill="none"
        >
          <g stroke="#0f172a" strokeOpacity="0.06" strokeWidth="1">
            {/* Topography wavy contours */}
            <path d="M-100 80 C 250 -20, 500 180, 850 60 S 1250 -40, 1550 100" />
            <path d="M-100 140 C 280 40, 540 240, 900 120 S 1300 20, 1550 160" />
            <path d="M-100 200 C 310 100, 580 300, 950 180 S 1350 80, 1550 220" />
            <path d="M-100 260 C 340 160, 620 360, 1000 240 S 1400 140, 1550 280" />
            
            <path d="M-100 450 C 200 520, 480 380, 800 480 S 1200 560, 1550 440" />
            <path d="M-100 510 C 240 580, 520 440, 850 540 S 1250 620, 1550 500" />
            <path d="M-100 570 C 280 640, 560 500, 900 600 S 1300 680, 1550 560" />
            <path d="M-100 630 C 320 700, 600 560, 950 660 S 1350 740, 1550 620" />
            <path d="M-100 690 C 360 760, 640 620, 1000 720 S 1400 800, 1550 680" />
            
            {/* Additional organic elevation loops */}
            <path d="M 200 250 C 150 180, 50 160, 20 220 S 60 380, 180 340 S 250 320, 200 250 Z" />
            <path d="M 220 250 C 170 160, 30 140, -10 220 S 40 410, 190 360 S 270 340, 220 250 Z" />
            <path d="M 1250 300 C 1200 220, 1080 200, 1040 280 S 1090 460, 1220 420 S 1300 380, 1250 300 Z" />
            <path d="M 1270 300 C 1220 190, 1060 170, 1010 270 S 1070 490, 1240 440 S 1320 410, 1270 300 Z" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Header Section */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-zinc-950 text-3xl md:text-4xl font-bold font-['Space_Grotesk'] leading-tight md:leading-[48px]">
            Security Control Domains
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal font-['Space_Grotesk'] leading-7">
            A coherent overview of approved security domains. Each domain links to source-backed evidence and specialist authorities.
          </p>
        </div>

        {/* CSS Grid for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {domains.map((domain, index) => (
            <div 
              key={index}
              className="flex flex-col bg-[#11141c] rounded-xl border border-gray-800/60 overflow-hidden hover:border-gray-600 transition-colors group"
            >
              {/* Card Image */}
              <div className="w-full aspect-[16/9] relative overflow-hidden">
                <Image
                  src={domain.image}
                  alt={domain.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-1 gap-3">
                <h3 className="text-slate-100 text-base font-bold font-['Space_Grotesk'] line-clamp-1">
                  {domain.title}
                </h3>
                
                <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-5 min-h-[40px]">
                  {domain.description}
                </p>
                
                {/* Card Footer */}
                <div className="flex justify-between items-center mt-auto pt-4">
                  <div className={`px-2.5 py-1 rounded-sm ${domain.badgeBg.replace('/10', '/20')}`}>
                    <span className={`${domain.badgeColor} text-[9px] font-bold font-['Space_Grotesk'] uppercase tracking-wider`}>
                      {domain.badgeText}
                    </span>
                  </div>
                  <a href="#" className="text-teal-500 hover:text-teal-400 text-xs font-bold font-['Space_Grotesk'] transition-colors inline-flex items-center gap-1">
                    Review evidence <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
