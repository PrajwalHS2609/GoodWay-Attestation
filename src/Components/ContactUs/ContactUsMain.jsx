import React from "react";
import "./ContactUs.css";
import ContactUsCard from "./ContactUsCard";
import indiaFlag from "./../../vid&img/Countries_Flag/India.jpg";
import omanFlag from "./../../vid&img/Countries_Flag/Oman.png";
import uaeFlag from "./../../vid&img/Countries_Flag/UAE.png";

import ContactUsForm from "./ContactUsForm/ContactUsForm";

const ContactUsMain = () => {
  return (
    <div className="contactMainContainer">
      <div className="contactMainContent">
        <div className="contactUsCover">
          <ContactUsCard
            img={indiaFlag}
            alt="india"
            address="134, 1st Floor, Temple Street, Malleshwaram, Bengaluru."
            emailLink="mailto:info@goodwayattestaion.com"
            email="info@goodwayattestaion.com"
            phoneLink="tel:9148889666"
            phoneNo="9148889666"
          />
          <ContactUsCard
            img={indiaFlag}
            alt="india"
            address="#10207 near marimallappa school, opposite to mysuru mart, 2nd phase , vijaynagar 4th stage Mysore-570017."
            emailLink="mailto:info@goodwayattestaion.com"
            email="info@goodwayattestaion.com"
            phoneLink="tel:9844003888"
            phoneNo="9844003888"
          />
          <ContactUsCard
            img={indiaFlag}
            alt="india"
            address="SHOP NO.1 GROUND FLOOR, VIJAYDEEP BUILDING COLABA . MUMBAI PIN. 400005 "
            emailLink="mailto:info@goodwayattestaion.com"
            email="info@goodwayattestaion.com"
            phoneLink="tel:9480777233"
            phoneNo="9480777233"
          />
          <ContactUsCard
            img={omanFlag}
            alt="oman"
            address="No 60, 6th Floor building No: 108 Toto Building, Al Ghubra, Muscat, Sultanate of Oman"
            emailLink="mailto:omangoodway@gmail.com"
            email="omangoodway@gmail.com"
            phoneLink="tel:+91 9148889444"
            phoneNo="9148889444"
          />
          <ContactUsCard
            img={uaeFlag}
            alt="uae"
            address=" Anfar Al Falaj Building, Opp to Rak bank, Rolla,Sharjah United Arab Emirates"
            emailLink="mailto:uaegoodway@gmail.com"
            email="uaegoodway@gmail.com"
            phoneLink="tel:9148889666"
            phoneNo="9148889666"
          />
        </div>
        <img
          src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="contactUs"
        />
      </div>
      <div className="contactMainContent">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactUsMain;
