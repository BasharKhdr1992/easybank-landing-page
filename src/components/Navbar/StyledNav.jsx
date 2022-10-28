import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 4rem 0rem 4rem;
  align-items: center;

  .logo {
    width: auto;
    margin-bottom: 1rem;
    height: 1.5rem;
  }

  .nav-logo,
  .nav-right {
    width: 30%;
    display: flex;
  }

  .nav-right {
    justify-content: flex-end;
  }

  .nav-links {
    width: 35%;
    display: flex;
  }

  .nav-link {
    cursor: pointer;
    background-image: linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 100%)),
      linear-gradient(to right, hsl(0, 0%, 100%), hsl(0, 0%, 100%));
    border: transparent;
    padding: 2rem 1rem 2rem 1rem;
    &:not(:last-child) {
      margin-right: 0.5rem;
    }
    color: hsl(233, 8%, 62%);
    border-bottom-style: solid;
    border-bottom-width: 5px;
    background-origin: border-box;
    background-clip: padding-box, border-box;
    background-repeat: no-repeat;
    &:hover {
      background-image: linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 100%)),
        linear-gradient(
          to right,
          hsla(136, 65%, 51%, 100%),
          hsla(192, 70%, 51%, 100%)
        );
      color: hsl(233, 26%, 24%);
    }
  }
  .mobile {
    display: none;
  }

  @media screen and (max-width: 1000px) {
    padding: 1rem 2rem 0rem 2rem;
    position: relative;
    .mobile {
      margin-bottom: 1rem;
      display: block;
    }

    .mobile-menu {
      cursor: pointer;
    }

    .dropdown-active.dropdown {
      top: 5rem;
    }

    .dropdown {
      position: absolute;
      background-color: white;
      border-radius: 8px;
      width: 90%;
      padding: 2rem 0rem;
      top: -20rem;
      left: 5%;
      z-index: 2;
      transition: top 0.4s ease-out;
    }

    .collapse {
      display: none;
    }

    .dropdown-active {
      & > .dropdown {
        top: 0rem;
      }
    }

    .dropdown-link {
      color: hsl(233, 26%, 24%);
      width: 100%;
      text-align: center;
      cursor: pointer;
      margin-bottom: 2.5rem;
      background: none;
      border: none;
      font-weight: 700;
      font-size: 1.2rem;
    }

    .dropdown-link:last-child {
      margin-bottom: 0rem;
    }
  }
`;

export default StyledNav;
