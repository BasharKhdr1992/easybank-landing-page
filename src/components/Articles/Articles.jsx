import React from "react";
import StyledArticles from "./StyledArticles";
import currency from "../../images/image-currency.jpg";
import confetti from "../../images/image-confetti.jpg";
import plane from "../../images/image-plane.jpg";
import restaurant from "../../images/image-restaurant.jpg";

const Articles = () => {
  return (
    <StyledArticles>
      <h2>Latest Articles</h2>
      <div className="articles">
        <div className="article">
          <img src={currency} alt="currency" />
          <p className="author">By Claire Robinson</p>
          <h3 className="title">Receive money in any currency with no fees</h3>
          <p className="desc">
            The world is getting smaller and we’re becoming more mobile. So why
            should you be forced to only receive money in a single …
          </p>
        </div>
        <div className="article">
          <img src={restaurant} alt="currency" />
          <p className="author">By Wilson Hutton</p>
          <h3 className="title">Treat yourself without worrying about money</h3>
          <p className="desc">
            Our simple budgeting feature allows you to separate out your
            spending and set realistic limits each month. That means you …
          </p>
        </div>
        <div className="article">
          <img src={plane} alt="currency" />
          <p className="author">By Wilson Hutton</p>
          <h3 className="title">Take your Easybank card wherever you go</h3>
          <p className="desc">
            We want you to enjoy your travels. This is why we don’t charge any
            fees on purchases while you’re abroad. We’ll even show you …
          </p>
        </div>
        <div className="article">
          <img src={confetti} alt="currency" />
          <p className="author">By Claire Robinson</p>
          <h3 className="title">Our invite-only Beta accounts are now live!</h3>
          <p className="desc">
            After a lot of hard work by the whole team, we’re excited to launch
            our closed beta. It’s easy to request an invite through the site ...
          </p>
        </div>
      </div>
    </StyledArticles>
  );
};

export default Articles;
