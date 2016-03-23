import React from "react";

export default function FindButton(props) {
  return (
    <button className="search-widget__button-find ok-button" onClick={props.onClick}>Find Expert</button>
  );
}

FindButton.propTypes = {
  onClick: React.PropTypes.func
};