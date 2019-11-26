import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import acii from './Blocks/ascii';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    acii();
  }

  render() {
    return (
      <div className="footer" style={{ display: this.props.display }}>
        <div className="footer-top">
          <div className="footer-link">
            <Link to="/">Terms and Conditions</Link>
          </div>
          <div className="footer-seperator">|</div>
          <div className="footer-link">
            <Link to="/">Privacy Policy</Link>
          </div>          
          <div className="footer-seperator">|</div>
          <div>
            <a href="https://www.facebook.com/sandiegocodeschool/" target="_blank" rel="noopener noreffer">
              <img src="/img/facebook.png" alt="Facebook Logo" />
            </a>
            <a href="https://instagram.com/sdcs_io" target="_blank" rel="noopener noreffer">
              <img src="/img/instagram.png" alt="Instagram Logo" />
            </a>
            <a href="https://twitter.com/sdcs_io" target="_blank" rel="noopener noreffer">
              <img src="/img/twitter.png" alt="Twitter Logo" />
            </a>
            <a href="https://www.linkedin.com/company/sandiegocodeschool/about/" target="_blank" rel="noopener noreffer">
              <img src="/img/linkedin.png" alt="Linkedin Logo" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <div> &copy; 2019 San Diego Code School, LLC </div>
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  display: PropTypes.string
};
