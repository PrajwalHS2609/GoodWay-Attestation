import React from "react";
import ContactUsHead from "./ContactUsHead";
import ContactUsMain from "./ContactUsMain";
import "./ContactUs.css";
import Map from "../Map/Map";
import { Helmet } from "react-helmet";
const ContactUs = () => {
  return (
    <div className="contactContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Contact Us for Embassy Attestation & Apostille Services in Karnataka
        </title>
        <meta
          name="description"
          content="Contact Us for Embassy Attestation & Apostille Services in Karnataka. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/contact-us"
        />
      </Helmet>
      <ContactUsHead />
      <ContactUsMain />
      <Map />
    </div>
  );
};

export default ContactUs;
