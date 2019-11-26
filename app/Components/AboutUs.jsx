import React, { Component } from "react";
import ClassBanner from "./Blocks/ClassBanner";
import LearnByCoding from "./Blocks/LearnByCoding";
import SuccessStories from "./Blocks/SuccessStories";
import UnionTribune from "./Blocks/UnionTribune";
import ReadyToBeginBanner from "./Blocks/ReadyToBeginBanner";
import LeadInstructor from "./Blocks/LeadInstructor";

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonialLength: 14
    };
  }

  render() {
    return (
      <div className="Flexstart">
        <ClassBanner />
        <div className="spacer-sm"></div>
        <LearnByCoding/>
        <LeadInstructor/>
        <SuccessStories testimonialLength={this.state.testimonialLength}/>
        <div className="spacer-sm"></div>
        <UnionTribune/>
        <div className="spacer-sm"></div>
        <ReadyToBeginBanner/>
        <div className="spacer-lg"></div>
        <div className="spacer-sm"></div>
      </div>
    );
  }
}
