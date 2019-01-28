import React from "react";
import "./LeftSide.css";
const LeftSide = props => {
  return (
    <div className="Left-side mobile-hide">
      <div className={"image-container " + props.imageExtra} />
      <h1 className={"image-title " + props.textExtra}>Portfolio</h1>
    </div>
  );
};
export default LeftSide;
