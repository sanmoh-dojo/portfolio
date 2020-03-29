import React, {Component} from "react";
import {NavLink} from "react-router-dom";

function Home() {
  return (
    <div className="section">
      <NavLink to="/about">Home</NavLink>
    </div>
  );
}

export default Home;
