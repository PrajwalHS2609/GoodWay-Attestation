import React from "react";
import ContactUsHead from "./ContactUsHead";
import ContactUsMain from "./ContactUsMain";
import "./ContactUs.css";
import Map from "../Map/Map";
const ContactUs = () => {
  return (
    <div className="contactContainer">
      <ContactUsHead />
      <ContactUsMain />
      <Map />
    </div>
  );
};

export default ContactUs;
