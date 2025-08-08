import HeroTemplate from "@/components/HeroTemplate";
import WelcomeNavbar from "@/components/WelcomeNavbar";
import DemoFormSection from "@/components/DemoFormSection";
import Footer from "@/components/Footer";
import HRSection from "./components/HRSection";

export default function DepartmentHRPage() {
  const heroText = {
    bluehead: "For HR Team",
    heading: "Streamline HR workflows, cut through administrative clutter",
    desc: "Revolutionize your HR operations with cutting-edge tools designed to streamline every aspect of workforce management and eliminate manual bottlenecks to achieve unmatched operational excellence",
  };

  return (
    <div className='bg-slate-300'>
      <WelcomeNavbar />
      <HeroTemplate text={heroText} />
      <HRSection />
      <DemoFormSection />
      <Footer />
    </div>
  );
}
