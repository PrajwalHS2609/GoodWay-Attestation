import React from "react";
import "./Benefits.css";
import BenefitsCard from "./BenefitsCard";
import benefit from "./../../vid&img/Attributes Banner/benefits.png"
import govtAp from "./../../vid&img/Attributes/Government Approved.png";
import efficiency from "./../../vid&img/Attributes/Efficiency.png";
import expertise from "./../../vid&img/Attributes/Expertise.png";
import customer from "./../../vid&img/Attributes/24x7 Customer Support.png";
import intReach from "./../../vid&img/Attributes/International Reach.png";
import Transparency from "./../../vid&img/Attributes/Transparency.png";
import secure from "./../../vid&img/Attributes/Secure Handling.png";
import trust from "./../../vid&img/Attributes/Trusted by Clients.png";
import price from "./../../vid&img/Attributes/Competitive Pricing.png";
import online from "./../../vid&img/Attributes/Online Tracking.png";
import legal from "./../../vid&img/Attributes/Legal Compliance.png";
import time from "./../../vid&img/Attributes/Timely Delivery.png";
const BenefitsMain = () => {
  return (
    <div className="benefitsMainContainer">
      <div className="benefitsMainContentImg">
        <img src={benefit} alt="" />
      </div>
      <div className="benefitsMainContent1">
        <div className="benefitsMainInnerContent">
          <BenefitsCard txt="Government Approved" img={govtAp} />
          <BenefitsCard txt="Efficiency" img={efficiency} />
          <BenefitsCard txt="Expertise" img={expertise} />
          <BenefitsCard txt="24x7 Customer Support" img={customer} />
          <BenefitsCard txt="International Reach" img={intReach} />
          <BenefitsCard txt="Transparency" img={Transparency} />
          <BenefitsCard txt="Secure Handling" img={secure} />
          <BenefitsCard txt="Trusted by Clients" img={trust} />
          <BenefitsCard txt="Competitive Pricing" img={price} />
          <BenefitsCard txt="Online Tracking" img={online} />
          <BenefitsCard txt="Legal Compliance" img={legal} />
          <BenefitsCard txt="Free Home Pickup and  Timely Delivery" img={time} />
        </div>
      </div>
    </div>
  );
};

export default BenefitsMain;
