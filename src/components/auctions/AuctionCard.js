import React, { useContext} from 'react';
import { AuthContext } from '../../context/AuthContext';

export const AuctionCard = ({ item }) => {


   const { currentUser, bidAuction} = useContext(AuthContext); 


    let seconds = item.duration
    let completed = item.completed

  

    const hora = new Date(seconds).toLocaleTimeString("es-CL") 

let date = new Date(seconds).toLocaleDateString("es-CL", {
      weekday: "short", // narrow, short
      year: "numeric", // 2-digit
      month: "short", // numeric, 2-digit, narrow, long
      day: "numeric", // 2-digit
}); 

    return (
      <div className="col mb-4">
        <div className="card shadow-sm">
          <div
            style={{
              height: '180px',
              backgroundImage: `url(${item.imgUrl})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className="w-100 mt-4"
          />
  
          <div className="card-body p-4">
            <p className="h4"><span className="text-secondary">Kl: </span>{currentUser.email.slice(0, -10)}</p>
            <div className="d-flex jsutify-content-between align-item-center">
              <h5>
              <span className="text-secondary">Cliente: </span> {item.categorie}
              </h5>
            </div>
            <div>
              <p>{date}, {hora}</p>
            </div>
    
            <p className="card-text">{item.description.slice(0, 22)}...</p>
            
            <div className="d-flex justify-content-between align-item-center">
                {
                  currentUser &&
                    <button onClick={() => 
                    bidAuction(item.id)} className={completed ? 'btn btn-primary' : 'btn btn-danger w-100'}>
                         {completed ? 'Completado' : ' Sin Completar'}
                    </button>
                } 
            </div>
          </div>
        </div>
      </div>
    );
  };

