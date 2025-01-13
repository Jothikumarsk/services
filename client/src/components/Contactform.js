import React, { useState } from 'react';
import '../App.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://services-j2lq.onrender.com/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        alert('Form submitted successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('Error submitting the form.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="contact">
    <h2>Contact Us</h2>
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Your Phone (Optional)"
        value={formData.phone}
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit">Submit</button>
    </form>
    </section>
  );
};

export default ContactForm;
