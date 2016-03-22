import React from "react";

export default function CardInfo(props) {
  return (
    <div className="cards__item-info card-info">
      <img className="card-info__photo" src={props.photo} />
      <div className="card-info__username">{props.username}</div>
      <div className="card-info__spec">{props.spec}</div>
    </div>
  );
}