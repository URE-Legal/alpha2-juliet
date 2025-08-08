import HeroTemplate from "@/components/HeroTemplate";
import WelcomeNavbar from "@/components/WelcomeNavbar";
import DemoFormSection from "@/components/DemoFormSection";
import Footer from "@/components/Footer";
import FinanceSection from "./components/FinanceSection";

export default function DepartmentFinancePage() {
  const heroText = {
    bluehead: "For Finance Team",
    heading: "Manage finances with actionable insights",
    desc: "Packed with features built around your needs, our tool enhances financial operations and provides clear visibility into your team’s workflows and performance",
  };

  return (
    <div className='bg-slate-300'>
      <WelcomeNavbar />
      <HeroTemplate text={heroText} />
      <FinanceSection />
      <DemoFormSection />
      <Footer />
    </div>
  );
}
