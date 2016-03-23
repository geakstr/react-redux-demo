import React from "react";

import HireButton from "./../buttons/hire-button";
import MoreButton from "./../buttons/more-button";

export default function CardHover(props) {
  const {id, username, toggleHire, hired} = props;

  const type = hired ? "dismiss" : "hire";

  return (
    <div className="cards__item-hover card-hover">
      <div className="card-hover__content-wrapper">
        <div>Do you want to {type}</div>
        <div className="card-hover__username">{username}?</div>
        <div><HireButton onClick={toggleHire} hired={hired}/><MoreButton id={id}/></div>
      </div>
    </div>
  );
}

CardHover.propTypes = {
  id: React.PropTypes.string,
  hired: React.PropTypes.bool,
  username: React.PropTypes.string,
  toggleHire: React.PropTypes.func
};