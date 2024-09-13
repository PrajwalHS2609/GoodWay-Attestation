import React from "react";
import "./Marquee.css";
import { Link } from "react-router-dom";
const HomeMarqueeCard = (props) => {
  return (
    <div className="marqueeCard">
      <Link to={props.link}>
        <img src={props.img} alt={props.alt} loading="lazy"/>

        <div className="marqueeCover">
          <h3>{props.name}</h3>
        </div>
      </Link>
    </div>
  );
};

export default HomeMarqueeCard;
