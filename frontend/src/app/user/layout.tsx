import Navbar from "@/components/Navbar";
import { IPFormProvider } from "@/contexts/IPFormContext";
import { IPTableProvider } from "@/contexts/IPTableContext";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='min-h-screen flex flex-col'>
      <IPTableProvider>
        <IPFormProvider>
          <Navbar />
          {children}
        </IPFormProvider>
      </IPTableProvider>
    </div>
  );
}
