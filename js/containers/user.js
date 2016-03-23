import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import HeaderContainer from "./header";
import User from "../components/user/";
import * as actions from "../actions/users";

export default class UserContainer extends React.Component {
  static propTypes = {
    user: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.actions.fetchUser("/", this.props.params.id);
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        <User user={this.props.user} toggleHire={this.props.actions.toggleHire} />
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return {user};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);