import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { AddAuction } from './AddAuction';
import { AuctionCard } from './AuctionCard';
import { ProgressBar } from './ProgressBar';
import { useFirestore } from '../../hooks/useFirestore';


export const AuctionBody = () => {
  const [auction, setAuction] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { docs } = useFirestore('auctions');


let user = currentUser ? currentUser.email : false

let docss

 if(user){
  docss = docs.filter(el => el.email === currentUser.email).sort((o1, o2) => o2.duration - o1.duration)
}else{
  docss = []
}

  return (
    <div className="">

        {auction && <ProgressBar auction={auction} setAuction={setAuction} />}
       
        {currentUser && <AddAuction setAuction={setAuction} />}

        {docss && (
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 p-5 g-3 border mt-1 ">
            {docss
              .slice(0,8)
              .map((doc, i) => {
              return <AuctionCard item={doc} key={i} />;
            })}
          </div>
        )} 

    </div>
  );
};
