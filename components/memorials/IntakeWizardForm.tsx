'use client';

import React, { useState } from 'react';
import { 
  ChevronRight, 
  CheckCircle2, 
  User, 
  Mail, 
  Phone, 
  AlertCircle, 
  Info 
} from 'lucide-react';

export default function IntakeWizardForm() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    eventDate: 'Not decided yet',
    duration: 'Under 30 minutes',
    sourceContext: 'Venue',
    audienceSize: 'Under 25',
    audienceAccess: 'Public',
    accessibilityNeeds: [] as string[],
    recordingPreference: 'Live stream only',
    supportNeed: 'Standard platform support',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    additionalContext: '',
    privacyAccepted: false,
  });

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveStep(2);
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveStep(3);
  };

  const handleStep3Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.contactName || !formData.contactEmail || !formData.privacyAccepted) {
      alert("Please fill out required fields and accept the privacy policy.");
      return;
    }
    setFormSubmitted(true);
  };

  const toggleAccessibilityNeed = (need: string) => {
    setFormData(prev => {
      const current = prev.accessibilityNeeds;
      const index = current.indexOf(need);
      if (index > -1) {
        return { ...prev, accessibilityNeeds: current.filter(n => n !== need) };
      } else {
        return { ...prev, accessibilityNeeds: [...current, need] };
      }
    });
  };

  const resetForm = () => {
    setFormData({
      eventDate: 'Not decided yet',
      duration: 'Under 30 minutes',
      sourceContext: 'Venue',
      audienceSize: 'Under 25',
      audienceAccess: 'Public',
      accessibilityNeeds: [],
      recordingPreference: 'Live stream only',
      supportNeed: 'Standard platform support',
      contactName: '',
      contactEmail: '',
      contactPhone: '',
      additionalContext: '',
      privacyAccepted: false,
    });
    setActiveStep(1);
    setFormSubmitted(false);
  };

  return (
    <section 
      id="intake-brief-form"
      className="w-full py-16 sm:py-24 bg-zinc-950 dark:bg-black bg-[url('/images/memorials/bg-image.png')] bg-cover bg-center bg-no-repeat text-white transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left instructions block */}
        <div className="lg:col-span-5 flex flex-col justify-start items-start gap-8">
          <h2 className="text-white text-4xl font-bold leading-tight">
            Start with the event basics
          </h2>
          
          {/* Step Indicators */}
          <div className="flex items-center gap-3 flex-wrap">
            
            <div className="flex items-center gap-2">
              <div className={`w-6 h-6 rounded-full flex justify-center items-center text-xs font-bold ${
                activeStep >= 1 ? 'bg-gradient-to-br from-sky-400 to-violet-500 text-black' : 'border border-slate-550 text-slate-500'
              }`}>
                1
              </div>
              <span className={`text-sm ${activeStep >= 1 ? 'text-white font-medium' : 'text-slate-500'}`}>
                Event basics
              </span>
            </div>
            
            <div className="w-6 h-px bg-slate-700" />

            <div className="flex items-center gap-2">
              <div className={`w-6 h-6 rounded-full flex justify-center items-center text-xs font-bold ${
                activeStep >= 2 ? 'bg-gradient-to-br from-sky-400 to-violet-500 text-black' : 'border border-slate-550 text-slate-500'
              }`}>
                2
              </div>
              <span className={`text-sm ${activeStep >= 2 ? 'text-white font-medium' : 'text-slate-500'}`}>
                Participation
              </span>
            </div>
            
            <div className="w-6 h-px bg-slate-700" />

            <div className="flex items-center gap-2">
              <div className={`w-6 h-6 rounded-full flex justify-center items-center text-xs font-bold ${
                activeStep >= 3 ? 'bg-gradient-to-br from-sky-400 to-violet-500 text-black' : 'border border-slate-550 text-slate-500'
              }`}>
                3
              </div>
              <span className={`text-sm ${activeStep >= 3 ? 'text-white font-medium' : 'text-slate-500'}`}>
                Contact
              </span>
            </div>

          </div>

          <p className="text-slate-400 dark:text-slate-350 text-base leading-relaxed">
            A short first step, with the rest requested only as needed. No sensitive memorial details are required to understand the next step.
          </p>

          <div className="w-full flex flex-col gap-6 mt-4">
            
            <div className="flex flex-col gap-1.5">
              <h4 className="text-white text-sm font-semibold">Coming in Step 2</h4>
              <p className="text-slate-400 dark:text-slate-350 text-sm leading-relaxed">
                Accessibility needs (multi-select — &quot;not sure&quot;), recording/replay preference, support need.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h4 className="text-white text-sm font-semibold">Coming in Step 3</h4>
              <p className="text-slate-400 dark:text-slate-350 text-sm leading-relaxed">
                Contact name, email, phone (optional), additional context — please don&apos;t include sensitive personal, medical, financial, or access-credential information — and a privacy acknowledgment.
              </p>
            </div>

          </div>
        </div>
        
        {/* Right form block */}
        <div className="lg:col-span-7 w-full p-6 sm:p-10 bg-gray-900 dark:bg-zinc-900 rounded-3xl shadow-[0px_16px_32px_0px_rgba(0,0,0,0.25)] animate-fade-in">
          
          {formSubmitted ? (
            <div className="flex flex-col items-center justify-center text-center py-8 gap-6">
              <div className="w-16 h-16 bg-teal-400/10 rounded-full flex items-center justify-center text-teal-405 mb-2">
                <CheckCircle2 className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-white text-2xl font-bold">Intake Brief Received</h3>
              <p className="text-slate-400 dark:text-slate-350 text-sm max-w-md leading-relaxed">
                Thank you, {formData.contactName}. We have saved your brief. An expert will review your requirements and reach out to the email provided shortly.
              </p>
              
              {/* Brief Summary Box */}
              <div className="w-full bg-slate-950 dark:bg-black text-slate-350 p-6 rounded-xl text-left text-xs space-y-3">
                <h4 className="font-bold text-white text-sm  pb-2">Submitted Brief Parameters:</h4>
                <div><span className="font-semibold text-slate-400">Date Option:</span> {formData.eventDate}</div>
                <div><span className="font-semibold text-slate-400">Approx. Duration:</span> {formData.duration}</div>
                <div><span className="font-semibold text-slate-400">Source:</span> {formData.sourceContext}</div>
                <div><span className="font-semibold text-slate-400">Audience size:</span> {formData.audienceSize} (Access: {formData.audienceAccess})</div>
                <div>
                  <span className="font-semibold text-slate-400">Accessibility:</span>{' '}
                  {formData.accessibilityNeeds.length > 0 ? formData.accessibilityNeeds.join(', ') : 'None / Not sure'}
                </div>
                <div><span className="font-semibold text-slate-400">Recording preference:</span> {formData.recordingPreference}</div>
                <div><span className="font-semibold text-slate-400">Support tier:</span> {formData.supportNeed}</div>
              </div>

              <button 
                onClick={resetForm}
                className="mt-4 px-6 py-2.5 bg-slate-800 dark:bg-gray-800 text-slate-200 dark:text-white rounded-lg hover:bg-slate-750 transition-colors text-sm cursor-pointer"
              >
                Create another brief
              </button>
            </div>
          ) : (
            <div>
              
              {/* Step 1: Basics Form */}
              {activeStep === 1 && (
                <form onSubmit={handleStep1Submit} className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-white text-base font-bold">Event type</label>
                    <div className="px-4 py-3 bg-slate-955 dark:bg-black rounded-lg text-slate-450 text-sm">
                      Memorials
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-white text-base font-bold" htmlFor="eventDate">Event date</label>
                      <select 
                        id="eventDate"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({...formData, eventDate: e.target.value})}
                        className="px-4 py-3 bg-slate-955 dark:bg-black rounded-lg text-slate-300 dark:text-white text-sm focus:outline-none"
                      >
                        <option value="Not decided yet">Not decided yet</option>
                        <option value="Within 7 Days">Within 7 Days</option>
                        <option value="Within 30 Days">Within 30 Days</option>
                        <option value="Specific Date Booked">Specific Date Booked</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-white text-base font-bold" htmlFor="duration">Approximate duration</label>
                      <select 
                        id="duration"
                        value={formData.duration}
                        onChange={(e) => setFormData({...formData, duration: e.target.value})}
                        className="px-4 py-3 bg-slate-955 dark:bg-black rounded-lg text-slate-300 dark:text-white text-sm focus:outline-none"
                      >
                        <option value="Under 30 minutes">Under 30 minutes</option>
                        <option value="30-60 minutes">30-60 minutes</option>
                        <option value="60-90 minutes">60-90 minutes</option>
                        <option value="Over 90 minutes">Over 90 minutes</option>
                      </select>
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-white text-base font-bold" htmlFor="sourceContext">Venue / source context</label>
                      <select 
                        id="sourceContext"
                        value={formData.sourceContext}
                        onChange={(e) => setFormData({...formData, sourceContext: e.target.value})}
                        className="px-4 py-3 bg-slate-955 dark:bg-black rounded-lg text-slate-300 dark:text-white text-sm focus:outline-none"
                      >
                        <option value="Venue">Venue</option>
                        <option value="Camera Setup">Camera / Encoder Setup</option>
                        <option value="Remote contribution">Remote Contribution</option>
                        <option value="Other Source">Other / Custom Ingest</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-white text-base font-bold" htmlFor="audienceSize">Audience size</label>
                      <select 
                        id="audienceSize"
                        value={formData.audienceSize}
                        onChange={(e) => setFormData({...formData, audienceSize: e.target.value})}
                        className="px-4 py-3 bg-slate-955 dark:bg-black rounded-lg text-slate-300 dark:text-white text-sm focus:outline-none"
                      >
                        <option value="Under 25">Under 25</option>
                        <option value="25-100">25-100</option>
                        <option value="100-500">100-500</option>
                        <option value="500+">500+</option>
                      </select>
                    </div>

                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-white text-base font-bold" htmlFor="audienceAccess">Audience access need</label>
                    <select 
                      id="audienceAccess"
                      value={formData.audienceAccess}
                      onChange={(e) => setFormData({...formData, audienceAccess: e.target.value})}
                      className="px-4 py-3 bg-slate-955 dark:bg-black rounded-lg text-slate-300 dark:text-white text-sm focus:outline-none"
                    >
                      <option value="Public">Public (Anyone with link)</option>
                      <option value="Link-based">Link-based (Unlisted / password protected)</option>
                      <option value="Invite-only">Invite-only (Explicit invitations)</option>
                      <option value="Private">Private / Credentialed (Enterprise identity verification)</option>
                    </select>
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="text-slate-500 text-xs">
                      Step 1 of 3 — Event basics
                    </div>
                    <button 
                      type="submit"
                      className="px-7 py-3.5 bg-gradient-to-r from-sky-400 to-violet-500 shadow-[0px_4px_12px_rgba(139,92,246,0.25)] hover:opacity-95 transition-opacity rounded-xl text-black text-base font-bold flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto border-none"
                    >
                      <span>Continue</span>
                      <ChevronRight className="w-4 h-4 text-black" />
                    </button>
                  </div>
                </form>
              )}

              {/* Step 2: Participation & Accessibility Form */}
              {activeStep === 2 && (
                <form onSubmit={handleStep2Submit} className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <label className="text-white text-base font-bold">Accessibility Needs (Multi-select)</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                      {[
                        'Captions & subtitles',
                        'Screen-reader compatibility',
                        'Assistive audio overlays',
                        'Keyboard navigation support',
                        'Not sure yet'
                      ].map((need) => (
                        <label 
                          key={need}
                          className={`p-3 rounded-lg flex items-center gap-3 cursor-pointer transition-colors ${
                            formData.accessibilityNeeds.includes(need) 
                              ? 'bg-teal-500/10 text-white' 
                              : 'bg-slate-955 dark:bg-black text-slate-450 hover:bg-slate-900/50'
                          }`}
                        >
                          <input 
                            type="checkbox"
                            checked={formData.accessibilityNeeds.includes(need)}
                            onChange={() => toggleAccessibilityNeed(need)}
                            className="w-4 h-4 accent-teal-405"
                          />
                          <span className="text-sm">{need}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-white text-base font-bold" htmlFor="recordingPreference">Recording &amp; Replay preference</label>
                    <select 
                      id="recordingPreference"
                      value={formData.recordingPreference}
                      onChange={(e) => setFormData({...formData, recordingPreference: e.target.value})}
                      className="px-4 py-3 bg-slate-955 dark:bg-black rounded-lg text-slate-300 dark:text-white text-sm focus:outline-none"
                    >
                      <option value="Live stream only">Live stream only (No recording)</option>
                      <option value="Live stream + 30-day replay">Live stream + 30-day replay window</option>
                      <option value="Live stream + permanent archive">Live stream + permanent secure archive</option>
                      <option value="No recording">Strictly live only (Delete immediately)</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-white text-base font-bold" htmlFor="supportNeed">Support &amp; Resilience Tier</label>
                    <select 
                      id="supportNeed"
                      value={formData.supportNeed}
                      onChange={(e) => setFormData({...formData, supportNeed: e.target.value})}
                      className="px-4 py-3 bg-slate-955 dark:bg-black rounded-lg text-slate-300 dark:text-white text-sm focus:outline-none"
                    >
                      <option value="Standard platform support">Standard platform support (SLA advisory)</option>
                      <option value="Assigned tech support specialist">Assigned tech support specialist (Dedicated pre-event review)</option>
                      <option value="Assured Event level support">Assured Event level support (Highest tier active monitoring)</option>
                    </select>
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <button 
                      type="button" 
                      onClick={() => setActiveStep(1)}
                      className="px-5 py-2.5 rounded-lg text-slate-450 hover:text-white text-sm transition-colors cursor-pointer bg-transparent"
                    >
                      Back
                    </button>
                    <div className="text-slate-500 text-xs sm:ml-auto">
                      Step 2 of 3 — Participation
                    </div>
                    <button 
                      type="submit"
                      className="px-7 py-3.5 bg-gradient-to-r from-sky-400 to-violet-500 shadow-[0px_4px_12px_rgba(139,92,246,0.25)] hover:opacity-95 transition-opacity rounded-xl text-black text-base font-bold flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto border-none"
                    >
                      <span>Continue</span>
                      <ChevronRight className="w-4 h-4 text-black" />
                    </button>
                  </div>
                </form>
              )}

              {/* Step 3: Coordinator Details Form */}
              {activeStep === 3 && (
                <form onSubmit={handleStep3Submit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-white text-base font-bold flex items-center gap-1.5" htmlFor="contactName">
                      <User className="w-4 h-4 text-slate-450" />
                      Coordinator Name <span className="text-red-400">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="contactName"
                      required
                      placeholder="John Doe"
                      value={formData.contactName}
                      onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                      className="px-4 py-3 bg-slate-955 dark:bg-black rounded-lg text-slate-350 dark:text-white text-sm focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-white text-base font-bold flex items-center gap-1.5" htmlFor="contactEmail">
                        <Mail className="w-4 h-4 text-slate-450" />
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input 
                        type="email" 
                        id="contactEmail"
                        required
                        placeholder="coordinator@example.com"
                        value={formData.contactEmail}
                        onChange={(e) => setFormData({...formData, contactEmail: e.target.value})}
                        className="px-4 py-3 bg-slate-955 dark:bg-black rounded-lg text-slate-350 dark:text-white text-sm focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-white text-base font-bold flex items-center gap-1.5" htmlFor="contactPhone">
                        <Phone className="w-4 h-4 text-slate-455" />
                        Phone (Optional)
                      </label>
                      <input 
                        type="tel" 
                        id="contactPhone"
                        placeholder="+1 (555) 000-0000"
                        value={formData.contactPhone}
                        onChange={(e) => setFormData({...formData, contactPhone: e.target.value})}
                        className="px-4 py-3 bg-slate-955 dark:bg-black rounded-lg text-slate-350 dark:text-white text-sm focus:outline-none"
                      />
                    </div>

                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-white text-base font-bold" htmlFor="additionalContext">Additional technical context</label>
                    <textarea 
                      id="additionalContext"
                      rows={3}
                      placeholder="Detail any AV specifications or platform integrations..."
                      value={formData.additionalContext}
                      onChange={(e) => setFormData({...formData, additionalContext: e.target.value})}
                      className="px-4 py-3 bg-slate-955 dark:bg-black rounded-lg text-slate-300 dark:text-white text-sm focus:outline-none resize-none animate-none"
                    />
                    <div className="text-[10px] text-slate-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                      <span>Please do not include sensitive personal, medical, financial, or access-credential details.</span>
                    </div>
                  </div>

                  <label className="flex items-start gap-3 mt-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      required
                      checked={formData.privacyAccepted}
                      onChange={(e) => setFormData({...formData, privacyAccepted: e.target.checked})}
                      className="w-4 h-4 mt-1 accent-teal-400"
                    />
                    <span className="text-xs text-slate-450 leading-normal">
                      I acknowledge that ZoikoStream collects and stores registration brief data under the Zoiko Group privacy guidelines. <span className="text-red-400">*</span>
                    </span>
                  </label>

                  <div className="pt-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-2">
                    <button 
                      type="button" 
                      onClick={() => setActiveStep(2)}
                      className="px-5 py-2.5 rounded-lg text-slate-450 hover:text-white text-sm transition-colors cursor-pointer bg-transparent"
                    >
                      Back
                    </button>
                    <div className="text-slate-500 text-xs sm:ml-auto">
                      Step 3 of 3 — Contact
                    </div>
                    <button 
                      type="submit"
                      className="px-7 py-3.5 bg-gradient-to-r from-sky-400 to-violet-500 shadow-[0px_4px_12px_rgba(139,92,246,0.25)] hover:opacity-95 transition-opacity rounded-xl text-black text-base font-bold flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto border-none"
                    >
                      <span>Submit Brief</span>
                      <CheckCircle2 className="w-4 h-4 text-black" />
                    </button>
                  </div>
                </form>
              )}

            </div>
          )}
          
        </div>

      </div>
    </section>
  );
}
