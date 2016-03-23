import React from "react";
import {Link} from "react-router";

export default function Logo(props) {
  return (
    <h1 className="header__logo"><Link to="/"><strong>Add</strong>Brainz</Link></h1>
  );
}