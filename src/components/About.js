import React from "react";
import {NavLink} from "react-router-dom";

import "../styles/components/about.scss";

function About() {
  return (
    <div className="section about">
      <div className="text-center centered">
        <p className="title text-uppercase text-spaced">About</p>
        <div className="content">
          <p>
            How about I tell you a little bit about myself. I'm a Developer -
            Designer based out of Bangalore, IN. I am what you can call a
            full-stack developer inclined more towards the front-end and it's
            been about 2 years since I began doing it professionally.
          </p>
          <p>
            Having been into a bit of cinematography, I strive to make webapps
            that flow & feel like a Scorsece Movie.
            <br />
            <span className="cl-green">
              As a software developer, I enjoy using my obsessive attention to
              detail, an unquivocal love for making things and a mission-driven
              work ethic to literally change the world.
            </span>
            <br />
            I've never stopped engaging my passion to solve tech problems.
          </p>
          <p>
            When I have a free moment, I enjoy jamming on my guitar and mostly
            binging sci-fi on netflix.
          </p>
        </div>
        <NavLink
          to="/work"
          style={{color: "black", textDecoration: "none"}}
          activeStyle={{color: "black", textDecoration: "none"}}
        >
          <i className="las la-long-arrow-alt-right icon" />
        </NavLink>
      </div>
    </div>
  );
}

export default About;
