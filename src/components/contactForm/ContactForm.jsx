import { useState } from "react";
import "./ContactForm.scss";
import { AnimatePresence, motion } from "framer-motion";

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

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

    // Clear Previous Errors (if any)
    // setError(null)

    // Optional: Disable submit button during loading
    // setIsSubmitting(true)

    // Validate input on frontend (basic checks, required fields, etc.)

    // TODO: Add actual API call, try and error blocks

    console.log("Form submitted:", formData);

    // Boolean for UI success message
    setIsSubmitted(true);

    // Clear form after submit
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    });

    // Remove UI success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="contactForm">
      <div className="contactFormHalf">
        <div className="contactFormInput">
          <label htmlFor="name">Name*</label>
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
          <label htmlFor="email">Email*</label>
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
        <label htmlFor="message">Message*</label>
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

      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            className="formSubmittedCard"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <p className="textRegular formSubmittedMessage formSubmittedHeading">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#4ddf14"
                viewBox="0 0 256 256"
              >
                <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
              </svg>
              Message sent successfully.
            </p>
            <p className="textLight formSubmittedMessage">
              We'll review it and get back to you within 1–2 business days.
            </p>
            <p className="textLight formSubmittedMessage">
              Thanks for reaching out to us.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

export default ContactForm;
