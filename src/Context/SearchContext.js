import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext({
  filters: {},
  setFilters: () => {},
  searchTerm: '',
  setSearchTerm: () => {},
});

export const SearchProvider = ({ children }) => {
  const [filters, setFilters] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <SearchContext.Provider value={{ filters, setFilters, searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }
  const { filters, setFilters, searchTerm, setSearchTerm } = context;
  return { filters, setFilters, searchTerm, setSearchTerm };
};