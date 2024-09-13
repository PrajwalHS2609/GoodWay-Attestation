import React, { useEffect } from "react";
import "./../../../HomePage/Faq/Faq.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "aos/dist/aos.css";
import AOS from "aos";
import "react-accessible-accordion/dist/fancy-example.css";
const FaqMain = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);
  return (
    <div className="faqMainContainer">
      <Accordion className="faqMainContent" allowZeroExpanded>
        <AccordionItem className="faqItem" data-aos="fade-right">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3>What is UAE attestation ?</h3>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel className="faqPanel">
            <p>
              UAE attestation is the process of validating documents issued in
              one country to be accepted in the UAE. This involves multiple
              levels of verification by the concerned authorities.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-right">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3>Why do I need UAE attestation ?</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              UAE attestation is required for various purposes, including
              employment, higher education, business setup, or family visa
              applications in the UAE.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-right">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3> Which documents require UAE attestation ?</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              Commonly attested documents include educational certificates,
              birth and marriage certificates, commercial documents, and other
              personal documents.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-right">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3>How long does the UAE attestation process take ?</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              At Goodway Attestation, the process typically takes 10-15 business
              days, depending on the type of document and the issuing authority.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-right">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3> What are the steps involved in UAE attestation ?</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              Notary attestation <br />
              Home Department or HRD attestation MEA (Ministry of External
              Affairs) attestation UAE Embassy/Consulate attestation MOFA
              (Ministry of Foreign Affairs) attestation in UAE
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-right">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3>What are the charges for UAE attestation ?</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              The charges vary depending on the document type and the required
              services. Please contact our customer service team for detailed
              pricing.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-right">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3>
                Can Goodway Attestation help with urgent attestation needs?
              </h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              Yes, we offer expedited services for urgent attestation
              requirements. Please let us know your timeline, and we will do our
              best to accommodate your needs.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-right">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3>
                Do I need to submit the original documents for attestation ?
              </h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              Yes, original documents are required for the attestation process.
              Copies will not be accepted.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-right">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3>How can I track the status of my attestation ?</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              You can track your document status through our online tracking
              system or by contacting our customer service team.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FaqMain;
