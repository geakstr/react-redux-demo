import React from "react";

import FindButton from "./find-button";
import InviteButton from "./invite-button";

export default function SearchWidget(props) {
  return (
    <div className="header__search-widget search-widget">
      <FindButton /> or <InviteButton />
    </div>
  );
}