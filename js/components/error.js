import React from "react";

export default function Error(props) {
  return <div className="error-container">{props.message}. <a href="/">Home</a></div>;
}