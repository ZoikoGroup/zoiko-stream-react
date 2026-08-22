'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const jobs = [
  {
    title: 'Frontend Engineer, Developer Platform',
    badge: 'Engineering & Infrastructure',
    location: 'United States · Remote eligible',
    type: 'Full-time',
    req: 'Req ZS-1058',
    desc: 'Build the documentation, dashboards, and SDK tooling developers use to integrate ZoikoStream video into their products.',
  },
  {
    title: 'Technical Support Engineer',
    badge: 'Customer & Solutions',
    location: 'United States · Remote eligible',
    type: 'Full-time',
    req: 'Req ZS-4022',
    desc: 'Diagnose and resolve customer-reported platform and API issues, escalating clearly when needed.',
  },
  {
    title: 'Event Production Specialist',
    badge: 'Live Events & Operations',
    location: 'United States · Field / event-based',
    type: 'Full-time',
    req: 'Req ZS-3018',
    desc: 'Support on-site and remote production for scheduled events, with travel to event locations as required.',
  },
  {
    title: 'Site Reliability Engineer',
    badge: 'Engineering & Infrastructure',
    location: 'United States & Canada · Remote eligible',
    type: 'Full-time',
    req: 'Req ZS-1051',
    desc: 'Own the reliability of production video delivery, from alerting to incident response to capacity planning.',
  },
  {
    title: 'Senior Product Manager, Live Events',
    badge: 'Product & Design',
    location: 'New York, NY · Hybrid',
    type: 'Full-time',
    req: 'Req ZS-2034',
    desc: 'Shape the roadmap for readiness checks, run-of-show tooling, and operator controls used during live broadcasts.',
  },
  {
    title: 'Partner Manager, Ecosystem',
    badge: 'Commercial & Partnerships',
    location: 'London, UK · Hybrid',
    type: 'Full-time',
    req: 'Req ZS-5019',
    desc: 'Develop and manage integration and go-to-market partnerships across the ZoikoStream ecosystem.',
  },
];

export default function OpenRolesSearchSection() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <section className="w-full bg-slate-100 py-16 border-b border-gray-200 text-slate-900" id="roles">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold   text-zinc-900">
              Find your next role
            </h2>
            <p className="text-gray-500 text-sm font-normal   ">
              Search current opportunities at ZoikoStream. Filters reflect the eligibility and work arrangement stated in each posting.
            </p>
          </div>

          <span className="text-gray-500 text-xs font-normal font-['IBM_Plex_Mono'] shrink-0">
            16 open roles
          </span>
        </div>

        {/* Search & Filter Bar Card */}
        <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-xs flex flex-col gap-4">
          {/* Top Search Input */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="flex-1 w-full relative">
              <input
                type="text"
                placeholder="Search by role, skill, or keyword"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 bg-white rounded-lg border border-gray-300 text-slate-900 text-sm    focus:outline-hidden"
              />
            </div>
            <button
              type="button"
              className="w-full sm:w-auto px-6 py-3 bg-zinc-900 text-white rounded-lg text-sm font-semibold    hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
            >
              <span>🔍</span> Search
            </button>
          </div>

          {/* Filter Dropdowns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
            <select className="p-2.5 bg-white rounded-lg border border-gray-300 text-zinc-900 text-sm    focus:outline-hidden">
              <option>Team</option>
              <option>Engineering &amp; Infrastructure</option>
              <option>Product &amp; Design</option>
              <option>Live Events &amp; Operations</option>
              <option>Customer &amp; Solutions</option>
            </select>

            <select className="p-2.5 bg-white rounded-lg border border-gray-300 text-zinc-900 text-sm    focus:outline-hidden">
              <option>Location / eligible geography</option>
              <option>United States</option>
              <option>Canada</option>
              <option>London, UK</option>
            </select>

            <select className="p-2.5 bg-white rounded-lg border border-gray-300 text-zinc-900 text-sm    focus:outline-hidden">
              <option>Work arrangement</option>
              <option>Remote eligible</option>
              <option>Hybrid</option>
              <option>Field / event-based</option>
            </select>

            <select className="p-2.5 bg-white rounded-lg border border-gray-300 text-zinc-900 text-sm    focus:outline-hidden">
              <option>Employment type</option>
              <option>Full-time</option>
              <option>Contract</option>
            </select>

            <select className="p-2.5 bg-white rounded-lg border border-gray-300 text-zinc-900 text-sm    focus:outline-hidden">
              <option>Sort: Most recent</option>
              <option>Sort: Title (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Job Cards List */}
        <div className="flex flex-col gap-5">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="p-7 bg-white rounded-2xl border border-gray-200 shadow-xs flex flex-col gap-4 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                <h3 className="text-zinc-900 text-lg font-bold  ">
                  {job.title}
                </h3>
                <span className="px-3 py-1 bg-emerald-50 text-teal-400 text-xs font-normal font-['IBM_Plex_Mono'] rounded-full shrink-0">
                  {job.badge}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-gray-500 text-xs font-normal   ">
                <span>📍 {job.location}</span>
                <span>•</span>
                <span>💼 {job.type}</span>
                <span>•</span>
                <span>🔖 {job.req}</span>
              </div>

              <p className="text-gray-600 text-sm font-normal    leading-relaxed max-w-3xl">
                {job.desc}
              </p>

              <div className="pt-2">
                <Link
                  href="/talk-to-an-expert"
                  className="text-blue-500 text-sm font-semibold    hover:underline"
                >
                  View role →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Bar */}
        <div className="flex justify-center items-center gap-2 pt-4">
          <button className="px-4 py-2 bg-white rounded-lg border border-gray-300 text-gray-400 text-sm font-normal    cursor-not-allowed">
            Previous
          </button>
          <button className="size-9 bg-zinc-900 text-white rounded-lg text-sm font-normal   ">
            1
          </button>
          <button className="size-9 bg-white rounded-lg border border-gray-300 text-gray-600 text-sm font-normal    hover:bg-gray-50">
            2
          </button>
          <button className="size-9 bg-white rounded-lg border border-gray-300 text-gray-600 text-sm font-normal    hover:bg-gray-50">
            3
          </button>
          <button className="px-4 py-2 bg-white rounded-lg border border-gray-300 text-gray-600 text-sm font-normal    hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
