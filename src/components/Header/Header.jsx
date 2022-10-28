import React from "react";
import Button from "../Button/Button";
import StyledHeader from "./StyledHeader";

const Header = ({ isDropdown }) => {
  return (
    <StyledHeader>
      <div className="content">
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <Button>request invite</Button>
      </div>
      <div className={`hero ${isDropdown ? "dropdown-active" : undefined}`} />
    </StyledHeader>
  );
};

export default Header;
