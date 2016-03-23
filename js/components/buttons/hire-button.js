import React from "react";

export default function HireButton(props) {
  const {hired, onClick} = props;

  const label = hired ? "Dismiss" : "Hire";
  const type = hired ? "danger-button" : "ok-button";

  return (
    <button className={`button-hire ${type}`} onClick={onClick}>{label}</button>
  );
}


HireButton.propTypes = {
  hired: React.PropTypes.bool,
  onClick: React.PropTypes.func
};