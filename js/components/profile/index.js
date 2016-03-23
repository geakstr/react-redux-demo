import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import HireButton from "../buttons/hire-button";

export default function Profile(props) {
  const {user} = props;
  const {id, username, photo, spec, email, experience, type, rate, func, online, hired} = user;

  const toggleHire = props.toggleHire.bind(null, id);

  return (
    <div className="user wrapper">
      <ReactCSSTransitionGroup transitionName="appear-animation" transitionAppear={true} transitionAppearTimeout={500}
                               transitionEnterTimeout={500} transitionLeaveTimeout={500}>
        <div className="user__content">
          <div className="user__card cf">
            <img className="user__photo" src={photo}/>
            <HireButton onClick={toggleHire} hired={hired}/>
          </div>
          <div className="user__info">
            <div className="user__username">{username} ({email}) {online ?
              <i className="user__online">•</i> : null}</div>
            <div className="user__spec">{spec}</div>
            <div className="user__meta">Experience: {experience} years; Rate: {rate}%; Function: {func};
              Type: {type}</div>
          </div>
          <div className="user_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </ReactCSSTransitionGroup>
    </div>
  );
}