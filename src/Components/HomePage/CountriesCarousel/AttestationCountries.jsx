import React from "react";
import "./CountriesCarousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import uaeFlag from "./../../../vid&img/flags/UaeFlag.png";
import qatarFlag from "./../../../vid&img/flags/QatarFlag.jpg";
import kuwaitFlag from "./../../../vid&img/flags/KuwaitFlag.jpg";
import saudiFlag from "./../../../vid&img/flags/SaudiFlag.jpg";
import bahrainFlag from "./../../../vid&img/flags/BahrainFlag.jpg";
import chinaFlag from "./../../../vid&img/flags/ChinaFlag.jpg";
import vietnamFlag from "./../../../vid&img/flags/VietnamFlag.jpg";
import taiwanFlag from "./../../../vid&img/flags/TaiwanFlag.jpg";
import egyptFlag from "./../../../vid&img/flags/EgyptFlag.jpg";
import philippinesFlag from "./../../../vid&img/flags/PhilippinesFlag.png";
import malaysiaFlag from "./../../../vid&img/flags/MalaysiaFlag.png";
import nigeriaFlag from "./../../../vid&img/flags/NigeriaFlag.jpg";
const AttestationCountries = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 10,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="attestationCountries">
      <h3>Attestation Countries</h3>
      <div className="attestationCountriesContent">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={false}
          showDots={false}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="1s ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div>
            <div className="attestationCountriesWrapper">
              <div className="item">
                <img src={uaeFlag} alt="" loading="lazy" />
              </div>
              <h4>UAE</h4>
            </div>
          </div>
          <div>
            <div className="attestationCountriesWrapper">
              <div className="item">
                <img src={qatarFlag} alt="" loading="lazy" />
              </div>
              <h4>QATAR</h4>
            </div>
          </div>
          <div>
            <div className="attestationCountriesWrapper">
              <div className="item">
                <img src={kuwaitFlag} alt="" loading="lazy" />
              </div>
              <h4>KUWAIT</h4>
            </div>
          </div>
          <div>
            <div className="attestationCountriesWrapper">
              <div className="item">
                <img src={saudiFlag} alt="" loading="lazy" />
              </div>
              <h4>SAUDI</h4>
            </div>
          </div>
          <div>
            <div className="attestationCountriesWrapper">
              <div className="item">
                <img src={bahrainFlag} alt="" loading="lazy" />
              </div>
              <h4>BAHRAIN</h4>
            </div>
          </div>
          <div>
            <div className="attestationCountriesWrapper">
              <div className="item">
                <img src={chinaFlag} alt="" loading="lazy" />
              </div>
              <h4>CHINA</h4>
            </div>
          </div>
          <div>
            <div className="attestationCountriesWrapper">
              <div className="item">
                <img src={vietnamFlag} alt="" loading="lazy" />
              </div>
              <h4>VIETNAM</h4>
            </div>
          </div>
          <div>
            <div className="attestationCountriesWrapper">
              <div className="item">
                <img src={taiwanFlag} alt="" loading="lazy" />
              </div>
              <h4>TAIWAN</h4>
            </div>
          </div>
          <div>
            <div className="attestationCountriesWrapper">
              <div className="item">
                <img src={egyptFlag} alt="" loading="lazy" />
              </div>
              <h4>EGYPT</h4>
            </div>
          </div>
          <div>
            <div className="attestationCountriesWrapper">
              <div className="item">
                <img src={philippinesFlag} alt="" loading="lazy" />
              </div>
              <h4>PHILIPPINES</h4>
            </div>
          </div>
          <div>
            <div className="attestationCountriesWrapper">
              <div className="item">
                <img src={malaysiaFlag} alt="" loading="lazy" />
              </div>
              <h4>MALAYSIA</h4>
            </div>
          </div>
          <div>
            <div className="attestationCountriesWrapper">
              <div className="item">
                <img src={nigeriaFlag} alt="" loading="lazy" />
              </div>
              <h4>NIGERIA</h4>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default AttestationCountries;
