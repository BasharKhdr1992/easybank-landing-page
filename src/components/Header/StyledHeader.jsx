import styled from "styled-components";
import bgIntroDesktop from "../../images/bg-intro-desktop.svg";
import bgIntroMobile from "../../images/bg-intro-mobile.svg";
import mockups from "../../images/image-mockups.png";
const StyledHeader = styled.div`
  height: 600px;
  display: flex;
  padding-left: 4rem;
  background-image: url(${bgIntroDesktop});
  background-position: top -17rem left 35rem;
  background-repeat: no-repeat;
  display: flex;
  .hero {
    width: 60%;
    position: relative;
  }

  .hero:not(.dropdown-active) {
    &::after {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      width: 100%;
      height: 150%;
      z-index: 1;
      content: "";
      background-image: url(${mockups});
      background-repeat: no-repeat;
      background-position: bottom 5rem right -8rem;
    }
  }

  .content {
    display: flex;
    height: inherit;
    flex-direction: column;
    width: 40%;
    justify-content: center;
  }

  .content > h1 {
    color: hsl(233, 26%, 24%);
    margin-bottom: 2.5rem;
    font-weight: 400;
    font-size: 4rem;
  }

  .content > p {
    margin-bottom: 2.5rem;
    font-size: 1.1rem;
    color: hsl(233, 8%, 62%);
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    background-image: url(${bgIntroMobile});
    background-position: top -3rem left 0rem;
    background-size: 100%;
    height: auto;
    padding: 0;
    .hero {
      height: 100vh;
    }

    .hero:not(.dropdown-active) {
      &::after {
        background-size: 80%;
        background-position: bottom 22rem right 5rem;
      }
    }

    .hero.dropdown-active::after {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      content: "";
      width: 100%;
      height: 200%;
      background-repeat: no-repeat;
      background-image: linear-gradient(
        to bottom,
        hsla(233, 8%, 62%, 60%) 60%,
        hsla(0, 0%, 100%, 40%)
      );
    }

    .content,
    .hero {
      width: 100%;
    }

    .content {
      margin-top: 12rem;
      align-items: center;
    }

    .content > h1 {
      font-size: 3rem;
    }

    .content > h1,
    .content > p {
      text-align: center;
    }

    .content > p {
      line-height: 2rem;
    }
  }

  @media screen and (max-width: 600px) {
    .hero:not(.dropdown-active) {
      &::after {
        background-size: 97%;
        background-position: bottom 7rem right 0.5rem;
      }
    }

    .hero {
      height: 50vh;
    }

    .content {
      margin-top: 7rem;
    }
  }
`;

export default StyledHeader;
