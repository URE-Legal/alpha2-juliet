import WelcomeNavbar from "@/components/WelcomeNavbar";
import Footer from "@/components/Footer";
import DemoFormSection from "@/components/DemoFormSection";

export default function CorporateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='bg-slate-300'>
      <WelcomeNavbar />
      {children}
      <DemoFormSection />
      <Footer />
    </div>
  );
}
