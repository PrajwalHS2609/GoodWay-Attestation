import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
const MarriageCertPurpose = () => {
  return (
    <div className="birthCertPurposeContainer">
      <h2>
        Main Purposes of Marriage Certificate <span>Attestation</span> in
        Bangalore
      </h2>

      <ul>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>For Resident Visa: </span> Obtaining a resident visa in a
          foreign country often requires marriage certificate attestation to
          verify the applicant’s marital status.
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>For Employment:</span>: Marriage certificate attestation is
          often required for employment purposes. It helps in proving the
          marital status of the individual, which may be necessary for certain
          job applications or benefits.
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>For Education Purposes: </span>Attested marriage certificates
          may be necessary for educational purposes, especially if a spouse
          plans to join their partner abroad.
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>To Attain Dependent Visa:</span>Marriage certificate attestation
          is crucial for obtaining a dependent visa, allowing spouses to travel
          together.
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>To Take Family Abroad: </span> When moving abroad, marriage
          certificate attestation helps in ensuring that family members can
          accompany the individual without legal issues.
        </li>
      </ul>
      <p>
        Marriage certificate attestation in Bangalore falls under
        non-educational certificate attestation and has various purposes
        depending on the rules of the destination country. It is vital to follow
        the attestation procedure meticulously to ensure the certificate is
        accepted internationally.
      </p>
    </div>
  );
};

export default MarriageCertPurpose;
