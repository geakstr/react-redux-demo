import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Loading from "../components/loading";
import Error from "../components/error";
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
    const {user, actions, loading, error} = this.props;

    return (
      <div>
        <HeaderContainer />
        {loading ? <Loading /> : error ? null : <User user={user} toggleHire={actions.toggleHire} />}
        {error ? <Error message={error} /> : null}
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return {
    user: user.user,
    loading: user.loading,
    error: user.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);