import styled from "styled-components";

const StyledFeatures = styled.section`
  padding-left: 4rem;
  padding-top: 7rem;
  h2 {
    color: hsl(233, 26%, 24%);
    font-weight: 300;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    color: hsl(233, 8%, 62%);
    width: 50%;
    margin-bottom: 5rem;
  }

  .features {
    display: flex;
  }

  .feature {
    display: flex;
    width: 21%;
    justify-content: space-between;
    flex-direction: column;
  }

  .feature:not(:last-child) {
    margin-right: 1.5rem;
  }

  .feature > img {
    width: 4rem;
    height: 4rem;
  }

  .feature > h3 {
    margin: 2rem 0rem;
    font-weight: 300;
  }

  .feature > p {
    width: 100%;
  }

  @media screen and (max-width: 1000px) {
    padding-left: 0;
    h2,
    p {
      text-align: center;
    }

    & > p {
      width: 80%;
      margin: auto;
      line-height: 2rem;
    }

    .features {
      flex-direction: column;
      padding: 2rem;
    }

    .feature {
      align-items: center;
      width: 100%;
    }

    .feature > p {
      line-height: 2rem;
    }

    .feature > img {
      width: 6rem;
      height: 6rem;
    }
  }
`;

export default StyledFeatures;
