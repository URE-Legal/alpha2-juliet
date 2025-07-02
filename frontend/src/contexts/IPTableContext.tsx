"use client";

import { createContext, useContext, useState } from "react";

type IPListType = {
  DiaryNo?: string;
  ROCNo?: string;
  TitleofWork?: string;
  Applicant?: string;
  Date?: string;
  Category?: string;
};

type IPTableContextType = {
  ipList: IPListType[];
  setIPList: (data: {}[]) => void;
};

const IPTableContext = createContext<IPTableContextType | undefined>(undefined);

export const IPTableProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [ipList, setIPList] = useState<IPListType[]>([]);

  return (
    <IPTableContext.Provider value={{ ipList, setIPList }}>
      {children}
    </IPTableContext.Provider>
  );
};

export const useIPTable = () => {
  const context = useContext(IPTableContext);

  if (!context) {
    throw new Error("useIPTable must be used within an IPTableProvider");
  }
  return context;
};
