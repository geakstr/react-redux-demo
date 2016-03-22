import React from "react";

import CardHover from "./card-hover";
import CardInfo from "./card-info";
import CardMeta from "./card-meta";

export default class Card extends React.Component {
  static propTypes = {
    user: React.PropTypes.object,
    actions: React.PropTypes.objectOf(React.PropTypes.func)
  };

  constructor(props) {
    super(props);

    this.state = {
      isHovering: false,
      hired: props.user.hired
    };
  }

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

  toggleHire(callback) {
    this.setState({
      hired: !this.state.hired
    });

    callback();
  }

  render() {
    const {isHovering} = this.state;
    const {id, username, photo, spec, experience, rate, func, online} = this.props.user;
    const {hired} = this.state;
    const toggleHire = this.toggleHire.bind(this, this.props.actions.toggleHire.bind(null, id));

    return (
      <div className="cards__item-wrapper" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        {isHovering ? <CardHover username={username} hired={hired} toggleHire={toggleHire} /> : null}
        <CardInfo username={username} spec={spec} online={online} hired={hired} photo={photo} />
        <CardMeta experience={`${experience} years`} rate={`${rate}%`} func={func} />
      </div>
    );
  }
}