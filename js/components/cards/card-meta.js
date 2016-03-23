import React from "react";

export default function CardMeta(props) {
  const {experience, rate, func} = props;

  return (
    <div className="cards__item-meta card-meta">
      <div className="card-meta__item card-meta__item_experience">
        <div className="card-meta__item-title">Experience</div>
        <div className="card-meta__item-value">{`${experience} years`}</div>
      </div>
      <div className="card-meta__item card-meta__item_rate">
        <div className="card-meta__item-title">Rate</div>
        <div className="card-meta__item-value">{`${rate}%`}</div>
      </div>
      <div className="card-meta__item card-meta__item_function">
        <div className="card-meta__item-title">Function</div>
        <div className="card-meta__item-value">{func}</div>
      </div>
    </div>
  );
}

CardMeta.propTypes = {
  experience: React.PropTypes.number,
  rate: React.PropTypes.number,
  func: React.PropTypes.string
};