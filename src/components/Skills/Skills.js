import React, { useEffect, useRef, useState } from 'react';
import { skillCategories } from '../../data/resumeData';
import './Skills.css';

function SkillBar({ pct }) {
  const [w, setW] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTimeout(() => setW(pct), 300); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [pct]);

  return (
    <div className="skill-bar-bg" ref={ref}>
      <div className="skill-bar" style={{ width: `${w}%` }} />
    </div>
  );
}

function Skills() {
  return (
    <section id="skills">
      <div className="section-wrapper">
        <div className="reveal">
          <div className="section-title">Skills</div>
          <div className="section-sub"> TECHNICAL ARSENAL</div>
        </div>

        <div className="skills-grid reveal">
          {skillCategories.map((cat, i) => (
            <div className="skill-cat" key={i}>
              <div className="skill-cat-title">{cat.title}</div>
              {cat.skills.map((sk, j) => (
                <div className="skill-item" key={j}>
                  <div className="skill-top">
                    <span className="skill-name">{sk.name}</span>
                    <span className="skill-pct">{sk.pct}%</span>
                  </div>
                  <SkillBar pct={sk.pct} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
