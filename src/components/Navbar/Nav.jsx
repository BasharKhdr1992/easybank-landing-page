import React from "react";
import StyledNav from "./StyledNav";
import logo from "../../images/logo.svg";
import Button from "../Button/Button";
import hamburger from "../../images/icon-hamburger.svg";
import close from "../../images/icon-close.svg";

const Nav = ({ isDropdown, onMobielMenuClick }) => {
  return (
    <StyledNav>
      <div className="nav-logo">
        <img src={logo} alt="easybank" className="logo" />
      </div>
      <div className="nav-links collapse">
        <button className="nav-link">Home</button>
        <button className="nav-link">About</button>
        <button className="nav-link">Contact</button>
        <button className="nav-link">Blog</button>
        <button className="nav-link">Careers</button>
      </div>
      <div className="nav-right">
        <div className="collapse">
          <Button>request invite</Button>
        </div>
        <div className={`mobile`}>
          <img
            onClick={onMobielMenuClick}
            src={isDropdown ? close : hamburger}
            alt="hamburger"
            className="mobile-menu"
          />
        </div>
      </div>
      <div
        className={`${
          isDropdown ? "dropdown-active" : undefined
        } dropdown mobile`}
      >
        <button className="dropdown-link">Home</button>
        <button className="dropdown-link">About</button>
        <button className="dropdown-link">Contact</button>
        <button className="dropdown-link">Blog</button>
        <button className="dropdown-link">Careers</button>
      </div>
    </StyledNav>
  );
};

export default Nav;
