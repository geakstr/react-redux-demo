import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import Card from "./card";

export default class Cards extends React.Component {
  static propTypes = {
    users: React.PropTypes.object,
    actions: React.PropTypes.object
  };

  render() {
    const {users, actions} = this.props;

    const userIds = Object.keys(users);
    const counter = userIds.length;

    return (
      <div className="cards wrapper">
        <ReactCSSTransitionGroup transitionName="appear-animation" transitionAppear={true} transitionAppearTimeout={500}
                                 transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          <div className="cards__counter">Candidates: <span className="cards__counter-value">{counter}</span></div>
          <div className="cards__items-wrapper">
            {userIds.map((userId) => {
              const user = users[userId];

              return <Card key={user.id} user={user} actions={actions}/>;
            })}
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}