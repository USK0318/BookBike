import React from 'react';
import '../styles/About.css';

const About = () => {
  const aboutText = `Triumph Motorcycles Ltd is the largest UK-owned motorcycle manufacturer, established in 1983 by John Bloor after the original company Triumph Engineering went into receivership. The new company, initially called Bonneville Coventry Ltd, continued Triumph's lineage of motorcycle production since 1902. They have major manufacturing facilities in Thailand.
  Triumph Motorcycles Ltd is the largest UK-owned motorcycle manufacturer, established in 1983 by John Bloor after the original company Triumph Engineering went into receivership. The new company, initially called Bonneville Coventry Ltd, continued Triumph's lineage of motorcycle production since 1902. They have major manufacturing facilities in Thailand.
  Triumph Motorcycles Ltd is the largest UK-owned motorcycle manufacturer, established in 1983 by John Bloor after the original company Triumph Engineering went into receivership. The new company, initially called Bonneville Coventry Ltd, continued Triumph's lineage of motorcycle production since 1902. They have major manufacturing facilities in Thailand.`;

  return (
    <div className='about-container'>
      <div className='about-content'>
        <h1 className='about-heading'>About Us</h1>
        <p className='about-text'>{aboutText}</p>
      </div>
    </div>
  );
};

export default About;
