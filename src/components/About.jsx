import React from 'react';
import { personalInfo, education } from '../data/portfolioData';
import SectionHeader from './SectionHeader';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <SectionHeader tag="About Me" title="Driven by <em>curiosity,</em><br/>built by experience." />
        <div className="about-grid">
          <div className="fade-in">
            <div className="about-text">
              <p>{personalInfo.bio1}</p>
              <p>{personalInfo.bio2}</p>
            </div>
            {/* <div className="about-details">
              {[
                { label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { label: 'Phone', value: personalInfo.phone },
                { label: 'Location', value: personalInfo.location },
                { label: 'GitHub', value: '@Pabasara11', href: personalInfo.github },
                { label: 'LinkedIn', value: 'Pabasara Rajapaksha', href: personalInfo.linkedin },
              ].map(({ label, value, href }) => (
                <div className="detail-row" key={label}>
                  <span className="detail-label">{label}</span>
                  <span className="detail-value">
                    {href ? <a href={href} target="_blank" rel="noreferrer">{value}</a> : value}
                  </span>
                </div>
              ))}
            </div> */}
          </div>
          <div className="fade-in">
            <div className="edu-card">
              <div className="edu-school">{education.school}</div>
              <div className="edu-degree">{education.degree}</div>
              <div className="edu-duration">{education.duration}</div>
              <div className="edu-modules">{education.modules}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
