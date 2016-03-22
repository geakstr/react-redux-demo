import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Cards from "../components/cards/";
import * as actions from "../actions/cards";

export default class CardsContainer extends React.Component {
  static propTypes = {
    users: React.PropTypes.arrayOf(React.PropTypes.object),
    actions: React.PropTypes.objectOf(React.PropTypes.func)
  };

  render() {
    const {users, actions} = this.props;

    return (
      <Cards users={users} actions={actions} />
    );
  }
}

function mapStateToProps({ users }) {
  return {users};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);