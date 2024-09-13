import React, { useEffect } from "react";
import "./TypesDocs.css";
import "aos/dist/aos.css";
import AOS from "aos";
const TypesDocs = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);
  return (
    <div className="typeDocContainer">
      <h2>
        Types of Commercial Documents Attested by{" "}
        <span> Goodway Attestation</span>
      </h2>
      <p>
        Goodway Attestation Services offers attestation for a wide range of
        commercial documents, including:
      </p>
      <div className="typeDocWrapper">
        <div className="typeDocContent" data-aos="fade-right">
          <img
            src="https://img.freepik.com/free-photo/still-life-documents-stack_23-2151088771.jpg?ga=GA1.1.834150354.1714229918&semt=ais_user"
            alt=""
          />
        </div>
        <div className="typeDocContent" data-aos="fade-left">
          <ul>
            <li>Memorandum of Association (MOA)</li>
            <li>Articles of Association</li>
            <li>Company Profile</li>
            <li>Incorporation Letter</li>
            <li>Board Resolution</li>
            <li>Bill Invoice</li>
            <li>Insurance Certificate</li>
            <li>Import Licenses</li>
            <li>Export Invoice</li>
            <li>Letter of Credit</li>
            <li>Invitation Letter</li>
            <li>Authority Letter</li>
            <li>Chamber of Commerce Certificates</li>
            <li>Power of Attorney</li>
            <li>Shareholder Agreements</li>
            <li>Non-Disclosure Agreements</li>
          </ul>
        </div>
      </div>
      <p>
        These documents are crucial for various business activities, from
        outlining corporate objectives to facilitating financial transactions
        and legal agreements.
      </p>
    </div>
  );
};

export default TypesDocs;
