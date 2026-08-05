import { BrowseByAudience, BrowseByTopic, FeaturedGuideBanner, QuickLinksSection, ResourcesHeroSection, TargetedAssistanceSection } from "@/components/resources";

export default function page(){
    return(
        <main>
            <ResourcesHeroSection/>
            <BrowseByAudience/>
            <BrowseByTopic/>
            <QuickLinksSection/>
            <TargetedAssistanceSection/>
            <FeaturedGuideBanner/>
        </main>
    )
}