import FeatureSection from "@/components/FeatureSection";
import HeroTemplate from "@/components/HeroTemplate";
import IntegrationSection from "@/components/IntegrationSection";
import LitigationSection from "./components/LitigationSection";

export default function EnterpriseLitigationPage() {
  const heroText = {
    heading: "Litigation management software designed for legal excellence",
    desc: "Streamline your legal operations with our cloud-based software—offering real-time case tracking, seamless team collaboration, external counsel integration, and customizable reports",
  };

  return (
    <div className='bg-slate-300'>
      <HeroTemplate text={heroText} />
      <LitigationSection />
      <IntegrationSection />
      <FeatureSection
        smhead='Enhance Your Toolkit'
        lghead='Boost Your Workflow Efficiency with Powerful Tools'
      />
    </div>
  );
}
