import React from "react";
import "./Navigation.css";
import { connect } from "react-redux";
import changeURL from "../../../action";
class Navigation extends React.Component {
  state = {
    active: "",
    activeSec: "",
    mobileMenu: false
  };
  checkForMobileClick = () => {
    if (this.state.mobileMenu) {
      this.setState({ mobileMenu: !this.state.mobileMenu });
    }
  };
  mainPage = e => {
    e.preventDefault();
    if (this.props.location.pathname !== "/portfolio") {
      this.props.changeURL("/");
      setTimeout(() => {
        this.props.history.push("/portfolio");
      }, 700);
    }
    this.setState({ activeSec: "active" });
  };
  handleHome = e => {
    this.activeClass(e);
    e.preventDefault();
    this.mainPage(e);
    this.checkForMobileClick();
  };
  handleWork = e => {
    this.activeClass(e);
    e.preventDefault();
    if (this.props.location.pathname !== "/portfolio/work") {
      this.props.changeURL("WORK");
      setTimeout(() => {
        this.props.history.push("/portfolio/work");
      }, 700);
    }
    this.checkForMobileClick();
  };
  handleAbout = e => {
    this.activeClass(e);
    e.preventDefault();
    if (this.props.location.pathname !== "/portfolio/about") {
      this.props.changeURL("ABOUT");
      setTimeout(() => {
        this.props.history.push("/portfolio/about");
      }, 500);
    }
    this.checkForMobileClick();
  };

  activeClass = e => {
    const elements = document.querySelectorAll(" li a");
    this.setState({ activeSec: "" });
    elements.forEach(item => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
  };
  render() {
    return (
      <React.Fragment>
        <header className="Menu-nav">
          <span className="Logo">Portfolio</span>
          <li className="mobile-hide">
            <a
              onClick={this.handleHome}
              href="/"
              className={this.state.activeSec}
            >
              Home
            </a>
          </li>
          <li className="mobile-hide">
            <a onClick={this.handleWork} href="/">
              Work
            </a>
          </li>
          <li className="mobile-hide">
            <a onClick={this.handleAbout} href="/">
              About
            </a>
          </li>
          <li
            className="burger desktop-hide"
            onClick={() =>
              this.setState({ mobileMenu: !this.state.mobileMenu })
            }
          >
            <div />
            <div />
            <div />
          </li>
        </header>
        <div
          className={
            this.state.mobileMenu
              ? "mobile-menu desktop-hide mobileMenuActive"
              : "mobile-menu desktop-hide"
          }
        >
          <div
            className="x-mobileMenu"
            onClick={() =>
              this.setState({ mobileMenu: !this.state.mobileMenu })
            }
          >
            close
          </div>
          <ul>
            <li>
              <a
                onClick={this.handleHome}
                href="/portfolio"
                className={this.state.activeSec}
              >
                Home
              </a>
            </li>
            <li>
              <a onClick={this.handleWork} href="/portfolio">
                Work
              </a>
            </li>
            <li>
              <a onClick={this.handleAbout} href="/portfolio">
                About
              </a>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    currentPage: state.currentPage
  };
};

export default connect(
  mapStateToProps,
  { changeURL }
)(Navigation);
