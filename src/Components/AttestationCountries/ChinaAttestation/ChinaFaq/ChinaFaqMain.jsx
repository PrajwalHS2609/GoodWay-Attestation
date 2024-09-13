import React, { useEffect } from "react";
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
import "./../../../HomePage/Faq/Faq.css";
const ChinaFaqMain = () => {
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
              <h3>What is China attestation ?</h3>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel className="faqPanel">
            <p>
              China attestation is the process of authenticating documents
              issued in India for use in China. This involves getting them
              validated by relevant Indian authorities and the Chinese Embassy.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-right">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3>Why do I need China attestation ?</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              China attestation is necessary for legalizing documents such as
              educational certificates, marriage certificates, and birth
              certificates for purposes like employment, education, or family
              residency in China.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-right">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3>What types of documents can be attested ?</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              <ul>
                <li>Educational Certificates (degrees, diplomas, etc.)</li>
                <li>
                  Personal Documents (birth certificates, marriage certificates,
                  etc.)
                </li>
                <li>
                  Commercial Documents (business agreements, power of attorney,
                  etc.)
                </li>
              </ul>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-right">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3>How long does the attestation process take ?</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              The attestation process usually takes about 7 to 10 working days.
              However, the duration can vary depending on the type of document
              and the issuing authority.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-right">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3> What are the steps involved in the attestation process?</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              <ul>
                <li>Notary Attestation</li>
                <li>State Home Department or HRD Attestation</li>
                <li>MEA (Ministry of External Affairs) Attestation</li>
                <li>Qatar Embassy Attestation</li>
              </ul>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-right">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3>What documents are required for the attestation process ?</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <ul>
              <li>Original certificate to be attested</li>
              <li>Passport copy of the certificate holder</li>
              <li>Authorization letter (if applicable)</li>
              <li>Any other supporting documents, if required</li>
            </ul>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-right">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3>Can I track the status of my attestation ?</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              Yes, Goodway Attestation provides regular updates on the status of
              your document attestation. You can also contact our customer
              service for updates.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-right">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3>Do I need to submit the original documents ?</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              Yes, original documents are required for the attestation process.
              These will be returned to you after the attestation is complete.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-right">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3>Is there an expedited attestation service available ?</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              Yes, Goodway Attestation offers an expedited service for urgent
              requirements. Please contact us for more details and additional
              charges.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-right">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3>How can I submit my documents for attestation ?</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              You can submit your documents at our office in Bangalore or send
              them via courier. Contact our customer service for detailed
              instructions.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-right">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3>What are the charges for China  attestation services ?</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              The charges for China  attestation vary depending on the type of
              document and the urgency of the request. Please contact Goodway
              Attestation for a detailed quote.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-right">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3>
                Are there any specific requirements for educational certificate
                attestation ?
              </h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              For educational certificates, the document must be verified by the
              issuing university or board, followed by attestation from the
              State HRD, MEA, and finally the China  Embassy.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-right">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3>
                Can you assist with the attestation of commercial documents ?
              </h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              Yes, we provide attestation services for commercial documents,
              including business agreements, power of attorney, and company
              registrations.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ChinaFaqMain;
