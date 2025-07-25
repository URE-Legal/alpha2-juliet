"use client";

import IPForm from "@/components/AddIPForm";
import IPTable from "@/components/IPTable";
import Searchbar from "@/components/Searchbar";
import { useIPTable } from "@/contexts/IPTableContext";
import { axiosInstance } from "@/lib/axios";
import { useEffect } from "react";

export default function Copyright() {
  const { ipList, setIPList } = useIPTable();
  const statuses = ["All", "In Process", "Opposed", "Registered"];
  const tableColumns = [
    "Diary No.",
    "RoC No.",
    "Title",
    "Applicant Name",
    "ROC Date",
    "Class of Work",
    "Status",
  ];

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axiosInstance.get("/copyright");
        setIPList(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetch();
  }, []);

  return (
    <div className='ml-[5vw]'>
      <IPForm />
      <Searchbar ip='Copyright' />
      <IPTable statuses={statuses} columns={tableColumns} data={ipList} />
    </div>
  );
}
