import React from "react";
import {NavLink} from "react-router-dom";

import "../styles/components/home.scss";

function Home() {
  return (
    <div className="section home">
      <div className="centered text-uppercase text-center text-spaced">
        <p className="title">Hi, I'm Sanmoh</p>
        <p className="cl-green">Designer / Developer</p>
        <p>Bangalore, IN</p>
        <NavLink
          to="/about"
          style={{color: "black", textDecoration: "none"}}
          activeStyle={{color: "black", textDecoration: "none"}}
        >
          <i className="las la-long-arrow-alt-right icon" />
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
