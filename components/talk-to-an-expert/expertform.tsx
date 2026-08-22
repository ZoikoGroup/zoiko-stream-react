'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar,
  Code2,
  Headset,
  ShieldCheck,
  Globe,
  Radio,
  User,
  ArrowRight,
  Send,
  Lock,
  CheckCircle2,
  XCircle,
  Loader2,
  Waves,
  WavesIcon,
  AudioWaveform,
  WavesArrowDown,
  WavesVertical,
} from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  workEmail: string;
  organization: string;
  country: string;
  helpCategory: string;
  helpText: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  workEmail?: string;
  country?: string;
  helpCategory?: string;
  helpText?: string;
}

const countries = [
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'Germany',
  'France',
  'Japan',
  'India',
  'Singapore',
  'Brazil',
  'Other',
];

const helpCategories = [
  'Enterprise broadcasting',
  'Developer integration & APIs',
  'Live Event planning',
  'Platform security & compliance',
  'Pricing & volume licensing',
  'General technical inquiry',
];

export default function TalkToExpertForm() {
  const initialFormData: FormData = {
    firstName: '',
    lastName: '',
    workEmail: '',
    organization: '',
    country: '',
    helpCategory: '',
    helpText: '',
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<
    'idle' | 'validation_error' | 'submitting' | 'success' | 'error'
  >('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const [referenceId, setReferenceId] = useState<string>('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'helpText' && value.length > 1500) return;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required.';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required.';
    }
    if (!formData.workEmail || !emailRegex.test(formData.workEmail)) {
      newErrors.workEmail = 'Enter a valid work email address.';
    }
    if (!formData.country) {
      newErrors.country = 'Select a country/region.';
    }
    if (!formData.helpCategory) {
      newErrors.helpCategory = 'Select an option.';
    }
    if (!formData.helpText.trim()) {
      newErrors.helpText = 'Describe your goals or inquiry.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setStatus('idle');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus('validation_error');
      return;
    }

    setStatus('submitting');

    try {
      // Simulated API response for demo
      await new Promise((resolve) => setTimeout(resolve, 1200));
      const ref = `ZS-EXP-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(ref);
      setStatus('success');
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
    }
  };

  return (
    <div className="w-full bg-slate-100 text-slate-900 flex flex-col">
      {/* 1. HERO BANNER SECTION */}
      <section className="relative w-full bg-zinc-950 text-white py-20 md:py-24 overflow-hidden border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start gap-6">
              <div className="flex items-center gap-2">
                <div className="size-1.5 bg-blue-500 rounded-full" />
                <span className="text-blue-400 text-xs font-mono font-bold uppercase tracking-wider">
                  CONTACT ZOIKOSTREAM
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold   text-slate-100 leading-tight md:leading-[60px]">
                Talk to the right expert, faster.
              </h1>

              <p className="text-slate-400 text-base md:text-lg font-normal   leading-relaxed max-w-xl">
                Tell us what you&apos;re trying to accomplish. We&apos;ll route your inquiry to the ZoikoStream team best equipped to help.
              </p>

              {/* Event Brief Pill Box */}
              <div className="p-4 bg-white/5 rounded-xl border border-gray-800 flex flex-wrap items-center gap-4">
                <Calendar className="size-5 text-teal-400 shrink-0" />
                <span className="text-slate-100 text-sm font-semibold  ">
                  Planning a Live Event?
                </span>
                <Link
                  href="/live-events"
                  className="text-teal-400 text-sm font-semibold   hover:underline flex items-center gap-1"
                >
                  <span>Start your event brief</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* Right Hero Image Visual */}
            <div className="lg:col-span-5 flex justify-center relative">
              {/* Background Accent Rings */}
              <div className="absolute -inset-4 opacity-40 pointer-events-none">
                <div className="w-full h-full border border-teal-400/30 rounded-2xl" />
              </div>
              <div className="relative w-full max-w-[496px] h-[284px] md:h-[320px] rounded-xl overflow-hidden shadow-2xl border border-gray-800">
                <Image
                  src="/images/talk-to-an-expert/hero.jpg"
                  alt="Talk to an Expert Hero"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FORM & SIDEBAR SECTION */}
      <section className="w-full py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Form Card */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-10 flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="size-10 bg-slate-100 rounded-full border border-gray-200 flex items-center justify-center text-slate-700 shrink-0">
                  <User className="size-5" />
                </div>
                <h2 className="text-zinc-900 text-xl font-bold  ">
                  Tell us what you need
                </h2>
              </div>

              {/* SUCCESS STATE */}
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-6">
                  <div className="size-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <CheckCircle2 className="size-10" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-slate-900 text-2xl font-bold  ">
                      Inquiry received
                    </h3>
                    <p className="text-emerald-600 font-bold font-mono text-sm">
                      Reference ID: {referenceId}
                    </p>
                  </div>
                  <p className="text-slate-600 text-base max-w-md font-normal   leading-relaxed">
                    Thank you! Our technical experts are reviewing your details and will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-8 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 font-bold   hover:opacity-90 transition-opacity"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                /* FORM INPUTS */
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-zinc-900 text-sm font-semibold  ">
                        First name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First name"
                        className={`w-full px-4 py-3 bg-white rounded-lg border text-sm   focus:outline-hidden ${
                          errors.firstName ? 'border-rose-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.firstName && (
                        <span className="text-rose-500 text-xs">{errors.firstName}</span>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-zinc-900 text-sm font-semibold  ">
                        Last name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last name"
                        className={`w-full px-4 py-3 bg-white rounded-lg border text-sm   focus:outline-hidden ${
                          errors.lastName ? 'border-rose-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.lastName && (
                        <span className="text-rose-500 text-xs">{errors.lastName}</span>
                      )}
                    </div>
                  </div>

                  {/* Work Email & Organization */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-zinc-900 text-sm font-semibold  ">
                        Work email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="workEmail"
                        value={formData.workEmail}
                        onChange={handleChange}
                        placeholder="name@organization.com"
                        className={`w-full px-4 py-3 bg-white rounded-lg border text-sm   focus:outline-hidden ${
                          errors.workEmail ? 'border-rose-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.workEmail && (
                        <span className="text-rose-500 text-xs">{errors.workEmail}</span>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-zinc-900 text-sm font-semibold  ">
                        Organization
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Organization name"
                        className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 text-sm   focus:outline-hidden"
                      />
                    </div>
                  </div>

                  {/* Country & Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-zinc-900 text-sm font-semibold  ">
                        Country / region <span className="text-rose-500">*</span>
                      </label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-white rounded-lg border text-sm   focus:outline-hidden ${
                          errors.country ? 'border-rose-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select country / region</option>
                        {countries.map((c, idx) => (
                          <option key={idx} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                      {errors.country && (
                        <span className="text-rose-500 text-xs">{errors.country}</span>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-zinc-900 text-sm font-semibold  ">
                        What can we help with? <span className="text-rose-500">*</span>
                      </label>
                      <select
                        name="helpCategory"
                        value={formData.helpCategory}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-white rounded-lg border text-sm   focus:outline-hidden ${
                          errors.helpCategory ? 'border-rose-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select an option</option>
                        {helpCategories.map((hc, idx) => (
                          <option key={idx} value={hc}>
                            {hc}
                          </option>
                        ))}
                      </select>
                      {errors.helpCategory && (
                        <span className="text-rose-500 text-xs">{errors.helpCategory}</span>
                      )}
                    </div>
                  </div>

                  {/* How can we help Textarea */}
                  <div className="flex flex-col gap-2">
                    <label className="text-zinc-900 text-sm font-semibold  ">
                      How can we help? <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="helpText"
                      value={formData.helpText}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Describe your goals, environment, or the details of your inquiry."
                      className={`w-full px-4 py-3 bg-white rounded-lg border text-sm   focus:outline-hidden ${
                        errors.helpText ? 'border-rose-500' : 'border-gray-300'
                      }`}
                    />
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      {errors.helpText ? (
                        <span className="text-rose-500">{errors.helpText}</span>
                      ) : (
                        <span />
                      )}
                      <span>{formData.helpText.length} / 1500</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 font-bold   text-base flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="size-5 animate-spin" />
                        <span>Sending inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="size-5" />
                        <span>Send inquiry</span>
                      </>
                    )}
                  </button>

                  {/* Privacy Notice */}
                  <p className="text-center text-gray-500 text-xs font-normal  ">
                    By submitting this form, you acknowledge the{' '}
                    <Link href="#" className="text-blue-600 font-semibold hover:underline">
                      ZoikoStream Privacy Notice
                    </Link>
                    .
                  </p>

                  {/* Security Alert Box */}
                  <div className="p-4 bg-slate-100 rounded-xl border border-gray-200 flex items-start gap-3">
                    <Lock className="size-5 text-blue-500 shrink-0 mt-0.5" />
                    <p className="text-gray-600 text-xs font-normal   leading-relaxed">
                      For your security, please do not include passwords, API keys, credentials, or other sensitive production data.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Sidebar Cards */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-zinc-900 text-base font-bold  ">
                    Looking for something specific?
                  </h3>
                  <div className="w-8 h-1 bg-teal-400 rounded-full" />
                </div>

                {/* Sidebar Card 1 */}
                <Link
                  href="#"
                  className="p-5 bg-white rounded-xl border border-gray-200 shadow-xs flex items-start justify-between gap-4 hover:border-teal-400 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="size-10 bg-emerald-50 rounded-xl flex items-center justify-center text-teal-600 shrink-0">
                      <Calendar className="size-5" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-zinc-900 text-sm font-bold   group-hover:text-teal-600 transition-colors">
                        Planning a Live Event?
                      </h4>
                      <p className="text-gray-500 text-xs font-normal   leading-relaxed">
                        Start your event brief and our team will guide you through every step.
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="size-5 text-slate-400 group-hover:text-teal-600 transition-colors shrink-0 mt-1" />
                </Link>

                {/* Sidebar Card 2 */}
                <Link
                  href="#"
                  className="p-5 bg-white rounded-xl border border-gray-200 shadow-xs flex items-start justify-between gap-4 hover:border-blue-400 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="size-10 bg-indigo-50 rounded-xl flex items-center justify-center text-blue-500 shrink-0">
                      <Code2 className="size-5" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-zinc-900 text-sm font-bold   group-hover:text-blue-600 transition-colors">
                        Need technical documentation?
                      </h4>
                      <p className="text-gray-500 text-xs font-normal   leading-relaxed">
                        Explore developer docs, APIs, SDKs, and integration guides.
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="size-5 text-slate-400 group-hover:text-blue-600 transition-colors shrink-0 mt-1" />
                </Link>

                {/* Sidebar Card 3 */}
                <Link
                  href="#"
                  className="p-5 bg-white rounded-xl border border-gray-200 shadow-xs flex items-start justify-between gap-4 hover:border-violet-400 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="size-10 bg-violet-50 rounded-xl flex items-center justify-center text-violet-500 shrink-0">
                      <Headset className="size-5" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-zinc-900 text-sm font-bold   group-hover:text-violet-600 transition-colors">
                        Already using ZoikoStream?
                      </h4>
                      <p className="text-gray-500 text-xs font-normal   leading-relaxed">
                        Get account support, report an issue, or check status.
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="size-5 text-slate-400 group-hover:text-violet-600 transition-colors shrink-0 mt-1" />
                </Link>
              </div>

              {/* Bottom Trust Reasons Box */}
              <div className="p-6 bg-slate-100 rounded-2xl border border-gray-200 flex flex-col gap-5">
                <h4 className="text-zinc-900 text-sm font-bold  ">
                  Why organizations trust ZoikoStream
                </h4>

                <div className="flex flex-col gap-3.5">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="size-4 text-slate-600 shrink-0" />
                    <span className="text-gray-600 text-xs font-normal  ">
                      Enterprise-grade security and privacy controls
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Globe className="size-4 text-slate-600 shrink-0" />
                    <span className="text-gray-600 text-xs font-normal  ">
                      Global infrastructure with high reliability
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <AudioWaveform className="size-4 text-slate-600 shrink-0" />
                    <span className="text-gray-600 text-xs font-normal  ">
                      Professional live events at any scale
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Headset className="size-4 text-slate-600 shrink-0" />
                    <span className="text-gray-600 text-xs font-normal  ">
                      Expert human support when you need it
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BOTTOM TRUST FEATURES BAR */}
      <section className="w-full bg-slate-100 border-t border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-4">
              <div className="size-10 bg-emerald-50 rounded-2xl flex items-center justify-center text-teal-600 shrink-0">
                <ShieldCheck className="size-5" />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-zinc-900 text-sm font-bold  ">
                  Secure by design
                </h4>
                <p className="text-gray-500 text-xs font-normal   leading-relaxed">
                  Built with security and privacy at the core.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="size-10 bg-indigo-50 rounded-2xl flex items-center justify-center text-blue-500 shrink-0">
                <Globe className="size-5" />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-zinc-900 text-sm font-bold  ">
                  Global reach
                </h4>
                <p className="text-gray-500 text-xs font-normal   leading-relaxed">
                  Deliver to audiences anywhere in the world.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="size-10 bg-violet-50 rounded-2xl flex items-center justify-center text-violet-500 shrink-0">
                <AudioWaveform className="size-5" />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-zinc-900 text-sm font-bold  ">
                  Professional quality
                </h4>
                <p className="text-gray-500 text-xs font-normal   leading-relaxed">
                  HD streaming, captions, recording and replay.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="size-10 bg-emerald-50 rounded-2xl flex items-center justify-center text-teal-600 shrink-0">
                <Headset className="size-5" />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-zinc-900 text-sm font-bold  ">
                  Human support
                </h4>
                <p className="text-gray-500 text-xs font-normal   leading-relaxed">
                  Real experts from planning to go-live.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}