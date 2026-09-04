'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface PastRecordCard {
  id: string;
  title: string;
  badge: 'COMPLETED' | 'FOLLOW-UP' | 'CANCELLED' | 'RESCHEDULED';
  badgeType: 'completed' | 'followup' | 'cancelled' | 'rescheduled';
  dateText: string;
  dateColor?: string;
  description: string;
  image: string;
}

const ALL_RECORDS: PastRecordCard[] = [
  {
    id: 'player-sdk',
    title: 'Player SDK Update — Global',
    badge: 'COMPLETED',
    badgeType: 'completed',
    dateText: 'Aug 30, 2026',
    description: 'No customer impact reported',
    image: '/images/service-updates/su7.png',
  },
  {
    id: 'webhook-delivery',
    title: 'Webhook Delivery Infrastructure — US-West',
    badge: 'FOLLOW-UP',
    badgeType: 'followup',
    dateText: 'Aug 22, 2026',
    description: 'Follow-up: Extended monitoring through Aug 29',
    image: '/images/service-updates/su8.png',
  },
  {
    id: 'vod-transcoding',
    title: 'VOD Transcoding Engine Maintenance',
    badge: 'CANCELLED',
    badgeType: 'cancelled',
    dateText: 'Aug 15, 2026',
    description: 'Reason: Deferred to next quarter',
    image: '/images/service-updates/su1.png',
  },
  {
    id: 'auth-service',
    title: 'Authentication Service Upgrade',
    badge: 'COMPLETED',
    badgeType: 'completed',
    dateText: 'Aug 10, 2026',
    description: 'No customer impact reported',
    image: '/images/service-updates/su10.png',
  },
  {
    id: 'ingest-protocol',
    title: 'Ingest Protocol Update — APAC',
    badge: 'RESCHEDULED',
    badgeType: 'rescheduled',
    dateText: 'Originally Aug 3, completed Aug 8',
    dateColor: 'text-amber-400',
    description: 'Brief ingest interruption during window',
    image: '/images/service-updates/su11.png',
  },
  {
    id: 'storage-rebalance',
    title: 'Storage Tier Rebalancing — EU',
    badge: 'COMPLETED',
    badgeType: 'completed',
    dateText: 'Jul 28, 2026',
    description: 'No customer impact reported',
    image: '/images/service-updates/su12.png',
  },
];

export default function PastRecordsSection() {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'COMPLETED' | 'CANCELLED' | 'FOLLOW-UP'>('ALL');

  const filteredRecords = ALL_RECORDS.filter((rec) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'COMPLETED') return rec.badge === 'COMPLETED';
    if (activeFilter === 'CANCELLED') return rec.badge === 'CANCELLED';
    if (activeFilter === 'FOLLOW-UP') return rec.badge === 'FOLLOW-UP';
    return true;
  });

  const getBadgeStyle = (type: PastRecordCard['badgeType']) => {
    switch (type) {
      case 'completed':
        return 'text-emerald-400 bg-emerald-950/80 border-emerald-800/80';
      case 'followup':
        return 'text-blue-400 bg-blue-950/80 border-blue-800/80';
      case 'cancelled':
        return 'text-rose-400 bg-rose-950/80 border-rose-800/80';
      case 'rescheduled':
        return 'text-amber-400 bg-amber-950/80 border-amber-800/80';
    }
  };

  return (
    <section className="relative w-full bg-[#070b14] text-white py-16 lg:py-24 border-b border-slate-800/80">
      {/* Background Graphic */}
      <div 
        className="absolute inset-0 pointer-events-none -z-0 opacity-40 mix-blend-screen bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/service-updates/bgg.png')`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Title & Subtitle */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight mb-3">
            Completed, cancelled, and changed service updates
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-4xl leading-relaxed">
            Historical record of planned maintenance outcomes. Material schedule changes, cancellations, and corrections are preserved — never silently rewritten.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-[#0d1424]/90 rounded-2xl border border-slate-800/90 p-2 sm:p-2.5 mb-8 flex flex-wrap items-center justify-between gap-4 shadow-lg">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => setActiveFilter('ALL')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeFilter === 'ALL'
                  ? 'bg-[#27c3a7] text-[#06181f] shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60 font-medium'
              }`}
            >
              All Statuses
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('COMPLETED')}
              className={`px-4 py-2 rounded-xl text-xs transition-all ${
                activeFilter === 'COMPLETED'
                  ? 'bg-[#27c3a7] text-[#06181f] font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60 font-medium'
              }`}
            >
              Completed
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('CANCELLED')}
              className={`px-4 py-2 rounded-xl text-xs transition-all ${
                activeFilter === 'CANCELLED'
                  ? 'bg-[#27c3a7] text-[#06181f] font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60 font-medium'
              }`}
            >
              Cancelled
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('FOLLOW-UP')}
              className={`px-4 py-2 rounded-xl text-xs transition-all ${
                activeFilter === 'FOLLOW-UP'
                  ? 'bg-[#27c3a7] text-[#06181f] font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60 font-medium'
              }`}
            >
              Follow-up
            </button>
          </div>

          <span className="font-mono text-[10px] font-bold text-teal-400 tracking-wider uppercase pr-2">
            {filteredRecords.length} PAST RECORDS SHOWN
          </span>
        </div>

        {/* 6 Past Record Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredRecords.map((card) => (
            <div
              key={card.id}
              className="group bg-[#0d1424]/90 rounded-2xl border border-slate-800/90 overflow-hidden shadow-lg p-5 flex flex-col justify-between hover:border-slate-700/90 transition-all duration-300"
            >
              <div>
                {/* Image Banner Header */}
                <div className="relative w-full h-44 rounded-xl overflow-hidden mb-4 bg-slate-900">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424]/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Title & Badge */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-white text-base sm:text-[17px] leading-snug group-hover:text-teal-300 transition-colors">
                    {card.title}
                  </h3>
                  <span
                    className={`font-mono text-[9px] font-bold px-2 py-0.5 rounded border tracking-wider uppercase shrink-0 ${getBadgeStyle(
                      card.badgeType
                    )}`}
                  >
                    {card.badge}
                  </span>
                </div>

                {/* Date */}
                <span className={`font-mono text-xs font-semibold mb-2 block ${card.dateColor || 'text-teal-400'}`}>
                  {card.dateText}
                </span>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
