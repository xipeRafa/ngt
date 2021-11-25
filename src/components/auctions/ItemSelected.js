import { useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";

const ItemSelected = ({
  itemState = {
    title: "Inicia sesión",
    imgUrl:
      "https://image.shutterstock.com/image-photo/indifferent-puzzled-female-shruggs-shoulders-600w-1164353026.jpg"
  }
}) => {
  const { docs } = useFirestore("auctions");

  let title = itemState.title;

  let payed = 0;
  let email = "";
  let seconds;

  docs.map((el) => {
    el.id === itemState.id && (payed = el.curPrice);

    el.id === itemState.id && (email = el.email);

    el.id === itemState.id && (seconds = el.createdAt.seconds);
  });

  let date = new Date(seconds * 1000);

  return (
    <div className="m-5">
      <div className="card p-5 pb-0">
        <div
          style={{
            height: "400px",
            backgroundImage: `url(${itemState.imgUrl})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}
          className="w-100 mb-4"
        />

        {title !== "Inicia sesión" && (
        <div className="card-body">
          <p className="lead display-6">
            <span className="text-secondary">Taxi: </span> {itemState.title}
          </p>
          <div className="d-flex jsutify-content-between align-item-center">
            <h5>
              <span className="text-secondary">Correo: </span> {email}
            </h5>
          </div>
          <h5>
            <span className="text-secondary">Fecha: </span> {date.toString()}
          </h5>
          <h5 className="card-text">
            <span className="text-secondary">Comentarios: </span>{" "}
            {itemState.description}
          </h5>
          <div style={{float:'right'}}>
            
              <p className="display-6 ">${payed}</p>
           
          </div>
        </div>
         )}
      </div>
    </div>
  );
};

export default ItemSelected;
