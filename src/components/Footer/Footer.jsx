import React from "react";
import StyledFooter from "./StyledFooter";
import Logo from "./Logo";
import Button from "./../Button/Button";
import IconFacebook from "./IconFacebook";
import IconYoutube from "./IconYoutube";
import IconTwitter from "./IconTwitter";
import IconPinterest from "./IconPinterest";
import IconInstagram from "./IconInstagram";
const Footer = () => {
  return (
    <StyledFooter>
      <div className="left">
        <div className="col">
          <Logo />
          <div className="icons">
            <IconFacebook />
            <IconYoutube />
            <IconTwitter />
            <IconPinterest />
            <IconInstagram />
          </div>
        </div>
        <div className="col links">
          <button className="btn-link">About Us</button>
          <button className="btn-link">Contact</button>
          <button className="btn-link">Blog</button>
        </div>
        <div className="col links">
          <button className="btn-link">Careers</button>
          <button className="btn-link">Support</button>
          <button className="btn-link">Privacy Policy</button>
        </div>
      </div>
      <div className="right">
        <Button>request invite</Button>
        <p>© Easybank. All Rights Reserved</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
