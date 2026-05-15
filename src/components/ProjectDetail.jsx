import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/portfolioData';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const index = projects.findIndex((p) => p.id === id);
  const project = projects[index];

  const prev = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;

  const [lightbox, setLightbox] = useState(null); // index of open image, or null

  useEffect(() => {
    if (!project) navigate('/');
  }, [project, navigate]);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setLightbox((i) => Math.min(i + 1, project.screenshots.length - 1));
      if (e.key === 'ArrowLeft') setLightbox((i) => Math.max(i - 1, 0));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, closeLightbox, project]);

  if (!project) return null;

  const isYouTube = project.video && project.video.includes('youtube.com/embed');
  const isGoogleDrive = project.video && project.video.includes('drive.google.com');
  const hasVideo = project.video && project.video !== 'Not available';

  return (
    <div className="pd-page">

      {/* ── Top nav bar ───────────────────────────────────────── */}
      <nav className="pd-nav">
        <Link to="/#projects" className="pd-back">
          ← Back to Projects
        </Link>
        <span className="pd-nav-title">{project.num} / {projects.length.toString().padStart(2, '0')}</span>
      </nav>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <header className="pd-hero">
        <div className="pd-hero-bg-num">{project.num}</div>
        <div className="pd-hero-inner">
          <div className="pd-eyebrow">
            <span className="pd-tag">{project.type}</span>
            <span className="pd-year">{project.year}</span>
          </div>
          <h1 className="pd-title">{project.name}</h1>
          <div className="pd-tech-row">
            {project.tech.map((t, i) => (
              <span className="pd-tech-pill" key={i}>{t}</span>
            ))}
          </div>
        </div>
      </header>

      <div className="pd-container">

        {/* ── Overview ──────────────────────────────────────────── */}
        <section className="pd-overview">
          <div className="pd-overview-main">
            <div className="pd-section-label">Overview</div>
            <p className="pd-full-desc">{project.fullDesc}</p>
          </div>
          <div className="pd-overview-meta">
            <div className="pd-meta-card">
              <div className="pd-meta-row">
                <span className="pd-meta-label">Role</span>
                <span className="pd-meta-value">{project.role}</span>
              </div>
              <div className="pd-meta-row">
                <span className="pd-meta-label">Type</span>
                <span className="pd-meta-value">{project.type}</span>
              </div>
              <div className="pd-meta-row">
                <span className="pd-meta-label">Year</span>
                <span className="pd-meta-value">{project.year}</span>
              </div>
              <div className="pd-meta-divider" />
              {project.github && (
                <a
                  href={project.github}
                  className="pd-link-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="pd-link-btn-icon">⌥</span>
                  View on GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className="pd-link-btn pd-link-btn--live"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="pd-link-btn-icon">↗</span>
                  {project.liveUrl.includes('figma.com') ? 'View Figma Prototype' : 'Live Demo'}
                </a>
              )}
              {!project.github && !project.liveUrl && (
                <span className="pd-no-link">No public link available</span>
              )}
            </div>
          </div>
        </section>

        {/* ── Features / How it works ───────────────────────────── */}
        {project.features && project.features.length > 0 && (
          <section className="pd-features">
            <div className="pd-section-label">How It Works</div>
            <div className="pd-features-grid">
              {project.features.map((f, i) => (
                <div className="pd-feature-card" key={i}>
                  <div className="pd-feature-num">0{i + 1}</div>
                  <div className="pd-feature-title">{f.title}</div>
                  <div className="pd-feature-desc">{f.desc}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Screenshots ───────────────────────────────────────── */}
        <section className="pd-screenshots">
          <div className="pd-section-label">Screenshots</div>
          {project.screenshots && project.screenshots.length > 0 ? (
            <div className="pd-screenshots-grid">
              {project.screenshots.map((src, i) => (
                <div
                  className="pd-screenshot-wrap"
                  key={i}
                  onClick={() => setLightbox(i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setLightbox(i)}
                >
                  <img src={src} alt={`${project.name} screenshot ${i + 1}`} className="pd-screenshot-img" />
                  <div className="pd-screenshot-overlay">
                    <span className="pd-screenshot-zoom">⊕</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="pd-screenshots-placeholder">
              <div className="pd-placeholder-icon">📷</div>
              <div className="pd-placeholder-text">Screenshots coming soon</div>
              <div className="pd-placeholder-sub">Add image paths to <code>portfolioData.js → screenshots[]</code></div>
            </div>
          )}
        </section>

        {/* ── Video ─────────────────────────────────────────────── */}
        {hasVideo && (
          <section className="pd-video">
            <div className="pd-section-label">Demo Video</div>
            {isGoogleDrive ? (
              <div className="pd-video-link-wrap">
                <a
                  href={project.video}
                  className="pd-link-btn pd-link-btn--video"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="pd-link-btn-icon">▶</span>
                  Watch Demo on Google Drive
                </a>
              </div>
            ) : isYouTube ? (
              <div className="pd-video-wrap">
                <iframe
                  src={project.video}
                  title={project.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="pd-video-frame"
                />
              </div>
            ) : (
              <div className="pd-video-wrap">
                <video controls className="pd-video-player">
                  <source src={project.video} />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </section>
        )}

        {/* ── Prev / Next navigation ────────────────────────────── */}
        <nav className="pd-sibling-nav">
          {prev ? (
            <Link to={`/project/${prev.id}`} className="pd-sibling pd-sibling--prev">
              <span className="pd-sibling-label">← Previous</span>
              <span className="pd-sibling-name">{prev.name}</span>
            </Link>
          ) : <div />}
          {next ? (
            <Link to={`/project/${next.id}`} className="pd-sibling pd-sibling--next">
              <span className="pd-sibling-label">Next →</span>
              <span className="pd-sibling-name">{next.name}</span>
            </Link>
          ) : <div />}
        </nav>

      </div>

      {/* ── Lightbox ──────────────────────────────────────────── */}
      {lightbox !== null && (
        <div className="pd-lightbox" onClick={closeLightbox}>
          <button className="pd-lightbox-close" onClick={closeLightbox}>✕</button>

          {lightbox > 0 && (
            <button
              className="pd-lightbox-arrow pd-lightbox-arrow--prev"
              onClick={(e) => { e.stopPropagation(); setLightbox((i) => i - 1); }}
            >
              ‹
            </button>
          )}

          <div className="pd-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img
              src={project.screenshots[lightbox]}
              alt={`${project.name} screenshot ${lightbox + 1}`}
              className="pd-lightbox-img"
            />
            <div className="pd-lightbox-counter">
              {lightbox + 1} / {project.screenshots.length}
            </div>
          </div>

          {lightbox < project.screenshots.length - 1 && (
            <button
              className="pd-lightbox-arrow pd-lightbox-arrow--next"
              onClick={(e) => { e.stopPropagation(); setLightbox((i) => i + 1); }}
            >
              ›
            </button>
          )}
        </div>
      )}

    </div>
  );
};

export default ProjectDetail;
