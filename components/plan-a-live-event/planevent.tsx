"use client";

import React, { useState } from "react";

// Initial form state definition
const initialFormData = {
  // Step 1 - Event Basics
  workEmail: "",
  organization: "",
  eventType: "",
  eventDate: "",
  country: "",
  timeZone: "",
  description: "",

  // Step 2 - Production Details
  estimatedAudience: "",
  audienceAccess: "",
  contributionLocations: "",
  captionsLanguages: "",
  recordingReplay: "",
  productionNotes: "",
  authorized: false,
};

export default function PlanLiveEventForm() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState(initialFormData);

  // Helper to update form fields dynamically
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) setCurrentStep((prev) => (prev + 1) as 2 | 3);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((prev) => (prev - 1) as 1 | 2);
  };

  // Mock submission handler for when you connect your backend/API
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // FUTURE API / SERVER ACTION CALL HERE
    // e.g., await fetch('/api/submit-event', { method: 'POST', body: JSON.stringify(formData) })
    console.log("Submitted Data:", formData);
    setCurrentStep(3);
  };

  return (
    <div className="w-[640px] max-w-[640px] px-6 py-8 inline-flex flex-col justify-start items-start gap-8  text-zinc-900 dark:bg-gray-900 dark:text-white">
      {/* Header Section */}
      <div className="self-stretch h-80 relative">
        <div className="w-[592px] left-0 top-[44px] absolute inline-flex flex-col justify-start items-start">
          <h1 className="justify-center text-zinc-900 text-3xl font-bold   leading-9 dark:text-white">
            Plan a live event with ZoikoStream.
          </h1>
        </div>
        <div className="w-[592px] left-0 top-[93.69px] absolute inline-flex flex-col justify-start items-start">
          <p className="justify-center text-gray-500 text-base font-normal   leading-6 dark:text-gray-300">
            Share the event basics first, then add production and logistics details.
            <br />
            ZoikoStream uses the information to route your inquiry. No account is
            <br />
            required, and submitting the form does not reserve capacity or confirm a
            <br />
            service.
          </p>
        </div>
        <a
          href="/live-event-guide"
          className="w-64 left-0 top-[210.17px] absolute justify-center text-blue-500 hover:underline text-sm font-medium   leading-6"
        >
          Read the Live Events planning guide →
        </a>
        <div className="w-[592px] px-4 py-3.5 left-0 top-[257.97px] absolute bg-slate-100 rounded-lg border-l-[3px] border-r border-t border-b border-blue-500 inline-flex flex-col justify-start items-start dark:bg-gray-800 dark:border-blue-500">
          <p className="justify-center">
            <span className="text-zinc-900 text-xs font-bold   leading-5 dark:text-white">
              Before you continue:
            </span>
            <span className="text-gray-500 text-xs font-normal   leading-5 dark:text-gray-300">
              {" "}
              do not include passwords, access keys, private attendee lists,
              <br />
              health details, or other sensitive personal information in this form.
            </span>
          </p>
        </div>
      </div>

      {/* Dynamic Stepper Bar */}
      <div className="self-stretch py-4 border-t border-b border-gray-200 inline-flex justify-center items-center gap-2.5 flex-wrap content-center dark:border-gray-700">
        {/* Step 1 Indicator */}
        <div className="flex justify-start items-center gap-1.5">
          <div
            className={`size-4 pb-[1.60px] rounded-lg flex justify-center items-center ${
              currentStep > 1
                ? "bg-green-600"
                : currentStep === 1
                ? "bg-blue-500"
                : "bg-gray-200 dark:bg-gray-700"
            }`}
          >
            <span className="text-center text-white text-xs font-semibold   leading-4">
              1
            </span>
          </div>
          <span
            className={`text-xs   ${
              currentStep === 1
                ? "text-blue-500 font-semibold"
                : "text-gray-500 dark:text-gray-400 font-normal"
            }`}
          >
            Event basics
          </span>
        </div>

        <span className="text-gray-300 text-xs dark:text-gray-600">→</span>

        {/* Step 2 Indicator */}
        <div className="flex justify-start items-center gap-1.5">
          <div
            className={`size-4 pb-[1.60px] rounded-lg flex justify-center items-center ${
              currentStep > 2
                ? "bg-green-600"
                : currentStep === 2
                ? "bg-blue-500"
                : "bg-gray-200 dark:bg-gray-700"
            }`}
          >
            <span
              className={`text-center text-xs   leading-4 ${
                currentStep >= 2
                  ? "text-white font-semibold"
                  : "text-gray-500 dark:text-gray-300 font-normal"
              }`}
            >
              2
            </span>
          </div>
          <span
            className={`text-xs   ${
              currentStep === 2
                ? "text-blue-500 font-bold"
                : "text-gray-500 dark:text-gray-400 font-normal"
            }`}
          >
            Production details
          </span>
        </div>

        <span className="text-gray-300 text-xs dark:text-gray-600">→</span>

        {/* Step 3 Indicator */}
        <div className="flex justify-start items-center gap-1.5">
          <div
            className={`size-4 pb-[1.60px] rounded-lg flex justify-center items-center ${
              currentStep === 3
                ? "bg-blue-500"
                : "bg-gray-200 dark:bg-gray-700"
            }`}
          >
            <span
              className={`text-center text-xs   leading-4 ${
                currentStep === 3
                  ? "text-white font-semibold"
                  : "text-gray-500 dark:text-gray-300 font-normal"
              }`}
            >
              3
            </span>
          </div>
          <span
            className={`text-xs   ${
              currentStep === 3
                ? "text-blue-500 font-semibold"
                : "text-gray-500 dark:text-gray-400 font-normal"
            }`}
          >
            Confirmation
          </span>
        </div>
      </div>

      {/* Dynamic Form Body */}
      <div className="self-stretch pt-2.5 flex flex-col justify-start items-start gap-7">
        {/* STEP 1 CONTENT */}
        {currentStep === 1 && (
          <form
            onSubmit={handleNext}
            className="self-stretch px-8 pt-8 pb-9 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start dark:bg-gray-800 dark:outline-gray-700"
          >
            <h2 className="self-stretch text-zinc-900 text-lg font-bold   leading-8 dark:text-white">
              Step 1 — Event basics
            </h2>
            <p className="self-stretch pt-1.5 text-gray-500 text-sm font-normal   leading-5 dark:text-gray-300">
              Share enough to route the event first. Production and logistics detail follows in the next step.
            </p>

            {/* Work Email */}
            <div className="self-stretch pt-6 flex flex-col justify-start items-start gap-1.5">
              <label className="text-zinc-900 text-sm font-medium   dark:text-white">
                Work email <span className="text-blue-500">*</span>
              </label>
              <div className="self-stretch min-h-11 px-3.5 py-3.5 bg-white rounded-lg outline outline-1 outline-gray-300 dark:bg-gray-900 dark:outline-gray-700">
                <input
                  type="email"
                  name="workEmail"
                  required
                  value={formData.workEmail}
                  onChange={handleChange}
                  placeholder="name@organization.com"
                  className="w-full bg-transparent text-zinc-900 text-sm   focus:outline-none dark:text-gray-200 dark:placeholder-gray-500"
                />
              </div>
            </div>

            {/* Organization */}
            <div className="self-stretch pt-5 flex flex-col justify-start items-start gap-1.5">
              <label className="text-zinc-900 text-sm font-medium   dark:text-white">
                Organization or event host <span className="text-blue-500">*</span>
              </label>
              <div className="self-stretch min-h-11 px-3.5 py-3.5 bg-white rounded-lg outline outline-1 outline-gray-300 dark:bg-gray-900 dark:outline-gray-700">
                <input
                  type="text"
                  name="organization"
                  required
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Organization, institution, family, or authorized host"
                  className="w-full bg-transparent text-zinc-900 text-sm   focus:outline-none dark:text-gray-200 dark:placeholder-gray-500"
                />
              </div>
            </div>

            {/* Event Type */}
            <div className="self-stretch pt-5 flex flex-col justify-start items-start gap-1.5">
              <label className="text-zinc-900 text-sm font-medium   dark:text-white">
                Event type <span className="text-blue-500">*</span>
              </label>
              <div className="self-stretch min-h-11 pl-4 pr-4 py-3 bg-white rounded-lg outline outline-1 outline-gray-300 dark:bg-gray-900 dark:outline-gray-700">
                <select
                  name="eventType"
                  required
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full bg-transparent text-zinc-900 text-sm   focus:outline-none dark:text-gray-200"
                >
                  <option value="" disabled>Select one</option>
                  <option value="Worship">Worship</option>
                  <option value="Conference">Conference</option>
                  <option value="Memorial">Memorial</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Event Date */}
            <div className="self-stretch pt-5 flex flex-col justify-start items-start gap-1.5">
              <label className="text-zinc-900 text-sm font-medium   dark:text-white">
                Event date or planning window <span className="text-blue-500">*</span>
              </label>
              <div className="self-stretch min-h-11 px-3.5 py-3.5 bg-white rounded-lg outline outline-1 outline-gray-300 dark:bg-gray-900 dark:outline-gray-700">
                <input
                  type="text"
                  name="eventDate"
                  required
                  value={formData.eventDate}
                  onChange={handleChange}
                  placeholder="Select a date, enter a range, or “date not fixed”"
                  className="w-full bg-transparent text-zinc-900 text-sm   focus:outline-none dark:text-gray-200 dark:placeholder-gray-500"
                />
              </div>
              <p className="text-gray-500 text-xs   dark:text-gray-400">
                Date is for planning and routing; submission does not reserve capacity.
              </p>
            </div>

            {/* Country & Timezone */}
            <div className="self-stretch pt-5 flex flex-col sm:flex-row justify-center items-start gap-4">
              <div className="flex-1 w-full flex flex-col gap-1.5">
                <label className="text-zinc-900 text-sm font-medium   dark:text-white">
                  Country <span className="text-blue-500">*</span>
                </label>
                <div className="min-h-11 pl-4 pr-4 py-3 bg-white rounded-lg outline outline-1 outline-gray-300 dark:bg-gray-900 dark:outline-gray-700">
                  <select
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full bg-transparent text-zinc-900 text-sm   focus:outline-none dark:text-gray-200"
                  >
                    <option value="" disabled>Select country</option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                  </select>
                </div>
              </div>

              <div className="flex-1 w-full flex flex-col gap-1.5">
                <label className="text-zinc-900 text-sm font-medium   dark:text-white">
                  Time zone <span className="text-blue-500">*</span>
                </label>
                <div className="min-h-11 pl-4 pr-4 py-3 bg-white rounded-lg outline outline-1 outline-gray-300 dark:bg-gray-900 dark:outline-gray-700">
                  <select
                    name="timeZone"
                    required
                    value={formData.timeZone}
                    onChange={handleChange}
                    className="w-full bg-transparent text-zinc-900 text-sm   focus:outline-none dark:text-gray-200"
                  >
                    <option value="" disabled>Select time zone</option>
                    <option value="US Eastern (UTC-05:00)">US Eastern (UTC-05:00)</option>
                    <option value="US Pacific (UTC-08:00)">US Pacific (UTC-08:00)</option>
                    <option value="UTC">UTC</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="self-stretch pt-5 pb-2 flex flex-col justify-start items-start gap-1.5">
              <label className="text-zinc-900 text-sm font-medium   dark:text-white">
                What do you need help with? <span className="text-blue-500">*</span>
              </label>
              <div className="self-stretch min-h-24 px-3.5 pt-3 pb-4 bg-white rounded-lg outline outline-1 outline-gray-300 dark:bg-gray-900 dark:outline-gray-700">
                <textarea
                  name="description"
                  required
                  rows={3}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Briefly describe the event and intended audience."
                  className="w-full bg-transparent text-zinc-900 text-sm   focus:outline-none resize-none dark:text-gray-200 dark:placeholder-gray-500"
                />
              </div>
            </div>

            {/* Step 1 Action Button */}
            <div className="w-full pt-4 flex justify-center items-center">
              <button
                type="submit"
                className="w-72 min-h-12 px-6 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-[10px] flex justify-center items-center cursor-pointer hover:opacity-90 transition-opacity"
              >
                <span className="text-center text-slate-950 text-base font-medium  ">
                  Continue to production details
                </span>
              </button>
            </div>

            <div className="self-stretch pt-4 text-center text-zinc-900 text-lg font-normal   leading-7 dark:text-white">
              No account required. Do not include passwords, access keys, private attendee lists, or sensitive personal information.
            </div>
          </form>
        )}

        {/* STEP 2 CONTENT */}
        {currentStep === 2 && (
          <form
            onSubmit={handleSubmit}
            className="self-stretch p-8 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start dark:bg-gray-800 dark:outline-gray-700"
          >
            <h2 className="self-stretch text-zinc-900 text-lg font-bold   leading-8 dark:text-white">
              Step 2 — Production details
            </h2>
            <p className="self-stretch pt-1.5 text-gray-500 text-sm font-normal   leading-5 dark:text-gray-300">
              Useful detail helps us route the event correctly. Nothing here is a guarantee of capability or availability.
            </p>

            {/* Estimated Audience */}
            <div className="self-stretch pt-6 flex flex-col gap-1.5">
              <label className="text-zinc-900 text-sm font-medium   dark:text-white">
                Estimated audience
              </label>
              <div className="self-stretch min-h-11 pl-4 pr-4 py-3 bg-white rounded-lg outline outline-1 outline-gray-300 dark:bg-gray-900 dark:outline-gray-700">
                <select
                  name="estimatedAudience"
                  value={formData.estimatedAudience}
                  onChange={handleChange}
                  className="w-full bg-transparent text-zinc-900 text-sm   focus:outline-none dark:text-gray-200"
                >
                  <option value="" disabled>Select a range</option>
                  <option value="1-50">1-50</option>
                  <option value="50-200">50-200</option>
                  <option value="200-1000">200-1000</option>
                  <option value="1000+">1000+</option>
                </select>
              </div>
              <p className="text-gray-500 text-xs   dark:text-gray-400">
                Use a range when the exact figure is unknown.
              </p>
            </div>

            {/* Audience Access */}
            <div className="self-stretch pt-5 flex flex-col gap-1.5">
              <label className="text-zinc-900 text-sm font-medium   dark:text-white">
                Audience access <span className="text-blue-500">*</span>
              </label>
              <div className="self-stretch min-h-11 pl-4 pr-4 py-3 bg-white rounded-lg outline outline-1 outline-gray-300 dark:bg-gray-900 dark:outline-gray-700">
                <select
                  name="audienceAccess"
                  required
                  value={formData.audienceAccess}
                  onChange={handleChange}
                  className="w-full bg-transparent text-zinc-900 text-sm   focus:outline-none dark:text-gray-200"
                >
                  <option value="" disabled>Select one</option>
                  <option value="Public">Public</option>
                  <option value="Private/Unlisted">Private/Unlisted</option>
                  <option value="Ticketed">Ticketed</option>
                </select>
              </div>
            </div>

            {/* Contribution Locations */}
            <div className="self-stretch pt-5 flex flex-col gap-1.5">
              <label className="text-zinc-900 text-sm font-medium   dark:text-white">
                Contribution locations <span className="text-blue-500">*</span>
              </label>
              <div className="self-stretch min-h-11 pl-4 pr-4 py-3 bg-white rounded-lg outline outline-1 outline-gray-300 dark:bg-gray-900 dark:outline-gray-700">
                <select
                  name="contributionLocations"
                  required
                  value={formData.contributionLocations}
                  onChange={handleChange}
                  className="w-full bg-transparent text-zinc-900 text-sm   focus:outline-none dark:text-gray-200"
                >
                  <option value="" disabled>Select one</option>
                  <option value="Single Location">Single Location</option>
                  <option value="Multiple Locations">Multiple Locations</option>
                  <option value="Remote Speakers">Remote Speakers</option>
                </select>
              </div>
            </div>

            {/* Captions & Recording Grid */}
            <div className="self-stretch pt-5 flex flex-col sm:flex-row gap-4">
              <div className="flex-1 w-full flex flex-col gap-1.5">
                <label className="text-zinc-900 text-sm font-medium   dark:text-white">
                  Captions and languages
                </label>
                <div className="min-h-11 pl-4 pr-4 py-3 bg-white rounded-lg outline outline-1 outline-gray-300 dark:bg-gray-900 dark:outline-gray-700">
                  <select
                    name="captionsLanguages"
                    value={formData.captionsLanguages}
                    onChange={handleChange}
                    className="w-full bg-transparent text-zinc-900 text-sm   focus:outline-none dark:text-gray-200"
                  >
                    <option value="" disabled>Select one</option>
                    <option value="None">None</option>
                    <option value="English Auto-Captions">English Auto-Captions</option>
                    <option value="Multi-language">Multi-language</option>
                  </select>
                </div>
              </div>

              <div className="flex-1 w-full flex flex-col gap-1.5">
                <label className="text-zinc-900 text-sm font-medium   dark:text-white">
                  Recording and replay
                </label>
                <div className="min-h-11 pl-4 pr-4 py-3 bg-white rounded-lg outline outline-1 outline-gray-300 dark:bg-gray-900 dark:outline-gray-700">
                  <select
                    name="recordingReplay"
                    value={formData.recordingReplay}
                    onChange={handleChange}
                    className="w-full bg-transparent text-zinc-900 text-sm   focus:outline-none dark:text-gray-200"
                  >
                    <option value="" disabled>Select one</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Production Notes */}
            <div className="self-stretch pt-5 flex flex-col gap-1.5">
              <label className="text-zinc-900 text-sm font-medium   dark:text-white">
                Production notes
              </label>
              <div className="self-stretch min-h-24 px-3.5 pt-3 pb-4 bg-white rounded-lg outline outline-1 outline-gray-300 dark:bg-gray-900 dark:outline-gray-700">
                <textarea
                  name="productionNotes"
                  rows={3}
                  value={formData.productionNotes}
                  onChange={handleChange}
                  placeholder="Describe venue, sources, schedule, accessibility, privacy, or resilience needs."
                  className="w-full bg-transparent text-zinc-900 text-sm   focus:outline-none resize-none dark:text-gray-200 dark:placeholder-gray-500"
                />
              </div>
              <p className="text-gray-500 text-xs   dark:text-gray-400">
                Avoid sensitive personal, medical, legal, or security details.
              </p>
            </div>

            {/* Authorization Checkbox */}
            <div className="self-stretch pt-4 border-t border-slate-100 flex justify-start items-center gap-2.5 dark:border-gray-700">
              <input
                type="checkbox"
                id="authorized"
                name="authorized"
                required
                checked={formData.authorized}
                onChange={handleChange}
                className="size-4 rounded border border-neutral-500 dark:bg-gray-900 dark:border-gray-600"
              />
              <label
                htmlFor="authorized"
                className="text-gray-500 text-sm   cursor-pointer dark:text-gray-300"
              >
                I confirm I am authorized to submit planning information for this event.
              </label>
            </div>

            {/* Step 2 Action Buttons */}
            <div className="self-stretch pt-7 flex justify-between items-center">
              <button
                type="button"
                onClick={handleBack}
                className="w-24 min-h-12 px-6 py-3.5 bg-zinc-100 rounded-[10px] outline outline-1 outline-gray-300 flex justify-center items-center cursor-pointer hover:bg-zinc-200 transition-colors dark:bg-gray-700 dark:outline-gray-600 dark:hover:bg-gray-600"
              >
                <span className="text-center text-zinc-900 text-base font-medium   dark:text-white">
                  Back
                </span>
              </button>
              <button
                type="submit"
                className="min-h-12 px-6 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-[10px] flex justify-center items-center cursor-pointer hover:opacity-90 transition-opacity"
              >
                <span className="text-center text-slate-950 text-base font-medium  ">
                  Submit event inquiry
                </span>
              </button>
            </div>
          </form>
        )}

        {/* STEP 3 CONTENT */}
        {currentStep === 3 && (
          <div className="self-stretch p-8 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-center dark:bg-gray-800 dark:outline-gray-700">
            <div className="self-stretch pt-2.5 pb-1.5 flex flex-col justify-start items-center gap-4">
              <h2 className="text-center text-zinc-900 text-xl font-semibold   leading-8 dark:text-white">
                Event inquiry received
              </h2>
              <span className="text-center text-blue-500 text-base font-normal   leading-6 tracking-wide">
                Reference: ZS-EVT-7435
              </span>
              <p className="w-96 text-center text-gray-500 text-sm font-normal   leading-6 dark:text-gray-300">
                Your planning details are recorded for routing. This confirmation does not reserve capacity, confirm staffing, approve a price, or create a service commitment.
              </p>

              {/* Dynamic Summary Table */}
              <div className="w-96 pt-6 border-t border-slate-100 flex flex-col justify-start items-start dark:border-gray-700">
                <div className="self-stretch py-2 border-b border-slate-100 flex justify-between items-center dark:border-gray-700">
                  <span className="text-zinc-900 text-sm font-medium   dark:text-white">
                    Event type
                  </span>
                  <span className="text-gray-500 text-sm font-normal   dark:text-gray-300">
                    {formData.eventType || "N/A"}
                  </span>
                </div>
                <div className="self-stretch py-2 border-b border-slate-100 flex justify-between items-center dark:border-gray-700">
                  <span className="text-zinc-900 text-sm font-medium   dark:text-white">
                    Date / window
                  </span>
                  <span className="text-gray-500 text-sm font-normal   dark:text-gray-300">
                    {formData.eventDate || "N/A"}
                  </span>
                </div>
                <div className="self-stretch py-2 border-b border-slate-100 flex justify-between items-center dark:border-gray-700">
                  <span className="text-zinc-900 text-sm font-medium   dark:text-white">
                    Time zone
                  </span>
                  <span className="text-gray-500 text-sm font-normal   dark:text-gray-300">
                    {formData.timeZone || "N/A"}
                  </span>
                </div>
                <div className="self-stretch py-2 border-b border-slate-100 flex justify-between items-center dark:border-gray-700">
                  <span className="text-zinc-900 text-sm font-medium   dark:text-white">
                    Host
                  </span>
                  <span className="text-gray-500 text-sm font-normal   dark:text-gray-300">
                    {formData.organization || "N/A"}
                  </span>
                </div>
              </div>

              {/* Confirmation Action Buttons */}
              <div className="self-stretch pt-4 inline-flex justify-center items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="min-h-12 px-6 py-3.5 rounded-[10px] outline outline-1 outline-gray-800 flex justify-center items-center hover:bg-gray-100 transition-colors dark:outline-gray-600 dark:hover:bg-gray-700"
                >
                  <span className="text-center text-zinc-900 text-base font-medium   dark:text-white">
                    Edit Details
                  </span>
                </button>
                <button
                  type="button"
                  className="min-h-12 px-6 py-3.5 rounded-[10px] outline outline-1 outline-gray-800 flex justify-center items-center hover:bg-gray-100 transition-colors dark:outline-gray-600 dark:hover:bg-gray-700"
                >
                  <span className="text-center text-zinc-900 text-base font-medium   dark:text-white">
                    Planning guide
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer Links */}
        <div className="self-stretch inline-flex justify-center items-start gap-4 flex-wrap content-start">
          <a href="#" className="text-gray-500 text-xs hover:underline dark:text-gray-400">
            Privacy
          </a>
          <a href="#" className="text-gray-500 text-xs hover:underline dark:text-gray-400">
            Accessibility
          </a>
          <a href="#" className="text-gray-500 text-xs hover:underline dark:text-gray-400">
            Security
          </a>
          <a href="#" className="text-gray-500 text-xs hover:underline dark:text-gray-400">
            Live Events FAQs
          </a>
        </div>
      </div>

      {/* Static Information Footer */}
      <div className="self-stretch pt-5 border-t border-gray-200 flex flex-col justify-start items-start gap-2.5 dark:border-gray-700">
        <h3 className="text-zinc-900 text-sm font-bold   dark:text-white">
          Before you begin
        </h3>
        <ul className="self-stretch flex flex-col justify-start items-start gap-1">
          <li className="pl-4 relative text-gray-500 text-sm font-normal   leading-5 dark:text-gray-400">
            <span className="absolute left-0 text-gray-300 dark:text-gray-600">–</span>
            This inquiry is for planning and routing only — it is not a booking, quote, or service confirmation.
          </li>
          <li className="pl-4 relative text-gray-500 text-sm font-normal   leading-5 dark:text-gray-400">
            <span className="absolute left-0 text-gray-300 dark:text-gray-600">–</span>
            No account is required to complete either step.
          </li>
          <li className="pl-4 relative text-gray-500 text-sm font-normal   leading-5 dark:text-gray-400">
            <span className="absolute left-0 text-gray-300 dark:text-gray-600">–</span>
            Sensitive events (memorials, worship, private occasions) are handled with respectful, non-exploitative language.
          </li>
          <li className="pl-4 relative text-gray-500 text-sm font-normal   leading-5 dark:text-gray-400">
            <span className="absolute left-0 text-gray-300 dark:text-gray-600">–</span>
            For an urgent venue-safety or emergency issue, ZoikoStream is not an emergency service — contact local emergency services directly.
          </li>
        </ul>
      </div>
    </div>
  );
}