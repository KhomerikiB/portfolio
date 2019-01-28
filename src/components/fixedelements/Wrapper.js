import React from "react";
const wrapperStyle = {
  display: "flex",
  width: "80%",
  margin: "0 auto",
  paddingTop: "7rem",
  maxWidth: "134rem",
  height: "100vh"
};
const Wrapper = props => <div style={wrapperStyle}>{props.children}</div>;
export default Wrapper;
