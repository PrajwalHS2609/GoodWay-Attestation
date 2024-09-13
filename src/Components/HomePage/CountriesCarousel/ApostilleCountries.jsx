import React from "react";
import "./CountriesCarousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import omanFlag from "./../../../vid&img/flags/OmanFlag.jpg";
import italyFlag from "./../../../vid&img/flags/ItalyFlag.jpg";
import germanyFlag from "./../../../vid&img/flags/GermanyFlag.jpg";
import australiaFlag from "./../../../vid&img/flags/AustraliaFlag.jpg";
import austriaFlag from "./../../../vid&img/flags/AustriaFlag.jpg";
import franceFlag from "./../../../vid&img/flags/FranceFlag.jpg";
import lithuaniaFlag from "./../../../vid&img/flags/LithuaniaFlag.jpg";
import mexicoFlag from "./../../../vid&img/flags/MexicoFlag.jpg";
import netherlandFlag from "./../../../vid&img/flags/NetherlandFlag.jpg";
import ukFlag from "./../../../vid&img/flags/UkFlag.jpg";
import usaFlag from "./../../../vid&img/flags/UsaFlag.jpg";
const ApostilleCountries = () => {
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
    <div className="apostilleCountries">
      <h3>Apostille Countries</h3>
      <div className="apostilleCountriesContent">
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
            <div className="apostilleCountriesWrapper">
              <div className="item">
                <img src={omanFlag} alt="" loading="lazy" />
              </div>
              <h4>OMAN</h4>
            </div>
          </div>
          <div>
            <div className="apostilleCountriesWrapper">
              <div className="item">
                <img src={italyFlag} alt="" loading="lazy" />
              </div>
              <h4>ITALY</h4>
            </div>
          </div>
          <div>
            <div className="apostilleCountriesWrapper">
              <div className="item">
                <img src={germanyFlag} alt="" loading="lazy" />
              </div>
              <h4>GERMANY</h4>
            </div>
          </div>
          <div>
            <div className="apostilleCountriesWrapper">
              <div className="item">
                <img src={australiaFlag} alt="" loading="lazy" />
              </div>
              <h4>AUSTRALIA</h4>
            </div>
          </div>
          <div>
            <div className="apostilleCountriesWrapper">
              <div className="item">
                <img src={austriaFlag} alt="" loading="lazy" />
              </div>
              <h4>AUSTRIA</h4>
            </div>
          </div>
          <div>
            <div className="apostilleCountriesWrapper">
              <div className="item">
                <img src={lithuaniaFlag} alt="" loading="lazy" />
              </div>
              <h4>LITHUANIA</h4>
            </div>
          </div>
          <div>
            <div className="apostilleCountriesWrapper">
              <div className="item">
                <img src={mexicoFlag} alt="" loading="lazy" />
              </div>
              <h4>MEXICO</h4>
            </div>
          </div>
          <div>
            <div className="apostilleCountriesWrapper">
              <div className="item">
                <img src={netherlandFlag} alt="" loading="lazy" />
              </div>
              <h4>NETHERLAND</h4>
            </div>
          </div>
          <div>
            <div className="apostilleCountriesWrapper">
              <div className="item">
                <img src={franceFlag} alt="" loading="lazy" />
              </div>
              <h4>FRANCE</h4>
            </div>
          </div>
          <div>
            <div className="apostilleCountriesWrapper">
              <div className="item">
                <img src={ukFlag} alt="" loading="lazy" />
              </div>
              <h4>UK</h4>
            </div>
          </div>
          <div>
            <div className="apostilleCountriesWrapper">
              <div className="item">
                <img src={usaFlag} alt="" loading="lazy" />
              </div>
              <h4>USA</h4>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ApostilleCountries;
