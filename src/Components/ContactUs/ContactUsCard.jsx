import React from "react";
import "./ContactUs.css";
const ContactUsCard = (props) => {
  return (
    <div className="contactUsCardContainer">
      <div className="contactUsCardImg">
        <img src={props.img} alt={props.alt} loading="lazy" />
      </div>
      <div className="contactWrapper">
        <div className="contactUsCardAdd" id="contactUsCard">
          <p>
            <span>{props.addName} Address </span>
            {props.address}
          </p>
        </div>
        <div className="contactUsCardEmail" id="contactUsCard">
          <p>
            <span>Email: </span>
            <a href={props.emailLink}>{props.email}</a>
          </p>
        </div>
        <div className="contactUsCardPhone" id="contactUsCard">
          <p>
            <span>Mobile: </span>
            <a href={props.phoneLink}>+91 {props.phoneNo}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsCard;
