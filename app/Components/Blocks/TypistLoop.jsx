import React, { Component } from "react";
import Typist from "react-typist";

export default class TypistLoop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTyping: true
    };
    this.onTypingDone = this.onTypingDone.bind(this);
  }

  onTypingDone() {
    this.setState({ isTyping: false }, () => {
      setTimeout(() => this.setState({ isTyping: true }), 1000);
    });
  }

  render() {
    return !this.state.isTyping ? (
      ""
    ) : (
      <Typist
        className="TypistExample-message"
        startDelay={250}
        onTypingDone={this.onTypingDone}
      >
        Are you ready&nbsp;
        <Typist.Delay ms={750} />
        for a new career?
        <Typist.Backspace count={17} delay={1000} />
        <Typist.Delay ms={750} />
        to learn to code?
        <Typist.Backspace count={17} delay={1000} />
        <Typist.Delay ms={750} />
        with in demand skills?
        <Typist.Delay ms={1000} />
      </Typist>
    );
  }
}
