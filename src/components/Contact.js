import React from "react";
import {NavLink} from "react-router-dom";

import "../styles/components/contact.scss";

function Stack() {
  return (
    <div className="section contact cl-black">
      <div className="centered text-center">
        <p className="title text-uppercase text-spaced">Contact</p>
        <table className="cl-green">
          <tr>
            <td>
              <a target="_blank" href="https://github.com/sanmoh-dojo">
                <i class="lab la-github" />
              </a>
            </td>
            <td>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/sanmoh-hombal-3a8b481a5/"
              >
                <i class="lab la-linkedin" />
              </a>
            </td>
            <td>
              <a href="mailto:sanmoh.hombal@gmail.com">
                <i class="las la-envelope" />
              </a>
            </td>
          </tr>
        </table>
        <NavLink
          to="/"
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
