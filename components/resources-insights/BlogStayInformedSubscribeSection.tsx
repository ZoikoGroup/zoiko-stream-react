import React from 'react';
import Image from 'next/image';
import subscribeBg from '@/public/images/resources-insights/herobackground.png';

export default function BlogStayInformedSubscribeSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-28 bg-[#0A111F] flex flex-col justify-center items-start overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={subscribeBg}
          alt="Subscribe Background"
          fill
          className="object-cover opacity-20 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A111F] via-[#0A111F]/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-12">
        
        {/* Text Content */}
        <div className="w-full max-w-4xl flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight">
            Stay Current with ZoikoStream Insights
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7">
            Get source-governed analysis, engineering perspectives, and industry context delivered to your inbox. No spam, no gated content.
          </p>
        </div>

        {/* Form Content */}
        <div className="w-full flex flex-col justify-start items-center lg:items-start gap-4">
          <div className="w-full max-w-3xl flex flex-col sm:flex-row items-stretch gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-[#111A2C] border border-gray-700 rounded-lg px-6 py-4 text-white placeholder-slate-500 font-['Inter'] text-base focus:outline-none focus:border-teal-500 transition-colors"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg text-gray-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity whitespace-nowrap">
              Subscribe to Insights
            </button>
          </div>
          
          <p className="w-full max-w-3xl text-center lg:text-left text-slate-500 text-xs font-normal font-['Inter'] mt-2">
            We respect your privacy. Unsubscribe anytime. View our privacy policy.
          </p>
        </div>

      </div>
    </section>
  );
}
