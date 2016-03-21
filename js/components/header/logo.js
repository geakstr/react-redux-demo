import React from "react";
import Radium from "radium";

@Radium
export default class Logo extends React.Component {
  render() {
    return (
      <h1 style={[css.base, this.props.style]}><strong style={css.strong}>Add</strong>Brainz</h1>
    );
  }
}

var css = {
  base: {
    fontSize: "18px"
  },
  strong: {
    color: "#E3E8EA"
  }
};