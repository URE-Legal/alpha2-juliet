import BenefitSection from "@/components/BenefitSection";
import DemoFormSection from "@/components/DemoFormSection";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InformationSection from "@/components/InformationSection";
import IntegrationSection from "@/components/IntegrationSection";
import URETrakSection from "@/components/URETrakSection";
import WelcomeNavbar from "@/components/WelcomeNavbar";

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col bg-slate-300'>
      <WelcomeNavbar />
      <Hero />
      <FeatureSection />
      <BenefitSection />
      <URETrakSection />
      <IntegrationSection />
      <InformationSection />
      <DemoFormSection />
      <Footer />
    </div>
  );
}
