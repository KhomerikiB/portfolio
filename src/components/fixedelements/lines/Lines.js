import React from "react";
import "./Lines.css";
const Lines = props => (
  <div className="Lines">
    <div className="Line" />
    <div className="Line mobile-hide" />
    <div className="Line" />
    <div className="Line mobile-hide" />
    <div className="Line" />
    <div className="Line mobile-hide" />
    <div className="Line" />
    {props.children}
  </div>
);
export default Lines;
