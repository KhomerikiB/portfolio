import React from "react";
import "./Overlay.css";

const Overlay = props => {
  let className = "";
  if (props.currentPage === "/") {
    className = "Overlay overlay-extra";
  } else {
    className = "Overlay";
  }
  return <div className={className} />;
};
export default Overlay;
