import React from 'react';
import { projects } from '../../data/resumeData';
import './Projects.css';

/* Tags listed here render in cyan; all others in green */
const CYAN_TAGS = new Set(['JavaScript','HTML/CSS','HTML/CSS/JS','PHP','Apache2','Java','.NET']);

function Projects() {
  return (
    <section id="projects">
      <div className="section-wrapper">
        <div className="reveal">
          <div className="section-title">Projects</div>
          <div className="section-sub"> CODE I'VE SHIPPED</div>
        </div>

        <div className="proj-grid reveal">
          {projects.map(p => (
            <div className="proj-card" key={p.id}>
              <div className="proj-num">PROJECT_{p.id}  {p.period}</div>
              <div className="proj-title">{p.title}</div>
              <p className="proj-desc">{p.desc}</p>

              <div className="proj-tags">
                {p.tags.map(t => (
                  <span key={t} className={`tag${CYAN_TAGS.has(t) ? ' cyan' : ''}`}>{t}</span>
                ))}
              </div>

              <div className="proj-btns">
                <a href={p.github} target="_blank" rel="noreferrer" className="proj-btn gh">⌥ GitHub</a>
                <a href={p.demo}   target="_blank" rel="noreferrer" className="proj-btn demo">▶ Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
