import React, { useRef, useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAngleDown,
  faBars,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Menu = () => {
  let [drop, setDrop] = useState(false);
  let dropRef1 = useRef();
  let dropRef2 = useRef();
  let dropRef3 = useRef();
  let dropRef4 = useRef();
  let dropRef5 = useRef();
  // let dropRef6 = useRef();
  // let dropRef7 = useRef();

  let showSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    sideBar.style.display = "flex";
    sideBar.style.transform = "translateX(0px)";
  };
  let hideSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    // sideBar.style.display = "none";
    sideBar.style.transform = "translateX(100%)";
  };

  let handleDropDown1 = () => {
    if (!drop) {
      setDrop(true);
      dropRef1.current.style.display = "flex";
      console.log("down");
    } else {
      setDrop(false);
      dropRef1.current.style.display = "none";
      console.log("up");
    }
  };
  let handleDropDown2 = () => {
    if (!drop) {
      setDrop(true);
      dropRef2.current.style.display = "flex";
      console.log("down");
    } else {
      setDrop(false);
      dropRef2.current.style.display = "none";
      console.log("up");
    }
  };
  let handleDropDown3 = () => {
    if (!drop) {
      setDrop(true);
      dropRef3.current.style.display = "flex";
      console.log("down");
    } else {
      setDrop(false);
      dropRef3.current.style.display = "none";
      console.log("up");
    }
  };
  let handleDropDown4 = () => {
    if (!drop) {
      setDrop(true);
      dropRef4.current.style.display = "flex";
      console.log("down");
    } else {
      setDrop(false);
      dropRef4.current.style.display = "none";
      console.log("up");
    }
  };
  let handleDropDown5 = () => {
    if (!drop) {
      setDrop(true);
      dropRef5.current.style.display = "flex";
      console.log("down");
    } else {
      setDrop(false);
      dropRef5.current.style.display = "none";
      console.log("up");
    }
  };
  // let handleDropDown6 = () => {
  //   if (!drop) {
  //     setDrop(true);
  //     dropRef6.current.style.display = "flex";
  //     console.log("down");
  //   } else {
  //     setDrop(false);
  //     dropRef6.current.style.display = "none";
  //     console.log("up");
  //   }
  // };

  // let handleDropDown7 = () => {
  //   if (!drop) {
  //     setDrop(true);
  //     dropRef7.current.style.display = "flex";
  //     console.log("down");
  //   } else {
  //     setDrop(false);
  //     dropRef7.current.style.display = "none";
  //     console.log("up");
  //   }
  // };
  return (
    <>
      <div className="menuContainer">
        <ul>
          <li id="menuHome">
            <Link to={"/"}>
              <FontAwesomeIcon
                icon={faHome}
                className="menuIcon"
              ></FontAwesomeIcon>
            </Link>
          </li>
          <li id="menuList">
            <Link to={"/certificate-attestation-bangalore"}>Attestation</Link>
            <FontAwesomeIcon
              icon={faAngleDown}
              className="menuIcon"
            ></FontAwesomeIcon>
            <div className="menuDrop">
              <li>
                <NavHashLink
                  smooth
                  to={"/certificate-attestation-bangalore/#atteEduContainer"}
                >
                  Education Certificate
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  smooth
                  to={
                    "/certificate-attestation-bangalore/#atteNoneduCertContainer"
                  }
                >
                  Non-Education Certificate
                </NavHashLink>
              </li>
              {/* <li>
                <Link to={"/marriage-certificate-attestation-bangalore"}>
                  Marriage Certificate
                </Link>
              </li>
              <li>
                <Link to={"/commercial-documents-attestation-bangalore"}>
                  Commercial Documents
                </Link>
              </li> */}
            </div>
          </li>
          <li>
            <Link to={"/certificate-apostille-bangalore"}> Apostille</Link>
            <FontAwesomeIcon
              icon={faAngleDown}
              className="menuIcon"
            ></FontAwesomeIcon>
            <div className="menuDrop">
              <li>
                {" "}
                <NavHashLink
                  to={"/certificate-apostille-bangalore/#apoEduContainer"}
                  smooth
                >
                  Education Certificate
                </NavHashLink>
              </li>
              <li>
                {" "}
                <NavHashLink
                  to={"/certificate-apostille-bangalore/#apoNonEduContainer"}
                  smooth
                >
                  Non-Education Certificates
                </NavHashLink>
              </li>
              {/* <li>
                {" "}
                <Link to={"/marriage-certificate-apostille-bangalore"}>
                  Marriage Certificate
                </Link>
              </li> */}
            </div>
          </li>
          <li>
            <Link to={"/state-hrd-home-department-attestation"}>State HRD</Link>
            <FontAwesomeIcon
              icon={faAngleDown}
              className="menuIcon"
            ></FontAwesomeIcon>
            <div className="menuDrop">
              <li>
                <Link to={"/karanataka-hrd-home-department-attestation"}>
                  Karnataka
                </Link>
              </li>
              <li>
                <Link to={"/tamilnadu-hrd-home-department-attestation"}>
                  Tamil Nadu
                </Link>
              </li>
              <li>
                <Link to={"/kerala-hrd-home-department-attestation"}>
                  Kerala
                </Link>
              </li>
              <li>
                <Link to={"/maharashtra-hrd-home-department-attestation"}>
                  Maharashtra
                </Link>
              </li>
              <li>
                <Link to={"/andhrapradesh-hrd-home-department-attestation"}>
                  Andhra Pradesh
                </Link>
              </li>
              <li>
                <Link to={"/telangana-hrd-home-department-attestation"}>
                  Telangana
                </Link>
              </li>
            </div>
          </li>
          <li>
            <Link to={"/mofa-attestation-services"}> MOFA</Link>
            <FontAwesomeIcon
              icon={faAngleDown}
              className="menuIcon"
            ></FontAwesomeIcon>
            <div className="menuDrop">
              <li>
                <NavHashLink
                  smooth
                  to="/mofa-attestation-services/#mofaCertIncorp"
                >
                  Certificate Of Incorporation
                </NavHashLink>
              </li>
              <li>
                {" "}
                <NavHashLink smooth to="/mofa-attestation-services/#memorandum">
                  Memorandum of Association
                </NavHashLink>
              </li>
              {/* <li>
                {" "}
                <NavHashLink smooth to="/mofa-attestation-services/#memorandum">
                  Memorandum of Association Power of Attorney{" "}
                </NavHashLink>
              </li> */}
              {/* <li>
                {" "}
                <NavHashLink smooth to="/mofa-attestation-services/#memorandum">
                  Board Resolution
                </NavHashLink>
              </li> */}
              <li>
                {" "}
                <NavHashLink
                  smooth
                  to="/mofa-attestation-services/#exportInvoice"
                >
                  Export Invoice
                </NavHashLink>
              </li>
              <li>
                {" "}
                <NavHashLink
                  smooth
                  to="/mofa-attestation-services/#packagingList"
                >
                  Packaging list
                </NavHashLink>
              </li>
              <li>
                {" "}
                <NavHashLink
                  smooth
                  to="/mofa-attestation-services/#certOfOrigin"
                >
                  Certificate of Origin
                </NavHashLink>
              </li>
              <li>
                {" "}
                <NavHashLink
                  smooth
                  to="/mofa-attestation-services/#chemAnalysis"
                >
                  Chemical Analysis Report
                </NavHashLink>
              </li>
              <li>
                {" "}
                <NavHashLink
                  smooth
                  to="/mofa-attestation-services/#phyAnalysis"
                >
                  Physical Analysis Report
                </NavHashLink>
              </li>
              <li>
                {" "}
                <NavHashLink smooth to="/mofa-attestation-services/#article">
                  Articles of Association
                </NavHashLink>
              </li>
            </div>
          </li>
          <li>
            <Link to={"/pcc-attestation-bangalore"}>PCC</Link>
            <FontAwesomeIcon
              icon={faAngleDown}
              className="menuIcon"
            ></FontAwesomeIcon>
            <div className="menuDrop">
              <li>
                <Link to="/oman-pcc-attestation-bangalore">Oman PCC</Link>
              </li>
              <li>
                <Link to="/kuwait-pcc-attestation-bangalore">Kuwait PCC</Link>
              </li>
              <li>
                <Link to="/saudi-pcc-attestation-bangalore">Saudi PCC</Link>
              </li>
              <li>
                <Link to="/qatar-pcc-attestation-bangalore">Qatar PCC</Link>
              </li>
              <li>
                <Link to="/uae-pcc-attestation-bangalore">UAE PCC</Link>
              </li>
            </div>
          </li>
          <li>
            <Link to={"/mea-attestation-apostille-services"}>MEA</Link>
            {/* <FontAwesomeIcon
              icon={faAngleDown}
              className="menuIcon"
            ></FontAwesomeIcon>
            <div className="menuDrop">
              <li>MEA Attestation</li>
              <li>MEA Apostille</li>
            </div> */}
          </li>
          <li>
            <Link to={"/wes-attestation-bangalore"}>WES</Link>
          </li>
          <li>
            <Link to={"/translation-attestation-bangalore"}>Translation</Link>
            {/* <FontAwesomeIcon
              icon={faAngleDown}
              className="menuIcon"
            ></FontAwesomeIcon>
            <div className="menuDrop" id="translationDrop">
              <li>Document Translation</li>
              <li>Language Translation</li>
            </div> */}
          </li>
          <li>
            <Link to={"/contact-us"}>Contact Us</Link>
          </li>
        </ul>
      </div>
      <ul onClick={showSideBar} className="mainMenu">
        <FontAwesomeIcon icon={faBars} className="hamIcon"></FontAwesomeIcon>
      </ul>
      <div className="respMenu">
        <div className="respMenuScroll">
          <ul>
            <h2>
              <Link onClick={hideSideBar} to={"/"}>
                Home
              </Link>
            </h2>
            <h2 className="cross">
              <FontAwesomeIcon
                icon={faX}
                onClick={hideSideBar}
                className="respIcon"
              ></FontAwesomeIcon>
            </h2>
          </ul>
          <ul className="serviceDrop">
            <h2>
              <Link
                onClick={hideSideBar}
                to={"/certificate-attestation-bangalore"}
              >
                Attestation
              </Link>
              <FontAwesomeIcon
                onClick={handleDropDown1}
                icon={faAngleDown}
                className="respDropIcon"
              ></FontAwesomeIcon>
            </h2>
            <span className="respMenuSpan" ref={dropRef1}>
              <li>
                <h3>
                  <NavHashLink
                    smooth
                    onClick={hideSideBar}
                    to={"/certificate-attestation-bangalore/#atteEduContainer"}
                  >
                    Education Certificate
                  </NavHashLink>
                </h3>
              </li>
              <li>
                <h3>
                  <NavHashLink
                    smooth
                    onClick={hideSideBar}
                    to={"/certificate-attestation-bangalore/#atteNoneduCertContainer"}
                  >
                    Non-Education Certificates
                  </NavHashLink>
                </h3>
              </li>
              {/* <li>
                <h3>
                  <Link
                    onClick={hideSideBar}
                    to={"/marriage-certificate-attestation-bangalore"}
                  >
                    Marriage Certificate
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link
                    onClick={hideSideBar}
                    to={"/commercial-documents-attestation-bangalore"}
                  >
                    Commercial Documents
                  </Link>
                </h3>
              </li> */}
              {/* <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Medical Certificate
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Divorce Decree Certificate
                  </Link>
                </h3>
              </li> */}
            </span>
          </ul>
          <ul className="serviceDrop">
            <h2>
              <Link
                onClick={hideSideBar}
                to={"/certificate-apostille-bangalore"}
              >
                Apostille
              </Link>
              <FontAwesomeIcon
                onClick={handleDropDown2}
                icon={faAngleDown}
                className="respDropIcon"
              ></FontAwesomeIcon>
            </h2>
            <span className="respMenuSpan" ref={dropRef2}>
              <li>
                <h3>
                  <NavHashLink
                    smooth
                    onClick={hideSideBar}
                    to={"/certificate-apostille-bangalore/#apoEduContainer"}
                  >
                    Education Certificate
                  </NavHashLink>
                </h3>
              </li>
              <li>
                <h3>
                  <NavHashLink
                    smooth
                    onClick={hideSideBar}
                    to={"/certificate-apostille-bangalore/#apoNonEduContainer"}
                  >
                    Non-Education Certificates
                  </NavHashLink>
                </h3>
              </li>
              {/* <li>
                <h3>
                  <Link
                    onClick={hideSideBar}
                    to={"/marriage-certificate-apostille-bangalore"}
                  >
                    Marriage Certificate
                  </Link>
                </h3>
              </li> */}
              {/* <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Power of Attorney
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Medical Certificate
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Divorce Decree Certificate
                  </Link>
                </h3>
              </li> */}
            </span>
          </ul>
          <ul className="serviceDrop">
            <h2>
              <Link
                onClick={hideSideBar}
                to={"/state-hrd-home-department-attestation"}
              >
                State HRD
              </Link>
              <FontAwesomeIcon
                onClick={handleDropDown3}
                icon={faAngleDown}
                className="respDropIcon"
              ></FontAwesomeIcon>
            </h2>
            <span className="respMenuSpan" ref={dropRef3}>
              <li>
                <h3>
                  <Link
                    onClick={hideSideBar}
                    to={"/karanataka-hrd-home-department-attestation"}
                  >
                    Karnataka
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link
                    onClick={hideSideBar}
                    to={"/tamilnadu-hrd-home-department-attestation"}
                  >
                    TamilNadu
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link
                    onClick={hideSideBar}
                    to={"/kerala-hrd-home-department-attestation"}
                  >
                    Kerala
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link
                    onClick={hideSideBar}
                    to={"/maharashtra-hrd-home-department-attestation"}
                  >
                    Maharastra
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link
                    onClick={hideSideBar}
                    to={"/andhrapradesh-hrd-home-department-attestation"}
                  >
                    Andhra Pradesh
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link
                    onClick={hideSideBar}
                    to={"/telangana-hrd-home-department-attestation"}
                  >
                    Telengana
                  </Link>
                </h3>
              </li>
            </span>
          </ul>
          <ul className="serviceDrop">
            <h2>
              <Link onClick={hideSideBar} to={"/mofa-attestation-services"}>
                MOFA
              </Link>
              <FontAwesomeIcon
                onClick={handleDropDown4}
                icon={faAngleDown}
                className="respDropIcon"
              ></FontAwesomeIcon>
            </h2>
            <span className="respMenuSpan" ref={dropRef4}>
              <li>
                <h3>
                  <NavHashLink
                    smooth
                    onClick={hideSideBar}
                    to={"/mofa-attestation-services/#mofaCertIncorp"}
                  >
                    Certificate Of Incorporation
                  </NavHashLink>
                </h3>
              </li>
              <li>
                <h3>
                  <NavHashLink
                    smooth
                    onClick={hideSideBar}
                    to={"/mofa-attestation-services/#memorandum"}
                  >
                    Memorandum of Association
                  </NavHashLink>
                </h3>
              </li>
              <li>
                <h3>
                  <NavHashLink
                    smooth
                    onClick={hideSideBar}
                    to={"/mofa-attestation-services/#exportInvoice"}
                  >
                    Export Invoice
                  </NavHashLink>
                </h3>
              </li>
              {/* <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Board Resolution
                  </Link>
                </h3>
              </li> */}
              <li>
                <h3>
                  <NavHashLink
                    smooth
                    onClick={hideSideBar}
                    to={"/mofa-attestation-services/#memorandum"}
                  >
                    Memorandum of Association Power of Attorney
                  </NavHashLink>
                </h3>
              </li>
              <li>
                <h3>
                  <NavHashLink
                    smooth
                    onClick={hideSideBar}
                    to={"/mofa-attestation-services/#packagingList"}
                  >
                    Packaging list
                  </NavHashLink>
                </h3>
              </li>
              <li>
                <h3>
                  <NavHashLink
                    smooth
                    onClick={hideSideBar}
                    to={"/mofa-attestation-services/#certOfOrigin"}
                  >
                    Certificate of Origin
                  </NavHashLink>
                </h3>
              </li>
              <li>
                <h3>
                  <NavHashLink
                    smooth
                    onClick={hideSideBar}
                    to={"/mofa-attestation-services/#chemAnalysis"}
                  >
                    Chemical Analysis Report
                  </NavHashLink>
                </h3>
              </li>
              <li>
                <h3>
                  <NavHashLink
                    smooth
                    onClick={hideSideBar}
                    to={"/mofa-attestation-services/#phyAnalysis"}
                  >
                    Physical Analysis Report
                  </NavHashLink>
                </h3>
              </li>
              <li>
                <h3>
                  <NavHashLink
                    smooth
                    onClick={hideSideBar}
                    to={"/mofa-attestation-services/#article"}
                  >
                    Articles of Association
                  </NavHashLink>
                </h3>
              </li>
            </span>
          </ul>
          <ul className="serviceDrop">
            <h2>
              <Link onClick={hideSideBar} to={"/pcc-attestation-bangalore"}>
                PCC
              </Link>
              <FontAwesomeIcon
                onClick={handleDropDown5}
                icon={faAngleDown}
                className="respDropIcon"
              ></FontAwesomeIcon>
            </h2>
            <span className="respMenuSpan" ref={dropRef5}>
              <li>
                <h3>
                  <Link
                    onClick={hideSideBar}
                    to={"/oman-pcc-attestation-bangalore"}
                  >
                    Oman PCC
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link
                    onClick={hideSideBar}
                    to={"/kuwait-pcc-attestation-bangalore"}
                  >
                    Kuwait PCC
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link
                    onClick={hideSideBar}
                    to={"/saudi-pcc-attestation-bangalore"}
                  >
                    Saudi PCC
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link
                    onClick={hideSideBar}
                    to={"/qatar-pcc-attestation-bangalore"}
                  >
                    Qatar PCC
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link
                    onClick={hideSideBar}
                    to={"/uae-pcc-attestation-bangalore"}
                  >
                    UAE PCC
                  </Link>
                </h3>
              </li>
            </span>
          </ul>

          <ul className="serviceDrop">
            <h2>
              <Link
                onClick={hideSideBar}
                to={"/mea-attestation-apostille-services"}
              >
                MEA
              </Link>
              {/* <FontAwesomeIcon
                onClick={handleDropDown6}
                icon={faAngleDown}
                className="respDropIcon"
              ></FontAwesomeIcon> */}
            </h2>
            {/* <span className="respMenuSpan" ref={dropRef6}>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    MEA Attestation
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    MEA Apostille
                  </Link>
                </h3>
              </li>
            </span> */}
          </ul>
          <ul className="serviceDrop">
            <h2>
              <Link onClick={hideSideBar} to={"/wes-attestation-bangalore"}>
                WES
              </Link>
            </h2>
          </ul>
          <ul className="serviceDrop">
            <h2>
              <Link
                onClick={hideSideBar}
                to={"/translation-attestation-bangalore"}
              >
                Translation
              </Link>
              {/* <FontAwesomeIcon
                onClick={handleDropDown7}
                icon={faAngleDown}
                className="respDropIcon"
              ></FontAwesomeIcon> */}
            </h2>
            {/* <span className="respMenuSpan" ref={dropRef7}>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Document Translation
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Language Translation
                  </Link>
                </h3>
              </li>
            </span> */}
          </ul>
          <ul className="serviceDrop">
            <h2>
              <Link onClick={hideSideBar} to={"/contact-us"}>
                Contact Us
              </Link>
            </h2>
          </ul>
          <div className="respMenuGap"></div>
        </div>
      </div>
    </>
  );
};
export default Menu;
