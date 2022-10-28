import styled from "styled-components";

const StyledArticles = styled.div`
  padding: 7rem 8rem 0rem 8rem;
  margin-bottom: 7rem;
  h2 {
    font-weight: 300;
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .articles {
    display: flex;
    justify-content: space-between;
  }

  .article {
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    width: 24%;
  }

  .article:not(:last-child) {
    margin-right: 2rem;
  }

  .article > img {
    width: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    height: 14rem;
  }

  .article > .author {
    font-size: 0.75rem;
    color: hsl(233, 8%, 62%);
    margin: 1rem 0rem;
  }

  .article > .author,
  .article > .title,
  .article > .desc {
    margin-left: 1rem;
  }

  .article > .title {
    font-weight: 400;
    margin-bottom: 1rem;
    cursor: pointer;
    &:hover {
      color: hsl(192, 70%, 51%);
    }
  }

  .article > .desc {
    color: hsl(233, 8%, 62%);
    margin-bottom: 1rem;
    margin-right: 1rem;
    font-size: 0.9rem;
  }

  @media screen and (max-width: 1000px) {
    padding: 0;
    h2 {
      text-align: center;
    }
    .articles {
      padding: 0rem 2rem;
      flex-direction: column;
    }
    .article {
      width: 100%;
      margin-right: 0;
      &:not(:last-child) {
        margin-bottom: 2rem;
      }
    }

    .article > .desc {
      margin-bottom: 3rem;
    }
  }
`;

export default StyledArticles;
