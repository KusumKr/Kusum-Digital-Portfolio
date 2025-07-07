import React, { Component, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

function ContactForm({ theme }) {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  };
  const services = [
    "Web Development",
    "UI/UX Design",
    "Consultation",
    "Collaboration",
    "Other",
  ];
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setResult({ success: true, message: "Message sent successfully!" });
        setForm(initialState);
      } else {
        setResult({
          success: false,
          message: data.error || "Failed to send message.",
        });
      }
    } catch (err) {
      setResult({ success: false, message: "Failed to send message." });
    }
    setLoading(false);
  };

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      autoComplete="off"
      style={{ background: theme.body, color: theme.text }}
    >
      <div className="form-row">
        <input
          type="text"
          name="firstname"
          placeholder="Firstname"
          value={form.firstname}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastname"
          placeholder="Lastname"
          value={form.lastname}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-row">
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone number"
          value={form.phone}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          required
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div className="form-row">
        <textarea
          name="message"
          placeholder="Type your message here."
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
        />
      </div>
      {result && (
        <div className={`form-result ${result.success ? "success" : "error"}`}>
          {result.message}
        </div>
      )}
      <Button
        text={loading ? "Sending..." : "Send message"}
        className="main-button-green"
        type="submit"
        disabled={loading}
        theme={theme}
      />
    </form>
  );
}

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
                  alt=""
                  style={{ maxWidth: "250px", width: "100%", height: "auto" }}
                />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <SocialMedia theme={theme} />
              </div>
            </div>
          </Fade>
          <Fade bottom duration={1000} distance="40px">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "2rem 0",
              }}
            >
              <ContactForm theme={theme} />
            </div>
          </Fade>
          <Fade bottom duration={1000} distance="40px">
            <div className="address-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assets/images/${addressSection["avatar_image_path"]}`)}
                  alt="Address"
                  style={{ width: "100%", maxWidth: "300px", height: "auto" }}
                />
              </div>
              <div className="address-heading-text-div">
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {addressSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {addressSection["subtitle"]}
                </p>
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {phoneSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {phoneSection["subtitle"]}
                </p>
                <div className="address-btn-div">
                  <Button
                    text="Visit on Google Maps"
                    newTab={true}
                    href={addressSection.location_map_link}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
