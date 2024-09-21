import React, { useState } from "react";
import "./ContactUsForm.css";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";

const ContactUsForm = () => {
  let [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  let { username, email, phone, subject, message } = data;
  let handleData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_2xxwbyf", "template_r78apok", e.target, "tftH9J-ecsCWhmcnD").then(
      (result) => {
        console.log(result.text);
        toast.success("mail sent successfully");
        setTimeout(() => {
          window.location.assign("/contact-us");
        }, 5000);
      },
      (error) => {
        console.error(error.text);
        toast.error("Failed to send mail");
        // setTimeout(() => {
        //   window.location.assign("/contact-us");
        // }, 5000);
      }
    );
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
      <ToastContainer />

        <fieldset>
          <div className="contactFormContent">
            <div className="contactFormItem" id="contentLabel">
              <label htmlFor="name">Tell Us Your Name *</label>
            </div>
            <div className="contactFormItem">
              <input
                type="text"
                name="username"
                id="username"
                value={username}
                placeholder="Your Name"
                onChange={handleData} required
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
                value={email}
                placeholder="Eg. example@email.com"
                onChange={handleData} required
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
                value={phone}
                placeholder="Eg. +91 1234567890"
                onChange={handleData} required
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
                value={subject}
                placeholder="Your Subject"
                onChange={handleData} required
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
                value={message}
                onChange={handleData} required
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
