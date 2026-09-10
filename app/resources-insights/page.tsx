import React from 'react';
import BlogHeroSection from '@/components/resources-insights/BlogHeroSection';
import BlogFeaturedInsightSection from '@/components/resources-insights/BlogFeaturedInsightSection';
import BlogSourceGovernanceSection from '@/components/resources-insights/BlogSourceGovernanceSection';
import BlogInsightsTypesSection from '@/components/resources-insights/BlogInsightsTypesSection';
import BlogAllArticlesSection from '@/components/resources-insights/BlogAllArticlesSection';
import BlogContinueSeriesSection from '@/components/resources-insights/BlogContinueSeriesSection';
import BlogContinueLearningSection from '@/components/resources-insights/BlogContinueLearningSection';
import BlogStayInformedSubscribeSection from '@/components/resources-insights/BlogStayInformedSubscribeSection';
import BlogArticleDetailSection from '@/components/resources-insights/BlogArticleDetailSection';
import BlogExpertCTASection from '@/components/resources-insights/BlogExpertCTASection';

export default function ResourceBlogsAndInsightsPage() {
  return (
    <main className="w-full flex flex-col justify-start items-start min-h-screen bg-slate-950 overflow-x-hidden">
      <BlogHeroSection />
      <BlogFeaturedInsightSection />
      
      <BlogInsightsTypesSection />
      <BlogAllArticlesSection />
      <BlogContinueSeriesSection />
      <BlogArticleDetailSection />
      <BlogSourceGovernanceSection />
      <BlogContinueLearningSection />
      <BlogStayInformedSubscribeSection />
      <BlogExpertCTASection />
    </main>
  );
}
