import React from "react";
import StyledFeatures from "./StyledFeatures";
import online from "../../images/icon-online.svg";
import onboarding from "../../images/icon-onboarding.svg";
import api from "../../images/icon-api.svg";
import budgeting from "../../images/icon-budgeting.svg";

const Features = () => {
  return (
    <StyledFeatures>
      <h2>Why choose Easybank?</h2>
      <p>
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>
      <div className="features">
        <div className="feature">
          <img src={online} alt="online banking" />
          <h3>Online Banking</h3>
          <p>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div className="feature">
          <img src={budgeting} alt="online banking" />
          <h3>Simple Budgeting</h3>
          <p>
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
        </div>
        <div className="feature">
          <img src={onboarding} alt="online banking" />
          <h3>Fast Onboarding</h3>
          <p>
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div className="feature">
          <img src={api} alt="online banking" />
          <h3>Open API</h3>
          <p>
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </StyledFeatures>
  );
};

export default Features;
