import React from "react";
import "./BirthCertPurpose.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
const BirthCertPurpose = () => {
  return (
    <div className="birthCertPurposeContainer">
      <h2>
        Purposes of Birth Certificate <span>Attestation</span> in Bangalore
      </h2>
      <p>
        Birth certificate attestation in Bangalore serves various essential
        purposes. This certification is particularly important for children who
        need to travel to foreign countries. Some common purposes include:
      </p>
      <ul>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>To attain dependant visa:</span> Birth certificate attestation
          is often required when applying for a dependent visa. This helps in
          proving the relationship between the primary visa holder and their
          dependents.
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>For migration:</span> When individuals or families migrate to
          another country, attested birth certificates are required to verify
          the identities and ages of the migrating members.
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>For higher education:</span> Many foreign educational
          institutions require an attested birth certificate during the
          admission process to confirm the student’s age and identity.
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>For resident visa:</span> Applying for a resident visa in a
          foreign country often necessitates an attested birth certificate to
          establish the applicant’s identity and age.
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>For employment:</span> Some job positions in foreign countries
          might require attested birth certificates as part of the employment
          verification process.
        </li>
      </ul>
    </div>
  );
};

export default BirthCertPurpose;
