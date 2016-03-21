import React from "react";
import Radium from "radium";

import Logo from "./logo";
import SearchButton from "./searchButton";
import InviteButton from "./inviteButton";
import Profile from "./profile";

@Radium
export default class Header extends React.Component {
  render() {
    return (
      <header style={css.header}>
        <Logo style={css.logo}/>
        <div style={css.actions}>
          <SearchButton fontSize={baseFontSize}/> or <InviteButton fontSize={baseFontSize}/>
        </div>
        <Profile style={css.profile}/>
      </header>
    );
  }
}

var baseFontSize = {
  fontSize: "12px"
};

var css = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "18px 44px",
    background: "#434F6C",
    color: "#A6ACBA",
    lineHeight: "40px",
    ...baseFontSize
  },
  logo: {
    flex: 1
  },
  actions: {
    flex: 1,
    textAlign: "center"
  },
  profile: {
    flex: 1,
    textAlign: "right"
  }
};