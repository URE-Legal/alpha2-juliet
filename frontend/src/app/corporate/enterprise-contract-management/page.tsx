import FeatureSection from "@/components/FeatureSection";
import HeroTemplate from "@/components/HeroTemplate";
import ContractSection from "./components/ContractSection";
import IntegrationSection from "@/components/IntegrationSection";

export default function EnterpriseContractPage() {
  const heroText = {
    heading: "AI-Powered Contract Management Solution Designed for Speed",
    desc: "Our cloud-based contract management software enhances business efficiency and ensures better compliance through advanced automation and seamless collaboration across the contracting process",
  };

  return (
    <div className='bg-slate-300'>
      <HeroTemplate text={heroText} />
      <ContractSection />
      <IntegrationSection />
      <FeatureSection
        smhead='Enhance Your Toolkit'
        lghead='Boost Your Workflow Efficiency with Powerful Tools'
      />
    </div>
  );
}
