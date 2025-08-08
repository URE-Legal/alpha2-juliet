import FeatureSection from "@/components/FeatureSection";
import HeroTemplate from "@/components/HeroTemplate";
import IntegrationSection from "@/components/IntegrationSection";
import CollectionSection from "./components/CollectionSection";

export default function EnterpriseCollectionPage() {
  const heroText = {
    heading: "Collections Management",
    desc: "Revolutionize debt recovery by turning complex processes into simple clicks, using advanced automation to speed up collections and enhance receivables management",
  };

  return (
    <div className='bg-slate-300'>
      <HeroTemplate text={heroText} />
      <CollectionSection />
      <IntegrationSection />
      <FeatureSection
        smhead='Enhance Your Toolkit'
        lghead='Boost Your Workflow Efficiency with Powerful Tools'
      />
    </div>
  );
}
