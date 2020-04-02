import React from "react";
import {NavLink} from "react-router-dom";

function handleClick() {
  setTimeout(() => {
    localStorage.setItem("firstTimeDone", "yes");
    window.location.reload();
  }, 100);
}

function Stack() {
  return (
    <div className="section contact cl-black">
      <div className="centered text-center">
        <p className="title text-uppercase text-spaced">Contact</p>
        <table className="cl-green">
          <tbody>
            <tr>
              <td>
                <a
                  target="_blank"
                  href="https://github.com/sanmoh-dojo"
                  rel="noopener noreferrer"
                >
                  <i className="lab la-github" />
                </a>
              </td>
              <td>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/sanmoh-hombal-3a8b481a5/"
                >
                  <i className="lab la-linkedin" />
                </a>
              </td>
              <td>
                <a href="mailto:sanmoh.hombal@gmail.com">
                  <i className="las la-envelope" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <NavLink
          to="/"
          style={{color: "black", textDecoration: "none"}}
          activeStyle={{color: "black", textDecoration: "none"}}
          onClick={handleClick}
        >
          <i className="las la-home icon" />
        </NavLink>
      </div>
    </div>
  );
}

export default Stack;
