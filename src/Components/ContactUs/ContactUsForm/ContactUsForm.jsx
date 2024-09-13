import React from "react";
import "./ContactUsForm.css";
const ContactUsForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contactFormContainer">
      <div className="contactFormHead">
        <h3>Send Inquiry</h3>
        <p>
          Please let us know if you have a question, want to leave a comment, or
          would like further information about our Services.
        </p>
      </div>

      <form action="" onSubmit={handleSubmit}>
        <fieldset>
          <div className="contactFormContent">
            <div className="contactFormItem" id="contentLabel">
              <label htmlFor="name">Tell Us Your Name *</label>
            </div>
            <div className="contactFormItem">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
              />
            </div>
          </div>
          <div className="contactFormContent">
            <div className="contactFormItem" id="contentLabel">
              <label htmlFor="email">Enter Your Email *</label>
            </div>
            <div className="contactFormItem">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Eg. example@email.com"
              />
            </div>
          </div>
          <div className="contactFormContent">
            <div className="contactFormItem" id="contentLabel">
              <label htmlFor="phone">Enter Your PhoneNo *</label>
            </div>
            <div className="contactFormItem">
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Eg. +91 1234567890"
              />
            </div>
          </div>
          <div className="contactFormContent">
            <div className="contactFormItem" id="contentLabel">
              <label htmlFor="subject">Enter Your Subject</label>
            </div>
            <div className="contactFormItem">
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Your Subject"
              />
            </div>
          </div>
          <div className="contactFormContent">
            <div className="contactFormItem" id="contentLabel">
              <label htmlFor="message">Message * </label>
            </div>
            <div className="contactFormItem" id="contactFormTextarea">
              <textarea
                name="message"
                id="message"
                placeholder="Write us a Message"
              ></textarea>
            </div>
          </div>
        </fieldset>
        <button type="handleSubmit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUsForm;
