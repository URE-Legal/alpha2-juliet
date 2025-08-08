import FeatureSection from "@/components/FeatureSection";
import HeroTemplate from "@/components/HeroTemplate";
import IntegrationSection from "@/components/IntegrationSection";
import NoticeSection from "./components/NoticeSection";

export default function EnterpriseNoticePage() {
  const heroText = {
    heading: "Legal Notice Management",
    desc: "Automate notice management effortlessly with features like email-based Notice Received/Sent, enabling real-time responses and accurate timeline tracking",
  };

  return (
    <div className='bg-slate-300'>
      <HeroTemplate text={heroText} />
      <NoticeSection />
      <IntegrationSection />
      <FeatureSection
        smhead='Enhance Your Toolkit'
        lghead='Boost Your Workflow Efficiency with Powerful Tools'
      />
    </div>
  );
}
