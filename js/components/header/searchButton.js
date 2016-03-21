import React from "react";
import Radium from "radium";

@Radium
export default class SearchButton extends React.Component {
  render() {
    const {fontSize} = this.props;
    return (
      <button style={[css.base, fontSize]}>Find Expert</button>
    );
  }
}

var css = {
  base: {
    background: "#00B2F6",
    lineHeight: "33px",
    padding: "0 22px",
    margin: "0 11px 0 0",
    border: 0,
    color: "#FFF",
    borderRadius: "16px",

    ":hover": {
      background: "blue"
    },

    ":active": {
      background: "black"
    }
  }
};