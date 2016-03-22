import React from "react";

import CardInfo from "./card-info";
import CardMeta from "./card-meta";

export default function Card(props) {
  return (
    <div className="cards__item-wrapper">
      <CardInfo username="Elon Musk" spec="spec" photo="https://esquire.ru/files/cache/images/27/dd/2de616a4.bw-crop2298x2298x45x431-fit990xNone.39325b.esq_-OUT43367782-1-1-250e_.jpg"/>
      <CardMeta experience="2 years" rate="63%" func="Director" />
    </div>
  );
}