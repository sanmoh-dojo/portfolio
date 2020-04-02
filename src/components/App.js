import React from "react";
import {Route, Switch} from "react-router-dom";

import Menu from "./Menu";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Stack from "./Stack";
import Contact from "./Contact";
import ScrollToTop from "./ScrollToTop";

import "../styles/app.scss";

function App() {
  return (
    <div>
      {localStorage.getItem("firstTimeDone") === "yes" ? <Menu /> : ""}
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/stack" component={Stack} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </ScrollToTop>
    </div>
  );
}

export default App;
