import React, { Component } from "react";
import "./Navbar.css";
import logo from "./WeatherIcons/Logo.png";
import {
  BrowserRouter as Router, // we are aliasing this module for a cleaner call
  Route,
  Link,
  // etc.
} from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <ul>
        <Link to="/"><img src={logo}></img></Link>
        </ul>
      </div>
    );
  }
}
export default Navbar;
