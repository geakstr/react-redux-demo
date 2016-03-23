import React from "react";

export default function CardInfo(props) {
  const {username, photo, spec, online, hired} = props;

  return (
    <div className="cards__item-info card-info">
      {hired ? <i className="card-info__hired">✓ Hired</i> : null}
      {online ? <i className="card-info__online">online •</i> : null}
      <img className="card-info__photo" src={photo}/>
      <div className="card-info__username">{username}</div>
      <div className="card-info__spec">{spec}</div>
    </div>
  );
}

CardInfo.propTypes = {
  photo: React.PropTypes.string,
  username: React.PropTypes.string,
  spec: React.PropTypes.string,
  online: React.PropTypes.bool
};