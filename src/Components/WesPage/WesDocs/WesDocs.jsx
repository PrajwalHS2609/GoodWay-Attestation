import React from "react";
import "./WesDocs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
const WesDocs = () => {
  return (
    <div className="wesDocContainer">
      <h2>
        Major Documents Required for <span>WES</span> Canada Verification:
      </h2>
      <ul>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          Degree certificate
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          All semester mark sheets
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          Passport copy
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          WES form
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          WES Reference Number
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          2 passport-size photos
        </li>
      </ul>
      <p>
        These documents are mandatory for obtaining WES verification. People
        primarily use this verification to obtain permanent resident status in
        the US and Canada. To get your educational certificate verified by WES,
        you need to send the required documents to the WES organization. They
        will check all submitted documents before providing verification. After
        the verification process, the documents will be sent to the US or Canada
        by mail or sealed envelope. This verification improves the authenticity
        and credibility of your academic certificates. Today, the WES test is
        compulsory for moving to these two nations, the US and Canada.
        Therefore, every migrant must take the WES test before applying for
        permanent residence status in either of these countries. With WES
        accreditation, immigrants can use their educational certificates
        anywhere in the destination countries. The WES association enhances
        global communication and mobility by advocating and assessing the
        educational eligibility of immigrants. Through WES recognition,
        individuals can fully utilize their educational qualifications in the
        concerned country. The WES organization operates entirely through its
        official website. The World Education Service adds more value to your
        certificate and helps you succeed internationally. If you are looking
        for WES verification services, contact us today, and our professional
        team will expedite your WES verification process.
      </p>
    </div>
  );
};

export default WesDocs;
