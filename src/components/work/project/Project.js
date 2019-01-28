import React from "react";
import ProjectItem from "../projectitem/ProjectItem";
import "./Project.css";
class Project extends React.Component {
  render() {
    return (
      <div className="row">
        <ProjectItem
          top="35%"
          left="0%"
          color="#90feb5"
          title="Movies Search App"
          languages="#JavaScript #HTML5 #CSS3"
          currentPage={this.props.currentPage}
          href={"https://khomerikib.github.io/moviesapp/"}
        />
        <ProjectItem
          top="10%"
          left="33.4%"
          color="#f68b9d"
          title="Pizza Delivery"
          languages="#JavaScript #HTML5 #CSS3"
          currentPage={this.props.currentPage}
          href={"https://khomerikib.github.io/pizzadelivery/"}
        />

        <ProjectItem
          top="60%"
          left="33.4%"
          color="#c887fb"
          title="Todo App"
          languages="#JavaScript #HTML5 #CSS3"
          currentPage={this.props.currentPage}
          href={"https://khomerikib.github.io/todoapp/"}
        />
      </div>
    );
  }
}
export default Project;