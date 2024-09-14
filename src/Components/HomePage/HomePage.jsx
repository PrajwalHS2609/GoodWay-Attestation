import React from "react";
import Heading from "./Heading/Heading";
import OurServices from "./OurServices/OurServices";
import HomeMarquee from "../Marquee/HomeMarquee";
import HomeFlags from "./HomeFlags/HomeFlags";
import Benefits from "../Benefits/Benefits";
import WhyBlock from "../WhyBlock/WhyBlock";
import Review from "../Review/Review";
import AboutUs from "./AboutUs/AboutUs";
import HomeLink from "./HomeLink.jsx/HomeLink";
import SeoContent from "./SeoContent/SeoContent";
import Faq from "./Faq/Faq";
import Map from "../Map/Map";
import CountriesCarousel from "./CountriesCarousel/CountriesCarousel";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Attestation & Apostille Services in Banglore, Karnataka
          </title>
        <meta
          name="description"
          content="Attestation & Apostille Services in Banglore, Karnataka. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/"
        />
      </Helmet>
      <Heading />
      <WhyBlock />
      <HomeFlags />
      <HomeMarquee />
      <OurServices />
      <AboutUs />
      <HomeLink />
      <Benefits />
      <Review />
      <SeoContent />
      <CountriesCarousel />
      <Faq />
      <Map />
    </div>
  );
};

export default HomePage;
