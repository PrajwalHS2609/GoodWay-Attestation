import React from "react";
import "./CountriesCarousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import uaeFlag from "./../../../vid_img/flags/UaeFlag.png";
import qatarFlag from "./../../../vid_img/flags/QatarFlag.jpg";
import kuwaitFlag from "./../../../vid_img/flags/KuwaitFlag.jpg";
import saudiFlag from "./../../../vid_img/flags/SaudiFlag.jpg";
import bahrainFlag from "./../../../vid_img/flags/BahrainFlag.jpg";
import chinaFlag from "./../../../vid_img/flags/ChinaFlag.jpg";
import vietnamFlag from "./../../../vid_img/flags/VietnamFlag.jpg";
import taiwanFlag from "./../../../vid_img/flags/TaiwanFlag.jpg";
import egyptFlag from "./../../../vid_img/flags/EgyptFlag.jpg";
import philippinesFlag from "./../../../vid_img/flags/PhilippinesFlag.png";
import malaysiaFlag from "./../../../vid_img/flags/MalaysiaFlag.png";
import nigeriaFlag from "./../../../vid_img/flags/NigeriaFlag.jpg";
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
                <img src={uaeFlag} alt="uaeFlag" loading="lazy" />
              </div>
              <h4>UAE</h4>
            </div>
          </div>
          <div>
            <div className="attestationCountriesWrapper">
              <div className="item">
                <img src={qatarFlag} alt="qatarFlag" loading="lazy" />
              </div>
              <h4>QATAR</h4>
            </div>
          </div>
          <div>
            <div className="attestationCountriesWrapper">
              <div className="item">
                <img src={kuwaitFlag} alt="kuwaitFlag" loading="lazy" />
              </div>
              <h4>KUWAIT</h4>
            </div>
          </div>
          <div>
            <div className="attestationCountriesWrapper">
              <div className="item">
                <img src={saudiFlag} alt="saudiFlag" loading="lazy" />
              </div>
              <h4>SAUDI</h4>
            </div>
          </div>
          <div>
            <div className="attestationCountriesWrapper">
              <div className="item">
                <img src={bahrainFlag} alt="bahrainFlag" loading="lazy" />
              </div>
              <h4>BAHRAIN</h4>
            </div>
          </div>
          <div>
            <div className="attestationCountriesWrapper">
              <div className="item">
                <img src={chinaFlag} alt="chinaFlag" loading="lazy" />
              </div>
              <h4>CHINA</h4>
            </div>
          </div>
          <div>
            <div className="attestationCountriesWrapper">
              <div className="item">
                <img src={vietnamFlag} alt="vietnamFlag" loading="lazy" />
              </div>
              <h4>VIETNAM</h4>
            </div>
          </div>
          <div>
            <div className="attestationCountriesWrapper">
              <div className="item">
                <img src={taiwanFlag} alt="taiwanFlag" loading="lazy" />
              </div>
              <h4>TAIWAN</h4>
            </div>
          </div>
          <div>
            <div className="attestationCountriesWrapper">
              <div className="item">
                <img src={egyptFlag} alt="egyptFlag" loading="lazy" />
              </div>
              <h4>EGYPT</h4>
            </div>
          </div>
          <div>
            <div className="attestationCountriesWrapper">
              <div className="item">
                <img src={philippinesFlag} alt="philippinesFlag" loading="lazy" />
              </div>
              <h4>PHILIPPINES</h4>
            </div>
          </div>
          <div>
            <div className="attestationCountriesWrapper">
              <div className="item">
                <img src={malaysiaFlag} alt="malaysiaFlag" loading="lazy" />
              </div>
              <h4>MALAYSIA</h4>
            </div>
          </div>
          <div>
            <div className="attestationCountriesWrapper">
              <div className="item">
                <img src={nigeriaFlag} alt="nigeriaFlag" loading="lazy" />
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
