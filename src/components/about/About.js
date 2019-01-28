import React from "react";
import Wrapper from "../fixedelements/Wrapper";
import "./About.css";
class About extends React.Component {
  state = {
    extra: ""
  };
  componentDidMount() {
    if (
      this.props.currentPage === "ABOUT" ||
      this.props.currentPage === "/about"
    ) {
      setTimeout(() => {
        this.setState({
          extra: "extra-flexbox"
        });
      }, 100);
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.currentPage !== "ABOUT" &&
      nextState.extra === "extra-flexbox" &&
      nextProps.currentPage !== "/about"
    ) {
      this.setState({
        extra: ""
      });
    }
    return true;
  }

  render() {
    return (
      <Wrapper>
        <div className="flex">
          <div className={"flex-box " + this.state.extra}>
            <div className="About-title">About</div>
            <div className="About-description">
              I’m Beka Khomeriki, Front-end Developer based in Georgia.
              <br /> My priority is to deliver a high-quality product with
              high-quality code. I enjoy writing code and always doing my best.
            </div>
          </div>

          <div className={"flex-box " + this.state.extra}>
            <div className="About-title">SKILLS</div>
            <div className="About-skills">
              <span>JavaScript</span>
              <span>React</span>
            </div>

            <div className="About-skills">
              <span>CSS3</span>
              <span>SASS</span>
            </div>

            <div className="About-skills">
              <span>HTML5</span>
              <span>Responsive Design</span>
            </div>

            <div className="About-skills" />
          </div>
          <div className={"flex-box " + this.state.extra}>
            <div className="About-title">Contact</div>
            <div className="About-description">
              Get In Touch <span className="line" /> khomerikibeka2@gmail.com
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}
export default About;
