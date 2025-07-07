import React from "react";
import "./Contact.css";
import ContactForm from "../../components/ContactForm";

export default function Contact() {
  return (
    <div className="main contact-margin-top" id="contact">
      <div className="contact-div-main" style={{ justifyContent: "center" }}>
        <ContactForm />
      </div>
    </div>
  );
}
