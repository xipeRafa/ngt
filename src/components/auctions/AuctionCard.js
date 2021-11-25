import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import { useFirestore } from "../../hooks/useFirestore";

export const AuctionCard = ({ item, handleState}) => {
  const { currentUser, bidAuction } = useContext(AuthContext);

  const { docs } = useFirestore("auctions");

  let payed = 0;
  /*   let seconds */
  let completed;

  docs.map((el) => {
    el.id === item.id && (payed = el.curPrice);
    /*   el.id === item.id && (seconds = el.createdAt.seconds.toString()); */
    el.id === item.id && (completed = el.completed);
  });

  /*   let date = new Date(seconds*1000); */

  return (
    <div className="col">
      <div className="card shadow-sm">
        <div
          onClick={() => handleState(item)}
          style={{
            height: "180px",
            backgroundImage: `url(${item.imgUrl})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}
          className="w-100 mt-4"
        />

        <div className="card-body p-4">
          <p className="h5">
            <span className="text-secondary">taxi </span> {item.title}
          </p>
          <div className="d-flex jsutify-content-between align-item-center">
            <h5>
              <span className="text-secondary">cliente</span> {item.categorie}
            </h5>
          </div>
          <div>
            <p>{/* date.slice(0, -38) */}</p>
          </div>
          <p className="card-text">{item.description.slice(0, 20)}...</p>
          <div className="d-flex justify-content-between align-item-center">
            {currentUser && (
              <Button
                onClick={() => bidAuction(item.id)}
                className={completed ? "btn btn-primary" : "btn btn-secondary"}
              >
                {completed ? "Completado" : " Sin Completar"}
              </Button>
            )}

            <p className="display-6">${payed}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
