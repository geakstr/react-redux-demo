import React from "react";

export default function Photo(props) {
  return (
    <span className="profile-widget_photo-wrapper">
      <img className="profile-widget__photo" src={props.url} />
      {props.notify ? <i className="profile-widget__notify" /> : null}
    </span>
  );
}

Photo.propTypes = {
  url: React.PropTypes.string,
  notify: React.PropTypes.bool
};