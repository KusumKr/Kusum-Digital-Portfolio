import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink } from "react-router-dom";
// import animatedLogo from "../../assets/images/animated_logo.svg";
import SeoHeader from "../seoHeader/SeoHeader";

class Header extends Component {
  render() {
    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <div>
          <header className="header custom-navbar">
            {/* Hamburger menu for small screens */}
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <nav className="navbar-menu">
              <ul className="menu">
                <li>
                  <NavLink exact to="/home" activeClassName="active-link">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/education" activeClassName="active-link">
                    Education
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/experience" activeClassName="active-link">
                    Experience
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/projects" activeClassName="active-link">
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" activeClassName="active-link">
                    Contact Me
                  </NavLink>
                </li>
                <li>
                  <a href="#hire" className="hire-btn">
                    Hire me
                  </a>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;
