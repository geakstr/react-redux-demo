import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Loading from "../components/loading";
import Error from "../components/error";
import HeaderContainer from "./header";
import FiltersContainer from "./filters";
import Cards from "../components/cards/";
import * as actions from "../actions/users";

export default class CardsContainer extends React.Component {
  static propTypes = {
    users: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.actions.fetchUsers();
  }

  render() {
    const {users, actions, loading, error} = this.props;

    return (
      <div>
        <HeaderContainer loading={loading} route={this.props.route.path}/>
        <FiltersContainer />
        {loading ? <Loading /> : error ? null : <Cards users={users} actions={actions}/>}
        {error ? <Error message={error}/> : null}
      </div>
    );
  }
}

function mapStateToProps({users}) {
  return {
    users: users.filtered,
    loading: users.loading,
    error: users.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);