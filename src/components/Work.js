import React from "react";
import {NavLink} from "react-router-dom";

import Data from "../assets/Companies.json";
import "../styles/components/work.scss";

function Work() {
  return (
    <div className="section work cl-black">
      <div className="centered text-center">
        <p className="title text-uppercase text-spaced">Work</p>
        {Data.companies.map((company, index) => {
          return (
            <div className="company" key={index}>
              <p className="text-uppercase">
                <span className="name text-spaced">{company.name}</span>
                {". "}
                <span className="cl-green">{company.location}</span>
              </p>
              <p>{company.designation}</p>
              <p>
                {company.startDate.month}{" "}
                <span className="cl-green">{company.startDate.year}</span>
                {" - "}
                {company.endDate.month}{" "}
                <span className="cl-green">{company.endDate.year}</span>
              </p>
              {company.work.map((point, i, arr) => {
                return (
                  <span key={i}>
                    <p>{point}</p>
                    {arr.length - 1 === i ? (
                      ""
                    ) : (
                      <hr color="#75b79e" size="1" />
                    )}
                  </span>
                );
              })}
            </div>
          );
        })}
        <NavLink
          to="/stack"
          style={{color: "black", textDecoration: "none"}}
          activeStyle={{color: "black", textDecoration: "none"}}
        >
          <i className="las la-long-arrow-alt-right icon" />
        </NavLink>
      </div>
    </div>
  );
}

export default Work;
