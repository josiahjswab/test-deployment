import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Flexstart from "./components/Flexstart";
import AboutUs from "./components/AboutUs";

import "./css/styles.scss";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "block",
    };
    this.removeHeaderFooter = this.removeHeaderFooter.bind(this);
  }
  
  removeHeaderFooter() {
    this.setState({
      display: "none"
    });
  }

  render() {
    return (
      <div className="app-container">
          <Helmet defaultTitle="SDCS">
            <meta charSet="utf-8" />
          </Helmet>
          <Header display={this.state.display}/>
          <div style={{ display: this.state.display }} className="spacer-header"></div>
          <Switch>
            <Route exact path="/" component={AboutUs} />
            <Route path="/flexstart" render={ () => <Flexstart removeHeaderFooter={this.removeHeaderFooter}/> }/>
            <Redirect to="/flexstart"/>
          </Switch>
          <Footer display={this.state.display}/>
      </div>
    );
  }
}
