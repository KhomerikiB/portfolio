import React from "react";
import { connect } from "react-redux";
import Home from "../components/main/Home";
import Work from "../components/work/Work";
import About from "../components/about/About";
import Navigation from "../components/fixedelements/navigation/Navigation";
import Lines from "./fixedelements/lines/Lines";
import Plus from "./fixedelements/plus/Plus";
import Overlay from "./fixedelements/overlay/Overlay";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <React.Fragment>
            <Route
              path="/portfolio"
              render={props => <Navigation {...props} />}
            />
            <Switch>
              <Route
                path="/portfolio"
                exact
                render={() => <Home currentPage={this.props.currentPage} />}
              />
              <Route
                path="/portfolio/work"
                render={() => <Work currentPage={this.props.currentPage} />}
              />
              <Route
                path="/portfolio/about"
                render={() => <About currentPage={this.props.currentPage} />}
              />
              />
            </Switch>
          </React.Fragment>
        </Router>
        <Lines>
          <Plus currentPage={this.props.currentPage} />
        </Lines>
        <Overlay currentPage={this.props.currentPage} />
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    currentPage: state.currentPage
  };
};
export default connect(mapStateToProps)(App);
