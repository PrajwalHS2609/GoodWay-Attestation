import React from "react";
import "./HomeFlags.css";
import { Link } from "react-router-dom";
const HomeFlagCard = (props) => {
  return (
    <div className="homeFlagCardContainer">
      <img
        src={props.flag}
        alt={props.alt}
      />
      <div className="homeFlagCardCover"></div>
      <div className="homeFlagCardName"><h3><Link to={props.link}>{props.name}</Link></h3></div>
    </div>
  );
};

export default HomeFlagCard;
