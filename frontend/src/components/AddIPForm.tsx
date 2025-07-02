"use client";

import { useIPForm } from "@/contexts/IPFormContext";
import { useEffect, useRef, useState } from "react";

export default function IPForm() {
  const [appnoToggle, setAppnoToggle] = useState(true);
  const formRef = useRef<any>(null);
  const { isOpen, closeIPForm } = useIPForm();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        closeIPForm();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeIPForm]);

  if (!isOpen) return null;

  return (
    <>
      <div
        ref={formRef}
        className='absolute right-0 w-[30vw] h-[100svh] bg-white shadow-lg text-center p-4 z-20'
      >
        <h3>Add Copyright</h3>
        <p className='text-black/50 border-b border-black/20 pb-4'>
          Add a copyright to your tracker with the options given below
        </p>
        <div className='pt-4 flex justify-center'>
          <div className='flex w-70 h-8 rounded border-2 border-black/20'>
            <button
              onClick={() => setAppnoToggle(true)}
              className={`${
                appnoToggle ? "bg-blue-500 text-white" : "bg-white"
              } w-full hover:bg-blue-500 hover:text-white px-2 rounded`}
            >
              Appl. Number
            </button>
            <button
              onClick={() => setAppnoToggle(false)}
              className={`${
                appnoToggle ? "bg-white" : "bg-blue-500 text-white"
              } w-full hover:bg-blue-500 hover:text-white px-2 rounded`}
            >
              Bulk Upload
            </button>
          </div>
        </div>
        <div className='flex justify-center pt-8'>
          <input
            type='text'
            placeholder='Diary Number'
            className='w-70 p-2 border border-black/20 rounded'
          />
        </div>
        <div className='flex justify-center pt-16 text-black/60'>
          Note: If the mark is not found on IP India, it will be added as a
          manual mark without automated tracking
        </div>
      </div>
    </>
  );
}
