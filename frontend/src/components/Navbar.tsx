import {
  ChartNoAxesCombined,
  Copyright,
  Globe,
  Image,
  LayoutGrid,
  Menu,
  ScrollText,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className='bg-white w-[5vw] h-[100vh] drop-shadow-sm py-2 fixed flex flex-col justify-between'>
        <div className='flex flex-col gap-4 items-center'>
          <Menu className='md:hidden w-6 h-6' />
          <Link href={"/"}>
            <h1 className='text-lg font-bold'>URE IPR</h1>
          </Link>
          <div className='flex flex-col items-center gap-4'>
            <Link href={"/"}>
              <button className='flex flex-col items-center text-gray-700 hover:text-blue-500'>
                <LayoutGrid className='w-8 h-8' />
                <span className='text-[0.7rem]'>Dashboard</span>
              </button>
            </Link>
            <Link href={"/trademarks"}>
              <button className='flex flex-col items-center text-gray-700 hover:text-blue-500'>
                <Image className='w-8 h-8' />
                <span className='text-[0.7rem]'>Trademarks</span>
              </button>
            </Link>
            <Link href={"/copyright"}>
              <button className='flex flex-col items-center text-gray-700 hover:text-blue-500'>
                <Copyright className='w-8 h-8' />
                <span className='text-[0.7rem]'>Copyright</span>
              </button>
            </Link>
            <button className='flex flex-col items-center text-gray-700 hover:text-blue-500'>
              <ScrollText className='w-8 h-8' />
              <span className='text-[0.7rem]'>Patents</span>
            </button>
            <button className='flex flex-col items-center text-gray-700 hover:text-blue-500'>
              <Globe className='w-8 h-8' />
              <span className='text-[0.7rem]'>GI Tag</span>
            </button>
            <button className='flex-col text-gray-700 hover:text-blue-500'>
              <ChartNoAxesCombined className='w-8 h-8' />
              <span className='text-[0.7rem]'>Insights</span>
            </button>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <button className='block p-2 rounded text-gray-700 hover:text-black hover:bg-gray-100'>
            <User className='w-8 h-8' />
          </button>
          <button className='block p-2 rounded text-gray-700 hover:text-black hover:bg-gray-100'>
            <Settings className='w-8 h-8' />
          </button>
        </div>
      </nav>
    </>
  );
}
