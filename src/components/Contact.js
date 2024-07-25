import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>/contact</h2>
      <div className="contact-card">
        <div className="contact-info">
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <a href="mailto:mohameddarbi99@gmail.com">mohameddarbi99@gmail.com</a>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <span>306-540-9067</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
