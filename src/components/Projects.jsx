import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/portfolioData';
import SectionHeader from './SectionHeader';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <SectionHeader tag="Projects" title="Things I've <em>Built</em>" />
        <div className="projects-grid">
          {projects.map((project, i) => (
            <Link
              to={`/project/${project.id}`}
              className={`project-card fade-in ${project.wide ? 'wide' : ''}`}
              key={i}
            >
              <div className="project-num">{project.num}</div>
              <div className="project-name">{project.name}</div>
              <div className="project-desc">{project.desc}</div>
              <div className="project-footer">
                <div className="project-tech">
                  {project.tech.map((t, j) => (
                    <span className="tech-tag" key={j}>{t}</span>
                  ))}
                </div>
                <span className="project-view-hint">View Details →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;