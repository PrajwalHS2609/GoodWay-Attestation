import React from "react";
import "./UaeAttestationCard.css";
import birth from "./../../../../vid&img/UAE_Feature/BirthApproved.png";
import education from "./../../../../vid&img/UAE_Feature/Degree.png";
import marriage from "./../../../../vid&img/UAE_Feature/Marriage.png";
import commercial from "./../../../../vid&img/UAE_Feature/Commercial_Docment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import price from "./../../../../vid&img/About Us - Features/24x7 Customer Support.png";
import efficiency from "./../../../../vid&img/About Us - Features/Efficiency.png";
import expertise from "./../../../../vid&img/About Us - Features/Expertise.png";
import govt from "./../../../../vid&img/About Us - Features/Government Approved.png";
import { Link } from "react-router-dom";
const UaeAttestationCard = (props) => {
  return (
    <div className="uaeAttestationCardContainer">
      <div className="uaeAttCardImgContent">
        <img src={props.flag} alt={props.altFlag} loading="lazy"/>
        <div className="uaeAttCardContent">
          <div className="uaeAttGovtCardContent">
            <img src={props.embassy} alt={props.altEmbassy} loading="lazy"/>
            <h3>Government Approved</h3>
          </div>
          <div className="uaeAttDocCardContent">
            <h3>Documents</h3>
            <div className="uaeAttDocCardImgContent">
              <div className="uaeAttDocCardImg">
                <img src={birth} alt="birth" />
                <p>Birth Certificate</p>
              </div>
              <div className="uaeAttDocCardImg">
                <img src={marriage} alt="marriage" />
                <p>Marriage Certificate</p>
              </div>
              <div className="uaeAttDocCardImg">
                <img src={education} alt="degree" />
                <p>Degree Certificate</p>
              </div>
              <div className="uaeAttDocCardImg">
                <img src={commercial} alt="commercial" />
                <p>Commercial Certificate</p>
              </div>
            </div>
          </div>
          <div className="uaeAttCardContentWrapper">
            <div className="uaeAttDaysCardContent">
              <h3>Duration</h3>
              <p>5 Days Only</p>
            </div>
            <div className="uaeAttPriceCardContent">
              <h3>Pricing</h3>
              <p>Competitive Price</p>
            </div>
          </div>

          <div className="uaeAttSuppCardContent">
            <h3>Support </h3>
            <div className="uaeAttSuppCardItem">
              <div className="uaeAttSuppCard">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="uaeAttIcon1"
                ></FontAwesomeIcon>
                <a href="tel:9148889666">+91 9148889666</a> /<br />
                <a href="tel:9148889444">+91 9148889444</a>
              </div>
              <div className="uaeAttSuppCard">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="uaeAttIcon2"
                ></FontAwesomeIcon>
                <a href="https://api.whatsapp.com/send?phone=919148889666">
                  +91 9148889666
                </a>{" "}
                / <br />
                <a href="https://api.whatsapp.com/send?phone=919148889444">
                  +91 9148889444
                </a>
              </div>
            </div>
          </div>
          <div className="uaeAttTrackCardContent">
            <Link to={"/track-status"}>
              <button>Track Status</button>
            </Link>
          </div>
          <div className="cardIconsContainer">
            <div className="cardIconsImgContainer">
              <img src={price} alt="24x7 Customer Support" />
              <p>Competitive Price</p>
            </div>
            <div className="cardIconsImgContainer">
              <img src={efficiency} alt="efficiency" />
              <p>ISO Certified</p>
            </div>
            <div className="cardIconsImgContainer">
              <img src={expertise} alt="expertise" />
              <p>25000+ Customers</p>
            </div>
            <div className="cardIconsImgContainer">
              <img src={govt} alt="Government Approved" />
              <p>16 Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UaeAttestationCard;
