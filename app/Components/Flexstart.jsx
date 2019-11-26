import React, { Component } from "react";
import PropTypes from "prop-types";
import ClassScheduleInfo from "./Blocks/ClassScheduleInfo";
import ClassBanner from "./Blocks/ClassBanner";
import OurFrontEndProgram from "./Blocks/OurFrontEndProgram";
import MichaelQuote from "./Blocks/MichaelQuote";
import SuccessStories from "./Blocks/SuccessStories";
import NeedMoreInfo from "./Blocks/NeedMoreInfo";

export default class Flexstart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonialLength: 6
    };
  }

  componentDidMount() {
    this.props.removeHeaderFooter();
  }
  render() {
    return (
      <div className="Flexstart">
        <ClassBanner />
        <div className="spacer-sm"></div>
        <OurFrontEndProgram />
        <MichaelQuote />
        <div className="spacer-md"></div>
        <ClassScheduleInfo />
        <div className="spacer-md"></div>
        <SuccessStories testimonialLength={this.state.testimonialLength}/>
        <div className="spacer-sm"></div>
        <NeedMoreInfo />
        <div className="spacer-sm"></div>
        <div className="Flexstart">
          <div className="pillars flex-wrap-closer top-bottom-border shadow">
            <div className="text-align-center">
              <img src="/img/sdcs-logo.png" alt="SDCS LOGO" />
            </div>
            <div className="text-align-center">
              <h4>Location Address</h4>
              <p>140 North Escondido Blvd Escondido, CA 92025</p>
            </div>
            <div className="text-align-center">
              <h4>Phone Number</h4>
              <p>+1 619-320-8378</p>
            </div>
            <div className="text-align-center">
              <h4>Email Address</h4>
              <p>info@sdcs.io</p>
            </div>
          </div>
        </div>
        <div className="text-align-center margin-wide">
          <div> &copy; 2019 San Diego Code School, LLC </div>
        </div>
      </div>
    );
  }
}

Flexstart.propTypes = {
  removeHeaderFooter: PropTypes.func
};
