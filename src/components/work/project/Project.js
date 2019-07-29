import React from "react";
import ProjectItem from "../projectitem/ProjectItem";
import "./Project.css";
class Project extends React.Component {
  render() {
    return (
      <div className="row">
        <ProjectItem
          top="30%"
          left="0%"
          color="#90feb5"
          title="Hotelweb"
          languages="#JavaScript #HTML5 #CSS3"
          currentPage={this.props.currentPage}
          href={"http://hotelweb.ge/"}
        />

        <ProjectItem
          top="50%"
          left="33.4%"
          color="#dcdde1"
          title="Atelier Buckley"
          languages="#JavaScript #HTML5 #CSS3"
          currentPage={this.props.currentPage}
          href={"http://atelierbuckley.com/"}
        />
        <ProjectItem
          top="10%"
          left="33.4%"
          color="#ffcb08"
          title="Capital Express"
          languages="#JavaScript #HTML5 #CSS3"
          currentPage={this.props.currentPage}
          href={"https://webdigital.gq/en"}
        />

        {/* <ProjectItem
          top="70%"
          left="0%"
          color="#c887fb"
          title="Todo App"
          languages="#JavaScript #HTML5 #CSS3"
          currentPage={this.props.currentPage}
          href={"https://khomerikib.github.io/todoapp/"}
        /> */}
      </div>
    );
  }
}
export default Project;
