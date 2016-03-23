import React from "react";

import CardHover from "./card-hover";
import CardInfo from "./card-info";
import CardMeta from "./card-meta";

export default class Card extends React.Component {
  static propTypes = {
    user: React.PropTypes.object,
    actions: React.PropTypes.object
  };

  state = {
    isHovering: false
  };

  onMouseOver = () => {
    this.setState({
      isHovering: true
    });
  };

  onMouseEnter = () => {
    this.setState({
      isHovering: true
    });
  };

  onMouseLeave = () => {
    this.setState({
      isHovering: false
    });
  };

  render() {
    const {isHovering} = this.state;
    const {id, username, photo, spec, experience, rate, func, hired, online} = this.props.user;
    const {toggleHire} = this.props.actions;

    return (
      <div className="cards__item-wrapper" onMouseOver={this.onMouseOver} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        {isHovering ? <CardHover id={id} username={username} hired={hired} toggleHire={toggleHire.bind(null, id)} /> : null}
        <CardInfo username={username} spec={spec} online={online} hired={hired} photo={photo} />
        <CardMeta experience={experience} rate={rate} func={func} />
      </div>
    );
  }
}