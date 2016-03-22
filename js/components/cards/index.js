import React from "react";

import Card from "./card";

export default function Cards(props) {
  const {users, actions} = props;
  
  return (
    <div className="cards wrapper">
      <div className="cards__counter">Candidates: <span className="cards__counter-value">{users.length}</span></div>
      <div className="cards__items-wrapper">
        {users.map((user) => <Card key={user.id} user={user} actions={actions} />)}
      </div>
    </div>
  );
}

Cards.propTypes = {
  users: React.PropTypes.arrayOf(React.PropTypes.object),
  actions: React.PropTypes.objectOf(React.PropTypes.func)
};