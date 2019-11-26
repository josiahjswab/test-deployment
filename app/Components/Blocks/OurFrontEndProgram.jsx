import React from "react";

export default function OurFrontEndProgram() {
  return (
    <div>
      <div className="text-align-center">
        <h1 className="antic ">Our Front End Program</h1>
      </div>
      <div className="card-block flex-wrap">
        <div className="scale card-bubble text-align-center shadow">
          <div className="card-text rm-top-padding text-align-center">
            <div className="bookmark">
              <div className="circle-center flex-center shadow">
                <img
                  className="icon-fixture no-background"
                  src="/img/flexstart/css.png"
                  alt="css"
                ></img>
              </div>
            </div>
            <h2 className="">
              Intro to Web <span className="block"> Development</span>
            </h2>
            <p className="rm-browser-margin">
              Start using HTML, CSS, and JavaScript to build websites and learn
              the basics. Begin to learn how to learn to code effectively. Start
              ramping up on the technologies used to build modern websites.
            </p>
          </div>
        </div>

        <div className="scale card-bubble text-align-center shadow">
          <div className="card-text rm-top-padding text-align-center">
            <div className="bookmark">
              <div className="circle-center flex-center shadow">
                <img
                  className="icon-fixture no-background"
                  src="/img/flexstart/js.png"
                  alt="js"
                ></img>
              </div>
            </div>
            <h2>
              Intermediate Web <span className="block"> Development</span>
            </h2>
            <p className="rm-browser-margin">
              Build larger apps and manage code like the pros. Gain experience
              with continuous delivery, and quality assurance via automated
              software testing.
            </p>
          </div>
        </div>

        <div className="scale card-bubble text-align-center shadow">
          <div className="card-text rm-top-padding text-align-center">
            <div className="bookmark">
              <div className="circle-center flex-center shadow">
                <img
                  className="icon-fixture no-background"
                  src="/img/flexstart/graduate.png"
                  alt="gg"
                ></img>
              </div>
            </div>
            <h2>
              Agile Projects <span className="block"> Internship</span>
            </h2>
            <p className="rm-browser-margin">
              Complete a final project for your portfolio via an internship with
              a local company. Earn real world experience by building product
              and adding value for a local San Diego business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
