import React from "react";

import FindButton from "./findButton";
import InviteButton from "./inviteButton";

export default function SearchWidget(props) {
  return (
    <div className="header__search-widget search-widget">
      <FindButton /> or <InviteButton />
    </div>
  );
}