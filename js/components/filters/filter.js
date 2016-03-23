import React from "react";

export default function Filter(props) {
  const {text} = props;
  const onDelete = props.onDelete.bind(this, text);

  return (
    <span className="filters__item">{text} <span className="filters_item-delete" onClick={onDelete}>×</span></span>
  );
}

Filter.propTypes = {
  text: React.PropTypes.string.isRequired,
  onDelete: React.PropTypes.func.isRequired
};