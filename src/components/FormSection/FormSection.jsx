import React, { useState } from 'react';
import './FormSection.css';

function FormSection() {
  // 1. Set up state variables for form inputs and submission status
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

   // State to track if the form was successfully sent
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // 2. Keep track of remaining characters for your 100-character max limit
  const maxChars = 100;
  const charsRemaining = maxChars - formData.message.length;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
     
try {
      // 1. FIXED: Point to your local Vite proxy route instead of AllOrigins
      const endpoint = "/api/tsacademy.php"; 

      // 2. Format the data into URL-encoded form data (Kept identical)
      const formPayload = new URLSearchParams();
      formPayload.append("fullName", formData.fullName);
      formPayload.append("email", formData.email);
      formPayload.append("phone", formData.phone);
      formPayload.append("message", formData.message);

      // 3. Fire the request locally straight through your Vite setup
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formPayload.toString(),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ fullName: '', email: '', phone: '', message: '' });
      } else {
        throw new Error("Server error");
      }
    } catch (error) {
      setErrorMessage("Failed to submit form data. Please try again later.");
      console.error("Submission error details:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Have Questions About Planetary Science?</h2>
      <p>Interested in learning more about space, astronomy, or how planetary data is collected and analyzed?<br />Reach out and we'll get back to you.</p>
      
      {isSubmitted ? (
        <div className="success-message">
          <h3>Form Submitted Successfully!</h3>
          <p>Thank you for reaching out. Your planetary science inquiry has been logged.</p>
          <button className="submit-btn" onClick={() => setIsSubmitted(false)}>
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="form-grid">
          {errorMessage && <div className="error-banner">{errorMessage}</div>}
<div className="form-group">
  <label htmlFor="fullName">Full Name<span className="req">*</span></label>
  <input 
    type="text" 
    id="fullName"
    name="fullName"
    placeholder="Full name" 
    value={formData.fullName}
    onChange={handleChange}
    required 
  />
</div>

<div className="form-group">
  <label htmlFor="email">Email<span className="req">*</span></label>
  <input 
    type="email" 
    id="email"
    name="email"
    placeholder="Please enter a valid email address." 
    value={formData.email}
    onChange={handleChange}
    required 
  />
</div>

<div className="form-group">
  <label htmlFor="phone">Phone Number<span className="req">*</span></label>
  <input 
    type="tel" 
    id="phone"
    name="phone"
    placeholder="Please enter a valid phone number." 
    value={formData.phone}
    onChange={handleChange}
    required 
  />
</div>

<div className="form-group">
  <label htmlFor="message">Message<span className="req">*</span></label>
  <textarea 
    id="message"
    name="message"
    placeholder="Enter your message" 
    maxLength={maxChars}
    value={formData.message}
    onChange={handleChange}
    rows="4"
    required 
  />
  <span className="char-count">{charsRemaining} characters</span>
</div>

<div className="span-2">
  <button type="submit" className="submit-btn" disabled={isSubmitting}>
    {isSubmitting ? "Submitting..." : "Submit"}
  </button>
</div>
</form>
      )}
    </section>
  );
}

export default FormSection;
