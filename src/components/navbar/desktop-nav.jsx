import React from "react";
import { Link } from "react-scroll";
// SCSS
import "./navbar.scss";
// Assets
import LogoImg from "../../assets/navbar/logo.png";
import MobileMenuIcon from "../../assets/navbar/mobile-menu.svg";

const desktopNav = (props) => (
  <nav className={`Navbar ${!props.userIsScrolled ? "extraLargeNavbar" : ""}`}>
    <div className="wrapper flex-s-between">
      <div>
        <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
          <img src={LogoImg} alt="logo" className="pointer" />
        </Link>
      </div>
      <div className="mobile__menu" onClick={props.mobileMenuOpen}>
        <img className="logos" src={MobileMenuIcon} alt="menu" />
      </div>
      <div className="desktop__menu">
        <ul className="flex-s-between">
          <li>
            <Link
              activeClass="active-link"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              bio
            </Link>
          </li>
          <li>
            <Link
              activeClass="active-link"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              skills
            </Link>
          </li>
          <li>
            <Link
              activeClass="active-link"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              showcase
            </Link>
          </li>
          <li>
            <Link
              activeClass="active-link"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              connect
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default desktopNav;
