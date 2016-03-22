import React from "react";

import HeaderContainer from "./header";
import CardsContainer from "./cards";

export default class AppContainer extends React.Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <CardsContainer />
      </div>
    );
  }
}