import React, { useEffect, useRef, useState } from 'react';
import { personalInfo } from '../../data/resumeData';
import './About.css';

function CountUp({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref     = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let cur = 0;
        const step = Math.ceil(target / 60);
        const id   = setInterval(() => {
          cur = Math.min(cur + step, target);
          setCount(cur);
          if (cur >= target) clearInterval(id);
        }, 28);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function About() {
  return (
    <section id="about">
      <div className="section-wrapper">
        <div className="reveal">
          <div className="section-title">About Me</div>
          <div className="section-sub"> WHO AM I</div>
        </div>

        <div className="about-grid reveal">
          {/* Bio text */}
          <div className="about-text">
            {personalInfo.aboutParagraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
            <p>📍 {personalInfo.location} &nbsp;|&nbsp; 📞 {personalInfo.phone}</p>
          </div>

          {/* Stat cards */}
          <div className="stat-cards">
            {personalInfo.stats.map(s => (
              <div className="stat-card" key={s.id}>
                <div className="stat-num">
                  <CountUp target={s.target} suffix={s.suffix} />
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
