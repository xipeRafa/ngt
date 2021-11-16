import React, { useContext} from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useFirestore } from "../../hooks/useFirestore";

export const AuctionCard = ({ item, handleState,}) => {

   const { currentUser, bidAuction} = useContext(AuthContext); 

  const { docs } = useFirestore("auctions");

    let payed = 0;
  /*   let seconds */
    let completed

    docs.map((el) => {
      el.id === item.id && (payed = el.curPrice);
    /*   el.id === item.id && (seconds = el.createdAt.seconds.toString()); */
      el.id === item.id && (completed = el.completed);
    });

  /*   let date = new Date(seconds*1000); */

    return (
      <div className="col">
        <div className="card shadow-sm">
          <div onClick={()=> handleState(item)}
            style={{
              height: '240px',
              backgroundImage: `url(${item.imgUrl})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className="w-100"
          />
  
          <div className="card-body">
            <p className="h4">taxi: {item.title}</p>
            <div className="d-flex jsutify-content-between align-item-center">
              <h5>
                Cliente: {item.categorie}
              </h5>
            </div>
            <div>
              <p>{ /* date.slice(0, -38) */ }</p>
            </div>
            <p className="card-text">{item.description}</p>
            <div className="d-flex justify-content-between align-item-center">
  
                {currentUser 
                &&<button onClick={() => bidAuction(item.id)} 
                className={completed ? 'btn btn-primary' : 'btn btn-secondary'}>
                         {completed ? 'Completado' : ' Sin Completar' }
                  </button>
                
                } 
  
             
              <p className="display-6">${payed}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

