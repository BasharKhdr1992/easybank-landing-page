import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 2rem 4rem;
  background-color: hsl(233, 26%, 24%);
  display: flex;
  height: 7rem;

  .left,
  .right,
  .col {
    width: 50%;
    display: flex;
  }

  .right,
  .col {
    flex-direction: column;
  }

  .col {
    width: 30%;
    justify-content: space-between;
  }

  .left {
    justify-content: space-between;
  }

  .icon-footer {
    cursor: pointer;
  }

  .icon-footer:hover > path {
    fill: hsl(136, 65%, 51%);
  }

  .right {
    justify-content: space-between;
    margin: 0.5rem 0rem;
    align-items: flex-end;
  }

  .right > p {
    color: hsl(233, 8%, 62%);
  }

  .icons {
    display: flex;
    justify-content: space-between;
  }

  .icon {
    cursor: pointer;
    &:hover {
      fill: hsl(136, 65%, 51%);
    }
  }

  .links {
    align-items: flex-end;
    margin: 0.5rem 0rem;
  }

  .btn-link {
    border: none;
    background: none;
    color: white;
    width: 50%;
    text-align: start;
    cursor: pointer;
    &:hover {
      color: hsl(136, 65%, 51%);
    }
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    height: auto;
    .col {
      width: 90%;
      align-items: center;
      margin: auto;
    }
    .left,
    .right {
      width: 90%;
      margin: auto;
      flex-direction: column;
      align-items: center;
    }

    .icons {
      margin: 2rem 0rem;
    }

    .icon-footer:not(:last-child) {
      margin-right: 0.75rem;
    }

    .btn-link {
      text-align: center;
      margin-bottom: 1rem;
    }

    .links {
      align-items: center;
    }

    .right {
      margin-top: 2rem;
    }

    .right > p {
      margin-top: 1rem;
    }
  }
`;

export default StyledFooter;
