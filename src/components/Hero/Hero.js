import React, { useEffect, useState } from 'react';
import { FiMail, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi';
import { personalInfo, typingPhrases } from '../../data/resumeData';
import './Hero.css';

function Hero() {
  const [text,   setText]   = useState('');
  const [pIdx,   setPIdx]   = useState(0);
  const [cIdx,   setCIdx]   = useState(0);
  const [del,    setDel]    = useState(false);

  useEffect(() => {
    const phrase = typingPhrases[pIdx];
    let t;
    if (!del) {
      t = setTimeout(() => {
        setText(phrase.substring(0, cIdx + 1));
        if (cIdx + 1 === phrase.length) { setTimeout(() => setDel(true), 1500); }
        else setCIdx(c => c + 1);
      }, 90);
    } else {
      t = setTimeout(() => {
        setText(phrase.substring(0, cIdx - 1));
        if (cIdx - 1 === 0) { setDel(false); setPIdx(p => (p + 1) % typingPhrases.length); }
        setCIdx(c => Math.max(0, c - 1));
      }, 60);
    }
    return () => clearTimeout(t);
  }, [cIdx, del, pIdx]);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-inner">

        {/* Avatar ring */}
        <div className="avatar-ring">
          <div className="avatar-inner">
            { <img src="/images/photo.jpg" alt="Nafees" />}
          </div>
        </div>

        <h1 className="hero-name">
          NAFEES <span>AHEMAD</span>
        </h1>
        <p className="hero-title">&gt; {personalInfo.title}_</p>

        <div className="typing-wrap">
          <span>{text}</span><span className="cursor">|</span>
        </div>

        <p className="hero-bio">{personalInfo.bio}</p>

        <div className="btn-group">
          <a href="#contact" className="btn btn-primary">&gt; Hire Me</a>
          <a href={personalInfo.resumePdf} download className="btn btn-secondary">&gt; Download CV</a>
        </div>

        <div className="social-row">
          <a href={`mailto:${personalInfo.email}`}   title="Email"><FiMail /></a>
          <a href={personalInfo.github}  target="_blank" rel="noreferrer" title="GitHub"><FiGithub /></a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" title="LinkedIn"><FiLinkedin /></a>
          <a href={`tel:${personalInfo.phone}`} title="Phone"><FiPhone /></a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
