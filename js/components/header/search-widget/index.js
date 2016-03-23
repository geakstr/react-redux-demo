import React from "react";

import SearchField from "./search-field";
import FindButton from "./find-button";
import InviteButton from "./invite-button";

export default class SearchWidget extends React.Component {
  state = {
    filtering: false
  };

  onFilter() {
    this.setState({
      filtering: !this.state.filtering
    });
  }

  render() {
    const {filtering} = this.state;
    const {addFilter} = this.props;

    const onFilter = this.onFilter.bind(this);

    return (
      <div className="header__search-widget search-widget">
        {filtering ? <SearchField onEscape={onFilter} addFilter={addFilter} /> : <span><FindButton onClick={onFilter} />or <InviteButton /></span>}
      </div>
    );
  }
}