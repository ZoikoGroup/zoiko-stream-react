import { BroadcastCalloutBanner, CompanyHeroSection, IdentityOperatingContext, LeadershipGovernanceSection, NewsAndTrustRoutesSection, PurposeAndPrinciplesSection, WorkWithUsSection } from "@/components/company-overview";

export default function page(){
    return(
        <main>
            <CompanyHeroSection/>
            <IdentityOperatingContext/>
            <BroadcastCalloutBanner/>
            <PurposeAndPrinciplesSection/>
            <LeadershipGovernanceSection/>
            <WorkWithUsSection/>
            <NewsAndTrustRoutesSection/>
        </main>
    )
}