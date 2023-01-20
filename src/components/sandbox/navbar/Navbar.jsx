import React, { useEffect } from "react";
import "./navbar.css";
import { initialize, toggleHamburger } from "./navbar.js";
import logo from "/img/logo.png";

const Navbar = () => {
  useEffect(initialize, []);
  return (
    <div className="bthsTech__navbar">
      <div
        onClick={() => {
          toggleHamburger();
        }}
        id="bthsTech_hamburger"
        className="bthsTech__navbar_hamburger"
      >
        <div className="bthsTech__navbar_hamburger-bar"></div>
        <div className="bthsTech__navbar_hamburger-bar"></div>
        <div className="bthsTech__navbar_hamburger-bar"></div>
      </div>
      <div className="bthsTech__navbar-links">
        <div
          id="bthsTech__navbar-links_container"
          className="bthsTech__navbar-links_container"
        >
          <div className="bthsTech__navbar-links_logo">
            <img src={logo} alt="logo" />
          </div>
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wbthsTech">BTHS Tech</a>
          </p>
          <p>
            <a href="#timeline">Timeline</a>
          </p>
          <p>
            <a href="#ourteam">Our Team</a>
          </p>
          <p>
            <a href="#contactus">Contact Us</a>
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default Navbar;
