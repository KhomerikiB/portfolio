import React from "react";
import "./Plus.css";
const Plus = props => {
  let className = ";";
  if (props.currentPage !== "/") {
    className = "Pluses visible";
  } else {
    className = "Pluses";
  }
  return (
    <div className="Plus mobile-hide-plus">
      <div className="Pluses">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <div className="Pluses">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <div className={className}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <div className="Pluses">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <div className="Pluses">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
export default Plus;
