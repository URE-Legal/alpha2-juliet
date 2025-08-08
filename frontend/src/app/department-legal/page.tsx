import HeroTemplate from "@/components/HeroTemplate";
import WelcomeNavbar from "@/components/WelcomeNavbar";
import LegalSection from "./components/LegalSection";
import DemoFormSection from "@/components/DemoFormSection";
import Footer from "@/components/Footer";

export default function DepartmentLegalPage() {
  const heroText = {
    bluehead: "For Legal Team",
    heading: "Unlock a new level of efficiency in legal operations",
    desc: "Customize the platform to suit evolving legal demands and scale effortlessly, gaining unmatched process visibility and driving operations with data-backed insights",
  };

  return (
    <div className='bg-slate-300'>
      <WelcomeNavbar />
      <HeroTemplate text={heroText} />
      <LegalSection />
      <DemoFormSection />
      <Footer />
    </div>
  );
}
