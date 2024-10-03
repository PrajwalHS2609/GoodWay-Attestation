import React from "react";
import "./CountriesCarousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import omanFlag from "./../../../vid_img/flags/OmanFlag.jpg";
import italyFlag from "./../../../vid_img/flags/ItalyFlag.jpg";
import germanyFlag from "./../../../vid_img/flags/GermanyFlag.jpg";
import australiaFlag from "./../../../vid_img/flags/AustraliaFlag.jpg";
import austriaFlag from "./../../../vid_img/flags/AustriaFlag.jpg";
import franceFlag from "./../../../vid_img/flags/FranceFlag.jpg";
import lithuaniaFlag from "./../../../vid_img/flags/LithuaniaFlag.jpg";
import mexicoFlag from "./../../../vid_img/flags/MexicoFlag.jpg";
import netherlandFlag from "./../../../vid_img/flags/NetherlandFlag.jpg";
import ukFlag from "./../../../vid_img/flags/UkFlag.jpg";
import usaFlag from "./../../../vid_img/flags/UsaFlag.jpg";
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
                <img src={omanFlag} alt="omanFlag" loading="lazy" />
              </div>
              <h4>OMAN</h4>
            </div>
          </div>
          <div>
            <div className="apostilleCountriesWrapper">
              <div className="item">
                <img src={italyFlag} alt="italyFlag" loading="lazy" />
              </div>
              <h4>ITALY</h4>
            </div>
          </div>
          <div>
            <div className="apostilleCountriesWrapper">
              <div className="item">
                <img src={germanyFlag} alt="germanyFlag" loading="lazy" />
              </div>
              <h4>GERMANY</h4>
            </div>
          </div>
          <div>
            <div className="apostilleCountriesWrapper">
              <div className="item">
                <img src={australiaFlag} alt="australiaFlag" loading="lazy" />
              </div>
              <h4>AUSTRALIA</h4>
            </div>
          </div>
          <div>
            <div className="apostilleCountriesWrapper">
              <div className="item">
                <img src={austriaFlag} alt="austriaFlag" loading="lazy" />
              </div>
              <h4>AUSTRIA</h4>
            </div>
          </div>
          <div>
            <div className="apostilleCountriesWrapper">
              <div className="item">
                <img src={lithuaniaFlag} alt="lithuaniaFlag" loading="lazy" />
              </div>
              <h4>LITHUANIA</h4>
            </div>
          </div>
          <div>
            <div className="apostilleCountriesWrapper">
              <div className="item">
                <img src={mexicoFlag} alt="mexicoFlag" loading="lazy" />
              </div>
              <h4>MEXICO</h4>
            </div>
          </div>
          <div>
            <div className="apostilleCountriesWrapper">
              <div className="item">
                <img src={netherlandFlag} alt="netherlandFlag" loading="lazy" />
              </div>
              <h4>NETHERLAND</h4>
            </div>
          </div>
          <div>
            <div className="apostilleCountriesWrapper">
              <div className="item">
                <img src={franceFlag} alt="franceFlag" loading="lazy" />
              </div>
              <h4>FRANCE</h4>
            </div>
          </div>
          <div>
            <div className="apostilleCountriesWrapper">
              <div className="item">
                <img src={ukFlag} alt="ukFlag" loading="lazy" />
              </div>
              <h4>UK</h4>
            </div>
          </div>
          <div>
            <div className="apostilleCountriesWrapper">
              <div className="item">
                <img src={usaFlag} alt="usaFlag" loading="lazy" />
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
