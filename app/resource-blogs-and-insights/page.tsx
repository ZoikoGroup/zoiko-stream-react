import React from 'react';
import {
  BlogHeroSection,
  BlogFeaturedInsightSection,
  BlogBrowseTopicSection,
  BlogAllArticlesSection,
  BlogContinueSeriesSection,
  BlogContinueLearningSection,
  BlogStayInformedSubscribeSection,
} from '@/components/resource-blogs-and-insights';

export default function ResourceBlogsAndInsightsPage() {
  return (
    <main className="w-full flex flex-col justify-start items-start min-h-screen bg-slate-950 overflow-x-hidden">
      <BlogHeroSection />
      <BlogFeaturedInsightSection />
      <BlogBrowseTopicSection />
      <BlogAllArticlesSection />
      <BlogContinueSeriesSection />
      <BlogContinueLearningSection />
      <BlogStayInformedSubscribeSection />
    </main>
  );
}
