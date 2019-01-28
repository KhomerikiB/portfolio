import React from "react";
import Wrapper from "../fixedelements/Wrapper";
import LeftSide from "./leftside/LeftSide";
import RightSide from "./rightside/RightSide";
import "./Home.css";
class Home extends React.Component {
  state = {
    imageExtra: "",
    textExtra: "",
    rightExtra: "",
    mobileImageExtra: ""
  };
  componentDidMount() {
    if (
      this.props.currentPage === "/" ||
      this.props.currentPage === "/portfolio" ||
      this.props.currentPage === "/portfolio/"
    ) {
      setTimeout(() => {
        this.setState({
          imageExtra: "image-extra",
          textExtra: "text-extra",
          rightExtra: "right-extra",
          mobileImageExtra: "mobile-imageExtra"
        });
      }, 100);
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.currentPage !== "/portfolio" &&
      nextProps.currentPage !== "/portfolio/" &&
      nextState.imageExtra === "image-extra" &&
      nextState.textExtra === "text-extra" &&
      nextState.rightExtra === "right-extra" &&
      nextProps.currentPage !== "/"
    ) {
      this.setState({
        imageExtra: "",
        textExtra: "",
        rightExtra: "",
        mobileImageExtra: ""
      });
    }
    return true;
  }
  render() {
    return (
      <React.Fragment>
        <div
          className={"image-mobile desktop-hide " + this.state.mobileImageExtra}
        />
        <Wrapper>
          <div className="Flex-container">
            <LeftSide
              imageExtra={this.state.imageExtra}
              textExtra={this.state.textExtra}
            />
            <RightSide rightExtra={this.state.rightExtra} />
          </div>
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default Home;
