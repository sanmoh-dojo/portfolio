import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";

import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Stack from "./Stack";
import Contact from "./Contact";

import "../styles/app.scss";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
            <Route path="/stack" component={Stack} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
