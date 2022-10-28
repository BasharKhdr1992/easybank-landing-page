import styled from "styled-components";
import bgIntroDesktop from "../../images/bg-intro-desktop.svg";
import bgIntroMobile from "../../images/bg-intro-mobile.svg";
import mockups from "../../images/image-mockups.png";
const StyledHeader = styled.div`
  height: 500px;
  display: flex;
  padding-left: 8rem;
  background-image: url(${bgIntroDesktop});
  background-position: top -17rem left 40rem;
  background-repeat: no-repeat;
  display: flex;
  .hero {
    width: 50%;
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
      height: 130%;
      z-index: 1;
      content: "";
      background-image: url(${mockups});
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: bottom 0rem right -6rem;
    }
  }

  .content {
    display: flex;
    height: inherit;
    flex-direction: column;
    width: 50%;
    justify-content: center;
  }

  .content > h1 {
    color: hsl(233, 26%, 24%);
    margin-bottom: 2.5rem;
    font-weight: 400;
    font-size: 3.5rem;
  }

  .content > p {
    margin-bottom: 2.5rem;
    font-size: 1.1rem;
    width: 80%;
    color: hsl(233, 8%, 62%);
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    background-image: url(${bgIntroMobile});
    background-size: 100%;
    background-position: top -3rem left 0rem;
    height: auto;
    padding: 0;

    .hero.dropdown-active {
      &::after {
        background-image: linear-gradient(
          to bottom,
          hsla(233, 8%, 62%, 1),
          hsla(0, 0%, 98%, 0)
        );
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        height: 130%;
        z-index: 1;
        content: "";
      }
    }

    .hero:not(.dropdown-active) {
      &::after {
        background-size: 97%;
        background-position: bottom 15.2rem right 0.5rem;
      }
    }

    .content,
    .hero {
      width: 100%;
    }

    .content {
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

    .hero {
      height: 500px;
    }
  }
`;

export default StyledHeader;
