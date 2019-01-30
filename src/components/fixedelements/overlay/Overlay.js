import React from "react";
import "./Overlay.css";

const Overlay = props => {
  let className = "";
  if (
    props.currentPage === "/portfolio/" ||
    props.currentPage === "/" ||
    props.currentPage === "/portfolio"
  ) {
    className = "Overlay overlay-extra";
  } else {
    className = "Overlay";
  }
  console.log(props.currentPage);
  return <div className={className} />;
};
export default Overlay;
