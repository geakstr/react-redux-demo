import React from "react";
import {Link} from "react-router";

export default function MoreButton(props) {
  const {id} = props;

  return (
    <Link to={`/users/${id}`}>
      <button className="button-more default-button">Learn more</button>
    </Link>
  );
}

MoreButton.propTypes = {
  id: React.PropTypes.string
};