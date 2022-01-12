import React, { useContext} from 'react';
import { AuthContext } from '../../context/AuthContext';

export const AuctionCard = ({ item, deleteHandler }) => {

  const { currentUser } = useContext(AuthContext); 
  const hora = new Date(item.duration).toLocaleTimeString("es-CL") 

  let date = new Date(item.duration).toLocaleDateString("es-CL", {
      weekday: "short", // narrow, short
      year: "numeric", // 2-digit
      month: "short", // numeric, 2-digit, narrow, long
      day: "numeric", // 2-digit
  }); 

  return (
    (currentUser && (
      <div className="col mb-4"> 
        <div className="card shadow-sm">

          <input type="button" value="Borrar de Mi Cuenta" onClick={() => deleteHandler(item.duration)} />

          <div className="w-100 mt-4" style={{height: '180px',backgroundImage:`url(${item.url})`,         backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} 
          />
  
          <div className="card-body p-4">

            <p className="h4"><span className="text-secondary">
              Kl: </span>{currentUser?.email?.slice(0, -10)}
            </p>

            <div className="d-flex jsutify-content-between align-item-center">
              <h5>
              <span className="text-secondary">Cliente: </span> {item.categorie}
              </h5>
            </div>

            {item.categorie === 'oxxo' &&
              <div className="d-flex jsutify-content-between align-item-center">
                <h5>
                  <span className="text-secondary">oxxo: </span> {item.tiendaOxxo}
                </h5>
              </div>}

            <div>
              <p>{date}, {hora}</p>
            </div>
    
            <p className="card-text">{item.description.slice(0, 22)}...</p>
            
            <div className="d-flex justify-content-between align-item-center">
              <button className={item.completed ? 'btn btn-primary' : 'btn btn-danger w-100'}>
                {item.completed ? 'Completado' : ' Sin Completar'}
              </button>
            </div>

          </div>

        </div>
      </div>
    ))
  );
};

