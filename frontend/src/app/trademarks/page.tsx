"use client";

import IPForm from "@/components/AddIPForm";
import IPTable from "@/components/IPTable";
import Searchbar from "@/components/Searchbar";

export default function Trademark() {
  const statuses = [
    "All",
    "In Process",
    "Opposed",
    "Objected",
    "Registered",
    "Upcoming Hearing",
  ];
  const tableColumns = [
    "App. No.",
    "Image",
    "Class",
    "Mark",
    "Prop. Name",
    "DOA Name",
    "Status",
  ];
  let tableData: [] = [];

  return (
    <div className='ml-[5vw]'>
      <IPForm />
      <Searchbar ip='Trademark' />
      <IPTable statuses={statuses} columns={tableColumns} data={tableData} />
    </div>
  );
}
