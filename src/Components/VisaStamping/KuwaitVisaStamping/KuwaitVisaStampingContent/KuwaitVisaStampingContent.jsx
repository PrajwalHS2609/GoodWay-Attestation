import React from "react";
import "./KuwaitVisaStampingContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
const KuwaitVisaStampingContent = () => {
  return (
    <div className="kuwaitVisaStampingContent">
      <h1>
        Kuwait Visa Stamping In <span>Bangalore</span>
      </h1>
      <p>
        A visa is a conditional authorization granted by a country to a
        foreigner, allowing them to enter, remain within, or to leave that
        country. Visas typically include limits on the duration of the
        foreigner's stay, territory within the country they may enter, the dates
        they may enter, the number of permitted visits or an individual's right
        to work in the country in question. Visas are associated with the
        request for permission to enter a country and thus are, in some
        countries, distinct from actual formal permission for an alien to enter
        and remain in the country. In each instance, a visa is subject to entry
        permission by an immigration official at the time of actual entry, and
        can be revoked at any time.
      </p>
      <ul>
        <span>
          {" "}
          <li> EMPLOYMENT VISA</li>
          <li> ORIGINAL VISA.</li>
          <li> PASSPORT.</li>
          <li> MEDICAL with GAMCA SLIP</li>
          <li> PCC issued by Passport Office</li>
          <li> PCC Attested MEA and Embassy</li>
          <li> PCC Attested MEA and Embassy</li>
          <li> PHOTOGRAPHS (Black White Background)</li>
          <li> TICKET</li>
        </span>
        <span>
          {" "}
          <li> DOCUMENTS FOR FAMILY VISA & RESIDENCE VISA</li>
          <li> ORIGINAL VISA</li>
          <li> PASSPORT.</li>
          <li> MEDICAL with GAMCA SLIP</li>
          <li> PCC issued by Passport Office</li>
          <li> PCC Attested MEA and Embassy</li>
          <li> TICKET</li>
          <li> PHOTOGRAPHS</li>
          <li> POLIO CERTIFICATE for 1 to 12 Years Old Children’s</li>
        </span>
      </ul>
      <br />
      <p>
        Documentary requirements of different categories of Kuwaiti visa (Visit
        / Transit / Business / study / work / family reunion / medical /
        cultural) are different for each category. However, all visas are
        subject to the submission of the following documents:
      </p>
      <ul className="kuwaitVisaStampingContent-Footer">
        <span>
          <li>
            <FontAwesomeIcon
              icon={faAnglesRight}
              className="eduCertIcon"
            ></FontAwesomeIcon>{" "}
            <span>Chamber of Commerce (CoC) Attestation:</span>{" "}
          </li>
          <li>
            <FontAwesomeIcon
              icon={faAnglesRight}
              className="eduCertIcon"
            ></FontAwesomeIcon>{" "}
            <span>Chamber of Commerce (CoC) Attestation:</span>{" "}
          </li>
        </span>
        <span>
          {" "}
          <li>
            <FontAwesomeIcon
              icon={faAnglesRight}
              className="eduCertIcon"
            ></FontAwesomeIcon>{" "}
            <span>Chamber of Commerce (CoC) Attestation:</span>{" "}
          </li>{" "}
          <li>
            <FontAwesomeIcon
              icon={faAnglesRight}
              className="eduCertIcon"
            ></FontAwesomeIcon>{" "}
            <span>Chamber of Commerce (CoC) Attestation:</span>{" "}
          </li>
        </span>
      </ul>
      <p>
        Depending on the category of visa, other documents may also be
        necessary. The applicant may also in some cases be called for personal
        interview at the Embassy.
      </p>
    </div>
  );
};

export default KuwaitVisaStampingContent;
