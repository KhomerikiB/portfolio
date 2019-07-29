import React from "react";
import "./ProjectItem.css";
class ProjectItem extends React.Component {
  state = {
    extra: ""
  };
  componentDidMount() {
    if (
      this.props.currentPage === "WORK" ||
      this.props.currentPage === "/work"
    ) {
      setTimeout(() => {
        this.setState({
          extra: "project-extra"
        });
      }, 100);
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.currentPage !== "WORK" &&
      nextState.extra === "project-extra" &&
      nextProps.currentPage !== "/work"
    ) {
      this.setState({
        extra: ""
      });
    }
    return true;
  }
  render() {
    return (
      <React.Fragment>
        <a
          href={this.props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={"project " + this.state.extra}
          style={{ top: this.props.top, left: this.props.left }}
        >
          <span className="Project-title" style={{ color: this.props.color }}>
            {this.props.title}
          </span>
          <span className="Languages">
            <span className="Languages-list">{this.props.languages}</span>
            <span className="second-title">
              <div>Open Project</div>
            </span>
          </span>
        </a>
      </React.Fragment>
    );
  }
}

export default ProjectItem;
