import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburgerToggle: false
    };
    this.changeDisplay = this.changeDisplay.bind(this);
  }

  changeDisplay() {
    if (this.state.hamburgerToggle) {
      this.setState({ hamburgerToggle: false });
    } else {
      this.setState({ hamburgerToggle: true });
    }
  }

  render() {
    return (
      <div className="header" style={{ display: this.props.display }}>
        <div className="header-navbar-container">
          <div className="header-logo">
            {/* <img src="/img/sdcs-logo.png" alt="SDCS LOGO" /> try this out??? */}
          </div>
          <div className="header-navbar">
            <ul>
              <li className="menu-item">
                <Link to="/">About Us</Link>
              </li>
              <li className="menu-item">
                <Link to="/">Events</Link>
              </li>
              <li className="menu-item">
                <Link to="/">Programs</Link>
              </li>
              <li className="menu-item">
                <Link to="/">Tuition</Link>
              </li>
              <li className="menu-item">
                <Link to="/">Schedule A Tour</Link>
              </li>
              <li className="menu-item">
                <Link to="/">Blog</Link>
              </li>
              <li className="menu-item">
                <Link to="/">Apply</Link>
              </li>
            </ul>
          </div>
          <div className="header-hamburger">
            <div className="header-hamburger-icon" onClick={this.changeDisplay}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div
          className="menu"
          style={
            this.state.hamburgerToggle
              ? { transform: "translate3d(0, 0, 0)" }
              : { transform: "translate3d(0, -100%, 0)" }
          }
        >
          <ul>
            <li className="menu-item">
              <Link to="/" onClick={this.changeDisplay}>
                About Us
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" onClick={this.changeDisplay}>
                Events
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" onClick={this.changeDisplay}>
                Programs
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" onClick={this.changeDisplay}>
                Tuition
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" onClick={this.changeDisplay}>
                Schedule A Tour
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" onClick={this.changeDisplay}>
                Blog
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" onClick={this.changeDisplay}>
                Apply
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  display: PropTypes.string
};
