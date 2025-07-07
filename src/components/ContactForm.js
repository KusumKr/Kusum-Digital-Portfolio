import React, { useState } from "react";
import Button from "./button/Button";
import "./ContactForm.css";

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

export default function ContactForm() {
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
    <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
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
      />
    </form>
  );
}
