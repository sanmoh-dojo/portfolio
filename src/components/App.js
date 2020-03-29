import React, {Component} from "react";
import {Router, Route, Switch} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";

import Home from "./Home.js";
import About from "./About.js";

import "../styles/app.scss";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Route
        render={({location}) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={1000} classNames="fade">
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}

export default App;
