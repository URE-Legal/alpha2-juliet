import HeroTemplate from "@/components/HeroTemplate";
import DemoFormSection from "@/components/DemoFormSection";
import Footer from "@/components/Footer";
import SalesSection from "./components/SalesSection";

export default function DepartmentSalesPage() {
  const heroText = {
    bluehead: "For Sales Team",
    heading: "Prioritize closing deals with simplified processes",
    desc: "Whether you're a sales expert finalizing deals or managing diverse contracts, URETrak transforms contract management - boosting team efficiency and driving success.",
  };

  return (
    <div className='bg-slate-300'>
      <HeroTemplate text={heroText} />
      <SalesSection />
      <DemoFormSection />
      <Footer />
    </div>
  );
}
