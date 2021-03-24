import React, { Component } from "react";
import {
  BrowserRouter as Router, // we are aliasing this module for a cleaner call
  Route,
  Link,
  // etc.
} from "react-router-dom";
import Navbar from "./Navbar";
import Charlotte from "./Charlotte";
import Miami from "./Miami";
import NewYork from "./NewYork";
import DailyView from "./DailyView";


class Routes extends Component {
  render() {
    return (
      <Router>
        <Navbar />

        <hr />
        <Route name="DailyView" exact path="/" component={DailyView} />
        <Route name="Charlotte" path="/Charlotte" component={Charlotte} />
        <Route name="Miami" path="/Miami" component={Miami} />
        <Route name="NewYork" path="/NewYork" component={NewYork} />
      </Router>
    );
  }
}

export default Routes;
