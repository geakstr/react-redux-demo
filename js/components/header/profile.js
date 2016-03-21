import React from "react";
import Radium from "radium";

@Radium
export default class Profile extends React.Component {
  render() {
    return (
      <div style={[this.props.style]}>
        <div style={css.profilePhotoWrapper}>
          <img src="https://unsplash.it/50?image=1" style={css.profilePhoto}/>
          <i style={css.profileNotify}/>
        </div>
        <span style={css.profileName}>Natali Wurst</span>
      </div>
    );
  }
}

var css = {
  profilePhotoWrapper: {
    position: "relative",
    display: "inline-block"
  },
  profilePhoto: {
    width: "40px",
    height: "40px",
    verticalAlign: "top",
    background: "#3B455A",
    borderRadius: "100px"
  },
  profileNotify: {
    display: "block",
    position: "absolute",
    top: "0",
    right: "0",
    width: "12px",
    height: "12px",
    background: "#FF2B6A",
    borderRadius: "50px"
  },
  profileName: {
    marginLeft: "11px",
    color: "#E3E8EA"
  }
};