'use client';

import React, { useState } from 'react';
import { ChevronRight, CheckCircle2, AlertCircle, Info, Lock, Mail, User, Phone } from 'lucide-react';

export default function IntakeWorshipForm() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    worshipPattern: 'Recurring Weekly Service',
    eventDate: 'Not decided yet',
    duration: 'Under 60 minutes',
    venue: 'Sanctuary / Main Hall',
    attendance: '100 to 500 viewers',
    accessSetting: 'Private (invite-controlled)',
    licenseNumber: '',
    coordinatorName: '',
    coordinatorEmail: '',
    coordinatorPhone: '',
    notes: '',
    privacyAccepted: false
  });

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveStep(2);
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.coordinatorName || !formData.coordinatorEmail || !formData.privacyAccepted) {
      alert('Please fill out required fields and accept terms.');
      return;
    }
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      worshipPattern: 'Recurring Weekly Service',
      eventDate: 'Not decided yet',
      duration: 'Under 60 minutes',
      venue: 'Sanctuary / Main Hall',
      attendance: '100 to 500 viewers',
      accessSetting: 'Private (invite-controlled)',
      licenseNumber: '',
      coordinatorName: '',
      coordinatorEmail: '',
      coordinatorPhone: '',
      notes: '',
      privacyAccepted: false
    });
    setActiveStep(1);
    setFormSubmitted(false);
  };

  return (
    <section 
      id="worship-intake-form"
      className="w-full bg-cover  py-16 sm:py-24 bg-zinc-950 dark:bg-black text-white border-t border-slate-900 transition-colors duration-200"
              style={{ backgroundImage: "url('/images/workship-detailed/image (33).png')" }}

    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side Info */}
        <div className="lg:col-span-5 flex flex-col justify-start items-start gap-8">
          
          <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight font-sans tracking-tight">
            Tell us what you know about the service
          </h2>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className={`w-6 h-6 rounded-full flex justify-center items-center text-xs font-bold ${
                activeStep >= 1 ? 'bg-gradient-to-br from-sky-400 to-violet-500 text-black' : 'border border-slate-550 text-slate-500'
              }`}>
                1
              </div>
              <span className={`text-sm ${activeStep >= 1 ? 'text-white font-medium' : 'text-slate-500'}`}>
                Event details
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
                Coordinator
              </span>
            </div>
          </div>

          <p className="text-slate-400 text-base leading-relaxed">
            We use this initial brief to design your custom stream path and secure matching support. No sensitive worship details are required to complete this step.
          </p>

          <div className="w-full bg-zinc-900/30 p-5 rounded-xl border border-slate-800 text-xs text-slate-450 leading-relaxed flex items-start gap-2.5">
            <Info className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
            <span>
              If you lack exact details, select "Not decided yet" or "Unsure". Our specialized event team will guide you through remaining configurations later.
            </span>
          </div>

        </div>

        {/* Right Side Form Panel */}
        <div className="lg:col-span-7 w-full p-6 sm:p-10 bg-gray-900 dark:bg-zinc-900 rounded-3xl border border-slate-800 shadow-[0_16px_32px_rgba(0,0,0,0.25)] transition-all">
          
          {formSubmitted ? (
            <div className="flex flex-col items-center justify-center text-center py-6 gap-6">
              
              <div className="w-16 h-16 bg-teal-400/10 border-2 border-teal-400 rounded-full flex items-center justify-center text-teal-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              
              <h3 className="text-white text-2xl font-bold">Worship Event Brief Saved</h3>
              
              <p className="text-slate-400 text-sm max-w-md leading-relaxed">
                Thank you, coordinator {formData.coordinatorName}. Your brief has been submitted successfully. Our event team will review the details and reach out within 24 hours.
              </p>

              {/* Brief details summary block */}
              <div className="w-full bg-black text-slate-350 p-6 rounded-xl border border-slate-800 text-left text-xs space-y-3">
                <h4 className="font-bold text-white text-sm border-b border-slate-800 pb-2">Submitted Parameters:</h4>
                <div><span className="font-semibold text-slate-400">Worship pattern:</span> {formData.worshipPattern}</div>
                <div><span className="font-semibold text-slate-400">Approx. date:</span> {formData.eventDate}</div>
                <div><span className="font-semibold text-slate-400">Expected duration:</span> {formData.duration}</div>
                <div><span className="font-semibold text-slate-400">Sanctuary / Venue:</span> {formData.venue}</div>
                <div><span className="font-semibold text-slate-400">Expected online attendance:</span> {formData.attendance}</div>
                <div><span className="font-semibold text-slate-400">Access setting preference:</span> {formData.accessSetting}</div>
                {formData.licenseNumber && (
                  <div><span className="font-semibold text-slate-400">Licensing number:</span> {formData.licenseNumber}</div>
                )}
              </div>

              <button 
                onClick={resetForm}
                className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors text-sm cursor-pointer"
              >
                Create another brief
              </button>

            </div>
          ) : (
            <div>
              
              {/* Step 1: Event Details */}
              {activeStep === 1 && (
                <form onSubmit={handleStep1Submit} className="flex flex-col gap-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-white text-base font-bold" htmlFor="worshipPattern">Worship pattern</label>
                      <select 
                        id="worshipPattern"
                        value={formData.worshipPattern}
                        onChange={(e) => setFormData({...formData, worshipPattern: e.target.value})}
                        className="px-4 py-3 bg-gray-900 rounded-lg border border-slate-800 text-slate-300 dark:text-white text-sm focus:outline-none focus:border-teal-400"
                      >
                        <option value="Recurring Weekly Service">Recurring Weekly Service</option>
                        <option value="One-time Special Service">One-time / Special Service</option>
                        <option value="Not decided yet">Not decided yet / Custom</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-white text-base font-bold" htmlFor="worshipEventDate">Approximate date</label>
                      <select 
                        id="worshipEventDate"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({...formData, eventDate: e.target.value})}
                        className="px-4 py-3 bg-gray-900 rounded-lg border border-slate-800 text-slate-300 dark:text-white text-sm focus:outline-none focus:border-teal-400"
                      >
                        <option value="Not decided yet">Not decided yet</option>
                        <option value="Within 14 Days">Within 14 Days</option>
                        <option value="Within 30 Days">Within 30 Days</option>
                        <option value="Specific Date Confirmed">Specific Date Confirmed</option>
                      </select>
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-white text-base font-bold" htmlFor="worshipDuration">Expected duration</label>
                      <select 
                        id="worshipDuration"
                        value={formData.duration}
                        onChange={(e) => setFormData({...formData, duration: e.target.value})}
                        className="px-4 py-3 bg-gray-900 rounded-lg border border-slate-800 text-slate-300 dark:text-white text-sm focus:outline-none focus:border-teal-400"
                      >
                        <option value="Under 60 minutes">Under 60 minutes</option>
                        <option value="60-90 minutes">60-90 minutes</option>
                        <option value="90-120 minutes">90-120 minutes</option>
                        <option value="Over 120 minutes">Over 120 minutes</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-white text-base font-bold" htmlFor="worshipVenue">Sanctuary / Venue</label>
                      <select 
                        id="worshipVenue"
                        value={formData.venue}
                        onChange={(e) => setFormData({...formData, venue: e.target.value})}
                        className="px-4 py-3 bg-gray-900 rounded-lg border border-slate-800 text-slate-300 dark:text-white text-sm focus:outline-none focus:border-teal-400"
                      >
                        <option value="Sanctuary / Main Hall">Sanctuary / Main Hall</option>
                        <option value="Chapel / Auxiliary Hall">Chapel / Auxiliary Hall</option>
                        <option value="Outdoor / Custom Venue">Outdoor / Custom Venue</option>
                        <option value="Unsure">Unsure</option>
                      </select>
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-white text-base font-bold" htmlFor="worshipAttendance">Expected online attendance</label>
                      <select 
                        id="worshipAttendance"
                        value={formData.attendance}
                        onChange={(e) => setFormData({...formData, attendance: e.target.value})}
                        className="px-4 py-3 bg-gray-900 rounded-lg border border-slate-800 text-slate-300 dark:text-white text-sm focus:outline-none focus:border-teal-400"
                      >
                        <option value="Under 100 viewers">Under 100 viewers</option>
                        <option value="100 to 500 viewers">100 to 500 viewers</option>
                        <option value="500 to 1000 viewers">500 to 1000 viewers</option>
                        <option value="1000+ viewers">1000+ viewers</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-white text-base font-bold" htmlFor="worshipAccessSetting">Access setting preference</label>
                      <select 
                        id="worshipAccessSetting"
                        value={formData.accessSetting}
                        onChange={(e) => setFormData({...formData, accessSetting: e.target.value})}
                        className="px-4 py-3 bg-gray-900 rounded-lg border border-slate-800 text-slate-300 dark:text-white text-sm focus:outline-none focus:border-teal-400"
                      >
                        <option value="Private (invite-controlled)">Private (invite-controlled)</option>
                        <option value="Public (anyone with link)">Public (anyone with link)</option>
                        <option value="Unlisted (password protection)">Unlisted (password protection)</option>
                        <option value="Organizers only">Organizers / Staff only</option>
                      </select>
                    </div>

                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-white text-base font-bold" htmlFor="worshipLicenseNumber">Licensing details (optional)</label>
                    <input 
                      type="text"
                      id="worshipLicenseNumber"
                      placeholder="Enter CCLI or equivalent broadcast license number if known..."
                      value={formData.licenseNumber}
                      onChange={(e) => setFormData({...formData, licenseNumber: e.target.value})}
                      className="px-4 py-3 bg-gray-900 rounded-lg border border-slate-800 text-slate-300 dark:text-white text-sm focus:outline-none focus:border-teal-400"
                    />
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex justify-between items-center">
                    <span className="text-slate-500 text-xs">Step 1 of 2 — Event details</span>
                    
                    <button 
                      type="submit"
                      className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-zinc-900 text-base font-bold hover:opacity-95 transition-opacity flex items-center justify-center gap-2 cursor-pointer border-none"
                    >
                      <span>Continue</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                </form>
              )}

              {/* Step 2: Coordinator & Notes */}
              {activeStep === 2 && (
                <form onSubmit={handleStep2Submit} className="flex flex-col gap-6">
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-white text-base font-bold flex items-center gap-1.5" htmlFor="worshipCoordinatorName">
                      <User className="w-4 h-4 text-slate-400" />
                      Coordinator Name <span className="text-red-400">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="worshipCoordinatorName"
                      required
                      placeholder="Coordinator Name"
                      value={formData.coordinatorName}
                      onChange={(e) => setFormData({...formData, coordinatorName: e.target.value})}
                      className="px-4 py-3 bg-gray-900 rounded-lg border border-slate-800 text-slate-300 dark:text-white text-sm focus:outline-none focus:border-teal-405"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-white text-base font-bold flex items-center gap-1.5" htmlFor="worshipCoordinatorEmail">
                        <Mail className="w-4 h-4 text-slate-400" />
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input 
                        type="email" 
                        id="worshipCoordinatorEmail"
                        required
                        placeholder="email@example.com"
                        value={formData.coordinatorEmail}
                        onChange={(e) => setFormData({...formData, coordinatorEmail: e.target.value})}
                        className="px-4 py-3 bg-gray-900 rounded-lg border border-slate-800 text-slate-300 dark:text-white text-sm focus:outline-none focus:border-teal-405"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-white text-base font-bold flex items-center gap-1.5" htmlFor="worshipCoordinatorPhone">
                        <Phone className="w-4 h-4 text-slate-400" />
                        Phone (Optional)
                      </label>
                      <input 
                        type="tel" 
                        id="worshipCoordinatorPhone"
                        placeholder="+1 (555) 000-0000"
                        value={formData.coordinatorPhone}
                        onChange={(e) => setFormData({...formData, coordinatorPhone: e.target.value})}
                        className="px-4 py-3 bg-gray-900 rounded-lg border border-slate-800 text-slate-300 dark:text-white text-sm focus:outline-none focus:border-teal-405"
                      />
                    </div>

                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-white text-base font-bold" htmlFor="worshipNotes">Additional Sanctuary / Audio specifications</label>
                    <textarea 
                      id="worshipNotes"
                      rows={3}
                      placeholder="Detail any sound board outputs, camera models, or internet specs..."
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      className="px-4 py-3 bg-gray-900 rounded-lg border border-slate-800 text-slate-300 dark:text-white text-sm focus:outline-none focus:border-teal-400 resize-none"
                    />
                    <div className="text-[10px] text-slate-500 flex items-center gap-1.5 mt-1">
                      <AlertCircle className="w-3.5 h-3.5 text-slate-650 shrink-0" />
                      <span>Please safeguard your privacy and avoid logging private passwords.</span>
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
                      I acknowledge that ZoikoStream collects and stores briefs parameters under the Zoiko Group privacy guidelines. <span className="text-red-400">*</span>
                    </span>
                  </label>

                  <div className="pt-3 border-t border-slate-800 flex justify-between items-center mt-2">
                    <button 
                      type="button" 
                      onClick={() => setActiveStep(1)}
                      className="px-5 py-2.5 rounded-lg border border-slate-700 text-slate-405 hover:text-white text-sm transition-colors cursor-pointer bg-transparent"
                    >
                      Back
                    </button>
                    <span className="text-slate-500 text-xs">Step 2 of 2 — Coordinator</span>
                    <button 
                      type="submit"
                      className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-zinc-900 text-base font-bold hover:opacity-95 transition-opacity flex items-center justify-center gap-2 cursor-pointer border-none"
                    >
                      <span>Submit event brief</span>
                      <CheckCircle2 className="w-4 h-4" />
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
