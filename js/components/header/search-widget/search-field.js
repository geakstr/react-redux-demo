import React from "react";

export default class SearchField extends React.Component {
  componentDidMount() {
    this.searchField.focus();
  }
  
  onKeyUp = (e) => {
    if (e.key === "Enter") {
      this.props.addFilter(e.target.value);

      e.target.value = "";
    } else if (e.key === "Escape") {
      this.props.onEscape();
    }
  };
  
  onOk = () => {
    this.props.addFilter(this.searchField.value);
    this.props.onEscape();
  };

  render() {
    const placeholder = "Examples: Remote Work, Manager..."

    return (
      <div className="search-widget__search-field-wrapper">
        <input className="search-widget__search-field" type="text" onKeyUp={this.onKeyUp} ref={(c) => this.searchField = c} placeholder={placeholder}/>
        <button className="text-button" onClick={this.onOk}>Ok</button>
      </div>
    );
  }
}