import React from "react";

import Filter from "./filter";

export default function Filters(props) {
  const {filters} = props;
  const {deleteFilter} = props.actions;

  return (
    <div className="filters wrapper">
      {filters.map((text) => <Filter key={text} text={text} onDelete={deleteFilter}/>)}
    </div>
  );
}

Filters.propTypes = {
  filters: React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired
};
