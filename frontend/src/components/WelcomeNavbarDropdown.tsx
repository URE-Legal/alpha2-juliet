import { JSX } from "react";
import { ArrowRight } from "lucide-react";

type DropdownOptions = {
  icon?: JSX.Element;
  heading?: string;
  desc?: string;
}[];

export default function NavbarDropdown({
  lhead,
  rhead,
  loptions,
  rsubhead,
  rdesc,
}: {
  lhead?: string;
  rhead?: string;
  loptions?: DropdownOptions;
  rsubhead?: string;
  rdesc?: string;
}) {
  return (
    <div className='flex gap-12 absolute top-[77px] px-36 py-8 z-50 bg-slate-100 shadow-sm'>
      <div className='w-1/2'>
        <div className='uppercase text-blue-700 pb-2 border-b border-slate-300'>
          {lhead}
        </div>
        <div className='flex flex-wrap gap-4 mt-4'>
          {loptions?.map((option, index) => (
            <div
              key={index}
              className='w-[calc(50%-0.5rem)] hover:bg-slate-200 cursor-pointer p-2 rounded transition-all duration-100'
            >
              <div className='font-semibold flex items-center space-x-2 text-sm mb-1'>
                <div>{option.icon}</div>
                <div>{option.heading}</div>
              </div>
              <div className='pl-6 text-gray-500 text-sm'>{option.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <div className='w-1/2'>
        <div className='uppercase text-blue-700 pb-2 border-b border-slate-300'>
          {rhead}
        </div>
        <div className='bg-slate-200 p-4 mt-4 rounded cursor-pointer transition-transform duration-300 hover:scale-101'>
          <div className='text-lg flex justify-between mb-4'>
            <div>{rsubhead}</div>
            <div>{<ArrowRight />}</div>
          </div>
          <div>{rdesc}</div>
        </div>
      </div>
    </div>
  );
}
