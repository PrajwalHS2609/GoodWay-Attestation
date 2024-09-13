import React, { useEffect } from "react";
import "./Faq.css";
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
              <h3>What is certificate attestation ?</h3>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel className="faqPanel">
            <p>
              Certificate attestation is the process of verifying the
              authenticity of documents by authorized officials. This is
              typically required for educational, personal, and commercial
              documents that need to be recognized abroad.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-right">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3>What is an Apostille ?</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              An Apostille is a form of authentication issued for documents to
              be used in countries that are part of the Hague Convention. It
              certifies the validity of the document and the signature of the
              issuing authority.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-right">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3>What types of documents can Goodway Attestation handle ?</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              We handle a wide range of documents, including:
              <br /> Educational certificates (degrees, diplomas, transcripts){" "}
              <br />
              Personal documents (birth certificates, marriage certificates,
              affidavits) <br /> Commercial documents (agreements, invoices,
              certificates of incorporation)
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-right">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3> How long does the attestation process take ?</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              The duration of the attestation process can vary based on the type
              of document and the issuing authority. Typically, the process can
              take anywhere from a few days to a few weeks. Our efficient
              service often completes the process within 5 days.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-right">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3> Is Goodway Attestation certified and recognized ?</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              Yes, Goodway Attestation is a registered and ISO 9001:2015
              certified company. We are approved by the Government and various
              embassies for attestation, authentication, and legalization
              services.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-right">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3>How do I submit my documents for attestation ?</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              You can submit your documents by visiting our office in Bangalore.
              Alternatively, you can courier your documents to us. Please
              contact our customer service team for detailed instructions.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-right">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3>What are the fees for attestation services ?</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              Our fees vary depending on the type and number of documents. We
              offer competitive rates that are better than the market. For a
              detailed quote, please contact our office directly.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-right">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3>
                {" "}
                Is my personal information secure with Goodway Attestation ?
              </h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              Absolutely. We prioritize the confidentiality and security of your
              personal information and documents. All documents are handled with
              the utmost care and privacy.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-right">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3> Can I track the status of my document attestation ?</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              Yes, we offer an online tracking system that allows you to monitor
              the status of your document attestation process. You will be
              provided with a tracking number upon submission.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-right">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3>What should I do if my documents are not in English ?</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              If your documents are not in English, you will need to have them
              translated by a certified translator. We can assist you with this
              process to ensure that all documents meet the required standards
              for attestation.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-right">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3> What happens if my documents are rejected ?</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              In the rare event that your documents are rejected, we will work
              with you to understand the reasons for rejection and provide
              guidance on how to rectify the issue. Our goal is to ensure a
              smooth and successful attestation process.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-right">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3>
                {" "}
                How can I contact Goodway Attestation for more information ?
              </h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              You can reach us via phone, email, or by visiting our office. Our
              customer service team is available to answer any questions you may
              have and provide additional information on our services.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FaqMain;
