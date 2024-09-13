import React from "react";
import "./AttestationFlags.css";
import { Link } from "react-router-dom";
const AttestationFlagsCard = (props) => {
  return (
    <div className="attestationFlagCardContainer">
      <img
        className="flagCard"
        src={props.img}
        alt=""
      />
      <div className="attestationFlagCardContent">
        <div className="attestationFlagCardTxt">
          <h3>{props.head}</h3>
          <p>{props.para}</p>
        </div>
        <button>
          <Link className="flagLink" to={props.link}>Know More</Link>
        </button>
      </div>
    </div>
  );
};

export default AttestationFlagsCard;
