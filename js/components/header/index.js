import React from "react";

import Logo from "./logo";
import SearchWidget from "./search-widget";
import ProfileWidget from "./profile-widget";

export default function Header(props) {
  const {addFilter} = props;

  return (
    <div className="header">
      <div className="header__wrapper wrapper">
        <Logo />
        {props.route === "/" ? <SearchWidget addFilter={addFilter} /> : null}
        <ProfileWidget username="Natali Wurst" photo="https://randomuser.me/api/portraits/med/men/32.jpg" notify={true} />
      </div>
    </div>
  );
}