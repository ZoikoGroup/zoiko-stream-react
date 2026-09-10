import React from 'react';
import { Shield, Lock, CheckCircle, Server, Key, EyeOff } from 'lucide-react';

export default function Security() {
  return (
    <section className="bg-[#050511] text-white py-24 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Shield className="w-5 h-5 text-indigo-400" />
            <span className="text-sm font-medium tracking-wide text-indigo-200">Enterprise Security</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Uncompromising Security for Your Streams
          </h2>
          <p className="text-lg text-gray-400">
            We protect your data and content with industry-leading encryption, robust access controls, and compliance standards you can trust.
          </p>
        </div>

        {/* Hero / Main Image Placeholder Area */}
        <div className="relative mb-24 group rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-tr from-white/5 to-transparent aspect-video md:aspect-[21/9] flex items-center justify-center">
          <picture className="absolute inset-0 z-10">
            <source media="(min-width: 768px)" srcSet="/images/zoikostream-trust-center/hero-bg-desktop.png" />
            <img src="/images/zoikostream-trust-center/hero-bg-mobile.png" alt="Security Hero Illustration" className="w-full h-full object-cover" />
          </picture>
          
          {/* Aesthetic background glow */}
          <div className="absolute inset-0 bg-indigo-500/10 blur-3xl opacity-50 rounded-full scale-150 pointer-events-none"></div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {/* Feature 1 */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
            <div className="bg-indigo-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6 border border-indigo-500/30">
              <Key className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">End-to-End Encryption</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              All video streams and metadata are encrypted in transit and at rest using AES-256 standards.
            </p>
            {/* Inline Image Placeholder */}
            <div className="h-32 rounded-lg flex items-center justify-center overflow-hidden">
              <img src="/images/zoikostream-trust-center/domain-security-compliance.png" alt="Encryption Diagram" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
            <div className="bg-emerald-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6 border border-emerald-500/30">
              <EyeOff className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Privacy First</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Granular access controls allow you to dictate exactly who can view, record, and share your content.
            </p>
            {/* Inline Image Placeholder */}
            <div className="h-32 rounded-lg flex items-center justify-center overflow-hidden">
              <img src="/images/zoikostream-trust-center/domain-privacy-residency.png" alt="Privacy Controls" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
            <div className="bg-purple-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6 border border-purple-500/30">
              <Server className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Global Compliance</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Built to meet GDPR, CCPA, and SOC 2 Type II compliance standards for enterprise requirements.
            </p>
            {/* Inline Image Placeholder */}
            <div className="h-32 rounded-lg flex items-center justify-center overflow-hidden">
              <img src="/images/zoikostream-trust-center/domain-trust-evidence.png" alt="Compliance Badges" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="border-t border-white/10 pt-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold mb-4">Certified Secure Infrastructure</h3>
              <p className="text-gray-400">
                Our platforms undergo regular penetration testing and rigorous audits to ensure your data remains protected against emerging threats.
              </p>
            </div>
            
            <div className="flex gap-4 flex-wrap">
               <div className="flex items-center space-x-2 bg-white/5 px-6 py-3 rounded-xl border border-white/10">
                 <CheckCircle className="w-5 h-5 text-green-400" />
                 <span className="text-sm font-medium">SOC 2 Type II</span>
               </div>
               <div className="flex items-center space-x-2 bg-white/5 px-6 py-3 rounded-xl border border-white/10">
                 <CheckCircle className="w-5 h-5 text-green-400" />
                 <span className="text-sm font-medium">GDPR Ready</span>
               </div>
               <div className="flex items-center space-x-2 bg-white/5 px-6 py-3 rounded-xl border border-white/10">
                 <CheckCircle className="w-5 h-5 text-green-400" />
                 <span className="text-sm font-medium">ISO 27001</span>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
