import React from 'react';
import './SectionHeader.css';

const SectionHeader = ({ tag, title }) => {
  return (
    <div className="section-header fade-in">
      <div className="section-tag">{tag}</div>
      <h2
        className="section-title"
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </div>
  );
};

export default SectionHeader;
