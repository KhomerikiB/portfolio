import React from "react";
import "./Work.css";
import Wrapper from "../fixedelements/Wrapper";
import Project from "./project/Project";
class Work extends React.Component {
  render() {
    return (
      <Wrapper>
        <div className="Work">
          <Project currentPage={this.props.currentPage} />
        </div>
      </Wrapper>
    );
  }
}
export default Work;
