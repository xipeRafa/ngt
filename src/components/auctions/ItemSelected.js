import { AuthContext } from "../../context/AuthContext";
import React, { useContext } from "react";
import { useFirestore } from "../../hooks/useFirestore";

const ItemSelected = ({
  itemState = {
    title: "choose an item",
    imgUrl:
      "https://image.shutterstock.com/image-photo/indifferent-puzzled-female-shruggs-shoulders-600w-1164353026.jpg",
  },
}) => {
  const { currentUser, bidAuction, endAuction } = useContext(AuthContext);
  const { docs } = useFirestore("auctions");

  let title = itemState.title;

  let payed = 0;
  let email = '';
  let seconds 

  docs.map((el) => {
    el.id === itemState.id && (payed = el.curPrice);

    el.id === itemState.id && (email = el.email);

    el.id === itemState.id && (seconds = el.createdAt.seconds);
  });


  let date = new Date(seconds*1000);


  return (
    <div className="m-5">
      <div className="card shadow-sm p-5">
        <div
          style={{
            height: "420px",
            backgroundImage: `url(${itemState.imgUrl})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="w-100"
        />

        <div className="card-body">
          <p className="lead display-6">taxi: {itemState.title}</p>
          <div className="d-flex jsutify-content-between align-item-center">
            <h5>
             correo: {email}
            </h5>
          </div>
          <div>
            fecha: {date.toString()}
          </div>
          <p className="card-text">comentarios: {itemState.description}</p>
          <div className="d-flex justify-content-between align-item-center ">
            {/* <div>
              {
                !currentUser 
                  ? <div onClick={()=> bidAuction()} className="btn btn-outline-secondary">
                     Bid
                    </div>
                  : currentUser.email === itemState.email 
                  ? <div onClick={()=> endAuction(itemState.id)} className="btn btn-outline-secondary">
                      Cancel Auction
                    </div>
                  : currentUser.email === curWinner 
                  ? <p className="h1">Winner</p>
                  : title !== "choose an item" 
                  &&  <div onClick={()=> bidAuction(itemState.id, itemState.curPrice)} 
                           className="btn btn-primary"
                      >
                        PAY ${Number(payed) + 1} to win
                      </div>
              }
            </div> */}
            { title !== "choose an item" && <p className="display-6">${payed}</p> }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemSelected;
