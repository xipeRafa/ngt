import React, { useContext, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';
import { AddAuction } from './AddAuction';
import { AuctionCard } from './AuctionCard';
import { ProgressBar } from './ProgressBar';
import { FilterContext } from '../../context/FilterContext';
import ItemSelected from './ItemSelected';
import Filters from './Filters'


export const AuctionBody = () => {
  const [auction, setAuction] = useState(null);
  const { currentUser, globalMsg } = useContext(AuthContext);
  const { DB } = useContext(FilterContext);

  const [itemState, setItemState]=useState()

  const handleState = (a)=>{
   setItemState(a)
  }



  return (
    <div className="">

        {auction && <ProgressBar auction={auction} setAuction={setAuction} />}

        <div  style={{zIndex:"9999999"}} className="text-center w-50 position-fixed top-10 start-50 translate-middle">
           {globalMsg && <Alert variant="danger">{globalMsg}</Alert>}
        </div>
       
        {currentUser && <AddAuction setAuction={setAuction} />}

        {DB && (
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 p-5 g-3 border mt-1 ">
              <Filters />
            {DB.map((doc) => {
              return <AuctionCard item={doc} key={doc.id} handleState={handleState} />;
            })}
          </div>
        )} 

      {
        DB.length === 0 
          ? ''
          : <ItemSelected itemState={itemState} />
      }

    </div>
  );
};
