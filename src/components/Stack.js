import React from "react";
import {NavLink} from "react-router-dom";

import Data from "../assets/Stack.json";

function Stack() {
  return (
    <div className="section stack cl-black">
      <div className="centered text-center">
        <p className="title text-uppercase text-spaced">Stack</p>
        <div className="content">
          {Data.technologies.map((lang, i, arr) => {
            return (
              <div key={i}>
                <div>{lang.name}</div>
                {arr.length - 1 === i ? (
                  ""
                ) : (
                  <hr color="#75b79e" size="1" style={{width: lang.level}} />
                )}
              </div>
            );
          })}
        </div>
        <NavLink
          to="/contact"
          style={{color: "black", textDecoration: "none"}}
          activeStyle={{color: "black", textDecoration: "none"}}
        >
          <i className="las la-long-arrow-alt-right icon" />
        </NavLink>
      </div>
    </div>
  );
}

export default Stack;
