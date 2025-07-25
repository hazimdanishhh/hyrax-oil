import { useState } from "react";
import "./ContactForm.scss";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can replace this with your actual API call or Vike SSR form handling logic
    console.log("Form submitted:", formData);

    // Optional: clear form after submit
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="contactForm">
      <div className="contactFormHalf">
        <div className="contactFormInput">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contactFormInput">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="contactFormHalf">
        <div className="contactFormInput">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className="contactFormInput">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="contactFormInput">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          className="textArea"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
        ></textarea>
      </div>

      <button type="submit" className="contactFormSubmitButton">
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
