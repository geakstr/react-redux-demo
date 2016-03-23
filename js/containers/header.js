import React from "react";
import {connect} from "react-redux";

import Header from "../components/header/";
import {addFilter} from "../actions/filters";

export default class HeaderContainer extends React.Component {
  static propTypes = {
    addFilter: React.PropTypes.func.isRequired
  };

  render() {
    const {addFilter, loading} = this.props;

    return (
      <Header loading={loading} route={this.props.route} addFilter={addFilter}/>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addFilter: (filter) => dispatch(addFilter(filter))
  };
}

export default connect(() => ({}), mapDispatchToProps)(HeaderContainer);