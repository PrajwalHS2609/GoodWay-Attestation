import React from "react";
import "./MofaDocService.css";
import MofaDocServiceCard from "./MofaDocServiceCard";
const MofaDocService = () => {
  return (
    <div className="mofaDocServiceContainer" id="exportInvoice">
      <h2>
        MOFA <span>Attestation</span> Services for Commercial Documents
      </h2>
      <p>
        Goodway Attestation Services in Bangalore offers comprehensive MOFA
        (Ministry of Foreign Affairs) attestation services for a variety of
        commercial documents. MOFA attestation is essential for legalizing
        documents for international use, ensuring they are recognized and
        accepted by authorities in foreign countries. Here’s a detailed
        description of each service provided:
      </p>
      <MofaDocServiceCard
        span="1."
        head="Export Invoice Attestation"
        para="Export Invoice attestation involves verifying the details of goods or services exported from one country to another. This attestation certifies the authenticity of the export invoice, ensuring compliance with international trade regulations and facilitating smooth customs clearance."
      id="packagingList"
      />
      <MofaDocServiceCard
        head="Packaging List Attestation"
        para="Packaging List attestation confirms the accuracy and completeness of the details listed on packaging materials accompanying exported goods. It ensures that the packaging list is verified and accepted by authorities in the destination country, facilitating seamless shipment and delivery processes."
        span="2."
      id="certOfOrigin"
      />
      <MofaDocServiceCard
        head="Certificate of Origin Attestation"
        para="Certificate of Origin attestation validates the origin of goods exported from one country to another. This document is crucial for determining customs duties, tariffs, and trade restrictions imposed by the importing country, ensuring compliance with international trade agreements."
        span="3."
      id="certOfIncorp"
      />
      <MofaDocServiceCard
        head="Certificate of Incorporation Attestation"
        para="Certificate of Incorporation attestation verifies the existence and registration of a company or business entity. This document is essential for establishing corporate identity and legal status in foreign markets, facilitating business transactions, partnerships, and investments."
        span="4."
      id="chemAnalysis"
      />
      <MofaDocServiceCard
        head="Chemical Analysis Report Attestation"
        para="Chemical Analysis Report attestation confirms the accuracy and reliability of analytical data related to chemical compositions and properties of products. This attestation ensures that the chemical analysis report meets international standards and regulatory requirements for safety, quality, and environmental compliance."
        span="5."
      id="phyAnalysis"
      />
      <MofaDocServiceCard
        head="Physical Analysis Report Attestation"
        para="Physical Analysis Report attestation verifies the physical properties, characteristics, and specifications of products or materials. This attestation certifies the accuracy of physical analysis findings, ensuring conformity with international standards and regulatory guidelines."
        span="6."
      id="memorandum"
      />
      <MofaDocServiceCard
        head="Memorandum of Association Attestation"
        para="Memorandum of Association (MOA) attestation validates the foundational document that defines the objectives, scope, and operations of a company or business entity. This attestation is essential for demonstrating corporate governance and legal compliance in international business transactions."
        span="7."
      id="article"
      />
      <MofaDocServiceCard
        head="Articles of Association Attestation"
        para="Articles of Association attestation confirms the rules, regulations, and internal management procedures governing a company or business entity. This document outlines the rights and responsibilities of shareholders, directors, and officers, ensuring transparency and accountability in corporate operations."
        span="8."
      id=""
      />
    </div>
  );
};

export default MofaDocService;
