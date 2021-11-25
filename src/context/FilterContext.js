import { createContext, useEffect, useState } from 'react';
import { useFirestore } from '../hooks/useFirestore';

export const FilterContext = createContext();
export const FilterProvider = ({ children }) => {
  const { docs } = useFirestore('auctions');

  let db = [...docs]
  const[DB, setDB]=useState(db)

  const handleDB =(db)=>{
    setDB(db)
  }

 /*  console.log('DB:', DB) */

  return (
    <FilterContext.Provider value={{handleDB, DB}}>
      {children}
    </FilterContext.Provider>
  );
};
 