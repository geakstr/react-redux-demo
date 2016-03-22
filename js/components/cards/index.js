import React from "react";

import Card from "./card";

export default function Cards(props) {
  return (
    <div className="cards wrapper">
      <div className="cards__counter">Candidates: <span className="cards__counter-value">36</span></div>
      <div className="cards__items-wrapper">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => <Card key={i} />)}
      </div>
    </div>
  );
}