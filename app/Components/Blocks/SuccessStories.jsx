import React from "react";
import PropTypes from 'prop-types';

import Testimonials from "./Testimonials";

export default function SuccessStories(props) {

  return (
    <div>
      <div className="text-align-center">
        <h1 className="antic ">
          <span className="accent-border">Student Success Stories</span>
        </h1>
      </div>
      <div className="spacer-sm"></div>
      <div className="testimonial-block-wrapper flex-row-center">
        {Testimonials.slice(0, props.testimonialLength).map((test, i) => (
          <div className="testimonial-block flex-row-start" key={i}>
            <div className="testimonial-by flex-row-start">
              <img className="shadow" src={test.img} alt=":)"></img>
              <div className="inline">
                <span className="emphasised-text">{test.name}</span>
                <span className="block">{test.title}</span>
              </div>
            </div>
            <div className="testimonal-bubble talk-bubble talk-text">
              <p className="rm-browser-margin">{test.testimonial}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

SuccessStories.propTypes= {
  testimonialLength: PropTypes.number
};
