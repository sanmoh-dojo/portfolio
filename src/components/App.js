import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";

import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Stack from "./Stack";
import Contact from "./Contact";

import "../styles/app.scss";
import "../styles/global/routeAnimation.scss";

class App extends Component {
  render() {
    return (
      <div>
        <Route
          render={({location}) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={300} classNames="fade">
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/work" component={Work} />
                  <Route path="/stack" component={Stack} />
                  <Route path="/contact" component={Contact} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}

export default App;
