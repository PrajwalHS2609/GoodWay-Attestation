import React from "react";
import "./OurServices.css";
import { Link } from "react-router-dom";

const OurServicesCard = (props) => {
  return (
    <div className="ourServicesCardContainer">
      <Link to={props.link}>
        <div className="ourServicesCardCover">
          <div className="ourServicesCardPara">
            <p>{props.para}</p>
          </div>
        </div>
        <div className="ourServicesCardImg">
          <img src={props.img} alt="" />
        </div>
        <div className="ourServicesCardHead">
          <h4>{props.head}</h4>
          <h3>{props.head}</h3>

        </div>
      </Link>
    </div>
  );
};

export default OurServicesCard;
