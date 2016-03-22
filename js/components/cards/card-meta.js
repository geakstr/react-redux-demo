import React from "react";

export default function CardMeta(props) {
  return (
    <div className="cards__item-meta card-meta">
      <div className="card-meta__item card-meta__item_experience">
        <div className="card-meta__item-title">Experience</div>
        <div className="card-meta__item-value">{props.experience}</div>
      </div>
      <div className="card-meta__item card-meta__item_rate">
        <div className="card-meta__item-title">Rate</div>
        <div className="card-meta__item-value">{props.rate}</div>
      </div>
      <div className="card-meta__item card-meta__item_function">
        <div className="card-meta__item-title">Function</div>
        <div className="card-meta__item-value">{props.func}</div>
      </div>
    </div>
  );
}