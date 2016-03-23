import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import HeaderContainer from "./header";
import Cards from "../components/cards/";
import * as actions from "../actions/users";

export default class CardsContainer extends React.Component {
  static propTypes = {
    users: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.actions.fetchUsers("/");
  }

  render() {
    const {users, actions} = this.props;
    return (
      <div>
        <HeaderContainer route={this.props.route.path} />
        <Cards users={users} actions={actions} />
      </div>
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