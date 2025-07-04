import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink } from "react-router-dom";
// import animatedLogo from "../../assets/images/animated_logo.svg";
import SeoHeader from "../seoHeader/SeoHeader";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({ isMenuOpen: !prevState.isMenuOpen }));
  };

  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  render() {
    const { isMenuOpen } = this.state;
    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <header className="header custom-navbar">
          {/* Hamburger menu for small screens */}
          <button
            className="menu-icon"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={this.toggleMenu}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <span className="navicon"></span>
            {/* Optionally add an 'X' or hamburger icon here based on isMenuOpen */}
          </button>
          <ul className={`menu${isMenuOpen ? " open" : ""}`}>
            <li>
              <NavLink
                exact
                to="/home"
                activeClassName="active-link"
                onClick={this.closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/education"
                activeClassName="active-link"
                onClick={this.closeMenu}
              >
                Education
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/experience"
                activeClassName="active-link"
                onClick={this.closeMenu}
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                activeClassName="active-link"
                onClick={this.closeMenu}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                activeClassName="active-link"
                onClick={this.closeMenu}
              >
                Contact Me
              </NavLink>
            </li>
            <li>
              <a href="#hire" className="hire-btn" onClick={this.closeMenu}>
                Hire me
              </a>
            </li>
          </ul>
        </header>
      </Fade>
    );
  }
}
export default Header;
