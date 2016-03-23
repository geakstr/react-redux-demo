import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import Card from "./card";

export default function Cards(props) {
  const {users, actions} = props;

  const userIds = Object.keys(users);
  const candidates = userIds.filter((userId) => !users[userId].hired);
  const hired = userIds.filter((userId) => users[userId].hired);

  return (
    <div className="cards wrapper">
      <ReactCSSTransitionGroup transitionName="appear-animation" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
        <div className="cards__counter">Candidates: <span className="cards__counter-value">{candidates.length}</span></div>
        <div className="cards__items-wrapper">
          {candidates.map((userId) => {
            const user = users[userId];

            return <Card key={user.id} user={user} actions={actions} />;
          })}
        </div>
        <div className="cards__counter">Hired: <span className="cards__counter-value">{hired.length}</span></div>
        <div className="cards__items-wrapper">
          {hired.map((userId) => {
            const user = users[userId];

            return <Card key={user.id} user={user} actions={actions} />;
          })}
        </div>
      </ReactCSSTransitionGroup>
    </div>
  );
}

Cards.propTypes = {
  users: React.PropTypes.object,
  actions: React.PropTypes.object
};