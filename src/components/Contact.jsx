import React from 'react';
import { personalInfo } from '../data/portfolioData';
import SectionHeader from './SectionHeader';
import './Contact.css';

const contactItems = [
  { icon: '✉', label: 'Email', getValue: (p) => p.email, getHref: (p) => `https://mail.google.com/mail/?view=cm&to=${p.email}` },
  { icon: '☎', label: 'Phone', getValue: (p) => p.phone, getHref: (p) => `tel:${p.phone.replace(/\s/g,'')}` },
  { icon: '⌥', label: 'GitHub', getValue: (p) => 'github.com/Pabasara11', getHref: (p) => p.github },
  { icon: 'in', label: 'LinkedIn', getValue: () => 'Pabasara Rajapaksha', getHref: (p) => p.linkedin },
];

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="fade-in">
            <div className="section-tag-sm">Contact</div>
            <h2 className="contact-big">
              Let's work<br /><em>together.</em>
            </h2>
            <p className="contact-desc">
              I'm eager to contribute my skills to real-world projects and further develop my expertise in the IT field. Feel free to reach out!
            </p>
          </div>
          <div className="contact-links fade-in">
            {contactItems.map(({ icon, label, getValue, getHref }) => (
              <a
                href={getHref(personalInfo)}
                className="contact-link"
                key={label}
                target={label === 'Email' || label === 'GitHub' || label === 'LinkedIn' ? '_blank' : undefined}
                rel="noreferrer"
              >
                <div className="contact-link-icon">{icon}</div>
                <div className="contact-link-text">
                  <div className="cl-label">{label}</div>
                  <div className="cl-value">{getValue(personalInfo)}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;