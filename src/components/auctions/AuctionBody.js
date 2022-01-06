import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { AddAuction } from './AddAuction';
import { AuctionCard } from './AuctionCard';
import { ProgressBar } from './ProgressBar';


export const AuctionBody = () => {
  const [auction, setAuction] = useState(null);
  const { currentUser } = useContext(AuthContext);

  let arrInitial = JSON.parse(localStorage.getItem('array'))//-------- localStorage------------------//
  if (!arrInitial) { arrInitial = [] }

  const[arr, setArr]=useState(arrInitial)
  console.log(arr.filter(el => el !== null))

  useEffect(() => {//-------- localStorage------------------//
    arrInitial
      ? localStorage.setItem('array', JSON.stringify(arr.filter(el => el !== null)))
      : localStorage.setItem('array', JSON.stringify([]));
  }, [arr]);

  useEffect(() => {
    setArr([...arr, auction])
  }, [auction])

  return (
    <>
        {auction && <ProgressBar auction={auction} setAuction={setAuction} />}
       
        {currentUser && <AddAuction setAuction={setAuction} />}

        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 p-5 g-3 border mt-1 ">
          {arrInitial
            .slice(0,8)
            .map((doc, i) => {
              return <AuctionCard item={doc} key={i} />;
            })}
        </div> 
    </>
  );
};
