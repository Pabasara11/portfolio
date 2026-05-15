import React from 'react';
import { skills } from '../data/portfolioData';
import SectionHeader from './SectionHeader';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <SectionHeader tag="Skills" title="Tools &amp; <em>Technologies</em>" />
        <div className="skills-grid">
          {skills.map((group, i) => (
            <div className="skill-card fade-in" key={i}>
              <div className="skill-category">{group.category}</div>
              <div className="skill-pills">
                {group.items.map((item, j) => (
                  <span className="pill" key={j}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
