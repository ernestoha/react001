import React, { Component } from "react";

//Stateless Functional Component shortcode sfc

// const NavBar = props => {//without Destructing Arguments
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge bagde-pill badge-secondary">
          {/* {props.totalCounters} //without Destructing Arguments */}
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
