"use client"

import { createContext, useContext, ReactNode, useState, Dispatch, SetStateAction } from 'react';

type DropdownContextProps = {
    children: ReactNode;
};

type DropdownContextType = {
    showDropdown: boolean
    setShowDropdown: Dispatch<SetStateAction<boolean>>
};

const initialDropdownContext = {
    showDropdown: false,
    setShowDropdown: (value: SetStateAction<boolean>) => {}
};

const DropdownContext = createContext<DropdownContextType>(initialDropdownContext);

export function useDropdown() {
  return useContext(DropdownContext);
}

export function DropdownProvider({ children }: DropdownContextProps) {
  const [showDropdown, setShowDropdown] = useState<boolean>(false)

  const value = {
    showDropdown,
    setShowDropdown
  };

  return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>;
}