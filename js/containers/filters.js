import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Filters from "../components/filters";
import * as actions from "../actions/filters";

export default class FiltersContainer extends React.Component {
  static propTypes = {
    filters: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object.isRequired
  };

  render() {
    const {filters, actions} = this.props;

    return (
      <div>
        <Filters filters={filters} actions={actions}/>
      </div>
    );
  }
}

function mapStateToProps({filters}) {
  return {filters};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FiltersContainer);