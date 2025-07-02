"use client";

import { createContext, useContext, useState } from "react";

const IPFormContext = createContext({
  isOpen: false,
  openIPForm: () => {},
  closeIPForm: () => {},
});

export const IPFormProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isOpen, setIsOpen] = useState(false);
  const openIPForm = () => setIsOpen(true);
  const closeIPForm = () => setIsOpen(false);

  return (
    <IPFormContext.Provider value={{ isOpen, openIPForm, closeIPForm }}>
      {children}
    </IPFormContext.Provider>
  );
};

export const useIPForm = () => useContext(IPFormContext);
