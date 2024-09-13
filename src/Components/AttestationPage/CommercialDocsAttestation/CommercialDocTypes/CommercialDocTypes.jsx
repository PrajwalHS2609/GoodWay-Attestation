import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
const CommercialDocTypes = () => {
  return (
    <div className="birthCertPurposeContainer">
      <h2>
        Types of Commercial Documents for <span>Attestation</span>{" "}
      </h2>
      <p>
        Goodway Attestation Services in Bangalore offers attestation for a wide
        range of commercial documents. Some of the common types of commercial
        documents that require attestation include:
      </p>
      <ul>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>Incorporation Certificates:</span> These documents prove the
          legal existence of a company and are required for setting up foreign
          branches or subsidiaries.
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>Trade Licenses:</span> Trade licenses authorize a business to
          operate and are necessary for international trade activities.
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>Power of Attorney:</span> This document grants legal authority
          to an individual or entity to act on behalf of the business in foreign
          countries.
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>Invoices and Bills of Lading:</span> These documents are
          essential for export and import activities, ensuring that goods can be
          legally shipped across borders.
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>
            Memorandum of Association (MOA) and Articles of Association (AOA):
          </span>
          These documents outline the company's structure, purpose, and
          operational guidelines and are necessary for international business
          dealings.
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>Agreements and Contracts:</span> Legal agreements and contracts
          between businesses and foreign partners require attestation to ensure
          their validity and enforceability.
        </li>
      </ul>
    </div>
  );
};

export default CommercialDocTypes;
