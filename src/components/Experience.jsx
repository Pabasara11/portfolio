import React from 'react';
import { experience } from '../data/portfolioData';
import SectionHeader from './SectionHeader';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <SectionHeader tag="Work Experience" title="Where I've <em>Worked</em>" />
        {experience.map((job, i) => (
          <div className="exp-card fade-in" key={i}>
            <div className="exp-header">
              <div>
                <div className="exp-role">{job.role}</div>
                <div className="exp-company">{job.company}</div>
              </div>
              <div className="exp-date">{job.duration}</div>
            </div>
            <ul className="exp-list">
              {job.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
