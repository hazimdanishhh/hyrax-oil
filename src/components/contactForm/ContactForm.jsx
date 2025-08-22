import { useState } from "react";
import "./ContactForm.scss";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    enquiryType: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const templateId =
        formData.enquiryType === "Sales"
          ? import.meta.env.VITE_EMAILJS_TEMPLATE_SALES
          : import.meta.env.VITE_EMAILJS_TEMPLATE_GENERAL;

      // Guard against missing env vars
      if (
        !import.meta.env.VITE_EMAILJS_SERVICE_ID ||
        !templateId ||
        !import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ) {
        throw new Error(
          "EmailJS environment variables are not configured properly."
        );
      }

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        templateId,
        {
          enquiryType: formData.enquiryType,
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        console.log("✅ EmailJS Success:", result.text);

        setIsSubmitted(true);
        setFormData({
          enquiryType: "",
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
        });

        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error("EmailJS response not OK.");
      }
    } catch (err) {
      console.error("❌ EmailJS Error:", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contactForm">
      {/* Enquiry Type */}

      <div className="contactFormInput">
        <fieldset className="contactFormRadioGroup">
          <legend className="textRegular textXS">Enquiry Type*</legend>

          <div className="contactFormRadioOption">
            <input
              type="radio"
              id="sales"
              name="enquiryType"
              value="Sales"
              checked={formData.enquiryType === "Sales"}
              onChange={handleChange}
              required
            />
            <label htmlFor="sales">Sales Enquiry</label>
          </div>

          <div className="contactFormRadioOption">
            <input
              type="radio"
              id="general"
              name="enquiryType"
              value="General"
              checked={formData.enquiryType === "General"}
              onChange={handleChange}
              required
            />
            <label htmlFor="general">General Enquiry</label>
          </div>
        </fieldset>
      </div>

      {/* Form */}
      <div className="contactFormHalf">
        <div className="contactFormInput">
          <label htmlFor="name" className="textRegular textXS">
            Name*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="contactFormInput">
          <label htmlFor="email" className="textRegular textXS">
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="contactFormHalf">
        <div className="contactFormInput">
          <label htmlFor="company" className="textRegular textXS">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            placeholder="Enter your company name"
            onChange={handleChange}
          />
        </div>

        <div className="contactFormInput">
          <label htmlFor="phone" className="textRegular textXS">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            placeholder="Enter your phone number"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="contactFormInput">
        <label htmlFor="message" className="textRegular textXS">
          Message*
        </label>
        <textarea
          id="message"
          name="message"
          className="textArea"
          value={formData.message}
          placeholder="Type your message here..."
          onChange={handleChange}
          rows={5}
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="contactFormSubmitButton"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
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
        {error && (
          <motion.div
            className="formErrorCard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            ❌ {error}
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

export default ContactForm;
