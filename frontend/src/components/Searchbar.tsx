import { useIPForm } from "@/contexts/IPFormContext";
import { useIPTable } from "@/contexts/IPTableContext";
import { axiosInstance } from "@/lib/axios";
import { Search } from "lucide-react";
import { useState } from "react";

type IPListType = {
  DiaryNo?: string;
  ROCNo?: string;
  TitleofWork?: string;
  Applicant?: string;
  Date?: string;
  Category?: string;
}[];

type SearchbarProps = {
  ip: string;
  tableData?: IPListType;
};

export default function Searchbar({ ip, tableData }: SearchbarProps) {
  const [inputValue, setInputValue] = useState("");
  const { openIPForm } = useIPForm();
  const { setIPList } = useIPTable();

  const fetchData = async () => {
    try {
      const res = await axiosInstance.get("/copyright/search", {
        params: { inputValue: inputValue },
      });
      setIPList(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {/* Search and Action Bar */}
      <div className='p-4 bg-gray-50 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
        <div className='inline relative w-full md:max-w-1/2'>
          <input
            type='text'
            placeholder='Search by application number, RoC No.'
            className='w-full py-2 pl-8 pr-66 border border-black/20 rounded-md shadow-sm'
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              if (inputValue.length > 2) {
                fetchData();
              }
            }}
          />
          <Search className='w-5 h-5 absolute top-[25%] left-2 text-black/60' />
          <div className='inline absolute right-2 h-[41px] border-l border-black/20 pl-4 leading-[41px]'>
            <span className='mr-2'>Search IP India database</span>
            <input type='checkbox' className='size-4' />
          </div>
        </div>

        <div className='flex gap-2'>
          <button
            onClick={openIPForm}
            className='px-2 py-2 text-sm text-white bg-blue-500 drop-shadow-lg rounded-md hover:bg-blue-600/90'
          >{`Add ${ip}`}</button>
          <button className='px-2 py-2 text-sm text-white bg-blue-500 drop-shadow-lg rounded-md hover:bg-blue-600/90'>
            Generate Report
          </button>
        </div>
      </div>
    </>
  );
}
