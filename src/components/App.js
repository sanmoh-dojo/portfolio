import React, {Component} from "react";
import {Router, Switch, Route} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";

import Menu from "./Menu";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Stack from "./Stack";
import Contact from "./Contact";

import "../styles/app.scss";

class App extends Component {
  render() {
    return (
      <Route
        render={({location}) => (
          <TransitionGroup>
            {localStorage.getItem("firstTimeDone") === "yes" ? <Menu /> : ""}
            <CSSTransition key={location.key} timeout={1000} classNames="fade">
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
    );
  }
}

export default App;
