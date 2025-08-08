import FeatureSection from "@/components/FeatureSection";
import HeroTemplate from "@/components/HeroTemplate";
import IntegrationSection from "@/components/IntegrationSection";
import IPRSection from "./components/IPRSection";

export default function EnterpriseIPRPage() {
  const heroText = {
    heading: "IP Portfolio Management for Enterprises",
    desc: "The IP management suite for businesses leverages automated data collection and machine learning to efficiently monitor, organize, and protect your intellectual property assets",
  };

  return (
    <div className='bg-slate-300'>
      <HeroTemplate text={heroText} />
      <IPRSection />
      <IntegrationSection />
      <FeatureSection
        smhead='Enhance Your Toolkit'
        lghead='Boost Your Workflow Efficiency with Powerful Tools'
      />
    </div>
  );
}
