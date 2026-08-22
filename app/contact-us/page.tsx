import {
  CompanyLocationsSection,
  ContactFaqSection,
  ContactHero,
} from "@/components/contact-us";

export default function page() {
  return (
    <main>
      <ContactHero />
      <CompanyLocationsSection />
      <ContactFaqSection />
    </main>
  );
}
