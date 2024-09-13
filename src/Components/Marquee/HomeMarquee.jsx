import React from "react";
import "./Marquee.css";
import HomeMarqueeCard from "./HomeMarqueeCard";
import Marquee from "react-fast-marquee";
import australiaFlag from "./../../vid&img/Countries_Flag/australia.png";
import austriaFlag from "./../../vid&img/Countries_Flag/austria.png";
import bahrainFlag from "./../../vid&img/Countries_Flag/Baharain.png";
import egyptFlag from "./../../vid&img/Countries_Flag/Egypt.png";
import franceFlag from "./../../vid&img/Countries_Flag/France.png";
import germanyFlag from "./../../vid&img/Countries_Flag/Germany.png";
import italyFlag from "./../../vid&img/Countries_Flag/Italy.png";
import kuwaitFlag from "./../../vid&img/Countries_Flag/Kuwait.png";
import malaysiaFlag from "./../../vid&img/Countries_Flag/Malaysia.png";
import mexicoFlag from "./../../vid&img/Countries_Flag/Mexico.png";
import netherlandFlag from "./../../vid&img/Countries_Flag/Netherlands.png";
import nigeriaFlag from "./../../vid&img/Countries_Flag/nigeria.png";
import omanFlag from "./../../vid&img/Countries_Flag/Oman.png";
import philippinesFlag from "./../../vid&img/Countries_Flag/philippines.png";
import qatarFlag from "./../../vid&img/Countries_Flag/Qatar.png";
import saudiFlag from "./../../vid&img/Countries_Flag/Saudi Arabia.png";
import taiwanFlag from "./../../vid&img/Countries_Flag/taiwan.png";
// import swedenFlag from "./../../vid&img/Countries_Flag/Sweden.png";
import uaeFlag from "./../../vid&img/Countries_Flag/UAE.png";
import ukFlag from "./../../vid&img/Countries_Flag/UK.png";
import usaFlag from "./../../vid&img/Countries_Flag/USA.png";
import vietnamFlag from "./../../vid&img/Countries_Flag/vietnam.png";
import chinaFlag from "./../../vid&img/Countries_Flag/chinaFlag.png";

import HomeMarqueeHead from "./HomeMarqueeHead";

const HomeMarquee = () => {
  return (
    <div className="marqueeContainer">
      <HomeMarqueeHead />
      <Marquee>
        <HomeMarqueeCard
          img={australiaFlag}
          alt={australiaFlag}
          name="Australia"
          link="/australia-apostille-attestation-bangalore"
        />
        <HomeMarqueeCard
          img={austriaFlag}
          alt={austriaFlag}
          name="Austria"
          link="/austria-apostille-attestation-bangalore"
        />
        <HomeMarqueeCard
          img={bahrainFlag}
          alt={bahrainFlag}
          name="Bahrain"
          link="/bahrain-embassy-attestation-bangalore"
        />
        <HomeMarqueeCard
          img={egyptFlag}
          alt={egyptFlag}
          name="Egypt"
          link="/egypt-embassy-attestation-bangalore"
        />
        <HomeMarqueeCard
          img={franceFlag}
          alt={franceFlag}
          name="France"
          link="/france-apostille-attestation-bangalore"
        />
        <HomeMarqueeCard
          img={germanyFlag}
          alt={germanyFlag}
          name="Germany"
          link="/germany-apostille-attestation-bangalore"
        />
        <HomeMarqueeCard
          img={italyFlag}
          alt={italyFlag}
          name="Italy"
          link="/italy-apostille-attestation-bangalore"
        />
        <HomeMarqueeCard
          img={kuwaitFlag}
          alt={kuwaitFlag}
          name="Kuwait"
          link="/kuwait-embassy-attestation-bangalore"
        />
        <HomeMarqueeCard
          img={malaysiaFlag}
          alt={malaysiaFlag}
          name="Malaysia"
          link="/malaysia-embassy-attestation-bangalore"
        />
        <HomeMarqueeCard
          img={mexicoFlag}
          alt={mexicoFlag}
          name="Mexico"
          link="/mexico-apostille-attestation-bangalore"
        />
        <HomeMarqueeCard
          img={netherlandFlag}
          alt={netherlandFlag}
          name="Netherland"
          link="/netherland-apostille-attestation-bangalore"
        />
        <HomeMarqueeCard
          img={nigeriaFlag}
          alt={nigeriaFlag}
          name="Nigeria"
          link="nigeria-embassy-attestation-bangalore"
        />
        <HomeMarqueeCard
          img={omanFlag}
          alt={omanFlag}
          name="Oman"
          link="oman-apostille-attestation-bangalore"
        />
        <HomeMarqueeCard
          img={philippinesFlag}
          alt={philippinesFlag}
          name="Philippines"
          link="/philippines-embassy-attestation-bangalore"
        />
        <HomeMarqueeCard
          img={qatarFlag}
          alt={qatarFlag}
          name="Qatar"
          link="/qatar-embassy-attestation-bangalore"
        />
        <HomeMarqueeCard
          img={saudiFlag}
          alt={saudiFlag}
          name="Saudi Arabia"
          link="/saudi-embassy-attestation-bangalore"
        />
        <HomeMarqueeCard
          img={taiwanFlag}
          alt={taiwanFlag}
          name="Taiwan"
          link="/taiwan-embassy-attestation-bangalore"
        />
        {/* <HomeMarqueeCard
          img={swedenFlag}
          alt={swedenFlag}
          name="Sweden"
          link="/"
        /> */}
        <HomeMarqueeCard
          img={uaeFlag}
          alt={uaeFlag}
          name="UAE"
          link="/uae-embassy-attestation-bangalore"
        />
        <HomeMarqueeCard
          img={ukFlag}
          alt={ukFlag}
          name="United Kingdom"
          link="/uk-apostille-attestation-bangalore"
        />
        <HomeMarqueeCard
          img={usaFlag}
          alt={usaFlag}
          name="USA"
          link="/usa-apostille-attestation-bangalore"
        />
        <HomeMarqueeCard
          img={vietnamFlag}
          alt={vietnamFlag}
          name="Vietnam"
          link="/vietnam-embassy-attestation-bangalore"
        />
        <HomeMarqueeCard
          img={chinaFlag}
          alt={chinaFlag}
          name="China"
          link="/china-embassy-attestation-bangalore"
        />
      </Marquee>
    </div>
  );
};

export default HomeMarquee;
