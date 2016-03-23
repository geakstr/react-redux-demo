import React from "react";

import Photo from "./photo";
import Name from "./name";

export default function ProfileWidget(props) {
  return (
    <div className="header__profile-widget profile-widget">
      <Photo url={props.photo} notify={props.notify}/>
      <Name username={props.username}/>
    </div>
  );
}

ProfileWidget.propTypes = {
  photo: React.PropTypes.string,
  notify: React.PropTypes.bool,
  username: React.PropTypes.string
};