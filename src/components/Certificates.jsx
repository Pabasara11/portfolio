import React, { useState } from 'react';
import { certificates } from '../data/portfolioData';
import SectionHeader from './SectionHeader';
import './Certificates.css';

// Build grouped structure: { "AWS": [...], "Microsoft Azure": [...], ... }
const grouped = certificates.reduce((acc, cert) => {
  const key = cert.category || 'Other';
  if (!acc[key]) acc[key] = [];
  acc[key].push(cert);
  return acc;
}, {});

const categoryIcons = {
  "AWS": "☁",
  "Microsoft Azure": "🔷",
  "Microsoft Learn": "⚡",
  "FractalX": "🔧",
};

const Certificates = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggle = (category) => {
    setOpenCategory(prev => prev === category ? null : category);
  };

  return (
    <section id="certs" className="certs-section">
      <div className="container">
        <SectionHeader tag="Certifications" title="Credentials &amp; <em>Badges</em>" />

        <div className="cert-accordion">
          {Object.entries(grouped).map(([category, certs]) => {
            const isOpen = openCategory === category;
            return (
              <div className={`cert-accordion-item ${isOpen ? 'open' : ''}`} key={category}>

                {/* ── Clickable header row ── */}
                <button className="cert-accordion-trigger" onClick={() => toggle(category)}>
                  <div className="cert-trigger-left">
                    <span className="cert-trigger-icon">{categoryIcons[category] || '🏅'}</span>
                    <span className="cert-trigger-label">{category}</span>
                    <span className="cert-trigger-count">{certs.length}</span>
                  </div>
                  <span className={`cert-trigger-chevron ${isOpen ? 'rotated' : ''}`}>▼</span>
                </button>

                {/* ── Expandable cards panel ── */}
                <div className="cert-panel">
                  <div className="cert-panel-inner">
                    <div className="certs-grid">
                      {certs.map((cert, i) => (
                        <a
                          className="cert-card"
                          key={i}
                          href={cert.file}
                          target="_blank"
                          rel="noreferrer"
                          title={`View: ${cert.name}`}
                          style={{ animationDelay: `${i * 0.06}s` }}
                        >
                          <div className="cert-icon">{cert.icon}</div>
                          <div className="cert-body">
                            <div className="cert-name">{cert.name}</div>
                            <div className="cert-issuer">{cert.issuer}</div>
                          </div>
                          <div className="cert-arrow">↗</div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certificates;