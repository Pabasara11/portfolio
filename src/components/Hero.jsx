import React from 'react';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

const photo = "/photo-new.png";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="grid-overlay" />

      <div className="hero-left">
        <div className="hero-eyebrow hero-anim hero-anim--1">{personalInfo.subtitle}</div>

        <h1 className="hero-name hero-anim hero-anim--2">
          Paba<em>sara</em><br />Rajapaksha
        </h1>

        <p className="hero-subtitle hero-anim hero-anim--3">{personalInfo.title}</p>

        <p className="hero-desc hero-anim hero-anim--4">{personalInfo.bio1}</p>

        <div className="hero-cta hero-anim hero-anim--5">
          <a href="#projects" className="btn-primary">View Projects →</a>
          <a href="#contact" className="btn-outline">Get in Touch</a>
        </div>
      </div>

      <div className="hero-right hero-anim hero-anim--6">
        <div className="hero-img-wrap">
          <img src={photo} alt="Pabasara Rajapaksha" className="hero-photo hero-float" />
        </div>
      </div>
    </section>
  );
};

export default Hero;