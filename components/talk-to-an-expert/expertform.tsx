'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';

// Form Data Interface
interface FormData {
  workEmail: string;
  organization: string;
  interest: string;
  helpText: string;
  consent: boolean;
}

// Errors Interface
interface FormErrors {
  workEmail?: string;
  organization?: string;
  interest?: string;
  helpText?: string;
}

export default function TalkToExpertForm() {
  // 1. Initial State
  const initialFormData: FormData = {
    workEmail: '',
    organization: '',
    interest: '',
    helpText: '',
    consent: false,
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<'idle' | 'validation_error' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const [referenceId, setReferenceId] = useState<string>('');

  // 2. Handle Input Changes Safely
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear specific field error on typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // 3. Client-side Validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.workEmail || !emailRegex.test(formData.workEmail)) {
      newErrors.workEmail = 'Enter a complete work email address.';
    }
    if (!formData.organization.trim()) {
      newErrors.organization = 'Organization name is required.';
    }
    if (!formData.interest) {
      newErrors.interest = 'Choose the area that best matches your inquiry.';
    }
    if (!formData.helpText.trim()) {
      newErrors.helpText = 'Please describe your goal, environment, or question.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 4. Reset Form Handler
  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setStatus('idle');
  };

  // 5. Form Submission Handler
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus('validation_error');
      return;
    }

    setStatus('submitting');

    try {
      // Backend API Call
      const response = await fetch('/api/v1/contact/expert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Server returned an error status');
      }

      const data = await response.json();
      setReferenceId(data.referenceId || 'ZS-ENQ-8942');
      setStatus('success');
    } catch (err) {
      console.error('Submission failed:', err);
      setStatus('error');
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-100 flex flex-col justify-start items-center ">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* 1. INITIAL & VALIDATION ERROR STATES */}
        {(status === 'idle' || status === 'validation_error') && (
          <div className="w-full bg-slate-100 rounded-lg overflow-hidden">
            <div className="w-full px-4 sm:px-8 py-6 bg-slate-100">
              <p className="text-zinc-950 text-base sm:text-lg font-normal leading-relaxed">
                Use this route for enterprise, platform, technical, security, procurement, or organizational questions. Tell us enough to route your inquiry. Additional detail follows only when it helps the right team respond.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full p-4 sm:p-8 lg:p-12 flex flex-col justify-start items-start gap-6 sm:gap-8">
              
              {/* Work Email Field */}
              <div className="w-full flex flex-col justify-start items-start gap-2">
                <label className="inline-flex items-center gap-1 text-zinc-950 text-base font-bold">
                  Work email <span className="text-red-500 text-sm font-semibold  ">*</span>
                </label>
                <input
                  type="text"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleChange}
                  placeholder="name@organization.com"
                  className={`w-full px-4 py-3 bg-white rounded-md outline outline-1 outline-offset-[-1px] text-zinc-950 text-sm leading-6 ${
                    errors.workEmail ? 'outline-red-500' : 'outline-gray-200'
                  }`}
                />
                {errors.workEmail ? (
                  <div className="text-red-500 text-xs  ">{errors.workEmail}</div>
                ) : (
                  <div className="text-gray-500 text-xs  ">Use an address where the appropriate team may respond.</div>
                )}
              </div>

              {/* Organization Field */}
              <div className="w-full flex flex-col justify-start items-start gap-2">
                <label className="inline-flex items-center gap-1 text-zinc-950 text-base font-bold">
                  Organization <span className="text-red-500 text-sm font-semibold  ">*</span>
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Organization name"
                  className={`w-full px-4 py-3 bg-white rounded-md outline outline-1 outline-offset-[-1px] text-zinc-950 text-sm leading-6 ${
                    errors.organization ? 'outline-red-500' : 'outline-gray-200'
                  }`}
                />
                {errors.organization && <div className="text-red-500 text-xs  ">{errors.organization}</div>}
              </div>

              {/* Interest Dropdown Field */}
              <div className="w-full flex flex-col justify-start items-start gap-2">
                <label className="inline-flex items-center gap-1 text-zinc-950 text-base font-bold">
                  What are you interested in? <span className="text-red-500 text-sm font-semibold  ">*</span>
                </label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white rounded-md outline outline-1 outline-offset-[-1px] text-zinc-950 text-sm leading-6   ${
                    errors.interest ? 'outline-red-500' : 'outline-gray-200'
                  }`}
                >
                  <option value="" disabled hidden>Select one</option>
                  <option value="enterprise_api">Enterprise API Integrations</option>
                  <option value="platform_security">Platform & Security</option>
                  <option value="procurement">Procurement & Licensing</option>
                  <option value="technical_support">Technical Consulting</option>
                </select>
                {errors.interest && <div className="text-red-500 text-xs  ">{errors.interest}</div>}
              </div>

              {/* Help Textarea Field */}
              <div className="w-full flex flex-col justify-start items-start gap-2">
                <label className="inline-flex items-center gap-1 text-zinc-950 text-base font-bold">
                  How can we help? <span className="text-red-500 text-sm font-semibold  ">*</span>
                </label>
                <textarea
                  name="helpText"
                  value={formData.helpText}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Describe your goal, environment, or question."
                  className={`w-full px-4 py-3 bg-white rounded-md outline outline-1 outline-offset-[-1px] text-zinc-900 text-sm leading-6 ${
                    errors.helpText ? 'outline-red-500' : 'outline-gray-200'
                  }`}
                />
                {errors.helpText && <div className="text-red-500 text-xs  ">{errors.helpText}</div>}
              </div>

              {/* Consent Checkbox */}
              <div className="w-full flex items-start sm:items-center gap-3">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="size-5 mt-0.5 sm:mt-0 bg-white rounded-sm border border-gray-200 cursor-pointer shrink-0"
                />
                <span className="text-zinc-950 text-sm font-normal leading-6">
                  I understand ZoikoStream will use these details to respond to this inquiry.
                </span>
              </div>

              {/* Action Submit Button */}
              {status === 'validation_error' ? (
                <button
                  type="submit"
                  className="w-full px-7 py-3.5 bg-red-500 text-white text-base font-semibold   rounded-md hover:bg-red-600 transition-colors"
                >
                  Review highlighted fields
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-teal-400 to-blue-500 rounded-[10px] text-white text-base font-semibold   flex justify-center items-center hover:opacity-95 transition-opacity"
                >
                  Send inquiry
                </button>
              )}

              <div className="text-gray-500 text-sm font-normal leading-6">
                No account required. Do not include passwords, access keys, or sensitive production data.
              </div>
            </form>
          </div>
        )}

        {/* 2. LOADING STATE */}
        {status === 'submitting' && (
          <div className="w-full p-8 sm:p-16 lg:p-28 bg-white rounded-lg flex flex-col justify-center items-center gap-6">
            <div className="size-20 sm:size-28 relative overflow-hidden animate-spin">
              <div className="size-16 sm:size-24 left-[8px] sm:left-[10px] top-[8px] sm:top-[10px] absolute outline outline-[8px] sm:outline-[10px] outline-offset-[-4px] sm:outline-offset-[-5px] outline-teal-400 rounded-full" />
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-3 text-center">
              <h2 className="text-zinc-950 text-2xl sm:text-4xl font-bold leading-tight">Sending your inquiry...</h2>
              <p className="text-gray-500 text-sm sm:text-base font-bold leading-6">Keep this page open. Do not submit again.</p>
            </div>
            <div className="px-8 sm:px-12 py-3.5 opacity-60 bg-gray-400 rounded-md text-white text-base font-semibold  ">
              Sending
            </div>
          </div>
        )}

        {/* 3. SUCCESS STATE */}
        {status === 'success' && (
          <div className="w-full p-8 sm:p-16 lg:p-28 flex flex-col justify-center items-center gap-6 sm:gap-8 bg-slate-100 text-center">
            <div className="size-24 sm:size-32 bg-emerald-500/10 rounded-full flex justify-center items-center">
              <div className="size-12 sm:size-14 outline outline-4 outline-offset-[-2px] outline-emerald-500 rounded-full flex items-center justify-center text-emerald-500 text-xl sm:text-2xl font-bold">
                ✓
              </div>
            </div>
            <div className="flex flex-col justify-start items-center gap-2">
              <h2 className="text-zinc-950 text-2xl sm:text-4xl font-bold leading-tight">Inquiry received</h2>
              <p className="text-emerald-600 text-base font-bold leading-6">Reference: {referenceId}</p>
            </div>
            <p className="max-w-md text-gray-500 text-base sm:text-lg font-normal leading-7">
              We have recorded your inquiry and will route it according to the information provided.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-60 h-12 bg-gradient-to-r from-teal-400 to-blue-500 rounded-[10px] text-white text-base font-semibold   flex justify-center items-center"
            >
              Return to ZoikoStream
            </button>
            <p className="text-gray-500 text-xs sm:text-sm font-normal leading-6">
              A confirmation may be sent when the delivery channel is approved and available.
            </p>
          </div>
        )}

        {/* 4. FAILURE / RETRY STATE */}
        {status === 'error' && (
          <div className="w-full p-8 sm:p-16 lg:p-28 flex flex-col justify-center items-center gap-6 sm:gap-8 bg-slate-100 text-center">
            <div className="size-24 sm:size-36 bg-red-500/10 rounded-full flex justify-center items-center">
              <div className="size-12 sm:size-14 outline outline-4 outline-offset-[-2px] outline-red-500 rounded-full flex items-center justify-center text-red-500 text-xl sm:text-2xl font-bold">
                ✕
              </div>
            </div>
            <div className="flex flex-col justify-start items-center gap-2">
              <h2 className="max-w-xl text-zinc-950 text-2xl sm:text-4xl font-bold leading-tight">We could not send your inquiry</h2>
              <p className="max-w-lg text-gray-500 text-base sm:text-lg font-normal leading-7">
                Your entered details remain on this page. Try again, or use an approved alternative contact route.
              </p>
            </div>
            <div className="w-full sm:w-auto flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full sm:w-48 h-12 bg-gradient-to-r from-teal-400 to-blue-500 rounded-[10px] text-white text-base font-semibold   flex justify-center items-center"
              >
                Try again
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-44 h-12 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-800 text-zinc-950 text-base font-semibold   flex justify-center items-center"
              >
                Contact options
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}