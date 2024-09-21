import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
const DegreeCertProcess = () => {
  return (
    <div className="birthCertPurposeContainer">
      <h2>
        The Degree Certificate <span>Attestation</span> Process
      </h2>
      <p>
        The degree certificate attestation process involves several steps to
        ensure that the document is genuine and recognized internationally:
      </p>
      <ul>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>Notary Attestation:</span> This is the initial step where the
          degree certificate is attested by a notary. This attestation signifies
          that the document has been verified by a legal authority.
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span> Home Department Attestation:</span> The next step involves
          attestation by the Home Department of the respective state. This
          attestation further confirms the authenticity of the degree
          certificate.
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span> HRD Attestation:</span> The Human Resource Development (HRD)
          attestation is done by the respective state’s HRD department. This
          step is critical as it validates the educational document from the
          issuing institution.
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
          <span>MEA Attestation:</span> After HRD attestation, the document is
          attested by the Ministry of External Affairs (MEA). This attestation
          is necessary for international recognition of the degree certificate.
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span> Embassy Attestation:</span> The final step is attestation by
          the embassy of the destination country. This attestation ensures that
          the document is accepted and recognized in the foreign country.
        </li>
      </ul>
    </div>
  );
};

export default DegreeCertProcess;
