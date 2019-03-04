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
          color="#2bcbba"
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
          top="70%"
          left="0%"
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
