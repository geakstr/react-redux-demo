import React from "react";

import Logo from "./logo";
import SearchWidget from "./search-widget";
import ProfileWidget from "./profile-widget";

export default function Header(props) {
  return (
    <div className="header">
      <div className="header__wrapper wrapper">
        <Logo />
        <SearchWidget />
        <ProfileWidget username="Natali Wurst" photo="https://unsplash.it/50?image=1" notify={true} />
      </div>
    </div>
  );
}