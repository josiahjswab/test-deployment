import React from "react";

export default function ReadyToBeginBanner() {
  return (
    <div className="ready-to-begin flex-center top-bottom-border antic shadow">
      <div className="spacer-width-md"></div>
      <div className="column text-align-left">
        <h2>READY TO BEGIN A NEW CAREER IN TECH?</h2>
        <div className="spacer-sm"></div>
        <p>Answer a few questions and we will put you in touch with one of our advisors.</p>
      </div>
      <div className="column text-align-center flex-center">
        <button className="button" onClick="">GET INFO</button> {/* TODO add to route to embedded form */}
      </div>
    </div>
  );
}
