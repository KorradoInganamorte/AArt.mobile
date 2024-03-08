"use client"

import { createContext, useContext, ReactNode, useState, Dispatch, SetStateAction } from 'react';

type SearchQueryContextProps = {
    children: ReactNode;
};

type SearchQueryContextType = {
    searchQuery: string
    setSearchQuery: Dispatch<SetStateAction<string>>
};

const initialSearchQueryContext = {
    searchQuery: "",
    setSearchQuery: (value: SetStateAction<string>) => {}
};

const SearchQueryContext = createContext<SearchQueryContextType>(initialSearchQueryContext);

export function useSearchQuery() {
  return useContext(SearchQueryContext);
}

export function SearchQueryProvider({ children }: SearchQueryContextProps) {
  const [searchQuery, setSearchQuery] = useState<string>("")

  const value = {
    searchQuery,
    setSearchQuery
  };

  return <SearchQueryContext.Provider value={value}>{children}</SearchQueryContext.Provider>;
}