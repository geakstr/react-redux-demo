import React from "react";
import Radium from "radium";

@Radium
export default class InviteButton extends React.Component {
  render() {
    const {fontSize} = this.props;
    return (
      <button style={[css.base, fontSize]}>Invite</button>
    );
  }
}

var css = {
  base: {
    background: "transparent",
    padding: "0",
    margin: "0 0 0 7px",
    border: 0,
    color: "#A6ACBA",

    ":hover": {
      color: "white"
    },

    ":active": {
      color: "#ccc"
    }
  }
};