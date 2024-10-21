import React from 'react';
import './ContactMe.css';

const ContactMe = () => {
  return (
    <section className="contact-section">
        <h2>Contact Me</h2>
        <p>Have a question or want to connect? Feel free to reach out to me via email.</p>
        <a href="mailto:srividya.puttareddy@outlook.com" className="contact-btn">Email Me</a>
      </section>
  );
};

export default ContactMe;