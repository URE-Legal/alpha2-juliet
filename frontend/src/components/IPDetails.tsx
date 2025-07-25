"use client";

import { axiosInstance } from "@/lib/axios";
import { formatDate } from "@/lib/utils";
import { Trash } from "lucide-react";
import { useEffect, useState } from "react";

type CopyrightType = {
  SNo?: number;
  DiaryNo?: string;
  ROCNo?: string;
  Date?: string;
  TitleofWork?: string;
  Category?: string;
  Applicant?: string;
  id?: number;
};

export default function IPDetails({ id }: { id: number }) {
  const [copyrightDetails, setCopyrightDetails] = useState<CopyrightType>({});
  const [ownershipToggle, setOwnershipToggle] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axiosInstance.get(`/copyright/${id}`);
        setCopyrightDetails(res.data);
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetch();
  }, []);

  return (
    <>
      <div className='flex justify-between p-4'>
        <div className='flex gap-2'>
          <button className='px-2 py-2 text-sm bg-white border-2 border-blue-500 rounded-md hover:bg-blue-600/90 hover:text-white'>
            Details
          </button>
          <button className='px-2 py-2 text-sm bg-white border-2 border-blue-500 rounded-md hover:bg-blue-600/90 hover:text-white'>
            Ancillary Details
          </button>
          <button className='px-2 py-2 text-sm bg-white border-2 border-blue-500 rounded-md hover:bg-blue-600/90 hover:text-white'>
            Docs
            <span className='px-2 py-1 ml-1 rounded-[50%] text-[0.75rem] bg-blue-500 text-white'>
              0
            </span>
          </button>
          <button className='px-2 py-2 text-sm bg-white border-2 border-blue-500 rounded-md hover:bg-blue-600/90 hover:text-white'>
            Tasks
            <span className='px-2 py-1 ml-1 rounded-[50%] text-[0.75rem] bg-blue-500 text-white'>
              0
            </span>
          </button>
          <button className='px-2 py-2 text-sm bg-white border-2 border-blue-500 rounded-md hover:bg-blue-600/90 hover:text-white'>
            Timeline
          </button>
          <button className='px-2 py-2 text-sm bg-white border-2 border-blue-500 rounded-md hover:bg-blue-600/90 hover:text-white'>
            Couriers
            <span className='px-2 py-1 ml-1 rounded-[50%] text-[0.75rem] bg-blue-500 text-white'>
              0
            </span>
          </button>
        </div>
        <button className='text-red-700 bg-red-400/20 p-2 rounded hover:bg-red-700/20'>
          <Trash />
        </button>
      </div>

      <div className='flex gap-2 mx-4'>
        <div className='w-full'>
          <div className='p-4 rounded-lg shadow'>
            <div className='flex justify-between mb-4'>
              <h3>Copyright Details</h3>
              <div className='flex w-45 h-8 rounded border-2 border-black/20'>
                <button
                  onClick={() => setOwnershipToggle(true)}
                  className={`${
                    ownershipToggle ? "bg-blue-500 text-white" : "bg-white"
                  } w-full hover:bg-blue-500 hover:text-white px-2 rounded`}
                >
                  Self
                </button>
                <button
                  onClick={() => setOwnershipToggle(false)}
                  className={`${
                    ownershipToggle ? "bg-white" : "bg-blue-500 text-white"
                  } w-full hover:bg-blue-500 hover:text-white px-2 rounded`}
                >
                  3rd Party
                </button>
              </div>
            </div>
            <div className='text-sm *:space-y-4 *:*:w-full *:*:*:first:font-bold'>
              <div className='flex justify-between'>
                <div>
                  <p>Diary Number</p>
                  <p>{copyrightDetails.DiaryNo}</p>
                </div>
                <div>
                  <p>ROC Number</p>
                  <p>{copyrightDetails.ROCNo}</p>
                </div>
              </div>
              <div className='flex justify-between'>
                <div>
                  <p>ROC Date</p>
                  <p>{formatDate(copyrightDetails.Date ?? "")}</p>
                </div>
                <div>
                  <p>Work Title</p>
                  <p>{copyrightDetails.TitleofWork}</p>
                </div>
              </div>
              <div className='flex justify-between'>
                <div>
                  <p>Applicant Name</p>
                  <p>{copyrightDetails.Applicant}</p>
                </div>
                <div>
                  <p>Author Name</p>
                  <p>Author Name</p>
                </div>
              </div>
              <div className='flex justify-between'>
                <div>
                  <p>Status</p>
                  <p>Applied</p>
                </div>
                <div>
                  <p>Class of Work</p>
                  <p>{copyrightDetails.Category}</p>
                </div>
              </div>
              <div className='flex justify-between'>
                <div>
                  <p>Published Status</p>
                  <p>Yes</p>
                </div>
                <div>
                  <p>Address</p>
                  <p>Address Address Address</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full'></div>
      </div>
    </>
  );
}
