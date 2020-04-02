import React from "react";
import {NavLink} from "react-router-dom";

function MenuContent(props) {
  let links = [
    {name: "Home", link: "/"},
    {name: "About", link: "/about"},
    {name: "Work", link: "/work"},
    {name: "Stack", link: "/stack"},
    {name: "Contact", link: "/contact"}
  ];

  return (
    <div className="menu-content">
      <div className="centered text-center text-uppercase text-spaced">
        {links.map((link, i, arr) => {
          return (
            <div key={i}>
              <p>
                <NavLink
                  to={link.link}
                  style={{color: "black", textDecoration: "none"}}
                  activeStyle={{color: "black", textDecoration: "none"}}
                  onClick={props.switchFunction}
                >
                  {link.name}
                </NavLink>
              </p>
              {arr.length - 1 === i ? (
                ""
              ) : (
                <hr color="#75b79e" size="1" style={{width: 100}} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MenuContent;
